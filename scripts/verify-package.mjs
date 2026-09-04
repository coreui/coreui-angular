#!/usr/bin/env node

import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const ENTRY_FIELDS = ['main', 'module', 'browser', 'types', 'typings', 'esm2022', 'fesm2022', 'es2020'];

function declaredPaths(pkg) {
  const paths = new Set();

  for (const field of ENTRY_FIELDS) {
    if (typeof pkg[field] === 'string') {
      paths.add(pkg[field]);
    }
  }

  const walk = (value) => {
    if (typeof value === 'string') {
      if (value.startsWith('./')) {
        paths.add(value);
      }
      return;
    }
    if (value && typeof value === 'object') {
      Object.values(value).forEach(walk);
    }
  };
  walk(pkg.exports);

  return [...paths].map((path) => path.replace(/^\.\//, ''));
}

function packedFiles(dir) {
  // npm is a .cmd on Windows, and Node refuses to spawn those without a shell
  const windows = process.platform === 'win32';
  const npm = windows ? 'npm.cmd' : 'npm';
  const output = execFileSync(npm, ['pack', '--dry-run', '--json'], {
    cwd: dir,
    encoding: 'utf8',
    shell: windows
  });
  return new Set(JSON.parse(output)[0].files.map(({ path }) => path));
}

function verify(name) {
  const dir = resolve('dist', name);

  if (!existsSync(resolve(dir, 'package.json'))) {
    console.error(`✖ ${name}: not built, run the build first (${dir})`);
    return false;
  }

  const pkg = JSON.parse(readFileSync(resolve(dir, 'package.json'), 'utf8'));
  const declared = declaredPaths(pkg);

  if (declared.length === 0) {
    console.error(`✖ ${name}: no entry points declared, nothing to verify`);
    return false;
  }

  const packed = packedFiles(dir);
  const missing = declared.filter((path) => !packed.has(path));

  if (missing.length > 0) {
    console.error(`✖ ${pkg.name}@${pkg.version}: declared but not packed`);
    missing.forEach((path) => console.error(`    ${path}`));
    return false;
  }

  console.log(`✔ ${pkg.name}@${pkg.version}: ${declared.length} entry points packed`);
  return true;
}

const names = process.argv.slice(2);

if (names.length === 0) {
  console.error('usage: verify-package.mjs <dist package name> [...]');
  process.exit(1);
}

process.exit(names.every(verify) ? 0 : 1);

import { chain, Rule, SchematicContext, SchematicsException, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { addPackageToPackageJson, getPackageVersionFromPackageJson, PackageJson } from './package-config';
import * as pkgJson from '../../package.json';

const addCoreUIIconsAngular = (): Rule => {
  return (tree: Tree, context: SchematicContext) => {
    context.logger.info(`Installing @coreui/icons-angular as dependency`);
    context.addTask(new NodePackageInstallTask({ packageName: '@coreui/icons-angular' }));
    return tree;
  };
};

const addCoreUIAngular = (): Rule => {
  return (tree: Tree, context: SchematicContext) => {
    context.logger.info(`Installing @coreui/angular as dependency`);
    context.addTask(new NodePackageInstallTask());
    return tree;
  };
};

export function ngAdd(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    context.logger.info(``);
    context.logger.info('Installing @coreui/angular dependencies...');
    const ngCoreVersionTag = getPackageVersionFromPackageJson(tree, '@angular/core');
    context.logger.info(`@angular/core version ${ngCoreVersionTag}`);
    if (!ngCoreVersionTag) {
      throw new SchematicsException('@angular/core version not found');
    }
    const projDeps = ['@angular/animations', '@angular/common', '@angular/core', '@angular/router'];
    projDeps.forEach((dep) => {
      addPackageToPackageJson(tree, dep, ngCoreVersionTag);
    });

    const pkg = pkgJson as PackageJson;
    const libPeerDeps: string[] = ['@angular/cdk', '@coreui/coreui'];
    libPeerDeps.forEach((dep: string) => {
      const version = pkg.peerDependencies[dep];
      context.logger.info(`Including ${dep} version ${version}`);
      addPackageToPackageJson(tree, dep, version);
    });
    const libDeps: string[] = ['@popperjs/core'];
    libDeps.forEach((dep: string) => {
      const version = pkg.dependencies[dep];
      context.logger.info(`Including ${dep} version ${version}`);
      addPackageToPackageJson(tree, dep, version);
    });

    return chain([addCoreUIIconsAngular(), addCoreUIAngular()]);
  };
}

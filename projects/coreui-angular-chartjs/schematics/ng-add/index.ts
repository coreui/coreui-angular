import { chain, Rule, SchematicContext, SchematicsException, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { addPackageToPackageJson, getPackageVersionFromPackageJson, PackageJson } from './package-config';
import * as pkgJson from '../../package.json';

export function addCoreUIAngularChartJs(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    context.logger.info('Installing @coreui/angular-chartjs ...');
    context.addTask(new NodePackageInstallTask());
    return tree;
  };
}

export function ngAdd(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    context.logger.info(``);
    context.logger.info('Installing @coreui/angular-chartjs dependencies...');
    const ngCoreVersionTag = getPackageVersionFromPackageJson(tree, '@angular/core');
    context.logger.info(`@angular/core version ${ngCoreVersionTag}`);
    if (!ngCoreVersionTag) {
      throw new SchematicsException('@angular/core version not found');
    }
    const pkg = pkgJson as PackageJson;
    const libPeerDeps: string[] = ['@coreui/chartjs', 'chart.js'];
    libPeerDeps.forEach((dep: string) => {
      const version = pkg.peerDependencies[dep];
      context.logger.info(`Including ${dep} version ${version}`);
      addPackageToPackageJson(tree, dep, version);
    });
    const libDeps: string[] = ['lodash-es'];
    libDeps.forEach((dep: string) => {
      const version = pkg.dependencies[dep];
      context.logger.info(`Including ${dep} version ${version}`);
      addPackageToPackageJson(tree, dep, version);
    });

    return chain([addCoreUIAngularChartJs()]);
  };
}

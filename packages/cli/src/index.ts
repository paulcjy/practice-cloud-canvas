#!/usr/bin/env node
import { Command } from 'commander';
import chalk from 'chalk';

// Get package version from package.json
const version = process.env.npm_package_version || '0.0.0';

const program = new Command();

program.name('cloud-canvas').description('Cloud Canvas CLI').version(version);

program
    .command('start')
    .description('Start the Cloud Canvas server')
    .option('-p, --port <port>', 'Port to run the server on', '3000')
    .action(async (options) => {
        try {
            console.log(chalk.blue('Starting Cloud Canvas server...'));
            console.log(
                chalk.green(
                    `Server will be available at http://localhost:${options.port}`
                )
            );

            await import('./server/index.js');
        } catch (error) {
            console.error(chalk.red('Failed to start server:'), error);
            process.exit(1);
        }
    });

program
    .command('build')
    .description('Build the Cloud Canvas server')
    .action(async () => {
        try {
            console.log(chalk.blue('Building Cloud Canvas server...'));
            console.log('hello world it is build');

            // await import('@cloud-canvas/server/build');
        } catch (error) {
            console.error(chalk.red('Failed to build server:'), error);
            process.exit(1);
        }
    });

program.parse();

import express from 'express';
import logger from 'morgan';
import path from 'node:path';
import chalk from 'chalk';
import { api as apiRouter } from './api';

const port = process.env.PORT || 3000;

// const clientPath = require.resolve('@cloud-canvas/client/package.json');
// const clientDistPath = path.resolve(path.dirname(clientPath), 'dist');

const clientDistPath = path.join(__dirname, '../client');

const app = express();

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static(clientDistPath));

// Client
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: clientDistPath });
});

// API
app.use('/api', apiRouter);

app.listen(port, () => {
    console.log(chalk.greenBright(`\n  Server listening on port ${port}\n`));
    console.log(
        chalk.whiteBright('  - Local:'),
        chalk.cyanBright(`http://localhost:${port}`)
    );
    console.log(
        chalk.whiteBright('  - Client path:'),
        chalk.blueBright(path.relative(process.cwd(), clientDistPath))
    );
});

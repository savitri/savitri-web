const Fs = require('fs');
const Path = require('path');
const Webpack = require('webpack');


const files = [];
const nodeModules = {};

const getFilesAndSubdirectories = (dir) => {

    Fs.readdirSync(dir)
        .forEach((item) => {

            const fqn = `${dir}/${item}`;
            const fqFileName = fqn.replace('./node_modules/', '');

            const stat = Fs.statSync(fqn);
            if (stat.isDirectory()) {
                files.push(fqFileName);
                getFilesAndSubdirectories(fqn);
            }
            else if (stat.isFile() && Path.extname(fqn).substring(1) === 'js') {
                files.push(fqFileName.replace('.js', ''));
            }
        });
};

getFilesAndSubdirectories('./node_modules');

files.forEach((file) => {

    nodeModules[file] = `commonjs ${file}`;
});


module.exports = {
    entry: [
        './src/server/prodServer'
    ],
    target: 'node',
    externals: nodeModules,
    output: {
        path: Path.join(__dirname, 'build'),
        filename: 'serverBundle.js'
    },
    plugins: [
        new Webpack.optimize.OccurenceOrderPlugin(),
        new Webpack.DefinePlugin({
            process: {
                env: {
                    NODE_ENV: JSON.stringify(process.env.NODE_ENV)
                }
            }
        })
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                loader: 'babel',
                include: [
                    Path.resolve(__dirname, 'src')
                ],
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    resolve: {
        modulesDirectories: [
            'node_modules',
            'shared'
        ]
    }
};

import * as path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

interface WebpackDevServerConfigurationV4 extends WebpackDevServerConfiguration {
    static?: string;
}

interface Configuration extends WebpackConfiguration {
    devServer?: WebpackDevServerConfigurationV4;
}

const config: Configuration = {
    mode: process.env.NODE_ENV === 'prod' ? 'production' : 'development',
    entry: path.resolve(__dirname, 'src/index.ts'),
    target: 'web',
    output: {
        path: path.resolve('build'),
        filename: '[name].[contenthash].js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/templates/html/index.html'),
            title: 'typescript-template',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['ts-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    devServer: {
        port: 3000,
        static: path.resolve(__dirname, 'build'),
        compress: true,
        hot: true,
    },
};

export default config;

const path = require('path')
const config = {
    entry: './src/main.js',
    output: {
        filename: 'wywordcloud.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'wywordcloud',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: '/node_module/' // 排除在外
            },
            {
                test: require.resolve('./src/wordcloud2.js'),
                loader: 'imports-loader?this=>window'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    resolve: {
        alias: {
            wordcloud2: '/src/wordcloud2.js'
        }
    }
}
module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        config.devtool = 'source-map';
    }

    if (argv.mode === 'production') {
        config.output.filename = 'wywordcloud.min.js';
        config.optimization = {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        name: "commons",
                        chunks: "initial",
                        minChunks: 2
                    }
                }
            }
        }
    }
    return config;
}
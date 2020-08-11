module.exports = {
    mode: "none",
    entry: "./src/index.js",
    output: {
        filename: "compiled.js",
        publicPath: "/dist/"
    },
    resolve: {
        modules: ['node_modules']
    },
}

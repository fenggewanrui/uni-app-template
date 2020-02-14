const webpackApiMocker = require('mocker-api')
const path = require('path')

module.exports = {
    devServer: {
        before (app) {
            webpackApiMocker(app, path.resolve('./mock/index.js'))
        },
        proxy: {
            "/api": {
                target: "https://www.npmjs.com/package/mocker-api",
                changeOrigin: true
            }
        },
    }
}
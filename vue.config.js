const path = require('path');

module.exports = {
    outputDir: path.resolve(__dirname, '../Projektuppgift/projektbackend/public'),
    devServer: {
        proxy: {
            '/api': {
                target: 'https://intense-basin-16922.herokuapp.com'
            }
        }
    }
}
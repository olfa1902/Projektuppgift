const path = require('path');

module.exports = {
    outputDir: path.resolve(__dirname, '../Projektuppgift/projektbackend/public'),
    devServer: {
        proxy: {
            '/api': {
                target: 'https://glacial-reaches-15223.herokuapp.com'
            }
        }
    }
}
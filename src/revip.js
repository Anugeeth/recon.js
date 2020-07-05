const https = require('https');

const revip = (url) => {

    https.get(`https://api.hackertarget.com/reverseiplookup/?q=${url}`, (res) => {
        let data = '';
        res.on('data', (chunk) => {
            data += chunk;
        });
        res.on('end', () => {
            console.log(data);
        });
    })
        .on('error', (e) => {
            console.log(`ERROR : ${e.message}`)
        });
};

module.exports = {
    revip
}


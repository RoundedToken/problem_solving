const fs = require('fs');

const url = require('url');
const data = require('./data.json');

const ROOT = 'https://test.com';
const NOT_FOUND_PAGE = '<!DOCTYPE html><html><head/><body>Not found</body></html>';
const RETRY_PATH = '/b/e';

let totalRequests = 0;
async function fetcher(resource) {
    totalRequests += 1;
    if (totalRequests > 23) {
        fs.writeFileSync('./output.txt', JSON.stringify({ message: 'Too many requests' }, null, 2));
        process.exit(0);
    }
    var q = url.parse(resource, false);
    if (`${q.protocol}//${q.host}` !== ROOT) {
        throw new Error('getaddrinfo ENOTFOUND');
    }
    const pathname = q.pathname;

    if (pathname === RETRY_PATH) {
        data[pathname].status = 200;
    }

    if (!(pathname in data)) {
        return {
            status: 404,
            text: async () => NOT_FOUND_PAGE,
        };
    } else {
        return {
            status: data[pathname].status,
            text: async () => data[pathname].content,
        };
    }
}

module.exports = { fetcher };

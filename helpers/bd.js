const fs = require('fs');
const data = fs.readFileSync('./data/heroes.json','utf8');

module.exports = {
    data : JSON.parse(data)
}

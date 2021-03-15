const fs = require('fs');
const { arch } = require('os');

const guardarDB = (data) => {
    const archivo = './db/data.json';
    fs.writeFileSync(archivo, JSON.stringify(data));
};

module.exports = {
    guardarDB
}
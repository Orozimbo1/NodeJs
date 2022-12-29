const fs = require('fs').promises

module.exports = (caminho, dados, flag) => {
    fs.writeFile(caminho, dados, { flag: `${flag}` })
}


// require('colors');

// const { mostrarMenu, pausa } = require('./helpers/mensajes');
const { inquirerMenu, pausa } = require('./helpers/inquirer');

console.clear();

const main = async() => {
    console.log('Hola Mundo');

    let opt = '';

    do {
        opt = await inquirerMenu();
        console.log({ opt });

        await pausa();
        // if (opt !== '0')
        //     await pausa();
    } while (opt !== '0')

    // pausa();
}

main();
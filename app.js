// require('colors');

// const { mostrarMenu, pausa } = require('./helpers/mensajes');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
// const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

// console.clear();

const main = async() => {
    console.log('Hola Mundo');

    let opt = '';
    const tareas = new Tareas();

    do {
        opt = await inquirerMenu();
        // console.log({ opt });

        // const tareas = new Tareas();
        // const tarea = new Tarea('Comprar comida');

        // tareas._listado[tarea.id] = tarea;

        // console.log(tareas);

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripción:');
                // console.log(desc);
                tareas.crearTarea(desc);
                break;
            case '2':
                console.log(tareas._listado);
                break;
        }

        await pausa();
        // if (opt !== '0')
        //     await pausa();
    } while (opt !== '0')

    // pausa();
}

main();
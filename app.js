// require('colors');

// const { mostrarMenu, pausa } = require('./helpers/mensajes');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
// const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

// console.clear();

const main = async() => {
    //console.log('Hola Mundo');

    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();
    if (tareasDB) {
        //Establecer tareas
        tareas.cargarTareasFromArray(tareasDB);
    }

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
                console.log(tareas.listadoArr);
                break;
        }

        guardarDB(tareas.listadoArr);

        await pausa();
        // if (opt !== '0')
        //     await pausa();
    } while (opt !== '0')

    // pausa();
}

main();
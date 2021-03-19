// require('colors');

// const { mostrarMenu, pausa } = require('./helpers/mensajes');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar } = require('./helpers/inquirer');
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
                // console.log(tareas.listadoArr);
                tareas.listadoCompleto();
                break;
            case '3':
                tareas.listarPendientesCompletadas(true);
                break;
            case '4':
                tareas.listarPendientesCompletadas(false);
                break;
            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr);
                // console.log({ id });
                if (id !== '0') {
                    const ok = await confirmar('¿Esta seguro?');
                    // console.log({ ok });
                    if (ok) {
                        tareas.borrarTarea(id);
                        console.log('Tarea borrada');
                    }
                }
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
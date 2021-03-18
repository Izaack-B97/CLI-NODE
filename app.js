require('colors');

const { inquirerMenu, pausa } = require('./helpers/inquirer')
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

console.clear();

const main = async () => {

    let opt = '';

    do {
        opt = await inquirerMenu();
        console.log({ opt })
        
        console.log('\n');

        tareas._listado[ tarea.id ] = tarea;
        console.log( tareas );

        if ( opt !== '0' ) await pausa();

    } while ( opt !== '0' );
};

main();

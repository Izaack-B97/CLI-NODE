require('colors');

const { pausa } = require('./helpers/mensajes');
const { inquirerMenu } = require('./helpers/inquirer')

console.clear();

const main = async () => {

    let opt = '';

    do {
        opt = await inquirerMenu();
        console.log({ opt })
        
        opt !== '0' && await pausa();

    } while ( opt !== '0' );
};

main();

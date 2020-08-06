//Este arquivo permite a conexão com o banco de dados.

import knex from 'knex';
import path from 'path';

const db = knex({
    //Qual banco de dados será utilizado.
    client: 'sqlite3',
    //Onde ficará armazenada a base de dados.
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    //(Somente para o sqlite3) deixar como nulo os campos que não forem preenchidos
    useNullAsDefault: true, 
});

export default db;
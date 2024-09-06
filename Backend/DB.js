import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',     // Tu usuario de PostgreSQL
    password: 'jeik2245',  // Tu contraseña de PostgreSQL
    database: 'proyect_educa',  // Tu base de datos
    port: 5432,           // Puerto de PostgreSQL (el predeterminado es 5432)
});


export default pool;

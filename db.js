
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'popo_10_09_2026',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

try {
    const connection = await pool.getConnection();
    console.log('MySQL connection successful!');
    connection.release();
} catch (error) {
    console.error('Database connection failed:', error.message);
}

export default pool;

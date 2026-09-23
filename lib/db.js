import { Pool } from 'pg';

let pool;

if (!pool) {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    // Add SSL for remote databases (like Neon, Supabase, Render)
    ...(process.env.NODE_ENV === 'production' && {
      ssl: {
        rejectUnauthorized: false,
      },
    }),
  });
}

export default pool;

// Utility function to execute queries
export async function query(text, params) {
  const start = Date.now();
  try {
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log('Executed query', { text, duration, rows: res.rowCount });
    return res;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}


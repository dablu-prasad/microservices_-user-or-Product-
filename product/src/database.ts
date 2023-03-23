import { Pool } from 'pg'

export const dbConnection = new Pool({
    user: "dablu",
    host: "localhost",
    password: "dablu",
    database: "productdb",
    port: 5432
}
)
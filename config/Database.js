import {Sequelize} from "sequelize";

const db = new Sequelize('postgres', 'postgres', 'Thanhtung123!', {
    host: 'db.pcxpubgkjwkxkkqpecji.supabase.co',
    dialect: 'postgres',
  });

export default db;
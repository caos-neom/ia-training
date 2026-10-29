import Database from "better-sqlite3";
import { mkdirSync, readFileSync } from "node:fs";
import { dirname, isAbsolute, join, resolve } from "node:path";

const schema = readFileSync(join(process.cwd(), "src/lib/schema.sql"), "utf8");

export function createDatabase(databasePath: string): Database.Database {
  if (databasePath !== ":memory:") {
    const absolutePath = isAbsolute(databasePath)
      ? databasePath
      : resolve(process.cwd(), databasePath);
    mkdirSync(dirname(absolutePath), { recursive: true });
    databasePath = absolutePath;
  }

  const database = new Database(databasePath);
  database.pragma("foreign_keys = ON");
  database.exec(schema);
  return database;
}

let database: Database.Database | undefined;

export function getDatabase(): Database.Database {
  if (!database) {
    database = createDatabase(
      process.env.DATABASE_PATH ?? join(process.cwd(), "data", "sitech.sqlite"),
    );
  }
  return database;
}

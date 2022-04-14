import lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync";
import { nanoid } from "nanoid";

export type Task = {
  id?: string | number;
  name: string;
  description?: string;
  age?: string | number,
  username?: string;
  email?: string;
};

export type TaskSchema = { tasks: Task[] };

let db: lowdb.LowdbSync<TaskSchema>;

export const startConnection = () => {
  const adapter = new FileSync<TaskSchema>("db.json", {
    defaultValue: { tasks: [{ id: nanoid(), name: "john", description: 'just description', username: 'john11' }] },
  });
  db = lowdb(adapter);
  db.defaults({ tasks: [] }).write();
};

export const getConnection = () => db;

// getConnection().get("tasks").push();

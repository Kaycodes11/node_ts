import lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync";

type Task = {
  id: string | number;
  name: string;
  description?: string,
  username?: string;
  email?: string;
};

type Tasks = { tasks: Task[] };

let db: lowdb.LowSync<Tasks>;

export const startConnection = () => {
  const adapter = new FileSync<Tasks>("db.json", {
    defaultValue: { tasks: [{ id: 1, name: "john" }] },
  });
  db = lowdb(adapter);
  db.defaults({ tasks: [] }).write();
};

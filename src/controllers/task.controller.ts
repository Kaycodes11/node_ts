import { Handler, Request, Response, NextFunction } from "express";
import { nanoid } from "nanoid";
import { getConnection, Task } from "../db";

export const getTasks: Handler = async (req: Request, res: Response) => {
  const data = getConnection().get("tasks").value();
  res.status(200).json({ data });
};

export const createTasks: Handler = async (req: Request, res: Response) => {
  // const { name, description } = req.body as Task; // casting Task Type on req.body object
  const { name, description } = req.body;
  const newTask: Task = {
    id: nanoid(),
    name,
    description,
  };
  try {
    getConnection().get("tasks").push(newTask).write();
    res.json(newTask);
  } catch (error: any) {
    res.status(error.status || 500).json(error);
  }
};

export const getTask: Handler = async (req: Request, res: Response) => {
  try {
    const task = getConnection()
      .get("tasks")
      .find({ id: req.params.id })
      .value();
    if (!task) return res.status(404).json({ message: `no such task found` });
    res.json(task);
  } catch (error: any) {
    res.status(error.status || 500).json(error);
  }
};

export const count: Handler = (req: Request, res: Response) => {
  const totalTasks = getConnection().get("tasks").value().length;
  res.json(totalTasks);
};

export const deleteTask: Handler = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deletedTask = getConnection().get("tasks").remove({ id }).write();
    res.json({ deleteTask, message: `task removed` });
  } catch (error: any) {
    res.status(error.status || 500).json(error);
  }
};

export const updateTask: Handler = async (req: Request, res: Response) => {
  const task = getConnection().get("tasks").find({ id: req.params.id }).value();
  if (!task) return res.status(404).json({ message: `no such task found` });
  const updatedTask = getConnection()
    .get("tasks")
    .find({ id: req?.params?.id })
    .assign(req.body)
    .write();
  res.json(updateTask);
};

import { Handler, Request, Response, NextFunction } from "express";

export const getTasks: Handler = async (request: Request, response: Response) => {
  response.send("fetching tasks");
};

export const tasksCount: Handler = async (request: Request, response: Response) => {
  response.json({count: 'tasks counting'});
};

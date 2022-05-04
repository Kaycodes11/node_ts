import express, {Handler, Request, Response, NextFunction} from "express";
import {AppDataSource} from "../data-source";
import {User} from "../entity/user";

const userRepository = AppDataSource.getRepository(User);

export const getUsers: Handler = async (req: Request, res: Response): Promise<void> => {
    const users: User[] = await AppDataSource.manager.find(User);
    res.status(200).json(users);
}

export const getUserById: Handler = async (req: Request, res: Response): Promise<void> => {
    const user = await AppDataSource.getRepository(User).findOneBy({id: `06513c54-66a2-43c7-b067-4a999817b7e6`})
    res.status(200).json(user);
}

export  const seedUsers: Handler = async (request: Request, response: Response): Promise<void> => {
    await userRepository.createQueryBuilder().insert().into(User).values([{ firstName: "Jon", lastName: 'Moxley', email: 'moxley@gmail.com', age: 16 }, { firstName: "Jon1", lastName: 'Moxley1', email: 'moxley11@gmail.com', age: 16 }]).execute();
};

// now, here what validation to use > Entity validation or Dto Validation, let's try Entity Validation
export const signUp: Handler = async (request: Request, response: Response): Promise<void> => {
    const user: User = new User(); // or use the repository
    const userRepository = AppDataSource.getRepository(User);
    // userRepository.createQueryBuilder( )
    // userRepository.create()
    user.firstName = 'John';
    user.lastName = 'Johnson';
    user.email = "john1@gmail.com";
    user.age = 11;
    await AppDataSource.manager.save(user).then((resp: User): void => console.log(`RESP`, resp));
    response.status(201).json({message: `USer has successfully created`})
}

export const updateUser: Handler = async (request: Request, response: Response): Promise<void> => {
    const userToUpdate: User | null  = await userRepository.findOneBy({id: `06513c54-66a2-43c7-b067-4a999817b7e6`})
    // @ts-ignore
    userToUpdate?.firstName = 'Jones';
    // @ts-ignore
    await userRepository.save(userToUpdate);
}

export const deleteUser: Handler = async (request: Request, response: Response) => {
    const userToRemove = await userRepository.findOneBy({id: '06513c54-66a2-43c7-b067-4a999817b7e6'});
    // @ts-ignore
    await userRepository.remove(userToRemove);
}




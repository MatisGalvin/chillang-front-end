import { IProject } from "typings";

export interface IUser {
  username: string;
  encryptedPassword: string;
  projects: IProject[];
}

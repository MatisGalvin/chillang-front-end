import { IProject } from "./project.typing";

export interface IUser {
  username: string;
  encryptedPassword: string;
  projects: IProject[];
}

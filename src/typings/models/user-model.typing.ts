import { IProject } from "./project-model.typing";

export interface IUser {
  username: string;
  encryptedPassword: string;
  projects: IProject[];
}

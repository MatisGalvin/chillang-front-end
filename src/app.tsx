import { Workspace } from "./containers/Workspace/Workspace";
import { Sidebar } from "./containers/Sidebar/Sidebar";
import axios from "axios";
import { SERVER_URL } from "./config";
import { IUser } from "./interfaces/models/user.typing";
import { useState, useEffect } from "react";

export function App() {
  const [user, setUser] = useState<IUser>();
  useEffect(() => {
    axios
      .get<IUser>(`${SERVER_URL}/user/61e80f089810ec398b36e8f2`)
      .then((response) => {
        setUser(response.data);
      });
  }, []);

  return <>{user ? <Sidebar user={user} /> : <h1>Chargement</h1>}</>;
}

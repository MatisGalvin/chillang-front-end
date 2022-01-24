import axios from "axios";
import { useEffect, useState } from "react";
import { Page } from "../../components/Page/Page";
import { SERVER_URL } from "../../config/index";

function Sidebar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/user/61e80f089810ec398b36e8f2`)
      .then((response) => {
        console.log("response.data : ", response.data);
        setUser(response.data);
      });
  });

  return (
    <>
      <h1>Chillang sidebar</h1>
      <Page />
    </>
  );
}

export { Sidebar };

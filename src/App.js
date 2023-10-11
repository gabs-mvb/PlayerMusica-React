import { useState } from "react";
import api from "./api";
import "./html-css-template/css/style.css";
import "./html-css-template/css/reset.css";
import Musicas from "./Musica";

function App() {
  const [musicas, setMusicas] = useState([]);
  function listar() {
    api
      .get()
      .then((resp) => {
        setMusicas(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <Musicas/>
      musicas={musicas}
    </>
  );
}

export default App;

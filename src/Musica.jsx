import React from "react";
import ItemMusica from "./components/ItemMusica";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import api from "./api";

function Musicas() {
    const [musicas, setMusicas] = useState([]);

    useEffect(() => {
        listar();
    }, []);

    function listar() {
        api
            .get()
            .then((respostaObtida) => {
                console.log(respostaObtida);
                console.log(respostaObtida.status);
                console.log(respostaObtida.data);
                setMusicas(respostaObtida.data);
            })
            .catch((erroOcorrido) => {
                console.log(erroOcorrido);
            });
    }


    return (

        <>
            <Header />
            <div className="container">
                <div className="filter">
                    <button className="btn">Adicionar</button>
                </div>
            </div>
            <div className="container">
                <div className="music-boxes">
                    {musicas?.map((musica) => (
                            <ItemMusica
                                key={musica.id}
                                id={musica.id}
                                nome={musica.nome}
                                artista={musica.artista}
                                genero={musica.genero}
                                ano={musica.ano}
                                imagem={musica.imagem}
                            />
                    ))}
                </div>
            </div>

        </>
    )
}

export default Musicas;
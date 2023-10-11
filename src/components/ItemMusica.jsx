import React from "react";
import capaPadrao from "../html-css-template/imagens/capa.png";
import { useState } from "react";
import iconeEditar from "../html-css-template/imagens/edit-icon.png";
import iconeDeletar from "../html-css-template/imagens/delete-icon.png";
import api from "../api";


function ItemMusica(props) {
    const [editando, setEditando] = useState(false);

    const [inputAno, setInputAno] = useState(props.ano);
    const [inputNome, setInputNome] = useState(props.nome);
    const [inputGenero, setInputGenero] = useState(props.genero);
    const [inputArtista, setInputArtista] = useState(props.artista);
    const [inputImagem, setInputImagem] = useState(props.imagem);


    const estiloCard = {
        backgroundImage: `url(${props.imagem ? props.imagem : capaPadrao})`,
    }

    function atualizarMusica() {
        const corpoRequisicao = {
            nome: inputNome,
            artista: inputArtista,
            genero: inputGenero,
            ano: inputAno,
            imagem: inputImagem
        };
        api
            .put(`/${props.id}`, corpoRequisicao)
            .then((response) => {
                console.log("Resposta", response);
                alert("Música atualizada com sucesso!");
            })
            .catch((erro) => {
                alert("Erro ao atualizar música!");
                console.log("Erro", erro);
            });
        setEditando(false);
    }

    function deletarMusica() {
        api
            .delete(`/${props.id}`)
            .then((response) => {
                console.log("Resposta", response);
                alert("Música deletada com sucesso!");
            })
            .catch((erro) => {
                alert("Erro ao deletada música!");
                console.log("Erro", erro);
            });
    }


    return (
        <>
            <div style={estiloCard} className="card-music">

                <div className="icons">
                    <img
                        onClick={() => {
                            setEditando(true);
                        }}
                        src={iconeEditar}
                        alt="Ícone de editar"
                    />

                    <img
                        onClick={() => {
                            deletarMusica();
                        }}
                        src={iconeDeletar}
                        alt="Ícone de deletar"
                    />
                </div>
                <div className="info-music">
                    <p>
                        <strong className="card-title">música: </strong>
                        <input
                            type="text"
                            defaultValue={props.nome}
                            disabled={editando === false}
                            className={
                                editando ? "input-music-enable" : "input-music-disabled"
                            }
                            onChange={(e) => {
                                setInputNome(e.target.value);
                            }}
                        />
                    </p>
                    <p>
                        <strong className="card-title">artista: </strong>
                        <input
                            type="text"
                            defaultValue={props.artista}
                            disabled={editando === false}
                            className={
                                editando ? "input-music-enable" : "input-music-disabled"
                            }
                            onChange={(e) => {
                                setInputArtista(e.target.value);
                            }}
                        />
                    </p>
                    <p>
                        <strong className="card-title">categoria: </strong>
                        <input
                            type="text"
                            defaultValue={props.genero}
                            disabled={editando === false}
                            className={
                                editando ? "input-music-enable" : "input-music-disabled"
                            }
                            onChange={(e) => {
                                setInputGenero(e.target.value);
                            }}
                        />
                    </p>
                    <p>
                        <strong className="card-title">ano: </strong>
                        <input
                            type="text"
                            defaultValue={props.ano}
                            disabled={editando === false}
                            className={
                                editando ? "input-music-enable" : "input-music-disabled"
                            }
                            onChange={(e) => {
                                setInputAno(e.target.value);
                            }}
                        />
                    </p>
                    <p>
                        <strong className="card-title">Capa: </strong>
                        <input
                            type="text"
                            defaultValue={props.imagem}
                            disabled={editando === false}
                            className={
                                editando ? "input-music-enable" : "input-music-disabled"
                            }
                            onChange={(e) => {
                                setInputImagem(e.target.value);
                            }}
                        />
                    </p>

                    <button
                        onClick={() => {
                            atualizarMusica();
                        }}
                        className={editando ? "btn-salvar-enable" : "btn-salvar-disabled"}
                    >
                        Salvar
                    </button>
                </div>
            </div>
        </>
    );
}
export default ItemMusica;
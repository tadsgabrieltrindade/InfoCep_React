import React from "react";
import "./style.css";

export default function Result({ dataInfoCep }) {
  return (
    <>
      {dataInfoCep !=
        null && dataInfoCep.cep != '01001-000' ? (
          <>
            <p className="resultTitle">Resultado da Busca</p>
            <div className="resultContainer">
              <p><span className="topico">Rua:</span> {dataInfoCep.logradouro}</p>
              <p> <span className="topico">Complemento:</span> {dataInfoCep.complemento} </p>
              <p> <span className="topico">Bairro:</span> {dataInfoCep.bairro}</p>
              <p> <span className="topico">Cidade:</span> {dataInfoCep.localidade}</p>
              <p> <span className="topico">Estado:</span> {dataInfoCep.uf}</p>
              <p> <span className="topico">DDD:</span> {dataInfoCep.ddd}</p>
            </div>
          </>
        ) : (
          <>
          <p className="resultTitle">Resultado da Busca</p>
            <div className="resultContainer">
            <p><span className="topico">Rua:</span> </p>
            <p> <span className="topico">Complemento:</span> </p>
              <p> <span className="topico">Bairro:</span> </p>
              <p> <span className="topico">Cidade:</span> </p>
              <p> <span className="topico">Estado:</span> </p>
              <p> <span className="topico">DDD:</span> </p>
            </div>
          
          </>
        )
        
        }
    </>
  );
}

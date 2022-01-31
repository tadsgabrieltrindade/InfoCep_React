import React, {useState} from "react";
import "./style.css";

export default function Seach(props) {

  const [cep, setCep] = useState('')

  const cepMask = (value) =>{
    return value
      .replace(/\D/g, "")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{3})\d+?$/, "$1");
}



  return (
    <div className="search">
      <label className="labelText">Digite um CEP para a busca: </label>
      <input 
      type="text"
      placeholder="Digite um CEP" 
      className="input"
      onChange={(text) => setCep(cepMask(text.target.value))}
      value={cep}
      />
      <div className="searcButton">
      <input 
      type='submit' 
      value='Buscar' 
      className="searcButtonText" 
      onClick={() => {
        props.buttonFunction(cep)
      }} />
      </div>
    </div>
  );
}

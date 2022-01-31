import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import Seach from "./components/Seach";

export default function App() {
  const [dataCep, setDataCep] = useState(null);
  const [cep, setCep] = useState('01001000');


  useEffect(() => {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
          .then((data) => data.json())
          .then((dataJson) => setDataCep(dataJson));
  }, [cep])

  const handleSetCep = (value) =>{
   setCep(value)
  }
   

  return (
    <>
      <Navbar />
      <Seach buttonFunction={handleSetCep} />
      <Result dataInfoCep={dataCep} />

    </>
  );
}

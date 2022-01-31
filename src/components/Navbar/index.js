import React from 'react'
import './style.css'
import { FaGithub } from "react-icons/fa";
 
export default function Navbar(){
  return(
    <nav className='container'>
        <h1 className='title'>InfoCEP - Buscador de CEP</h1>
        <a className='github' href="https://github.com/tadsgabrieltrindade" target={'_blank'}> <FaGithub/> /tadsgabrieltrindade</a>
    </nav>
  )
} 
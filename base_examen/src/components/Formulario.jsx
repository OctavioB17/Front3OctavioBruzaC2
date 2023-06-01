import React from 'react'
import { useState } from 'react'
import "./Formulario.css"

const Formulario = () => {


const [nombre, setNombre] = useState("")
const [email, setEmail] = useState("")
const [instrumento, setInstrumento] = useState("")
const [genero, setGenero] = useState("")  

  const validarNombre = (nombre) => {
    const sinEspacios = nombre.trim();

    if (sinEspacios.length > 3) {
    return true;
    } else {
    return alert("nombre erroneo, debe contener mas de 3 caracteres");
    }
    };

    const validarEmail = (email) => {
      const sinEspacios = email.trim();
      const emailComoArray = sinEspacios.split("");
      const buscarArroba = emailComoArray.includes("@");
  
      if (sinEspacios.length > 6 && buscarArroba) {
      return true;
      } else {
      return alert("Mail erroneo, debe contener mas de 6 caracteres y la dirección debe contener el signo @");
      }
      };

      const validarInstrumento = (instrumento) => {
        const sinEspacios = instrumento.trim();
    
        if (sinEspacios.length > 2) {
        return true;
        } else {
        return alert("Instrumento erroneo, debe contener mas de 3 caracteres");
        }
        };

        const validarGenero = (genero) => {
          const sinEspacios = genero.trim();
      
          if (sinEspacios.length > 2) {
          return true;
          } else {
          return alert("Genero erroneo, debe contener mas de 2 caracteres");
          }
          };

  const submitHandler = (e) => {
    e.preventDefault();

    const nombreValido = validarNombre(nombre);
    const emailValido = validarEmail(email);
    const instrumentoValido = validarInstrumento(instrumento);
    const generoValido = validarGenero(genero);
    

    if (!nombreValido || !emailValido || !generoValido || !instrumentoValido) {
    alert("Alguno de los datos ingresados no son correctos");
    setNombre("");
    setEmail("");
    setInstrumento("");
    setGenero("");
    } else {
    // Por ahora solo mostramos el nombre del usuario
  
    alert(`Bienvenido: ${nombre}`);
    }
  }

  const renderizarForm = () => {
    return (console.log(submitHandler))
  }


  return (
    <>
    <form onSubmit={submitHandler}>
      <label htmlFor="nombre">Nombre:</label>
    <input
      value={nombre}
      onChange={e => setNombre(e.target.value)}
      placeholder="Nombre"
      type="text"
      name="nombre"
    />
      <label htmlFor="email">Email:</label>
    <input
      value={email}
      onChange={e => setEmail(e.target.value)}
      placeholder="Email"
      type="email"
      name="email"
    />
    <label htmlFor="instrumento">Instrumento:</label>
    <input
      value={instrumento}
      onChange={e => setInstrumento(e.target.value)}
      placeholder="Instrumento"
      type="text"
      name="instrumento"
    />
    <label htmlFor="genero">Genero:</label>
    <input
      value={genero}
      onChange={e => setGenero(e.target.value)}
      placeholder="Genero"
      type="text"
      name="genero"
    />
    
    <button type="submit">Submit</button>


  </form>

        <ul>
        <li>
        <p>Nombre: {nombre}</p>
        </li>
        <li>
        <p>Email: {email}</p>
        </li>
        <li>
        <p>Instrumento: {instrumento}</p>
        </li>
        <li>
        <p>Genero: {genero}</p>
        </li>
        </ul>

    </>

  )
}

export default Formulario
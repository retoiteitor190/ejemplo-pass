import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import {BotonDisminuir,BotonIncrementar,BotonCheck, BotonGenerar} from './components/botones';
import {useState} from 'react';
import generarPassword from './funciones/generarPassword';

function App() {
  const [configuracion,cambiarConfiguracion] = useState({
    numeroDeCaracteres:8,
    simbolos: true,
    numeros: true,
    mayusculas: true
  });
  const[paswordGenerada,cambiarPaswordGenerada]= useState(' ');

  const incrementarNumeroCaracteres =()=>{
    cambiarConfiguracion((configurcionAnterior)=>{
      const NuevaConfiguracion ={...configurcionAnterior}
      NuevaConfiguracion.numeroDeCaracteres +=1;
      return NuevaConfiguracion;
    });
  };

  const disminuirNumeroCaracteres =()=>{
    if(configuracion.numeroDeCaracteres >8){
      cambiarConfiguracion((configurcionAnterior)=>{
        const NuevaConfiguracion ={...configurcionAnterior}
        NuevaConfiguracion.numeroDeCaracteres -=1;
        return NuevaConfiguracion;
      });
    }
    
  };

  const toggleSimbolos=()=>{
    cambiarConfiguracion((configurcionAnterior)=>{
      const NuevaConfiguracion ={...configurcionAnterior}
      NuevaConfiguracion.simbolos= !NuevaConfiguracion.simbolos;
      return NuevaConfiguracion;
    });
  };

  const toggleNumeros=()=>{
    cambiarConfiguracion((configurcionAnterior)=>{
      const NuevaConfiguracion ={...configurcionAnterior}
      NuevaConfiguracion.numeros= !NuevaConfiguracion.numeros;
      return NuevaConfiguracion;
    });
  };

  const toggleMayusculas=()=>{
    cambiarConfiguracion((configurcionAnterior)=>{
      const NuevaConfiguracion ={...configurcionAnterior}
      NuevaConfiguracion.mayusculas = !NuevaConfiguracion.mayusculas;
      return NuevaConfiguracion;
    });
  };

  const onSubmit =(e)=>{
    e.preventDefault();
    cambiarPaswordGenerada(generarPassword(configuracion)) 
  };


  return (
    <div className='contenedor'>
      <Logo>
        <img src={logo} alt=''></img>
      </Logo>
      <form onSubmit={onSubmit}>
        <Fila>
          <label>Numero de Caracteres</label>
          <Controles>
            <BotonDisminuir click={disminuirNumeroCaracteres}></BotonDisminuir>
            <span>{configuracion.numeroDeCaracteres}</span>
            <BotonIncrementar click={incrementarNumeroCaracteres}></BotonIncrementar>
          </Controles>
        </Fila>
        <Fila>
          <label>¿Incluir Simbolos?</label>
          <BotonCheck seleccionado={configuracion.simbolos} click={toggleSimbolos}></BotonCheck>
        </Fila>
        <Fila>
          <label>¿Incluir Numeros?</label>
          <BotonCheck seleccionado={configuracion.numeros} click={toggleNumeros}></BotonCheck>
        </Fila>
        <Fila>
          <label>¿Incluir Mayusculas?</label>
          <BotonCheck seleccionado={configuracion.mayusculas} click={toggleMayusculas}></BotonCheck>
        </Fila>
        <Fila>
            <BotonGenerar></BotonGenerar>
            <Input type="text" value={paswordGenerada}></Input>
            
        </Fila>
        
      </form>
    </div>
  );
}

export default App;

const Logo = styled.div`
	margin-bottom: 50px;
	img {
		width: 45%;
		vertical-align: top;
	}
`

const Fila =styled.div`
margin-bottom: 40px;
	display: grid;
	grid-template-columns: 1fr 1fr;
  gap:10px;
`
const Controles = styled.div`
  display: flex;
  justify-content: space-between;
  text-aling: center;

  & > *{
    flex: 1;
  }
  span{
    line-height: 40px;
    background: #fff;
    color: black;
    
  }
`;

const Input = styled.input`
  width: 100%;
  background: none;
  border-radius: 4px;
  border: 1px solid rgba(255,255,255, .25);
  color: #fff;
  height: 40px
  line-heigth: 40px;
  cursor: pointer;
  transition: all .3s ease;

  &:hover {
    border: 1px solid rgba(255,255,255, .50);
  }
  &::selection {
    background: #212159;
  }

  &::-moz-selection {
    backgrond: #212159;
  }
`;
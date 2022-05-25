import React, { useState } from 'react';
import axios from 'axios';
import styled, {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
`
const Container = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
`
const Header = styled.div`
width:100%;
background-color:#F5F3F0;
display:flex;
justify-content:center;
align-items:center;
`

export default function App() {
  const [cep, setCep] = useState();
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [ddd, setDdd] = useState();

  const busca = () => {
    axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
      console.log(response);
      setRua(response.data.logradouro);
      setBairro(response.data.bairro);
      setCidade(response.data.localidade);
      setEstado(response.data.uf);
      setDdd(response.data.ddd);
      setCep("")
    });
  };

  return (  
    <Container>
    <GlobalStyle/>
    <title>Busca CEP</title>
     <Header>
     <img
        src="https://www.logomaker.com/api/main/images/1j+ojVVCOMkX9Wyrexe4hGfby7XT...Qw87X7bizxmfGwQoQJkmSErhPtt8vUtb0NZoBRejhUJd8U5jSBzUIAD3UQ6oXbQZs4AVn8="
        alt=""
      />
     </Header>
    <div>
      <h1>Busca por Código de Endereçamento Postal Brasileiro</h1>
      <p>Digite um CEP</p>
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        onChange={(e) => {
          setCep(e.target.value);
        }}
        value={cep}
      />
      <button onClick={busca}>Buscar</button>
    </form>
      <div>
      <p>Rua: {rua}</p>
      <p>Bairro: {bairro}</p>
      <p>Cidade: {cidade}</p>
      <p>Estado: {estado}</p>
      <p>DDD: {ddd}</p>
      </div>
    </div>
    </Container>
  );
}

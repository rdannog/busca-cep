import React, { useState } from 'react';
import axios from 'axios';
import styled, {createGlobalStyle} from "styled-components"
import './style.css'

// const GlobalStyle = createGlobalStyle`
// *{
//   padding: 0;
//   margin: 0;
//   box-sizing: border-box; 
//   list-style:none;
//   text-decoration: none;
// }
// `
const Container = styled.div`
display:flex;
flex-direction: column;
justify-content:space-between;
align-items:center;
font-family: 'Roboto', sans-serif;
`
const Header = styled.div`
display:flex;
justify-content:flex-start;
align-items:center;
width:100vw;
height:13vh;
border-bottom:1px solid #0C2A78;
background-color:#F5F3F0;
`
const Logo = styled.img`
max-height:90%;
margin-left: 42%;
`
const Menu = styled.div`
margin-bottom: 4vh;
margin-left: 3vw;
`
const Nav = styled.nav`
width:200px;
position:absolute;
left:-200px;
transition: all 0.5s;
ul{
  position: absolute;
  top:8vh;
  width: 100%;
}
a{  
  height:30px;
  display: flex;
  align-items: center;
  text-align:center;
  padding-left:20px;
  color:white;
  text-transform: capitalize;
  background-color: #0C2A78;
  &:hover{
    background-color: #3f5faf;
    color: gold;
  }
}
`
const Main = styled.div`
display:flex;
flex-direction: column;
justify-content:space-between;
align-items:flex-start;
height:40vh;
width:100%;
padding-left:15%;
h1{
  font-size:2.5vh;
  font-weight:400;
  color:#0C2A78;
  margin-top:3vh;
}
@media(max-width:768px){
  padding-left:0;
  h1{
    font-size:2.5vw;
    padding-left:15%;
  }
}
`
const Form = styled.form`
input{
  width: 15vw;
  margin-bottom:2vh;
  margin-top:3vh;
  margin-right: 1vw;
  padding:5px;
  border: solid 1px #0C2A78;
  border-radius:4px;
  outline:none;
  @media(max-width:768px){
    width:50vw;
  }
}
button{
  padding:7px 20px;
  background-color:#F5CB35;
  outline:none;
  border:1px solid transparent;
  border-radius: 5px;
}
`
const Label = styled.label`
padding:0.1vw;
  position: absolute;
  z-index: 1;
  img{
    width: 5vw;
  }
`
const Content = styled.div`
display: flex;
  justify-content: space-between;
  align-items:center;
  width: 100%;
  p {
    margin-bottom: 1vh;
  }
  @media(max-width:768px){
    flex-direction: column;
    height: 60vh;
   padding-top: 5vh;
   align-items: center;
  }
`

const Result = styled.div`
width:30%;
  margin-right: 10%;
  padding:25px 0 20px 15px ;
  border:2px solid #3f5faf;
  border-radius: 5px;
  @media(max-width:768px){
    margin-top: 5vh;
    margin-right: 0rem;
    width:50vw;
  }
`
export default function App() {
  const [cep, setCep] = useState();
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [ddd, setDdd] = useState();
  const [erro, setErro] = useState(false)

  const busca = (e) => {
      axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
      console.log(response);
      setRua(response.data.logradouro);
      setBairro(response.data.bairro);
      setCidade(response.data.localidade);
      setEstado(response.data.uf);
      setDdd(response.data.ddd);
      setCep(cep)
    }).catch(
      setErro(true)
    )
    e.preventDefault()
  };

  return (  
    <>
    {/* <GlobalStyle/> */}
    
    <Container>
     <Header>
     <Menu>
        <input type="checkbox" id="check"/>
        <Label for="check">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 172 172" style={{ cursor:"pointer"}}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode: "normal"}}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#0C2A78"><path d="M14.33333,35.83333v14.33333h143.33333v-14.33333zM14.33333,78.83333v14.33333h143.33333v-14.33333zM14.33333,121.83333v14.33333h143.33333v-14.33333z"></path></g></g></svg>
       </Label>
        <Nav>
          <ul>
            <li><a href="#">link 1</a></li>
            <li><a href="#">link 2</a></li>
            <li><a href="#">link 3</a></li>
            <li><a href="#">link 4</a></li>
          </ul>
        </Nav>
      </Menu>
     <Logo
        src="https://www.logomaker.com/api/main/images/1j+ojVVCOMkX9Wyrexe4hGfby7XT...Qw87X7bizxmfGwQoQJkmSErhPtt8vUtb0NZoBRejhUJd8U5jSBzUIAD3UQ6oXbQZs4AVn8="
        alt=""
      />
    </Header>
    <Main>
      <h1>Busca por C??digo de Endere??amento Postal Brasileiro</h1>
      

      <Content>
      <Form onSubmit={busca}>
        <label for="label">Digite um CEP:</label> <br/>
        <input placeholder="Digite apenas n??meros" required id="label"
          onChange={(e) => {
            setCep(e.target.value);
          }}
          value={cep}
        /> <br/>
        <button>Buscar</button>
      </Form>

      {erro ?
        (<Result>
        <p>Rua: {rua}</p>
        <p>Bairro: {bairro}</p>
        <p>Cidade: {cidade}</p>
        <p>Estado: {estado}</p>
        <p>DDD: {ddd}</p>
        <p>CEP: {cep}</p>
      </Result>):
      (<Result>Digite um CEP v??lido</Result>)
      }
      </Content>
    </Main>
    </Container>
    </>
  );
}

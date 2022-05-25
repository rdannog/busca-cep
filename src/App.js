import React, { useState } from 'react';
import axios from 'axios';

// Fazer tratamento de erro caso o cep esteja errado


// export default function App(){
//   const [nome, setNome] = useState("Dan")
//   const [num, setNum] = useState(0);

//   const trocaNome = () => {
//     setNome(nome === "Dan" ? "Marlon": "Dan")
//   }

//   return (
//     <div>
//       <h1>{nome}</h1>
//       <button onClick={trocaNome}>Clica ai</button> <br/>
//       <button onClick={()=> {setNum(num+1)}}>+</button>
//         <p>{num}</p>
//       <button onClick={()=> {setNum(num-1)}}>-</button>
//     </div>
//   )
// }

// export default class App extends React.Component {
//   state = {
//     num: 0,
//   };

//   addNum = () => {
//     this.setState((dan) => ({
//       num: dan.num < 13 ? dan.num + 1 : dan.num,
//     }));
//   };
//   removeNum = () => {
//     this.setState((dai) => ({
//       num: dai.num > 0 ? dai.num - 1 : dai.num,
//     }));
//   };
//   render() {
//     return (
//       <>
//         <button onClick={this.addNum}>+</button>
//         <p>{this.state.num}</p>
//         <button onClick={this.removeNum}>-</button>
//       </>
//     );
//   }
// }

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
    });
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h1>Busca CEP</h1>
      <input
        onChange={(e) => {
          setCep(e.target.value);
        }}
      />
      <button onClick={busca}>Buscar</button>

      <p>Rua: {rua}</p>
      <p>Bairro: {bairro}</p>
      <p>Cidade: {cidade}</p>
      <p>Estado: {estado}</p>
      <p>DDD: {ddd}</p>
    </form>
  );
}

import React, { useState } from 'react';
import axios from 'axios';

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
      <img
        src="https://www.logomaker.com/api/main/images/1j+ojVVCOMkX9Wyrexe4hGfby7XT...Qw87X7bizxmfGwQoQJkmSErhPtt8vUtb0NZoBRejhUJd8U5jSBzUIAD3UQ6oXbQZs4AVn8="
        alt=""
      />
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

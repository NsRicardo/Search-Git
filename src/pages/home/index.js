//import logo from './logo.svg';
import React, { useState } from 'react';
import axios  from 'axios';
import * as s from './styled';
import { useNavigate } from 'react-router-dom';
import ImgLogo from '../../github-logo.png'


function App(props) {
  const navigate = useNavigate();
  const [ usuario, setUsuario ] = useState('');
  const [erro, setErro ] = useState(false);

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`)
      .then(response => { 
        const repositories = response.data;
        const repositoriesName = [];
        repositories.map((repository) => {
          repositoriesName.push(repository.name); 
        });
        localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
        setErro(false);
        navigate('/repositories');
      })
      .catch(err => {
        setErro(true);
      });
  }
  
  return (
    <s.HomeContainer>
        <s.LogoImg src={ ImgLogo } />
        <s.Name> { usuario } </s.Name>
      <s.Content>  
        <s.Input placeholder="Usuário" value={usuario} className="usuarioInput" onChange={e => setUsuario(e.target.value)}/> 
        <s.Button type="button" onClick={handlePesquisa}>Pesquisar</s.Button>
        </s.Content>
        { erro ? <s.ErrorMsg>Ocorreu um Erro. Tente Novamente</s.ErrorMsg> : '' };
     </s.HomeContainer>
  );
}

export default App;

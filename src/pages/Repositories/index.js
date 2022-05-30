import React, { useEffect, useState } from 'react'
import * as s from './styled'
import { useNavigate } from 'react-router-dom';

export default function Repositories() {
  const navigate = useNavigate();
  const [repositories, setRepositories ] = useState([]);
  
  useEffect(() => {
    let repositoriesName = localStorage.getItem('repositoriesName');
    if(repositoriesName != null){
      repositoriesName = JSON.parse(repositoriesName)
      setRepositories(repositoriesName);
      localStorage.clear(); 
    } else {
      navigate('/');
    }
  }, [])

  return (
  <s.Container>
    <s.Title>Repositórios</s.Title>
    <s.List>
      { repositories.map(repository => {
        return (
          <s.ListItem>Repositório: { repository } </s.ListItem>)
      }) }
    </s.List>
    <s.LinkHome to='/'>Voltar</s.LinkHome>
  </s.Container>
  ) 
}

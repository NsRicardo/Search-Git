import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-family: sans-serif;
  color: #fff;
  `;
export const List = styled.ul`
  list-style: none;
  padding: 0;
  font-family: sans-serif;
  `;

export const ListItem = styled.li`
  margin: .5rem 0;
  background: #000;
  color: #fff;
  padding: .5rem;
  `;

export const Container = styled.div`
  width: 100%;
  max-width: 991px;
  margin: 0 auto;
  `;

export const LinkHome = styled(Link)`
  display: block;
  width: 4rem; 
  text-align: center;
  font-family: sans-serif;
  margin: 2rem auto;
  background-color: #fff;
  padding: .5rem 0;
  color: #000;
  text-decoration: none;
  border-radius: 8px;
  `;
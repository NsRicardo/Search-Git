import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  `;

export const Content = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  `;


export const Name = styled.h2`
  color: #fff;
  font-family: Sans-serif;
  display: flex;
  flex-direction: column;
  `

export const Input = styled.input`
  border: 1px solid #ddd;
  height: 1.5rem;
  padding: 0 .5rem;
  border-radius: .25rem 0 0 .25rem;
  display: table;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
  `;

export const Button = styled.button`
  height: 1.6rem;
  border: 1px solid #000;
  background: #000;
  color: #fff;
  border-radius: 0 .25rem .25rem 0;

  &focus,
  &active {
    outline: none;
    box-shadow: none;
  }
  `;

export const ErrorMsg = styled.span`
  display: block;
  font-size: 0.65rem;
  color: red;
  font-weight: 600;
  font-family: Sans-serif;
  margin-top: 1rem;
`; 

export const LogoImg = styled.img`

  `;
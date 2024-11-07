import styled from 'styled-components'

const Input = styled.input`
  width: 100%;
  font-family: 'SF Pro';
  color: rgba(35, 19, 49, 0.8);
  font-size: 20px;
  border: none;
  border-bottom: 1px solid rgba(35, 19, 49, 0.5);
  outline: none;

  @media (min-width: 1024px) {
    max-width: 360px;
    background-color: transparent;
  }
`

export default Input

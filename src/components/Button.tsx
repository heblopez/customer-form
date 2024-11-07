import styled from 'styled-components'

const Button = styled.button`
  width: max-content;
  background-color: #231331;
  color: white;
  padding: 12px 24px;
  border-radius: 24px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    opacity: 0.9;
  }

  &:focus,
  &:active {
    outline: none;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  @media (min-width: 1024px) {
    padding: 12px 48px;
    max-width: 360px;
  }
`

export default Button

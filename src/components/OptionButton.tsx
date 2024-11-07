import styled from 'styled-components'

const OptionButton = styled.button`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  background-color: transparent;
  color: #231331;
  border: 1px solid #231331;
  padding: 12px 16px;
  border-radius: 24px;
  cursor: pointer;
  font-size: 12.5px;
  transition: background-color 0.3s ease;

  &:hover,
  &:focus,
  &:active {
    background-color: #231331;
    color: white;
  }

  &:focus {
    outline: none;
  }
`

export default OptionButton

import styled from 'styled-components'

const OptionButton = styled.button<{ $colSpan?: number; selected?: boolean }>`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.selected ? '#231331' : 'transparent')};
  color: ${props => (props.selected ? 'white' : '#231331')};
  border: 1px solid #231331;
  padding: 12px 16px;
  border-radius: 24px;
  cursor: pointer;
  font-size: 12.5px;
  transition: background-color 0.3s ease;
  ${props => props.$colSpan && `grid-column: span ${props.$colSpan};`};

  &:hover,
  &:active {
    background-color: #231331;
    color: white;
  }

  &:focus {
    outline: none;
  }

  @media (min-width: 1024px) {
    font-size: clamp(10.5px, 11px, 12.5px);
    grid-column: span 1;
  }
`

export default OptionButton

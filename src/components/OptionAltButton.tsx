import styled from 'styled-components'
import OptionButton from './OptionButton'

const LetterDiv = styled.div`
  position: absolute;
  left: 6px;
  display: flex;
  justify-self: flex-start;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 30px;
  background-color: rgba(0, 204, 188, 1);
  color: white;
  font-size: 12.5px;
  border-radius: 24px;
}`

const Text = styled.p`
  margin: 0;
  font-size: 12.5px;
  margin-left: 48px;
`

interface OptionAlternativeBtnProps {
  children: string
  char: string
  onClick: () => void
}

export default function OptionAltBtn({
  children,
  char = '✔️',
  onClick
}: OptionAlternativeBtnProps) {
  return (
    <OptionButton onClick={onClick}>
      <LetterDiv>{char}</LetterDiv>
      <Text>{children}</Text>
    </OptionButton>
  )
}

import styled from 'styled-components'
import OptionButton from './OptionButton'

const Button = styled(OptionButton)<{ $selected?: boolean }>`
  ${props =>
    props.$selected &&
    `
    background-color: #231331;
    color: white;
  `}

  @media (min-width: 1024px) {
    min-height: 58px;
    border-radius: 18px;
  }
`

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

  @media (min-width: 1024px) {
    width: 38px;
    height: 38px;
    border-radius: 50%;
  }
`

const Text = styled.p`
  margin: 0;
  font-size: 12.5px;
  margin-left: 48px;

  @media (min-width: 1024px) {
    margin-left: 32px;
  }
`

interface OptionAlternativeBtnProps {
  children: string
  onClick: () => void
  letterKey?: number
  selected?: boolean
}

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

export default function OptionAltBtn({
  children,
  letterKey = 0,
  onClick,
  selected
}: OptionAlternativeBtnProps) {
  return (
    <Button $selected={selected} onClick={onClick}>
      <LetterDiv>{alphabet[letterKey] || '✔️'}</LetterDiv>
      <Text>{children}</Text>
    </Button>
  )
}

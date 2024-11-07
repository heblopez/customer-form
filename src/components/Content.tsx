import styled from 'styled-components'

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  color: #231331;
  gap: 2rem;
  padding-inline: 2.5rem;
  padding-bottom: 2rem;

  @media (min-width: 1024px) {
    align-self: center;
    padding-left: 3.5rem;
    padding-right: 0;
    flex-grow: 0;
    max-width: 420px;
  }
`

export default Content

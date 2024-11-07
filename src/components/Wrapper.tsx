import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`

export default Wrapper

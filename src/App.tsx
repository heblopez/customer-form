import styled from 'styled-components'
import bannerImg from './assets/customer-banner.svg'

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

const Header = styled.div`
  position: relative;
  width: 100%;
`

const BannerImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0 0 20px 20px;
  padding-left: 16px;
`

const ScreenNumber = styled.span`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 1rem;
  color: #000;
  font-weight: 700;
  font-family: 'SF Pro';
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  color: #231331;
  gap: 2rem;
  padding-inline: 2.5rem;
`

const Text = styled.p`
  font-size: 20px;
  line-height: 28px;
  font-weight: 300;
  margin: 0;
`

const Input = styled.input`
  width: 100%;
  font-family: 'SF Pro';
  color: rgba(35, 19, 49, 0.8);
  font-size: 20px;
  border: none;
  border-bottom: 1px solid rgba(35, 19, 49, 0.5);
  outline: none;
`

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
    opacity: 0.95;
  }
`

function App() {
  return (
    <Container>
      <Header>
        <BannerImage src={bannerImg} alt='customer Scoops Banner' />
        <ScreenNumber>01 | 08</ScreenNumber>
      </Header>
      <Content>
        <Text>
          Muchas gracias por tu interés en conocer <strong>customerScoops</strong>, que a través de
          Formularios Conversacionales Inteligente te ayudamos a aumentar el revenue y rentabilidad
          de tu negocio.
        </Text>
        <Text>Queremos conocerte, ¿cuál es tu nombre?</Text>
        <Input placeholder='Nombre' />
        <Button>Comenzar</Button>
      </Content>
    </Container>
  )
}

export default App

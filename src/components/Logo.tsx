import styled from 'styled-components'
import logo from '@/assets/svg/customer-logo.svg'

const CustomerScoopsLogo = styled.img`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    width: 180px;
    height: auto;
  }
`

export default function CSLogo() {
  return <CustomerScoopsLogo src={logo} alt='customerScoops Logo' loading='lazy' />
}

import styled from 'styled-components'

export const MenuContainer = styled.div`
  background-color: ${props =>
    props.activeTheme === 'Li' ? '#ffffff' : ' #231f20'};
  width: 20%;
  height: 120vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    display: none;
    font-weight: 300;
  }
`

export const ContactUsH1 = styled.p`
  color: ${props => (props.activeTheme === 'Li' ? '#1e293b' : ' #ffffff')};
  font-size: 16px;
  font-weight: 700;
`

export const ContactText = styled.p`
  color: ${props => (props.activeTheme === 'Li' ? '#1e293b' : ' #ffffff')};
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
`

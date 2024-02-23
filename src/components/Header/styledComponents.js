import styled from 'styled-components'

export const NavContainer = styled.div`
  background-color: ${props =>
    props.activeTheme === 'Li' ? '#ffffff' : '#231f20'};
  display: flex;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
`

export const LogoutBtn = styled.button`
  background-color: transparent;
  border: none;
  border-style: solid;
  border-width: 2px;
  border-color: ${props =>
    props.activeTheme === 'Li' ? '#3b82f6' : '#ffffff'};
  color: ${props => (props.activeTheme === 'Li' ? '#3b82f6' : '#f8fafc')};
  padding: 6px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 3px;
  font-weight: 600;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    border: none;
    padding: 0px;
  }
`

export const PopupContainer = styled.div`
  background-color: ${props =>
    props.activeTheme === 'Li' ? '#ffffff' : '#231f20'};
  height: 150px;
  width: 320px;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`

export const LogoutPopUpText = styled.p`
  color: ${props => (props.activeTheme === 'Li' ? '#00306e' : '#f8fafc')};
  font-size: 14px;
  line-height: 25px;
  margin-bottom: 30px;
  font-weight: 500;
`

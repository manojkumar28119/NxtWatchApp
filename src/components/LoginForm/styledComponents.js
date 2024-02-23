import styled from 'styled-components'

export const PageContainer = styled.div`
  background-color: ${props =>
    props.activeTheme === 'Li' ? '#f8fafc' : '#231f20'};
  height: 100vh;
  display: flex;
  justify-content: center;
  font-family: 'Roboto';
  align-items: center;
`

export const FormContainer = styled.form`
  background-color: ${props =>
    props.activeTheme === 'Li' ? '#ffffff' : '#000000'};
  padding: 35px;
  border-radius: 5px;
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  @media screen and (min-width: 800px) {
    width: 40%;
  }

  @media screen and (min-width: 1030px) {
    width: 30%;
  }

  @media screen and (max-width: 576px) {
    width: 90%;
  }
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-top: 20px;
`

export const LabelElement = styled.label`
  color: ${props => (props.activeTheme === 'Li' ? '#94a3b8' : '#f8fafc')};
  font-size: 11px;
  font-weight: bold;
  margin-bottom: 5px;
`

export const InputElement = styled.input`
  padding: 10px;
  border: 1px solid #d7dfe9;
  outline: none;
  border-radius: 5px;
  color: ${props => (props.activeTheme === 'Li' ? '#475569' : '#e2e8f0')};
  cursor: pointer;
  background-color: transparent;
  padding-left: 15px;
`
export const CheckBoxLabel = styled.label`
  color: ${props => (props.activeTheme === 'Li' ? '#0f0f0f' : '#f8fafc')};
  margin: 0px;
  font-size: 13px;
  margin-top: 1px;
`

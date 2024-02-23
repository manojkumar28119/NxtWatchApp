import styled from 'styled-components'

export const HomeCard = styled.div`
  background-color: ${props =>
    props.activeTheme === 'Li' ? '#f9f9f9' : '#181818'};
`

export const VideosContainer = styled.div`
  padding: 30px;
  padding-bottom: 10px;
  min-height: 100%;
  @media screen and (max-width: 576px) {
    padding: 0px;
    padding-top: 30px;
  }
`

export const InputCard = styled.div`
  display: flex;
  border: 1.2px solid
    ${props => (props.activeTheme === 'Li' ? '#94a3b8' : ' #606060')};

  width: 55%;
  @media screen and (max-width: 576px) {
    width: 90%;
    margin-left: 5%;
  }
`

export const Input = styled.input`
  width: 80%;
  border: none;
  padding: 8px;
  padding-left: 15px;
  background-color: transparent;
  outline: none;
  color: ${props => (props.activeTheme === 'Li' ? '#181818' : ' #ebebeb')};
`

export const IconCard = styled.button`
  display: flex;
  border: none;
  justify-content: center;
  align-items: center;
  width: 20%;
  cursor: pointer;
  background-color: ${props =>
    props.activeTheme === 'Li' ? '#ebebeb' : '#424242'};
  border-left: 1.5px solid
    ${props => (props.activeTheme === 'Li' ? '#94a3b8' : ' #606060')};
  color: ${props => (props.activeTheme === 'Li' ? '#909090' : ' #606060')};
  font-size: 16px;
`
export const NoResultsCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 90vh;
  align-items: center;
`

export const FailureHeading = styled.h1`
  color: ${props => (props.activeTheme === 'Li' ? '#181818' : ' #f9f9f9')};
  font-weight: 500;
  text-align: center;
  margin-top: 25px;
  font-size: 25px;
`

export const FailureText = styled.p`
  color: ${props => (props.activeTheme === 'Li' ? '#475569' : ' #94a3b8')};

  text-align: center;
  margin-top: 0px;
  margin-bottom: 20px;
`

export const BannerCard = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 39vh;
  background-size: cover;
  padding: 20px;
  padding-top: 30px;
  padding-left: 30px;
  justify-content: space-between;
  align-items: flex-start;
  display: ${props =>
    props.showPremiumSubscription === false ? 'none' : 'flex'};
`

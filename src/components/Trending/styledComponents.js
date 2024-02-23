import styled from 'styled-components'

export const VideosContainer = styled.div`
  width: 80%;
  background-color: ${props =>
    props.activeTheme === 'Li' ? '#f9f9f9' : '#0f0f0f'};
  padding-bottom: 10px;
  height: 120vh;
  overflow-y: scroll;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const TrendingCardIcon = styled.div`
  background-color: ${props =>
    props.activeTheme === 'Li' ? '#ebebeb' : '#181818'};
  display: flex;
  align-items: center;
  padding: 20px;
  padding-left: 6%;
`
export const IconCard = styled.div`
  background-color: ${props =>
    props.activeTheme === 'Li' ? '#d7dfe9' : '#0f0f0f'};
  height: 70px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff0000;
  border-radius: 40px;
  margin-right: 20px;
`

export const IconText = styled.h1`
  font-weight: 650;
  font-size: 25px;
  color: ${props => (props.activeTheme === 'Li' ? '#1e293b' : '#ffffff')};
`

export const TrendingVideosCard = styled.div`
  padding-left: 6%;
  padding-top: 30px;
  padding-right: 10px;
  @media screen and (max-width: 576px) {
    padding: 0px;
    padding-top: 30px;
  }
`

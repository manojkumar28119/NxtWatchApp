import styled from 'styled-components'

export const GamingItemCard = styled.li`
  width: 30%;
  margin-right: 20px;
  margin-bottom: 50px;
  list-style: none;
  @media screen and (max-width: 576px) {
    width: 40%;
    margin-right: 15px;
  }
`

export const GamingTitle = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 0px;
  color: ${props => (props.activeTheme === 'Li' ? '#1e293b' : '#ffffff')};
`

export const GamingViewCountText = styled.p`
  margin-top: 5px;
  font-size: 12px;
  color: ${props => (props.activeTheme === 'Li' ? '#475569' : '#94a3b8')};
  font-weight: 500;
`

export const ThumbnailGaming = styled.img`
  width: 100%;
`

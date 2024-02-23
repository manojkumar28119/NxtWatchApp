import styled from 'styled-components'

export const TitleText = styled.p`
  margin-top: 0px;
  font-size: 12px;
  line-height: 20px;
  color: ${props => (props.activeTheme === 'Li' ? '#1e293b' : '#ffffff')};
  font-weight: ${props => (props.activeTheme === 'Li' ? 500 : 300)};
  margin-bottom: 0px;
`

export const NameText = styled(TitleText)`
  color: ${props => (props.activeTheme === 'Li' ? '#475569' : '#94a3b8')};
  margin-top: 5px;
  font-weight: 500;
`
export const UnOrderdItems = styled.ul`
  display: flex;
  padding: 0px;
  margin-top: 5px;
  color: ${props => (props.activeTheme === 'Li' ? '#475569' : '#94a3b8')};
`

export const ViewCountItem = styled.p`
  list-style: none;
  font-size: 12px;
`
export const PublishedItem = styled.p`
  list-style: disc;
  margin-left: 20px;
  list-style: none;
  font-size: 15px;
  font-size: 12px;
`

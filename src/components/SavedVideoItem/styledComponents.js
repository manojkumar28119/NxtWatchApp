import styled from 'styled-components'

export const VideoTitle = styled.p`
  margin-top: 0px;
  font-size: 18px;
  line-height: 20px;
  color: ${props => (props.activeTheme === 'Li' ? '#1e293b' : '#ffffff')};
  font-weight: 600;

  @media screen and (max-width: 576px) {
    font-size: 15px;
  }
`

export const ChannelNameText = styled.p`
  color: ${props => (props.activeTheme === 'Li' ? '#475569' : '#94a3b8')};
  font-weight: 600;
  font-size: 16px;
`

export const UnOrderdItems = styled.div`
  display: flex;
  padding: 0px;
  margin-top: 5px;
  color: ${props => (props.activeTheme === 'Li' ? '#475569' : '#94a3b8')};
`

export const ViewCountItem = styled.p`
  list-style: none;
  font-size: 12px;
  font-weight: 500;
  @media screen and (max-width: 576px) {
    list-style: disc;
  }
`
export const PublishedItem = styled(ViewCountItem)`
  list-style: disc;
  margin-left: 20px;
`
export const NameTextMb = styled(ViewCountItem)`
  list-style: none;
  margin-right: 22px;
`

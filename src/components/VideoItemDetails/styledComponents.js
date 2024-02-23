import styled from 'styled-components'

export const VideoDetailsCard = styled.div`
  width: 80%;
  background-color: ${props =>
    props.activeTheme === 'Li' ? '#f9f9f9' : '#0f0f0f'};
  height: 120vh;
  padding: 20px;
  overflow-y: scroll;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 576px) {
    padding: 0px;
    padding-top: 20px;
  }
`

export const TitleText = styled.p`
  margin-top: 25px;
  font-size: 16px;
  line-height: 20px;
  color: ${props => (props.activeTheme === 'Li' ? '#181818' : '#ffffff')};
  font-weight: ${props => (props.activeTheme === 'Li' ? 500 : 400)};
  margin-bottom: 0px;
  @media screen and (max-width: 576px) {
    padding: 10px;
  }
`

export const UnOrderdItems = styled.ul`
  display: flex;
  padding: 0px;
  align-items: center;
  color: ${props => (props.activeTheme === 'Li' ? '#64748b' : '#94a3b8')};
`

export const ViewCountItem = styled.p`
  list-style: none;
  font-size: 14px;
`
export const PublishedItem = styled(ViewCountItem)`
  list-style: disc;
  margin-left: 25px;
  font-size: 14px;
`
export const VideoDetailsIconsCard = styled.div`
  display: flex;
  align-items: center;
  color: ${props => (props.activeTheme === 'Li' ? '#64748b' : '#94a3b8')};
`

export const IconAndTextCardLike = styled.button`
  display: flex;
  align-items: center;
  margin-left: 18px;
  border: none;
  background-color: transparent;
  color: #64748b;
  font-size: 14px;
  color: ${props => props.isLiked && '#2563eb'};
  cursor: pointer;
  @media screen and (max-width: 768px) {
    margin-left: 0px;
    margin-right: 18px;
  }
`

export const IconAndTextCardDisLike = styled(IconAndTextCardLike)`
  color: #64748b;
  color: ${props => props.isDisliked && '#2563eb'};
`

export const IconAndSaveTextCard = styled(IconAndTextCardLike)`
  color: #64748b;
  color: ${props => props.isSaved && '#2563eb'};
`

export const HrLine = styled.hr`
  width: 100%;
  border: 1px solid
    ${props => (props.activeTheme === 'Li' ? '#cccccc' : '#475569')};
`
export const NameText = styled(TitleText)`
  color: ${props => (props.activeTheme === 'Li' ? '#1e293b' : '#f8fafc')};
  margin-top: 0px;
  padding: 0px;
  font-weight: ${props => (props.activeTheme === 'Li' ? 500 : 400)};
`

export const SubcribeCount = styled.p`
  font-size: 11px;
  font-weight: 500;
  color: ${props => (props.activeTheme === 'Li' ? '#475569' : '#94a3b8')};
`

export const Description = styled.p`
  color: ${props => (props.activeTheme === 'Li' ? '#475569' : '#f8fafc')};
  font-size: 14px;
  font-weight: ${props => (props.activeTheme === 'Li' ? 500 : 400)};
  line-height: 25px;
  margin-top: 30px;
  @media screen and (max-width: 576px) {
    margin-top: 10px;
    font-size: 12px;
  }
`

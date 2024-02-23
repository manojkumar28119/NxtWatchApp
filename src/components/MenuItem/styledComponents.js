import styled from 'styled-components'

export const ParaText = styled.p`
  color: ${props => (props.activeTheme === 'Li' ? ' #000000' : '#ffffff')};
  font-size: 13px;
  margin: 0px;
`

export const MenuListItem = styled.li`
  background-color: ${props =>
    props.activeTheme === 'Li' && props.isActive && '#f1f5f9'};
  background-color: ${props =>
    props.activeTheme === 'Da' && props.isActive && '#313131'};
`

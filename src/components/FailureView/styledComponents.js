import styled from 'styled-components'

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

import styled from 'styled-components'

export const LayoutContainer = styled.div`
  margin: 0;
  height: 100vh;
  background: ${(props) => props.theme['blue-300']};
`

export const BodyContainer = styled.body`
  display: flex;
  width: 93%;
  height: 100%;
  margin: auto;
  margin-top: 3.5rem;

  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme.white};
`

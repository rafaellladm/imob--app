import styled from 'styled-components'

export const LoginContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const ContainerLeft = styled.div`
  right: 0;
  width: 65vw;
  height: 100vh;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const ContainerRight = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  height: 100vh;

  align-items: center;

  img {
    margin-top: 8rem;
  }

  a {
    color: ${(props) => props.theme['blue-900']};
  }
`

export const FarmContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 5.19rem;
  justify-content: center;
  width: 65%;
  height: auto;
  gap: 0.5rem;

  color: ${(props) => props.theme.black};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
`

export const BaseInput = styled.input`
  height: 2.5rem;
  border: transparent;
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  border-radius: 8px;

  &:focus {
    outline: none;
    border: solid ${(props) => props.theme['green-200']};
    color: ${(props) => props.theme.black};
    font-weight: normal;
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-100']};
  }
`

export const EnterButton = styled.button`
  padding: 1rem;
  border: 0;
  border-radius: 8px;
  margin: 2rem 0;

  font-weight: bold;
  font-size: 1.125rem;

  background: ${(props) => props.theme['green-400']};
  color: ${(props) => props.theme.white};

  transition: background 0.5s;

  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme['green-200']};
  }
`

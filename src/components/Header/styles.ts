import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.125rem 3rem;
  gap: 3rem;
  top: 0;
  position: fixed;

  font-weight: bold;
  font-size: 1.2rem;

  width: 100vw;
  height: 3.5rem;
  overflow: hidden;
  background: ${(props) => props.theme['blue-300']};
  box-shadow: 0 0.5px 2px ${(props) => props.theme['gray-100']};

  img {
    width: 5rem;
  }

  nav {
    display: flex;
    gap: 3rem;

    a {
      text-decoration: none;
      color: ${(props) => props.theme.white};
    }
  }

  a {
    display: flex;
    text-decoration: none;
    align-items: center;
    justify-content: space-around;

    color: ${(props) => props.theme.white};

    gap: 0.8rem;
  }
`

export const UserImg = styled.div`
  overflow: hidden;
  width: 2.5rem;
  height: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme.white};
  border-radius: 50%;

  img {
    width: 90%;
    height: 90%;
    object-fit: cover;
  }
`

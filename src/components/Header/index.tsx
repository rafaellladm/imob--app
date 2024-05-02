import { CaretDown } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo_2.svg'
import { HeaderContainer, UserImg } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo" />
      <nav>
        <NavLink to="/home" title="Home">
          Home
        </NavLink>
        <NavLink to="/input" title="Comissão">
          Comissãos
        </NavLink>
        <NavLink to="/output" title="Despesas">
          Despesas
        </NavLink>
        <NavLink to="/simulator" title="Simulador">
          Simulador
        </NavLink>
      </nav>
      <NavLink to="/user">
        <UserImg>
          <img src={logo} alt="Foto Usuario" />
        </UserImg>
        <div>
          <p>Nome do Usuario</p>
        </div>
        <div>
          <a href="">
            <CaretDown size={20} />
          </a>
        </div>
      </NavLink>
    </HeaderContainer>
  )
}

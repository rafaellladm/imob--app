import imob from '../../assets/casa.jpeg'
import logo from '../../assets/logo.svg'
import {
  BaseInput,
  ContainerLeft,
  ContainerRight,
  EnterButton,
  FarmContainer,
  LoginContainer,
} from './styles'

export function Login() {
  return (
    <LoginContainer>
      <ContainerLeft>
        <img src={imob} alt="" />
      </ContainerLeft>
      <ContainerRight>
        <img src={logo} alt="" />
        <FarmContainer action="">
          <label htmlFor="email">E-mail</label>
          <BaseInput type="email" id="email" placeholder="exemplo@email.com" />
          <label htmlFor="senha">Senha</label>
          <BaseInput
            type="password"
            id="senha"
            placeholder="Digite sua senha."
          />
          <EnterButton>Entrar</EnterButton>
        </FarmContainer>
        <a href="#">Esqueceu minha senha</a>
      </ContainerRight>
    </LoginContainer>
  )
}

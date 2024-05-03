import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { BodyContainer, LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <BodyContainer>
        <Outlet />
      </BodyContainer>
    </LayoutContainer>
  )
}

import React from 'react'
import { HeaderContainer } from './style'
import scilogo from '../../assets/logo.png'
import nvlogo from '../../assets/unico_geral.png'

export const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <img src={nvlogo} alt="logo do único" />
      </div>
      <div>
        Calculadora de tempo de treinamento
      </div>
    </HeaderContainer>
  )
}

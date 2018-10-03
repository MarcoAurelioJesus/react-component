import React, { Component } from 'react'
import './userAdvantages.css'
import './imgs/img.css'
import Img from './imgs/img.svg'

export default class UserAdvantages extends Component {
  render() {
    return (
      <div>
        <div className="circle circle1"/>
        <div className="circle circle2"/>
        <div className="circle circle3"/>
        <div className="circle circle4"/>
        <div className="T1">
          Não perca seu lanche favorito
      </div>
        <div className="T2">
          Receba notificações quando seu food truck preferido
           estiver próximo a você contribua com outros usuários
            dizendo compartilhando as refeições que mais lhe agradam
             e descubra novos lugares e comidas diferentes,
              essas e outras funcionalidades!
        </div>
      </div>
    )
  }
}

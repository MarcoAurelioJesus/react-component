import React, { Component } from 'react'

import { Button } from '../components/Button';
import Logo from '../components/Logo'
import UserAdvantages from './UserAdvantages'
import './Home.css'


class Home extends Component {
  render() {
    return (
      <div className={'app'}>


      <div className={'header'}>
        <div className={'logo'}>
          <img src={Logo}/>
        </div>

        <div className={'menu'}>
          <ul>
            <li>
              <a href="">
                Food trucks
              </a>
              <a href="">
                Contato
              </a>
              <a href="">
                Login
              </a>
              <a href="">
                <Button round type={'success'}>
                  Cadastre-se
                </Button>
              </a>
            </li>  
          </ul>
        </div>
      </div>


      <div className={'content'}>
      <UserAdvantages/>
      </div>
       
      </div>
    )
  }
}

export default Home
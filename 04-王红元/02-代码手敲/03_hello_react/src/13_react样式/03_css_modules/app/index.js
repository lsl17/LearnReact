import React, { PureComponent } from 'react';

import appStyle from './style.module.css';
//把CSS当成模块去引入

import Home from '../home';
import Profile from '../profile';

export default class App extends PureComponent {
  render() {
    return (
      <div id="app">
        App
        <h2 className={appStyle.title}>我是App的title-module</h2>
        <Home/>
        <Profile/>
      </div>
    )
  }
}

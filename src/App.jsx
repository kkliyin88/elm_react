// 这是项目的根组件
import React from 'react'
// 导入路由组件
import { HashRouter, Route } from 'react-router-dom'
// 导入需要的 Ant Design 组件

// 导入 路由相关的组件页面
// import Contacts from './pages/contacts/index.jsx';
import Home from './pages/home/index.jsx';
import About from './pages/about/index.jsx';
// import './style/common.scss' // 公共的css
// import store from './redux/store';

export default class App extends React.Component {
  
  render() {
    return (
        <HashRouter>
		 <div>
			<Route exact path="/home" component={Home}></Route>
			<Route exact path="/about" component={About}></Route>
		</div>
        </HashRouter>
    )
  }
}
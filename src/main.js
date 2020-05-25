// 是项目的JS打包入口文件
import React from 'react'
import createStorage from 'redux';
import ReactDOM from 'react-dom'

// 导入项目的根组件
import App from './App.jsx'

ReactDOM.render(<App />, document.getElementById('app'))
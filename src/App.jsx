// 这是项目的根组件
import React from 'react'
// 导入路由组件
import { HashRouter, Route, Link } from 'react-router-dom'
import './main.css' // 公共的css
// 导入需要的 Ant Design 组件
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

// 导入模块化的样式
import styles from './css/app.scss'
// 导入 路由相关的组件页面
import Contacts from './page/contacts/index.jsx';
import store from './redux/store'
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentWillMount() {
  }
  render() {
    return (
        <HashRouter>
          <Layout className="layout" >
            {/* Header 头部区域 */}
            <Header style={{ height: 100, background: '#FFF', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
             
            </Header>
            {/* 中间的 内容区域 */}
            <Content style={{ backgroundColor: '#fff', flex: 1 }}>
              <div style={{ padding: '80px 8% ', background: '#f5f5f5' }}>
                <Route exact path="/contacts" component={Contacts}></Route>
              </div>
            </Content>
            {/* Footer 底部区域 */}
            <Footer style={{ textAlign: 'center', backgroundColor: '#444' }}>
              <div style={{ background: '#f5f5f5' }}>
              </div>
            </Footer>
          </Layout>
        </HashRouter>
    )
  }
}
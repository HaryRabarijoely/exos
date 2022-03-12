import React from 'react'
import {Link} from 'react-router-dom'
import {Menu} from 'antd'
import { HomeOutlined } from '@ant-design/icons'
import { UserAddOutlined } from '@ant-design/icons'
import { LoginOutlined } from '@ant-design/icons'


const Navbar = () => {
  return (
    <Menu theme="dark" mode="horizontal">
        <Menu.Item key="home" icon={<HomeOutlined />}>
            <Link to={`"/"`}>Home</Link> 
        </Menu.Item>
        <Menu.Item key="register" icon={<UserAddOutlined />}>
            <Link to={"/register"}>Register</Link>
        </Menu.Item>
        <Menu.Item key="login" icon={<LoginOutlined />}>
            <Link to={"/login"}>Login</Link>
        </Menu.Item> 
        
    </Menu>
  )
}

export default Navbar
import { useState } from 'react'
import { observer } from "mobx-react"
import { useNavigate } from 'react-router-dom'
import { Form, Input, Select, Button } from 'antd'
import { useStore } from "@/stores"
import styles from './index.module.less'
import imgUrl from '@/assets/imgs/logo_04.png'

const Login = () => {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const { sessionStore } = useStore()

    const onSubmit = (values) => {
        setLoading(true)
        const data = {
            user: values.user,
            pwd: values.pwd,
        }
        sessionStore.login(data, () => {
            navigate('/welcome')
        })
    }

    return (
        <div className={styles.loginContainer}>
            <Form onFinish={onSubmit} >
                <div className={styles.loginLogo}>
                    <img src={imgUrl}/>
                </div>
                <Form.Item name='user' rules={[{ required: true, message: '必填' }]}>
                    <Input placeholder='请输入用户名' autoComplete="account"/>
                </Form.Item>
                <Form.Item name='pwd'>
                    <Input placeholder='请输入密码' autoComplete="password"/>
                </Form.Item>
                <Form.Item>
                    <Button loading={loading} type='primary' htmlType='submit' block>登录</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default observer(Login)
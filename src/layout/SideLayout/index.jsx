import React from 'react'
import { Menu } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'
import { observer } from "mobx-react"
import { useStore } from '@/stores'
import { tools } from '@/utils'
import styles from './index.module.less'

const SideLayout = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const { sessionStore } = useStore()

    const onClick = (e) => {
        if (e.item.props.path === '/welcome') {
            navigate('/welcome')
        } else {
            navigate(tools.generTabKey(e.item.props))
        }
    }

    return (
        <div style={{ width: 205 }} className={styles.sider}>
            <div className={styles.logo} style={{ height: 32 }}></div>
            <Menu
                theme="dark"
                mode="vertical"
                onClick={onClick}
                items={sessionStore.menus}
                selectedKeys={location.pathname.replace(/^\//, '')}
            />
        </div>
    )
}

export default observer(SideLayout)
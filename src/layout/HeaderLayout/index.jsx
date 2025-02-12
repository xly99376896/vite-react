import React, { useState } from 'react'
import { observer } from "mobx-react"
import { useStore } from '@/stores'
import { PoweroffOutlined } from '@ant-design/icons'
import styles from './index.module.less'

const HeaderLayout = () => {

    const { sessionStore } = useStore()

    const logout = () => {
        sessionStore.logout()
    }

    return (
        <div className={styles.header} style={{ height: 58 }}>
            <span className={styles.title}>Vite-Home</span>
            <PoweroffOutlined className={styles.logout} onClick={logout}/>
        </div>
    )
}

export default observer(HeaderLayout)
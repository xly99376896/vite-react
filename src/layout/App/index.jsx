import React, { useEffect } from 'react'
import { observer } from "mobx-react"
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { useStore } from '@/stores'
import HeaderLayout from '../HeaderLayout'
import SideLayout from '../SideLayout'
import TabLayout from '../TabLayout'
import styles from './index.module.less'


const App = (props) => {

    const { sessionStore } = useStore()

    useEffect(() => {
        sessionStore.changeContentSize()
        window.addEventListener('resize', sessionStore.changeContentSize)
        return () => {
            window.removeEventListener('resize', sessionStore.changeContentSize)
        }
    }, [])

    return (
        <ConfigProvider locale={zhCN}>
                <div
                    style={{
                        height: '100vh',
                        display: 'flex',
                    }}
                >
                    <SideLayout />
                    <div style={{ width: 'calc(100% - 205px)' }}>
                        <HeaderLayout />
                        <TabLayout/>
                    </div>
                </div>
        </ConfigProvider>
    )
}

export default observer(App)
import React, { useEffect, useState } from 'react'
import { Tabs } from 'antd'
import qs from 'qs'
import { useNavigate, useLocation, useParams, useOutlet } from 'react-router-dom'
import styles from './index.module.less'
import Content from './Content'
import { isEmpty } from 'lodash'

const TabLayout = () => {

    const ele = useOutlet();
    const location = useLocation()
    const navigate = useNavigate()
    const params = useParams()
    const [tabList, setTabList] = useState([{
        key: '/welcome',
        label: '首页',
        closable: false
    }]);

    useEffect(() => {
        if (location.pathname !== '/') {
            const newTabList = [...tabList]
            let { pathname, search, state = {} } = location
            const tabKey = pathname + search
            let tabIndex = tabList.findIndex(tab => tab.key === tabKey)
            if (tabIndex === -1) {
                if (!isEmpty(search)) {
                    state = qs.parse(search.slice(1))
                }
                newTabList.push({
                    key: tabKey,
                    label: state?.title || '页面',
                    state,
                    children: <Content>{ele}</Content>
                })
                setTabList(newTabList)
            } else {
                if (!newTabList[tabIndex].children) {
                    newTabList[tabIndex].children = <Content>{ele}</Content>
                    setTabList(newTabList)
                }
            }
        } else {
            navigate('/welcome')
        }
    }, [location])

    const closeTab = (key) => {
        let currentTabIndex = tabList.findIndex(tab => tab.key === key)
        if (currentTabIndex !== 0 && currentTabIndex !== -1) {
            const newTabList = tabList.filter(tab => tab.key !== key)
            const newTabKey = tabList[currentTabIndex-1].key
            setTabList(newTabList)
            navigate(newTabKey)
        }
    }

    return (
        <div className={styles.tab} style={{ height: 'calc(100% - 58px)' }}>
            <Tabs
                type="editable-card"
                hideAdd 
                activeKey={`${location.pathname}${location.search}`}
                items={tabList}
                onChange={(key) => navigate(key)}
                onEdit={closeTab}
            />
        </div>
    )
}

export default TabLayout
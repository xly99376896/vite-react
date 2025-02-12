import { useEffect } from 'react'
import { observer } from "mobx-react"
import { useNavigate } from 'react-router-dom'
import { useStore } from '@/stores'

const PrivateRoute = (props) => {

    const navigate = useNavigate();
    const { sessionStore } = useStore()
    const { hasToken, isLogin } = sessionStore

    useEffect(() => {
        if (hasToken) {
            sessionStore.init()
        } else {
            navigate("/login")
        }
    }, [isLogin])

    return isLogin ? props.children : <div/>
}

export default observer(PrivateRoute)
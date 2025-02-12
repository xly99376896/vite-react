import React from 'react'
import { Empty } from 'antd'

const ErrorPage = () => {

    return (
        <div style={{ transform: 'translateY(150%)' }}>
            <Empty description={'404'} />
        </div>
    )
}

export default ErrorPage
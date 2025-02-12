import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from "react-error-boundary";
import { Spin } from 'antd'
import Routers from '@/routes'
import '@/global.less'
import './mock'

createRoot(document.getElementById('root')!).render(
    <ErrorBoundary fallback={<Spin />}>
        <Suspense fallback={<Spin />}>
            <Routers/>
        </Suspense>
    </ErrorBoundary>
)

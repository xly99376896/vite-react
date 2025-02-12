import { lazy } from 'react'
import { createHashRouter, Navigate } from 'react-router-dom'
import PrivateRoute from '@/layout/PrivateRoute'
import Welcome from '@/pages/Welcome'
import Login from '@/pages/Login'
import Sortablejs from '@/pages/Sortablejs'
import Resizable from '@/pages/Resizable'
import GridLayout from '@/pages/GridLayout'
import Tinymce from '@/pages/Tinymce'
import CodeMirror from '@/pages/CodeMirror'
import DiffMatch from '@/pages/DiffMatch'
import MonacoEditor from '@/pages/MonacoEditor'
import Markdown from '@/pages/Markdown'
import Animate from '@/pages/Animate'
import Gsap from '@/pages/Gsap'
import NewEnvironment from '@/pages/NewEnvironment'
import ErrorPage from '@/pages/ErrorPage'

const App = lazy(() => import('@/layout/App'))

export const routes = [
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/',
        element: (
            <PrivateRoute>
                <App />
            </PrivateRoute>
        ),
        children: [
            {
                path: '/',
                element: <Navigate to="/welcome" />,
            },
            {
                path: '/welcome',
                element: <Welcome />,
            },
            {
                path: '/sortablejs',
                element: <Sortablejs />,
            },
            {
                path: '/resizable',
                element: <Resizable />,
            },
            {
                path: '/grid-layout',
                element: <GridLayout />,
            },
            {
                path: '/tinymce',
                element: <Tinymce />,
            },
            {
                path: '/codeMirror',
                element: <CodeMirror />
            },
            {
                path: '/diffmatch',
                element: <DiffMatch />
            },
            {
                path: '/monacoeditor',
                element: <MonacoEditor />
            },
            {
                path: '/markdown',
                element: <Markdown />
            },
            {
                path: '/animate',
                element: <Animate />
            },
            {
                path: '/gsap',
                element: <Gsap />
            },
            {
                path: '/new-environment',
                element: <NewEnvironment />
            },
            {
                path: '/error',
                element: <ErrorPage />,
            },
            {
                path: '*',
                element: <ErrorPage />,
            },
        ],
    },
]

const globalRouter = createHashRouter(routes)

export default globalRouter
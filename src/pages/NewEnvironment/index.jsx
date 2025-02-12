import React from 'react'
import { MarkdownCom } from '@/components'
import { markdown as value } from './index.md'

const App = () => {

    return (
        <div style={{ padding: 15 }}>
            <MarkdownCom value={value}/>
        </div>
    );
}

export default App
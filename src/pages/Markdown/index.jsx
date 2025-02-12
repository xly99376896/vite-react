import React, { useState } from 'react'
import { Input } from 'antd'
import { MarkdownCom } from '@/components'
// import { markdown as value } from './index.md'

const App = () => {

    const [value, setValue] = useState('')

    return (
        <div style={{ display: 'flex', height: '100%' }}>
            <div style={{ width: '50%', borderRight: '2px solid #ddd', padding: 15 }}>
                <Input.TextArea onChange={(e) => { setValue(e.target.value) }} autoSize={{ minRows: 8 }}/>
            </div>
            <div style={{ width: '50%', padding: 15 }}>
                <MarkdownCom value={value}/>
            </div>
        </div>
    );
}

export default App
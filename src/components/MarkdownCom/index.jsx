import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown';

const MarkdownCom = ({value}) => {

    return (
        <div>
            <ReactMarkdown>{value}</ReactMarkdown>
        </div>
    )
}

export default MarkdownCom
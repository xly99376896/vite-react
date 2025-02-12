import React from 'react';
import MonacoEditor from 'react-monaco-editor';

const MonacoEditorCom = (props) => {

    const { value = '', height = 500, getEditor = () => {}, onChange = () => {}, language = 'json' } = props

    return (
        <MonacoEditor
            editorDidMount={(editor, monaco) => {
                getEditor(editor, monaco)
            }}
            defaultValue={value}
            height={height}
            width={'100%'}
            language={language}
            theme={"vs"}
            value={value}
            onChange={(v) => {
                onChange(v)
            }}
        />
    );
}

export default MonacoEditorCom;
  
import React from 'react'
import { useEffect, useRef } from 'react';
import CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript'
import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/merge/merge.js';
import 'codemirror/addon/merge/merge.css';
import DiffMatchPatch from 'diff-match-patch';
import './index.less';

export default function CodeDiff(props) {
    const { firstValue, secondValue } = props;
    window.diff_match_patch = DiffMatchPatch;
    window.DIFF_DELETE = -1;
    window.DIFF_INSERT = 1;
    window.DIFF_EQUAL = 0;

    useEffect(() => {
        initUI();
    }, [firstValue, secondValue]);

    const codeMirror = useRef(null);
    const initUI = () => {

        let _firstValue = JSON.parse(firstValue)
        _firstValue = JSON.stringify(_firstValue, null, 2)
        let _secondValue = JSON.parse(secondValue)
        _secondValue = JSON.stringify(_secondValue, null, 2)

        const target = codeMirror.current;
        target.innerHTML = '';
        CodeMirror.MergeView(target, {
            value: _firstValue ?? '',
            origLeft: null,
            orig: _secondValue ?? '',
            lineNumbers: true, // 显示行号
            mode: 'javascript', //语言,
            highlightDifferences: true,
            connect: 'align',
            readOnly: false, // 只读
        });
    };

    return (
        <div ref={codeMirror} className='code-contrast-s8fq5' style={{ width: '100%', height: '100%' }}></div>
    )
}
import React, { useState, useRef } from 'react'
import Draggable from 'react-draggable';
import { Resizable } from 'react-resizable';
import 'react-resizable/css/styles.css'
import { throttle } from 'lodash';
import styles from './index.module.less'

const App = () => {

    const nodeRef = useRef(null);
    const [drag, setDrag] = useState({x: 0, y: 0})
    const [size, setSize] = useState({width: 300, height: 300})

    const _onResize = throttle((size) => {
        setSize({width: size.width, height: size.height})
    }, 200)

    return (
        <Draggable
            // axis="y" //单轴拖动
            handle=".drag-handle" //指定拖动源
            bounds={'parent'} //拖动边界 或 {top: 10, left: 10, right: 10, bottom: 10}
            scale={1}
            position={{ x: drag.x, y: drag.y }}
            onStart={() => {}}
            onDrag={(e, {x, y}) => {
                setDrag({ x, y }) 
            }}
            onStop={() => {}}
            nodeRef={nodeRef}
        >
            <Resizable
                height={size.height}
                width={size.width}
                onResize={(e, {size}) => {
                    _onResize(size)
                }}
                minConstraints={[200, 200]}
                maxConstraints={[1000, 600]}
            >
                <div  ref={nodeRef} className={styles.box} style={{ width: size.width, height: size.height }} >
                    <h3 className='drag-handle'>拖动</h3>
                </div>
            </Resizable>
        </Draggable>
    )
}

export default App
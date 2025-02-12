import React, { useState } from 'react'
import RGL, { WidthProvider } from "react-grid-layout"
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import styles from './index.module.less'

const ReactGridLayout = WidthProvider(RGL);

const LAYOUT = [
    { i: "001", x: 0, y: 0, w: 2, h: 8 },
    { i: "002", x: 2, y: 0, w: 2, h: 8 },
    { i: "003", x: 4, y: 0, w: 2, h: 8 },
    { i: "004", x: 6, y: 0, w: 2, h: 8 },
    { i: "005", x: 8, y: 0, w: 2, h: 8 },
]

const App = () => {

    const [layout, setLayout] = useState(LAYOUT)

    return (
        <div>
            <ReactGridLayout
                className='layout'
                isDraggable={true}
                isResizable={true}
                rowHeight={10}
                cols={10}
                margin={[10, 10]}
                draggableCancel="#layout_config_remove_aisu" //无需被拖拽的元素
                layout={layout}
                onLayoutChange={(layout) => {
                    setLayout(layout)
                }}
            >
                {
                    layout?.map((el, i) => {
                        return <div key={el.i} className={styles.items}>{el.i}</div>
                    })
                }
            </ReactGridLayout>
        </div>
    )
}

export default App
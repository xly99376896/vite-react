import React, { useState } from 'react'
import { ReactSortable } from "react-sortablejs";
import { Button } from 'antd'
import { isEmpty } from 'lodash';

const LIST = [
    {
        key: '001',
        name: '分组1',
        group: 'group1',
        childList: [
            {
                key: '0011',
                name: '1-1',
            },
            {
                key: '0012',
                name: '1-2',
            },
            {
                key: '0013',
                name: '1-3',
            },
        ]
    },
    {
        key: '002',
        name: '分组2',
        group: 'group1',
        childList: [
            {
                key: '0021',
                name: '2-1',
            },
            {
                key: '0022',
                name: '2-2',
            },
            {
                key: '0023',
                name: '2-3',
            },
        ]
    },
    {
        key: '003',
        name: '分组3',
        group: 'group1',
        childList: [
            {
                key: '0031',
                name: '3-1',
            },
            {
                key: '0032',
                name: '3-2',
            },
            {
                key: '0033',
                name: '3-3',
            },
        ]
    }
]

const App = () => {

    const [list, setList] = useState(LIST)

    return (
        <div>
            {
                list.map((item, index) => {
                    return (
                        <div key={item.key}>
                            <h3>{item.name}</h3>
                            <ReactSortable
                                sort={true}
                                list={item.childList || []}
                                group={{
                                    name: item.group,
                                }}
                                setList={(data) => {
                                    const newList = [...list]
                                    newList[index].childList = data
                                    setList(newList)
                                }}
                                onEnd={() => {}}
                            >
                                {
                                    !isEmpty(item.childList) && item.childList.map(item2 => {
                                        return <Button key={item2.key}>{item2.name}</Button>
                                    })
                                }
                            </ReactSortable>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default App
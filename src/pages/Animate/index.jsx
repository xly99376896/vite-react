import React, { useState } from 'react'
import { Button } from 'antd'
import 'animate.css';

const list = [
    'animate__bounce',
    'animate__flash',
    'animate__wobble',
    'animate__backInLeft',
    'animate__backOutDown',
    'animate__fadeInDown',
    'animate__fadeOutDown',
    'animate__flip',
    'animate__lightSpeedInRight',
    'animate__rotateIn',
    'animate__hinge'
]

const App = () => {

    const [animateClass, setAnimateClass] = useState('');
    const addAnimate = (name) => {
        setAnimateClass(`animate__animated ${name}`);
        setTimeout(() => {
            setAnimateClass('');
        }, 1000);
    }

    return (
        <div>
            {
                list.map(item => {
                    return <Button onClick={() => {addAnimate(item)}}>{item}</Button>
                })
            }
            <h1 className={animateClass}>Animated content</h1>
        </div>
    );
}

export default App
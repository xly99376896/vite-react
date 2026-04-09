import React from 'react'
import styles from './index.module.less'

const TeamLibrary = () => {
    return (
        <div className={styles.container}>
            <div className={styles.group}>
                <h1 className={styles.title}>
                    Build your own team library
                </h1>
                <p className={styles.description}>
                    Don't reinvent the wheel with every design. Team libraries let you share styles and components across files, with everyone on your team.
                </p>
            </div>
        </div>
    )
}

export default TeamLibrary

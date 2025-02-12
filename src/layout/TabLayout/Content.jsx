import { observer } from "mobx-react"
import { useStore } from '@/stores'
import styles from './index.module.less'

const Content = ({ children, contentSize }) => {

    const { sessionStore } = useStore()

    return (
        <div className={styles.content} style={{ height: sessionStore.contentSize.height, width: sessionStore.contentSize.width }}>
            {children}
        </div>
    )
}

export default observer(Content)
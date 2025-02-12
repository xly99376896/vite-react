import { runInAction, makeObservable, observable, action, makeAutoObservable } from "mobx"
import { tools } from '@/utils'
import { MENU_WIDTH, HEADER_HEIGHT, TABS_HEIGHT, CONTENT_PADDING } from '@/constant'
import { loginRequest, getUser } from '@/services/session'
import { isEmpty } from 'lodash'

class sessionStore {

    constructor() {
        this.hasToken = !isEmpty(tools.getAuthority())
        this.isLogin = false
        this.session = null
        this.menus = []
        this.contentSize = {
            width: 0,
            height: 0
        }

        makeAutoObservable(this)

        // makeAutoObservable(this, {}, { autoBind: true })
    }

    async init() {
        const { data } = await getUser()
        runInAction(() => {
            this.session = data.session
            this.menus = data.menus
            this.isLogin = true
            this.hasToken = true
        });
    }

    async login(params, success) {
        const { data } = await loginRequest(params)
        runInAction(() => {
            tools.setAuthority(data.TOKEN)
            this.isLogin = true
            this.hasToken = true
            success()
            this.init()
        });
    }

    logout() {
        tools.setAuthority()
        this.isLogin = false
        this.hasToken = false
    }

    changeContentSize() {
        let contentWidth = innerWidth - MENU_WIDTH - CONTENT_PADDING*2,
            contentHeight = innerHeight - HEADER_HEIGHT - TABS_HEIGHT - CONTENT_PADDING*2
        this.contentSize.width = contentWidth
        this.contentSize.height = contentHeight
    }

}

export default sessionStore

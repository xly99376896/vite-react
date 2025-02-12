import { createContext, useContext } from 'react'
import SessionStore from "./session.jsx"

class RootStore {
  constructor() {
    this.sessionStore = new SessionStore()
  }
}

const rootStore = new RootStore()

function useStore () {
  return rootStore
}

export {
  rootStore,
  useStore,
}
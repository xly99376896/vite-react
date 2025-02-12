import qs from 'qs'
import { isEmpty } from 'lodash'

export function generateUUID() {
    let d = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        let r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x7) | 0x8).toString(16);
      },
    );
    return uuid;
}

export function setAuthority(token) {
    if (token) {
        localStorage.setItem('token', token)
    } else {
        localStorage.removeItem('token')
    }
}

export function getAuthority() {
    return localStorage.getItem('token')
}

export function generTabKey(params) {
    if (!isEmpty(params.query)) {
        return `${params.path}?${qs.stringify(params.query)}`
    } else {
        return params.pathname
    }
}
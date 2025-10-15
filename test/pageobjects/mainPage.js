import { $ } from '@wdio/globals'
import Page from './page.js'

class MainPage extends Page {
    get apiTab() {
        return $(`//div[@class='theme-layout-navbar-left navbar__items']//a[3]`)
    }

    async open() {
        await super.open('') 
    }
}

export default new MainPage()

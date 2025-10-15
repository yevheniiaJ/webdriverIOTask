import { $ } from '@wdio/globals'

class ApiPage {

    get introTitle() {
        return $(`//h1`)
    }

    get breadCrumb() {
        return $(`//span[@class='breadcrumbs__link']`)
    }

    get webdriverLink() {
        return $(`//p[1]//a[1]`)
    }

    get searchField() {
        return $(`//span[@class='DocSearch-Button-Container']`)
    }

    get searchFieldPopUp() {
        return $(`//input[@class='DocSearch-Input']`)
    }

    get footerBlog () {
        return $(`//li[@class='footer__item']//a[@href="/blog"]`)
    }

    get ProtocolLabel() {
        return $(`//div[@class='pagination-nav__label']`)
    }
}

export default new ApiPage()
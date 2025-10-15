import { expect, browser } from '@wdio/globals'
import MainPage from '../pageobjects/mainPage.js'
import ApiPage from '../pageobjects/apiPage.js'
import ProtocolPage from '../pageobjects/protocolPage.js'





describe('Tasks', () => {
    it('Task #1 ', async () => {
        await MainPage.open()
        await MainPage.apiTab.click()
        const url = await browser.getUrl()
        await expect(url).toEqual('https://webdriver.io/docs/api')
        await browser.pause(3000)
        const title = await ApiPage.introTitle.getText()
        await expect(title).toEqual('Introduction')
        const breadcrumb = await ApiPage.breadCrumb.getLocation()
        await expect(breadcrumb).toEqual({ "x": 378.0625, "y": 162.3125 })
        const link = await ApiPage.webdriverLink.getAttribute('href')
        await expect(link).toEqual('/docs/api/webdriver')
        await ApiPage.searchField.click()
        await ApiPage.searchFieldPopUp.setValue('all is ')
        await ApiPage.searchFieldPopUp.addValue('done')
        const value = await ApiPage.searchFieldPopUp.getValue()
        await expect(value).toEqual('all is done')
        await ApiPage.searchFieldPopUp.clearValue()

    })

    it('Task #2', async () => {
        await MainPage.open()
        await MainPage.apiTab.click()
        await ApiPage.footerBlog.scrollIntoView()
        await ApiPage.footerBlog.isClickable()
        await ApiPage.ProtocolLabel.isEnabled()
        const html = await ApiPage.ProtocolLabel.getHTML()
        await expect(html).toEqual('<div class=\"pagination-nav__label\">Protocol Commands</div>')
        await ApiPage.ProtocolLabel.click()
        await browser.waitUntil(
            async () => await ProtocolPage.protocolTitle.isDisplayed(),
            {
                timeout: 10000
            }
        )
        await ApiPage.searchField.click()
        await ApiPage.searchField.isFocused()
    })
})
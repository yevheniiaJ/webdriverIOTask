import { expect, browser } from '@wdio/globals'

describe('task5', () => {
    it('Test case #1', async () => {
        await browser.url('https://github.com/')
        await $(`//header[@role='banner']//div/div[2]/div/div/a`).click()
        await $(`//div[@class='signups-rebrand__container-content']//h1`).isDisplayed()
        await $(`//input[@id='email']`).setValue('test+2313122323@gmail.com')
        await $(`//input[@id='password']`).setValue('Test4ERE232DFD!!')
        await $(`//input[@id='login']`).setValue('hjdshshsjsdsDSd')
        await $(`//div[@class='js-octocaptcha-hide']/button`).click()
        await $(`//h2[@id='verify-account-header']`).isDisplayed()
    })

    it('Test case #2', async () => {
        await browser.url('https://github.com/')
        await $(`//section[@class='Primer_Brand__CTABanner-module__CTABanner___m0t8s lp-Cta is-visible']//h2`).scrollIntoView()
        await $(`//div[@class='CtaForm CTAForm-footer']/a`).isDisplayed()
        await $(`//div[@class='CtaForm CTAForm-footer']/a`).click()
        await $(`//h1[@class='text-center']`).isDisplayed()
        await $(`//form[@action='/github-copilot/pro/signup']`).click()
        await browser.pause(1000)
        const url = await browser.getUrl()
        await expect(url).toContain('login')
    })

    it('Test case #3', async () => {
        await browser.url('https://github.com/')
        await $(`//section[@class='col-12 col-lg-4 mb-5 pr-lg-4']//a[2]`).scrollIntoView()
        await $(`//section[@class='col-12 col-lg-4 mb-5 pr-lg-4']//a[2]`).isClickable()
        await $(`//section[@class='col-12 col-lg-4 mb-5 pr-lg-4']//a[2]`).click()
        await browser.pause(3000)
        const ur = await browser.getUrl()
        await expect(ur).toEqual('https://resources.github.com/newsletter/')
        await $(`//h1[@id='hero-section-brand-heading']`).isDisplayed()
        await $(`//input[@type='email']`).setValue('test+454@gmail.com')
        await $(`//input[@type='checkbox']`).click()
        await $(`//select[@id='country']`).selectByVisibleText('Spain')
        await $(`//button[@type='submit']`).click()
        const text = await $(`//h1[@id='hero-section-brand-heading']`).getText()
        await expect(text).toEqual('Thanks for subscribing!')
    })

    it('Tast case #4', async () => {
        await browser.url('https://github.com/')
        await $(`//qbsearch-input[@class='search-input']`).click()
        await $(`//input[@id='query-builder-test']`).setValue('act')
        await browser.keys('\uE007')
        const text = await $(`//div[@class='Box-sc-g0xbh4-0 MHoGG search-title']`).getText()
        await expect(text).toContain('act')
    })

    it.only('Task #5', async () => {
        await browser.url('https://github.com/')
        await $(`//a[@class='HeaderMenu-link no-underline px-0 px-lg-2 py-3 py-lg-2 d-block d-lg-inline-block']`).click()
        await $(`//h1[@class='h2-mktg']`).isDisplayed()
        await $(`//div[@class='mt-6 mt-md-7']/a`).scrollIntoView()
        await $(`//div[@class='mt-6 mt-md-7']/a`).click()
        await $(`//h1[@class='h1']`).isDisplayed()
    })
})
import { expect, browser } from '@wdio/globals'

describe('test scripts', () => {
    it('Verify logo', async () => {
        await browser.url('https://github.com/')
        await $(`//a[@class='HeaderMenu-link no-underline px-0 px-lg-2 py-3 py-lg-2 d-block d-lg-inline-block']`).click()
        await $(`//h1[@class='h2-mktg']`).isDisplayed()
        await $(`//a[@aria-label='Homepage']`).click()
        await $(`//div[@class='CtaForm']//a`).isDisplayed()
    })

    it('Verify navigation to the "Pick your trial plan" page', async () => {
        await browser.url('https://github.com/')
        await $(`//a[@class='HeaderMenu-link no-underline px-0 px-lg-2 py-3 py-lg-2 d-block d-lg-inline-block']`).click()
        await $(`//div[@class='pr-10 pl-10 mt-6']//a`).click()
        await $(`//div[@class='rounded-3 px-2 pt-5 pb-2 pricing-recommended-plan']`).isDisplayed()
        await $(`//div[@class='rounded-3 px-2 pt-5 pb-2']`).isDisplayed()
    })

    it('Try Github Copilot', async () => {
        await browser.url('https://github.com/')
        await $(`//div[@class='CtaForm']//a`).click()
        await $(`//form[@action='/github-copilot/pro/signup']`).click()
        await browser.pause(1000)
        const url = await browser.getUrl()
        await expect(url).toContain('login')
    })

    it('Verify navigation to the Sign up page', async () => {
        await browser.url('https://github.com/')
        await $(`//*[@id="FormControl--:Rjm6b:"]/div/button`).click()
        await browser.pause(1000)
        const url = await browser.getUrl()
        await expect(url).toContain('signup')
    })

    it('Verify subscribing functionality', async () => {
        await browser.url('https://github.com/')
        await $(`//section[@class='col-12 col-lg-4 mb-5 pr-lg-4']//a[2]`).scrollIntoView()
        await $(`//section[@class='col-12 col-lg-4 mb-5 pr-lg-4']//a[2]`).click()
        await $(`//input[@type='email']`).setValue('test@gmail.com')
        await $(`//input[@type='checkbox']`).click()
        await $(`//button[@type='submit']`).click()
        const text = await $(`//h1[@id='hero-section-brand-heading']`).getText()
        await expect(text).toEqual('Thanks for subscribing!')
    })
})
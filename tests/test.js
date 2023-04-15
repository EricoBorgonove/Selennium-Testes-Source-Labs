const {Builder, By} = require ("selenium-webdriver")
const assert = require ("chai").assert

describe('Login Tests', async function(){

    let driver

    beforeEach (async function(){
        driver = await new Builder().forBrowser("chrome").build();
        await driver.get("http://www.saucedemo.com");
    })

    afterEach (async function(){
        await driver.quit()
    })

    it('Login Sucesso', async function(){
        const campoUser = await driver.findElement({id: "user-name"})
        const campoPassword = await driver.findElement({id: "password"})
        const botaoLogin = await driver.findElement({id:"login-button"})

        await campoUser.sendKeys("standard_user")
        await campoPassword.sendKeys("secret_sauce")
        await botaoLogin.click()

        const title = await driver.findElement(By.className('title')).getText()
        assert.equal('Products', title)
        
    })
    it('Login usuário com problema', async function(){        
        const campoUser = await driver.findElement({id: "user-name"})
        const campoPassword = await driver.findElement({id: "password"})
        const botaoLogin = await driver.findElement({id:"login-button"})

        await campoUser.sendKeys("problem_user")
        await campoPassword.sendKeys("secret_sauce")
        await botaoLogin.click()

        const title = await driver.findElement(By.className('title')).getText()
        assert.equal('Products', title)
        
    })
    it('Login usuário bloqueado', async function(){        
        const campoUser = await driver.findElement({id: "user-name"})
        const campoPassword = await driver.findElement({id: "password"})
        const botaoLogin = await driver.findElement({id:"login-button"})

        await campoUser.sendKeys("locked_out_user")
        await campoPassword.sendKeys("secret_sauce")
        await botaoLogin.click()

        const title = await driver.findElement(By.className('error-message-container error')).getText()
        assert.equal('Epic sadface: Sorry, this user has been locked out.', title)
        
    })
    it('Usuário em branco', async function(){        
        const campoUser = await driver.findElement({id: "user-name"})
        const campoPassword = await driver.findElement({id: "password"})
        const botaoLogin = await driver.findElement({id:"login-button"})

        await campoUser.sendKeys("aaaaaa")
        await campoPassword.sendKeys("secret_sauce")
        await botaoLogin.click()

        const errorComponent = await driver.findElement(By.className('error-message-container error'))
        const resultadoObtido = await errorComponent.isDisplayed()
        assert.equal(resultadoObtido, true)
        
    })   
    it('Senha em branco', async function(){
        const campoUser = await driver.findElement({id: "user-name"})
        const campoPassword = await driver.findElement({id: "password"})
        const botaoLogin = await driver.findElement({id:"login-button"})

        await campoUser.sendKeys("standard_user")
        await campoPassword.sendKeys("aaaa")
        await botaoLogin.click()

        const errorComponent = await driver.findElement(By.className('error-message-container error'))
        const resultadoObtido = await errorComponent.isDisplayed()
        assert.equal(resultadoObtido, true)
        
    })



})
const { Builder, By, until } = require("selenium-webdriver")
const assert = require("chai").assert

describe('Shopping Tests', async function () {

    let driver

    beforeEach(async function () {
        driver = await new Builder().forBrowser("chrome").build();
        await driver.get("http://www.saucedemo.com");
    })

    afterEach(async function () {
        await driver.quit()
    })

    it('Carrinho criado com 1 produto', async function () {
        const campoUser = await driver.findElement({ id: "user-name" })
        const campoPassword = await driver.findElement({ id: "password" })
        const botaoLogin = await driver.findElement({ id: "login-button" })

        await campoUser.sendKeys("standard_user")
        await campoPassword.sendKeys("secret_sauce")
        await botaoLogin.click()

        //Até aqui é requisito para logar o usuário

        const addBackpack = await driver.findElement({ id: "add-to-cart-sauce-labs-backpack" })
        //const addBikeLight = await driver.findElement({ id: "add-to-cart-sauce-labs-bike-light" })
        //const addBoltTShirt = await driver.findElement({ id: "add-to-cart-sauce-labs-bolt-t-shirt" })

        await addBackpack.click()



        const carrinho = await driver.findElement(By.className('shopping_cart_badge')).getText()

        assert.equal(1, carrinho)

    })

    it('Carrinho criado com 3 produtos e removendo 1', async function () {
        const campoUser = await driver.findElement({ id: "user-name" })
        const campoPassword = await driver.findElement({ id: "password" })
        const botaoLogin = await driver.findElement({ id: "login-button" })

        await campoUser.sendKeys("standard_user")
        await campoPassword.sendKeys("secret_sauce")
        await botaoLogin.click()

        //!Até aqui é requisito para logar o usuário

        const addBackpack = await driver.findElement({ id: "add-to-cart-sauce-labs-backpack" })
        const addBikeLight = await driver.findElement({ id: "add-to-cart-sauce-labs-bike-light" })
        const addBoltTShirt = await driver.findElement({ id: "add-to-cart-sauce-labs-bolt-t-shirt" })

        await addBackpack.click()
        await addBikeLight.click()
        await addBoltTShirt.click()

        //! adicionando os 3 atens

        const carrinho = await driver.findElement(By.className('shopping_cart_badge')).getText()
        assert.equal(3, carrinho)
        //! checando se os 3  itens estão no carrinho

        
        const removeBoltTShirt = await driver.findElement({ id: "remove-sauce-labs-bolt-t-shirt" })
        await removeBoltTShirt.click()
        
        const carrinhoEdit = await driver.findElement(By.className('shopping_cart_badge')).getText()
        assert.equal(2, carrinhoEdit)

    })
/*
    it('Logout Sucesso', async function(){
        const campoUser = await driver.findElement({id: "user-name"})
        const campoPassword = await driver.findElement({id: "password"})
        const botaoLogin = await driver.findElement({id:"login-button"})

        await campoUser.sendKeys("standard_user")
        await campoPassword.sendKeys("secret_sauce")
        await botaoLogin.click()

        // const title = await driver.findElement(By.className('title')).getText()
        // assert.equal('Products', title)

        //const botaoogout = await driver.findElement({id:"react-burger-menu-btn"})
        //await botaoogout.click()

        const menu = await driver.findElement(By.id('logout_sidebar_link'))        
        await menu.click()
        
    })


   /* it('Filtro por Maior Preço', async function () {
        const campoUser = await driver.findElement({ id: "user-name" })
        const campoPassword = await driver.findElement({ id: "password" })
        const botaoLogin = await driver.findElement({ id: "login-button" })

        await campoUser.sendKeys("standard_user")
        await campoPassword.sendKeys("secret_sauce")
        await botaoLogin.click()

        //!Até aqui é requisito para logar o usuário

        const campoFiltro = await driver.findElement(By.className('product_sort_container'))
        const opcaoEscolhida = await campoFiltro.findElement(By.css('.product_sort_container > option:nth-child(4)'))
        await opcaoEscolhida.click()



describe('Filter Tests', async function () {

    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser("chrome").build();
        await driver.get("https://www.saucedemo.com/");
        const campoLogin = await driver.findElement(By.id("user-name"));
        const campoPassword = await driver.findElement(By.id("password"));
        const botaoLogin = await driver.findElement(By.id("login-button"));

        await campoLogin.sendKeys('standard_user');
        await campoPassword.sendKeys('secret_sauce');
        await botaoLogin.click();
    });

    afterEach(async function () {
        await driver.quit()
    });

    it('Filtro por nome', async function () {
        const productsList = await driver.findElements(By.className('inventory_item'))
        const productDescription = await productsList[0].findElement(By.className('inventory_item_description'));
        const productLabel = await productDescription.findElement(By.className('inventory_item_label'));
        const link = await productLabel.findElement(By.css('a'));

        console.log(await link.getText());
    });
*/

        /*const addBackpack = await driver.findElement({ id: "add-to-cart-sauce-labs-backpack" })
        const addBikeLight = await driver.findElement({ id: "add-to-cart-sauce-labs-bike-light" })
        const addBoltTShirt = await driver.findElement({ id: "add-to-cart-sauce-labs-bolt-t-shirt" })

        await addBackpack.click()
        await addBikeLight.click()
        await addBoltTShirt.click()

        //! adicionando os 3 atens

        const carrinho = await driver.findElement(By.className('shopping_cart_badge')).getText()
        assert.equal(3, carrinho)
        //! checando se os 3  itens estão no carrinho

        
        const removeBoltTShirt = await driver.findElement({ id: "remove-sauce-labs-bolt-t-shirt" })
        await removeBoltTShirt.click()
        
        const carrinhoEdit = await driver.findElement(By.className('shopping_cart_badge')).getText()
        assert.equal(2, carrinhoEdit)*/

    

    /*it('Login usuário com problema', async function () {


    
        const campoUser = await driver.findElement({ id: "user-name" })
        const campoPassword = await driver.findElement({ id: "password" })
        const botaoLogin = await driver.findElement({ id: "login-button" })

        await campoUser.sendKeys("problem_user")
        await campoPassword.sendKeys("secret_sauce")
        await botaoLogin.click()

        const title = await driver.findElement(By.className('title')).getText()
        assert.equal('Products', title)

    })
    it('Login usuário bloqueado', async function () {
        const campoUser = await driver.findElement({ id: "user-name" })
        const campoPassword = await driver.findElement({ id: "password" })
        const botaoLogin = await driver.findElement({ id: "login-button" })

        await campoUser.sendKeys("locked_out_user")
        await campoPassword.sendKeys("secret_sauce")
        await botaoLogin.click()

        const title = await driver.findElement(By.className('error-message-container error')).getText()
        assert.equal('Epic sadface: Sorry, this user has been locked out.', title)

    })
    it('Usuário em branco', async function () {
        const campoUser = await driver.findElement({ id: "user-name" })
        const campoPassword = await driver.findElement({ id: "password" })
        const botaoLogin = await driver.findElement({ id: "login-button" })

        await campoUser.sendKeys("aaaaaa")
        await campoPassword.sendKeys("secret_sauce")
        await botaoLogin.click()

        const errorComponent = await driver.findElement(By.className('error-message-container error'))
        const resultadoObtido = await errorComponent.isDisplayed()
        assert.equal(resultadoObtido, true)

    })
    it('Senha em branco', async function () {
        const campoUser = await driver.findElement({ id: "user-name" })
        const campoPassword = await driver.findElement({ id: "password" })
        const botaoLogin = await driver.findElement({ id: "login-button" })

        await campoUser.sendKeys("standard_user")
        await campoPassword.sendKeys("aaaa")
        await botaoLogin.click()

        const errorComponent = await driver.findElement(By.className('error-message-container error'))
        const resultadoObtido = await errorComponent.isDisplayed()
        assert.equal(resultadoObtido, true)

    })*/



})
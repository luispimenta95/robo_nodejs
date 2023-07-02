async function openNavegador(){

    const args = process.argv; 
    const jogo = args[2] +  ' x '+ args [3];
    const playwright = require('playwright-core');
    const dados = require('config/config.json');
    const browser = await playwright.chromium.launch({
        channel: 'msedge',headless:false , launchOptions: {
            args: ["--start-fullscreen"]
        } 
    });
   const context = await browser.newContext();
   const page = await context.newPage();
   
   console.log('Abrindo o Prime video');
   await page.goto(dados.server.host);
   await page.click('//*[@id="pv-nav-container"]/div/div[2]/div[2]/div/ol/li[3]');

await page.click('//*[@class="PJs0Zt"]');
await page.fill('//*[@id="ap_email"]',dados.server.user);
await page.fill('//*[@id="ap_password"]',dados.server.pass);
await page.click('//*[@id="signInSubmit"]');

console.log('Dados de login preenchidos');

await page.click('//*[@id="pv-nav-container"]/div/div[1]/div/ol/li[5]/label/a');
await page.click('//*[@id="a-page"]/div[2]/div/main/div/section/div/div/div/ul/li[2]/article/section/div/a');
await page.click('//*[@id="pv-nav-container"]/div/div[2]/div[1]/input');
await page.fill('//*[@id="pv-search-nav"]',jogo);

console.log('Pesquisando o jogo');

await page.keyboard.press('Enter');
await page.click('//*[@id="a-page"]/div[2]/main/div/div[5]/div[2]/div/article/section/div/a');
await page.click('//*[@id="dv-action-box"]/div/div/div[2]/div[1]');
await page.click('//*[@id="main"]/div[1]/div/div[2]/div[1]/div/div/div/a');

console.log('Ativou o player');
await page.check('//*[@id="dv-web-player"]/div/div[1]/div/div/div[2]/div/div/div/div/div[1]/div[8]/div/div/div[1]/div/div/input');

console.log('Marcou o checkbox');
await page.click('//*[@id="dv-web-player"]/div/div[1]/div/div/div[2]/div/div/div/div/div[1]/div[8]/div/div/div[2]/button[2]');
console.log('Fechou o recado');






}
openNavegador();   
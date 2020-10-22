Feature('');

let accounts = new DataTable(['login', 'password']);
accounts.add(['bozvtdagreed0@mailinator.com', 'test.agreed']);
accounts.add(['bozvtdagreed0@mailinator.com', 'test.agreed']);
accounts.add(['lkpklbagreed0@mailinator.com', 'test.agreed']);
accounts.add(['pltqodagreed0@mailinator.com', 'test.agreed']);
accounts.add(['lxithcagreed0@mailinator.com', 'test.agreed']);
accounts.add(['tdzmblagreed0@mailinator.com', 'test.agreed']);
accounts.add(['xouasmagreed0@mailinator.com', 'test.agreed']);
accounts.add(['shukhnagreed0@mailinator.com', 'test.agreed']);
accounts.add(['ottvzaagreed0@mailinator.com', 'test.agreed']);
accounts.add(['kiytniagreed0@mailinator.com', 'test.agreed']);
// accounts.add(['scmpteagreed0@mailinator.com', 'test.agreed']);
// accounts.add(['jbdpzjagreed0@mailinator.com', 'test.agreed']);
// accounts.add(['obthutagreed0@mailinator.com', 'test.agreed']);
// accounts.add(['jtckgjagreed0@mailinator.com', 'test.agreed']);
// accounts.add(['qtojmpagreed0@mailinator.com', 'test.agreed']);
// accounts.add(['fgtnozagreed0@mailinator.com', 'test.agreed']);
// accounts.add(['mmdlxlagreed0@mailinator.com', 'test.agreed']);
// accounts.add(['aatnpnagreed0@mailinator.com', 'test.agreed']);
// accounts.add(['nnzjoiagreed0@mailinator.com', 'test.agreed']);
// accounts.add(['anubvqagreed0@mailinator.com', 'test.agreed']);
// accounts.add(['slrhhtagreed0@mailinator.com', 'test.agreed']);
// accounts.add(['jujfepagreed0@mailinator.com', 'test.agreed']);
// accounts.add(['lmqohjagreed0@mailinator.com', 'test.agreed']);
// accounts.add(['kwmopwagreed0@mailinator.com', 'test.agreed']);
// accounts.add(['xyuynuagreed0@mailinator.com', 'test.agreed']);
// accounts.add(['muexdiagreed0@mailinator.com', 'test.agreed']);
// accounts.add(['auhzoaagreed0@mailinator.com', 'test.agreed']);
// accounts.add(['tohqqnagreed0@mailinator.com', 'test.agreed']);
// accounts.add(['ucpvvkagreed0@mailinator.com', 'test.agreed']);
// accounts.add(['duodqxagreed0@mailinator.com', 'test.agreed']);
// accounts.add(['lsyixjagreed0@mailinator.com', 'test.agreed']);
// accounts.add(['hdypqvagreed0@mailinator.com', 'test.agreed']);
// accounts.add(['wlqqhqagreed0@mailinator.com', 'test.agreed']);
// accounts.add(['pxkrihagreed0@mailinator.com', 'test.agreed']);
// accounts.add(['jtvioiagreed0@mailinator.com', 'test.agreed']);
// accounts.add(['syjjkmagreed0@mailinator.com', 'test.agreed']);
// accounts.add(['fiofaiagreed0@mailinator.com', 'test.agreed']);
// accounts.add(['qbmbryagreed0@mailinator.com', 'test.agreed']);
// accounts.add(['gtyyuzagreed0@mailinator.com', 'test.agreed']);
// accounts.add(['xteicyagreed0@mailinator.com', 'test.agreed']);
// accounts.add(['zpgkkxagreed0@mailinator.com', 'test.agreed']);
// accounts.add(['zutkavagreed0@mailinator.com', 'test.agreed']);
// accounts.add(['wuritnagreed0@mailinator.com', 'test.agreed']);
// accounts.add(['joiieyagreed0@mailinator.com', 'test.agreed']);
// accounts.add(['frrdzmagreed0@mailinator.com', 'test.agreed']);
// accounts.add(['niiragagreed0@mailinator.com', 'test.agreed']);
// accounts.add(['fzepobagreed0@mailinator.com', 'test.agreed']);
// accounts.add(['ftxikfagreed0@mailinator.com', 'test.agreed']);
// accounts.add(['xxhsgxagreed0@mailinator.com', 'test.agreed']);
// accounts.add(['sbldsgagreed0@mailinator.com', 'test.agreed']);
// accounts.add(['ilikgzagreed0@mailinator.com', 'test.agreed']);


Data(accounts).Scenario('test something', ({I, current}) => {
    I.amOnPage('en/login');
    I.fillField("input[type=\"email\"]", current.login)
    I.fillField("input[type=\"password\"]", current.password)
    I.click("//button/span[normalize-space(.)=\'Sign in\']")
    I.click("text=/.*Взяти участь у прийнятті рішен.*/")
    I.click("//*[@id=\"app\"]/div[1]/main/div/div/div[3]/div[last()]/a")
    I.click("//button[@value=\'voting\']")

    I.waitForElement("//button[normalize-space(.)=\'Голосую за\']", 200000)
    I.click("//button[normalize-space(.)=\'Голосую за\']")
    I.click("//button[normalize-space(.)=\'Надіслати голос\']")
    //
    // I.waitForElement("//button[normalize-space(.)=\'Голосую за\']", 200000)
    // I.click("//button[normalize-space(.)=\'Голосую за\']")
    // I.waitForElement("//button[normalize-space(.)=\'Надіслати голос\']", 200000)
});
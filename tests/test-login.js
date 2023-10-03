import { Selector, t } from 'testcafe';


fixture('Login Tests').page('https://dev.deepthought.education/login');

test('Successful Login', async (t) => {

    //valid credentials
    // const Username ='sachink';
    // const Password ='Testing15@';
    
    await t
    .typeText(Selector("#username"), "sachink")
    .typeText(Selector("#password"), "Testing15@")
    .click(Selector("#login"));

        /* .typeText(Selector(testLoginSelectors.usernameInput), Username)
        .typeText(Selector(testLoginSelectors.passwordInput), Password)
        .click(Selector(testLoginSelectors.loginButton))
        .expect(Selector(testLoginSelectors.dashboard).exists).ok(); */
    
});

test('Unsuccessful Login with Invalid Credentials', async (t) => {
    
    //using invalid credentials
    //  const Username ='invalidUser1';
    //  const Password ='invalidPassword1';
 
    await t
    .typeText(Selector("#username"), "invaliduser1")
    .typeText(Selector("#password"), "invalidPassword1")
    .click(Selector("#login"))
     .expect(Selector("#login-error-notify").exists).ok();
 });

























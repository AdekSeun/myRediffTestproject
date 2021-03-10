/// <reference types="cypress" />

import LoginPage from "../PageObject.js/LoginPage";

describe("Reddif_Loginpage", () => {
    const Log = new LoginPage();

    /* it.skip("Create Account", () => {
          Log.urlLogin("https://rediff.com/", "iff", "Shopping");
          Log.clickAction();
          Log.loginPage("kunleseun35", "nikeHHH35$");
          Log.clickActionsignIn();
      });*/

    it("rediffMoney", () => {
        Log.urlLogin("https://www.rediff.com/", "diff", "tes | Shopping");
        Log.RediffMoney();
        Log.CreatPortfolie("kunleseun35@rediffmail.com", "nikeHHH35$");
        Log.submit();
    });

    it.skip("Create Account", () => {});
});
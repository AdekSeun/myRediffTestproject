/// <reference types="cypress" />

//Web Locator for Rediif
class LoginPage {
    //Url Access
    urlLogin(url, urLlINK, pageTitle) {
        cy.visit(url);
        cy.url().should("contain", urLlINK);
        cy.title().should("contain", pageTitle);
    }

    //LoginPage
    loginPage(username, password) {
        cy.get('[id="login1"]').then((input) => {
            cy.wrap(input).type("username");

            cy.get('[id="password"]').then((input) => {
                cy.wrap(input).type("password");
            });
        });
    }

    //Click action
    clickAction() {
            cy.get('[class="signin"]').then((input) => {
                cy.wrap(input).click();
            });
        }
        //Click action
    clickActionsignIn() {
        cy.get('[class="signinbtn"]').then((input) => {
            cy.wrap(input).click();
        });
    }

    //Extract text
    getTextAction(Textlocator, textvalue) {
            cy.get(Textlocator)
                .invoke(text)
                .then((input) => {
                    expect(text).to.equal(textvalue);
                });
        }
        //BackTorediff
    backRedif() {
        cy.get('[title="Go back to Rediff.com homepage"]')
            .contains("rediff.com")
            .click();
    }
    RediffMoney() {
        cy.get('[class="moneyicon relative"]').click();
    }

    //CreatPortfolie

    CreatPortfolie(username, password) {
            cy.contains("My Portfolio").click();
            cy.wait(1000);
            cy.get('[id="useremail"]').clear().type(username);
            cy.get('[id="userpass"]').clear().type(password);
        }
        //ENterLocator

    EnterTEXT(texLocator, inputtex) {
        cy.get("").clear().type("");
    }

    submit() {
        const button = cy.get('[id="loginsubmit"]');
        button.click();
    }
}
export default LoginPage;
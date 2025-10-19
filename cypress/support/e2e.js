import "./commands";
import "allure-cypress";

beforeEach(() => {
  cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
});

import "./commands";
beforeEach(() => {
  cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
});

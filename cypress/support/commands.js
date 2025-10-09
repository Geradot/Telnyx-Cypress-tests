Cypress.Commands.add("hover", { prevSubject: true }, (subject) => {
  cy.wrap(subject).trigger("mouseover");
});

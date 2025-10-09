class BasePage {
  getNavItems() {
    return cy.get("#main-menu-content");
  }

  getMenuButton() {
    return cy.get("button[aria-controls='main-menu-content']");
  }

  visit(url) {
    cy.visit(url);
  }

  openTheMenuItem(title) {
    this.getNavItems().contains(title).click();
    return this;
  }

  checkUrlContains(expected) {
    cy.url().should("include", expected);
  }
}

export default BasePage;

import BasePage from "./BasePage";

class MainPage extends BasePage {
  getBgVideo() {
    return cy.get("video");
  }

  getCallAgentBtn() {
    return cy.get("span[data-content='CALL YOUR AGENT']");
  }

  getAiTabs() {
    return cy.get("#interactive-tool-demo").find("button[role='tab']");
  }

  getAiTab(tab) {
    return this.getAiTabs().filter(`[aria-label="${tab}"]`);
  }

  getPlayAudioBtn() {
    return cy.get("button[aria-label='Play audio']");
  }

  getRoleSelect() {
    return cy.contains("label", "Role").next();
  }

  getTextarea() {
    return cy.get("#text-to-speech-textarea");
  }

  getContactUsLink(pageUrl) {
    return cy.get(`header a[href$="${pageUrl}"]`).eq(1);
  }

  getAccordion() {
    return cy.get("div[aria-label='HOW IT WORKS']").find("button[role='tab']");
  }

  getFirstExampleCode() {
    return cy.contains('"phone_numbers": [').closest("div[role='tabpanel']");
  }

  getSecondExampleCode() {
    return cy.contains('"messages": [').closest("div[role='tabpanel']");
  }

  getRightArrow() {
    return this.getFirstExampleCode()
      .parent()
      .parent()
      .find("button[aria-label='Go to next item']")
      .eq(0);
  }

  checkExampleCodeIsVisible(fn) {
    fn().should("be.visible");
  }

  checkCountItemsInAccordion() {
    this.getAccordion().should("have.length", 6);
  }

  findTheTab(title) {
    return this.getAccordion().contains(title);
  }

  checkActiveTabInAccordion(index) {
    this.getAccordion()
      .should("exist")
      .should("be.visible")
      .eq(index)
      .and("have.attr", "aria-selected", "true")
      .and("have.attr", "data-state", "active");
  }

  checkTabText(expectedText) {
    cy.get("p")
      .contains(expectedText)
      .should("exist")
      .parent()
      .should("be.visible");
  }

  selectRole(role) {
    return cy.contains(role).should("exist").click();
  }

  clickCallAgentBtn() {
    this.getCallAgentBtn().should("exist").click();
    return this;
  }

  checkTextarea(substr) {
    this.getTextarea().should("include.value", substr);
  }
}

export default new MainPage();

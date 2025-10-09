import BasePage from "../BasePage";

class VoiceAi extends BasePage {
  getStartBuildingBtn() {
    return cy.get("span[data-content='Start building for free']").parent();
  }

  clickStartBuildingBtn() {
    this.getStartBuildingBtn().click();
    return this;
  }
}

export default new VoiceAi();

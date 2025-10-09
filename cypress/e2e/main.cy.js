import pages from "../fixtures/pages.json";
import roles from "../fixtures/roles.json";
import capabilities from "../fixtures/capabilities.json";
import MainPage from "../pages/MainPage";
import VoiceAi from "../pages/Products/VoiceAi";

describe("Testing Telnyx.com", () => {
  beforeEach(() => {
    MainPage.visit(pages.main);
    MainPage.getBgVideo().should("be.visible");
  });

  it("TC-1: Clicking the 'Start building for free' button opens the registration page", () => {
    const products = pages.navigation.products.title;
    const voiceAi = pages.navigation.products.subMenu.voice["voice ai"].title;
    const voiceAiUrl = pages.navigation.products.subMenu.voice["voice ai"].url;
    const signUpUrl = pages.signup;

    MainPage.openTheMenuItem(products)
      .openTheMenuItem(voiceAi)
      .checkUrlContains(voiceAiUrl);

    VoiceAi.clickStartBuildingBtn().checkUrlContains(signUpUrl);
  });

  it("TC-2: Changing the Role also changes the spoken text in the 'Text to speech' tab", () => {
    const matchToSelectedTab = ["have.attr", "aria-selected", "true"];

    MainPage.clickCallAgentBtn();

    MainPage.getAiTabs()
      .first()
      .should(...matchToSelectedTab);

    MainPage.getAiTab("Text to speech")
      .click()
      .should(...matchToSelectedTab);
    MainPage.checkTextarea("Good morning");
    MainPage.getPlayAudioBtn().should("be.visible");
    MainPage.getRoleSelect().should("be.visible").click();
    MainPage.selectRole(roles[2]);
    MainPage.checkTextarea("customer service team");
  });

  it("TC-3: Clicking the 'Contact us' link opens it", () => {
    MainPage.getContactUsLink(pages["contact us"]).should("be.visible").click();
    MainPage.checkUrlContains(pages["contact us"]);
  });

  it("TC-4: Clicking on a collapsible element reveals hidden text", () => {
    const [firstKey, firstValue] = Object.entries(capabilities).at(0);
    MainPage.getAccordion();
    MainPage.checkCountItemsInAccordion();
    MainPage.checkActiveTabInAccordion(+firstKey);
    MainPage.checkTabText(firstValue.description);

    const [lastKey, lastValue] = Object.entries(capabilities).at(-1);
    MainPage.findTheTab(lastValue.title).should("be.visible").click();
    MainPage.checkActiveTabInAccordion(+lastKey);
    MainPage.checkTabText(lastValue.description);
  });

  it.only("TC-5: Clicking on the arrow reveals the next code example", () => {
    // MainPage.checkExampleCodeIsVisible(MainPage.getFirstExampleCode);
    MainPage.getFirstExampleCode().should("be.visible");
    MainPage.getRightArrow().should("be.visible").click();
    // MainPage.checkExampleCodeIsVisible(MainPage.getSecondExampleCode);
    MainPage.getSecondExampleCode().should("be.visible");
  });
});

const { describe, it } = require("mocha");
const { Builder, Key, By } = require("selenium-webdriver");
const should = require("chai").should();

describe("Testing Navigation to Links Page", () => {
  it("Successfully navigated to Links Page", async () => {
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://www.thesparksfoundationsingapore.org/");

    await driver
      .findElement(
        By.xpath(
          "//nav[@id='link-effect-3']/ul[@class='nav navbar-nav']/li[4]/a[@role='button']"
        )
      )
      .click();

    await driver
      .findElement(
        By.xpath(
          "//nav[@id='link-effect-3']/ul[@class='nav navbar-nav']/li[4]/ul[@class='dropdown-menu']//a[@href='/links/software-and-app/']"
        )
      )
      .click();

    let currURL = await driver.getCurrentUrl().then((val) => val);

    // Chai
    currURL.should.equal(
      "https://www.thesparksfoundationsingapore.org/links/software-and-app/"
    );

    driver.quit();
  });
});

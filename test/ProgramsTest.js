const { describe, it } = require("mocha");
const { Builder, Key, By } = require("selenium-webdriver");
const should = require("chai").should();

describe("Testing Student Programs Page", () => {
  it("Successfully navigated to Students Programs", async () => {
    // Making the Driver
    let driver = await new Builder().forBrowser("chrome").build();

    //Navigate to our website
    await driver.get("https://www.thesparksfoundationsingapore.org/");

    // Assert Tests
    await driver
      .findElement(
        By.xpath(
          "//nav[@id='link-effect-3']/ul[@class='nav navbar-nav']/li[3]/a[@role='button']"
        )
      )
      .click();

    await driver
      .findElement(
        By.xpath(
          "//nav[@id='link-effect-3']/ul[@class='nav navbar-nav']/li[3]/ul[@class='dropdown-menu']//a[@href='/programs/student-scholarship-program/']"
        )
      )
      .click();

    let currURL = await driver.getCurrentUrl().then((val) => val);

    currURL.should.equal(
      "https://www.thesparksfoundationsingapore.org/programs/student-scholarship-program/"
    );
    driver.quit();
  });
});

describe("Testing The Color of the Header of Student Program Page", () => {
  it("Header Color is Correct", async () => {
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get(
      "https://www.thesparksfoundationsingapore.org/programs/student-scholarship-program/"
    );

    let headerColor = await driver
      .findElement(
        By.css("div:nth-of-type(3) > .tittle-agileits-w3layouts > span")
      )
      .getCssValue("color")
      .then((val) => val);

    headerColor.should.equal("rgba(245, 177, 32, 1)");

    driver.quit();
  });
});

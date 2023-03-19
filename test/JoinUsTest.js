const { describe, it } = require("mocha");
const { Builder, Key, By, Select } = require("selenium-webdriver");
const should = require("chai").should();

describe("Testing the why join us Link", () => {
  it("Why-Join-Us link is correct ", async () => {
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://www.thesparksfoundationsingapore.org/");

    let joinUsLink = await driver
      .findElement(
        By.xpath(
          "//nav[@id='link-effect-3']/ul[@class='nav navbar-nav']/li[5]/ul[@class='dropdown-menu']//a[@href='/join-us/why-join-us/']"
        )
      )
      .getAttribute("href")
      .then((val) => val);

    // Chai
    joinUsLink.should.equal(
      "https://www.thesparksfoundationsingapore.org/join-us/why-join-us/"
    );

    await driver.quit();
  });
  it("Successfully clicked the join-us-link", async () => {
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://www.thesparksfoundationsingapore.org/");

    let joinUsLink = await driver.findElement(
      By.css("li:nth-of-type(5) > a[role='button']")
    );

    await joinUsLink.click();
    await driver
      .findElement(
        By.css("li:nth-of-type(5) > .dropdown-menu > li:nth-of-type(1) > a")
      )
      .click();

    await driver.quit();
  });
});

describe("Testing Submitting on Join-Us form", () => {
  it("Successfuly submitted on join-us form", async () => {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get(
      "https://www.thesparksfoundationsingapore.org/join-us/why-join-us/"
    );

    await driver
      .findElement(By.css("form[method='post'] > input[name='Name']"))
      .sendKeys("Marwan", Key.TAB);

    await driver
      .findElement(By.css("form[method='post'] > .form-control"))
      .click();

    await driver
      .findElement(
        By.xpath(
          "/html//div[@class='form-bg-w3ls']/form[@action='#']/select[@class='form-control']/option[.='Intern']"
        )
      )
      .click();

    // Submiting with rondom email everytime
    await driver
      .findElement(By.css("form[method='post'] > input[name='Email']"))
      .sendKeys(
        `eng.marwan${Math.floor(Math.random() * 100)}@dev.com`,
        Key.RETURN
      );

    await driver.quit();
  });
});

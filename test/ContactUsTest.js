const { describe, it } = require("mocha");
const { Builder, Key, By } = require("selenium-webdriver");
const should = require("chai").should();

describe("Testing the Contact-Us link", () => {
  it("Successfully found the link ", async () => {
    let driver = await new Builder().forBrowser("chrome").build();

    // Navigate to our website
    await driver.get("https://www.thesparksfoundationsingapore.org/");
    let contactUs = await driver.findElement(
      By.xpath(
        "//nav[@id='link-effect-3']/ul[@class='nav navbar-nav']//a[@href='/contact-us/']"
      )
    );

    let contactUsLink = await contactUs.getAttribute("href").then((val) => val);
    await contactUs.click();
    contactUsLink.should.equal(
      "https://www.thesparksfoundationsingapore.org/contact-us/"
    );
    console.log(
      `Found contact-us item in nav bar with href value of ${contactUsLink}`
    );

    await driver.quit();
  });
});

describe("Contact-US LinkedIn url", () => {
  it("Successfully navigated to LinkedIn Group", async () => {
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get(
      "https://www.thesparksfoundationsingapore.org/contact-us/"
    );

    await driver
      .findElement(
        By.xpath(
          "/html//div[@class='contact']/div[@class='container']/div/div[1]/div[1]//a[@href='https://www.linkedin.com/groups/10379184/']"
        )
      )
      .click();

    let currURL = await driver.getCurrentUrl().then((val) => val);

    currURL.should.equal(
      "https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fgroups%2F10379184%2F&trk=login_reg_redirect"
    );

    driver.quit();
  });
});

const { describe, it } = require("mocha");
const { Builder, Key, By } = require("selenium-webdriver");
const should = require("chai").should();

// Testing The home button and Logo
describe("Testing the nabbar ", () => {
  it("Successfully found the navbar brand", async () => {
    // Making the Driver
    let driver = await new Builder().forBrowser("chrome").build();

    //Navigate to our website
    await driver.get("https://www.thesparksfoundationsingapore.org/");

    // Assert Tests
    let websiteImage = await driver
      .findElement(
        By.xpath(
          `/html//div[@id='home']//a[@href='/']/img[@src='/images/logo_small.png']`
        )
      )
      .getRect()
      .then((val) => val);
    console.log(
      `Found navbar icon with height of ${websiteImage.height}px and width of ${websiteImage.width}px`
    );

    await driver.quit();
  });

  it("Testing the Apperance of the navbar", async () => {
    // Making the driver
    let driver = await new Builder().forBrowser("chrome").build();

    // Navigate to our website
    await driver.get("https://www.thesparksfoundationsingapore.org/");

    // Assert Test
    let navBar = await driver
      .findElement(
        By.xpath("/html//div[@id='home']//nav[@class='navbar navbar-default']")
      )
      .getRect()
      .then((val) => val);
    console.log(
      `Found navbar with height of ${navBar.height}px and width of ${navBar.width}px`
    );

    await driver.quit();
  });
});

describe("Testing Go-Top Button", () => {
  it("Go-Top Button Successfully Worked", async () => {
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://www.thesparksfoundationsingapore.org/");

    // To go to the buttom of the web-page
    await driver.executeScript(
      "window.scrollTo(0, document.body.scrollHeight)"
    );

    let befPos = await driver
      .executeScript("return window.scrollY")
      .then((val) => val);
    console.log(befPos);

    let btn = await driver
      .findElement(By.xpath("/html//a[@id='toTop']"))
      .click();

    let currPos = await driver
      .executeScript("return window.scrollY")
      .then((val) => val);

    setTimeout(() => {
      currPos.should.equal("0");
    }, 2000);

    driver.quit();
  });
});

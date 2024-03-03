import { bikeLight } from "../../models/products";
import { lockedOutUser, problemUser, standardUser } from "../../models/user";


Feature('Login on Sauce demo website').tag('web');

Scenario('Login on Sauce demo website with standard user', async ({ I, loginPage }) => {
  await loginPage.login(standardUser)
  await I.seeInCurrentUrl('/inventory.html');
});

Scenario('Login on Sauce demo website with locked out user', async ({ I, loginPage }) => {
  await loginPage.login(lockedOutUser)
  await loginPage.checkErrorMessage(lockedOutUser)
});

Scenario('Login on Sauce demo website with problem user', async ({ I, loginPage, productPage }) => {
  await loginPage.login(problemUser)
  await productPage.checkProductImage(bikeLight)
});

Scenario('Logout from Sauce demo website', async ({ I, loginPage }) => {
  await loginPage.login(standardUser)
  await loginPage.logout()
});

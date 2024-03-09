import { Page } from '@playwright/test';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
class UserLoginSelectors {
  usernameInput = (page: Page) => page.locator('#loginInner_u');

  pwInput = (page: Page) => page.locator('#loginInner_p');

  loginBtn = (page: Page) => page.locator('.loginButton');
}

export default UserLoginSelectors;

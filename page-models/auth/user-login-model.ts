import { Page } from '@playwright/test';
import { autoInjectable, container } from 'tsyringe';
import UserLoginSelectors from '../../selectors/auth/user-login-selectors';

@autoInjectable()
class UserLoginModel {
  constructor(private pageSelectors: UserLoginSelectors) {}

  async userLogin(page: Page, username: string, password: string) {
    await this.pageSelectors.usernameInput(page).fill(username);
    await this.pageSelectors.pwInput(page).fill(password);
    await this.pageSelectors.loginBtn(page).click();

    await page.waitForURL('**/plans');
  }
}

export default container.resolve(UserLoginModel);

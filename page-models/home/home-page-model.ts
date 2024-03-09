import { Page, expect } from '@playwright/test';
import { autoInjectable, container } from 'tsyringe';
import HomePageSelectors from '../../selectors/home/home-page-selectors';

@autoInjectable()
class HomePageModel {
  constructor(private pageSelectors: HomePageSelectors) {}

  async redirectToLogin(page: Page) {
    await this.pageSelectors.loginLink(page).click();

    await page.waitForURL('**/login**');
  }

  async veirfyUsernameDisplay(page: Page, username: string) {
    expect(this.pageSelectors.customerNameLink(page)).toHaveText(new RegExp(username, 'i'));
  }

  async selectPlan(page: Page, planName: string) {
    await this.pageSelectors.selectPlanBtn(page, planName).click();

    await page.waitForURL('**/plan-details');
  }
}

export default container.resolve(HomePageModel);

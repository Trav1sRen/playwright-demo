import { Page } from '@playwright/test';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
class HomePageSelectors {
  loginLink = (page: Page) => page.locator('.rktn-header-bottom button');

  customerNameLink = (page: Page) => page.locator('.left__customer-name');

  selectPlanBtn = (page: Page, planName: string) =>
    page
      .locator('.plan-card')
      .filter({ has: page.getByText(planName) })
      .getByRole('button')
      .last();
}

export default HomePageSelectors;

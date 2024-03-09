import { test } from '@playwright/test';
import userLoginModel from '../page-models/auth/user-login-model';
import homePageModel from '../page-models/home/home-page-model';

test.describe.configure({ mode: 'serial' });

test('Add plan to cart', async ({ page }) => {
  await page.goto('./');
  await homePageModel.redirectToLogin(page);
  await userLoginModel.userLogin(page, process.env.USER_EMAIL!, process.env.PASSWORD!);
  await homePageModel.veirfyUsernameDisplay(page, 'Ivan Su');
  await homePageModel.selectPlan(page, 'Rakuten最強プラン');
});

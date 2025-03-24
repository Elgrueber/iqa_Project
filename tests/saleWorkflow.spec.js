import { expect, describe } from '@playwright/test';
import { test } from '../fixture';
import { loginUser } from '../helpers/preconditions';
import { pages } from '../testData';

describe('Sale workflow', () => {
    test('user enable to see sale items', async ({ page, menuComponent }) => {
        await page.goto('/');
        await menuComponent.clickSale();
        expect(page.url()).toContain(pages[5].expectedUrl); 
    });
})


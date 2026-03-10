import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/homePage/HomePage';
// TODO: import CartPage once implemented
// TODO: import ProductDetailPage once implemented

test.describe('Add to Cart — Latest Product', () => {

    test('should add a latest product to cart and verify it appears in the cart', async ({ page }) => {
        // ── Arrange ──────────────────────────────────────────────
        const homePage = new HomePage(page);
        // TODO: const cartPage = new CartPage(page);
        // TODO: const productDetailPage = new ProductDetailPage(page);

        // ── Act — Step 1: Navigate to Home Page ──────────────────
        await homePage.navigate();

        // ── Act — Step 2: Grab product info from Latest Products ─
        const productName = await homePage.latestProductContainer.getProductName(0);
        // const productPrice = await homePage.latestProductContainer.getProductPrice(0);  // optional

        // ── Act — Step 3: Click the product → Detail Page ────────
        await homePage.latestProductContainer.clickProduct(0);
        // TODO: await productDetailPage.waitLoaded();

        // ── Act — Step 4: Add to cart ────────────────────────────
        // TODO: await productDetailPage.addToCart();

        // ── Act — Step 5: Navigate to Cart Page ──────────────────
        // TODO: await cartPage.navigate();

        // ── Assert — Step 6: Verify product name in cart ─────────
        // TODO: const cartItemNames = await cartPage.getCartItemNames();
        // expect(cartItemNames).toContain(productName);

        // ── Assert — Step 7 (Bonus): Verify price ────────────────
        // TODO: verify price matches as well
    });
});
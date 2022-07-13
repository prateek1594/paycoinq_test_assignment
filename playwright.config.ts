// playwright configuration file
import { PlaywrightTestConfig } from '@playwright/test';
import 'dotenv/config';

const config: PlaywrightTestConfig = {
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 3 : 0,
    globalTimeout: 5 * 60 * 1000,
    globalSetup: require.resolve('./tests/global-setup'),
    reporter: [['html', {open: 'always'}]],
    expect: {
        timeout: 5 * 10000,
    },
    use: {
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
        baseURL: process.env.BASE_URL ? process.env.BASE_URL: 'https://www.saucedemo.com'
    },
    projects: [
        {
            name: 'chromium',
            use: {
                browserName: 'chromium'
            },
        },
        {
            name: 'firefox',
            use: {
                browserName: 'firefox'
            },
        },
        {
            name: 'safari',
            use: {
                browserName: 'webkit'
            },
        },
    ],
};
export default config;
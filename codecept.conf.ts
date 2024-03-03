import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './tests/*/*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://www.saucedemo.com',
      show: false
    },
    REST: {
      endpoint: 'https://petstore.swagger.io/v2'
    },
    ChaiWrapper: {
      require: 'codeceptjs-chai'
  }
  },
  include: {
    I: './steps_file',
    loginPage: './pages/login.ts',
    productPage: './pages/product.ts'
  },
  name: 'codeceptjs_demo',
  plugins: {
    customLocator: {
      enabled: true,
      attribute: 'data-test'
    }
   }
}
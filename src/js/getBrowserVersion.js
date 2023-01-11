import { detect } from 'detect-browser';

function getBrowserVersion() {
  const browser = detect();

  if (browser) {
    console.log(browser.name);
    console.log(browser.version);
    if (
      (browser.name === 'chrome' &&
        Number(browser.version.split('.')[0]) < 108) ||
      (browser.name === 'firefox' &&
        Number(browser.version.split('.')[0]) < 108) ||
      (browser.name === 'safari' &&
        Number(browser.version.split('.')[0]) < 16) ||
      (browser.name === 'edge' &&
        Number(browser.version.split('.')[0]) < 108) ||
      (browser.name === 'msie' && Number(browser.version.split('.')[0]) < 11)
    ) {
      alert('Ваш браузер устарел, обновите его версию.');
    }
  }
}
getBrowserVersion();

function getBrowser() {
  navigator.sayswho = (() => {
    const usrAgent = navigator.userAgent;
    let tem = '';
    let usrAgentMatch =
      usrAgent.match(
        /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
      ) || [];
    if (/trident/i.test(usrAgentMatch[1])) {
      tem = /\brv[ :]+(\d+)/g.exec(usrAgent) || [];
      return `IE ${tem[1] || ''}`;
    }
    if (usrAgentMatch[1] === 'Chrome') {
      tem = usrAgent.match(/\b(OPR|Edge)\/(\d+)/);
      if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    usrAgentMatch = usrAgentMatch[2]
      ? [usrAgentMatch[1], usrAgentMatch[2]]
      : [navigator.appName, navigator.appVersion, '-?'];
    if (usrAgent.match(/version\/(\d+)/i) != null)
      usrAgentMatch.splice(1, 1, tem[1]);
    return usrAgentMatch.join(' ');
  })();
  const str = navigator.sayswho;
  const browser = str.substring(0, str.indexOf(' '));
  let version = str.substring(str.indexOf(' '));
  version = version.trim();
  version = parseInt(version, 10);
  console.log(browser);
  console.log(version);

  if (
    (browser === 'Chrome' && version < 70) ||
    (browser === 'Firefox' && version < 53) ||
    (browser === 'Safari' && version < 5) ||
    (browser === 'IE' && version < 11) ||
    (browser === 'Opera' && version < 52)
  ) {
    alert('Ваш браузер устарел, обновите его версию.');
  }
}

getBrowser();

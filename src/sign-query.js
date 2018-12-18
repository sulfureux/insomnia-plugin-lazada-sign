const alphaSort = require('alpha-sort');
const queryString = require('query-string');
const crypto = require('crypto');
const { parse } = require('url');

module.exports = function (context) {
  const { request } = context;
  const toUrl = request.getUrl();
  const isApi = /api\.lazada/.test(toUrl);
  const isAuth = /auth\.lazada\.com\/rest/.test(toUrl);
  if (isApi || isAuth) {
    const secret = request.getEnvironmentVariable('lazada_app_secret');
    const appKey = request.getEnvironmentVariable('lazada_app_key');
    const accessToken = request.getEnvironmentVariable('access_token');
    if (!secret) {
      window.alert(`Please set your 'lazada_app_secret' value at your environments`);
      return;
    }
    if (!appKey) {
      window.alert(`Please set your 'lazada_app_key' value at your environments`);
      return;
    }
    request.setParameter('timestamp', Date.now());
    request.setParameter('app_key', appKey);
    request.setParameter('sign_method', 'sha256');
    if (!isAuth && accessToken) {
      request.setParameter('access_token', accessToken);
    }
    const parsedUrl = parse(toUrl);
    const urlPath = parsedUrl.pathname.replace('/rest', '');
    const params = request.getParameters();
    params.sort((a, b) => alphaSort.asc(a.name, b.name));
    const paramsObj = {};
    params.map(param => { paramsObj[param.name] = param.value; });
    let paramStr = '';
    Object.keys(paramsObj).map(key => {
      paramStr += `${key}${paramsObj[key]}`;
    });
    const prepare = `${urlPath}${paramStr}`;
    const hash = crypto.createHmac('sha256', secret).update(prepare).digest('hex').toUpperCase();
    request.setParameter('sign', hash);
  }
};
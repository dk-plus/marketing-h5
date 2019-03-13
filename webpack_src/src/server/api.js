const $ = require('jquery');

const Index = (() => {

  // 该模块
  const _e = {};

  _e.proxyGet = (url, options, success, error) => {
    $.ajax({
      type: 'GET',
      url: `/proxy/${url}`,
      data: options,
      dataType: 'json',
      timeout: 300,
      success: (data) => {
        // console.log(data);
        if (data && data.returnCode === '0' && data.returnValue.content) {
          const content = data.returnValue.content;
          success && typeof success === 'function' && success(content);
        }
      },
      error: (xhr, type) => {
        // console.log('error:', xhr, type);
        error && typeof error === 'function' && error({xhr, type});
      }
    })
  }

  _e.proxyPost = (url, options) => {
    $.ajax({
      type: 'POST',
      url: url,
      data: JSON.stringify(options),
      contentType: 'application/json',
      dataType: 'json',
      timeout: 300,
      success: (data) => {
        // console.log(data);
        success && typeof success === 'function' && success(data);
      },
      error: (xhr, type) => {
        // console.log('error:', xhr, type);
        error && typeof error === 'function' && error({ xhr, type });
      }
    })
  }

  return _e;

})();

module.exports = Index;

// Event snippet for Business inquiries

function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof url != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
    send_to: 'AW-11264741652/APPECMrwmb4YEJSiufsp',
    event_callback: callback,
  });
  return false;
}

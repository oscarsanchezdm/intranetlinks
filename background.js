
function redirect(requestDetails) {
  return { redirectUrl: requestDetails.url.replace('http://tmbnet/', 'https://intranet.tmb.cat/') };
}

// add the listener,
// passing the filter argument and "blocking"
browser.webRequest.onBeforeRequest.addListener(
    redirect,
    {
      urls: ["http://tmbnet/*"]
    },
    ["blocking"]
);
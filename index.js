'use strict';

const repos = [ 'dot', 'nix', 'sh' ];

const baseUrl = (repo) => {
  return (
    `https://raw.githubusercontent.com/d3dr5v/${repo}/refs/heads/master/`
  );
};

exports.handler = (event, context, callback) => {
  console.log('In redirect handler');

  try {
    const request = event.Records[0].cf.request;
    const uri = request.uri;

    const segments = uri.split('/').filter(segment => segment.length > 0);

    const firstSegment = segments.length > 0 ? segments[0] : null;
    const remainder = segments.length > 1 ? segments.slice(1).join('/') : null;

    if (firstSegment && remainder && repos.includes(firstSegment)) {
      const base = baseUrl(firstSegment);
      const url = `${base}${remainder}`;

      const response = {
        status: '301',
        statusDescription: 'Moved Permanently',
        headers: {
          location: [{
            key: 'Location',
            value: url,
          }]
        }
      };
      callback(null, response);
    } else {
      callback(null, request);
    }
  } catch(error) {
    console.error(error);
    callback(null, request);
  }
};

import httpRestConfig from '@jswork/http-rest-config';

export default (inConfig, inRequest, inOptions?): any => {
  const context = {};
  const http = inRequest.getInstance(inOptions);
  httpRestConfig(context, http, inConfig);
  return context;
};

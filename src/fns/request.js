function makeRequest() {
  const controller = new AbortController();
  const signal = controller.signal;
  return [
    function (url, options = {}) {
      const extras = {
        ...options,
        signal,
        mode: "cors"
      };

      return fetch(url, { ...options, ...extras });
    },
    controller
  ];
}

export default makeRequest;

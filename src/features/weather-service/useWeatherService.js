import { useState, useEffect, useRef } from "react";
import { makeRequest } from "../../fns";

function useWeatherService() {
  const [data, setData] = useState([]);
  let ref = useRef();

  useEffect(() => {
    let timer = setTimeout(
      () => {
        get();
      },
      data.length === 0 ? 0 : 1000 * 5
    );

    return () => {
      clearTimeout(timer);
      if (ref.current) {
        ref.current.abort();
      }
    };
  }, [data]);

  function get() {
    const [_get, controller] = makeRequest();

    // ref.current = controller;

    return _get("https://v0lmb.sse.codesandbox.io/")
      .then(async (res) => {
        if (res.status === 200) {
          const data = await res.json();
          setData(data.forecast);
        } else {
          throw new Error("status not handled");
        }
      })
      .catch(() => {})
      .finally(() => {
        ref.current = null;
      });
  }

  return data;
}

export default useWeatherService;

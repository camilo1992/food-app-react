import { useCallback, useState } from "react";

const useHttpRequest = () => {
  const [dataSent, setDataSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const sendRequest = useCallback(async (configRequest, applyData = null) => {
    setIsLoading(true);
    try {
      const response = await fetch(configRequest.url, {
        method: configRequest.method ? configRequest.method : "GET",
        body: configRequest.body ? JSON.stringify(configRequest.body) : null,
        headers: configRequest.headers ? configRequest.headers : {},
      });

      if (!response.ok) {
        throw new Error("there is a failure, please check ...");
      }
      const data = await response.json();
      if (applyData) {
        applyData(data);
      }
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
    setIsLoading(false);

    if (configRequest.method === "POST") {
      console.log("this is a post");
      setDataSent(true);
      console.log("it is working");
    }
  }, []);

  return { isLoading, dataSent, sendRequest, error };
};

export default useHttpRequest;

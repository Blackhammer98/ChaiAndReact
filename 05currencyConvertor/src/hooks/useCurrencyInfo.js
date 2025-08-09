import { useEffect, useState } from "react";

import React from "react";

function useCurrencyInfo(currencyCode) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://latest.currency-api.pages.dev/v1/currencies/${currencyCode}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currencyCode]));
    console.log(data);
  }, [currencyCode]);

  return data;
}

export default useCurrencyInfo;

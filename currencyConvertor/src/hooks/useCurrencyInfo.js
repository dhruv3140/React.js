import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
    const [data, setData] = useState({});
    
    useEffect(() => {
        // The new, updated API URL
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
            .catch((err) => console.error("Failed to fetch currency:", err)); // Added error logging just in case!
    }, [currency]);
    
    return data;
}

export default useCurrencyInfo;
import React, { useEffect, useState } from 'react';

const CurrencyRateFetch = () => {
    const [data, setCurrency] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        currencyFetch();
    }, []);

    const currencyFetch = async () => {
        try {
            const response = await fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_iTu53TOf94Z7oLeP1vqdTPOrtTvq1a8qlqqDqRGU&currencies=INR&base_currency=USD'); // Replace with your API endpoint
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            const data = await response.json();
            setCurrency(data);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };
    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>{item.INR}</li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default CurrencyRateFetch;
// import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

function Prices() {
    const apiKey = '50E804A8-4D32-4316-BCA0-6044B122839F'
    const params = useParams();
    const symbol = params.symbol
    const url = `https://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`

    const [coin, setCoin] = useState('null')

    const getCoin = async () => {
        try {
            const response = await fetch(url)
            const data = await response.json();
            setCoin(data);
            console.log(data);
        } catch (error) {
            console.error(error)  
        }
    }
    useEffect(() => {
        getCoin()
    }, []);

    const loaded = () => {
        return (
            <div>
                <h1>
                    {coin.asset_id_base}/{coin.asset_id_quote}
                </h1>
                <h2>{coin.rate}</h2>
            </div>
        )
    }
    const loading = () =>{
        return <h1>Loading...</h1>
    };
    return coin && coin.rate ? loaded() : loading();

}
export default Prices
import React from "react";
import StarCheckbox from './StarCheckbox';
import CryptoChart from './CryptoChart';

const CoinRow = ({coin, index}) => {
    console.log(coin, index)
    return (
        <tr key={coin.name}>
            <td style={{display: 'flex', alignItems: 'center' }}>
                <StarCheckbox />
                <span style={{marginLeft: '5px'}}>{index}</span>
            </td>
        <td>
            <img src={coin.image} alt={coin.symbol} style={{maxwidth: '5%', minWidth: '5%'}} className="me-4 imf-fluid"></img>
            <span>{coin.mane}</span>
            <span className="ms-3 text-secondary text-uppercase">{coin.symbol}</span>
        </td>
        <td>{coin.current_price}</td>
        <td className={coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}>
            {coin.price_change_percentage_24h}
        </td>
        <td>{coin.total_volume}</td>
        <td>
            <CryptoChart sparklineData={coin.sparkline_in_7d.price} />
        </td>
        </tr>
    )
}

export default CoinRow
import styled from "styled-components";
import {useState, useEffect} from "react";
import axios from "axios";


const initialState = {
    coins: [],
    data: [],
    search:''
}
const headerMarket = [
    {
        title: 'Name',
        className: '',
    },
    {
        title: 'Last price',
        className: '',
    },
    {
        title: 'market cap',
        className: '',
    },
    {
        title: 'volume',
        className: 'tablet-hide',
    },
    {
        title: 'change 24h',
        className: 'tablet-hide',
    },
    {
        title: 'high 24',
        className: 'mobile-hide',
    },
    {
        title: 'low 24',
        className: 'mobile-hide',
    },

]



function HomeMarketView() {
    async function getCoins() {
        const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
        console.log(res)
        setState({...state, coins: res.data});
    }




    const [state, setState] = useState(initialState);
    useEffect(() => {
        getCoins();
    })

const filter=async (e)=>{
  const result = await e.target.value
setState({...state,search:result})
console.log(state.search)
}

    return (
<TableContainer>
<TableTitle>
    <h1 className="primary">
        Market Cap
    </h1>
<input type="text" placeholder="Search" onChange={filter} value={state.search}  />
</TableTitle>
    <MarketView>

        <MarketTable>
            <thead>
            <TableHeader>
                {
                    headerMarket.map((item, index) => {
                        return <td className={item.className} key={index}>
                            {item.title}
                        </td>
                    })
                }
            </TableHeader>
            </thead>
            <Tbody>
                {
       state.coins.filter(coin=>state.search!==''?coin.name.toLowerCase().includes(state.search.toLocaleLowerCase()):coin
       
       
       
       
       ).map((coin, index) => {
                        return <tr className={'primary'} key={index}>
                            <ImageContainer>

                         <span className={'image'}>
                             <img src={coin.image} alt="" width={24} height={24}/>
                                 <span>{coin.name}</span>
                         </span>


                            </ImageContainer>
                            <td>{coin.current_price}</td>
                            <td>{coin.market_cap}</td>
                            <td className={'tablet-hide'}>{coin.total_volume}</td>
                            <td className={'tablet-hide'}>{coin.price_change_percentage_24h}</td>
                            <td className={'mobile-hide'}>{coin.high_24h}</td>
                            <td className={'mobile-hide'}>{coin.low_24h}</td>
                        </tr>
                    })
                }

            </Tbody>

        </MarketTable>
    </MarketView>
</TableContainer>
    )
}


export default HomeMarketView;


const TableContainer = styled.div`
display: flex;
  flex-direction: column;
  gap: 2em;
`


const MarketView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  overflow: scroll;
  max-height: 500px;
  min-height:500px;
  height:500px;
  -webkit-box-shadow: 1px 2px 26px 12px rgba(55,255,170,0.3);
  box-shadow: 1px 2px 26px 12px rgba(55,255,170,0.3);
  border-radius: 1rem;
  padding: 1.2em;
  padding-top: 0;

`;



const MarketTable = styled.table`


  table-layout: fixed;
  border-collapse: collapse;
  width: 100%;

  tr {
    height: 48px;
    text-align: center;

  }
  
  
  

  tbody,thead {
    tr {
      td:first-child {
        text-align: left;
      }
      td:last-child{
        text-align: right;
      }
    }
  }


`;

const TableHeader = styled.tr`
  font-weight: bold;
  position: sticky;
  top: 0;
  background: black;

`;
const ImageContainer = styled.td`
  display: flex;
  justify-content: center;
  flex-direction: column;

  .image {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
  }
`
const Tbody = styled.tbody`

  font-weight: 600;
`
const TableTitle = styled.div`
display: flex;
  justify-content: space-between;
  h1{
    -webkit-text-shadow: 1px 2px 26px 12px rgba(55,255,170,0.3);
    text-shadow: 1px 2px 26px 12px rgba(55,255,170,0.3);
  }
  input{
    position:relative;
    z-index:3;
    border-radius: 1rem;
    border:none;
    padding: 0.5em;
    -webkit-box-shadow: 1px 2px 26px 12px rgba(55,255,170,0.3);
    box-shadow: 1px 2px 26px 12px rgba(55,255,170,0.3);
  }
`
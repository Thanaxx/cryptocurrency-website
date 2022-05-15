import React, {useState, useEffect} from 'react'
import {Box, Container, CssBaseline, InputBase, Paper, Typography} from '@material-ui/core'
import useStyles from './exhangeStyle'
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios'
import { Fade } from '@material-ui/core';

function Exchange() {
  const classes = useStyles();
  //api = https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false

  const [coins, setCoins] = useState([])
  const [limit, setLimit] = useState(15)
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
    .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data)
      console.log(res.data)
    })
    .catch(error => console.log(error))
  }, [])
  

  // filter coins by search
  const filterCoins = coins.filter(coins => 
    coins.name.toLowerCase().includes(search.toLowerCase())  
  )

  const handleOnchange = e => {
    setSearch(e.target.value)
  }

  return (
    <React.Fragment>
    <CssBaseline/>
    <Container  maxWidth='100%' className={classes.wrap} >
    <Fade in
      {...{ timeout: 1000 }}
    >
      <Box>
          <Box className={classes.title} >
            <Typography variant="h4">
              Search markets that interest you today?
            </Typography>
          </Box>

          <Box className={classes.searchBox}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
                
              <InputBase
                  placeholder="Search…"
                  className={classes.input}
                  type="text"
                  onChange={handleOnchange}
              />
            </div>
          </Box>

          {/**COINS */}
          <Box>
            <Container maxWidth='md' className={classes.coinsWrap} >
                {filterCoins.slice(0, limit).map((item) => {
                  return(
                    <>
                    <Paper key={item.id} className={classes.card}>
                      <img className={classes.coinImage} src={item.image} alt="" />
                      <p>{item.name}</p>
                      <p>{item.symbol}</p>
                      <p>{item.market_cap}</p>
                      <p>{item.current_price}</p>

                      {item.price_change_percentage_24h < 0 ? (
                        <p className={classes.red}>{item.price_change_percentage_24h.toFixed(2)}</p>
                      ): (<p className={classes.green}>{item.price_change_percentage_24h.toFixed(2)}</p>)}

                      <p>Mkt Cap: {item.total_volume}</p>
                    </Paper>
                    </>
                  )
                })}
            </Container>
          </Box>
        </Box>
      </Fade>
    </Container>
    </React.Fragment>
  )
}

export default Exchange
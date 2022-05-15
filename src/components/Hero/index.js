import React from 'react';
import { Typography, CssBaseline, Button, Grid, Container } from '@material-ui/core'
import useStyles from './coverStyles';
import { Fade } from '@material-ui/core';

function Cover() {
    const classes = useStyles();

  return (
    <React.Fragment>
        <CssBaseline />
        <Container maxWidth='100%' className={classes.main}  >
            <Fade in
                {...{ timeout: 1000 }}
                >
                <Grid container maxWidth="100%">
                    <Grid item xs={12} md={12} lg={6} xl={6}className={classes.leftDetails}>
                        <Typography variant="h2" className={classes.title}>
                            Learn <Typography variant='h2' component='span' className={classes.spans}> Investment </Typography> with the New Gen-Z way of Trading
                        </Typography>

                        <Typography variant="h6" className={classes.label}>
                            The only platform you need to master Stocks, Cryptocurrencies, Insurance and more Lorem Ipsum Dolor Ipsum 
                        </Typography>
                        
                        <div className={classes.root}>
                            <Button variant="contained" color="primary" className={classes.startBtn}>
                                <a className={classes.startLink} href="/exchange">Get Started</a>
                            </Button>

                            <Button variant="contained" color="primary" className={classes.blogBtn}>
                                <a className={classes.startLink} href="/blogs">Read crypto blogs</a>
                            </Button>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={12} lg={6} xl={6} className={classes.rightImg}>
                        <img src="/cryptImg/maincrypt.png" alt="Crytp images" className={classes.heroImg} />
                    </Grid>     
                </Grid>
                </Fade>
        </Container>
    </React.Fragment>
  )
}

export default Cover
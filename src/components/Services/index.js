import React from 'react'
import { Box, Container, CssBaseline, Grid, Paper, Typography } from '@material-ui/core'
import useStyles from '../Hero/coverStyles'

function Services() {
    const classes = useStyles();

  return (
    <React.Fragment>
    <CssBaseline />

    <Box className={classes.serviceBox}>
        <Container maxWidth='xl' className={classes.services}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <Paper className={classes.labels}>
                        <Typography variant='h5' className={classes.top}>
                            <img src="/cryptImg/services/Fast.png" alt="" className={classes.servImg} />
                            Fast
                        </Typography>

                        <Typography variant='p'  className={classes.topLabel}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Typography>
                    </Paper>
                </Grid>
                
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <Paper className={classes.labels}>
                        <Typography variant='h5' className={classes.top}>
                            <img src="/cryptImg/services/Easy.png"  alt="" className={classes.servImg} />
                            Easy
                        </Typography>

                        <Typography variant='p' className={classes.topLabel}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <Paper className={classes.labels}>
                        <Typography variant='h5' className={classes.top}>
                            <img src="/cryptImg/services/Updated.png"  alt=""  className={classes.servImg} />
                            Updated
                        </Typography>

                        <Typography variant='p' className={classes.topLabel}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Typography>
                    </Paper>
                </Grid>
                
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <Paper className={classes.labels}>
                        <Typography variant='h5' className={classes.top}>
                            <img src="/cryptImg/services/Reliable.png"  alt="" className={classes.servImg} />
                            Reliable
                        </Typography>

                        <Typography variant='p' className={classes.topLabel}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    </Box>
    </React.Fragment>
  )
}

export default Services
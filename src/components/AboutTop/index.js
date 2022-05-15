import React from 'react';
import {Container, CssBaseline, Grid, Typography} from '@material-ui/core';
import useStyles from './topStyles';
import { Fade } from '@material-ui/core';

function AboutTop() {
    const classes = useStyles();

  return (
    <>
    <React.Fragment>
        <CssBaseline />
            
        <Container maxWidth='100%' className={classes.main}>
            <Fade in
                {...{ timeout: 1000 }}
            >
                <Grid container >
                    <Grid item xs={12} md={12} lg={6} xl={6}>
                        <img src="/cryptImg/about.png" alt="about" className={classes.boutMage} />
                    </Grid>

                    <Grid item xs={12} md={12} lg={6} xl={6} className={classes.details}>
                        <Typography variant="h3" className={classes.detTitle}>
                            Let’s Make your Investment <Typography component='span' variant="h3" className={classes.span}>Journey</Typography> Enjoyable
                        </Typography>

                        <Typography variant="p" className={classes.label}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>

                        <div>
                            <Grid container spacing={3} className={classes.mainGrid}>
                                <Grid item xs={12} md={12} lg={6} xl={6} className={classes.grid}>
                                    <img src="/cryptImg/aboutIconA.png" alt="" />
                                    <Typography variant="p" className={classes.boutLabel}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                                    </Typography>
                                </Grid>

                                <Grid item xs={12} md={12} lg={6} xl={6} className={classes.grid}>
                                    <img src="/cryptImg/aboutIconB.png" alt="" />
                                    <Typography variant="p" className={classes.boutLabel}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                                    </Typography>
                                </Grid>

                                <Grid item xs={12} md={12} lg={6} xl={6} className={classes.grid}>
                                    <img src="/cryptImg/aboutIconC.png" alt="" />
                                    <Typography variant="p" className={classes.boutLabel}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                                    </Typography>
                                </Grid>
                                
                                <Grid item xs={12} md={12} lg={6} xl={6} className={classes.grid}>
                                    <img src="/cryptImg/aboutIconD.png" alt="" />
                                    <Typography variant="p" className={classes.boutLabel}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </Fade>
        </Container>
    </React.Fragment>
    </>
  )
}

export default AboutTop
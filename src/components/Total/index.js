import React from 'react';
import { Box, Container, CssBaseline, Grid, Paper, Typography } from '@material-ui/core';
import useStyles from './totalStyle';
import { Fade } from '@material-ui/core';

function TotalNum() {
    const classes = useStyles();

  return (
    <React.Fragment>
        <CssBaseline />
        <Box className={classes.numWrap}>
            <Container>
                <Fade in
                {...{ timeout: 1000 }}
                >
                    <Grid container spacing={3} className={classes.numWrap} >
                        <Grid item xs={12} md={12} lg={4} xl={4} className={classes.count}>
                            <Paper className={classes.box}>
                                <div className={classes.boxIn}>
                                    <Typography variant="h6" className={classes.boxTitleA}>
                                        All time trade volume
                                    </Typography>

                                    <Typography variant="h3" className={classes.number}>
                                        $3,900,386,117
                                    </Typography>
                                </div>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={12} lg={4} xl={4} className={classes.count} >
                            <Paper className={classes.box}>
                                <div className={classes.boxIn}>
                                    <Typography variant="h6" className={classes.boxTitleB}>
                                        Total stocks
                                    </Typography>

                                    <Typography variant="h3" className={classes.number}>
                                        3,900
                                    </Typography>
                                </div>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={12} lg={4} xl={4} className={classes.count}>
                            <Paper className={classes.box}>
                                <div className={classes.boxIn}>
                                    <Typography variant="h6" className={classes.boxTitleC}>
                                        Open Interest
                                    </Typography>

                                    <Typography variant="h3" className={classes.number}>
                                        $3M
                                    </Typography>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </Fade>
            </Container>
        </Box>
    

    </React.Fragment>
  )
}

export default TotalNum
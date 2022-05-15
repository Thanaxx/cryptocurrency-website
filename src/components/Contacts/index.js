import React from 'react'
import { Box, Container, CssBaseline, Grid, Paper, Typography } from '@material-ui/core'
import useStyles from './contactsStyle'
import { Fade } from '@material-ui/core';

function Contacts() {
  const classes = useStyles();

  return (
    <React.Fragment>
    <CssBaseline />
    
    <Box className={classes.main}>
      <Fade in
        {...{ timeout: 1000 }}
      >
        <Container maxWidth='xl'>
          <Box className={classes.title}>
            <Typography  variant='h2' className={classes.mainText}>
                Community
            </Typography>

            <Typography variant='h6' className={classes.labels}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>

          <Container maxWidth='md'>
            <Grid container className={classes.mainBox}>
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <Paper className={classes.box}>
                  <Typography variant='h6' className={classes.top} >
                    <img src="/cryptImg/Twitter.png" alt="" className={classes.social} />
                    Twitter
                  </Typography>
                  <Typography variant='p' className={classes.label} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={12} sm={4} md={4} lg={4}>
                <Paper className={classes.box}>
                  <Typography variant='h6' className={classes.top} >
                    <img src="/cryptImg/fb.png" alt="" className={classes.social} />
                    Facebook
                  </Typography>
                  <Typography variant='p' className={classes.label} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Typography>
                </Paper>
              </Grid>
              
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <Paper className={classes.box}>
                  <Typography variant='h6' className={classes.top} >
                    <img src="/cryptImg/Ig.png" alt="" className={classes.social} />
                    Instagram
                  </Typography>
                  <Typography variant='p' className={classes.label} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Container>
        </Fade>
    </Box>

    </React.Fragment>
  )
}

export default Contacts
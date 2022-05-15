import React from 'react'
import { Box, Container, CssBaseline, Grid, Paper, Typography } from '@material-ui/core'
import useStyles from './UserStyle'

function Users() {
  const classes = useStyles();

  return (
    <React.Fragment>
    <CssBaseline />
    
    <Box className={classes.main}>
      <Container maxWidth='xl'>
        <Box className={classes.title}>
          <Typography variant='h2' className={classes.spanMain}>
              Let's make your <Typography variant='h2' component='span' className={classes.span}>Investment</Typography> journey enjoyable.
          </Typography>

          <Typography variant='h6' className={classes.label}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Box>

        <Container maxWidth='lg'>
          <Grid container className={classes.mainBox}>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <Paper className={classes.box}>
                <Typography variant='h2' className={classes.num} >
                  20M+
                </Typography>
                <Typography variant='p' className={classes.numLabel} >
                  People who have joined crypto.
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={4} md={4} lg={4} >
              <Paper className={classes.box} >
                <Typography variant='h2' className={classes.num} >
                  100M+
                </Typography>
                <Typography variant='p' className={classes.numLabel} >
                  Famous people learning crypto.
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={4} md={4} lg={4} >
              <Paper className={classes.box} >
                <Typography variant='h2' className={classes.num} >
                  50
                </Typography>
                <Typography variant='p' className={classes.numLabel} >
                  Cooperation with big companies.
                </Typography>
              </Paper>
            </Grid>

          </Grid>
        </Container>
      </Container>
    </Box>

    </React.Fragment>
  )
}

export default Users
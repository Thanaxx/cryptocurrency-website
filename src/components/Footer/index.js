import React from 'react'
import { Box, Container, CssBaseline, Typography } from '@material-ui/core'
import useStyles from './footerStyle'

function Footer() {
  const classes = useStyles();

  return (
    <React.Fragment>
    <CssBaseline />

    <Container maxWidth='xl' className={classes.box}>
      <Box className={classes.main}>
        <Typography variant='p' className={classes.top}>
          © Copyright 2022 Crypt Created by <Typography variant='p' className={classes.span}>Thanna Ernaline</Typography>
        </Typography>

        <Typography variant='p' >
          All Rights Reserved.
        </Typography>
      </Box>
    </Container>

    </React.Fragment>
  )
}

export default Footer
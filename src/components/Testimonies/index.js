import React from 'react'
import { Avatar, Box, Container, CssBaseline, Grid, Paper, Typography } from '@material-ui/core'
import useStyles from './TestimonyStyle'

function Testimony() {
    const classes = useStyles();

  return (
    <React.Fragment>
    <CssBaseline />

        <Box className={classes.main}>
            <Container maxWidth='xl'>
                <Box className={classes.testimonyTitle}>
                    <Typography variant='h2' className={classes.spanTitle}>
                        <Typography variant='h2' component='span' className={classes.span}>Testimonial</Typography> of our best users from all over the world.
                    </Typography>

                    <Typography variant='h6' className={classes.label}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Typography>
                </Box>

          
                <Grid container spacing={3} className={classes.root}>
                    <Grid item xs={12} md={4}>
                        <Paper className={classes.paper}>
                            <Avatar alt="Remy Sharp" src="/cryptImg/profile.png" className={classes.large} />
                            
                            <Typography variant="h5" className={classes.comment}>
                                Nice Courses
                            </Typography>

                            <Typography variant="h6" className={classes.desc}>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            </Typography>

                            <Typography variant="p">
                                - Dina L. Mayers
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper className={classes.paper}>
                            <Avatar alt="Remy Sharp" src="/cryptImg/profile.png" className={classes.large} />
                            
                            <Typography variant="h5" className={classes.comment}>
                                Nice Courses
                            </Typography>

                            <Typography variant="h6" className={classes.desc}>
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”
                            </Typography>

                            <Typography variant="p">
                                - Dina L. Mayers
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper className={classes.paper}>
                            <Avatar alt="Remy Sharp" src="/cryptImg/profile.png" className={classes.large} />
                            
                            <Typography variant="h5" className={classes.comment}>
                                Nice Courses
                            </Typography>

                            <Typography variant="h6" className={classes.desc}>
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”
                            </Typography>

                            <Typography variant="p">
                                - Dina L. Mayers
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
       
            </Container>
        </Box>
    </React.Fragment>
  )
}

export default Testimony
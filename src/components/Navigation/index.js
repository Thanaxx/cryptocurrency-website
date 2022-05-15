import React from 'react';
import {Typography, AppBar, CssBaseline, Toolbar, Grid, useMediaQuery, useTheme} from '@material-ui/core'
import useStyles from './navStyle';
import Link from '@material-ui/core/Link'
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import {ThemeProvider} from '@material-ui/core/styles'
import TopBar from '../TopBar';

function Nav() {

  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  const themes = useTheme();

  //media query
  const isMatch = useMediaQuery(themes.breakpoints.down("md"));
  console.log(isMatch);


  return (
    <ThemeProvider>
  
      <React.Fragment>
      <CssBaseline />

      <AppBar style={{position: 'sticky'}} className={classes.cont}>
          <Toolbar>
              <Grid 
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item>
                  <Link href="/">
                    <img src="/cryptImg/logo.png" alt="Logo" className={classes.logo} />
                  </Link>    
                </Grid>

                {
                  isMatch ? (
                    <>
                      <TopBar/>
                    </>
                  ) : (
                    <>
                      <Grid item>
                        <Typography className={classes.links}>
                          <Link href="/exchange" className={classes.textLink}>
                            Exchange
                          </Link>

                          <Link href="/blogs" className={classes.textLink}>
                            Blogs
                          </Link>

                          <Link href="/about" className={classes.textLink} >
                            About
                          </Link>
                        </Typography>
                      </Grid>

                      <Grid item>
                        <Typography className={classes.icons} >
                          <Link href="https://www.facebook.com" className={classes.iconLink} >
                            <FacebookIcon />
                          </Link>

                          <Link href="https://www.instagram.com" className={classes.iconLink} >
                            <InstagramIcon/>
                          </Link>

                          <Link href="https://www.twitter.com" className={classes.iconLink} >
                            <TwitterIcon />
                          </Link>
                        </Typography>
                      </Grid>
                    </>
                  )

                }

              </Grid>
          </Toolbar>

         
      </AppBar>
    </React.Fragment>

    </ThemeProvider>
  )
}

export default Nav
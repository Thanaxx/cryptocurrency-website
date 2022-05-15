import React, {useEffect, useState} from 'react'
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, Typography } from '@material-ui/core'
import useStyles from './blogStyle'
import { Link } from 'react-router-dom';
import StarRateIcon from '@material-ui/icons/StarRate';
import axios from 'axios';

function Blogpage() {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();

    const [blogs, setBlogs] = useState([])
    const [limit, setLimit] = useState(3)

    useEffect(() => {
        axios.get('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=uxE31FdZQhmnKzpPFOkRkkaKh5XAB7gN')
        .then(result => {
            setBlogs(result.data.results)
            console.log(result.data.results)
        })
        .catch(error => console.log(error))
    }, [])

  return (
    <React.Fragment>
    <CssBaseline />
        <Box className={classes.blogWrap}>
            <Container maxWidth='xl'>
                <Box className={classes.blogFlex}>
                    <Box className={classes.blogA}>
                        <Typography variant='h2' className={classes.blogTitle}>
                            Get ready to <Typography variant='h2' component='span' className={classes.spanExplore}>explore</Typography> the world of cryptocurrency.
                        </Typography>

                        <Typography variant='h6' className={classes.desc} >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Typography>
                    </Box>

                    <Box className={classes.blogB}>
                        <Link to="/blogs" className={classes.blogLink}>
                            View other blogs
                        </Link>
                    </Box>
                </Box>
                
                <Grid container spacing={3}>
                {blogs.slice(0, limit).map((item, index) => {
                    return(
                    <>
                    <Grid item xs={12} sm={6} md={4}>
                        <a href={item.url} className={classes.blogWrapper} >
                        <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={item.multimedia[0].url}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" className={classes.Blogname}>
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" className={classes.Blogdesc}>
                                    {item.abstract}
                                </Typography>
                            </CardContent>

                            <Typography className={classes.rate}>
                                <StarRateIcon />
                                <StarRateIcon />
                                <StarRateIcon />
                            </Typography>
                            
                        </CardActionArea>

                        <CardActions>
                            <Button size="small" className={classes.readMoreBtn}>
                                Read more
                            </Button>
                        </CardActions>
                    </Card>
                        </a>
                   
                    </Grid>
                    </>
                            )
                        })}
                </Grid>
            </Container>
        </Box>
    </React.Fragment>
  )
}

export default Blogpage
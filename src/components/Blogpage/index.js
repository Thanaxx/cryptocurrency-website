import React, {useState, useEffect} from 'react';
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, Paper, Typography } from '@material-ui/core'
import useStyles from './blogStyles';
import StarRateIcon from '@material-ui/icons/StarRate';
import { Fade } from '@material-ui/core';
import axios from 'axios';


function AllBlogs() {
    const classes = useStyles();

    const [blogs, setBlogs] = useState([])
    const [limit, setLimit] = useState(12)

    useEffect(() => {
        axios.get('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=uxE31FdZQhmnKzpPFOkRkkaKh5XAB7gN')
        .then(result => {
            setBlogs(result.data.results)
            console.log(result.data.results)
        })
        .catch(error => console.log(error))
    }, [])

    // load more blogs
    const loadBlog = e => {
        setLimit((prevValue) => prevValue + 6)
    }

  return (
    <React.Fragment>
    <CssBaseline />
    
    <Container maxWidth='100%' className={classes.blogWrap} >
        <Fade in
            {...{ timeout: 1000 }}
        >
            <Box>
                <Box className={classes.blogTitle} >
                    <Typography variant='h3'>
                        Let’s make your <Typography variant="h3" component="span" className={classes.blogSpan}>Investment</Typography> journey enjoyable
                    </Typography>
                </Box>

                <Box className={classes.blogNames}>
                    <Grid container spacing={3}>
                        {blogs.slice(0, limit).map((item) => {
                            return(
                                <>
                                    <Grid item xs={12} sm={6} md={4} >
                                        <a href={item.url} className={classes.blogWrapper}>
                                            <Card className={classes.card}>
                                                <CardActionArea>
                                                    <CardMedia
                                                        className={classes.media}
                                                        image={item.multimedia[0].url}
                                                        title="Crypto Image"
                                                    />

                                                    <CardContent>
                                                        <Typography gutterBottom variant="h6" className={classes.title}>
                                                            {item.title}
                                                        </Typography>

                                                        <Typography variant="p" className={classes.labels}>
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
                                                    <Button size="small" color="primary" >
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
                </Box>

                <Box className={classes.btn} >
                    <Button onClick={loadBlog} size="small" color="primary" className={classes.btnName} >
                        See more
                    </Button>
                </Box>
                
            </Box>
        </Fade>
    </Container>

    </React.Fragment>
  )
}

export default AllBlogs
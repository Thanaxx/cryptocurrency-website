import React, {useState} from 'react';
import {Drawer, List, ListItemText, IconButton, Box} from '@material-ui/core';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import Link from '@material-ui/core/Link'
import useStyles from './barStyle';

function TopBar() {

    const classes = useStyles();
    const [openTopBar, setOpenTopBar] = useState(false);

  return (
    <React.Fragment>
        <Drawer open={openTopBar} onClose={() => setOpenTopBar(false)} >
            <Box className={classes.main} >
                <img src="/cryptImg/logo.png" alt="" className={classes.barLogo} />

                <List style={{width: '300px'}} className={classes.barlink}>
                    <ListItemText>
                        <Link href="/exchange" className={classes.links} style={{ textDecoration: 'none', marginLeft: '20px' }}>
                            Exhange
                        </Link>
                    </ListItemText>

                    <ListItemText>
                        <Link href="/blogs" className={classes.links} style={{ textDecoration: 'none', marginLeft: '20px' }}>
                            Blogs
                        </Link>
                    </ListItemText>

                    <ListItemText>
                        <Link href="/about" className={classes.links} style={{ textDecoration: 'none', marginLeft: '20px' }}>
                            About
                        </Link>
                    </ListItemText>
                </List>
            </Box>
        </Drawer>

        <IconButton onClick={() => setOpenTopBar(!openTopBar)} className={classes.icon}>
            <MenuRoundedIcon />
        </IconButton>
        
    </React.Fragment>
  )
}

export default TopBar
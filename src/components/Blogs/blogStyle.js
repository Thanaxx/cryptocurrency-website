import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    blogWrap: {
        padding: '100px 0',
        backgroundColor: 'black',
        minHeight: 'auto',
        color: 'white'
    },

    blogFlex: {
        display: 'flex',
        marginBottom: '40px',

        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        }
    },

    blogWrapper: {
        textDecoration: 'none'
    },

    blogA: {
        flex: '1'
    },

    blogB: {
        flex: '1',
        textAlign: 'right',

        [theme.breakpoints.down('sm')]: {
            textAlign: 'left',
        }
    },

    blogLink: {
        color: '#999999',
        textDecoration: 'none'
    },

    media: {
        height: 190,
    },

    rate: {
        paddingLeft: '15px',
        color: 'yellow'
    },

    readMoreBtn: {
        backgroundColor: '#005FCE',
        color: 'white',
        padding: '5px 20px',
        borderRadius: '20px',
        boxShadow: '0px 4px 15px 2px rgba(0, 95, 206, 0.46)',
        marginBottom: '10px',

        '&:hover': {
            backgroundColor: '#00316A'
        }
    },

    root: {
        backgroundColor: '#181818'
    },

    spanExplore: {
        color: '#005FCE',
        fontWeight: '500',

        [theme.breakpoints.down('xs')]: {
            fontSize: '50px'
        }
    },

    blogTitle: {
        fontWeight: '500',

        [theme.breakpoints.down('xs')]: {
            fontSize: '50px'
        }
    },

    desc: {
        color: '#999999',
        fontWeight: '300',
        padding: '15px 0',

        [theme.breakpoints.down('xs')]: {
            fontSize: '17px'
        }
    },

    Blogname: {
        color: 'white',
        fontSize: '18px'
    },

    Blogdesc: {
        color: '#999999',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
    }
}));

export default useStyles;
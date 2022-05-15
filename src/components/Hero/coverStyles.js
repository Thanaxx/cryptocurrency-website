import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    main: {
        backgroundColor: '#000000',
        maxWidth: '100%',
        minHeight: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '70px 0',
    },

    leftDetails: {
        padding: '0 20px',
        marginTop: '40px',

        [theme.breakpoints.down('xs')]: {
            marginTop: '0px',
        },
    },

    rightImg: {
        textAlign: 'right'
    },

    heroImg: {
        width: '550px',

        [theme.breakpoints.down('xs')]: {
            width: '98%'
        },
    },

    title: {
        fontWeight: 'bold',
        color: 'white',

        [theme.breakpoints.down('xs')]: {
            fontSize: '50px'
        },
    },

    spans: {
        color: '#EC28F7',
        fontWeight: 'bold',

        [theme.breakpoints.down('xs')]: {
            fontSize: '50px'
        },
    },

    label: {
        fontWeight: '300',
        color: '#999999',
        marginTop: '10px',

        [theme.breakpoints.down('xs')]: {
            fontSize: '17px'
        },
    },

    root: {
        '& > *': {
            margin: theme.spacing(1),
            borderRadius: '100px',
            marginTop: '20px'
        },
    },

    images: {
        alignItems: 'right'
    },

    startBtn: {
        backgroundColor: '#005FCE',

        '&:hover': {
            backgroundColor: '#3B73B5'
        },
    },

    startLink: {
        color: 'white',
        textDecoration: 'none'
    },

    blogBtn: {
        backgroundColor: '#212121',

        '&:hover': {
            backgroundColor: '#3B73B5'
        }
    },

    //grid services
    serviceBox: {
        backgroundColor: '#000000',
        paddingTop: '80px',

        [theme.breakpoints.down('xs')]: {

        },
    },

    top: {
        display: 'flex',
        alignItems: 'left',
        color: 'white',
        marginBottom: '10px'
    },

    servImg: {
        marginRight: '10px'
    },

    topLabel: {
        color: '#C1C1C1'
    },

    labels: {
        padding: '15px',
        backgroundColor: '#0D0D0D',
        cursor: 'pointer',

        [theme.breakpoints.down('xs')]: {
            margin: '8px 20px',
        },

        '&:hover':{
            backgroundColor: '#102237',
            transform: 'scale(1.1)',
            transition: '0.6s'
        }
    },

    labelSec: {
        marginTop: '8px'
    }
}));

export default useStyles;
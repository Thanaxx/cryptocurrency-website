import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    main: {
        backgroundColor: 'black',
        minHeight: 'auto',
        color: 'white',
        padding: '50px 0'
    },

    title: {
        width: '65%',

        [theme.breakpoints.down('md')]: {
            width: '100%',
        },
    },

    spanMain: {
        fontWeight: '500',

        [theme.breakpoints.down('xs')]: {
            fontSize: '50px'
        },
    },

    span: {
        fontWeight: '500',
        color: '#EC28F7',

        [theme.breakpoints.down('xs')]: {
            fontSize: '50px'
        },
    },

    label: {
        fontWeight: '300',
        padding: '7px 0',
        color: '#999999',

        [theme.breakpoints.down('xs')]: {
            fontSize: '17px'
        },
    },

    mainBox: {
        padding: '40px 0',
    },

    box: {
        textAlign: 'center',
        backgroundColor: '#0A0A0A',
        padding: '15px 0',
        margin: '0 20px',
        cursor: 'pointer',

        [theme.breakpoints.down('xs')]: {
            margin: '10px 20px',
        },

        '&:hover':{
            backgroundColor: '#102237',
            transform: 'scale(1.1)',
            transition: '0.6s'
        }

    },

    num: {
        color: '#005FCE',
        fontWeight: '500',

        [theme.breakpoints.down('md')]: {
            fontSize: '45px'
        },
    },

    numLabel: {
        color: '#C1C1C1',
        fontSize: '17px',
        fontWeight: '300'
    }
    
    
}));

export default useStyles;
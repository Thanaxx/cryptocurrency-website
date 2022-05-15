import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    main: {
        padding: '50px 0',
        minHeight: 'auto',
        backgroundColor: 'black'
    },

    title: {
        textAlign: 'center',
        width: '60%',
        margin: 'auto',

        [theme.breakpoints.down('md')]: {
            width: '100%',
        }
    },

    mainText: {
        fontWeight: '500',
        color: '#999999',

        [theme.breakpoints.down('xs')]: {
            fontWeight: '50px'
        },
    },

    labels: {
        fontWeight: '300',
        padding: '7px 0',
        color: '#999999',

        [theme.breakpoints.down('xs')]: {
            fontSize: '17px'
        },
    },

    mainBox: {
        margin: '40px 0',
    },

    box: {
        backgroundColor: '#181818',
        padding: '30px',
        margin: '0 15px',
        cursor: 'pointer',

        [theme.breakpoints.down('xs')]: {
            margin: '8px 0',
        },

        '&:hover':{
            backgroundColor: '#102237',
            transform: 'scale(1.1)',
            transition: '0.6s'
        }
    },

    top: {
        color: 'white',
        paddingBottom: '10px',
    },

    social: {
        marginRight: '5px',
        width: '20px',
        height: '18px'
    },

    label: {
        color: '#C1C1C1'
    }

}));

export default useStyles
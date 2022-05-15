import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    wrap: {
        backgroundColor: '#000000',
        minHeight: '100vh',
        color: 'white',
        padding: '20px 40px',

        [theme.breakpoints.down('xs')]: {
            padding: '20px 5px',
        }
    },

    title: {
        // backgroundColor: 'green',
        width: '100%',
        textAlign: 'center',
        marginBottom: '20px',
        fontSize: '10px'
    },

    searchBox: {
        // backgroundColor: 'green'
    },

    search: {
        position: 'relative',
        backgroundColor: '#000000',
        background: 'linear-gradient(to right, #EC28F7, #005FCE)',
        borderRadius: '7px',
        width: '45%',
        margin: 'auto',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-end',
        padding: '5px 10px',

        [theme.breakpoints.down('xs')]: {
            width: '90%',
        }
    },

    input: {
        color: 'white',
        padding: '0 4px',
        width: '100%'
    },

    // coins card
    coinsWrap: {
        marginTop: '30px'
    },

    card:{
        margin: '15px 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5px 10px',
        backgroundColor: '#080808',
        color: 'white',
        cursor: 'pointer',
        textAlign: 'left',

        [theme.breakpoints.down('xs')]: {
            padding: '5px',
            fontSize: '12px',
        },

        '&:hover':{
            backgroundColor: '#102237',
            transform: 'scale(1.1)',
            transition: '0.9s'
        }
    },

    coinImage: {
        width: '45px',

        [theme.breakpoints.down('xs')]: {
            width: '25px',
        }
    },

    red: {
        color: 'red'
    },

    green: {
        color: 'green'
    }

}));

export default useStyles
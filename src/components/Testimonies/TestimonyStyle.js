import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    main: {
        padding: '50px 0',
        backgroundColor: 'black',
        color: 'white',
        minHeight: 'auto'
    },

    testimonyTitle: {
        width: '65%',

        [theme.breakpoints.down('md')]:{
            width: '100%'
        }
    },

    span: {
        color: '#F7931A',
        fontWeight: '500',

        [theme.breakpoints.down('xs')]:{
            fontSize: '50px'
        }
    },

    spanTitle: {
        fontWeight: '500',

        [theme.breakpoints.down('xs')]:{
            fontSize: '50px'
        }
    },

    label: {
        color: '#999999',
        fontWeight: '300',
        padding: '10px 0',

        [theme.breakpoints.down('xs')]:{
            fontSize: '17px'
        }
    },
    
    large: {
        width: theme.spacing(8),
        height: theme.spacing(8),
        margin: 'auto'
    },

    //testimony cards
    root: {
        margin: '40px 0'
    },

    paper: {
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',

        [theme.breakpoints.down('xs')]:{
            margin: '15px 0'
        },

        [theme.breakpoints.down('sm')]:{
            margin: '15px 0'
        }
    },

    comment: {
        fontStyle: 'italic',
        padding: '4px 0'
    },

    desc: {
        fontSize: '15px',
        fontWeight: '300',
        color: '#C1C1C1',
        paddingBottom: '4px'
    }

}));

export default useStyles;
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    blogWrap: {
        backgroundColor: '#000000',
        minHeight: '100vh',
        padding: '20px 40px',
        color: 'white',

        [theme.breakpoints.down('xs')]: {
            padding: '20px 20px',
        }

    },

    blogTitle: {
        textAlign: 'center',
        color: 'white',
        width: '50%',
        margin: 'auto',
        marginBottom: '20px',

        [theme.breakpoints.down('xs')]: {
            width: '100%',
        }
    },

    blogSpan: {
        color: '#EC28F7'
    },

    blogNames: {
        margin: '40px 0'
    },

    blogWrapper: {
        textDecoration: 'none'
    },

    // cards
    card: {
        backgroundColor: '#171717',
        color: 'white'
    },

    media: {
        height: '160px'
    },

    title: {
        fontWeight: '300',
        fontSize: '18px'
    },

    labels: {
        fontWeight: '300',
        fontSize: '14px',
        color: '#999999',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap'
    },

    rate: {
        paddingLeft: '15px',
        color: 'yellow'
    },

    //see more
    btn: {
        textAlign: 'center',
        marginTop: '30px',
    },

    btnName: {
        backgroundColor: '#15212F',
        color: 'white',
        padding: '5px 20px'
    }

}));

export default useStyles
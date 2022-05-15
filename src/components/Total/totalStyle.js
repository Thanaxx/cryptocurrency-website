import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    numWrap: {
        backgroundColor: '#000000',
        minHeight: 'auto',
        padding: '20px 20px',

        [theme.breakpoints.down('xs')]: {
            padding: '0px 10px',
        }
    },

    box: {
        backgroundColor: '#000000',
        color: 'white',
        textAlign: 'center',
        padding: '2px',
        position: 'relative',
        background: 'linear-gradient(to bottom, #005FCE, #EC28F7, #000000)',

        [theme.breakpoints.down('xs')]: {
            margin: '10px 0'
        }
    },

    boxIn: {
        backgroundColor: '#000000',
        padding: '20px 0'
    },

    number: {
        fontWeight: '300',
        color: '#E5E5E5',
    },

    boxTitleA: {
        fontWeight: '300',
        color: '#B84EBE'
    },

    boxTitleB: {
        fontWeight: '300',
        color: '#F7931A'
    },

    boxTitleC: {
        fontWeight: '300',
        color: '#4EBEA3'
    }
}))

export default useStyles
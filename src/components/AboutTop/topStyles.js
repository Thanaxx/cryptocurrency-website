import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    main: {
        backgroundColor: '#000000',
        minHeight: 'auto',
        padding: '80px 0',
        color: 'white',

        [theme.breakpoints.down('xs')]: {
            padding: '30px 0',
        }
    },

    boutMage: {
        width: '100%'
    },

    details: {
        padding: '20px'
    },

    span: {
        color: '#EC28F7',
        fontWeight: '600'
    },

    detTitle: {
        fontWeight: '600',
        marginBottom: '20px',

        [theme.breakpoints.down('xs')]: {
            margin: '20px 0'
        }
    },

    label: {
        color: '#999999',
        fontSize: '18px',
        fontWeight: '300',
        margin: '20px 0'
    },

    mainGrid: {
        marginTop: '10px'
    },

    grid: {
        display: 'flex',
        justifyContent: 'space-around',
        textAlign: 'center',
        alignItems: 'center',
        margin: '2px 0',

        [theme.breakpoints.down('xs')]: {
            margin: '10px 0'
        }
    },

    boutLabel: {
        fontWeight: '300',
        color: '#999999',
        fontSize: '14px',

        [theme.breakpoints.down('xs')]: {
            marginLeft: '2px'
        }

    }
}))

export default useStyles
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    cont: {
        backgroundColor: '#000000',
        paddingTop: '5px'
    },

    logo: {
        cursor: 'pointer',
    },

    links: {
        '& > * + *': {
            marginLeft: theme.spacing(7),
            color: '#FFFFFF',
        },
    },

    textLink: {
        color: 'white',

        '&:hover': {
            color: '#EC28F7',
        },
    },

    icons: {
        '& > * + *': {
            marginLeft: theme.spacing(2),
          }
    },

    iconLink: {
        color: '#565656',

        '&:hover': {
            color: '#005FCE',
        },
    }
}));

export default useStyles;
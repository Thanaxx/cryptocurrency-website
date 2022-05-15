import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    box: {
        backgroundColor: 'black'
    },
    
    main: {
        padding: '50px 0',
        textAlign: 'center',
        color: 'white'
    },

    top: {
        display: 'flex',
        justifyContent: 'center'
    },

    span: {
        paddingLeft: '4px',
        color: '#005FCE'
    }
}));

export default useStyles;
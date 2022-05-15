import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    main: {
        paddingTop: '30px',
        height: '100%',
        backgroundColor: '#151515'
    },

    barLogo: {
        marginLeft: '20px',
        marginBottom: '20px'
    },

    barlink: {
        '& > * + *': {
            margin: '40px 0',
        },
    },

    links: {
        color: 'white',
        
        '&:hover': {
            color: '#EC28F7'
        }
    },

    icon: {
        color: 'white',
    }
}))

export default useStyles;
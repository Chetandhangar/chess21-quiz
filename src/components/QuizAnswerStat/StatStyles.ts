import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 600,
        backgroundColor: theme.palette.background.paper,
      },
      paper: {
          marginTop: theme.spacing(8),
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom :"1rem"
        },
        title :{
            fontSize : 20,
            textAlign : "center",
            marginBottom : "0.3rem",
            marginTop : "0.5rem"
        },
        card :{
          backgroundColor : "#bdbdbd"
        },
        option : {
          fontSize : 14,
          margin : "1rem",
          textAlign : "center",
          cursor : "pointer",
          border : "solid black 0.1rem",
          padding: "0.3rem"
        },
  }));

  export default useStyles;
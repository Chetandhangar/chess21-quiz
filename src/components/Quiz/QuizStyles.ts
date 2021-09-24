import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    pos: {
      marginBottom: 12,
    },
    root: {
        width: '100%',
        maxWidth: 650,
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
            fontSize : 30,
            textAlign : "center",
            marginBottom : "2rem",
            marginTop : "2rem"
        },
        rules :{
            padding : theme.spacing(3)
        },
        option : {
          fontSize : 20,
          margin : "3rem",
          textAlign : "center",
          cursor : "pointer",
          border : "solid black 0.1rem",
          backgroundColor : "#e0e0e0",
          padding: "0.5rem"
        },
        questionCard :{
          backgroundColor : "#bdbdbd"
        }
  }));

  export default useStyles;

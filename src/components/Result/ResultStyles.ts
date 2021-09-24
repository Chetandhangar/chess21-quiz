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
            fontSize : 30,
            textAlign : "center",
            marginBottom : "2rem",
            marginTop : "2rem"
        },
        Card :{
          backgroundColor : "#bdbdbd"
        }
  }));

  export default useStyles;
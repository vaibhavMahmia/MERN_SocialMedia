import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor:'rgba(255,255,255,0.3)',
    backdropFilter:'blur(4px)',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
    backgroundColor: '#1D4E45',
    color: '#FFFFFF',
    "&:hover": {
      backgroundColor: '#FFFFFF',
      color: '#1D4E45'
    }
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "yellow !important"
  }
}));
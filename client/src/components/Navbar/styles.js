import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1px 1px',
    backgroundColor:'rgba(0,0,0,0.5)',
    backdropFilter:'blur(6px)',
  },
  heading: {
    color: 'rgba(252, 191, 63, 0.94)',
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontWeight: 'bolder',
    textDecoration: 'none',
    marginLeft: '15px',
  },
  image: {
    marginLeft: '5px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));
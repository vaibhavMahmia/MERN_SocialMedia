import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'rgba(255,255,255,0.1)',
    backdropFilter:'blur(4px)',
  },
  heading: {
    color: 'rgba(252, 191, 63, 0.94)',
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontWeight: 'bolder'
  },
  image: {
    marginLeft: '15px',
  },
}));
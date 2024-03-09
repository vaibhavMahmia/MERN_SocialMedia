import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E27602'
  },
  heading: {
    color: '#1D4E45',
    fontWeight: 'bolder'
  },
  image: {
    marginLeft: '15px',
  },
}));
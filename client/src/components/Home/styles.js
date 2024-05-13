import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
    backgroundColor:'rgba(255,255,255,0.3)',
    backdropFilter:'blur(4px)'
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
    backgroundColor:'rgba(255,255,255,0.3)',
    backdropFilter:'blur(4px)',
  },

  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection:'column-reverse'
    }
  }
  
}));
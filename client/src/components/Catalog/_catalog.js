import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  filterDesktop: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  filterMobile: {
    position: 'fixed',
    bottom: '0',
    zIndex: 5,
    left: 0,
    backgroundColor: theme.palette.background.primary,
    width: '100%',
    textAlign: 'center',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.contrastText
  },

}));

export default useStyles;
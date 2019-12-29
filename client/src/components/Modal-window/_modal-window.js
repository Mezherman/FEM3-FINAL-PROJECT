import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '50%',
    maxWidth: '70%',
    margin: '0 auto'
  },
  paper: {
    position: 'relative',
    minWidth: '60%',
    maxWidth: '80%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    outline: 'none'
  }
}));

export default useStyles;
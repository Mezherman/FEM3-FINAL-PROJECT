import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  img: {
    width: '100%'
  },
  typography: {
    padding: '20px 0'
  },
  centered: {
    width: '90%',
    margin: '0 auto'
  },
  header: {
    backgroundColor: '#71b430',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(1, 2),
  },
  body: {
    padding: theme.spacing(1, 2),
  },
  footer: {
    padding: theme.spacing(1, 2),
  }
}));

export default useStyles;
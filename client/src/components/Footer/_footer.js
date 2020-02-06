import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footerWrapper: {
    padding: theme.spacing(2, 0),
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
  container: {
    marginTop: theme.spacing(2)
  },
  title: {
    margin: 0
  },
  text: {
    margin: 0
  },
  img: {
    paddingRight: theme.spacing(2),
    width: '80px'
  },
  links: {
    color: theme.palette.secondary.contrastText,
    '&:hover': {
      textDecoration: 'underline',
      cursor: 'pointer',
    },
    textDecoration: 'none'
  }
}));

export default useStyles;
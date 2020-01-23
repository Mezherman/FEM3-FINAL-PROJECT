import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
  title: {
    fontSize: '32px',
    [theme.breakpoints.up('md')]: {
      marginBottom: 15
    }
  },
  dividerSignUp: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'inline',
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      height: 588,
      alignSelf: 'flex-end'
    }
  },
  modalInfoIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    margin: '0 auto',
    [theme.breakpoints.up('md')]: {
      width: 350
    },
    [theme.breakpoints.up('lg')]: {
      width: 450
    }
  },
  paperInfoIcon: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0, 0, 1),
    border: `2px solid ${theme.palette.primary.main}`
  },
  paperInfoError: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0, 0, 1),
    border: `2px solid ${theme.palette.error.dark}`
  },
  modalInfoTitle: {
    position: 'relative',
    textAlign: 'center',
    margin: 0,
    padding: theme.spacing(2, 3),
    backgroundColor: '#dad7ce',
    fontSize: 20,
    fontWeight: 'normal'
  },
  // modalInfoBtn: {
  //   padding: theme.spacing(2, 3),
  //   textAlign: 'center'
  // },
  submit: {
    display: 'block',
    margin: '0 auto',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1, 1),
    fontSize: '0.87rem',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(1, 3),
    }
  },

}));

export default useStyles;

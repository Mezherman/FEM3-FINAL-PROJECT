import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  categories_btn: {
    width: '100%',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    textTransform: 'lowercase',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2)
  },
  categories_title: {
    fontSize: '2.1rem',
    paddingBottom: theme.spacing(5),
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
    }

  },
  categories_desc: {
    paddingBottom: theme.spacing(3),
    maxHeight: '120px',
    overflow: 'hidden',
  },
  categories_description: {
    margin: theme.spacing(6, 0, 6, 0),
  },
  p_b_30: {
    paddingBottom: '3rem'
  },
  p_r_4: {
    paddingRight: '2rem'
  },
  p_l_4: {
    paddingLeft: '2rem'
  },
  link: {
    textDecoration: 'none',
  },
  categories_item: {
    [theme.breakpoints.up('lg')]: {
      marginBottom: '30px',
    }
  }
}));

export default useStyles;
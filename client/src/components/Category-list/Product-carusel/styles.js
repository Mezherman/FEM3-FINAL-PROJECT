import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({

  categories_item_slider: {
    display: 'none',
    flex: 'auto',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  categories_btn: {
    width: '100%',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    textTransform: 'lowercase',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2)
  },

}));

export default useStyles;
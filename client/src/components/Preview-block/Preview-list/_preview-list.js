import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  test: {
    display: 'flex',
    flexDirection: 'column',
    width: '33%',
    padding: theme.spacing(0, 2)
  },
  products: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    }
  }
}));

export default useStyles;
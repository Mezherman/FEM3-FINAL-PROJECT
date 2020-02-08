import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  productList: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    paddingBottom: theme.spacing(5),
    [theme.breakpoints.up('lg')]: {
      justifyContent: 'space-between'
    }
  }
}));

export default useStyles;

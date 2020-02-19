import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  productList: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingBottom: theme.spacing(5),
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'start',
    },
  }
}));

export default useStyles;

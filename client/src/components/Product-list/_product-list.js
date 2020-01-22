import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  productList: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingBottom: theme.spacing(5)
  }
}));

export default useStyles;

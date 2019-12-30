import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  filter: {
    textAlign: 'center',
  },
  root: {
    '& .MuiGrid-item': {
      padding: 0
    }
  }
});

export default useStyles;
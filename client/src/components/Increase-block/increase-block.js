import React, { useState } from 'react';
import { Box, Paper, Button, makeStyles } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
// import useStyles from '../Add-to-cart/_add-to-cart';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    textAlign: 'right',
    paddingBottom: theme.spacing(2),
    // justifyContent: 'space-between',
  },
  qtyPicker: {
    // width: '100px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  [theme.breakpoints.up('md')]: {
    qtyPicker: {
      // width: '150px'
    }
  },
  qty: {
    textAlign: 'center',
    fontSize: '16px',
    minWidth: '50px',
  },
}));

export default function IncreaseBlock() {
  const classes = useStyles();
  const [qty, setQty] = useState(1);

  return (
    <Box className={classes.wrapper}>
      <Paper className={classes.qtyPicker}>
        <Button
          onClick={() => {
            if (qty === 1) return;
            setQty((prevQty) => prevQty - 1)
          }}
          variant="contained"
          color="secondary"
          disableElevation
          // className={classes.sign}
        >
          <RemoveIcon />
        </Button>
        <Box className={classes.qty}>{qty}</Box>
        <Button
          onClick={() => setQty((prevQty) => prevQty + 1)}
          variant="contained"
          color="secondary"
          // className={classes.sign}
        >
          <AddIcon />
        </Button>
      </Paper>
    </Box>
  )
}

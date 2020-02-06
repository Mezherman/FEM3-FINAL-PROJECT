import React, { useState } from 'react';
import { Box, Button, makeStyles, Input } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
// import useStyles from '../Add-to-cart/_add-to-cart';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    textAlign: 'right',
    margin: theme.spacing(3, 0),
  },
  qtyPicker: {
    maxWidth: '70%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '100%',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '70%',
    }
  },
  [theme.breakpoints.up('md')]: {
    qtyPicker: {
      // width: '150px'
    }
  },
  qty: {
    textAlign: 'center',
    fontSize: '16px',
    // minWidth: '50px',
  },
  input: {
    '& .MuiInputBase-input': {
      minWidth: '40px',

      textAlign: 'center',
    },
    '& input[type=number]::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0
    },
    '& input[type=number]::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0
    },
    '&.MuiInput-underline::after': {
      content: 'none'
    },
  }
}));

export default function IncreaseBlock({ qty, setQty, maxQty }) {
  const classes = useStyles();
  // const [qty, setQty] = useState(1);

  const handleChange = (event) => {
    if (event.target.value === '') {
      setQty('');
    } else if (event.target.value >= 99) {
      setQty(99);
    } else if (event.target.value >= maxQty) {
      setQty(maxQty);
    } else if (event.target.value === '0') {
      setQty(1);
    } else {
      setQty(Number(Math.abs(event.target.value)))
    }
    // setQty (event.target.value === '' ? '' : );
    // setQty(event.target.value === '' ? '' : Math.abs(event.target.value));
    //
  };
  // console.log(qty);
  return (
    <Box className={classes.wrapper}>
      <div className={classes.qtyPicker}>
        <Button
          disabled={qty === 1 ? 'true' : false}
          onClick={() => {
            if (qty <= 1) return;
            setQty(qty - 1)
          }}
          disableElevation
        >
          <RemoveIcon />
        </Button>

        <Input
          className={classes.input}
          value={qty}
          // margin="dense"
          onChange={handleChange}
          inputProps={{
            min: 1,
            type: 'number',
          }}
        />

        <Button
          onClick={() => {
            if (qty >= 99 || qty >= maxQty) return;
            setQty(qty + 1)
          }}
        >
          <AddIcon />
        </Button>
      </div>
    </Box>
  )
}

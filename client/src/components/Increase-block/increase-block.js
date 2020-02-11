import React from 'react';
import { Box, IconButton, Input } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './_increase-block';

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
    <>
      <div className={classes.qtyPicker}>
        <IconButton
          disabled={qty === 1 ? Boolean(true) : false}
          onClick={() => {
            if (qty <= 1) return;
            setQty(qty - 1)
          }}
        >
          <RemoveIcon />
        </IconButton>

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

        <IconButton
          onClick={() => {
            if (qty >= 99 || qty >= maxQty) return;
            setQty(qty + 1)
          }}
        >
          <AddIcon />
        </IconButton>
      </div>
    </>
  )
}

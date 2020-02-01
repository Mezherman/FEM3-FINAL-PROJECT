import { Button } from '@material-ui/core';
import React from 'react';
import useStyles from '../../../SignUp/Sign-up-form/_sign-up-form';
import usePdstyles from '../_personal-data';

const CancelSaveButtons = ({ cancel }) => {
  const classes = useStyles();
  const pdClasses = usePdstyles();
  return (
    <div className={pdClasses.buttonsContainer}>
      <Button
        variant="contained"
        color="secondary"
        className={`${classes.submit} ${pdClasses.button}`}
        onClick={cancel}
      >
        CANCEL
      </Button>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={`${classes.submit} ${pdClasses.button}`}
      >
        SAVE
      </Button>
    </div>
  )
};

export default CancelSaveButtons;

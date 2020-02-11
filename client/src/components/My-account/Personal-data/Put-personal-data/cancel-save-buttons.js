import { Button } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import usePersonalDataStyles from '../_personal-data';

const CancelSaveButtons = ({ cancel, type, submit }) => {
  const pdClasses = usePersonalDataStyles();
  return (
    <div className={pdClasses.buttonsContainer}>
      <Button
        variant="contained"
        color="secondary"
        className={`${pdClasses.cancelSubmit} ${pdClasses.button}`}
        onClick={cancel}
      >
        CANCEL
      </Button>
      <Button
        // onSubmit={submit}
        // onSubmit={submit}
        type="submit"
        variant="contained"
        color="primary"
        className={`${pdClasses.cancelSubmit} ${pdClasses.button}`}
      >
        SAVE
      </Button>
    </div>
  )
};

export default CancelSaveButtons;

CancelSaveButtons.propTypes = {
  cancel: PropTypes.func.isRequired
};

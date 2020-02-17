import { Button } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import usePersonalDataStyles from '../../../../pages/profile/_profile';

const CancelSaveButtons = ({ cancel }) => {
  const pdClasses = usePersonalDataStyles();
  const classesBtn = `${pdClasses.cancelSubmit} ${pdClasses.button}`;
  return (
    <div className={pdClasses.buttonsContainer}>
      <Button variant="contained" color="secondary" className={classesBtn} onClick={cancel}>
        CANCEL
      </Button>
      <Button type="submit" variant="contained" color="primary" className={classesBtn}>
        SAVE
      </Button>
    </div>
  )
};

export default CancelSaveButtons;

CancelSaveButtons.propTypes = {
  cancel: PropTypes.func.isRequired
};

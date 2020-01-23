import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import changeLogStatus from '../../redux/actions/test';

function LogStatus({ changeLogStatus, loggedIn }) {

  return (
    <div>
      <Button
        onClick={() => {
          changeLogStatus(!loggedIn)
        }}
      >
        CHANGE LOG STATUS
      </Button>
      <span>{loggedIn}</span>
    </div>

  )
}

const mapStateToProps = (state) => state.tempLogger;

const mapDispatchToProps = {
  changeLogStatus
}

export default connect(mapStateToProps, mapDispatchToProps)(LogStatus)
import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import RangeSlider from './range'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  }
}));

export default function FilterPanel({ name, text, checkbox, range, max }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel square>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="value"
          id="value-header"
        >
          <Typography className={classes.heading}>{name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          {checkbox ? (
            <FormControl component="fieldset">
              <FormGroup aria-label="position" column="true">
                {text.map((el) => (
                  <FormControlLabel
                    key={el}
                    value={el}
                    control={<Checkbox color="primary" />}
                    label={el}
                  />
                ))}
              </FormGroup>
            </FormControl>
          ) : null}
          {range ? (
            <RangeSlider max={max} />
          ) : null}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

FilterPanel.propTypes = {
  name: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  text: PropTypes.array,
  checkbox: PropTypes.bool,
  range: PropTypes.bool,
  // eslint-disable-next-line react/require-default-props
  max: PropTypes.number
}

FilterPanel.defaultProps = {
  range: false,
  checkbox: false,
  text: ['']
};
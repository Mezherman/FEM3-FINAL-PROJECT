import React from 'react'
import PropTypes from 'prop-types'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import RangeSlider from '../Range/range'
import useStyles from './_filter-panel';

export default function FilterPanel({ name, text, checkbox, range, max }) {
  const classes = useStyles();

  return (
    <div>
      <ExpansionPanel square className={classes.root}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="value"
          id="value-header"
        >
          <Typography>{name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails >
          {checkbox ? (
            <FormControl component="fieldset">
              <FormGroup aria-label="position" column="true">
                {text.map((el) => (
                  <FormControlLabel
                    key={el}
                    value={el}
                    control={<Checkbox />}
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
  text: PropTypes.arrayOf(PropTypes.string),
  checkbox: PropTypes.bool,
  range: PropTypes.bool,
  max: PropTypes.number
};

FilterPanel.defaultProps = {
  range: false,
  checkbox: false,
  text: [''],
  max: null
};
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
import { connect } from 'react-redux'
import RangeSlider from '../Range/range'
import useStyles from './_filter-panel';
import { getFilterProducts } from '../../../redux/actions/filter'

function FilterPanel(props) {
  const classes = useStyles();
  const { name, filters, getFilterProducts, text, checkbox, max } = props;

  const propsName = name;

  const handleChange = (event) => {

    console.log('PROPS =', props);
    let filtersChosen = [];
    if (event.target.checked) {
      filters.push(event.target.value);
      filtersChosen = filters;
    } else {
      const idx = filters.findIndex((el) => el === event.target.value);

      filtersChosen = [
        ...filters.slice(0, idx),
        ...filters.slice(idx + 1)
      ];
    }
    const filter = {
      [propsName]: filtersChosen
    }
    console.log('testing ->', filter)
    getFilterProducts(filtersChosen);
  };

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
          {checkbox
            ? (
              <FormControl component="fieldset">
                <FormGroup aria-label="position" column="true">
                  {text.map((el) => (
                    <FormControlLabel
                      key={el}
                      value={el}
                      control={<Checkbox />}
                      label={el}
                      name={el}
                      onChange={handleChange}
                    />
                  ))}
                </FormGroup>
              </FormControl>
            )
            : <RangeSlider max={max} />}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

const mapStateToProps = (state) => ({
  filters: state.filterReducer.filters
});

function mapDispatchToProps(dispatch) {
  return {
    getFilterProducts: (value) => dispatch(getFilterProducts(value))
  }
}

FilterPanel.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string.isRequired,
  text: PropTypes.arrayOf(PropTypes.string),
  checkbox: PropTypes.bool,
  max: PropTypes.number
};

FilterPanel.defaultProps = {
  checkbox: false,
  text: [''],
  max: null,
  filters: []
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterPanel)
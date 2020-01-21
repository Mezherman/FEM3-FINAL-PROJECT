import React, { useEffect } from 'react'
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
import { getFilterProducts } from '../../../redux/actions/filter';

function FilterPanel(props) {
  const classes = useStyles();
  const { name, filterResults, getFilterProducts, text, checkbox, max, colors } = props;
  console.log('name =', name);
  console.log(colors);

  // console.log('filters =', filters);

  const handleChange = (event) => {
    let currentRange = [];
    let newFilters = {};
    if (filterResults[name.toLowerCase()]) {
      currentRange = [...filterResults[name.toLowerCase()]];
      if (event.target.checked) {
        currentRange.push(event.target.value);
      } else {
        const idx = currentRange.findIndex((el) => el === event.target.value);
        currentRange = [
          ...currentRange.slice(0, idx),
          ...currentRange.slice(idx + 1)
        ];
      }
    } else {
      currentRange.push(event.target.value)
    }

    newFilters = {
      ...filterResults,
      [name.toLowerCase()]: currentRange
    };

    console.log('in component =', newFilters)
    getFilterProducts(newFilters);
  };

  const colorFilter = (colors) => {
    return (
      <FormControl component="fieldset">
        <FormGroup aria-label="position" column="true">
          {colors.map((el) => (
            <FormControlLabel
              color="primary"
              key={el.name}
              value={el.name}
              control={<Checkbox
                // style={{color: 'orange'}}
              />}
              label={el.name}
              name={el.name}
              onChange={handleChange}

            />
          ))}
        </FormGroup>
      </FormControl>
    )
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
        <ExpansionPanelDetails>
          {name === 'Color' && colorFilter(colors)}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

{/*<RangeSlider max={max} />*/}

const mapStateToProps = (state) => ({
  filterResults: state.filterReducer.filterResults
});

function mapDispatchToProps(dispatch) {
  return {
    getFilterProducts: (value) => dispatch(getFilterProducts(value))
  }
}

FilterPanel.propTypes = {
  filters: PropTypes.objectOf(PropTypes.array),
  name: PropTypes.string.isRequired,
  text: PropTypes.arrayOf(PropTypes.string),
  checkbox: PropTypes.bool,
  max: PropTypes.number
};

FilterPanel.defaultProps = {
  checkbox: false,
  text: [''],
  max: null,
  filters: {}
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterPanel)
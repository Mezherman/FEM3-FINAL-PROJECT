import React, { useState } from 'react'
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
import { getBrandProducts } from '../../../redux/actions/filter'

function FilterPanel(props) {
  const classes = useStyles();
  const { name, text, checkbox, max } = props;

  const [value, setValue] = useState([]);

  const handleChange = (event) => {
    const newArr = value.concat(event.target.value)

    // const idx = newArr.findIndex((el) => el === event.target.value)
    // console.log('index', idx)
    //
    // const before = newArr.slice(0, idx)
    // const after = newArr.slice(idx + 1)
    //
    // const Arr = [...before, ...after]

    setValue(newArr);
  };

  console.log('value', value)

  // console.log(props.getBrandProducts)

  // console.log('props', props.getBrandProducts(value))

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

const mapStateToProps = (state) => {
  console.log('state in filter-panel', state.filterReducer.brand)
  return state.filterReducer.brand
}

function mapDispatchToProps(dispatch) {
  return {
    getBrandProducts: (value) => dispatch(getBrandProducts(value))
  }
}

FilterPanel.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.arrayOf(PropTypes.string),
  checkbox: PropTypes.bool,
  // range: PropTypes.bool,
  max: PropTypes.number
};

FilterPanel.defaultProps = {
  // range: false,
  checkbox: false,
  text: [''],
  max: null
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterPanel)
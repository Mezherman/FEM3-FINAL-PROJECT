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
import { getBrandProducts, getCollectionProducts } from '../../../redux/actions/filter'

function FilterPanel(props) {
  const classes = useStyles();
  const { name, brand, getBrandProducts, text, checkbox, max } = props;
  // console.log('BRAND =', brand);

  const handleChange = (event) => {
    // const test = {
    //   ...filter,
    //   props.name: {
    //
    // }
    // }
    console.log('PROPS =', props);
    let brandsChosen = [];
    if (event.target.checked) {
      brand.push(event.target.value);
      brandsChosen = brand;
    } else {
      const idx = brand.findIndex((el) => el === event.target.value);
      const before = brand.slice(0, idx);
      const after = brand.slice(idx + 1);

      brandsChosen = [...before, ...after];
    }
    getBrandProducts(brandsChosen);
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
  brand: state.filterReducer.brand
});

function mapDispatchToProps(dispatch) {
  return {
    getBrandProducts: (value) => dispatch(getBrandProducts(value))
  }
}

FilterPanel.propTypes = {
  brand: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string.isRequired,
  text: PropTypes.arrayOf(PropTypes.string),
  checkbox: PropTypes.bool,
  max: PropTypes.number
};

FilterPanel.defaultProps = {
  checkbox: false,
  text: [''],
  max: null,
  brand: []
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterPanel)
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
import withWidth from '@material-ui/core/withWidth'
import RangeSlider from '../Range/range'
import useStyles from './_filter-panel';
import { getFilterProducts } from '../../../redux/actions/filter';

const FilterPanel = (props) => {
  const classes = useStyles();
  const { name, filterResults, getFilterProducts, max, colors, brands, width } = props;

  const isShowPanel = {
    md: 'true',
    lg: 'true',
    xl: 'true'
  };

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

    getFilterProducts(newFilters);
  };

  const panelFilters = (item) => (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" column="true">
        {item.map((el) => (
          <FormControlLabel
            style={{ color: `${el.cssValue}` }}
            key={el.name}
            value={el.name}
            control={<Checkbox style={{ color: `${el.cssValue}` }} />}
            label={el.name}
            name={el.name}
            onChange={handleChange}
          />
        ))}
      </FormGroup>
    </FormControl>
  );

  return (
    <div>
      <ExpansionPanel className={classes.root} square defaultExpanded={isShowPanel[width]}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          {name === 'Color' && panelFilters(colors)}
          {name === 'Brand' && panelFilters(brands)}
          {name === 'Price' && <RangeSlider max={max} />}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

const mapStateToProps = (state) => ({
  filterResults: state.filterReducer.filterResults
})

const mapDispatchToProps = {
  getFilterProducts
}

FilterPanel.propTypes = {
  name: PropTypes.string.isRequired,
  max: PropTypes.number,
  filterResults: PropTypes.objectOf(PropTypes.array).isRequired,
  colors: PropTypes.arrayOf(PropTypes.object).isRequired,
  brands: PropTypes.arrayOf(PropTypes.object).isRequired,
  getFilterProducts: PropTypes.func.isRequired,
  width: PropTypes.string.isRequired
};

FilterPanel.defaultProps = {
  max: null,
};

const filterPanel = withWidth()(FilterPanel)

export default connect(mapStateToProps, mapDispatchToProps)(filterPanel)

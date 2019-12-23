import React, { Component } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import RangeSlider from './range';

export default function ContainerFilter() {
  const filterText = [
    {
      name: 'Brand',
      checkbox: true,
      text: ['Silit', 'WMF', 'Tefal', 'Spiegelau & Nachtmann', 'KRUPS', 'Kaiser'],
      id: 1
    },
    { name: 'Price', max: 15, range: true, id: 2 },
    {
      name: 'Collection',
      checkbox: true,
      text: ['Classic', 'Classic Plus', 'Creativ', 'Cuisine Line', 'Delicious', 'Inspiration'],
      id: 3
    },
    { name: 'Size sets', checkbox: true, text: ['1-pc', '2-pcs', '3-pcs', '4-pcs', '5-pcs', '6-pcs'], id: 4 },
    { name: 'Material', checkbox: true, text: ['Cast Aluminum', 'Kaiser Inspiration', 'Lono'], id: 5 },
    {
      name: 'Product properties',
      checkbox: true,
      text: ['Easy to clean and care for', 'Good non-stick coating', 'Includes recipe', 'Regular tan through optimal heat conduction', 'Uniform heat'],
      id: 6
    },
    { name: 'Production', checkbox: true, text: ['Z', 'Y', 'X'], id: 7 },
    { name: 'Stove type', checkbox: true, text: ['Z', 'Y', 'X'], id: 8 },
    { name: 'Diameter (cm)', max: 60, range: true, id: 9 },
    { name: 'Capacity', checkbox: false, text: ['Z', 'Y', 'X'], id: 10 },
    { name: 'Color', checkbox: true, text: ['red', 'orange'], id: 11 },
  ];
  const filterCheckbox = filterText.map((item) => (
    <SimpleExpansionPanel
      key={item.id}
      name={item.name}
      text={item.text}
      checkbox={item.checkbox}
      range={item.range}
      max={item.max}
    />
  ));
  return (
    <>
      {filterCheckbox}
    </>
  );
}

class SimpleExpansionPanel extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { name, text, checkbox, range, max } = this.props;
    const useStyles = {
      root: {
        width: '100%'
      }
    };
    return (
      <div>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="value"
            id="value-header"
          >
            <Typography className={useStyles.heading}>{name}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            {checkbox ? (
              <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                  {/* eslint-disable-next-line react/prop-types */}
                  {text.map((el) => (
                    <FormControlLabel
                      key={el}
                      value="end"
                      control={<Checkbox color="primary" />}
                      label={el}
                      labelPlacement="end"
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
}

// SimpleExpansionPanel.propTypes = {
//   name: PropTypes.string,
// }
SimpleExpansionPanel.defaultProps = {
  range: false,
  checkbox: false,
  text: ['']
};
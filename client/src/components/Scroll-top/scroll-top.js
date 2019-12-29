import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import Button from '@material-ui/core/Button';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },

  scroll_icon: {
    fontSize: '2rem'
  },
  scroll_btn: {
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
    minWidth: 55
  }

}));

function ScrollTop(props) {
  const { window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    console.log('click');
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        <Button variant="contained" color="secondary" size="medium" aria-label="scroll back to top" className={classes.scroll_btn}>
          <KeyboardArrowUpIcon className={classes.scroll_icon} />
          {/* {children} */}
        </Button>
      </div>
    </Zoom>
  );
}

export function ScrollToAnchor() {
  return (
    <div id="back-to-top-anchor" />
  )
}

ScrollTop.defaultProps = {
  window: () => {}
};

ScrollTop.propTypes = {
  // children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ScrollTop

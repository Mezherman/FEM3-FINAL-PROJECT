import React, {useState} from 'react';
import { withStyles, makeStyles, fade } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import SignIn from './autorization';
import { Box, IconButton, Toolbar } from '@material-ui/core';
import PersonIcon from '@material-ui/core/SvgIcon/SvgIcon';
import useStyles from '../Header/header-style';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));



export default function CustomizedMenus3() {

  const classes = useStyles();




  const [anchorElLogin, setAnchorElLogin] = useState(null);

  const handleClick = event => {
    setAnchorElLogin(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElLogin(null);
  };

  return (
    <div>
      <MenuItem
        className={classes.headerMenuItem}
        // onMouseEnter={() => console.log("enter")}
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        onClick={handleClick}
        button={IconButton}
       component=''>
        <IconButton edge="end" className={classes.iconButton} href="#">
          <PersonIcon fontSize="large" className={classes.iconsStyle} />
        </IconButton>
        <span className={classes.menuTitle}>Login</span>

      </MenuItem>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorElLogin}
        keepMounted
        open={Boolean(anchorElLogin)}
        onClose={handleClose}
      >
        <SignIn />
      </StyledMenu>
    </div>

  );
}





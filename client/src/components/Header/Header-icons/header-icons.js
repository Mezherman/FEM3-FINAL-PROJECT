import React, { useCallback, useRef, useState } from 'react';
import {
  Box,
  Divider,
  useTheme,
} from '@material-ui/core';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from '@material-ui/core/useMediaQuery/useMediaQuery';
import Search from '../../Search/search';
import useStyles from '../_header';
import logoutAction from '../../../redux/actions/logout';
import AccountIcon from './account-icon';
import FavouritesIcon from './favourites-icon';
import CartIcon from './cart-icon';
import HeaderSearchIcon from './search-icon';

const HeaderIcons = () => {
  const classes = useStyles();
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
  const isTablet = useMediaQuery(theme.breakpoints.only('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const [searchIsShown, setSearchIsShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [modalIsVisible, setModalVisibility] = useState(false);

  const totalCartQuantity = useSelector((state) => state.cart.totalCartQuantity);
  const { loggedIn } = useSelector((state) => state.user);
  const totalFavoritesQty = useSelector((state) => state.favoritesReducer.favorites.length);

  const dispatch = useDispatch();

  const closeModal = () => {
    setModalVisibility(false);
  };
  const handleClick = () => {
    setModalVisibility(true);
  };
  const toggleSearch = () => {
    setSearchIsShow((prev) => !prev)
  };
  const handleSearchAway = () => {
    setSearchIsShow(false)
  };
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };
  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  const handleLogout = useCallback(() => {
    localStorage.removeItem('token');
    dispatch(logoutAction());
  }, [dispatch]);

  const anchorRef = useRef(null);

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  return (
    <ClickAwayListener onClickAway={handleSearchAway}>
      <Box className={classes.iconButtonBox}>
        {isMobile && <Search searchIsShown={searchIsShown} />}
        {isTablet && <Search searchIsShown />}
        {isDesktop && <Search searchIsShown={searchIsShown} />}

        <HeaderSearchIcon toggleSearch={toggleSearch} />

        <Divider component="div" orientation="vertical" className={classes.dividerStyle} />

        <FavouritesIcon totalFavoritesQty={totalFavoritesQty} />

        <Divider component="div" orientation="vertical" className={classes.dividerStyle} />

        <AccountIcon
          handleClick={handleClick}
          open={open}
          handleClose={handleClose}
          loggedIn={loggedIn}
          anchorRef={anchorRef}
          closeModal={closeModal}
          handleListKeyDown={handleListKeyDown}
          handleLogout={handleLogout}
          handleToggle={handleToggle}
          modalIsVisible={modalIsVisible}
        />

        <Divider component="div" orientation="vertical" className={classes.dividerStyle} />

        <CartIcon totalCartQuantity={totalCartQuantity} />

      </Box>
    </ClickAwayListener>
  )
};

export default HeaderIcons;

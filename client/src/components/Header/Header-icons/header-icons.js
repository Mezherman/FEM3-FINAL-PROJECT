import {
  Badge,
  Box,
  Divider,
  IconButton,
  MenuItem, useTheme,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import React, { useCallback, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from '@material-ui/core/useMediaQuery/useMediaQuery';
import RoutesName from '../../../routes-list';
import Search from '../../Search/search';
import useStyles from '../_header';
import logoutAction from '../../../redux/actions/logout';
import AccountIcon from './account-icon';
import Favorites from '../../Favorites/favorites';
import FavouritesIcon from './favourites-icon';
import CartIcon from './cart-icon';
import SearchIcon from './search-icon';

const HeaderIcons = () => {
  const classes = useStyles();
  const [modalIsVisible, setModalVisibility] = useState(false);

  const closeModal = () => {
    setModalVisibility(false);
  };

  const handleClick = () => {
    setModalVisibility(true);
  };

  const totalCartQuantity = useSelector((state) => state.cart.totalCartQuantity);
  const { loggedIn } = useSelector((state) => state.user);
  const totalFavoritesQty = useSelector((state) => state.favoritesReducer.favorites.length);

  const [searchIsShown, setSearchIsShow] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
  const isTablet = useMediaQuery(theme.breakpoints.only('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const toggleSearch = () => {
    setSearchIsShow((prev) => !prev)
  };

  const handleSearchAway = () => {
    setSearchIsShow(false)
  }

  // MY-ACCOUNT-ICON

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

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

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  // LOGOUT

  const dispatch = useDispatch();

  const handleLogout = useCallback(() => {
    localStorage.removeItem('token');
    dispatch(logoutAction());
  }, [dispatch]);

  return (
    <ClickAwayListener onClickAway={handleSearchAway}>
      <div>
        <Box className={classes.iconButtonBox}>
          {isMobile && <Search searchIsShown={searchIsShown} />}
          {isTablet && <Search searchIsShown />}
          {isDesktop && <Search searchIsShown={searchIsShown} />}
          {/*<MenuItem*/}
          {/*  className={classes.headerMenuItem}*/}
          {/*>*/}

          {/*  <IconButton*/}
          {/*    onClick={toggleSearch}*/}
          {/*    edge="end"*/}
          {/*    className={classes.iconButton}*/}
          {/*  >*/}
          {/*    <SearchIcon fontSize="large" className={classes.iconsStyle} />*/}
          {/*    <span className={classes.menuTitle}>Search</span>*/}
          {/*  </IconButton>*/}

          {/*</MenuItem>*/}

          <SearchIcon toggleSearch={toggleSearch} />

          <Divider orientation="vertical" className={classes.dividerStyle} />

          {/*<MenuItem className={classes.headerMenuItem}>*/}
          {/*  <Link to={RoutesName.favorites}>*/}
          {/*    <IconButton edge="end" className={classes.iconButton}>*/}
          {/*      <Badge badgeContent={totalFavoritesQty.toString()} color="error">*/}
          {/*        <FavoriteBorderIcon fontSize="large" className={classes.iconsStyle} />*/}
          {/*      </Badge>*/}
          {/*    </IconButton>*/}
          {/*    <span className={classes.menuTitle}>Favorites</span>*/}
          {/*  </Link>*/}
          {/*</MenuItem>*/}

            <FavouritesIcon totalFavoritesQty={totalFavoritesQty} />

          <Divider orientation="vertical" className={classes.dividerStyle} />

          {/* <MenuItem */}
          {/*  className={classes.headerMenuItem} */}
          {/*  aria-controls="customized-menu" */}
          {/*  aria-haspopup="true" */}
          {/*  variant="contained" */}
          {/*  onClick={loggedIn ? handleToggle : handleClick} */}
          {/*  component="" */}
          {/*  href={RoutesName.signIn} */}
          {/*  ref={loggedIn ? anchorRef : null} */}
          {/* > */}
          {/*  <IconButton edge="end" className={classes.iconButton}> */}
          {/*    <PersonIcon */}
          {/*      fontSize="large" */}
          {/*      className={loggedIn ? classes.iconLoggedIn : classes.iconsStyle} */}
          {/*    /> */}
          {/*  </IconButton> */}
          {/*  <span className={classes.menuTitle}>{loggedIn ? 'My Account' : 'Login'}</span> */}
          {/* </MenuItem> */}
          {/* {loggedIn && ( */}
          {/*  <Popper */}
          {/*    open={open} */}
          {/*    anchorEl={anchorRef.current} */}
          {/*    role={undefined} */}
          {/*    transition */}
          {/*    disablePortal */}
          {/*  > */}
          {/*    {({ TransitionProps, placement }) => ( */}
          {/*      <Grow */}
          {/*        {...TransitionProps} */}
          {/*        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }} */}
          {/*      > */}
          {/*        <Paper> */}
          {/*          <ClickAwayListener onClickAway={handleClose}> */}
          {/*            <MenuList */}
          {/*              autoFocusItem={open} */}
          {/*              id="menu-list-grow" */}
          {/*              onKeyDown={handleListKeyDown} */}
          {/*            > */}
          {/*              <Link to={RoutesName.personalData} className={classes.menuLink}> */}
          {/*                <MenuItem onClick={handleClose}>Profile</MenuItem> */}
          {/*              </Link> */}
          {/*              <Link to={RoutesName.myOrders} className={classes.menuLink}> */}
          {/*                <MenuItem onClick={handleClose}>My orders</MenuItem> */}
          {/*              </Link> */}
          {/*              <MenuItem onClick={handleLogout} className={classes.menuLink}> */}
          {/*                Logout */}
          {/*              </MenuItem> */}
          {/*            </MenuList> */}
          {/*          </ClickAwayListener> */}
          {/*        </Paper> */}
          {/*      </Grow> */}
          {/*    )} */}
          {/*  </Popper> */}
          {/* )} */}
          {/* {!loggedIn && ( */}
          {/*  <LoginModal */}
          {/*    onModalClose={closeModal} */}
          {/*    open={modalIsVisible} */}
          {/*  /> */}
          {/* )} */}

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

          <Divider orientation="vertical" className={classes.dividerStyle} />
          {/*<MenuItem className={classes.headerMenuItem}>*/}
          {/*  <Link to={RoutesName.cart}>*/}
          {/*    <IconButton edge="end" aria-label="card" className={classes.iconButton}>*/}
          {/*      <Badge badgeContent={totalCartQuantity.toString()} color="error">*/}
          {/*        <ShoppingCartOutlinedIcon fontSize="large" className={classes.iconsStyle} />*/}
          {/*      </Badge>*/}
          {/*    </IconButton>*/}
          {/*    <span className={classes.menuTitle}>Cart</span>*/}
          {/*  </Link>*/}
          {/*</MenuItem>*/}

          <CartIcon totalCartQuantity={totalCartQuantity} />

        </Box>
      </div>
    </ClickAwayListener>
  )
}

export default HeaderIcons;

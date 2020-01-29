import React, { useEffect, useState } from 'react';
import { useSelector, connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import getOrders from '../../../../services/getOrders';
import { orders } from '../../../../redux/actions/user';
import Spinner from '../../../Spinner/spinner';
import RoutesName from '../../../../routes-list';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.default,
    borderRadius: theme.spacing(1),
    border: '1px solid #e2e2e2',
    marginBottom: theme.spacing(2),
    boxShadow: '0px 0px 27px 5px rgba(179,179,179,0.27)',
    padding: 0,
    '&:hover': {
      border: '1px solid #71b430',
      boxShadow: '0px 0px 8px 4px rgba(179,179,179,0.27)',
      transition: '400ms',
    },
  },
  mainBlock: {
    borderRadius: theme.spacing(1),
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    fontSize: '0.7rem',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      fontSize: '0.6rem',
    },
    [theme.breakpoints.up('md')]: {
      // flexDirection: 'column',
      fontSize: '0.9rem',
    },
    [theme.breakpoints.up('lg')]: {
      // flexDirection: 'column',
      fontSize: '1.1rem',
    },

    '&:hover': {
      border: 'none',
      backgroundColor: 'rgba(0, 0, 0, .0)',
    },
  },
  nested: {
    padding: '0 16px',
    // paddingLeft: theme.spacing(4),
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.03)',
    },
    // display: 'flex',
    // justifyContent: 'space-between',
  },
  imgContainer: {
    justifyContent: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  img: {
    width: '70px',
    [theme.breakpoints.down('sm')]: {
      width: '90px',
    },
    [theme.breakpoints.up('md')]: {
      width: '85px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '100px',
    },
    [theme.breakpoints.up('xl')]: {
      width: '120px',
    },
  },
  // marginTop: {
  //   marginTop: '6px',
  // },
  title: {
    fontWeight: 'bold',
    // marginBottom: '10px'
  },
  itemNum: {
    fontSize: '0.8rem',
    margin: '0'
  },
  fontBold: {
    fontWeight: 'bolder',
  },
  deleteBtn: {
    // marginTop: '6px',
    '&:hover': {
      color: theme.palette.secondary.dark,
      cursor: 'pointer'
    }
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.secondary.main,
  },
  textCenter: {
    textAlign: 'center',
    width: '70px',
  },
  amoutContainer: {
    justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  textRight: {
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-end',
    },
  },
  productContainer: {
    fontSize: '1rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '1.2rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.5rem',
    },
    '& div': {
      fontSize: '0.7em',
    },
  },
  orderInfo: {
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
  },
  // productBlock: {
  //   '&:hover': {
  //     transition: '1000ms',
  //     transform: 'scale(1.02)',
  //     backgroundColor: theme.palette.background.default,
  //   },
  // },
}));

const CollapseOrderItem = (props) => {
  const { orders } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!orders) {
      getOrders()
        .then((response) => {
          // console.log(response);
          // console.log('INSIDE');
          props.orders(response);
          setLoading(false);
        })
    } else {
      setLoading(false);
    }
  }, [orders, props]);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  // console.log(orders);

  return (
    <>
      {loading && <Spinner />}
      {!loading && orders.length > 0 ? orders.map((item) => {
        const { products, deliveryAddress, paymentInfo, status, orderNo, date, totalSum } = item;
        // console.log('AAAAAAA', orders.length);
        return (
          <List
            key={orderNo}
            component="nav"
            aria-labelledby="nested-list-subheader"
            // subheader={(
            //   <ListSubheader component="div" id="nested-list-subheader">
            //     MY ORDERS
            //   </ListSubheader>
            // )}
            className={classes.root}
          >
            <ListItem className={classes.mainBlock} button onClick={handleClick}>
              <Grid
                item
                container
                className={classes.orderInfo}
              >
                <span>Order №:</span>
                <span>{` ${orderNo}`}</span>
              </Grid>
              <Grid
                item
                container
                className={classes.orderInfo}
              >
                <span>Date:</span>
                <span>{` ${date.slice(0, 10)}`}</span>
              </Grid>
              <Grid
                item
                container
                className={classes.orderInfo}
              >
                <span>Status: </span>
                <span>{` ${status}`}</span>
              </Grid>
              <Grid
                item
                container
                className={classes.orderInfo}
              >
                <span>Total Sum:</span>
                <span>{` €${totalSum}`}</span>
              </Grid>
              <Grid
                item
                container
                className={classes.orderInfo}
              >
                <span>Quantity: </span>
                <span>{` ${products.length}`}</span>
              </Grid>
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            {products.map((its) => (
              <Collapse
                in={open}
                // className={classes.productBlock}
                timeout="auto"
                unmountOnExit
                key={its.product.itemNo}
              >
                <Divider variant="middle" />
                <List component="div" disablePadding>
                  <Link
                    className={classes.link}
                    to={`${RoutesName.products}/${its.product.itemNo}`}
                  >
                    <ListItem button className={classes.nested}>
                      <Grid
                        item
                        container
                        xs={12}
                        justify="space-between"
                        alignItems="center"
                        className={classes.productContainer}
                      >
                        <Grid
                          item
                          container
                          xs={12}
                          sm={2}
                          md={1}
                          className={classes.imgContainer}
                        >
                          <img
                            className={classes.img}
                            src={its.product.imageUrls ? its.product.imageUrls[0] : ''}
                            alt={its.product.name ?? ''}
                          />
                        </Grid>
                        <Grid
                          item
                          container
                          xs={12}
                          sm={3}
                          md={4}
                          justify="center"
                        >
                          {`Item-Num. ${its.product.itemNo}`}
                        </Grid>
                        <Grid
                          item
                          container
                          xs={12}
                          sm={3}
                          md={3}
                          justify="center"
                          className={`${classes.marginTop} ${classes.textCenter} ${classes.title}`}
                        >
                          {its.product.name}
                        </Grid>
                        <Grid
                          item
                          container
                          xs={12}
                          sm={1}
                          md={2}
                          justify="center"
                          className={`${classes.marginTop} ${classes.fontBold} ${classes.textRight}`}
                        >
                          {`Price €${its.product.currentPrice}`}
                        </Grid>
                        <Grid
                          item
                          container
                          xs={12}
                          sm={1}
                          md={2}
                          // justify="flex-end"
                          className={`${classes.amoutContainer} ${classes.marginTop} ${classes.textCenter} ${classes.fontBold}`}
                        >
                          {`Amount ${its.cartQuantity}`}
                        </Grid>
                      </Grid>
                    </ListItem>
                  </Link>
                </List>
              </Collapse>
            ))}
          </List>
        )
      })
        : (
          <p>
            So far, here is no orders, move on to the catalog and place your order.
            <br />
            <strong>Best wishes, your WMF</strong>
          </p>
        )}
    </>
  )
};

const mapStateToProps = (state) => ({ state });

const mapDispatchToProps = (dispatch) => ({
  orders: (data) => dispatch(orders(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(CollapseOrderItem);

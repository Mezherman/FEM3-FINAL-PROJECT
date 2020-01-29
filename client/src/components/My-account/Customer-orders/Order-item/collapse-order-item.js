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
import getOrders from '../../../../services/getOrders';
import { orders } from '../../../../redux/actions/user';
import Spinner from '../../../Spinner/spinner';
import RoutesName from '../../../../routes-list';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  mainBlock: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  nested: {
    paddingLeft: theme.spacing(4),
    // display: 'flex',
    // justifyContent: 'space-between',
  },
  img: {
    width: '70px'
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
  price: {
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
  }
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

  return (
    <>
      {loading && <Spinner />}
      {!loading && orders.map((item, index) => {
        // console.log(item)
        const { products, deliveryAddress, paymentInfo, status, orderNo, date, totalSum } = item;
        return (
          <List
            key={orderNo}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={(
              <ListSubheader component="div" id="nested-list-subheader">
                MY ORDERS
              </ListSubheader>
            )}
            className={classes.root}
          >
            <ListItem className={classes.mainBlock} button onClick={handleClick}>
              {/* <ListItemIcon> */}
              {/*  <InboxIcon /> */}
              {/* </ListItemIcon> */}
              <span>{`№ ${orderNo}`}</span>
              <span>{date.slice(0, 10)}</span>
              <span>
                Status:
                {' '}
                {status}
              </span>
              <span>
                Quantity:
                {' '}
                {products.length}
              </span>
              <span>
                Total Sum €
                {totalSum}
              </span>
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            {products.map((its) => (
              <Collapse in={open} timeout="auto" unmountOnExit key={its.product.itemNo}>
                <List component="div" disablePadding>
                  <Link
                    className={classes.link}
                    to={`${RoutesName.products}/${its.product.itemNo}`}>
                    <ListItem button className={classes.nested}>
                      <Grid
                        item
                        container
                        xs={12}
                        justify="space-between"
                        alignItems="center"
                        // className={`${classes.root} ${headerClasses.underline}`}
                      >
                        <Grid item container sm={1} justify="flex-start">
                          <img
                            className={classes.img}
                            src={its.product.imageUrls ? its.product.imageUrls[0] : ''}
                            alt={its.product.name ?? ''}
                          />
                        </Grid>
                        <Grid item container sm={3} justify="center">
                          Item-Num. :
                          {its.product.itemNo}
                        </Grid>
                        <Grid item container sm={4} justify="center">
                          <p
                            className={`${classes.marginTop} ${classes.title}`}
                          >
                            {its.product.name}
                          </p>
                        </Grid>
                        <Grid item container sm={2} justify="center">
                          <p className={`${classes.marginTop} ${classes.price}`}>
                            Price €
                            {its.product.currentPrice}
                          </p>
                        </Grid>
                        <Grid item container sm={2} justify="flex-end">
                          <p className={`${classes.marginTop} ${classes.price}`}>
                            Amount :
                            {its.cartQuantity}
                          </p>
                        </Grid>
                      </Grid>
                    </ListItem>
                  </Link>
                </List>
              </Collapse>
            ))}
          </List>
        )
      })}
    </>
  )
};

const mapStateToProps = (state) => ({ state });

const mapDispatchToProps = (dispatch) => ({
  orders: (data) => dispatch(orders(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(CollapseOrderItem);

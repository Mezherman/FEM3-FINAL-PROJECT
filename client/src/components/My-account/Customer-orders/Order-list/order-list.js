import React, { useEffect, useState } from 'react';
import { useSelector, connect } from 'react-redux';
import PropTypes from 'prop-types';
import getOrders from '../../../../services/getOrders';
import { orders as ordersAction } from '../../../../redux/actions/user';
import Spinner from '../../../Spinner/spinner';
import Order from '../Order/order';

const OrderList = ({ orderAction }) => {
  const { orders } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!orders) {
      getOrders()
        .then((response) => {
          orderAction(response);
          setLoading(false);
        })
    } else {
      setLoading(false);
    }
  }, [orders, orderAction]);

  return (
    <>
      {loading && <Spinner />}
      {!loading && orders.length > 0
        ? orders.map((item) => (
          <Order item={item} />
        ))
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

const mapStateToProps = (state) => ({
  ordersItems: state.user.orders
});

const mapDispatchToProps = (dispatch) => ({
  orderAction: (data) => dispatch(ordersAction(data))
});

OrderList.propTypes = {
  orderAction: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);

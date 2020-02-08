import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getOrders from '../../../../services/get-orders';
import { orders as ordersAction } from '../../../../redux/actions/user';
import Spinner from '../../../Spinner/spinner';
import Order from '../Order/order';
import { newNotification } from '../../../../redux/actions/notification';

const OrderList = () => {
  const { orders } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const handlerNotification = useCallback((type, message) => {
    dispatch(newNotification(type, message));
  }, [dispatch]);

  useEffect(() => {
    if (!orders) {
      getOrders()
        .then((response) => {
          dispatch(ordersAction(response));
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
          handlerNotification('error', 'Something go wrong. Try it later, please');
        })
    } else {
      setLoading(false);
    }
  }, [dispatch, handlerNotification, orders]);

  return (
    <>
      {loading && <Spinner />}
      {!loading && orders.length > 0 && orders.map((item) => (
        <Order item={item} />
      ))}
      {!loading && orders.length < 1 && (
        <div>
          <p>So far, here is no orders, move on to the catalog and place your order.</p>
          <strong>Best wishes, your WMF</strong>
        </div>
      )}
    </>
  )
};

export default OrderList;

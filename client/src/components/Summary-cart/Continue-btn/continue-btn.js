import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import RoutesName from '../../../routes-list'

export default function () {
  const categories = useSelector((state) => state.categoriesReducer.catalog.mainCategories);
  return (
    <div>
      <Link to={`${RoutesName.products}/${categories[0].id}`}>
        <span>continue Shopping</span>
      </Link>
    </div>
  )
}
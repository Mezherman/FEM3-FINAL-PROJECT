import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import 'typeface-roboto';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';

import { Link } from 'react-router-dom';
import useStyles from '../Product-card/_product-card';
import '../Product-card/product-card.scss';
import AddToBasket from '../Add-to-basket/add-to-basket';
import { RoutesName } from '../../routes';
import Carousels from '../Carousel/carousel';
import getAllCards from '../../services/dataBase';

export default function ProductCardSlider() {
  const [data, setData] = useState({ products: [] });

  useEffect(() => {
    getAllCards()
      .then((response) => {
        setData({ products: response.products })
      })
  }, []);

  const { products } = data;

  const classes = useStyles();

  const priceClassName = {
    // className: specialPrice ? 'product-card-old-price' : 'product-card-regular-price'
    className: 'product-card-regular-price'
  };

  const [modalIsVisible, setModalVisibility] = useState(false);

  const closeModal = () => {
    setModalVisibility(false)
  };

  return (
    <>
      <Carousels
        slidesToShow={4}
        slidesToScroll={1}
        transitionMode="scroll"
      >
        {products.map((item) => {
          const { imageUrls, name, currentPrice, specialPrice } = item;
          return (
            <>
              <AddToBasket
                open={modalIsVisible}
                onModalClose={closeModal}
                product={{ imageUrls, name, currentPrice, specialPrice }}
              />
              <div className={classes.card}>
                <Link
                  to={`${RoutesName.products}/${item.id}`}
                  className={classes.link}
                >
                  <Divider />
                  <Container maxWidth="sm">
                    <div className={classes.imgWrapper}>
                      <img
                        src={item.imageUrls[0]}
                        className={classes.img}
                        alt={item.name}
                      />
                    </div>
                    <Divider variant="middle" />
                    <h3 className={classes.title}>{item.name}</h3>
                    <div className={classes.priceBox}>
                      <span className={priceClassName.className}>{item.currentPrice}</span>
                      {item.specialPrice &&
                      <span className="product-card-special-price">{item.specialPrice}</span>}
                    </div>
                  </Container>
                </Link>
                <Container maxWidth="sm">
                  <Button
                    size="large"
                    fullWidth
                    variant="contained"
                    color="primary"
                    disableElevation
                    onClick={() => {
                      setModalVisibility(true)
                    }}
                  >
                    <ShoppingCartOutlinedIcon />
                  </Button>
                </Container>
              </div>
            </>
          )
        })}
      </Carousels>
    </>
  )
}

// ProductCardSlider.propTypes = {
// products: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.string])).isRequired,
// name: PropTypes.string.isRequired,
// imageUrls: PropTypes.array.isRequired,
// currentPrice: PropTypes.string.isRequired,
// specialPrice: PropTypes.string,
// };

// ProductCard.defaultProps = {
//   specialPrice: false,
//   enabled: true
// };

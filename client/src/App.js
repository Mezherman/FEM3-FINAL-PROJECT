import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import 'typeface-roboto';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import NukaCarousel from './Nuka/nukaCarousel';

import Footer from './components/Footer/footer'
import ProductList from './components/Product-list/product-list';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render () {
    return (
      <>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <div
              style={
                {
                  height: '100%',
                  backgroundColor: 'tomato',
                  fontSize: '54px'
                }
              }
            >
FILTER
            </div>
          </Grid>
          <Grid item xs={12} sm={9}>
            <ProductList />
          </Grid>
        </Grid>
      <Footer/>
        <Carousel autoPlay={true} stopOnHover={true} interval={3000} showStatus={false}
          showIndicators={false} infiniteLoop={false} verticalSwipe='natural' width="500px"
          useKeyboardArrows={true} transitionTime={1000} emulateTouch={false} centerMode={false}
          centerSlidePercentage={20} showThumbs={false}>
          <div>
            <img src="https://ikrahouse.com.ua/images/36/ikra-gorbushi-tm-paramush-550g-st.b.-vakuum-11246302931361_small6.jpg"/>
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="https://ikrahouse.com.ua/images/44/ikra-foreli-tm-paramush-200g-st.b.-39824535945471_small6.jpg"/>
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="https://ikrahouse.com.ua/images/34/ikra-shchuki-rkp-100g-st.b.-vakuum-45018837215943_small6.jpg"/>
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src="https://ikrahouse.com.ua/images/36/ikra-gorbushi-tm-paramush-550g-st.b.-vakuum-11246302931361_small6.jpg"/>
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="https://ikrahouse.com.ua/images/44/ikra-foreli-tm-paramush-200g-st.b.-39824535945471_small6.jpg"/>
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="https://ikrahouse.com.ua/images/34/ikra-shchuki-rkp-100g-st.b.-vakuum-45018837215943_small6.jpg"/>
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src="https://ikrahouse.com.ua/images/36/ikra-gorbushi-tm-paramush-550g-st.b.-vakuum-11246302931361_small6.jpg"/>
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="https://ikrahouse.com.ua/images/44/ikra-foreli-tm-paramush-200g-st.b.-39824535945471_small6.jpg"/>
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="https://ikrahouse.com.ua/images/34/ikra-shchuki-rkp-100g-st.b.-vakuum-45018837215943_small6.jpg"/>
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src="https://ikrahouse.com.ua/images/36/ikra-gorbushi-tm-paramush-550g-st.b.-vakuum-11246302931361_small6.jpg"/>
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="https://ikrahouse.com.ua/images/44/ikra-foreli-tm-paramush-200g-st.b.-39824535945471_small6.jpg"/>
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="https://ikrahouse.com.ua/images/34/ikra-shchuki-rkp-100g-st.b.-vakuum-45018837215943_small6.jpg"/>
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src="https://ikrahouse.com.ua/images/36/ikra-gorbushi-tm-paramush-550g-st.b.-vakuum-11246302931361_small6.jpg"/>
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="https://ikrahouse.com.ua/images/44/ikra-foreli-tm-paramush-200g-st.b.-39824535945471_small6.jpg"/>
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="https://ikrahouse.com.ua/images/34/ikra-shchuki-rkp-100g-st.b.-vakuum-45018837215943_small6.jpg"/>
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src="https://ikrahouse.com.ua/images/36/ikra-gorbushi-tm-paramush-550g-st.b.-vakuum-11246302931361_small6.jpg"/>
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="https://ikrahouse.com.ua/images/44/ikra-foreli-tm-paramush-200g-st.b.-39824535945471_small6.jpg"/>
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="https://ikrahouse.com.ua/images/34/ikra-shchuki-rkp-100g-st.b.-vakuum-45018837215943_small6.jpg"/>
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
        <NukaCarousel />
      </>
    )
  }
}

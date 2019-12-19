import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import NukaCarousel from './Nuka/nukaCarousel';

export default class App extends Component {
  render () {
    console.log('GO, IT Monsters!');
    return (
      <div>
        <h1>Hello, World</h1>
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
      </div>
    )
  }
}

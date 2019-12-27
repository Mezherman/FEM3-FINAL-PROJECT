import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/styles';
import { Typography, Button } from '@material-ui/core';
import withWidth from '@material-ui/core/withWidth';
import getCategories from '../../services/getCategories';
import Carousels from '../../components/Nuka-carousel/nukaCarousel';
import './category-list.scss';

const useStyles = makeStyles( theme => ({

  categories_list: {
    fontSize: '1.3rem',
    wordSpacing: '2px',
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6)
  },
  categories_img: {
    height: '300px',
    width: '100%',
    flex: 'auto',
    backgroundRepeat: 'norepeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    [theme.breakpoints.up('md')]: {
      height: '900px'
    }
  },
  categories_btn: {
    width: '100%',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    textTransform: 'lowercase',
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(2)
  },
  categories_title: {
    fontSize: '2.1rem',
    paddingBottom: theme.spacing(5),
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
    }

  },
  categories_desc: {
    paddingBottom: theme.spacing(3),
    maxHeight: '120px',
    overflow: 'hidden',
  },
  categories_description: {
    margin: theme.spacing(6, 0, 6, 0),
  },
  categories_item: {

    // marginBottom: '2rem',
  },
  categories_item_slider: {
    display: 'none',
    flex: 'auto',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  }

}));

const addBackgroundImg = (src) => {
  return {
      backgroundImage: `url(${src})`
  };

};
function ImgGrid(props) {
  const {src, classes} = props;

  return(
    <Grid item sm={12} md={6} lg={9} container alignItems='stretch'>
      <div className={classes.categories_img} style={addBackgroundImg(src)}></div>
      {/*<img className={classes.categories_img} src={src} alt="img"/>*/}
    </Grid>
  )
}


function CategoryList(props) {
  const classes = useStyles();
  const [categories, updateCategories] = useState([]);
  const ifBreakpointSmall = ['xs', 'sm'].includes(props.width);


  const setCategories = ()=>{
    getCategories().then((categoryList)=>{
      updateCategories(categoryList);
    });
  };

  const setPaddingClass = (index)=>{
    if(!ifBreakpointSmall){
      return index % 2 === 0  ? 'p_r_4' : 'p_l_4';
    }
    return '';
  };
  useEffect(() => {
    setCategories();
  },[]);
  return(
    <section className={classes.categories_list}>
      {
        Object.keys(categories).map((k, index) => (
        <Grid container spacing={0} className={[classes.categories_item, 'categories_item']} >
          {ifBreakpointSmall || index % 2 !== 0 ? <ImgGrid src={categories[k]['img']}  classes={classes}/> : ''}
          <Grid item  sm={12} md={6} lg={3} container direction={'column'} className={[classes.categories_description, setPaddingClass(index)]}>
              <Typography variant={'h3'} className={classes.categories_title}>
                {categories[k]['title']}
              </Typography>
              <Typography variant={'body1'}  className={classes.categories_desc}>
                {categories[k]['desc']}
              </Typography>
              <Button variant={'contained'} color={"secondary"} className={classes.categories_btn}>
                Learn more
              </Button>

              <div className={classes.categories_item_slider}>
                {categories[k]['products'] && categories[k]['products'].length > 0 ? <Carousels
                  isProductSlider={true}
                  autoPlay={false}
                  wrapAround={true}
                  slideIndex={0}
                  slidesToShow={1}
                  prducts={categories[k]['products']}
                />
                  : ''}
              </div>
          </Grid>
          {['xs', 'sm'].includes(props.width) || index % 2 !== 0  ? '' : <ImgGrid src={categories[k]['img']}  classes={classes}/>}
        </Grid>

        ))
      }
    </section>
  )


}

export default withWidth()(CategoryList);
import React from 'react';
import { Grid, Divider } from '@material-ui/core';
import useStyles from './_about-us';

export default function AboutUs() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.text}>
        <h2>About us</h2>
        <Divider />
        <p className={classes.text}>
          Every day, more than 100 million people around the world use products from WMF, Silit and
          Kaiser to prepare, cook, bake, eat and drink in their homes. And when they are not doing
          that, they are enjoying coffee specialities and foods prepared by the hotel and catering
          industry using WMF, Schaerer or Hepp products. Our employees are passionate about bringing
          people together, whether at home, on the move or at fine-dining establishments, in order
          to
          give them shared moments that are both precious and delicious. All this with products
          which
          have outstanding design, perfect functionality and excellent quality to make every
          culinary
          experience a real joy. Our business has a long tradition, having been founded in
          Geislingen
          an der Steige in 1853, and has been part of the French Groupe SEB since the end of 2016.
        </p>
        <div>
          <video
            className={classes.video}
            controls
            poster={`${process.env.PUBLIC_URL}/img/wmf.jpg`}
          >
            <source
              src={`${process.env.PUBLIC_URL}/video.mp4`}
            />
            <track
              kind="captions"
            />
            Sorry, your browser doesn&#8242;t support embedded videos.
          </video>
        </div>
        <h2>Brands and companies</h2>
        <Divider />
        <p>
          Some WMF stainless products produced in Germany after World War II are
          called &#8243;Fraser&#8242;s
          WMF&#8242; because they were distributed in the United States by Fraser&#8242;s Ltd. of
          New York, a
          retail outlet founded by Gordon Freeman Fraser in Berkeley, CA, in 1947. Fraser&#8242;s
          grew to
          become a division of WMF of America, Inc., a subsidiary of WMF AG. With the death of
          Gordon
          Fraser in 2005, Fraser&#8242;s ceased to exist, and WMF products are now distributed in
          the U.S.
          by WMF Americas Group of North Carolina.
        </p>
        <p>
          Since 1998 the German cooking pan manufacturer Silit also belongs to the WMF Group. Silit
          is still marketed as an independent brand. In 2002, the range of products is rounded off
          by
          the acquisition of Kaiser Backformen.
        </p>
        <h2>WMF Design – Winner of multiple awards</h2>
        <Divider />
        <Grid container spacing={5}>
          <Grid item md={6}>
            <img
              src={`${process.env.PUBLIC_URL}/img/about/awards.jpg`}
              alt="Our rewards"
              className={classes.img}
            />
          </Grid>
          <Grid item md={6}>
            <p>
              Design has always been an integral part of WMF&#8242;s corporate philosophy. The
              products are
              designed to be distinctive. Today, WMF&#8242;s internal creative team works in close
              cooperation with renowned international designers from many different disciplines. The
              company takes a holistic approach to design, combining aesthetics, function and
              usability, while always focusing on the customer. WMF products are intended to make
              preparing, cooking, eating and drinking an emotional experience for customers. WMF’s
              success in this is shown in the numerous design awards that the company receives year
              after year.
            </p>
          </Grid>
        </Grid>
      </div>
    </>
  )
}
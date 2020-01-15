import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import TelegramIcon from '@material-ui/icons/Telegram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import { Divider } from '@material-ui/core';
import Contact from './contact';
import useStyles from './_contacts';

export default function Contacts() {
  const classes = useStyles();
  const telephone = '+38 (050) 123-456-789';
  const mail = 'wmf@gmail.com';
  const address = 'Kyiv, Hetmana 1, office 115';

  return (
    <>
      <h3>Consultations and order by phone:</h3>
      <Divider />
      <div className={classes.container}>
      {/*<Grid container spacing={1} className={classes.container}>*/}
      {/*  <Grid item><PhoneIcon /></Grid>*/}
      {/*  <Grid item>*/}
      {/*    <span className={classes.block}>+38 (050) 123-456-789</span>*/}
      {/*    <span className={classes.block}>+38 (063) 123-456-789</span>*/}
      {/*    <span className={classes.block}>+38 (067) 123-456-789</span>*/}
      {/*    <span className={classes.block}>(044) 123-456-789</span>*/}
      {/*  </Grid>*/}
      {/*</Grid>*/}
        <Contact icon={<PhoneIcon />}>
          <span className={classes.block}>+38 (050) 123-456-789</span>
          <span className={classes.block}>+38 (063) 123-456-789</span>
          <span className={classes.block}>+38 (067) 123-456-789</span>
          <span className={classes.block}>+38 (044) 123-456-789</span>
        </Contact>
        <Contact icon={<TelegramIcon />}>{telephone}</Contact>
        <Contact icon={<WhatsAppIcon />}>{telephone}</Contact>
        <Contact icon={<AlternateEmailIcon />}>{mail}</Contact>
        <h3>Address:</h3>
        <span className={classes.block}>{address}</span>
      </div>
    </>
  )
}
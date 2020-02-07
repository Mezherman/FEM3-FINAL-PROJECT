import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import TelegramIcon from '@material-ui/icons/Telegram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import { Divider } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Contact from './contact';
import useStyles from './_contacts';

const Contacts = () => {
  const classes = useStyles();
  const telephone = '+38 (044) 123-456-789';
  const mobile = '+38 (050) 123-456-789';
  const mail = 'wmf-about@mail.com';
  const address = 'Kyiv, Hetmana 1, office 115';

  return (
    <Container maxWidth="xl" className={classes.minHeight}>
      <h2>Consultations and order by phone:</h2>
      <Divider />
      <div className={classes.container}>
        <Contact icon={<PhoneIcon />}>{telephone}</Contact>
        <Contact icon={<img className={classes.img} src={`${process.env.PUBLIC_URL}/img/contacts/kyivstar.jpg`} alt="telephone" />}>+38 (067) 123-456-789</Contact>
        <Contact icon={<img className={classes.img} src={`${process.env.PUBLIC_URL}/img/contacts/lifecell.jpg`} alt="telephone" />}>+38 (063) 123-456-789</Contact>
        <Contact icon={<img className={classes.img} src={`${process.env.PUBLIC_URL}/img/contacts/vodafone.jpg`} alt="telephone" />}>+38 (099) 123-456-789</Contact>
        <Contact icon={<TelegramIcon />}>{mobile}</Contact>
        <Contact icon={<WhatsAppIcon />}>{mobile}</Contact>
        <Contact icon={<AlternateEmailIcon />}>{mail}</Contact>
        <h3>Address:</h3>
        <span className={classes.block}>{address}</span>
      </div>
    </Container>
  )
}

export default Contacts;
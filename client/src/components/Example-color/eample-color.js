import Button from '@material-ui/core/Button';
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';

const ExampleColor = () => (
  <div>
    <Button
      size="large"
      variant="contained"
      color="primary"
      disableElevation
    >
      Button
    </Button>
    <Button
      size="large"
      variant="contained"
      color="secondary"
      disableElevation
    >
      Button
    </Button>
    <IconButton aria-label="cart">
      <Badge badgeContent={4} color="error">
        <ShoppingCartOutlinedIcon />
      </Badge>
    </IconButton>
    <Typography variant="h1" component="h2" color="textPrimary">
      h1. Heading
    </Typography>
    <Typography variant="h1" component="h2" color="textSecondary">
      h1. Heading
    </Typography>
  </div>
);

export default ExampleColor;

import { makeStyles } from '@material-ui/core';
// import Menu from '@material-ui/core/Menu';
// import React from 'react';

const useStylesSingIn = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  labelText: {
    color: theme.palette.secondary.dark,
  },
  checkBox: {
    color: theme.palette.primary.main,
  },
  // secondForm: {
  //   width: '100%', // Fix IE 11 issue.
  //   marginTop: theme.spacing(1),
  //   '& div>label': {
  //     color: theme.palette.error.dark,
  //   },
  //   '& label>span>span': {
  //     color: theme.palette.primary.main,
  //   },
  // },
  submit: {
    margin: theme.spacing(2, 0, 2),
  },
  text: {
    color: theme.palette.secondary.dark,
    display: 'block',
    textAlign: 'center',
    cursor: 'pointer',
  },
  errorText: {
    color: theme.palette.error.dark,
  },

}));

export default useStylesSingIn;

// export const StyledMenu = withStyles({
//   paper: {
//     border: '1px solid #d3d4d5',
//   },
// })((props) => (
//   <Menu
//     elevation={0}
//     getContentAnchorEl={null}
//     anchorOrigin={{
//       vertical: 'bottom',
//       horizontal: 'center',
//     }}
//     transformOrigin={{
//       vertical: 'top',
//       horizontal: 'center',
//     }}
//     /* eslint-disable-next-line react/jsx-props-no-spreading */
//     {...props}
//   />
// ));

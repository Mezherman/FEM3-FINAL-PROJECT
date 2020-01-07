// import React, { useState } from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import Menu from '@material-ui/core/Menu';
//
// import SignIn from './autorization';
//
// const StyledMenu = withStyles({
//   paper: {
//     border: '1px solid #d3d4d5',
//     overflow: 'hidden',
//   },
// })(props => (
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
//     {...props}
//   />
// ));
//
// export default function CustomizedMenus() {
//   const [anchorEl, setAnchorEl] = useState(null);
//
//   const handleClick = event => {
//     setAnchorEl(event.currentTarget);
//   };
//
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//
//   return (
//     <div>
//       <Button
//         aria-controls="customized-menu"
//         aria-haspopup="true"
//         variant="contained"
//         color="primary"
//         onClick={handleClick}
//       >
//         Open Menu
//       </Button>
//       <StyledMenu
//         id="customized-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//       >
//         <SignIn  />
//       </StyledMenu>
//     </div>
//   );
// }

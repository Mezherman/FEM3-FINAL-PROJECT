import { fade, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1
  },
  justify: {
    justifyContent: 'space-between'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: '#000000',
    fontSize: '27px',
    opacity: '.7',
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    }

  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(2),
    width: '90%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto'
    },
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(2),
      marginLeft: theme.spacing(3),
      width: 'auto'
    },
    border: '1px solid #666666',
    opacity: '0.4'
  },
  searchIcon: {
    width: theme.spacing(5),
    height: '100%',
    position: 'absolute',
    right: '0',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: '.7'
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  inputRoot: {
    color: 'inherit',
    [theme.breakpoints.up('sm')]: {
      width: '85%'
    },
    [theme.breakpoints.up('md')]: {
      width: '90%'
    },
    [theme.breakpoints.up('lg')]: {
      width: '95%'
    }
  },
  inputInput: {
    padding: theme.spacing(1, 2, 1, 2),
    transition: theme.transitions.create('width'),
    width: '100%'
  },
  headerMenuItem: {
    flexDirection: 'column',
    padding: '0',
    overflow: 'visible',
    '&:hover': {
      backgroundColor: 'transparent'
    },
    // '&:last-child > button': {
    //   marginRight: '0'
    // }
  },
  iconsStyle: {
    color: '#000000',
    fontSize: '27px',
    opacity: '.7'
  },
  iconButtonBox: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      minWidth: '20%'
    },
    [theme.breakpoints.up('lg')]: {
      minWidth: '15%'
    },
    '& #customized-menu': {
      display: 'none'
    }
  },
  iconButton: {
    [theme.breakpoints.up('lg')]: {
      margin: '0 13px 0 13px',
      paddingBottom: '0',
      '&:hover': {
        backgroundColor: 'transparent'
      }
    }
  },
  dividerStyle: {
    [theme.breakpoints.up('lg')]: {
      width: '1px',
      height: '55px',
    }
  },
  menuLink: {
    textDecoration: 'none',
    textAlign: 'center',
    color: '#000000',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  menuTitle: {
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'block',
      fontSize: '14px',
      '&:hover': {
        textDecoration: 'underline'
      }
    }
  },
  mainHeaderLogo: {
    width: '210px',
    marginRight: '20px'
  },
  mainHeaderLogoImg: {
    width: '80px'
  },
  mainBoxLogo: {
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      alignItems: 'center'
    }
  },
  boxLogo: {
    [theme.breakpoints.up('lg')]: {
      width: 'calc(100% / 4 - 31px)'
    }
  },
  logoIcon: {
    [theme.breakpoints.up('lg')]: {
      padding: '12px 15px'
    }
  }
}))

export default useStyles

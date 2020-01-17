import { makeStyles } from '@material-ui/core/styles';
import Variables from '../Variables/variables';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(2),
    [theme.breakpoints.up('md')]: {

    }
  },
  title: {
    fontSize: '32px',
    [theme.breakpoints.up('md')]: {
      marginBottom: 15
    }
  },
  labelText: {
    color: Variables.colors.grayDark
  },
  infoIcon: {
    marginLeft: '10px',
    color: Variables.colors.btnMainBg,
    cursor: 'pointer',
    '&:hover': {
      color: Variables.colors.btnMainBgHover
    }
  },
  modalInfoIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    margin: '0 auto',
    [theme.breakpoints.up('md')]: {
      width: 350
    },
    [theme.breakpoints.up('lg')]: {
      width: 450
    }
  },
  paperInfoIcon: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0, 0, 1),
  },
  modalInfoTitle: {
    position: 'relative',
    margin: 0,
    padding: theme.spacing(2, 3),
    backgroundColor: '#dad7ce',
    fontSize: 20,
    fontWeight: 'normal'
  },
  modalInfoClose: {
    position: 'absolute',
    right: 15,
    fontSize: '1.8rem',
    opacity: '0.8',
    cursor: 'pointer'
  },
  modalInfoText: {
    padding: theme.spacing(2, 3),
    textAlign: 'justify'
  },
  accountContentLeft: {
    fontSize: '13px',
  },
  benefitText: {
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(2)
    }
  },
  dividerSignUp: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'inline',
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      height: 455,
      alignSelf: 'flex-end'
    }
  },
  accountContentRight: {
  },
  radioGender: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  radioLabel: {
    color: Variables.colors.grayDark,
    '&:checked': {
      color: Variables.colors.btnMainBg
    }
  },
  rightTitle: {
    fontStyle: 'italic',
  },
  list: {
    listStyle: 'disc',
    paddingLeft: '15px'
  },
  listItem: {
    display: 'list-item'
  },
  helperBonus: {
    color: Variables.colors.grayDark,
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(2)
    }
  },
  labelBirthday: {
    margin: theme.spacing(3, 0, 2, 0),
    fontStyle: 'italic'
  },
  inputBirthDay: {
    width: '25%',
    paddingRight: '15px',
    textAlign: 'center'
  },
  inputBirthMonth: {
    width: '25%',
    paddingRight: '15px'
  },
  inputBirthYear: {
    width: '50%'
  },
  helperBirth: {
    margin: 0,
    textAlign: 'center',
    color: Variables.colors.btnMainBg
  },
  accountContentFooter: {
    marginTop: '30px'
  },
  labelControl: {
    alignItems: 'flex-start',
    textAlign: 'justify'
  },
  labelAgreement: {
    fontSize: '0.875rem',
    color: 'black'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    padding: theme.spacing(1, 1),
    fontSize: '0.87rem',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(1, 3),
    }
  },
  linkSignIn: {
    cursor: 'pointer'
  }
}));

export default useStyles

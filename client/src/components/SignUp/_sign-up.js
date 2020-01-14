import { makeStyles } from '@material-ui/core/styles';
import Variables from '../Variables/variables';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  title: {
    fontSize: '32px'
  },
  labelText: {
    color: Variables.colors.grayDark
  },
  accountContentLeft: {
    marginBottom: '30px',
    fontSize: '13px',
  },
  accountContentRight: {

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
    fontSize: '0.87rem'
  },
  linkSignIn: {
    cursor: 'pointer'
  }
}));

export default useStyles

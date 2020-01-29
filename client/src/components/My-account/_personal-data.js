import { makeStyles } from '@material-ui/core/styles';

const usePdstyles = makeStyles((theme) => ({
  button: {
    marginBottom: theme.spacing(1),
    fontSize: '12px',
  },

  title: {
    marginTop: theme.spacing(3),
  },

  header: {
    marginTop: theme.spacing(1),
  },

  link: {
    textDecoration: 'none',
    textAlign: 'center',
    color: theme.palette.text.primary,
  },

  linkContainer: {
    display: 'flex',
    margin: '5px 5px 10px',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },

  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },

  emailForm: {
    marginTop: theme.spacing(1)
  },

}
));

export default usePdstyles;

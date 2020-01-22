import { makeStyles } from '@material-ui/core/styles';

const usePdstyles = makeStyles((theme) => ({
  button: {
    margin: `${theme.spacing(3)}px 0`,
  },

  title: {
    marginTop: theme.spacing(3),
  },

  header: {
    marginTop: theme.spacing(1),
  },

  link: {
    display: 'flex',
    justifyContent: 'center'
  },

  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row'
  }
}
));

export default usePdstyles;

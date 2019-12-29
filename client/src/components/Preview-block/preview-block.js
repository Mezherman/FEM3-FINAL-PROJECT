import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import Preview from './preview';

export default class PreviewBlock extends React.Component {
  state = {
    close: false,
    // eslint-disable-next-line react/no-unused-state
    item: true,
  };

  handleClick = () => {
    this.setState({
      // eslint-disable-next-line react/destructuring-assignment,react/no-access-state-in-setstate
      close: !this.state.close
    })
  };

  deleteItem = () => {
    this.setState({
      item: false
    })
  }

  render() {
    console.log('Props of PREVIEW BLOCK = ', this.props)
    const { item, close } = this.state

    return (
      <div style={{ position: 'absolute', zIndex: 5, backgroundColor: 'white', border: '1px solid black', top: '5%' }}>
        {close ? null
          : (
            <>
              <h3 style={{ display: 'flex', fontSize: '2rem', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid grey', margin: 0, padding: '1rem' }}>
                Quickview Cart
                <CloseIcon
                  onClick={this.handleClick}
                  fontSize="large"
                  // style={{ position: 'absolute', right: '10px', top: '10px', cursor: 'pointer' }}
                />
              </h3>
              {item ? (<><Preview /></>)
                : (
                  <div style={{ padding: '20px 0' }}>
                    You have no items in your shopping cart.
                  </div>
                )}
            </>
          )}
      </div>
    )
  }
}
// export default function PreviewBlock () {
//   // const [item, setItem] = useState(false);
//   const [close, setClose] = useState(false);
//
//   const handleClick = () => {
//     setClose(true)
//   };
//
//   return (
//     {close ? 'text' :
//   <div>
//     <h3 style={{position: 'relative', borderBottom: '1px solid grey'}}>
//       Quickview Cart
//       <CloseIcon
//         onClick={handleClick}
//         fontSize="large"
//         style={{position: 'absolute', right: '10px', top: '10px', cursor: 'pointer'}}
//       />
//     </h3>
//
//     {item ? <p>List item </p> : <p>You have no items in your shopping cart.</p>}
//   </div>
// }
//   )
// }
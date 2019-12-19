import React, { Component } from 'react'
import FooterInfo from '../FooterInfo/footerInfo'
import FooterAbout from '../FooterAbout/footerAbout'
import './footer.scss'


export default class Footer extends Component {
  render() {
    const linksFirstRow =[{
      text:'WMF Group',
      url: '#'
    },
      {
        text:'Career',
        url: '#'
      },{
        text:'Press',
        url: '#'
      },];
    const linksSecondRow =[{
      text:'General terms and conditions',
      url: '#'
    },
      {
        text:'Revocation',
        url: '#'
      },{
        text:'Terms of Use',
        url: '#'
      },
      {
        text:'Privacy',
        url: '#'
      },{
        text:'Imprint',
        url: '#'
      }];
    const linksThirdRow =[{
      text:'Payment Methods',
      url: '#'
    },
      {
        text:'Shipping and delivery',
        url: '#'
      },{
        text:'Catalog',
        url: '#'
      },
      {
        text:'Contact us',
        url: '#'
      },{
        text:'Guarantee',
        url: '#'
      }]
    return (
          <div>
      <hr className='footer-horizontal-line'/>
      <footer className='footer'>

      <FooterAbout/>
    <div className="footer-info">
      <FooterInfo column={'Company'} columnLinks={linksFirstRow}/>
      <FooterInfo column={'Legal terms'} columnLinks={linksSecondRow}/>
      <FooterInfo column={'Consumer Care'} columnLinks={linksThirdRow}/>
    </div>
      <div className='copyright'>
      <p className='copyright-text'>&copy; 2018 all rights reserved</p>
      </div>
    </footer>
    </div>
    )
  }
}

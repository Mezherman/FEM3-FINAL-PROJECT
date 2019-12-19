import React, { Component } from 'react'
import { ListItem, List, Link } from '@material-ui/core';
import './style.scss'

export default class FooterInfo extends Component{
  render(){
    return (
      <div>
        <h3 >{this.props.column}</h3>
        <List>
          {this.props.columnLinks.map(el=>(
            <ListItem  className='info-list-item'>
              <Link style={{ color: 'white' }} href={el.url} onClick={ (e)=>(e.preventDefault()) }>
                {el.text}
              </Link>
            </ListItem>
          ))}
        </List>
      </div>)
  }
}
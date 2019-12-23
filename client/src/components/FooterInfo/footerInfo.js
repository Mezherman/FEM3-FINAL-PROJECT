import React, { Component } from 'react'
import { ListItem, List, Link } from '@material-ui/core';
import './footerInfo.scss'

export default class FooterInfo extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { column, columnLinks } = this.props;
    return (
      <div>
        <h3>{column}</h3>
        <List>
          {columnLinks.map((el) => (
            <ListItem
              key={el.text}
              className="info-list-item"
            >
              <Link style={{ color: 'white' }} href={el.url} onClick={(e) => (e.preventDefault())}>
                {el.text}
              </Link>
            </ListItem>
          ))}
        </List>
      </div>
    )
  }
}
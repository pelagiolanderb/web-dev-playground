import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = (props) => {

  return (
    <header className='navigation'>
      <nav>
        <ul>
          {
            props.listItem.map((item, i) => (
              <li key={i}>
                <Link to={ item.option.path}>{item.option.name}</Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}

export default Navigation
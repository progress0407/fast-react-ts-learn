import React from 'react'

const Header: React.FC<any> = (props: any) => {
  return (
    <header>
      <h1><a href="/" onClick={(event) => {
        event.preventDefault();
        props.onChangeMode()
      }}>{props.title}</a></h1>
      {props.body}
    </header>
  )
}

export default Header

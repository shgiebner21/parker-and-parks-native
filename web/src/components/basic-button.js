import React from 'react'

const BasicButton = (props) => {
  return(
    <button
  onClick={props.onClick}
  cls="f6 no-underline white-90 bg-green bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4 br3">
  <span cls="pl1">{props.children}</span>
</button>
  )
}

export default BasicButton

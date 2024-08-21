import React from 'react'
import PropTypes from 'prop-types'

export const Button = ({color,text,onClick}) => {
    
  return   <button style={{backgroundColor:color}} 
  
  className='btn'>{text}</button>
}

Button.defaultProps = {
    color: 'steelBlue',
    text: 'Default'
}

Button.propTypes ={
    text: PropTypes.string,
    color: PropTypes.string
}
export default Button
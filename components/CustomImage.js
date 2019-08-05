import React from 'react'
import Img from 'react-image'
import image from '../assets/images/saigon.jpg'

const CustomImage = ({ style, image }) => {
  const myStyle = Object.assign({}, 
    styles.imageStyle,
    style ? style : {}
    )

  return (
    <Img 
      src={image ? image : 'https://www.gstatic.com/images/branding/googlelogo/2x/googlelogo_color_284x96dp.png'}
      alt="Custom Image"
      style={myStyle}
    />
  )
}

const styles = {
  imageStyle: { 
    height: 'auto',
    width: 'auto',
    borderStyle: 'solid',
    borderRadius: 50, 
    borderColor: 'red',
    borderWidth: 4, 
  }
}
export default CustomImage;

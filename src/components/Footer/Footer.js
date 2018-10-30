import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {

  render() {
    return (
      <div className='Foot'>
        <div>
          <h1 className='follow'>Follow Us</h1>
          <a href="https://m.facebook.com/tourinbaja/">
            <img src="http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19750.png" alt="Facebook" className='icons' /></a>

          <a href="https://www.instagram.com/getawaytobaja/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/600px-Instagram_logo_2016.svg.png" alt="Instagram" className='icons' /></a>

          <a href="https://wa.me/16122329867">
            <img src="https://diylogodesigns.com/wp-content/uploads/2016/04/whatsapp-logo-PNG-Transparent-768x768.png" alt="WhatsApp" className='icon1' /></a>

          <a href="https://www.youtube.com/channel/UCC4v6ElEgqIbfpoRFBP6jIw">
            <img src="https://icon-icons.com/icons2/1211/PNG/512/1491580651-yumminkysocialmedia28_83061.png" alt="Youtube" className='icons' /></a>
        </div>
      </div>
    )
  }
}

export default Footer; 
import React from 'react'
import './style/contact.css'
import  {FaMapMarker,FaEnvelopeOpen,FaMobileAlt}  from "react-icons/fa";

const Contact = () => {
  return (
    <div className='csi__contact'>
      <div className='csi__contact_heading'>
        <h1 className='heading'>
          Contact Us
        </h1>
      </div>
      <div className='csi__contact_conatiner blur_background'>
        <div className='csi__contact_conatiner_left'>
          <div className='csi__contact_container_left-form'>
            <form>
              <div className='csi__contact_container_left-form_name'>
                <input type='text' placeholder='Name' /> 
              </div>
              <div className='csi__contact_container_left-form_email'>
                <input type='email' placeholder='Email' />
              </div>
              <div className='csi__contact_container_left-form_message'>
                <textarea placeholder='Message' />
              </div>
              <div className='csi__contact_container_left-form_submit'>
                <button type='submit'>Submit</button>
              </div>


            </form>

          </div>

        </div>
        <div className='csi__contact_conatiner_right'>
          <div className='csi__contact_conatiner_right-heading'>
            <h2>Contact Info</h2>
          </div>
          <div className='csi__contact_conatiner_right-info'>
            <div className='csi__contact_conatiner_right-info_text'>
              <p>
              Contact us and we'll get back to you within 24 hours.
              </p>
            </div>
            <div className='csi__contact_conatiner_right-info_address'>
              <h3>Address</h3>
              <p><FaMapMarker/> SOCS, Univerity of Petroleum and Energy Studies, Bidholi, Dehradun</p>
            </div>
            <div className='csi__contact_conatiner_right-info_email'>
              <h3>Email</h3>
              <p><FaEnvelopeOpen/> upes.csi@gmail.com</p>
            </div>
            <div className='csi__contact_conatiner_right-info_phone'>
              <h3>Phone</h3>
              <p><FaMobileAlt/> Mr.Sparsh Thapa</p>
              <p> +91 7895700706</p>
              <p className='csi__contact_conatiner_right-info_phone-ansh'><FaMobileAlt/> Mr.Ansh Gupta</p>
              <p> +91 9807726997</p>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default Contact
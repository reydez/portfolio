import Loader from 'react-loaders'
import './index.scss'
import AnimtedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendMail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_tnh5mvf',
        'template_wq6tl4u',
        refForm.current,
        'nF5QjTEcKlR2pwg3R'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the messsage, please try again.')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimtedLetters
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            I am interested in working as a fullstack developer, if you have
            other requests or questions, don't hesitate to contact me using the
            form below.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendMail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="from_name"
                    placeholder="name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>

        <div className="info-map">
          Rodrigo Reyes Hernández,
          <br />
          Mexico, Guerrero,
          <br />
          Zihuatanejo, Infonavit el hujal
          <br />
          <span>icyreyeslod@gmail.com</span>
        </div>

        <div className="map-wrap">
          <MapContainer center={[17.65537, -101.558372]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[17.65537, -101.558372]}>
              <Popup>Rodrigo lives here!</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact

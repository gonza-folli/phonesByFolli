import './ContactUs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

export const ContactUs = () => {
    return <section className="contactUs">
        <h1>Datos de contacto</h1>
        <h2>Chateá con nosotros por cualquier consulta</h2>
        <div className="socialMediaDiv"> 
            <FontAwesomeIcon icon={faWhatsapp} className="whatsappIcon"/><h3>+54 9 3564 782364</h3>
        </div> 
        <h2>Seguinos en nuestras redes sociales</h2>
        <div className="socialMediaDiv"> 
            <FontAwesomeIcon icon={faFacebook} className="facebookIcon"/><a href="https://facebook.com/PhonesByFolli"> https://facebook.com/PhonesByFolli</a>
        </div>
        <div className="socialMediaDiv"> 
            <FontAwesomeIcon icon={faInstagram} className="instagramIcon"/><a href="https://instagram.com/PhonesByFolli"> https://instagram.com/PhonesByFolli</a>
        </div>
        <div className="socialMediaDiv"> 
            <FontAwesomeIcon icon={faTwitter} className="twitterIcon"/><a href="https://twitter.com/PhonesByFolli"> https://twitter.com/PhonesByFolli</a>
        </div>
    </section>
}
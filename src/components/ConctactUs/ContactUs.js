import './ContactUs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { contactData } from '../ContactData/ContactData'


export const ContactUs = () => {
    return <section className="contactUs">
        <h1>Datos de contacto</h1>
        <h2>Chateá con nosotros por cualquier consulta</h2>
        <div className="socialMediaDiv"> 
            <FontAwesomeIcon icon={faWhatsapp} className="whatsappIcon"/><h3>+54 9 3564 782364</h3>
        </div> 
        <h2>Seguinos en nuestras redes sociales</h2>
        {contactData.map( (data) => 
            <div key={data.title}>
                <FontAwesomeIcon icon={data.icon} className={data.className}/><a href={data.link}> {data.link}</a>
            </div>)
        }

    </section>
}
import React from 'react'
import logo from  '../images/Logo .svg'

const Footer = () => {
    return (
        <footer className=''>
        <section>
            <div className='company-info'>
                <img src={logo} alt=''/>
                <p>
                Taste the best mediterranean food, made by a traditional family from the local area. We promiss that nothing will taste better than that!
                </p>
            </div>
            <div>
                <h3>Important Links</h3>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Menu</a></li>
                    <li><a href='/'>Reservations</a></li>
                    <li><a href='/'>Order Online</a></li>
                    <li><a href='/'>login</a></li>
                </ul>
            </div>
            <div>
                <h3>Contacts</h3>
                <ul>
                    <li> Adress: Little Town 987, GE, USA</li>
                    <li> Phone: + 55 21 99954-4567</li>
                    <li> Email: littlemon@littlemon.com</li>
                </ul>
            </div>
            <div>
                <h3> Social Media Links</h3>
                <ul>
                    <li><a href='/'>Facebook</a></li>
                    <li><a href='/'>Instagram</a></li>
                    <li><a href='/'>X</a></li>
                </ul>
            </div>
        </section>
        </footer>
    )
}



export default Footer;



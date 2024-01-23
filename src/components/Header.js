import React from 'react'
import { Link } from 'react-router-dom'
import bannerImg from '../images/restauranfood.jpg'

const Header = () => {
  return (
   <header className='header'>
    <section>
        <div>
            <h2 className='banner'>Little Lemon</h2>
            <h3>Chigado</h3>
            <p>Taste the best mediterranean food, made by a traditional family from the local area. We promiss that nothing will taste better than that!</p>
            <Link to="/booking"><button aria-Label='On Click'>Reserve Table</button></Link>
        </div>

        <div className='banner-img'>
            <img src={bannerImg} alt=''></img>
        </div>

    </section>

   </header>
  )
}

export default Header
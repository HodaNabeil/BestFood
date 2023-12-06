import {Link} from 'react-router-dom'


function Logo() {
  return (
    <Link to={'/home'} className='  font_2 top-[10px] text-[22px]   md:text-[30px] md:top-[50px]   lg:text-4xl  px-2'>
        Best <span className='  font_2 font-bold '> Eats</span>
    </Link>
  )
}

export default Logo

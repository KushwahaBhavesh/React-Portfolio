import './Scrollup.css'
import { FaArrowUp } from "react-icons/fa";

function Scrollup() {

  const scrollTop = () => {
    window.scrollTo({
      top: 0, behavior: 'smooth'
    })
  }

  return <>
    <div className='outer-circle' onClick={scrollTop}><FaArrowUp /></div>
  </>
}

export default Scrollup

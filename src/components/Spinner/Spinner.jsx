import spinner from "../../../public/loading.gif"
import './loading.scss'

const Spinner = () => {
  return (
    <div className='loading'>
        <img src={spinner} alt="" />
    </div>
  )
}

export default Spinner
import './navGuest.scss';
import logo from "../../../public/logo1.jpg"
import { useDispatch, useSelector } from 'react-redux';
import { setSignIn } from '../../redux/signInSlice';

const NavGuest = () => {

    const signIn = useSelector((state) => state.signIn.signIn);
    const dispatch = useDispatch()

  return (
    <div className='loginScreen'>
        <img className='loginScreen__logo' src={logo} alt="" width={50} />
    
        <button onClick={() => dispatch(setSignIn())} className='loginScreen__button'>Sign In </button>
    </div>
  )
}

export default NavGuest
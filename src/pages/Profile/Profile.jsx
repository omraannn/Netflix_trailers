import { useSelector } from 'react-redux'
import './profile.scss'
import { Navigate } from 'react-router-dom'

import { useEffect, useState } from 'react'
import { getAuth } from 'firebase/auth'

const Profile = () => {
    const user = useSelector((state) => state.user.user)
    const [signedOut, setSignedOut] = useState(false);
    const auth = getAuth();
    const handleSignOut = async () => {
        try {
            await auth.signOut();
            setSignedOut(true);
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    useEffect(() => {
        if (signedOut) {
            window.location.href = '/';
        }
    }, [signedOut]);

    if (!user || signedOut) {
        return <Navigate to="/"/>
      }
  return (
    <div className='profileScreen'>
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
            <img
            src="https://occ-0-4609-784.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABeuqjuQsRgqEDlibtJTI5BMf8IxhLlLOeIT6xI4TL57mqv7XHja43gx02S8pZVe8JNGRQXjnrUk1VcsTXqi83tFKPI6OR3k.png?r=bd7"
            alt="Netflix Avatar"
            className="nav__avatar"
            />
            <div className="profileScreen_details">
                <h2>{user.email}</h2>
                <div className="profileScreen_plans">

                    <h3>Plans (Current Plan: premium)</h3>

                    <div  className="profileScreen_plan">
                        <p>1-month / 10 TND</p>
                        <button>subscribe</button>
                    </div>

                    
                    <div className="profileScreen_plan">
                        <p>3-months / 25 TND</p>
                        <button>subscribe</button>
                    </div>

                    
                    <div className="profileScreen_plan">
                        <p>1-year / 120TND</p>
                        <button>subscribe</button>
                    </div>

                    <button onClick={handleSignOut} className='profileScreen_plans-signOut'>Sign Out</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile




 

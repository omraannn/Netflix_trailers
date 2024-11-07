import Row from "../../components/Row/Row"
import requests from "../../requests"
import Banner from '../../components/Banner/Banner'
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

 

const Home = () => {
  const user = useSelector((state) => state.user.user);

  if(!user) {
    return <Navigate to="/"/>
  }
  return ( 
        <main>
            <Banner />
            {
            requests && requests.map((item, index) => (
                <Row key={index} title={item.title} fetchUrl={item.url} isLargeLow={item.title == "NETFLIX ORIGINALS" ? true : false}/>
            ))
            }
        </main>
  )
}

export default Home
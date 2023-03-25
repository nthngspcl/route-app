import { useLocation, useNavigate, useParams } from "react-router-dom";

const Main = () => {

    const navigate = useNavigate()
    const {} = useParams()


    function navToAbout() {
        navigate('/info')
    }

    return ( 
        <div>MainPage
            <h2 onClick={navToAbout}>To about page</h2>
        </div>
     );
}
 
export default Main;
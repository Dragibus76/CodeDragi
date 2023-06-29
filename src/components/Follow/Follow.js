
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedin, faInstagramSquare, faGithubSquare} from '@fortawesome/free-brands-svg-icons'


export default function Home() {
    return (
  <>
  
    <FontAwesomeIcon icon={faFacebookSquare} bounce />
    <FontAwesomeIcon icon={faLinkedin} bounce />
    <FontAwesomeIcon icon={faInstagramSquare} bounce />
    <FontAwesomeIcon icon={faGithubSquare} bounce/>
    
  </>
      
    )
}
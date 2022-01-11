import { Animated } from 'react-animated-css'
import Title from '../components/Title'



const Home = () => {
    return (
        <Animated animationIn="fadeIn" animationInDuration={2000}>
            <Title />            
        </Animated>
    )
}

export default Home


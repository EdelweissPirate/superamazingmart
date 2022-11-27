import Title from '../Title'

import { handleFadeOut } from '../../utils'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function Splash({ handleTransition }) {
    const navigate = useNavigate()

    useEffect(() => {
        handleTransition(false)
    
        return () => {
            handleTransition(true)
        }
    }, [])
    

    const handleClick = () => {
        handleFadeOut(document.getElementById('splash'), navigate, '/home')
    }

    return (
        <section id='splash'>
            <Title />

            <div className='fill on-top absolute center-absolute flex flex-center col'>
                <button onClick={() => {handleClick()}} className='floatIn-up btn-round hover-button'>
                    Home
                </button>
            </div>
            <div className='fill on-top absolute flex col' style={{top: '65%'}}>
                <div className='w-100 txt-center floatIn-up'>
                    <h2>Welcome to SUPERAMAZINGMART! <br></br> A new web based shopping experience!</h2>
                </div>
            </div>
        </section>
    )
}

export default Splash
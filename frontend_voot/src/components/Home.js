import React from 'react'
import Navbar from './Navbar'
// import Register from './Register';


const Home = () => {
    return (
        <div>
            <Navbar />
            <img src="/page4.png" alt="Example" style={{ width: '100%', height: '53rem' }} /><br></br><br></br>
			<div className='border border-dark m-4'>


            <h5 className='m-3'>Election season is upon us, and before long it will be time to vote in this year's general election.<br></br><br></br>
             Are you registered to vote? <br></br><br></br>
             Have you checked your registration status?<br></br><br></br>
              Wondering if you can vote by mail?<br></br><br></br>
               Read on for answers to these questions and more. </h5><br></br>

            <h3 className='m-3'>How do I register to vote?</h3>
            <h5 className='m-3'> The process to register varies by state.
                <a href='/Register'>Click here</a> to select your state and find more information on how to register specific to where you live!
            </h5><br></br><br></br>

            <h3 className='m-3'>How do I make changes to my voter registration?</h3>
            <h5 className='m-3'>If you change your name, move to a new city or state, or even decide to change your political affiliation, you can check your registration here and find out more about how to make changes that ensure your ability to vote in the next election will not be affected!
            </h5><br></br><br></br>

            <h3 className='m-3'> Who is eligible to vote?</h3>

            <h5 className='m-3'>
                You can vote in indian elections, state elections, and local elections if you:</h5><br></br><br></br>


            <h5 className='m-3'>&bull; Are a indian citizen</h5><br></br>

            <h5 className='m-3'>&bull; Meet your state’s residency requirements</h5><br></br>

            <h5 className='m-3'>&bull; Are 18 years old on or before Election Day</h5><br></br>

            <h5 className='m-3'>&bull; Are registered to vote by your state's voter registration deadline.</h5> <br></br>
			</div>
        </div>
    )
}

export default Home
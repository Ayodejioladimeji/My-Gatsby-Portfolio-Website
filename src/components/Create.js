import React from 'react'
import {Link} from 'gatsby'

const Create = () => {
    return (
        <div className="box">
            <div className="box-center">
                <h3 data-aos="fade-up">Create a Website</h3>
                <p data-aos="fade-down">We can create and develop together</p>
                <Link to="/contact">
                    <button data-aos="fade-right" className='btn'>Lets do this</button>
                </Link>
            </div>
        </div>
    )
}

export default Create

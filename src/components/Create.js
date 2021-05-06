import React from 'react'
import {Link} from 'gatsby'

const Create = () => {
    return (
        <div className="box">
            <div className="box-center">
                <h3>Create a Website</h3>
                <p>We can create and develop together</p>
                <Link to="/contact">
                    <button className='btn'>Lets do this</button>
                </Link>
            </div>
        </div>
    )
}

export default Create

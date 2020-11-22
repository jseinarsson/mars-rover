import React from 'react'
import {Link} from 'react-router-dom'
import { useAxiosGet } from '../hooks/FetchRequest'

// Imports CSS from CSS Module
import './Home.css'

function Home() {
    // API Key hidden from Github and added to apiURL
    const api_key = process.env.REACT_APP_API_KEY
    const apiURL = `https://api.nasa.gov/planetary/apod?start_date=2019-01-01&end_date=2019-12-31&api_key=${api_key}`
    // const apiURL = `https://api.nasa.gov/planetary/apod?start_date=2019-01-01&end_date=2019-01-31&api_key=${api_key}`

    // Calling on a custom hook (found in hooks/FetchRequest.js) that takes in the apiURL parameter and gives us an object with loading, error and data information
    const spacePOD = useAxiosGet(apiURL)
    let content = null

    // Showing loading tag
    if(spacePOD.loading) {
        content = <div className="centered"><h2>Loading...</h2></div>
    }
    
    // Shows on error
    if(spacePOD.error) {
        content = <div className="centered"><h2>Error</h2></div>
    }

    // If the data has been loaded, then do something with it :)
    if(spacePOD.data) {
        
        // filters through the array finding images (some days are videos, but I couldn't get the API functioning with thumbnails) and then mapping each relevant object with some HTML
        const renderPOD = spacePOD.data
            .filter(POD => POD.media_type === 'image')
            .map((POD) =>
            <div className="img-container" key={POD.date}>
                {/* Each picture is a link to more info about the picture of the day, using the POD.date as a path */}
                <Link to={`/pod/${POD.date}`}>
                    <img className="pod-img" src={POD.url} alt={POD.title} />
                    <div className="pod-overlay"><h3>{POD.date}</h3></div>
                </Link>
            </div>
        )

        // Adding the newly rendered POD to the content variable
        content = <div className="image-grid">{renderPOD}</div>
    }

    // Returning the content
    return (
        <div>
            {content}
        </div>
    )
}

// Exporting the Home view
export default Home
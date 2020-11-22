import React from 'react'
import { useAxiosGet } from '../hooks/FetchRequest'

import './Home.css'

function Home() {
    const api_key = process.env.REACT_APP_API_KEY
    // const apiURL = `https://api.nasa.gov/planetary/apod?start_date=2019-01-01&end_date=2019-12-31&api_key=${api_key}`
    const apiURL = `https://api.nasa.gov/planetary/apod?start_date=2019-01-01&end_date=2019-01-31&api_key=${api_key}`

    const spacePOD = useAxiosGet(apiURL)
    let content = null

    if(spacePOD.loading) {
        content = <h2>Loading</h2>
    }
    
    if(spacePOD.error) {
        content = <h2>Error</h2>
    }

    if(spacePOD.data) {
        content =
        spacePOD.data
            .filter(POD => POD.media_type === 'image')
            .map((POD, key) =>
            <div className="img-container">
                <img className="pod-img" src={POD.url} alt={POD.title} />
            </div>
        )
    }

    return (
        <main className="image-grid">
            {content}
        </main>
    )
}

export default Home
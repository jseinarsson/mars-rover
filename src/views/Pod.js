import React from 'react'
import { useParams } from 'react-router-dom'
import { useAxiosGet } from '../hooks/FetchRequest'

// Imports CSS from CSS Module
import './Pod.css'

function POD() {
    const api_key = process.env.REACT_APP_API_KEY

    // This takes the parameters of the link (in this case, the date element) and adds it to the apiURL to fetch the correct data
    const { date } = useParams()
    const apiURL = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${api_key}`

    const spacePOD = useAxiosGet(apiURL)
    let content = null

    if(spacePOD.loading) {
        content = <div className="centered"><h2>Loading...</h2></div>
    }
    
    if(spacePOD.error) {
        content = <div className="centered"><h2>Error</h2></div>
    }

    // Creates the HTML using data from the API
    if(spacePOD.data) {
        content =  
            <div className="pod__container">
                <div className="pod__img">
                    <img src={spacePOD.data.url} alt={spacePOD.data.title} />
                </div>
                <div className="pod__info">
                    <h2 className="pod__title">{spacePOD.data.title}</h2>
                    <h4 className="pod__copyright">{spacePOD.data.copyright}</h4>
                    <p className="pod__text">{spacePOD.data.explanation}</p>
                </div>
            </div>
    }

    return (
        <main>
            {content}
        </main>
    )
}

export default POD
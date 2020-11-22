import { useEffect, useState } from 'react'
import axios from 'axios'

// Reusable custom hook that uses axios to fetch data from an API
export function useAxiosGet(url) {
    const [request, setRequest] = useState({
        loading: false,
        data: null,
        error: false
    })

    // useEffect runs only once for each change of the URL
    useEffect(() => {
        setRequest({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
            .then(res => {
                setRequest({
                    loading: false,
                    data: res.data,
                    error: false,
                })
            })
            .catch(err => {
                setRequest({
                    loading: false,
                    data: null,
                    error: true
                })
            })
        
    }, [url])

    return request
}
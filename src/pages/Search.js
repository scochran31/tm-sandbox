import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import TMList from './components/Results/TMList'
import axios from 'axios'
import './App.css'
import env from 'react-dotenv'

function App() {

    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const key = env.TM_API

    useEffect(() => {
        const fetchItems = async () => {
            setIsLoading(true)
            const result = await axios(
                `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${key}&city=salt lake city&keyword=bees&size=4`
            )
            const ev = result.data._embedded.events
            console.log(ev)

            setItems(ev)
            setIsLoading(false)
        }
        fetchItems()
    }, [])

    return (
        <div className="container">
            <Header />
            <TMList isLoading={isLoading} items={items} />
        </div>
    );
}

export default App;
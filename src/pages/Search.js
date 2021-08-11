import React, { useState, useEffect } from 'react'
// import Header from './components/Header/Header'
// import TMList from './components/Results/TMList'
// import axios from 'axios'
// import './App.css'
import {
    // Flex,
    SimpleGrid,
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    Grid,
} from "@chakra-ui/react"

function Search() {
    const [city, setCity] = useState('')
    const [event, setEvent] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('city', city)
        console.log('event', event)
        console.log('I was submitted')
    }

    return (
        <form method='POST' onSubmit={handleSubmit}>
            <SimpleGrid columns="2" spacing={10}>
                <Box>
                    <FormControl>
                        <FormLabel p='2'>
                            What city are you looking in?
                        </FormLabel>
                        <Input
                            type='text'
                            id='city'
                            value={city}
                            onChange={({ target }) =>
                                setCity(target.value)} />
                    </FormControl>
                </Box>

                <Box>
                    <FormControl>
                        <FormLabel p='2'>
                            What are you searching for?
                        </FormLabel>
                        <Input
                            type='text'
                            id='event'
                            value={event}
                            onChange={({ target }) =>
                                setEvent(target.value)}
                        />
                    </FormControl>
                </Box>
                <FormControl mt='2'>
                    <Button type='submit' colorScheme='teal'>Search Now!</Button>
                </FormControl>
            </SimpleGrid >
        </form>
    )
}

export default Search









// function App() {

//     const [items, setItems] = useState([])
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         const fetchItems = async () => {
//             setIsLoading(true)
//             const result = await axios(
//                 `https://app.ticketmaster.com/discovery/v2/events.json?apikey=qIYFggG8v6DrcytUgRWaPDN71ORtsG1h&city=salt lake city&keyword=bees&size=4`
//             )
//             const ev = result.data._embedded.events
//             console.log(ev)

//             setItems(ev)
//             setIsLoading(false)
//         }
//         fetchItems()
//     }, [])

//     return (
//         <div className="container">
//             <Header />
//             <TMList isLoading={isLoading} items={items} />
//         </div>
//     );
// }

// export default App;
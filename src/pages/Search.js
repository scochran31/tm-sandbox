import React, { useState } from 'react'
import TMList from '../components/Results/TMList'
import axios from 'axios'

import {
    // Flex,
    SimpleGrid,
    Box,
    FormControl,
    FormLabel,
    Input,
    Button
} from "@chakra-ui/react"

function Search() {
    const [city, setCity] = useState('');
    const [event, setEvent] = useState('');
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const result = await axios(
            `https://app.ticketmaster.com/discovery/v2/events.json?apikey=qIYFggG8v6DrcytUgRWaPDN71ORtsG1h&city=salt lake city&keyword=bees&size=4`
        );
        const ev = result.data._embedded.events;
        setItems(ev);
        setIsLoading(false);
    }

    return (
        <div>
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
            <TMList isLoading={isLoading} items={items} />
        </div>
    )
}

export default Search;
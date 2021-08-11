import React, { useState } from 'react'
import TMList from '../components/Results/TMList'
import axios from 'axios'
import env from 'react-dotenv'
import '../App.css'

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
    const [formState, setFormState] = useState({ city: '', event: '' });
    const { city, event } = formState;
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const result = await axios(
            `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${env.TM_API}&city=${city}keyword=${event}&size=4`
        );
        console.log(result);
        // setItems(ev);
        setIsLoading(false);
    }

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
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
                                name='city'
                                value={city}
                                onChange={handleChange} />
                        </FormControl>
                    </Box>

                    <Box>
                        <FormControl>
                            <FormLabel p='2'>
                                What are you searching for?
                            </FormLabel>
                            <Input
                                type='text'
                                name='event'
                                value={event}
                                onChange={handleChange}
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
import { Box } from '@chakra-ui/react';
import { Outlet, useLocation } from 'react-router-dom'

import Nav from '@/components/Nav';
import HomePage from './Home';

const Root = () => {
    const locationPath = useLocation().pathname;
    const content = locationPath === "/" ? <HomePage /> : <Outlet />
    return (
        <Box h="full">
            <Nav />
            <Box p={4} >
                {content}
            </Box>
        </Box>
    )
}

export default Root
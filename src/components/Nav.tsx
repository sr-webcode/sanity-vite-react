import { NavLink, NavLinkProps } from 'react-router-dom'
import { Button, HStack } from '@chakra-ui/react'

interface INavItems extends NavLinkProps {
    label: string;
}

const SAMPLE_MENU: INavItems[] = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
]
const Nav = () => {
    return (
        <HStack background="bisque" p={4} gap={2}>
            {SAMPLE_MENU.map(({ label, to }, index) => (
                <Button variant="link" key={index} as={NavLink} to={to} fontSize="lg" color="blue.900">
                    {label}
                </Button>
            ))}
        </HStack>
    )
}

export default Nav
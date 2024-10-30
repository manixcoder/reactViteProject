import React from 'react'
import { Box, HStack, Heading, Icon, Stack, Text } from '@chakra-ui/react'
import { RxDashboard } from "react-icons/rx";
import {BsArrowDownUp} from 'react-icons/bs'

const Sidenav = () => {

    const navLinks = [
        {
            icon: RxDashboard,
            text: "dashboard",
            link: '/',
        },
        {
            icon: BsArrowDownUp,
            text: "transactions",
            link: '/transactions',
        }
    ];

    return (
        <Stack>
            {
                navLinks.map((nav) => (
                    <HStack key={nav.text}>
                        <Icon as={nav.icon}>
                            <Text>{nav.text}</Text>
                        </Icon>
                    </HStack>
                ))
            }
        </Stack>
    )
}

export default Sidenav
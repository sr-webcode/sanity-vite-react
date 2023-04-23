import React, { useEffect, useState } from 'react'
import { Spinner, Text, VStack, Image, Box } from '@chakra-ui/react'
import BlockContent from '@sanity/block-content-to-react'

import { HOME_QUERY } from '@/queries/home'
import sanity, { config } from '@/config/sanity'
import useToggle from '@/hooks/useToggle'


const BlockContentElement = BlockContent as React.ElementType

interface IHomeProps {
    body: any[];
    title: string;
    imageSource: string;
}

const HomeDetails: React.FC<IHomeProps> = ({ title, body, imageSource }) => {
    return (
        <VStack align="flex-start">
            <Text>{title}</Text>
            <Box maxW={700}>
                <Image src={imageSource} alt="home-image" />
            </Box>
            <BlockContentElement
                blocks={body}
                dataset={config.dataset}
                projectId={config.projectId}
            />
        </VStack>
    )
}

const HomePage = () => {
    const [data, setData] = useState<any>({});
    const [loading, toggleLoading] = useToggle(false)
    useEffect(() => {
        toggleLoading()
        sanity
            .fetch(HOME_QUERY)
            .then((res) => setData(res?.[0]))
            .catch((err) => console.log(err))
            .finally(() => toggleLoading())
    }, [])

    if (loading) return <Spinner />
    if (Object.keys(data).length > 0) return (
        <HomeDetails
            body={data?.body}
            title={data?.title}
            imageSource={data?.mainImage.asset.url}
        />
    )

}

export default HomePage
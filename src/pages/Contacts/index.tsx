import { useLoaderData } from "react-router-dom"

const Contacts = () => {
    const contacts = useLoaderData()
    console.log(contacts)
    return (
        <div>Contacts</div>
    )
}

export default Contacts

export const contactsLoader = async () => {
    try {
        const request = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await request.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}
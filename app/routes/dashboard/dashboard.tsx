import { useEffect } from 'react'

export default function Dashboard() {
    useEffect(() => {
        const testProtected = async () => {
            await fetch('http://localhost:3000/api/dashboard', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include', //allows cookies to be set
            }).catch((e) => {
                console.error(e)
            })
        }
        testProtected()
    }, [])
    return (
        <>
            <h1>Dashboard!</h1>
            {/* <p>{JSON.stringify(userAuth)}</p> */}
        </>
    )
}

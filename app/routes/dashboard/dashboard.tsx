import { useEffect, useState } from 'react'

export default function Dashboard() {
    const [userDetails, setUserDetails] = useState({ username: '' })

    useEffect(() => {
        const testProtected = async () => {
            let { ok, data, metadata }: any = await fetch(
                'http://localhost:3000/api/dashboard',
                {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include', //allows cookies to be set
                }
            )
                .then(async (res: Response) => {
                    return await res.json()
                })
                .catch((e) => {
                    console.error(e)
                })

            console.log('useEffect', ok, data, metadata)

            if (!ok) {
                console.error(data)
            }

            setUserDetails(data)
        }
        testProtected()
    }, [])

    return (
        <>
            <h1>Dashboard!</h1>
            <p>{`Hello ${userDetails.username}`}</p>
            {/* <p>{JSON.stringify(userAuth)}</p> */}
        </>
    )
}

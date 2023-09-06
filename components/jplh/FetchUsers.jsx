import { useEffect, useState } from "react";
import OneUser from "./OneUser";

export default function FetchUsers() {
    const
        [users, setUsers] = useState(),
        [error, setError] = useState()

    useEffect(() => {
        async function f() {
            try {
                const
                    response = await fetch('https://jsonplaceholder.typicode.com/users/');
                if (!response.ok) throw new Error('fetch ' + response.status);
                setUsers(await response.json());
            } catch (err) {
                setError(err);
            }
        }
        f();
    }, []);

    if (error) return <>Error = {error}</>
    if (users) {
        return <>{users.map((user) => <OneUser user={user} />)}</>
    }

    return <>loading...</>
}
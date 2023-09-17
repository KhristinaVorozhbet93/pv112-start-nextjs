import {memo, useCallback, useEffect, useState} from "react";
import Form from "./Form";
import OneUser from "./OneUser";

export default memo (function GetUsers() {
    console.log("GetUsers работает");
    const 
    [users, setUsers] = useState([]),
    [error, setError] = useState(""),
    addUser = (user) => (setUsers(prev => [...prev, user])),
    delUser = useCallback(id => setUsers(users => users.filter(user => id !== user.id)), []);

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

    return <>
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Street</th>
                    <th>Suite</th>
                    <th>City</th>
                    <th>Phone</th>
                </tr>
                {users.map((user) => (
                  <OneUser
                    key={user.id}
                    user={user}
                    delUser={delUser}
                    addUser={addUser}
                  />
                  ))
                }
            </tbody>
        </table>
        <br />
        <Form addUser={addUser} />
    </>
});




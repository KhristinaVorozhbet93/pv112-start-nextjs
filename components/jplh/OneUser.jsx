import { memo } from "react";

export default memo (function OneUser({ user, delUser }) {
    let {
        id,
        name, 
        email, 
        address :
        {
            street, 
            suite, 
            city
        }, 
        phone
    } = user; 
    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{street}</td>
                <td>{suite}</td>
                <td>{city}</td>
                <td>{phone}</td>
                <td>
                    <button onClick={() => delUser(user.id)}>Удалить</button>
                </td>
            </tr>
        </>
    );
});

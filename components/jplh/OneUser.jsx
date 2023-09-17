import { memo } from "react";

export default memo (function OneUser({ user, delUser }) {
    return (
        <>
            <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.street}</td>
                <td>{user.suite}</td>
                <td>{user.city}</td>
                <td>{user.phone}</td>
                <td>
                    <button onClick={() => delUser(user.id)}>Удалить</button>
                </td>
            </tr>
        </>
    );
});

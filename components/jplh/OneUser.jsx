import { memo } from "react";
import styles from "./OneUser.module.css"; 

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
            <tr className={styles.card}>
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

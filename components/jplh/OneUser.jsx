export default function OneUser({ user }) {
    let {
        name,
        email,
        address: { street, suite, city },
        phone
    } = user;
    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{street}</td>
                <td>{suite}</td>
                <td>{city}</td>
                <td>{phone}</td>
            </tr>
        </>
    );
}

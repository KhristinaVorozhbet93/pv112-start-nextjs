import FetchUsers from "./FetchUsers";

export default function GetUsers() {
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
                {<FetchUsers/>}
            </tbody>
        </table>
    </>
}




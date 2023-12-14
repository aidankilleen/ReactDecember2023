const UserTable = ({ users,onDelete, onEdit }) => {

    return (
        <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>active</th>
                <th>&nbsp;</th>
            </tr>
        </thead>
        <tbody>
            
            { users.map(user => 
                <tr key={ user.id }>
                    <td>{ user.id }</td>
                    <td>{ user.name }</td>
                    <td>{ user.email }</td>
                    <td>{ user.active ? "Active" : "Inactive" }</td>
                    <td>
                        <button 
                            onClick={ 
                                () => onDelete(user.id) 
                            }>
                            Delete
                        </button>
                        <button 
                            onClick={ 
                                () => onEdit(user) 
                            }>
                            Edit
                        </button>
                    </td>
                </tr>) }
        </tbody>
    </table>
    )
}

export default UserTable;
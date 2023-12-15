import { useMutation, useQuery, useQueryClient } from "react-query";
import { deleteUser, getAllUsers } from "../Api";
import { Button } from "react-bootstrap";

const UserPage = () => {
    const { data:users, error, isLoading, isError } = useQuery("users", getAllUsers);

    const { mutateAsync:mutateAsyncDelete, isLoading:isDeleting } = useMutation(deleteUser);

    const queryClient = useQueryClient();

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }
    if (isError) {
        return (
            <div>Error...</div>
        )
    }
    const onDelete = async (id) => {
        if (window.confirm(`delete ${id}, are you sure?`)) {

            await mutateAsyncDelete(id);
            queryClient.invalidateQueries("users");

        }
    }
    return (
        <div>
            <h2>User List</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Active</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    { users.map(user => {
                        return (
                            <tr>
                                <td>{ user.id }</td>
                                <td>{ user.name }</td>
                                <td>{ user.email }</td>
                                <td>{ user.active ? "Active" : "Inactive" }</td>
                                <td>
                                    <Button 
                                        variant="danger"
                                        size="sm"
                                        onClick={ () => onDelete(user.id) }>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default UserPage;

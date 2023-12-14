let url = "https://devops2023.co.uk/users";

export const getAllUsers = async() => {

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Error in get request");
    }
    return response.json();
}

export const deleteUser = async(id) => {

    const response = await fetch(`${ url }/${ id }`, {
        method: "DELETE"
    });

    if (!response.ok) {
        throw new Error("Error in delete request");
    }
    return true;
}
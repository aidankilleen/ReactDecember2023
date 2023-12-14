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

export const addUser = async(user) => {
    const response = await fetch(url, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(user)
    });

    if (!response.ok) {
        throw new Error("Error in post requests");
    }

    return response.json();
}
export const updateUser = async(user) => {
    const response = await fetch(`${url}/${user.id}`, {
        method: "PUT", 
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(user)
    });

    if (!response.ok) {
        throw new Error("Error in post requests");
    }
    return response.json();
}
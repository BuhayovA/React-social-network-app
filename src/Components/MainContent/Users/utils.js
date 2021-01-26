export const fetchUsers = async (users, setUsers) => {
    const response = await fetch("https://social-network.samuraijs.com/api/1.0/users?count=100")
    const data = await response.json()
    return data.items.map((user) => ({
        ...user,
        fullName: user.name,
        imgSrc:user.photos.small,
        location: {
            country: '',
            city: ''
        }
    }))
}

export const fetchUsersPromise = (users, setUsers) => {
     return fetch("https://social-network.samuraijs.com/api/1.0/users?count=100")
         .then(res => res.json())
         .then(data => {
        return data.items.map((user) => ({
            ...user,
            fullName: user.name,
            imgSrc:user.photos.small,
            location: {
                country:'',
                city: ''
            }
        }))
    })

}
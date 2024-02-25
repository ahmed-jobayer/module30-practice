const checkEven = (friends) => {
    const evenFriendsArray = []
    for (const friend  of friends) {
        if (friend.length % 2 === 0) {
            evenFriendsArray.push(friend)
        }
    }
    return evenFriendsArray
}

const evenFriendsArray = checkEven ([`mishu`, `samir`, `mridul`, `miraj`, `minhaj`, `pogal`])
// console.log(Array.isArray(evenFriendsArray))
console.log(evenFriendsArray)
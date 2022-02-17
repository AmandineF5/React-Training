export const USER_SELECTED = 'USER_SELECTED'

export function selectUser(user){
    console.log('selected', user);

    return {
        type: USER_SELECTED,
        payload: user
}
}
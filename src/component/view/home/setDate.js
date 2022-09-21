export const setDate = (date) => {
    if (date === 'THỨ 2') {
        return 'monday'
    }
    else if (date === 'THỨ 3') {
        return 'tuesday'
    }
    else if (date === 'THỨ 4') {
        return 'wednesday'
    }
    else if (date === 'THỨ 5') {
        return 'thursday'
    }
    return 'friday'
}
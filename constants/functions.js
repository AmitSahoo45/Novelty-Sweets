export const colorPicker = (rating) => {
    if (rating < 2) return 'red'
    else if (rating < 3) return 'yellow'
    else if (rating < 4) return 'orange'
    else return 'green'
}

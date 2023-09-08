
export function thaiDate (data){
    const date = new Date(data)

    const result = date.toLocaleDateString('th-TH', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        // weekday: 'long',
        hour: 'numeric',
        minute: 'numeric',
        // second: 'numeric',
    })
    // console.log(result)

    return result
}

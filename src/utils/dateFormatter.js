export const formatedDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
        month : "long",
        day : "numeric",
        year : "numeric"
    })
}
// const course = [
//     {
//         id: 1,
//         title: 'judul course',
//         description: 'deskripsi course'
//     }
// ]

const localStorageKey = 'rjs11';

const setItem = (value) => {
    const valueToString = JSON.stringify(value);
    localStorage.setItem(localStorageKey, valueToString);
}

const getItem = () => {
    const result = localStorage.getItem(localStorageKey);
    if(result) {
        return JSON.parse(result)
    }
    return null;
}

const storageManager = {
    get: getItem,
    set: setItem
}

export default storageManager
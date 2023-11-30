import storageManager from "./storageManagement"

const addCourse = (payload) => {
    const currItem = storageManager.get();
    if(currItem.length !== 0 && currItem !== null) {
        const combinedItem = [...currItem, payload];
        storageManager.set(combinedItem);
    } else {
        storageManager.set([payload])
    }

    return {
        data: payload
    }
}

const getCourses = () => {
    const result = storageManager.get();
    const response = {
        data: result !== null ? result : [],
    }

    return response;
}

const updateCourse = (courseId, payload) => {
    const listCourse = storageManager.get();
    const updatedCourse = listCourse.map((item) => {
        if(item.id === courseId) {
            return {
                ...item,
                ...payload
            }
        }
        return item
    })

    storageManager.set(updatedCourse)

    return {
        data: payload
    }
}

const deleteCourse = (courseId) => {
    const listCourse = storageManager.get();
    const newList = listCourse.filter((item) => item.id !== courseId);

    storageManager.set(newList)
}

const courseService = {
    addCourse,
    getCourses,
    updateCourse,
    deleteCourse
}

export default courseService;
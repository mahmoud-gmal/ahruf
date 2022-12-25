function getFromStorage(props) {
    if(typeof window !== 'undefined'){
        return  window.localstorage.getItem(props)
    }
    }


// export const setToStorage = (key,value) => {
//     if(typeof window !== 'undefined'){
//             return window.localstorage.setItem(key,value)
//     }
//     }


export default getFromStorage;
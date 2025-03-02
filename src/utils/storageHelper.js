export const saveToStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};

export const getFromStorage = (key) => {
    const savedData = localStorage.getItem(key);
    return savedData ? JSON.parse(savedData) : null;
};

export const removeFromStorage = (key) => {
    localStorage.removeItem(key);
};

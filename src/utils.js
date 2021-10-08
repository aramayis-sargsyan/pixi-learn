export const getRandomInRange = (min, max) => {
    return Math.random() * (max - min) + min;
}

export const getRandomColor = () => {
    return "0x" + Math.floor(Math.random()*16777215).toString(16);
}
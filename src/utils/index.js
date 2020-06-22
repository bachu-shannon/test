export const sliceArrayBy = (array, sliceCount, sliceCountBy) => {
    const arrayMap = [];
    for (let i = 0; i < sliceCount; i++) {
        const start = i ? sliceCountBy * i : i;
        const end =  start
            ? sliceCountBy * i + sliceCountBy
            : sliceCountBy;
        arrayMap.push(array.slice(start, end));
    }
    return arrayMap;
}
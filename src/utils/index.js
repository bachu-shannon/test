/**
 * Get sliced array by params (only for pagination), like a hashMap, but Array type
 *
 * @param array
 * @param sliceCount
 * @param sliceCountBy
 * @returns {[]}
 */
export const sliceCollectionForPagination = (
    array = [],
    sliceCount = 0,
    sliceCountBy = 0
) => {
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
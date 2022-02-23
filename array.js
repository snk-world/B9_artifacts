
function getSortedData(data, prop, isAsc) {
    return data.sort((a, b) => {
        return (a[prop] < b[prop] ? -1 : 1) * (isAsc ? 1 : -1)
    });
}

function arrayToObject(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; ++i){
        obj[i] = arr[i];
    }
    return obj;
}


function range(start, end) {
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
}



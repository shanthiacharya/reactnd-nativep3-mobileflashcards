export const objectToArray = obj => {
  if (obj) return Object.keys(obj).map(key => obj[key])
  else return []
}


export const uniqueNumber  = () => {
    var date = Date.now();
    // If created at same millisecond as previous
    if (date <= uniqueNumber.previous) {
        date = ++uniqueNumber.previous;
    } else {
        uniqueNumber.previous = date;
    }
    return date;
}

uniqueNumber.previous = 0;

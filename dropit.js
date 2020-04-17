function dropElements(arr, func) {
    let len = arr.length; 
    for (let i = arr[0]; i <= len; i++) {
        while (!func(arr[0])) {
            arr.shift();
        }
        return arr;
    }
}

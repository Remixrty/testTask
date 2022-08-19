
function checkFirst() {
    const arr = [10, 12, 15, 21];

    for (var i = 0; i < arr.length; i++) {
        const elem = arr[i]
        setTimeout(function () {
            console.log(elem > 13 ? `Good: ${elem}` : `Bad: ${elem}`);
        }, 3000, elem)
    }
}

checkFirst()


function checkSecond() {
    const arr = [10, 12, 15, 21];


    setTimeout(function () {
        for (var i = 0; i < arr.length; i++) {
            console.log(arr[i] > 13 ? `Good: ${arr[i]}` : `Bad: ${arr[i]}`);
        }
    }, 3000)

}

checkSecond()
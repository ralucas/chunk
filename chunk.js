var chunk = function (arr, n){
    var newArray = [];
    var rem = arr.length%n;
    var a = rem;
    var b = arr.length/n;
    var c = Math.floor(b);
    var d = Math.ceil(b);
    var len = n;
    var count = 0;
    for(var i = 0; i < len; i++){
        var start = 0 + count;
        var end = 0;
        if(a > 0){
            end = c + count + 1;
        }
        else{
            end = c + count;
        }
        if(a > 0){a--;}
        newArray[i] = [];
        for(var j = start; j < end; j++){
            count += 1;
            newArray[i].push(arr[j]);
        }
    }
    return newArray;
};
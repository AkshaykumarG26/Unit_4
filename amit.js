function countPalindromes(input1, input2){
    var count = 0
    var str1 = input1.split(" ")
    var str2 = input2.split(' ')
    for (var i = 0; i < str1.length; i++){
        var len1 = str1[i].length;
        for (var j = 0; j < len1 / 2; j++){
            if (input1[i] !== input1[len1 - j - 1]){
                count++
            }
        }
    }
    for (var i = 0; i < str1.length; i++){
        var len2 = str2[i].length;
        for (var j = 0; j < len2 / 2; j++){
            if (input1[i] !== input1[len2 - j - 1]){
                count++
            }
        }
    }
    console.log(count)
}


countPalindromes("level 21", "tis is string")

var inp = "akshay kumar gullapalli"
var inp1 = inp.split(" ");
console.log(inp1)







function function123(n, arr){

    var out = []
    var flag = false
    var count = 0
    for (var i = 0; i < n; i++){
        for (var j = 0; j < out.length; j++){
            if (arr[i] === out[j]) {
                flag = true
            }
        }
        count++
        if (count == 1 && flag == false){
            out.push(arr[i])
        }
        flag = false
        count = 0
    }
    console.log(out)
}
function lowerBound(arr, k){
    var low = 0;
    var high = arr.length-1
    var ans = -1;
    while(low <= high){
        var mid = (low + Math.ceil((high - low) / 2));
        if (arr[mid] == k){
            ans = mid;
            high = mid - 1;
        }else if(arr[mid] > k){
            high = mid - 1;
        }else{
            low = mid + 1
        }    
    }
    return ans
}


console.log("Lower: ", lowerBound([2,3,3,3,6,9], 3))


function upperBound(arr, k){
    var ans = -1;
    var low = 1;
    var high = arr.length;
    
    while(low < high){
        mid = low + Math.ceil(( high - low )/2)
        if( arr[mid] <= k) {   
            low = mid + 1
        }else{
            ans = mid
            high = mid - 1
        }
    }
    // console.log(i)
    return ans
}

console.log("Upper: ", upperBound([2,3,3,3,6,9], 3))


function frequency(arr, k){
    lowerBound = lowerBound(arr, k)
    upperBound = upperBound(arr, k)

    if(lowerBound == -1){
        return 0
    } 
    var ans = upperBound - lowerBound 
    return ans

}

// console.log(frequency([2,3,3,3,6,9], 3))



function runProgram(input) {
    input = input.trim().split("\n")
    var [n,k] = input[0].split(" ").map(Number)
    var arr = input[1].trim().split(" ").map(Number)
    console.log(frequency(arr, k))

  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`5 3
1 1 2 3 5`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }
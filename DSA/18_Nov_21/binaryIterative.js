function binaryIterative(n, k, arr){
    var low = 0;
    var high = n-1;
    var mid;
    while(low <= high){
        // var flag = false
        mid = (low+(high-low)/2)
        if(arr[mid] === k){
            // console.log(1)
            // flag = true
            return 1
        }else if(arr[mid] > k){
            high = mid -1
        }else if(arr[mid] < k){
            low = mid +1
        }else{
          return -1
        }
    }
    
}



function runProgram(input) {
    input = input.trim().split("\n")
    var [n,k] = input[0].split(" ").map(Number)
    var arr = input[1].trim().split(" ").map(Number)
    console.log(binaryIterative(n,k,arr))

  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`5 0
2 -2 1 3 4`);
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
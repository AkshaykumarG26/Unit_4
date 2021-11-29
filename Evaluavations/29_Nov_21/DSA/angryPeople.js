function angryPeople(n, arr){
    arr.sort(function(a, b){return a-b})
    var sum = 0;
    var max = 0; 
    for(var i = 2; i < n-2; i++){
        sum = arr[i] - arr[i-2]
        if(sum > max){
            max = sum
        }
    }

    sum = arr[1]-arr[0];
    if(sum>max)
    max=sum;
    sum = arr[2] - arr[1];
    if(sum>max)
    max=sum;
    sum = arr[n-1] - arr[n-2];
    if(sum>max)
        max=sum;
        sum = arr[n-1] - arr[n-3];
    
    if(sum>max)
        max=sum;
        console.log(max);
    
}

// angryPeople(4,[5,2,3,4])





function runProgram(input) {
    input = input.trim().split("\n");
    var n = +input[0]
    var arr = input[1].trim().split(" ").map(Number); 
    
    angryPeople(n, arr)

   
  }
  

  if (process.env.USERNAME === "akshra") {
    runProgram(`4
    5 10 6 8`);
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
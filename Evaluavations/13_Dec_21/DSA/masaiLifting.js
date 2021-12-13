
function masaiLifting(str){
    var count = 0;
    for (var i = 0; i < str.length; i++){
        if (str[i] != str[i+1]){
            count++
        }
    }
    console.log(count)
}


function runProgram(input) {
    input = input.trim().split("\n");
    var testCases = +input[0]
    // console.log(testCases)

    var line = 1

    for (var i = 0; i < testCases; i++){
        var str = input[line++]
        // console.log(str)
        masaiLifting(str)
    }
   
  }
  

  if (process.env.USERNAME === "akshra") {
    runProgram(`2
aaaaa
abbbaaz`);
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
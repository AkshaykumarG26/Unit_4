//Enter code here
function evenCount(str){
    var result = []
    for(var i=0;i<str.length;i++) {
        var count = 0;
        for(var j=i; j<str.length; j++) {
            if(str[j] % 2 == 0){
                count++;
            }
        }
        result.push(count);
    }
    return result.join(" ");
}

function runProgram(input) {
    var str = input.trim().split("")
    console.log(evenCount(str))
    
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`574674546476`);
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
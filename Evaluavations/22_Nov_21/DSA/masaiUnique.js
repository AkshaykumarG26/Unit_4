function masaiUnique(str){
    newStr = str.split("")
    newStr = new Set(newStr)
    out = [...newStr].join('')
    // console.log(out)
    if (str.length == out.length){
        return "Unique"
    }else{
        return "No"
    }
}
// console.log(masaiUnique("aksahy"))


function runProgram(input) {
    // console.log(input)
    console.log(masaiUnique(input))

  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`masai`);
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
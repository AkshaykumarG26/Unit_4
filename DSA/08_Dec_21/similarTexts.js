function similarTexts(str1, str2) {
    var count = 0;
    
    for(var i=0;i<str1.length;i++){
        for(var j=0;j<str2.length;j++){
            if(str1[i]==str2[j]){
                count++;
            }
        }
    }
    console.log(count);
}



function runProgram(input) {
    input = input.trim().split("\n");
    var str1 = input[0].trim().split("")
    var str2 = input[1].trim().split("")

    similarTexts(str1, str2)
    
}
if (process.env.USERNAME === "akshra") {
    runProgram(`AEDFHR
ABCDGH`);
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
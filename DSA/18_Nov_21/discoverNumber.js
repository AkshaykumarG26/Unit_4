// function binaryRecursive(arr, low, high, k){
//     if (high < low)
//         return -1;
//     if (arr[low] == k)
//         return low;
//     if (arr[high] == k)
//         return high;
//     return binaryRecursive(arr, low+1, high-1, k);
// }

function binaryIterative(n, k, arr){
    var low = 0;
    var high = n-1;
    while(low <= high){
        var mid = Math.floor((low+high)/2)
        if(arr[mid] == k){
            return "YES"
        }else if(arr[mid] > k){
            high = mid - 1
        }else if(arr[mid] < k){
            low = mid + 1
        }
        
        
    }
    return "NO"
    
}

function runProgram(input) {
    input = input.trim().split("\n")
    var [n,k] = input[0].split(" ").map(Number)
    var arr = input[1].trim().split(" ").map(Number)
    console.log(arr.sort())
    // console.log(input[2])
    for (var i = 2; i <= input.length-1; i++){
        // console.log(input[i])
        console.log(binaryIterative(n, input[i], arr))
    }

  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`5 10
50 40 30 20 10
10
20
30
40
50
60
70
80
90
100`);
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



//   import java.util.*;
// class Main {
//     public static void main(String[] args) {
//         Scanner s = new Scanner(System.in);
//         int n = s.nextInt();
//         int t = s.nextInt();
//         int[] arr = new int[n];
//         for(int i=0;i<n;i++) {
//             arr[i] = s.nextInt();
//             //System.out.print(arr[i]+" ");
//         }
//         Arrays.sort(arr);
//         while(t--!=0) {
//             int v = s.nextInt();
//             int res = binarySearch(arr, n, v);
//             if(res!=-1){
// System.out.println("YES");
//             }else{
//                 System.out.println("NO");
//             }
//         }
//     }
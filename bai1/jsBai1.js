let arr = [1,2,3,4,5,6,7,8];
let max = arr[0];
let max1 =arr[1];
function findMax(arr){
for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
        max = arr[i];
        for (let j = 0; j < arr.length;j++){
            if (arr[j] > max1 && arr[j] < arr[i]){
                max1 = arr[j];
            }
        }

    }
}
return max1;
}
document.write(findMax(arr));
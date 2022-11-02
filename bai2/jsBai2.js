function tryRemoveFromArray(arr,index){
    let newArr = [];
    if(index>=0 && index< arr.length){
        for (let i=0;i<index;i++){
            newArr.push(arr[i]);
        }
        for (let i=index+1;i<arr.length;i++){
            newArr.push(arr[i]);
        }
    }else return arr;
    return newArr;
}
let arr = [1,2,3,4,5,6]
let index = +prompt()
document.write(tryRemoveFromArray(arr,index)+'')
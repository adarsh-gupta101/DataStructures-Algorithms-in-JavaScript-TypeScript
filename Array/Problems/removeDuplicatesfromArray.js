const removeDup=(arr)=>{
let len=arr.length
    arr=[...new Set(arr)]
    let remaining=len-arr.length
    // console.log(remaining)

    for(let i=0;i<remaining;i++){
        arr.push("_")
    }
return arr
}

console.log(removeDup( [,,,,,,,,,"",`"""""""""`,]))
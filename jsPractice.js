

// function getDouble(arr){
//     return arr.map(num=>num*num)
// }

// console.log(getDouble([1,2,3,4,5]))


// function getEven(arr){
//     let filterArr = arr.filter(num=>num%2===0)
//     console.log("filter",filterArr)
//     return filterArr
// }

// // console.log(getEven([1,2,3,4,5]))
// let op = getEven([1,2,3,4,5])
// console.log("op",op)


// function getSum (arr){
//     return arr.reduce((acc,cur)=>acc*cur,1)
// }

// console.log(getSum([1,2,3,4,5]))


// function getevenSum(arr){
//     let evenArr = arr.filter(num=>num%2===0)
//     console.log(evenArr)
//     return evenArr.reduce((acc,cur)=>acc+cur,0)
// }

// console.log(getevenSum([1,2,3,4,5]))




// function getevenSum(arr){
//     return arr.filter(num=>num%2!==0).reduce((acc,cur)=>acc+cur,0)
// }

// console.log(getevenSum([1,2,3,4,5]))



// let arr=[1,2,3,4,5]

// let result=arr.reduce((acc,curr)=>{
//     if(curr%2==0){
//         acc=  acc+curr;
//     }
//     return acc
    

// },0)

// console.log(result)


// arr.map((e)=> e*e).filter((e)=>e>=9).reduce((acc,curr)=> acc+curr)

// function getSqSum(arr){
//     return arr.map(num=>num*num).filter(num=>num<=9).reduce((acc,cur)=>acc+cur,0)
// }

// console.log(getSqSum([1,2,3,4,5]))


// function getUserName(arr){
//     return arr.filter(obj=>obj.age>=18).map(obj=>obj.name)
// }


// const arr = [
//     {name:'aman', age:17},
//     {name:'chaman', age:18},
//     {name:'naman', age:20}
// ]
// console.log(getUserName(arr))


// function getChunk(arr,key){
//     let res = []
//     for(let i=0;i<arr.length;i+=key){
//         res.push(arr.slice(i,i+key))
//     }
//     return res

// }

// console.log(getChunk([1,2,3,4,5,6,7],3))

// function getCommon(arr1,arr2){
//     return arr1.filter(num=>arr2.includes(num))

// }
// console.log(getCommon([1,2,3,43,5],[1,2,3,5,6,7,8]))

// function getFreq(arr){
//     let freq = {}
//     for(let num of arr){
//         if(freq[num]){
//             freq[num]++
//         }
//         else{
//             freq[num] = 1
//         }
//     }
//     return freq
// }

// console.log(getFreq(['apple','banana','cherry','apple','banana','cherry','cherry','apple','fjfjfjfj']))



// function getFreq(arr){
//     return arr.reduce((acc,curr)=>{
//         acc[curr] = (acc[curr] || 0) +1;
//         return acc
//     },{})
// }

// console.log(getFreq([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6]))



// let arr = [1,[2],[3,[4],[7,[8,[9]]]],5]

// console.log()
// const arr1 = arr.flat(Infinity)

// // const arr2 = arr1.flat(1)

// console.log(arr1)
// // console.log(arr2)



// function getCommon(arr1,arr2){
//     let op1 = arr1.filter(num=>arr2.includes(num))
// }

// console.log(getCommon([1,2,3,4,5],[3,4,5,8,9]))


// function getNotCommon (arr1,arr2){
//     let op1 = arr1.filter(num=>!arr2.includes(num))
//     let op2 = arr2.filter(num=>!arr1.includes(num))
//     console.log(op1)
//     console.log(op2)
//     return [...op1,...op2]
// }
// console.log(getNotCommon([1,2,3,4,5],[3,4,5,8,9]))



// function customMap(arr,cb){
//     let res  = []
//     for(let i =0; i<arr.length;i++){
//         // let op = cb(arr[i])
//         // res.push(op)
//         res.push(cb(arr[i]))
//     }
//     return res
// }

// console.log(customMap([1,2,3,4,5],num=>num*3))


// function customFilter(arr,cb){
//     let res = []
//     for(let i =0; i<arr.length;i++){
//         if(cb(arr[i])){
//             res.push(arr[i])
//         }
//     }
//     return res
// }

// console.log(customFilter([1,2,3,4,5],num=>num%2===0))


// function customREduce(arr,cb,init){
//     let acc = init
//     for(let i = 0;i<arr.length;i++){
//         acc = cb(acc,arr[i])
//     }
//     return acc
// }

// console.log(customREduce([1,2,3,4,5],(acc,cur)=>acc+cur,0))


// function sMax(arr){
//     let lar = -Infinity
//     let Slar = -Infinity

//     for(let num of arr){
//         if(num>lar){
//             Slar = lar
//             lar = num
//         }
//         else if(num>Slar && num!== lar){
//             Slar = num
//         }
//     }
//     console.log("lar",lar)
//     console.log("Slar",Slar)
// }

// // console.log(sMax([2,4,56,7,5,3,9]))
// sMax([1,2,3,54,3,5,6])


// function transfomrObj (arr){
//     return arr.map(name=>({name}))
// }

// // console.log(transfomrObj(['a','b','c','d']))
// let op = transfomrObj(['a','b','c','d'])


// function tarnsfomrMap1(arr){
//     return arr.map(num=>[num,num*num])
// }

// console.log(tarnsfomrMap1([1,2,3,4,5]))



// function tarnsfomrMap2(arr){
//     return arr.map(str=>({fName:str,len:str.length}))
// }

// console.log(tarnsfomrMap2(['apple','banana','cherry']))

// function tarnsfomrMap3(arr){
//     return arr.map(subArr=>subArr[0]*subArr[1])
// }
// console.log(tarnsfomrMap3([[1,2],[3,4],[5,6]]))




// function tarnsfomrMap4(arr){
//     return arr.map(num=>()=>num*num)
// }
// // console.log(tarnsfomrMap4([1,2,3,4,5]))
// let op = tarnsfomrMap4([1,2,3,4,5])

// // console.log(op[1]())

// let res = op.map(f=>f())
// console.log(res)

// function flatArr(arr){
//     return arr.reduce((acc,cur)=>acc.concat(cur),[])
// }
// console.log(flatArr([[1,2],[3,4],[5,6]]))

// function groupBy(arr,prop){
//     return arr.reduce((acc,obj)=>{
//         const key = obj[prop]
//         // console.log(key)
//         if(!acc[key]){
//             acc[key] = []
//         }
//         acc[key].push(obj)
//         return acc

//     },{})

// }

// const arr1 = [
//     {name:'alice',age:25, location:'delhi'},
//     {name:'bob',age:15, location:'mumbai'},
//     {name:'bob',age:25, location:'delhi'},
//     {name:'bob',age:45, location:'pune'},
//     {name:'alice',age:35, location:'rajasthan'},
//     {name:'aman',age:35, location:'noida'},
// ]
// console.log(groupBy(arr1,'location'))



// function countWord(arr, key){
//     return arr.filter(str=>str.length ===key).length
// }

// console.log(countWord(['abc','def','ehj','fj'],3))

// function groupByLetter(arr){
//     return arr.reduce((acc,str)=>{
//         const key = str.charAt(0)
//         if(!acc[key]){
//             acc[key] = []
//         }
//         acc[key].push(str)
//         return acc

//     },{})
// }
// console.log(groupByLetter(['abc','def','ehj','efj','afhbc','dhef',]))

// function getTotalandAvg(arr){
//     let total = arr.reduce((acc,obj)=>acc+obj.price,0)
//     let avg = total/arr.length
//     return {total,avg}
// }

// let arr = [
//     {name:'item1',price:100},
//     {name:'item2',price:200},
//     {name:'item3',price:300}
// ]

// console.log(getTotalandAvg(arr))

// function invokeMap(arr,funcs){

//     return funcs.map(fn=>arr.map(fn))

// }

// console.log(invokeMap([1,2,3,4],[x=>x+1,x=>x+2,x=>x+3]))


// function partitionArr(arr,cb){
//     return arr.reduce((acc,val)=>{
//         if(cb(val)){
//             acc[0].push(val)
//         }
//         else{
//             acc[1].push(val)

//         }

//         return acc


//     },[[],[]])
// }
// console.log(partitionArr([1,2,3,4],x=>x%2===0))

function transformObj(arr,propName,cb){
    return arr.map(obj=>({
        ...obj,
        [propName]:cb(obj)


    }))
    
}

const arr1 = [
        {name:'alice',age:5, location:'delhi'},
        {name:'bob',age:15, location:'mumbai'},
        {name:'chaman',age:25, location:'delhi'},
        {name:'karan',age:15, location:'pune'},
        {name:'aman',age:35, location:'rajasthan'},
        {name:'naman',age:3, location:'noida'},
    ]

// console.log(transformObj(arr1,"isAdult",(obj)=>obj.age>=18))
console.log(transformObj(arr1,"isAdult",({age})=>age>=18))
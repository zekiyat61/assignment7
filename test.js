const array=[2,4,6];
function takeNum(){
  let array2=[];
  for (const element of array) {
    
    array2.push(element*2) 
  }
  console.log(array2)
}
takeNum()


const obj={
  name:"jhon",
  age:20,
  gender:"male",
}
function display(obj){
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const element = obj[key];
      console.log('key='+key+"value="+obj[key])
    }
  }
}
display(obj)


function displayword(word){
  let count=1
  for(let i=0;i<word.length;i++){
    setTimeout(() => {
      console.log(`${word[i]}`)
    }, 1000*count);
    count++
  }
}
displayword("zekiyat")


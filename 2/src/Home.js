function home(){
const Data= fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data => console.log(data));


    return;
}
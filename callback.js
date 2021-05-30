let add = (x, y, callback) => {
    let sum =0;
    setTimeout(()=>{
        sum = x+y;
        callback(sum);
    }, 2000);
}

add(2, 3, (res)=>{
    console.log(res);
});
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}

//console.log(add(2,5));
module.exports=add;
// module.exports=add; // aisa mahi kar sakye hai beacuse of over ride

module.exports={
    addfun: add,
    subfun: sub,
};
var arr = [4,5,7,8,14,45,76];
console.log(even(arr));
function even(a){
  var ar = [];

  for (var i=0; i<a.length;i++){
    if (a[i] % 2 === 0)
    {
      ar.push(a[i]);
    }

  }

return ar;
}
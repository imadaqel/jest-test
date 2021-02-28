function add(now, x) {
    var mask = '';
    console.log(now)
    if (x.includes("d")){
     var num=Number(x.replace(/\D/g, ''))
    //  console.log(num)
     var res = now
     res.setDate(res.getDate() + num);
     console.log(res)
     return res;
    }
    else if(x.includes("h")){
     var num1=Number(x.replace(/\D/g, ''))
    //  console.log(num1)
     var res1 =now;
     res1.setHours(res1.getHours() + num1);
     console.log(res1.toString())
     return res1.toString();
    }
}
// add('2021-02-20T18:45:37.049Z', "1h")
// add(new Date('2021-02-20T18:45:37.049Z'), "5d")

module.exports = add;
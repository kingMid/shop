import Mock from 'mockjs'
let Random = Mock.Random;
let productData = (req)=>{
    let productList = [];//存放商品信息数据
    for(let i =0 ;i<100;i++){
     let product = {
         name:Random.ctitle(5,10),
         imgSrc:Random.dataImage(),
         price:Random.integer(9,2000)
     };
     productList.push(product)
    }
    console.log(req);
    return productList;
};
Mock.mock('http://wwww.zhangzhong.com/getVarietyItem',productData)
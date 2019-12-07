const payments = require("./payment");
const hpackage1 = require("./hpackages");
const connection = require('./connection');



async function create()
{
//    const one = await hpackage1.create("kerala", "1500", "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201701/kstory_647_010317124538.jpg");
//    console.log(one);
//    const two = await hpackage1.create("Himalayas", "2000", "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201701/kstory_647_010317124538.jpg");
//    console.log(two);
//    const three = await hpackage1.create("TamilNadu", "18000", "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201701/kstory_647_010317124538.jpg");
//    console.log(three);
//    const four = await hpackage1.create("AndhraPradesh", "1700", "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201701/kstory_647_010317124538.jpg");
//    console.log(four);
//    const five = await hpackage1.create("Punjab", "1700", "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201701/kstory_647_010317124538.jpg");
//    console.log(five);
//    const six = await hpackage1.create("WestBengal", "1700", "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201701/kstory_647_010317124538.jpg");
//    console.log(six);
const seven = await hpackage1.getall();
console.log(seven);

   const db = await connection();
    await db.serverConfig.close();
    
    console.log('Done!');
}
create().catch((error) => 
{
    console.log(error);
});

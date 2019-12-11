const payments = require("./payment");
const hpackage1 = require("./hpackages");
const connection = require('./connection');
const bcrypt = require("bcryptjs");



async function create()
{
   const one = await hpackage1.create("kerala", "1500", "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201701/kstory_647_010317124538.jpg");
   console.log(one);
   const two = await hpackage1.create("Himalayas", "2000", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC5T4J4RxyRB5X13V4tVi7qThADOocq57hxuzjk9H5dRID44gF&s");
   console.log(two);
   const three = await hpackage1.create("TamilNadu", "18000", "https://media.istockphoto.com/photos/kodaikanal-tamil-nadu-the-picturesque-lake-in-the-british-colonial-picture-id492882716?k=6&m=492882716&s=612x612&w=0&h=cswJpnBhroG9Q_6wWsRjXJ1BTfZUqDLROQO5JLDdlSQ=");
   console.log(three);
   const four = await hpackage1.create("AndhraPradesh", "1700", "https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/ntrstatue_0.jpg?itok=dDCIypLw");
   console.log(four);
   const five = await hpackage1.create("Punjab", "1700", "https://static.toiimg.com/thumb/width-650,height-433,resize-true,resizeMode-5,photoid-66518638.cms");
   console.log(five);
   const six = await hpackage1.create("WestBengal", "1700", "https://static.toiimg.com/photo/62569054/.jpg");
   console.log(six);

   const saltRounds = 5;

   const cardnumber1 = "4712960125514588";
   const cvv1 = "122";
   const hash_cardnumber1 = await bcrypt.hash(cardnumber1, saltRounds);
   const hash_cvv1 = await bcrypt.hash(cvv1, saltRounds);
   const seven = await payments.createPayment("harsha",hash_cardnumber1,"05","2026",hash_cvv1 );
   console.log(seven);

   const cardnumber2 = "4715554865982255";
   const cvv2 = "644";
   const hash_cardnumber2 = await bcrypt.hash(cardnumber2, saltRounds);
   const hash_cvv2 = await bcrypt.hash(cvv2, saltRounds);
   const eight = await payments.createPayment("chaitanya",hash_cardnumber2,"07","2029",hash_cvv2 );
   console.log(eight);


/*
payment details:

Details 1:
Name: harsha
CardNumber: 4712960125514588
Month: 05
Year: 2026
CVV:  122

Details 2:
Name:  chaitanya
CardNumber: 4715554865982255
Month: 07
Year: 2029
CVV:  644
*/





   const db = await connection();
    await db.serverConfig.close();
    
    console.log('Done!');
}
create().catch((error) => 
{
    console.log(error);
});

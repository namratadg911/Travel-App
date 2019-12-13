const payments = require("./payment");
const hpackage1 = require("./hpackages");
const attraction1 = require("./attraction");
const loc = require("./locations");
const hotels = require("./hotels");

const connection = require('./connection');
const bcrypt = require("bcryptjs");



async function create()
{
   const one = await hpackage1.create(1,"Mini-Package", "3-Day tour", 1500, 1, "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201701/kstory_647_010317124538.jpg");
   console.log(one);
   const oneone = await hpackage1.create(2,"Mega-Package", "5-Day tour", 1500,  1, "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201701/kstory_647_010317124538.jpg");
   console.log(oneone);
   const two = await hpackage1.create(3,"Mini-Package", "3-Day tour", 2000,  2, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC5T4J4RxyRB5X13V4tVi7qThADOocq57hxuzjk9H5dRID44gF&s");
   console.log(two);
   const twotwo = await hpackage1.create(4,"Mega-Package", "5-Day tour",  2000,  2, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC5T4J4RxyRB5X13V4tVi7qThADOocq57hxuzjk9H5dRID44gF&s");
   console.log(twotwo);
   const three = await hpackage1.create(5,"Mini-Package", "3-Day tour", 18000,  3, "https://media.istockphoto.com/photos/kodaikanal-tamil-nadu-the-picturesque-lake-in-the-british-colonial-picture-id492882716?k=6&m=492882716&s=612x612&w=0&h=cswJpnBhroG9Q_6wWsRjXJ1BTfZUqDLROQO5JLDdlSQ=");
   console.log(three);
   const threethree = await hpackage1.create(6,"Mega-Package", "5-Day tour", 18000,  3, "https://media.istockphoto.com/photos/kodaikanal-tamil-nadu-the-picturesque-lake-in-the-british-colonial-picture-id492882716?k=6&m=492882716&s=612x612&w=0&h=cswJpnBhroG9Q_6wWsRjXJ1BTfZUqDLROQO5JLDdlSQ=");
   console.log(threethree);
   const four = await hpackage1.create(7,"Mini-Package", "3-Day tour", 1700,  4, "https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/ntrstatue_0.jpg?itok=dDCIypLw");
   console.log(four);
   const fourfour = await hpackage1.create(8,"Mega-Package", "5-Day tour", 1700,  4, "https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/ntrstatue_0.jpg?itok=dDCIypLw");
   console.log(fourfour);
   const five = await hpackage1.create(9,"Mini-Package", "3-Day tour", 1900,  5, "https://static.toiimg.com/thumb/width-650,height-433,resize-true,resizeMode-5,photoid-66518638.cms");
   console.log(five);
   const fivefive = await hpackage1.create(10,"Mega-Package", "5-Day tour", 1900, 5, "https://static.toiimg.com/thumb/width-650,height-433,resize-true,resizeMode-5,photoid-66518638.cms");
   console.log(fivefive);
   const six = await hpackage1.create(11,"Mini-Package", "3-Day tour", 1600, 6, "https://static.toiimg.com/photo/62569054/.jpg");
   console.log(six);
   const sixsix = await hpackage1.create(12,"Mega-Package", "5-Day tour", 1600, 6, "https://static.toiimg.com/photo/62569054/.jpg");
   console.log(sixsix);


   const oneLoc = await loc.create( 1,"Kerala", "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201701/kstory_647_010317124538.jpg");
   console.log(oneLoc);
   const twoLoc = await loc.create( 2, "Himalayas","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC5T4J4RxyRB5X13V4tVi7qThADOocq57hxuzjk9H5dRID44gF&s");
   console.log(twoLoc);
   const threeLoc = await loc.create(3,"Tamil Nadu",  "https://media.istockphoto.com/photos/kodaikanal-tamil-nadu-the-picturesque-lake-in-the-british-colonial-picture-id492882716?k=6&m=492882716&s=612x612&w=0&h=cswJpnBhroG9Q_6wWsRjXJ1BTfZUqDLROQO5JLDdlSQ=");
   console.log(threeLoc);
   const fourLoc = await loc.create( 4,"Andhra Pradesh", "https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/ntrstatue_0.jpg?itok=dDCIypLw");
   console.log(fourLoc);
   const fiveLoc = await loc.create(5,"Punjab",  "https://static.toiimg.com/thumb/width-650,height-433,resize-true,resizeMode-5,photoid-66518638.cms");
   console.log(fiveLoc);
   const sixLoc = await loc.create( 6, "West Bengal","https://static.toiimg.com/photo/62569054/.jpg");
   console.log(sixLoc);


//Kerala Hotels

const oneKHotel = await hotels.create(1, "Thekkady house", "https://r1imghtlak.mmtcdn.com/031f11d4f48d11e7a9bf025f77df004f.jpg?&output-quality=75&downsize=520:*&crop=520:350;0,20&output-format=jpg",[{type:"Queen", price_diff:0},{type:"King",price_diff: 150.00}], "4.2");
console.log(oneKHotel);
const twoKHotel = await hotels.create( 2, "Hotel Vembanad",  "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/96/06/960643_v1.jpeg", [{type:"Single", price_diff:0},{type:"Double",price_diff: 200.00}], "3.9");
console.log(twoKHotel);
const threeKHotel = await hotels.create(3, "Kochi Palace", "https://media-cdn.tripadvisor.com/media/photo-w/0f/dc/52/10/brunton-boatyard-in-fort.jpg",[{type:"Queen", price_diff:0},{type:"King",price_diff: 200.00}],"4.4");
console.log(threeKHotel);
const fourKHotel = await hotels.create( 4, "Hotel Periyar",  "https://www.thehotelguru.com/_images/61/a5/61a5ab42af200f4a73118c590d842011/600x422.jpg",[{type:"Queen", price_diff:0},{type:"King",price_diff: 200.00}], "4.5");
console.log(fourKHotel);
const fiveKHotel = await hotels.create(5, "Hotel Beach View", "https://www.keralatourism.org/images/enchanting_kerala/large/state_tourism_award_winners_2014_1520170427151956_640_1.jpg",[{type:"Single", price_diff:0},{type:"Double",price_diff: 150.00}],"3.8");
console.log(fiveKHotel);

//Kerala
   const kone = await attraction1.create(1, "Museum", 1, "https://en.wikipedia.org/wiki/Kerala_Museum#/media/File:Museum_of_Kerala_History.jpg");
   console.log(kone);
   const ktwo = await attraction1.create(2, "BackWater", 3, "https://www.indiaholidayarchitects.com/wp-content/uploads/2014/12/Palm-tree-tropical-forest-in-backwater-of-Kochin-Kerala-India-copy-1024x550.jpg");
   console.log(ktwo);
   const kthree = await attraction1.create(3, "Thekkady Safari", 5, "https://www.holidify.com/places/thekkady/");
   console.log(kthree);
   const kfour = await attraction1.create(4, "National Park", 4, "https://lh3.googleusercontent.com/proxy/M6zEpWHzLc5n_W0O8F6IW0s6bAcb9qkQRkWinR-k4Z71kiVSxeWu406h0GkLC5p6ONdS0_IcvtDyRNmEGx9BWnvZ-sAWHEbYBGYKYh87-D6B049N8RFs_3BpVsTZUQnACp5X2wSUwkXgtngYublv71t63p8=w464-h260-n-k-no");
   console.log(kfour);
   const kfive = await attraction1.create(5, "Water Falls", 2, "https://cdn.photographylife.com/wp-content/uploads/2015/06/AJT_8848-Edit-650x293.jpg");
   console.log(kfive);
   const ksix = await attraction1.create(6, "Caves", 1, "https://steemitimages.com/DQmUEm5wBiVKyYXXo9P1CY5ZAcAZjGtieXcve87TVo2VE1L/Edakkal-caves-Wayanad.png");
   console.log(ksix);
   const kseven = await attraction1.create(7, "Beach", 1, "https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/Varkala_beach_750.jpg?itok=Nk4qC4Uf");
   console.log(kseven);
   const keight = await attraction1.create(8, "Fort Kochi", 1, "https://s1.it.atcdn.net/wp-content/uploads/2013/10/Sunset-over-Chinese-Fishing-nets-and-boat-in-Cochin-Kochi-Kerala-India-shutterstock_104171129-800x600.jpg");
   console.log(keight);
   const knine = await attraction1.create(9, "Vembanad Lake", 1, "images/vembanad-lake-kumarakom1.jpg");
   console.log(knine);
   const kten = await attraction1.create(10, "Periyar River", 1, "https://www.thenewsminute.com/sites/all/var/www/images/Periyar-river-turns-black-650.jpg");
   console.log(kten);

   

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

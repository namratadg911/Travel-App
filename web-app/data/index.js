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


//Himalaya Hotels

const sixKHotel = await hotels.create(6, "Hotel Yak & Yeti", "https://pix6.agoda.net/hotelImages/290/290041/290041_14030513270018558804.jpg?s=1024x768",[{type:"Queen", price_diff:0},{type:"King",price_diff: 150.00}], "4.2");
console.log(sixKHotel);
const sevenKHotel = await hotels.create( 7, "Hotel Mount Kailash",  "https://g5.globimmo.net/img.php?src=server3/a/4/1/7/c/c266722bfcdf9a9afc3d0fb690a9daa5b95768e6d2e0a8d1a3c4ae8a5cc.jpg", [{type:"Single", price_diff:0},{type:"Double",price_diff: 200.00}], "3.9");
console.log(sevenKHotel);
const eightKHotel = await hotels.create(8, "Hotel Pashupatinath", "https://images.trvl-media.com/hotels/37000000/36700000/36696600/36696517/3b821e03_z.jpg",[{type:"Queen", price_diff:0},{type:"King",price_diff: 200.00}],"4.4");
console.log(eightKHotel);
const nineKHotel = await hotels.create( 9, "Hyatt Regency",  "https://images.trvl-media.com/hotels/1000000/540000/531200/531192/50845c8f_z.jpg)",[{type:"Queen", price_diff:0},{type:"King",price_diff: 200.00}], "4.5");
console.log(nineKHotel);
const tenKHotel = await hotels.create(10, "Hotel Shiv", "https://images.trvl-media.com/hotels/6000000/5860000/5857500/5857498/d480e7c5_z.jpg)",[{type:"Single", price_diff:0},{type:"Double",price_diff: 150.00}],"3.8");
console.log(tenKHotel);


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
// //Kerala
//    const kone = await attraction1.create(1, "Museum", 1, "https://en.wikipedia.org/wiki/Kerala_Museum#/media/File:Museum_of_Kerala_History.jpg");
//    console.log(kone);
//    const ktwo = await attraction1.create(2, "BackWater", 3, "https://www.indiaholidayarchitects.com/wp-content/uploads/2014/12/Palm-tree-tropical-forest-in-backwater-of-Kochin-Kerala-India-copy-1024x550.jpg");
//    console.log(ktwo);
//    const kthree = await attraction1.create(3, "Thekkady Safari", 5, "https://www.holidify.com/places/thekkady/");
//    console.log(kthree);
//    const kfour = await attraction1.create(4, "National Park", 4, "https://lh3.googleusercontent.com/proxy/M6zEpWHzLc5n_W0O8F6IW0s6bAcb9qkQRkWinR-k4Z71kiVSxeWu406h0GkLC5p6ONdS0_IcvtDyRNmEGx9BWnvZ-sAWHEbYBGYKYh87-D6B049N8RFs_3BpVsTZUQnACp5X2wSUwkXgtngYublv71t63p8=w464-h260-n-k-no");
//    console.log(kfour);
//    const kfive = await attraction1.create(5, "Water Falls", 2, "https://cdn.photographylife.com/wp-content/uploads/2015/06/AJT_8848-Edit-650x293.jpg");
//    console.log(kfive);
//    const ksix = await attraction1.create(6, "Caves", 1, "https://steemitimages.com/DQmUEm5wBiVKyYXXo9P1CY5ZAcAZjGtieXcve87TVo2VE1L/Edakkal-caves-Wayanad.png");
//    console.log(ksix);
//    const kseven = await attraction1.create(7, "Beach", 1, "https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/Varkala_beach_750.jpg?itok=Nk4qC4Uf");
//    console.log(kseven);
//    const keight = await attraction1.create(8, "Fort Kochi", 1, "https://s1.it.atcdn.net/wp-content/uploads/2013/10/Sunset-over-Chinese-Fishing-nets-and-boat-in-Cochin-Kochi-Kerala-India-shutterstock_104171129-800x600.jpg");
//    console.log(keight);
//    const knine = await attraction1.create(9, "Vembanad Lake", 1, "images/vembanad-lake-kumarakom1.jpg");
//    console.log(knine);
//    const kten = await attraction1.create(10, "Periyar River", 1, "https://www.thenewsminute.com/sites/all/var/www/images/Periyar-river-turns-black-650.jpg");
//    console.log(kten);

//Himalayas
   const hone = await attraction1.create(11, "Temple", 2, "https://handluggageonly.co.uk/wp-content/uploads/2017/09/IMG_4482.jpg");
   console.log(hone);
   const htwo = await attraction1.create(12, "Cliffside Caves", 4, "https://img.traveltriangle.com/blog/wp-content/uploads/2018/09/Paro-Taktsang-Cover.jpg");
   console.log(htwo);
   const hthree = await attraction1.create(13, "Pashupatinath Temple", 5, "http://www.helpmeagain.com/wp-content/uploads/2017/04/MAN_7441.jpg");
   console.log(hthree);
   const hfour = await attraction1.create(14, "Buddhist Temple", 2, "https://i.pinimg.com/originals/5c/71/73/5c7173f85a750b51e1c0161fa0a41bbb.jpg");
   console.log(hfour);
   const hfive = await attraction1.create(15, "Kathmandu Durbar Square ", 3, "https://www.betterplacestravel.com/wp-content/uploads/2017/03/Nepal-Kathmandu-Durbar-square-2w.jpg");
   console.log(hfive);
   const hsix = await attraction1.create(16, "Trekking", 6, "https://www.adventuregreathimalaya.com/wp-content/uploads/2016/07/manaslu12.jpg");
   console.log(hsix);
   const hseven = await attraction1.create(17, "Kathmandu Valley", 3, "https://cdn.britannica.com/s:700x500/48/10548-004-B1063E67/Kathmandu-Nepal-Valley-background-Bairavkund-Range.jpg");
   console.log(hseven);
   const height = await attraction1.create(18, "Annapurna Sanctuary", 5, "https://ssl.c.photoshelter.com/img-get2/I0000vnvCm4kPHA4/fit=1000x750/07NEP-2719.jpg");
   console.log(height);
   const hnine = await attraction1.create(19, "Mount Kailash", 6, "https://www.tibettravel.org/blog/wp-content/uploads/2017/01/mount-kailash-3.jpg");
   console.log(hnine);
   const hten = await attraction1.create(20, "Rohtang La ", 4, "https://assets.traveltriangle.com/blog/wp-content/uploads/2016/10/Rohtang-pass-2.jpg");
   console.log(hten);

   

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

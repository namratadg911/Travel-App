const payments = require("./payment");
const hpackage1 = require("./hpackages");
const attraction1 = require("./attraction");
const loc = require("./locations");
const hotels = require("./hotels");
const itineraryData = require("../tasks/itinerary-data");
const itinerary = require("./itinerary");
const connection = require('./connection');
const bcrypt = require("bcryptjs");



async function create()
{
   const one = await hpackage1.create(1,"Mini-Package", "3-Day tour", 1500, 1, [1,2,3], "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC2CIZ2BWJj6gAwCzVcHSqv84dDsinVsIZ07_CnYRY-_XFp0q-fQ&s");
   console.log(one);
   const oneone = await hpackage1.create(2,"Mega-Package", "5-Day tour", 1500,  1,[1,2,3,4,5], "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201701/kstory_647_010317124538.jpg");
   console.log(oneone);
   const two = await hpackage1.create(3,"Mini-Package", "3-Day tour", 2000,  2, [6,7,8],"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC5T4J4RxyRB5X13V4tVi7qThADOocq57hxuzjk9H5dRID44gF&s");
   console.log(two);
   const twotwo = await hpackage1.create(4,"Mega-Package", "5-Day tour",  2000,  2, [6,7,8,9,10],"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC5T4J4RxyRB5X13V4tVi7qThADOocq57hxuzjk9H5dRID44gF&s");
   console.log(twotwo);
   const three = await hpackage1.create(5,"Mini-Package", "3-Day tour", 18000,  3, [11,12,13],"https://media.istockphoto.com/photos/kodaikanal-tamil-nadu-the-picturesque-lake-in-the-british-colonial-picture-id492882716?k=6&m=492882716&s=612x612&w=0&h=cswJpnBhroG9Q_6wWsRjXJ1BTfZUqDLROQO5JLDdlSQ=");
   console.log(three);
   const threethree = await hpackage1.create(6,"Mega-Package", "5-Day tour", 18000,  3, [11,12,13,14,15],"https://media.istockphoto.com/photos/kodaikanal-tamil-nadu-the-picturesque-lake-in-the-british-colonial-picture-id492882716?k=6&m=492882716&s=612x612&w=0&h=cswJpnBhroG9Q_6wWsRjXJ1BTfZUqDLROQO5JLDdlSQ=");
   console.log(threethree);
   const four = await hpackage1.create(7,"Mini-Package", "3-Day tour", 1700,  4, [16,17,18],"https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/ntrstatue_0.jpg?itok=dDCIypLw");
   console.log(four);
   const fourfour = await hpackage1.create(8,"Mega-Package", "5-Day tour", 1700,  4, [16,17,18,19,20],"https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/ntrstatue_0.jpg?itok=dDCIypLw");
   console.log(fourfour);
   const five = await hpackage1.create(9,"Mini-Package", "3-Day tour", 1900,  5, [21,22,23],"https://static.toiimg.com/thumb/width-650,height-433,resize-true,resizeMode-5,photoid-66518638.cms");
   console.log(five);
   const fivefive = await hpackage1.create(10,"Mega-Package", "5-Day tour", 1900, 5, [21,22,23,24,25],"https://static.toiimg.com/thumb/width-650,height-433,resize-true,resizeMode-5,photoid-66518638.cms");
   console.log(fivefive);
   const six = await hpackage1.create(11,"Mini-Package", "3-Day tour", 1600, 6, [26,27,28],"https://static.toiimg.com/photo/62569054/.jpg");
   console.log(six);
   const sixsix = await hpackage1.create(12,"Mega-Package", "5-Day tour", 1600, 6, [26,27,28,29,30],"https://static.toiimg.com/photo/62569054/.jpg");
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
const nineKHotel = await hotels.create( 9, "Hyatt Regency",  "https://images.trvl-media.com/hotels/1000000/540000/531200/531192/50845c8f_z.jpg",[{type:"Queen", price_diff:0},{type:"King",price_diff: 200.00}], "4.5");
console.log(nineKHotel);
const tenKHotel = await hotels.create(10, "Hotel Shiv", "https://images.trvl-media.com/hotels/6000000/5860000/5857500/5857498/d480e7c5_z.jpg",[{type:"Single", price_diff:0},{type:"Double",price_diff: 150.00}],"3.8");
console.log(tenKHotel);

//Tamil Nadu Hotels

const elevenKHotel = await hotels.create(11, "Visalam Hotel", "http://d3e7bfg0h5jt4g.mrandmrssmith.com/images/listing_gallery_carousel_466/223769-visalam-tamil-nadu-india.jpg",[{type:"Queen", price_diff:0},{type:"King",price_diff: 150.00}], "4.2");
console.log(elevenKHotel);
const twelveKHotel = await hotels.create( 12, "ITC Grand Chola",  "https://hi-cdn.t-rp.co.uk/images/hotels/3452704/59?width=870&height=480&crop=false", [{type:"Single", price_diff:0},{type:"Double",price_diff: 200.00}], "3.9");
console.log(twelveKHotel);
const thirteenKHotel = await hotels.create(13, "Hotel Radisson Blu", "https://r-cf.bstatic.com/images/hotel/max1024x768/339/33960936.jpg",[{type:"Queen", price_diff:0},{type:"King",price_diff: 200.00}],"4.4");
console.log(thirteenKHotel);
const onefourKHotel = await hotels.create( 14, "Sheraton",  "http://www.hotelstamilnadu.com/chennaihotels/chola/gif/hotel12.jpg",[{type:"Queen", price_diff:0},{type:"King",price_diff: 200.00}], "4.5");
console.log(onefourKHotel);
const onefiveKHotel = await hotels.create(15, "Resort Sullivan Court", "https://www.holidaysat.com/gallery/Fortune-Resort-Sullivan-Court-Ooty-00.jpg",[{type:"Single", price_diff:0},{type:"Double",price_diff: 150.00}],"3.8");
console.log(onefiveKHotel);

//Andhra Pradesh Hotels

const onesixKHotel = await hotels.create(16, "Taj Residency", "http://www.fhotels.net/Admin/PHOTOS/Hotels/3036/3036_1_18.jpg",[{type:"Queen", price_diff:0},{type:"King",price_diff: 150.00}], "4.2");
console.log(onesixKHotel);
const onesevenKHotel = await hotels.create( 17, "Hotel Novotel",  "http://resortsindia.ca/images/top.png", [{type:"Single", price_diff:0},{type:"Double",price_diff: 200.00}], "3.9");
console.log(onesevenKHotel);
const oneeightKHotel = await hotels.create(18, "Four points by Sheraton", "https://cache.marriott.com/marriottassets/marriott/VTZFP/vtzfp-facade-4513-hor-feat.jpg?interpolation=progressive-bilinear&downsize=1180px:*",[{type:"Queen", price_diff:0},{type:"King",price_diff: 200.00}],"4.4");
console.log(oneeightKHotel);
const onenineKHotel = await hotels.create( 19, "Marasa Sarovar",  "https://media.expedia.com/hotels/10000000/9810000/9807300/9807212/9807212_24_z.jpg",[{type:"Queen", price_diff:0},{type:"King",price_diff: 200.00}], "4.5");
console.log(onenineKHotel);
const twentyKHotel = await hotels.create(20, "Hotel Sai Priya", "https://q-xx.bstatic.com/xdata/images/hotel/max500/165162402.jpg?k=49934b7f27d820374140cc76ece72f14a2d8e49473f5e7bd474f59f00bfbb5c1&o=",[{type:"Single", price_diff:0},{type:"Double",price_diff: 150.00}],"3.8");
console.log(twentyKHotel);

//Punjab Hotels

const twooneKHotel = await hotels.create(21, "Cabana Orchid", "https://www.t2india.com/Images/Places/JUC/associates/A2850_1.jpg",[{type:"Queen", price_diff:0},{type:"King",price_diff: 150.00}], "4.2");
console.log(twooneKHotel);
const twotwoKHotel = await hotels.create( 22, "Svaasa Hotel",  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToj0j42A_utP0pNY2A7rjPNbS_SvFN1lay4AFKz5-CTGJZfG7C&s", [{type:"Single", price_diff:0},{type:"Double",price_diff: 200.00}], "3.9");
console.log(twotwoKHotel);
const twothreeKHotel = await hotels.create(23, "Radisson Blu", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPUEoJW1bDu8QfrknSdeYgB4_FNPCH1lY7DPpPdwL1aJ9Wd7L5aw&s",[{type:"Queen", price_diff:0},{type:"King",price_diff: 200.00}],"4.4");
console.log(twothreeKHotel);
const twofourKHotel = await hotels.create( 24, "Oberoi Sukhvilas",  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcNyu5eglSSkg0WIgyYCMJxvToTLXKhZ2jOSQp2yUf3g6-8hVbRQ&s",[{type:"Queen", price_diff:0},{type:"King",price_diff: 200.00}], "4.5");
console.log(twofourKHotel);
const twofiveKHotel = await hotels.create(25, "Luxury Hotel", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRElVYHxTb0tIco55QV3yJTk7C02GaK90aQdyCj6UvUlDemxrgmaA&s",[{type:"Single", price_diff:0},{type:"Double",price_diff: 150.00}],"3.8");
console.log(twofiveKHotel);

//West Bengal Hotels

const twosixKHotel = await hotels.create(26, "Hotel Anaya Kutir", "https://media.cntraveller.in/wp-content/uploads/2014/12/Anaya-Kutir-866x487.jpg",[{type:"Queen", price_diff:0},{type:"King",price_diff: 150.00}], "4.2");
console.log(twosixKHotel);
const twosevenKHotel = await hotels.create( 27, "Hotel Raichak",  "https://i.pinimg.com/originals/80/32/65/803265c507af39e00192dd1a63c2c894.jpg", [{type:"Single", price_diff:0},{type:"Double",price_diff: 200.00}], "3.9");
console.log(twosevenKHotel);
const twoeightKHotel = await hotels.create(28, "Hotel Siliguri", "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/99/51/99510_v4.jpeg",[{type:"Queen", price_diff:0},{type:"King",price_diff: 200.00}],"4.4");
console.log(twoeightKHotel);
const twonineKHotel = await hotels.create( 29, "The Oberoi Hotels",  "https://indialuxurytrip.files.wordpress.com/2013/09/the-oberoi-amarvilas.jpg",[{type:"Queen", price_diff:0},{type:"King",price_diff: 200.00}], "4.5");
console.log(twonineKHotel);
const thirtyKHotel = await hotels.create(30, "Hotel Mainak", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1a2gwhv12Bv9z7d_36Z-5uBNXVjRFvfxEsQn0SR1bBFbPhH-t&s",[{type:"Single", price_diff:0},{type:"Double",price_diff: 150.00}],"3.8");
console.log(thirtyKHotel);

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
   const knine = await attraction1.create(9, "Vembanad Lake", 1, "https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2019/01/Vembanad-Lake1.jpg");
   console.log(knine);
   const kten = await attraction1.create(10, "Periyar River", 1, "https://www.thenewsminute.com/sites/all/var/www/images/Periyar-river-turns-black-650.jpg");
   console.log(kten);

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

//Tamil Nadu
   const tone = await attraction1.create(21, "Meenakshi Temple", 2, "https://lh4.googleusercontent.com/proxy/vfwneme5ew6St9-O0NceqKmO_9zucfVxj2ZwX6cH6cbZck8Eg1Z5KMNoZZfmTBddCV0HzHFesNFc1n_Aknlr1Pg3StiZcqb0OHkqo7uLKt-GN8PTQjwyrMpg3dq0DdJbCUgrF0sFnAr5rfEnwfN37N8SAOA=w580-h325-n-k-no");
   console.log(tone);
   const ttwo = await attraction1.create(22, "Shore Temple", 2, "https://www.wondermondo.com/wp-content/uploads/2019/02/Chennai_Beach_temple_942115928.jpg");
   console.log(ttwo);
   const tthree = await attraction1.create(23, "Marina Beach", 2, "https://thelotus.in/blog/wp-content/uploads/2018/10/b1.jpg");
   console.log(tthree);
   const tfour = await attraction1.create(24, "Brihadeeswarar Temple", 1, "https://s3.india.com/travel/wp-content/uploads/2016/05/Brihadeeswarar1.jpg");
   console.log(tfour);
   const tfive = await attraction1.create(25, "Peak", 4, "http://live.staticflickr.com/5616/15349762328_196af94389_b.jpg");
   console.log(tfive);
   const tsix = await attraction1.create(26, "Nilgiri Mountain Railway", 2, "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-s3fkj69dr1tqpo8vn44fasres2-20190227015427.Medi.jpeg");
   console.log(tsix);
   const tseven = await attraction1.create(27, "Pancha Rathas", 2, "https://www.themysteriousindia.net/wp-content/uploads/Mahabalipuram-1-1-770x513.jpg");
   console.log(tseven);
   const teight = await attraction1.create(28, "Scholar Statue", 3, "https://www.maduraitourism.com/wp-content/uploads/2014/06/spot3.jpg");
   console.log(teight);
   const tnine = await attraction1.create(29, "Botanical Garden", 4, "https://dc-cdn.s3-ap-southeast-1.amazonaws.com/dc-Cover-ea35v3t98mpm963jkc5son8lt7-20160530063233.Medi.jpeg");
   console.log(tnine);
   const tten = await attraction1.create(30, "Meditation Dome", 2, "https://cdnimd.worldarchitecture.org/extuploadc/photobysanyambahgacopy.jpg");
   console.log(tten);

//Andhra Pradesh

   const anone = await attraction1.create(31, "Tirupathi", 7, "https://lh3.googleusercontent.com/proxy/viO5SQyjoo32XqnSrcDFL9-To3Ncu2x8UaY5mSqoxSqAFsOVgy3vl8U8b5c1xZ7KHx9-C5CEqOdIApnLCMEd0VTrtqIelZoIp73uNtMQi_6ywSchcEKmCR7iAWnfDusU_RQ3YzGaUXhNB4XMItiuOifPU8k=w336-h190-n-k-no");
   console.log(anone);
   const antwo = await attraction1.create(32, "Araku Valley", 3, "https://lh4.googleusercontent.com/proxy/kZ7OudtC_uc-J1D7tmigrRYDkfjuExtgEIltg0NijkvJ5rW0ydvD-_KB88SYO7Ulp1RNuhzg68dtWudxH7_zmI0yBWzNuvOPqGP9qpRgDjQSODPW5i8uwT1_yobCiPN05JYgcadIpP6c7kbXorONT11dSco=w357-h238-k-no");
   console.log(antwo);
   const anthree = await attraction1.create(33, "Borra Caves", 4, "https://lh5.googleusercontent.com/-wCS0nZblX9M/WWr8U0r66vI/AAAAAAABQ38/PyxjNFoYGmcKm9KryzwWi0dAEKHicGuigCLIBGAYYCw/w317-h238-k-no/");
   console.log(anthree);
   const anfour = await attraction1.create(34, "Horsley Hills", 4, "https://lh3.googleusercontent.com/-INswlbdF3GE/WwxQWHAnWLI/AAAAAAABCTU/U0XQrN-g7fceflTM5rDqI_Xg3bu8xU3kwCLIBGAYYCw/w441-h238-k-no/");
   console.log(anfour);
   const anfive = await attraction1.create(35, "Godavari River", 2, "https://lh4.googleusercontent.com/-YJBdb_fwY-8/XbSK5IrUCaI/AAAAAAAAdnM/dw-UunjE1x0hIoVK3ofdR1ic7EgYyw9yACLIBGAYYCw/w428-h238-k-no/");
   console.log(anfive);
   const ansix = await attraction1.create(36, "Nagarjunsagar-Srisailam Tiger Reserve", 5, "https://lh4.googleusercontent.com/-gf_lZsnhUKI/XNpXiEAqf5I/AAAAAAAARKg/UVSFkfePRKsx4cAoMa_ynHPx2tWG7F17QCLIBGAYYCw/w317-h238-k-no/");
   console.log(ansix);
   const anseven = await attraction1.create(37, "Kondapalli", 2, "https://lh4.googleusercontent.com/proxy/sWRUtWfs3A9i0T_jJlzKyd1q0HzJl4gX5Y_a0pN71O1Zq5_P6-6TWAiDodYNUNFAq5Q6w5PXkQ32D9GfBDjzutUt8oJjyeDrh7t7NOYuhLA-yOb7EON1R-g3sxk9HrTIAlVU83HAJyBZTb3PWN700SUJHV8=w423-h238-k-no");
   console.log(anseven);
   const aneight = await attraction1.create(38, "Tadipatri", 2, "https://lh6.googleusercontent.com/-suyuk0ywEGQ/XWFrh9KItBI/AAAAAAAA3Vw/I7aBxAW5vFQIAw5zTBzuj8zs7hZHigPjwCLIBGAYYCw/w179-h238-k-no/");
   console.log(aneight);
   const annine = await attraction1.create(39, "Nandyala", 4, "https://lh5.googleusercontent.com/-1EZBAqf6h3Q/XM1qaWDpqpI/AAAAAAAACxw/qa2GGzawRBIJaogaBFJeTWvagYtUa1LIwCLIBGAYYCw/w358-h238-k-no/");
   console.log(annine);
   const anten = await attraction1.create(40, "Penukonda", 4, "https://lh5.googleusercontent.com/-AAyEdnZktMU/XVNuIK9u5QI/AAAAAAAArbw/puMcmaBU6DUkiFT4XqlSck-QNe3I1JvrwCLIBGAYYCw/w522-h238-k-no/");
   console.log(anten);

//Punjab
   const pone = await attraction1.create(41, "Amritsar", 3, "https://lh5.googleusercontent.com/-aSSGg-1PHa8/V1LVr8hl28I/AAAAAAAACPQ/Ie0L1e5nr7UdVgKl2tO-fUWPN8B-ImCGACLIBGAYYCw/w423-h238-k-no/");
   console.log(pone);
   const ptwo = await attraction1.create(42, "Pathankot", 2, "https://lh5.googleusercontent.com/-B3MXtaDsfSQ/W7CK94RfOtI/AAAAAAAAYyA/nws_nfrdCLcIrhq6d8UxWboLNSTW2CkjQCLIBGAYYCw/w425-h238-k-no/");
   console.log(ptwo);
   const pthree = await attraction1.create(43, "Bislaspur", 4, "https://lh3.googleusercontent.com/-EVjKcJg_fzs/XDnlRfUPTvI/AAAAAAAALbw/oZo33IXmx2c8GuA4f__Fax5J0rqOzrEhgCLIBGAYYCw/w317-h238-k-no/");
   console.log(pthree);
   const pfour = await attraction1.create(44, "Nangal", 2, "https://lh4.googleusercontent.com/-T4uQ4k-lMwM/V9xNatRIOjI/AAAAAAAAAC8/xhOBryCF0XIuP6ttI1fw1kk-FyNLpsWpwCLIBGAYYCw/w413-h238-k-no/");
   console.log(pfour);
   const pfive = await attraction1.create(45, "Jagraon", 3, "https://lh3.googleusercontent.com/-BcoX5aeSuqU/Wj6W5Hpd6dI/AAAAAAAAJD4/49ij1ymEkToksy4Q4thacucTbUR7JpDrgCLIBGAYYCw/w423-h238-k-no/");
   console.log(pfive);
   const psix = await attraction1.create(46, "Malerkotla", 5, "https://lh3.googleusercontent.com/proxy/HxJcaAx4_PYGpwh_M0hcRkb3-WwUWp6MCPSFtEboc7NicwpBfEhVMusLUfUqbBD98p5Vz8ejcHUuQFwaAMSB5VV_ipOSndOFtLfywNhOyueCbrs3eupDWbLYMUp7C3s01ofgKHAfD9aTxRBueh6456zV9TQ=w358-h238-k-no");
   console.log(psix);
   const pseven = await attraction1.create(47, "Kartarpur", 4, "https://lh3.googleusercontent.com/-wc97NNtU45s/XXS1RsLMo0I/AAAAAAAApKM/XZ5L0wndcZMNSAg3d-1AAy8wJjCc1-RWgCLIBGAYYCw/w317-h238-k-no/");
   console.log(pseven);
   
//West Bengal
   const wbone = await attraction1.create(48, "Sundarban National Park", 5, "https://ihpl.b-cdn.net/pictures/wildlife/parks/sunderbans-55.jpeg");
   console.log(wbone);
   const wbtwo = await attraction1.create(49, "Victoria Memorial", 3, "https://k6u8v6y8.stackpathcdn.com/blog/wp-content/uploads/2018/04/Victoria-Memorial.jpg");
   console.log(wbtwo);
   const wbthree = await attraction1.create(50, "Tiger Hill", 4,  "http://shahtour.com/blogs/wp-content/uploads/2017/04/How-to-reach-tiger-hill-from-Darjeeling.jpg");
   console.log(wbthree);
   const wbfour = await attraction1.create(51, "Howrah Bridge", 1, "https://images-na.ssl-images-amazon.com/images/I/61V5kdbUUXL.jpg");
   console.log(wbfour);
   const wbfive = await attraction1.create(52, "Dakshineshwar Kali Temple", 2, "https://static.toiimg.com/thumb/47798909/47798885.jpg?width=650&height=433&resize=true&resizeMode=5");
   console.log(wbfive);
   const wbsix = await attraction1.create(53, "Mirik", 4, "https://static.toiimg.com/thumb/36109035/Mirik.jpg?width=650&height=433&resize=true&resizeMode=5");
   console.log(wbsix);
   const wbseven = await attraction1.create(54, "Ghum Monastery", 2, "//live.staticflickr.com/128/357956154_fadc2c3819_3k.jpg");
   console.log(wbseven);
   const wbeight = await attraction1.create(55, "Eden Garden", 3, "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201504/eden-gardens_650_040615092853.jpg");
   console.log(wbeight);
   const wbnine = await attraction1.create(56, "Birla Temple", 3, "https://static.toiimg.com/thumb/48080165/47799086.jpg?width=650&height=433&resize=true&resizeMode=5");
   console.log(wbnine);
   const wbten = await attraction1.create(57, "Rock Garden", 4, "http://www.therockgardens.co.uk/wp-content/uploads/sites/433/2017/02/Barbotey-Rock-Garden.png");
   console.log(wbten);


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



   await itinerary.insertMany(itineraryData.getItineraries());

   const db = await connection();
    await db.serverConfig.close();
    
    console.log('Done!');
}
create().catch((error) => 
{
    console.log(error);
});

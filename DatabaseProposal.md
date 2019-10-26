# Plan My Trip

* Namrata Gavhane
* Aishwariya Rajendraprasad
* Hitesh Shetty
* Sri Harsha Varma Konda

## Users

The user collection will store all users and their profiles. Users will be able to login, update their profile, and post tasks.

```
{
    "_id":"7b7997a2-c0d2-4f8c-b27a-6a1d4b5b6310",
    "sessionId":"b3988882-627f-4c59-8d5d-54b7a43b030e",
    "hashedPassword":"$2a$08$XdvNkfdNIL8Fq7l8xsuIUeSbNOFgK0M0iV5HOskfVn7.PWncShU.O",
    "profile":{
        "name":"Namrata Gavhane",
        "email":"namrata@gmail.com",
        "phone-no": "+1 333 222 5555"
    }
}
```

| Name | Type | Description |
|------|------|-------------|
| _id  | string | A globally unique identifier to represent the user |
| sessionId | string | A globally unique identifier to represent the user's current session |
| hashedPassword | string | A bcrypted string that is a hashed version of the user's password |
| profile | User Profile | The user's profile | 

## User Profile (subdocument; not stored in a collection)

This subdocument is used to describe the user's profile.

```
{
   	"name":"Namrata Gavhane",
        "email":"namrata@gmail.com",
        "phone-no": "+1 333 222 5555"
}
```



| Name | Type | Description |
|------|------|-------------|
| name | string | The user's name. | 
| email | string | email-id of the user |
| phone-no | string | phone number of the user |

## Location

The location collection will store all the locations that will be available for bookings. It will store the name and images of that location.

```
{
    "_id":"7b7997a2-c0d2-4f8c-b27a-6a1d4b5b6310",
    "name":"Mini Kerala",
    "images":"https://www.planmytrip.com/8517681001_13f2b8748a_b_20170810164922.jpg"
}
```

| Name | Type | Description |
|------|------|-------------|
| _id  | string | A globally unique identifier to represent the location |
| name | string | The location name|
| images | string | Images of the location |


## Package

The Package collection will store all details about different kinds of packages available.

```
{
    "_id":"5db113b89e52a51bb0632452"
    "name":"Mini-Kerala"
    "price":1200
    "location_id":"6bc113b49e52a51bb0639988"
    "itineraries":[
        "itinerary_id1",
        "itinerary_id2",
        "itinerary_id3"
    ]
    "image":"https://www.planmytrip.com?id=1572115412493483"
}
```


| Name | Type | Description |
|------|------|-------------|
| _id  | string | A globally unique identifier to represent the package |
| name | string | The package name |
| price| double | Price of the package per person |
| location_id | string | A globally unique identifier to represent the different locations and it is taken from the collection location |
| itineraries | itineraries array | A globally unique identifier to represent the different itineraries and they taken from the collection itenary |
|image | string | Pictures of some of the attractions included in the package |

## Hotel

The hotel colllection will have all the Hotels available for booking. It will store the names, descriptions, images, an array of type of rooms and ratings of the Hotel.

```
{
    "_id":"8b5547a2-c0d7-4k8c-b20a-6a1h4b5b7810",
    "name":"Hotel Malabar",
    "images":"https://q-planmytrip.bstatic.com/images/22922432.jpg",
    "rooms":["deluxe","semi-deluxe","super-deluxe"],
    "ratings":"5.0"
}
```

| Name | Type | Description |
|------|------|-------------|
| _id  | string | A globally unique identifier to represent the location |
| name | string | The location name |
| images | string | Images of the location |
| rooms | array | Array of type of rooms available |
| ratings | string | Ratings given to the Hotel |


## Attraction

The attraction collection will store all the attractions that are created.

```
{
    	"_id":"5a5c4461-cdc9-4144-84f9-fcb278c5c122"
        "name":"Museum",
        "duration":"2",
        "image":"c5d0fd67-7977-4fc5-9088-33d0347c932b"
},
```

| Name | Type | Description |
|------|------|-------------|
| _id  | string | A globally unique identifier to represent a particular attraction | 
| name | string | The name of the attraction |
| duration | number | The approxmate time taken to visit a particular attraction |
| image | string | Images of the attractions |


## Itinerary

The Itinerary collection will store the Itinerary details such as day, the list of attractions that will be visited on that day and the hotel where the customers will be staying that day.

```
{
    	"_id":"5a5c4461-cdc9-4144-84f9-gcb278c5c125",
        "name":"Day 1",
        "attractions":["5a5c4461-cdc9-4144-84f9-gcb278c5c125","5a5c4461-cdc9-4144-84f9-dcb278c5c125","5a5c4461-grc9-4144-84f9-gcb278c5c125"],
        "hotel":"c5d0fd67-7977-4fc5-9088-33d0347c932b"
},
```

| Name | Type | Description |
|------|------|-------------|
| _id  | string | A globally unique identifier represents a Itinerary which will be referred by packages | 
| name | string | The itinerary day name |
| attractions | array | The list of attraction ids that will be covered as part of the package on a particular day |
| hotel | string | The hotel identifier representing the hotel the customers will be staying on that particular day |

## Payment

The Package Payment will store details about the final payment.

```
{
    "_id":""6bc113b49e52a51bb0632452"
    "type":"Debit card"
    "name":"Harsha"
}
```

| Name | Type | Description |
|------|------|-------------|
| _id  | string | A globally unique identifier to represent a particular payment |
| type | string | It describes the type of card used for the payment like Debit, credit, visa, master e.t.c |
| name | string | The name on the card |


## Booking

The Booking collection will store the booking confirmation details when user makes a booking on the app.

```
{
    	"_id":"5a5c4461-cdc9-4144-84f9-gcb278c5c125",
		"user_id":"5a5c4461-cdc9-4144-84f9-usr278c5c125",
        "package_id":"5a5c4461-cdc9-4144-84f9-pkg278c5c125",
		"payment_id":"5a5c4461-cdc9-4144-84f9-pay278c5c125",
        "total_price":5000,
		"currency":"USD",
		"total_people":4,
		"booking_date":"Fri Oct 24 2019 22:35:22 GMT-0400",
		"cancel_date":"Fri Oct 25 2019 22:35:22 GMT-0400",
        "status":"booked"
},
```

| Name | Type | Description |
|------|------|-------------|
| _id  | string | A globally unique identifier represents a booking confirmation |
| user_id | string | The identifier representing the user who made the booking |
| package_id | string | The user selected package Id |
| payment_id | string | The payment id of the payment made by the user |
| total_price | double | The total amount paid by the user |
| currency | string | The currency in which the user made the payment |
| total_people | number | Total number of people for whom the booking was made |
| booking_date | date | The date when the booking was made |
| cancel_date | date | The date when user cancled the booking |
| status | string | The status of booking. The values can be booked or cancled | 

/* Variables */
// const usr = {name: "Hernan"};

// if(true){
//     const name = "David";
// }

// // name = ["Alvarez"];
// usr.name = "david";

// console.log(usr);

/* Variables */
// const usr = {
//     name: "Cecilia",
//     lastname: "Villamil",
//     cc: 123456789,
//     birthday: '12-2-70',
//     email: "hernan@mail.com",
//     //methods
//     getName(){
//         return `${ this.name } ${ this.lastname }`
//     }
// }

// const { name, lastname, cc, ...data } = usr;

// console.log(name, lastname, cc);
// console.log(data);

// function getData({ name, lastname, cc, ...data }){
//     console.log(name, lastname, cc);
//     console.log(data, data.birthday);
// }

// getData(usr);

// const tags = ['Offer', 'Sale', 'Top 10', 'Trend'];

// const [ , , , t4 ] = tags;

// console.log(t4);

/* Arrow function */

// function sum1(a, b){
//     return a * b;
// }

// const sum = (a, b) => a * b;

// console.log("Total: ", sum(5, 2));

/* Callbacks */
// const getUsrById = (id, callback) =>{
//     const usr = {
//             id: 1,
//             name: "Cecilia",
//             lastname: "Villamil",
//             cc: 123456789,
//             birthday: '12-2-70',
//             email: "hernan@mail.com",
//             //methods
//             getName(){
//                 return `${ this.name } ${ this.lastname }`
//             }
//         }

//     setTimeout(() => {
//         callback(usr);
//     }, 2000)
// }

// console.log("Inicio");

// function returnFormmatedData(user){
//     console.log(user.id);
//     console.log(user.name);
// }

// getUsrById(1, returnFormmatedData)

// returnFormmatedData({
//     id: 1,
//     name: "Cecilia",
//     lastname: "Villamil",
//     cc: 123456789,
//     birthday: '12-2-70',
//     email: "hernan@mail.com",
//     //methods
//     getName(){
//         return `${ this.name } ${ this.lastname }`
//     }
// })

const users = [
    {
        id: 1,
        name: "Cecilia",
        lastname: "Villamil",
        cc: 123456789,
        birthday: '12-2-70',
        email: "hernan@mail.com",
        //methods
        getName(){
            return `${ this.name } ${ this.lastname }`
        }
    }
];

const wishlists = [
    {
        usrId: 1,
        wishlist: [ 1, 15, 98 ]
    }
];

const getUsrById = ( userId ) => {    
    return new Promise((resolve, reject) => {
        const usr = users.find( user => user.id == userId );

        (usr) ? resolve( usr ) : reject( `User not found: ${ userId }` );
    });
}

const getWishlistById = ( userId ) => {    
    return new Promise((resolve, reject) => {
        const wishlist = wishlists.find( wishlist => wishlist.usrId == userId );

        (wishlist) ? resolve( wishlist ) : reject( `Wishlist not found: ${ userId }` );
    });
}

const id = 1;

const getFullProfile = async (usrId) =>{
    try{
        const profile = await getUsrById(usrId);
        const wishlistDB = await getWishlistById(usrId);
        profile.wishlist = wishlistDB.wishlist;
    
        return profile;
    }
    catch(err){
        throw `getFullProfile error: ${ err }`;
    }
}

getFullProfile(id).then((res) => {
    console.log("Then: ", res);
}).catch(err => {
    console.log("Catch: ", err);
});

// let profile = {};

// getUsrById(id).then(response => {
//         profile = response;
//         return getWishlistById(id)
//     })
//     .then(res => {
//         profile.wishlist = res.wishlist;
//     })
//     .then(()=>{
//         console.log(profile);
//     })
//     .catch(err => {
//         console.log(err);
//     });
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

const getUsrById = ( id ) => {
    
    return new Promise(( resolve, reject ) => {

        const usr = users.find( user => user.id == id )?.name;

        (usr) ? resolve( usr ) : reject( `User not found: ${ id }` );
    });
}

const id = 1;

getUsrById(id)
    .then( profile => {
        console.log(profile);
    })
    .catch( err => console.log( err ) );
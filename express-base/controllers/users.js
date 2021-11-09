const data = [
    { cc: "1234567890", name: "Hernan" },
    {  cc: "6789012345",  name: "Lupe"  },
    { cc: "234521678", name: "Daniel" }
]

function findUserByCC(cc){
    return data.find(u => u.cc == cc);
}

const usersGet = (req, res) => {
    res.send(data);
}

const userPost = (req, res) => {
    const user = {
        cc: req.body.cc,
        name: req.body.name
    }

    data.push(user);

    res.send(data);
}

const userPut = (req, res) => {
    const user = findUserByCC(req.params.cc);

    if(!user){
        res.status(404).send("No existe user con esa cedula")
        return;
    }

    user.cc = req.bodu.cc;
    user.name = req.bodu.name;

    res.send(user);
}

const userDel = (req, res) => {
    const user = findUserByCC(req.params.cc);

    if(!user){
        res.status(404).send("No existe user con esa cedula")
        return;
    }

    const indexUser = data.indexOf(user);
    data.splice(indexUser, 1);

    res.send({
        remove: user,
        data: data
    });
}

module.exports = {
    usersGet,
    userPost,
    userPut,
    userDel
}
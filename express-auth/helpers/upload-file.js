const path = require('path');

const uploadFile = (files, enableExt = ['png', 'jpg', 'jpeg', 'gif'], folder = '') =>{
    return new Promise((resolve, reject) => {
        const { archive } = files;
        const nameSplit = archive.name.split('.');
        const ext = nameSplit[nameSplit.length - 1];

        if(!enableExt.includes(ext)){
            return reject(`Error: Extensiones validas ${ enableExt }`);
        }

        const uploadPath = path.join(__dirname, '../public/uploads', folder, archive.name);

        archive.mv(uploadPath, (err) =>{
            if(err)
                reject( err );
            
            resolve(archive.name);
        })
    })
}

module.exports = {
    uploadFile
}
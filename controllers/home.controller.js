var imgFolderDir = __dirname.replace('sever\\controllers','nfc_front_end\\html');

exports.home = function(req, res){
    res.sendFile(imgFolderDir + '\\login.html');
}

exports.about = function(req, res){
    res.sendFile(imgFolderDir + '\\login.html');
}


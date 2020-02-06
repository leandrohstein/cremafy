//# vim: tabstop=8 expandtab shiftwidth=4 softtabstop=4

const cremaImages = [
    'https://i.imgur.com/KVuX73x.jpg',
    'https://i.imgur.com/lJCQ2WB.jpg',
    'https://i.imgur.com/iDNjnYS.jpg',
    'https://i.imgur.com/2detEbD.jpg',
    'https://i.imgur.com/DMJUQ9u.jpg',
];

chrome.runtime.onMessage.addListener(function(message, sender, senderResponse){
    if(message.msg === "image"){
        const imgIndex = Math.floor(Math.random() * cremaImages.length),
            dataObj = {link: cremaImages[ imgIndex ]+'?crema'};
        senderResponse({data: dataObj, index: message.index});
        return true;  // Will respond asynchronously.
    }
});

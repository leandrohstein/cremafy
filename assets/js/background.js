//# vim: tabstop=8 expandtab shiftwidth=4 softtabstop=4

const cremaImages = [
    'https://i.imgur.com/HIAvWXJ.jpg',
    'https://i.imgur.com/89erdzs.jpg',
    'https://i.imgur.com/Ix6vgXl.jpg',
    'https://i.imgur.com/YX9jirt.jpg',
    'https://i.imgur.com/UsSAGAp.jpg',
    'https://i.imgur.com/GsOBLq4.jpg',
    'https://i.imgur.com/czZT3Lh.jpg',
    'https://i.imgur.com/5nifPg1.jpg',
    'https://i.imgur.com/mAgXGe5.jpg',
    'https://i.imgur.com/uQDYUDA.jpg',
    'https://i.imgur.com/0TcYC36.jpg',
    'https://i.imgur.com/ykiRZmn.jpg',
    'https://i.imgur.com/EDFHpZb.jpg',
    'https://i.imgur.com/g7jRoQg.jpg',
    'https://i.imgur.com/QQ2JVL3.jpg',
    'https://i.imgur.com/vpUlBdL.jpg',
];

chrome.runtime.onMessage.addListener(function(message, sender, senderResponse){
    if(message.msg === "image"){
        const imgIndex = Math.floor(Math.random() * cremaImages.length),
            dataObj = {link: cremaImages[ imgIndex ]+'?crema'};
        senderResponse({data: dataObj, index: message.index});
        return true;  // Will respond asynchronously.
    }
});

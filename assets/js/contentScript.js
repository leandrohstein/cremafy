//# vim: tabstop=8 expandtab shiftwidth=4 softtabstop=4

function changeImage(images, i){
    chrome.runtime.sendMessage({msg: 'image', index: i}, function({data, index}){
        images[index].src = data.link;
        images[index].dataset.crema = 1
    });
}

let images = document.getElementsByTagName('img');
for(let i = 0; i < images.length; i++){
    images[i].addEventListener('load', function(){
        if(images[i].src.match('crema')) return;
        changeImage(images, i)
    });
    changeImage(images, i)
}

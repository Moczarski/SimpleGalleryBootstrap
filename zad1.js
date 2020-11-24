var images = [
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80',
    'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80',
    'https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    'https://images.unsplash.com/photo-1594270410221-e6a33cbc6fb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
];
for (i=0; i<30; i++) {
    var random = images[Math.floor(Math.random() * images.length)];
    document.getElementById('img'+i).src = random;
    document.getElementById('a'+i).href = random;
}

function WhichPhoto(i) {
    var url = document.getElementById("a"+i);
    document.getElementById("modalne").src = url;
}
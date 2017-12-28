$(document).ready(function(){
$('.trumbowyg').trumbowyg({
    btns: [     
        ['formatting'],
        ['strong', 'em',],
        ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
    ],
    autogrow: true,
    svgPath: '../img/icons.svg',
    lang: 'ru'
    });
});
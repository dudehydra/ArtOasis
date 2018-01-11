// SLIDERS

$(document).ready(function(){
    $('.header-slider').owlCarousel({
        items: 1,
        loop: false,
        touchDrag: false,
        dotsContainer: '#customDots',
        nav: false

    });
    $('.album-look__slider').owlCarousel({
        items: 1,
        loop: false,
        touchDrag: false,
        nav: true,
        navText: ['','']

    });

    $('.best-shops__slider').owlCarousel({
        items: 3,
        loop: false,
        touchDrag: false,
        navContainer: '.best-shops__pagination',
        navClass: ['prev-btn', 'next-btn'],
        navText: ['',''],
        loop: true,

    });

    $('.popular-goods__items-wrapper').owlCarousel({
        items: 1,
        loop: false,
        touchDrag: false,
        navContainer: '.popular-goods__pagination',
        navClass: ['prev-btn', 'next-btn'],
        navText: ['',''],
        loop: true,

    });
    $('.new-product__slider').owlCarousel({
        items: 1,
        loop: false,
        touchDrag: false,
        navContainer: '.new-product__pagination',
        navClass: ['prev-btn', 'next-btn'],
        navText: ['',''],
        loop: true,

    });

    $('.sale__items-slider').owlCarousel({
        items: 1,
        loop: false,
        touchDrag: false,
        navContainer: '.sale__pagination',
        navClass: ['prev-btn', 'next-btn'],
        navText: ['',''],
        loop: true,

    });

    $('.master-preview__slider').owlCarousel({
        items: 3,
        loop: false,
        touchDrag: false,
        navContainer: '.best-masters__pagination',
        navClass: ['prev-btn', 'next-btn'],
        navText: ['',''],
        loop: true,

    });

    $('.shop-preview__rating').raty({
        score    : 5,
        path:  'img',
        starOff : 'star-off.png',
        starOn  : 'star-on.png',
        starHalf : 'star-half.png',
    });
     $('.reviews__rating').raty({
        score    : 5,
        path:  'img',
        starOff : 'star-off.png',
        starOn  : 'star-on.png',
        starHalf : 'star-half.png',
    });
     $('.personal__profile-rating').raty({
        score    : 5,
        path:  'img',
        starOff : 'star-off.png',
        starOn  : 'star-on.png',
        starHalf : 'star-half.png',
    });

    $('.registration-open').magnificPopup({
        type: 'inline'
    });
    $('.goods-item__img-look').magnificPopup({
        type: 'inline',

    });
    $('.reviews__answer').magnificPopup({
        type: 'inline',

    });
    $('.specialization-popup_open').magnificPopup({
        type: 'inline'
    });
    $('#add_album-btn').magnificPopup({
        type: 'inline'
    });
    $('.goods-item__img-edit').magnificPopup({
        type: 'inline'
    });

    ( function( factory ) {
        if ( typeof define === "function" && define.amd ) {

            // AMD. Register as an anonymous module.
            define( [ "../widgets/datepicker" ], factory );
        } else {

            // Browser globals
            factory( jQuery.datepicker );
        }
    }( function( datepicker ) {

        datepicker.regional.ru = {
            closeText: "Закрыть",
            prevText: "&#x3C;Пред",
            nextText: "След&#x3E;",
            currentText: "Сегодня",
            monthNames: [ "Январь","Февраль","Март","Апрель","Май","Июнь",
                "Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],
            monthNamesShort: [ "Янв","Фев","Мар","Апр","Май","Июн",
                "Июл","Авг","Сен","Окт","Ноя","Дек" ],
            dayNames: [ "воскресенье","понедельник","вторник","среда","четверг","пятница","суббота" ],
            dayNamesShort: [ "вск","пнд","втр","срд","чтв","птн","сбт" ],
            dayNamesMin: [ "Вс","Пн","Вт","Ср","Чт","Пт","Сб" ],
            weekHeader: "Нед",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: "" };
        datepicker.setDefaults( datepicker.regional.ru );

        return datepicker.regional.ru;

    } ) );

    $( function() {
        $( "#registration_date" ).datepicker( $.datepicker.regional[ "ru" ] );
        $( "#locale" ).on( "change", function() {
            $( "#datepicker" ).datepicker( "option",
                $.datepicker.regional[ $( this ).val() ] );
        });
    } );
    $( function() {
        $( "#date-of-birth" ).datepicker( $.datepicker.regional[ "ru" ] );
        $( "#locale" ).on( "change", function() {
            $( "#datepicker" ).datepicker( "option",
                $.datepicker.regional[ $( this ).val() ] );
        });
    } );

});

// SLIDERS END


// START drag and drop
(function(e,t,n){var r=e.querySelectorAll("html")[0];r.className=r.className.replace(/(^|\s)no-js(\s|$)/,"$1js$2")})(document,window,0);



'use strict';

;( function ( document, window, index )
{
    // feature detection for drag&drop upload
    var isAdvancedUpload = function()
    {
        var div = document.createElement( 'div' );
        return ( ( 'draggable' in div ) || ( 'ondragstart' in div && 'ondrop' in div ) ) && 'FormData' in window && 'FileReader' in window;
    }();


    // applying the effect for every form
    var forms = document.querySelectorAll( '.box' );
    Array.prototype.forEach.call( forms, function( form )
    {
        var input		 = form.querySelector( 'input[type="file"]' ),
            label		 = form.querySelector( 'label' ),
            errorMsg	 = form.querySelector( '.box__error span' ),
            restart		 = form.querySelectorAll( '.box__restart' ),
            droppedFiles = false,
            showFiles	 = function( files )
            {
                label.textContent = files.length > 1 ? ( input.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', files.length ) : files[ 0 ].name;
            },
            triggerFormSubmit = function()
            {
                var event = document.createEvent( 'HTMLEvents' );
                event.initEvent( 'submit', true, false );
                form.dispatchEvent( event );
            };

        // letting the server side to know we are going to make an Ajax request
        var ajaxFlag = document.createElement( 'input' );
        ajaxFlag.setAttribute( 'type', 'hidden' );
        ajaxFlag.setAttribute( 'name', 'ajax' );
        ajaxFlag.setAttribute( 'value', 1 );
        form.appendChild( ajaxFlag );

        // automatically submit the form on file select
        input.addEventListener( 'change', function( e )
        {
            showFiles( e.target.files );


            triggerFormSubmit();


        });

        // drag&drop files if the feature is available
        if( isAdvancedUpload )
        {
            form.classList.add( 'has-advanced-upload' ); // letting the CSS part to know drag&drop is supported by the browser

            [ 'drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop' ].forEach( function( event )
            {
                form.addEventListener( event, function( e )
                {
                    // preventing the unwanted behaviours
                    e.preventDefault();
                    e.stopPropagation();
                });
            });
            [ 'dragover', 'dragenter' ].forEach( function( event )
            {
                form.addEventListener( event, function()
                {
                    form.classList.add( 'is-dragover' );
                });
            });
            [ 'dragleave', 'dragend', 'drop' ].forEach( function( event )
            {
                form.addEventListener( event, function()
                {
                    form.classList.remove( 'is-dragover' );
                });
            });
            form.addEventListener( 'drop', function( e )
            {
                droppedFiles = e.dataTransfer.files; // the files that were dropped
                showFiles( droppedFiles );


                triggerFormSubmit();

            });
        }


        // if the form was submitted
        form.addEventListener( 'submit', function( e )
        {
            // preventing the duplicate submissions if the current one is in progress
            if( form.classList.contains( 'is-uploading' ) ) return false;

            form.classList.add( 'is-uploading' );
            form.classList.remove( 'is-error' );

            if( isAdvancedUpload ) // ajax file upload for modern browsers
            {
                e.preventDefault();

                // gathering the form data
                var ajaxData = new FormData( form );
                if( droppedFiles )
                {
                    Array.prototype.forEach.call( droppedFiles, function( file )
                    {
                        ajaxData.append( input.getAttribute( 'name' ), file );
                    });
                }

                // ajax request
                var ajax = new XMLHttpRequest();
                ajax.open( form.getAttribute( 'method' ), form.getAttribute( 'action' ), true );

                ajax.onload = function()
                {
                    form.classList.remove( 'is-uploading' );
                    if( ajax.status >= 200 && ajax.status < 400 )
                    {
                        var data = JSON.parse( ajax.responseText );
                        form.classList.add( data.success == true ? 'is-success' : 'is-error' );
                        if( !data.success ) errorMsg.textContent = data.error;
                    }
                    else alert( 'Error. Please, contact the webmaster!' );
                };

                ajax.onerror = function()
                {
                    form.classList.remove( 'is-uploading' );
                    alert( 'Error. Please, try again!' );
                };

                ajax.send( ajaxData );
            }
            else // fallback Ajax solution upload for older browsers
            {
                var iframeName	= 'uploadiframe' + new Date().getTime(),
                    iframe		= document.createElement( 'iframe' );

                $iframe		= $( '<iframe name="' + iframeName + '" style="display: none;"></iframe>' );

                iframe.setAttribute( 'name', iframeName );
                iframe.style.display = 'none';

                document.body.appendChild( iframe );
                form.setAttribute( 'target', iframeName );

                iframe.addEventListener( 'load', function()
                {
                    var data = JSON.parse( iframe.contentDocument.body.innerHTML );
                    form.classList.remove( 'is-uploading' )
                    form.classList.add( data.success == true ? 'is-success' : 'is-error' )
                    form.removeAttribute( 'target' );
                    if( !data.success ) errorMsg.textContent = data.error;
                    iframe.parentNode.removeChild( iframe );
                });
            }
        });


        // restart the form if has a state of error/success
        Array.prototype.forEach.call( restart, function( entry )
        {
            entry.addEventListener( 'click', function( e )
            {
                e.preventDefault();
                form.classList.remove( 'is-error', 'is-success' );
                input.click();
            });
        });

        // Firefox focus bug fix for file input
        input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
        input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });

    });
}( document, window, 0 ));

// END drag and drop
// $('.delivery-price').each(function (index, value) {
//     console.log(.delivery-price[inputNumber])
// })

$(document).ready(function(){
    //Коммерческая деятельность
    // debugger;
    $('.registration_stage-4-4__commercial').hide()
    $('.radio-wrapper input').change(function () {
        if ($('#commercialYes').prop("checked")) {
            $('.registration_stage-4-4__commercial').show(300)
        }
        else (
            $('.registration_stage-4-4__commercial').hide(300)
        );
    })

    $('#shop-link').change(function () {
        var inputValue = $('#shop-link').val();
        var SITELINK = 'Сейчас: artoasis.ru/shop/';
        var link = SITELINK + inputValue;
        $('.main-registration__link-result').text(link);
    })

    var prices = $('.delivery-price')
    var checkboxs = $('.registration_stage-4__right .label-checkbox--orange')
    $('.registration_stage-4__right--small .label-checkbox--grey').addClass( 'fade' )

    $('.registration_stage-4__left .label-checkbox--orange').each(function ( index, value) {
        var inputNumber = index;
        console.log(index)
        $(this).click(function () {
            $($('.delivery-price')[index]).prop('disabled', function(i, v) { return !v; });
            $($('.registration_stage-4__right--small .checkbox--orange')[index]).prop('disabled', function(i, v) { return !v; });
            $($('.registration_stage-4__right--small .label-checkbox--grey')[index]).toggleClass('fade')

        });

    });
    //добавление специальности
    $('.specialization__wrapper .checkbox--orange').each(function () {
        var forValue = $(this).attr('id');
        var textValue = $(this).attr('data-name');
        var  dopClass = $(this).attr('id');
        var newLabel = $("<label class='specialization-label'></label>");
        newLabel.attr('for',forValue);
        newLabel.html(textValue);
        newLabel.addClass(dopClass)
        var checked =  this;
        var removeLabel = '.registration_stage-2__specialization-wrapper' + ' .' + dopClass;
        var specializationNumber
        $(this).change(function () {
            if (!$(checked).is(':checked')) {
                $(removeLabel).remove()
            }
        });
        $('.specialization__wrapper .checkbox--orange').change(function () {
            specializationNumber = $(':checkbox:checked').length;
            console.log(specializationNumber);
        })

        $('#add_specialization').click(function () {
            // debugger;
            if ( (specializationNumber <= 3)) {
                if ($(checked).prop("checked")) {
                    $('.registration_stage-2__specialization-wrapper').append(newLabel);
                    $.magnificPopup.close();
                }
            }
            else if ((specializationNumber >= 3) ) {
                // alert('выберите не больше 3х');
            }
            else {
                $(removeLabel).remove();
            };
        });
    });
    //Выбор нового товара
    $('.album-photo__container').hide()
    $('.album-photo__header').click(function(){
        var album = $(this)
        $(this).siblings('.album-photo__container').toggle(300)
        $('.album-photo').toggleClass('album-photo--active')
    });


});


(function($) {

    $.fn.stylerNumber = function() {
        
        var styler = function() {
            
            var id;
            var min = false;
            var max = false;
            var step = 1;
            var self = $(this);
            
            if (self.attr('id')) {
                id = self.attr('id');
            }
            else {
                return;
            }
            if (self.attr('min')) {
                min = self.attr('min');
            }
            if (self.attr('max')) {
                max = self.attr('max');
            }
            if (self.attr('step')) {
                if (getLengthDecimal(self.attr('step')) >= 0 && getLengthDecimal(self.attr('step')) <= 20) 
                step = Number(self.attr('step'));
                else return;
            }

            function getLengthDecimal(number) {
                var number = new String(number);
                var pos = number.indexOf(".");
                if (pos == -1) return 0;
                number = number.substr(pos + 1);
                number = Number(number.length);
                return number;
            }

            $("[data-for='" + id + "']").on("selectstart", function(even) {
                return false;
            });
            
            $("[data-for='" + id + "']").on("click", function(event) {
                var e = $(this).attr("data-event");
                var f = $(this).attr("data-for");
                if (!f || !e) return false;
                if (e == "sub") {
                    var value = Number(self.val());
                    var newvalue = Number((value - step).toFixed(getLengthDecimal(step)));
                    if (!min) {
                        self.val(newvalue);
                        self.change();
                    }
                    else if (newvalue >= min) {
                        self.val(newvalue);
                        self.change();
                    }
                } else if (e == "add") {
                    var value = Number(self.val());
                    var newvalue = Number((value + step).toFixed(getLengthDecimal(step)));
                    if (!max) {
                        self.val(newvalue);
                        self.change();
                    }
                    else if (newvalue <= max) {
                        self.val(newvalue);
                        self.change();
                    }
                }
                return false;
            });
        };
        return this.each(styler);
    };
    
})  ($);

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("whatInput",[],t):"object"==typeof exports?exports.whatInput=t():e.whatInput=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t){"use strict";e.exports=function(){var e=document.documentElement,t=null,n="initial",o=n,i=null,r=["input","select","textarea"],u=[],d=[16,17,18,91,93],a={keydown:"keyboard",keyup:"keyboard",mousedown:"mouse",mousemove:"mouse",MSPointerDown:"pointer",MSPointerMove:"pointer",pointerdown:"pointer",pointermove:"pointer",touchstart:"touch"},s=!1,c=!1,w={x:null,y:null},p={2:"touch",3:"touch",4:"mouse"},f=!1;try{var l=Object.defineProperty({},"passive",{get:function(){f=!0}});window.addEventListener("test",null,l)}catch(e){}var v=function(){var e=!!f&&{passive:!0};window.PointerEvent?(window.addEventListener("pointerdown",m),window.addEventListener("pointermove",y)):window.MSPointerEvent?(window.addEventListener("MSPointerDown",m),window.addEventListener("MSPointerMove",y)):(window.addEventListener("mousedown",m),window.addEventListener("mousemove",y),"ontouchstart"in window&&(window.addEventListener("touchstart",x,e),window.addEventListener("touchend",m))),window.addEventListener(b(),y,e),window.addEventListener("keydown",x),window.addEventListener("keyup",x),window.addEventListener("focusin",E),window.addEventListener("focusout",L)},m=function(e){if(!s){var t=e.which,i=a[e.type];"pointer"===i&&(i=g(e));var u="keyboard"===i&&t&&-1===d.indexOf(t)||"mouse"===i||"touch"===i;if(n!==i&&u&&(n=i,h("input")),o!==i&&u){var c=document.activeElement;c&&c.nodeName&&-1===r.indexOf(c.nodeName.toLowerCase())&&(o=i,h("intent"))}}},h=function(t){e.setAttribute("data-what"+t,"input"===t?n:o),M(t)},y=function(e){if(O(e),!s&&!c){var t=a[e.type];"pointer"===t&&(t=g(e)),o!==t&&(o=t,h("intent"))}},E=function(n){t=n.target.nodeName.toLowerCase(),e.setAttribute("data-whatelement",t),n.target.classList&&n.target.classList.length&&e.setAttribute("data-whatclasses",n.target.classList.toString().replace(" ",","))},L=function(){t=null,e.removeAttribute("data-whatelement"),e.removeAttribute("data-whatclasses")},x=function(e){m(e),window.clearTimeout(i),s=!0,i=window.setTimeout(function(){s=!1},100)},g=function(e){return"number"==typeof e.pointerType?p[e.pointerType]:"pen"===e.pointerType?"touch":e.pointerType},b=function(){return"onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll"},M=function(e){for(var t=0,i=u.length;t<i;t++)u[t].type===e&&u[t].fn.call(void 0,"input"===e?n:o)},k=function(e){for(var t=0,n=u.length;t<n;t++)if(u[t].fn===e)return t},O=function(e){w.x!==e.screenX||w.y!==e.screenY?(c=!1,w.x=e.screenX,w.y=e.screenY):c=!0};return"addEventListener"in window&&Array.prototype.indexOf&&function(){a[b()]="mouse",v(),h("input"),h("intent")}(),{ask:function(e){return"intent"===e?o:n},element:function(){return t},ignoreKeys:function(e){d=e},registerOnChange:function(e,t){u.push({fn:e,type:t||"input"})},unRegisterOnChange:function(e){var t=k(e);t&&u.splice(t,1)}}}()}])});
$("input[type='number']").stylerNumber(); //Инициализация скрипта для стилей инпута числового





$(document).ready(function(){
    $('.collapse').on('shown.bs.collapse', function(){
        $(this).parent().find('.fas.fa-plus').removeClass('fa-plus').addClass('fa-minus');
    }).on('hidden.bs.collapse', function(){
        $(this).parent().find('.fas.fa-minus').removeClass('fa-minus').addClass('fa-plus');
    });
});
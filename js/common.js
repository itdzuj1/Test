$(document).ready(function () {

    $(function () {
        $('#datetimepicker').datetimepicker();
    });
    $(function () {
        $('#datetimepicker1').datetimepicker();
    });
    $(function () {
        $('#datetimepicker3').datetimepicker();
    });
    $(function () {
        $('#datetimepicker4').datetimepicker();
    });
    $(function () {
        $('#datetimepicker5').datetimepicker();
    });
    $(function () {
        $('#datetimepicker2').datetimepicker();
    });

    $(function(){
        $('#exampleRadios1').click(function() {
            if($(this).is(':checked')){
                $('.js-dis').removeAttr('disabled');
            }
        });
        $('#exampleRadios2').click(function() {
            if($(this).is(':checked')){
                $('.js-dis').removeAttr('disabled');
            }
        });
    });

    $(function () {
        $('#exampleRadios3').click(function() {
            if($(this).is(':checked')){
                $('.js-dis2').removeAttr('disabled');
            }
        });
        $('#exampleRadios4').click(function() {
            if($(this).is(':checked')){
                $('.js-dis2').removeAttr('disabled');
            }
        });
    });





    $(document).on('blur', '.js-table', function () {

        var  val = $(this).val();

        if (val) {
            if ( !$.isNumeric(val)  || val < 0 ||  val > 100  ) {
                $(this).val('');
                $(this).addClass('js-danger');
            }
        }

    });

    $(document).on('blur', '.js-chair', function () {

        var  val = $(this).val();

        if (val) {
            if ( !$.isNumeric(val)  || val < 0 ||  val > 100  ) {
                $(this).val('');
                $(this).addClass('js-danger');
            }
        }

    });

    $(document).on('change', '.js-table', function () {
        var sum = 0;

        $('.js-table').each(function(){
            sum += +($(this).val());
        });
        var res = sum / $('.js-table').length;

        $('.js-tableTotal').val(res);
    });

    $(document).on('blur', '.js-chair', function () {
        var sum = 0;

        $('.js-chair').each(function(){
            sum += +($(this).val());
        });
        var res = sum / $('.js-chair').length;

        $('.js-chairTotal').val(res);

    });

    $(document).on('focus', '.js-table', function () {
              $(this).removeClass('js-danger');

    });

    $(document).on('focus', '.js-chair', function () {
        $(this).removeClass('js-danger');

    });

    $(document).on('click', '.btn--add', clickAddRow);
    function clickAddRow() {
        var block = $('.table__row:nth-last-child(2)').clone();

        $('.table__row:nth-last-child(2)').after(block);
    }







});



jQuery(document).on('click', '.mega-dropdown', function(e) {
  e.stopPropagation()
})

$(document).ready(function(){
        //-- Click on detail
        $("ul.menu-items > li").on("click",function(){
            $("ul.menu-items > li").removeClass("active");
            $(this).addClass("active");
        })

        $(".attr,.attr2").on("click",function(){
            var clase = $(this).attr("class");

            $("." + clase).removeClass("active");
            $(this).addClass("active");
        })

        //-- Click on QUANTITY
        $(".btn-minus").on("click",function(){
            var now = $(".section > div > input").val();
            if ($.isNumeric(now)){
                if (parseInt(now) -1 > 0){ now--;}
                $(".section > div > input").val(now);
            }else{
                $(".section > div > input").val("1");
            }
        })            
        $(".btn-plus").on("click",function(){
            var now = $(".section > div > input").val();
            if ($.isNumeric(now)){
                $(".section > div > input").val(parseInt(now)+1);
            }else{
                $(".section > div > input").val("1");
            }
        })                        
    })        

    $(".dropdown-menu li a").click(function(){
      $(this).parents(".input-group-btn").find('.btn').html($(this).text()+ ' <i class="fa fa-angle-down"></i>');
      $(this).parents(".input-group-btn").find('.btn').val($(this).data('value'));
    });

   function makeTimer() {
            var vaqt = 'March 1, 2018 00:00:00 PDT';

            var endTime = new Date(vaqt);         
            var endTime = (Date.parse(endTime)) / 1000;

            var now = new Date();
            var now = (Date.parse(now) / 1000);

            var timeLeft = endTime - now;

            var days = Math.floor(timeLeft / 86400); 
            var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
            var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
            var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

            if (hours < "10") { hours = "0" + hours; }
            if (minutes < "10") { minutes = "0" + minutes; }
            if (seconds < "10") { seconds = "0" + seconds; }

            $("#days").html(days);
            $("#hours").html(hours);
            $("#minutes").html(minutes);
            $("#seconds").html(seconds);       

    }

    setInterval(function() { makeTimer(); }, 1000);


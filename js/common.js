$(function(){
    //index tab
    $(".cont").eq(0).show();
    var $walkTabli = $('#walkTab li');
	var $cont = $('.cont');

	$walkTabli.mouseover(function(){
		var $this = $(this);
		var $t = $this.index();
		$walkTabli.removeClass();
		$this.addClass('cur');
		$cont.css('display','none');
		$cont.eq($t).css('display','block');
	});

    $('.walkBox .cont li').mouseover(function(){
        $(this).find('.mask').show();
        $(this).find('.maskDesc').show();
    });

    $('.walkBox .cont li').mouseleave(function(){
        $(this).find('.mask').hide();
        $(this).find('.maskDesc').hide();
    });

    //dynamic tab
    $(".contain").eq(0).show();
    var $dynamicTabli = $('#dynamicTab li');
	var $contain = $('.contain');

	$dynamicTabli.mouseover(function(){
		var $this = $(this);
		var $t = $this.index();
		$dynamicTabli.removeClass();
		$this.addClass('cur');
		$contain.css('display','none');
		$contain.eq($t).css('display','block');
	});

    //news tab
    $(".cnt").eq(0).show();
    var $newsTabli = $('#newsTab li');
	var $cnt = $('.cnt');

	$newsTabli.mouseover(function(){
		var $this = $(this);
		var $t = $this.index();
		$newsTabli.removeClass();
		$this.addClass('cur');
		$cnt.css('display','none');
		$cnt.eq($t).css('display','block');
	});

})

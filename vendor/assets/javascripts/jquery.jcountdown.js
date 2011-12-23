(function($) {
  $.fn.setCountdown = function(options) {
    defaults = {
      targetDate: '2012-12-21',
      itemLabels: [ 'Days', 'Hours', 'Minutes', 'Seconds' ]
    };

    options = $.extend(defaults, options);

    this.assignHtml(options);
    this.updateCountdown(options);

    return this;
  }

  $.fn.assignHtml = function(options) {
    itemClasses = [ 'jctdn-days', 'jctdn-hours', 'jctdn-mins', 'jctdn-secs' ];
    html = '';

    for (i = 0; i < itemClasses.length; i++) {
      html += '<span class="' + itemClasses[i] + '"><label>' +
              options.itemLabels[i] + '</label><div></div></span>';
    }

    this.html(html);
  }

  $.fn.updateCountdown = function(options) {
    $this = $('#' + this.attr('id'));

    now = new Date();
    target = new Date(options.targetDate);
    diff = Math.floor((target.valueOf() - now.valueOf()) / 1000);

    if ( diff <= 0 ) {
      secs =  0;
      mins = 0;
      hours = 0;
      days = 0;

      if ( $.data($this[0], 'timer') ) {
        clearTimeout($.data(this[0], 'timer'));
      }
    } else {
      secs = diff % 60;
      mins = Math.floor(diff / 60) % 60;
      hours = Math.floor(diff / (60 * 60)) % 24;
      days = Math.floor(diff / (60 * 60 * 24));

      timer = setTimeout(function() { $this.updateCountdown(options) }, 1000)
      $.data($(this)[0], 'timer', timer);
    }

    $('#' + this.attr('id') + ' span.jctdn-days div').html(days)
    $('#' + this.attr('id') + ' span.jctdn-hours div').html(hours > 9 ? hours : '0' + hours)
    $('#' + this.attr('id') + ' span.jctdn-mins div').html(mins > 9 ? mins : '0' + mins)
    $('#' + this.attr('id') + ' span.jctdn-secs div').html(secs > 9 ? secs : '0' + secs);
  }
})(jQuery);

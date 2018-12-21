var lspTimePicker = (function () {
    function lspTimePicker(init) {
        this.ONCE = [];
        this.UI = {};
        this.$wrap = false;
        this.state = {
            mins: 0,
            format: 24,
            scroll: {}
        };
        var ts = this;
        if (typeof init !== "object")
            init = { init: init || false };
        if (init.$wrap) {
            ts.$wrap = init.$wrap;
            ts.getUI();
        }
        if (init.format == 12)
            ts.state.format = 12;
        ts.listeners();
        ts.once('init');
    }
    ;
    lspTimePicker.prototype.getUI = function () {
        var ts = this;
        ts.UI = {
            $wrap: ts.$wrap,
            $inner: ts.$wrap.find(".time-select-inner"),
            $display: ts.$wrap.find(".time-display"),
            $select: ts.$wrap.find(".time-select"),
            $list: ts.$wrap.find(".time-select-list"),
            $hour: ts.$wrap.find(".time-select-hour"),
            $listH: ts.$wrap.find(".time-select-hour ul"),
            $mins: ts.$wrap.find(".time-select-min"),
            $listM: ts.$wrap.find(".time-select-min ul"),
            $ampm: ts.$wrap.find(".time-select-ampm"),
            $listAP: ts.$wrap.find(".time-select-ampm ul")
        };
    };
    ;
    lspTimePicker.prototype.listeners = function () {
        var ts = this;
        $("body").on("mousedown", function (event) {
            ts.click(event);
        });
        ts.UI.$wrap.on("click", function (el) {
            ts.draw('select');
        });
        ts.UI.$list.on("click", "ul", function (el) {
            ts.select($(el.target));
        });
    };
    ;
    lspTimePicker.prototype.once = function (action, callback) {
        var ts = this;
        if (ts.ONCE.indexOf(action) != -1)
            return;
        else
            ts.ONCE.push(action);
        switch (action) {
            case "init":
                ts.once('scroll');
                break;
            case "scroll":
                ts.UI.$hour.mCustomScrollbar({
                    theme: "light",
                    axis: "y",
                    autoHideScrollbar: false,
                    scrollInertia: 250,
                    scrollEasing: "easeOut",
                    mouseWheel: {
                        enable: true,
                        axis: "y",
                        normalizeDelta: true,
                        scrollAmount: 100,
                        deltaFactor: 10,
                        normalizeDelta: true
                    }
                });
                ts.UI.$mins.mCustomScrollbar({
                    theme: "light",
                    axis: "y",
                    autoHideScrollbar: false,
                    scrollInertia: 250,
                    scrollEasing: "easeOut",
                    mouseWheel: {
                        enable: true,
                        axis: "y",
                        normalizeDelta: true,
                        scrollAmount: 120,
                        deltaFactor: 10,
                        normalizeDelta: true
                    }
                });
                break;
            default:
                if (callback)
                    callback();
        }
    };
    ;
    lspTimePicker.prototype.click = function (event) {
        var ts = this;
        if (!ts.UI.$select.hasClass('hide')
            &&
                !$(event.target).closest(ts.UI.$inner).length
            &&
                !$(event.target).hasClass('date-close')) {
            ts.draw('close');
        }
    };
    ;
    lspTimePicker.prototype.keyboard = function (event) {
        var ts = this;
    };
    ;
    lspTimePicker.prototype.select = function ($li) {
        var ts = this;
        ts.draw('selected', { $li: $li });
        ts.readTime();
        ts.draw('display');
    };
    ;
    lspTimePicker.prototype.readTime = function () {
        var ts = this;
        var mins = 0;
        mins += parseInt(ts.UI.$listM.find('[selected]').attr('value')) || 0;
        var hour = parseInt(ts.UI.$listH.find('[selected]').attr('value')) || 0;
        if (ts.state.format == 12) {
            var label = ts.UI.$listAP.find('[selected]').attr('value');
            if (label == 'AM') {
                if (hour == 12)
                    hour = 0;
            }
            else {
                if (hour < 12)
                    hour += 12;
            }
        }
        mins += 60 * hour;
        ts.state.mins = mins;
        return ts.state.mins;
    };
    ;
    lspTimePicker.prototype.draw = function (actions, mode) {
        var ts = this;
        if (typeof actions != "object")
            actions = [actions || false];
        if (typeof mode != "object")
            mode = { mode: mode || false };
        for (var _i = 0, actions_1 = actions; _i < actions_1.length; _i++) {
            var action = actions_1[_i];
            switch (action) {
                case "display":
                    var time = ts.getTime();
                    var timeString = ts.zero(time.hour) + " : " + ts.zero(time.mins);
                    if (time.label)
                        timeString += ' ' + time.label;
                    ts.UI.$display.text(timeString);
                    break;
                case "selected":
                    var $ul = mode.$li.parent();
                    $ul.find('[selected]').removeAttr('selected');
                    mode.$li.attr('selected', 'selected');
                    if (!mode.correct) {
                        var val = mode.$li.attr('value');
                        if (val == 'AM')
                            ;
                    }
                    break;
                case "select":
                    if (!ts.UI.$select.hasClass('hide'))
                        continue;
                    var time = ts.getTime();
                    var items = { hour: [], mins: [], label: [] };
                    console.info(time);
                    for (h = 0; h < 24; h++) {
                        var val = parseInt(h);
                        if (ts.state.format == 12) {
                            if (h == 0)
                                continue;
                            else if (h > 12)
                                break;
                        }
                        var $el = $('<li>').attr('value', h).text(ts.zero(h));
                        if (time.hour == val)
                            $el.attr('selected', 'selected');
                        items.hour.push($el);
                    }
                    for (m = 0; m < 60; m++) {
                        var $el = $('<li>').attr('value', m).text(ts.zero(m));
                        if (time.mins == m)
                            $el.attr('selected', 'selected');
                        items.mins.push($el);
                    }
                    if (ts.state.format == 12) {
                        ts.UI.$ampm.removeClass('hide');
                        var labels = ['AM', 'PM'];
                        for (var i in labels) {
                            var $el = $('<li>').attr('value', String(labels[i])).text(labels[i]);
                            if (time.label == labels[i])
                                $el.attr('selected', 'selected');
                            items.label.push($el);
                        }
                    }
                    else {
                        ts.UI.$ampm.addClass('hide');
                    }
                    ts.UI.$listH.html(items.hour);
                    ts.UI.$listM.html(items.mins);
                    ts.UI.$listAP.html(items.label);
                    ts.UI.$select.removeClass('hide');
                    ts.draw('scrollTo');
                    break;
                case "scrollTo":
                    ts.UI.$hour.mCustomScrollbar("scrollTo", ts.UI.$hour.find('[selected]'), { scrollEasing: "easeOut", scrollInertia: 150 });
                    ts.UI.$mins.mCustomScrollbar("scrollTo", ts.UI.$mins.find('[selected]'), { scrollEasing: "easeOut", scrollInertia: 150 });
                    break;
                case "close":
                    ts.UI.$select.addClass('hide');
                    break;
            }
        }
    };
    ;
    lspTimePicker.prototype.isOpen = function () {
        var ts = this;
        return !ts.UI.$select.hasClass('hide');
    };
    ;
    lspTimePicker.prototype.zero = function (num) {
        return ('0' + String(num)).slice(-2);
    };
    ;
    lspTimePicker.prototype.getTime = function () {
        var ts = this;
        var mins = ts.state.mins % 60;
        var hour = Math.floor(ts.state.mins / 60);
        var label = false;
        if (ts.state.format == 12) {
            label = 'AM';
            if (hour >= 12) {
                label = 'PM';
                hour = hour - 12;
            }
            if (hour == 0) {
                hour = 12;
            }
        }
        return { hour: hour, mins: mins, label: label };
    };
    ;
    lspTimePicker.prototype.set = function (microtime) {
        var ts = this;
        ts.state.mins = microtime / 60e3;
        ts.draw('display');
    };
    ;
    lspTimePicker.prototype.get = function (microtime) {
        var ts = this;
        return ts.state.mins * 60e3;
    };
    ;
    return lspTimePicker;
}());
;
//# sourceMappingURL=time.js.map
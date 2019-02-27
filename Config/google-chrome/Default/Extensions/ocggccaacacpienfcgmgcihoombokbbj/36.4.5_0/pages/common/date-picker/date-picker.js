(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
        (global.lspDatePicker = factory());
}(this, function () {
    'use strict';

    var lspDatePicker = function ($params) {
        this.$warpper = null;
        this.monthData = null;
        this.$params = $params;
        this.selected = {};
        this.init(this.$params);
    };

    lspDatePicker.prototype.getMonthData = function (year, month) {
        var year, month;
        var ret = [];


        if (!year || !month) {

            var today = new Date();

            year = today.getFullYear();

            month = today.getMonth() + 1;
        }
        var firstDay = new Date(year, month - 1, 1);

        var firstDayWeekDay = firstDay.getDay();

        if (firstDayWeekDay === 0) {

            firstDayWeekDay = 7;
        }

        year = firstDay.getFullYear();

        month = firstDay.getMonth() + 1;


        var lastDayOfLastMonth = new Date(year, month - 1, 0);

        var lastDateOfLastMonth = lastDayOfLastMonth.getDate();

        var preMonthDayCount = firstDayWeekDay - 1;

        var lastDay = new Date(year, month, 0);

        var lastDate = lastDay.getDate();
        var styleCls = '';
        for (var i = 0; i < 7 * 6; i++) {
            var date = i + 1 - preMonthDayCount;

            var showDate = date;

            var thisMonth = month;

            if (date <= 0) {
                thisMonth = month - 1;
                showDate = lastDateOfLastMonth + date;
                styleCls = 'lsp-gray';
            } else if (date > lastDate) {
                thisMonth = month + 1;
                showDate = showDate - lastDate;
                styleCls = 'lsp-gray';
            } else {
                var today = new Date();

                styleCls = 'lsp-normal';

                if (showDate === today.getDate() && thisMonth === today.getMonth() + 1) {
                    styleCls += ' lsp-current';
                }

                if (
                    this.selected.date &&
                    showDate === this.selected.date && thisMonth === this.selected.month && year === this.selected.year
                ) {
                    styleCls += ' lsp-selected';
                }
            }

            if (thisMonth === 13) {
                thisMonth = 1;
            }
            if (thisMonth === 0) {
                thisMonth = 12;
            }

            ret.push({
                month: thisMonth,
                date: date,
                showDate: showDate,
                styleCls: styleCls
            });
        }
        return {
            year: year,
            month: month,
            date: ret
        };
    };

    lspDatePicker.prototype.buildUi = function (year, month) {
        this.monthData = this.getMonthData(year, month);
        this.dayWords = [translate('date_day').split(',')];
        this.enMonthsWords = translate('date_month').split(',');
        this.$params.dom.setAttribute('current', '');

        var $html = $("<div>")
            .addClass("lsp-date-picker-warpper");

        var $header = $("<div>").addClass("lsp-date-picker-header");

        $header.append($("<span>").addClass("prev-date-btn").text("<"))

        $header.append(
            $("<span>").addClass("lsp-date-title").text(this.enMonthsWords[this.monthData.month - 1] + ' ' + this.monthData.year)
        );

        $header.append($("<span>").addClass("next-date-btn").text(">"));

        $html.append($header);

        var $body = $("<div>").addClass("lsp-date-picker-body");
        var $table = $("<table>");
        var $tr = $("<tr>");

        for (var i = 0; i < this.dayWords[0].length; i++) {
            $tr.append($("<th>").text(this.dayWords[0][i]));
        }

        $table.append($("<thead>").append($tr));
        var $tbody = $("<tbody>");

        for (var i = 0; i < this.monthData.date.length; i++) {
            if (i % 7 === 0) {
                $tr = $("<tr>");
            }
            
            var dataDate = this.monthData.year + '/' + this.monthData.month + '/' + this.monthData.date[i].showDate;

            $tr.append(
                $("<td>")
                .addClass(this.monthData.date[i].styleCls)
                .attr("data-date", dataDate)
                .append(
                    $('<span>')
                    .addClass('date-number')
                    .text(this.monthData.date[i].showDate)
                )
            );
            
            if(String(this.monthData.date[i].styleCls).indexOf('lsp-selected') !== -1){
                this.$params.dom.setAttribute('current', dataDate);
            }

            if (i % 7 === 6) {
                $tbody.append($tr);
            }
        }

        $table.append($tbody);
        $body.append($table);
        $html.append($body);

        return $html;
    };

    lspDatePicker.prototype.set = function (timestamp) {
        if (timestamp) {
            var date = new Date(timestamp);
            this.selected = {
                year: date.getFullYear(),
                month: date.getMonth() + 1,
                date: date.getDate(),
            };
        } else {
            var date = new Date();
            this.selected = {};
        }

        this.render(false, {
            year: date.getFullYear(),
            month: date.getMonth() + 1
        });
    };

    lspDatePicker.prototype.render = function (direction, $params) {
        var year, month;

        if (
            this.monthData &&
            (
                typeof $params != "object" ||
                !$params.year ||
                !$params.month
            )
        ) {
            year = this.monthData.year;
            month = this.monthData.month;

        } else {
            year = $params.year;
            month = $params.month;
        }

        if (direction === 'prev') {
            month--;
            if (month === 0) {
                month = 12;
                year--;
            }
        }
        if (direction === 'next') {
            month++;

        }
        var $html = this.buildUi(year, month);
        $(this.$warpper).html('').append($html);
    };
    lspDatePicker.prototype.init = function ($params) {
        this.$warpper = $params.dom;
        this.render('', $params);
        var _this = this;

        this.$warpper.addEventListener('click', function (e) {
            var $target = e.target;

            if ($target.classList.contains('prev-date-btn')) {

                _this.render('prev');

            }
            if ($target.classList.contains('next-date-btn')) {

                _this.render('next');

            }

            if ($target.classList.contains('lsp-normal')) {
                $params.onClickDate($target.getAttribute('data-date'));
            }

            if ($($target).parent().hasClass('lsp-normal')) {
                $params.onClickDate($($target).parent().attr('data-date'));
            }
        }, false);
    };
    return lspDatePicker;
}));

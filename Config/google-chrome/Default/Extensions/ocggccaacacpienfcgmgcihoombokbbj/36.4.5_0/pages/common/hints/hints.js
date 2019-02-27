HINTS: any = false, VAL;
any;
var lspHints = (function () {
    function lspHints() {
        this.UI = {
            ids: {}
        };
        this.state = {
            clicks: {}
        };
        this.data = {};
        var ts = this;
        ts.getUI();
        ts.prepare();
        ts.status();
        ts.draw();
        ts.listeners();
    }
    ;
    lspHints.prototype.getUI = function () {
        var ts = this;
        ts.UI.$hints = $("hint");
    };
    ;
    lspHints.prototype.listeners = function () {
        var ts = this;
        for (var id in ts.UI.ids) {
            ts.listenTarget(id);
        }
    };
    ;
    lspHints.prototype.listenTarget = function (id) {
        var ts = this;
        if (ts.UI.ids[id].$target)
            ts.UI.ids[id].$target.on("click", function () {
                ts.targetClick(id);
            });
    };
    ;
    lspHints.prototype.targetClick = function (id) {
        var ts = this;
        ts.state.clicks[id] = 1 + (ts.state.clicks[id] || 0);
        ts.draw([id]);
        ts.status(true);
    };
    ;
    lspHints.prototype.prepare = function () {
        var ts = this;
        ts.UI.$hints.each(function (i, hint) {
            var $hint = $(hint);
            var id = $hint.attr("id");
            ts.UI.ids[id] = {
                id: id,
                $el: $hint,
                clicks: parseInt($hint.attr("clicks")) || false,
                targetId: $hint.attr("target") || false
            };
            if (ts.UI.ids[id].targetId)
                ts.UI.ids[id].$target = $("#" + ts.UI.ids[id].targetId);
        });
    };
    ;
    lspHints.prototype.status = function (write) {
        var ts = this;
        if (!write) {
            var data = VAL.get('hints.data');
            if (data) {
                try {
                    ts.state = JSON.parse(data);
                }
                catch (ex) {
                    console.warn(ex);
                }
            }
        }
        else {
            VAL.set('hints.data', JSON.stringify(ts.state));
        }
        return ts.state;
    };
    ;
    lspHints.prototype.draw = function (ids) {
        if (ids === void 0) { ids = Object.keys(this.UI.ids); }
        var ts = this;
        for (var i in ids) {
            var id = ids[i];
            if (!ts.UI.ids[id].clicks
                ||
                    !ts.state.clicks[id]
                ||
                    ts.state.clicks[id] < ts.UI.ids[id].clicks) {
                ts.UI.ids[id].active = true;
                ts.UI.ids[id].$el.addClass('active');
            }
            else {
                ts.UI.ids[id].active = false;
                ts.UI.ids[id].$el.removeClass('active');
            }
        }
    };
    ;
    return lspHints;
}());
$(function () {
    HINTS = new lspHints();
});
//# sourceMappingURL=hints.js.map
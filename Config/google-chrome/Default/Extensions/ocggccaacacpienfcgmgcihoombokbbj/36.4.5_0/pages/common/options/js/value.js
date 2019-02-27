var $, VAL, NAVI;
var optionsValues = (function () {
    function optionsValues() {
        this.ONCE = [];
        this.DEFS = {
            "navi-show": '{"show-favorites":1,"show-downloaded":1,"show-wallpapers":1,"show-live-themes":1,"show-live-backgrounds":1}',
            "randomize-favorites": 'off',
            "randomize-downloaded": 'off',
            "tags-wallpapers": 'off',
            "tags-cursor": 0,
            "tags-synonyms": 0,
            "tags-autoupdate": 120 * 60e3,
            "tags-updated": 0,
            "tags-current": '',
            "tags-next": '',
            "navi-tabs": '{}',
            "relax-btn-always-show": 0,
            "enable-blur-effect": 0,
            "show-bookmarks-bar": 1,
            "video-wallpapers": "on",
            "uploaded-wallpapers": "off",
            "show-plus-dial": 1,
            "wallpapers-prev-mode": "video",
            "weather-auto-update": "manual",
            "weather-last-update": 0,
            "show-clock-with-dials": 0
        };
        this.state = {
            rels: {
                lastTime: 0
            }
        };
        this.state.init = true;
    }
    ;
    optionsValues.prototype.set = function ($el, data, type) {
        var val, name;
        if (typeof data !== "object")
            data = { value: data || false };
        else {
            if (!data.value && data.val)
                data.value = data.val;
            if (['obj', 'object', 'json'].indexOf(type) !== -1 && !data.value) {
                data = { value: data, type: 'json' };
            }
        }
        if (typeof $el === "object") {
            val = this.val($el);
            name = data.name || $el.attr("id") || $el.attr("memorize") || $el.parents("[memorize]").attr("memorize");
        }
        else {
            val = data.value;
            name = $el;
        }
        var current = this.get((data.group ? data.group : name), (data.group ? "group" : false));
        if (data.group) {
            current[name] = val;
            current = JSON.stringify(current);
        }
        else if (data.type && ['obj', 'object', 'json'].indexOf(data.type) !== -1) {
            current = JSON.stringify(val);
        }
        else {
            current = String(val);
        }
        localStorage.setItem((data.group ? data.group : name), current);
        if (data.apply && NAVI) {
            NAVI.applyVal(name, data.value, { passive: true });
        }
        if (!data.nogo) {
            this.relations(name, val);
        }
    };
    ;
    optionsValues.prototype.get = function (name, toType) {
        var val = localStorage.getItem(name);
        if (val === null)
            val = this.DEFS[name] || false;
        if (toType && toType == "group")
            val = JSON.parse(val || "{}");
        if (String(val) === String(parseInt(val)))
            val = parseInt(val);
        if (val === "false")
            val = false;
        if (toType) {
            switch (toType) {
                case "string":
                    val = String(val);
                    break;
                case "int":
                case "integer":
                    val = parseInt(val) || 0;
                    break;
                case "obj":
                case "object":
                case "json":
                    val = JSON.parse(val || "{}");
                    break;
            }
        }
        return val;
    };
    ;
    optionsValues.prototype.relations = function (name, value) {
        var ts = this;
        if (name == 'video-wallpapers') {
            ts.set('tags-wallpapers', { value: value == 'off' ? 'random' : 'off', apply: true, nogo: true });
            ts.set('uploaded-wallpapers', { value: 'off', apply: true, nogo: true });
            if (value !== "off") {
                ts.set("randomize-downloaded", { value: 'off', apply: true, nogo: true });
                ts.set("randomize-favorites", { value: 'off', apply: true, nogo: true });
                ts.set("wallpapers-prev-mode", { value: 'video' });
            }
            if (value !== 'off')
                activateWallpapers('video');
        }
        else if (name == 'uploaded-wallpapers') {
            ts.set('tags-wallpapers', { value: value == 'off' ? 'random' : 'off', apply: true, nogo: true });
            ts.set('video-wallpapers', { value: 'off', apply: true, nogo: true });
            if (value !== 'off') {
                ts.set("randomize-downloaded", { value: 'off', apply: true, nogo: true });
                ts.set("randomize-favorites", { value: 'off', apply: true, nogo: true });
                ts.set("wallpapers-prev-mode", { value: 'uploaded' });
                activateWallpapers('uploaded');
            }
        }
        else if (name == 'tags-wallpapers') {
            if (value != 'off') {
                ts.set('video-wallpapers', { value: 'off', apply: true, nogo: true });
                ts.set('uploaded-wallpapers', { value: 'off', apply: true, nogo: true });
                ts.set("randomize-downloaded", { value: 'off', apply: true, nogo: true });
                ts.set("randomize-favorites", { value: 'off', apply: true, nogo: true });
                ts.set("wallpapers-prev-mode", { value: 'tags' });
            }
            else if (String(ts.get('background-image-file')).indexOf('usr') === 0) {
                ts.set('video-wallpapers', { value: 'off', apply: true, nogo: true });
                ts.set('uploaded-wallpapers', { value: 'on', apply: true, nogo: true });
            }
            else {
                ts.set('video-wallpapers', { value: 'on', apply: true, nogo: true });
                ts.set('uploaded-wallpapers', { value: 'off', apply: true, nogo: true });
            }
        }
        if (['randomize-downloaded', 'randomize-favorites'].indexOf(name) !== -1) {
            if (value !== "off") {
                ts.set('tags-wallpapers', { value: 'off', apply: true, nogo: true });
                ts.set('uploaded-wallpapers', { value: 'off', apply: true, nogo: true });
                ts.set('video-wallpapers', { value: 'off', apply: true, nogo: true });
            }
            else {
                var mode = ts.get("wallpapers-prev-mode");
                if (["video", "tags", "uploaded"].indexOf(mode) === -1)
                    mode = "video";
                var val = mode != "tags" ? "on" : "random";
                ts.set(mode + "-wallpapers", { value: val, apply: true, nogo: true });
            }
            if (NAVI)
                NAVI.markSelected();
            ts.GA(name, value, 1);
        }
        else if (value == 'off') {
            console.debug("relations exit", name, value);
            return false;
        }
        var timeout = 1;
        var Now = Date.now();
        if (Now - ts.state.rels.lastTime < 1000)
            timeout = 500;
        ts.state.rels.lastTime = Now;
        setTimeout(function () {
            if (String(name).indexOf('randomize-downloaded') === 0) {
                if (value != 'off')
                    ts.set('randomize-favorites', { value: 'off', apply: true, nogo: true });
            }
            else if (String(name).indexOf('randomize-favorites') === 0) {
                if (value != 'off')
                    ts.set('randomize-downloaded', { value: 'off', apply: true, nogo: true });
            }
            if (NAVI)
                NAVI.markSelected();
        }, timeout);
        return true;
    };
    ;
    optionsValues.prototype.val = function ($el) {
        var val = false;
        var tag = $el.attr("type") || $el[0].tagName.toLowerCase();
        if (tag == "checkbox")
            val = $el.prop("checked");
        else if (tag == "radio")
            val = $el.val();
        else if (tag == "select")
            val = $el.val();
        else if ($el.attr("for"))
            val = $el.attr("for");
        else
            val = $el.val();
        return this.boolToNum(val);
    };
    ;
    optionsValues.prototype.boolToNum = function (val) {
        if (val === true || val === "true" || val === "1")
            val = 1;
        else if (typeof val === "undefined" || val === "undefined" || val === null || val === false || val === "false" || val === "0")
            val = 0;
        else if (String(val) === String(parseInt(val)))
            val = parseInt(val);
        return val;
    };
    ;
    optionsValues.prototype.GA = function (action, label, value) {
        sendToGoogleAnaliticMP(function () {
            gamp('send', 'event', 'settings', action, label, value);
        });
    };
    ;
    return optionsValues;
}());
VAL = new optionsValues();
//# sourceMappingURL=value.js.map
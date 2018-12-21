var $, TAGS = false, queueTags = [];
var VAL, BRW_langLoaded, translate, autoTranslate, extensionGetUrl, BRW_sendMessage, sendToGoogleAnaliticMP, gamp, getBackgroundParallaxValue, getDisplayParallaxVideoTheme, updatePageBackgroundImage, Async, merge, browserName;
function tagsOnLoad(func) {
    if (typeof TAGS == "object" && typeof TAGS.show == "function") {
        func.call(true);
    }
    else {
        queueTags.push(func);
    }
}
var wallpapersTags = (function () {
    function wallpapersTags() {
        this.ONCE = [];
        this.API = {
            host: "https://livestartpage.com",
            list: "/gallery/api/getUsedTagsList",
            show: "/gallery/api/getPhotoByTags"
        };
        this.tagsServerList = false;
        this.tagsLocalList = [
            {
                id: "36",
                name: translate('tag_36'),
                used: false
            },
            {
                id: "34",
                name: translate('tag_34'),
                used: false
            },
            {
                id: "44",
                name: translate('tag_44'),
                used: false
            },
        ];
        this.state = {
            selected: localStorage.getItem("tags-selected") ? String(localStorage.getItem("tags-selected")).split(',') : [],
            nextTimeout: false
        };
        this.UI = {
            options: {
                $full: $("#walpapers-tags-list"),
                $local: $("#walpapers-themes-list"),
                $mode: $("[name='tags-wallpapers']"),
                $liveOn: $("#video-on"),
                $liveOff: $("#video-off"),
                demo: {
                    $wrap: $("#walpapers-demo"),
                    $title: $("#walpapers-demo .wd-title"),
                    $name: $("#walpapers-demo .wd-name"),
                    $image: $("#walpapers-demo .wd-image"),
                    $imageBg: $("#walpapers-demo .wd-image-bg"),
                    $reload: $("#walpapers-demo .wd-reload"),
                    $container: $("#walpapers-demo .wd-image-container"),
                    $hint: $("#walpapers-demo .wd-hint"),
                    $updHint: $("#walpapers-demo .wd-upd-hint")
                }
            },
            newtab: {
                $tou: $("#tou"),
                menu: {
                    $next: $("#footer-left-menu .menu-next-picture"),
                    $player: $("#footer-left-menu .menu-player")
                }
            }
        };
        this.once("init");
    }
    ;
    wallpapersTags.prototype.listeners = function () {
        var ts = this;
        ts.UI.options.$full.on("change", ".tag-item input", function (event) {
            ts.check($(event.currentTarget), "tag");
        });
        ts.UI.options.$local.on("change", ".tag-item input", function (event) {
            ts.check($(event.currentTarget), "theme");
        });
        ts.UI.options.$mode.on("change", function (event) {
            setTimeout(function () {
                ts.showNext();
            }, 150);
        });
        ts.UI.newtab.menu.$next.on("click", function (event) {
            ts.reload(ts.UI.newtab.menu.$next, false);
        });
        ts.UI.options.demo.$title.on("click", function (event) {
            ts.reload(ts.UI.options.demo.$reload, true);
        });
    };
    ;
    wallpapersTags.prototype.reload = function ($el, demo) {
        var ts = this;
        if (!$el.hasClass("reloading")) {
            $el.addClass("reloading");
            ts.show({
                change: true,
                demo: demo ? true : false
            });
            setTimeout(function () {
                $el.removeClass("reloading");
            }, 1.5e3);
        }
    };
    ;
    wallpapersTags.prototype.status = function () {
        var mode = VAL.get("tags-wallpapers");
        var list = VAL.get("tags-selected");
        if (['on', 'random'].indexOf(mode) !== -1
            &&
                list) {
            return mode;
        }
        else {
            return false;
        }
    };
    ;
    wallpapersTags.prototype.setStatus = function (status, soft) {
        var ts = this;
        if (!soft || !ts.status()) {
            if (['on', 'random', 'off'].indexOf(status) !== -1)
                status == "random";
            VAL.set("tags-wallpapers", status);
            if (ts.UI.options.$mode.length) {
                ts.UI.options.$mode.filter("[value='" + status + "']").prop('checked', true);
            }
        }
    };
    ;
    wallpapersTags.prototype.id = function () {
        var current = VAL.get("tags-current");
        var id = false;
        if (current) {
            try {
                current = JSON.parse(current);
                id = current.id;
            }
            catch (ex) {
                console.warn(ex);
            }
        }
        return id;
    };
    ;
    wallpapersTags.prototype.draw = function (Actions, Mode) {
        if (Mode === void 0) { Mode = false; }
        var ts = this;
        if (typeof Actions != "object")
            Actions = [Actions || false];
        if (typeof Mode != "object") {
            if (typeof Mode === "string" && Mode[0] == '{' && Mode.slice(-1) == '}') {
                try {
                    Mode = JSON.parse(Mode);
                }
                catch (ex) {
                    console.warn(ex);
                    return false;
                }
            }
            else {
                Mode = [Mode || false];
            }
        }
        var _loop_1 = function (action) {
            switch (action) {
                case "init":
                    var timeout = 1;
                    if (browserName() == "firefox")
                        timeout = 150;
                    setTimeout(function () {
                        for (var i in queueTags) {
                            queueTags[i].call(true);
                        }
                    }, timeout);
                    break;
                case "addTags":
                    $listTop = [], $listBottom = [];
                    for (var _i = 0, _a = Mode.list; _i < _a.length; _i++) {
                        var tag = _a[_i];
                        tag.id = String(tag.id);
                        if (tag.id.indexOf(',') === -1) {
                            selected = ts.state.selected.indexOf(tag.id) !== -1;
                        }
                        else {
                            selected = true, ids = tag.id.split(',');
                            for (var _b = 0, ids_1 = ids; _b < ids_1.length; _b++) {
                                var id = ids_1[_b];
                                if (ts.state.selected.indexOf(id) === -1)
                                    selected = false;
                            }
                        }
                        $item = $("<div>")
                            .addClass(selected ? "tag-item selected" : "tag-item");
                        if (Mode.showId)
                            $item.attr("title", "Tag ID: " + tag.id);
                        $item
                            .append($("<label>")
                            .append($("<input>")
                            .attr("type", "checkbox")
                            .attr("tagId", tag.id)
                            .attr("checked", selected ? "checked" : false))
                            .append($("<span>")
                            .text(tag.used ? tag.name + " (" + tag.used + ")" : "" + tag.name)));
                        if (selected || Mode.noSort)
                            $listTop.push($item);
                        else
                            $listBottom.push($item);
                    }
                    Mode.$wrap.html("").append($listTop).append($listBottom);
                    ts.draw("mode");
                    break;
                case "mode":
                    if (ts.state.selected.length) {
                        ts.UI.options.$mode.attr("disabled", false);
                        ts.UI.options.$liveOff.attr("disabled", false);
                    }
                    else {
                        ts.UI.options.$mode.attr("disabled", "disabled");
                        ts.UI.options.$liveOff.attr("disabled", "disabled");
                        ts.UI.options.$liveOn.prop('checked', true);
                    }
                    break;
                case "theme":
                    if (Mode.demo)
                        return { value: ts.draw(["demo-block", "demo"], Mode) };
                    Mode.parallaxValue = getBackgroundParallaxValue();
                    Mode.enableParallax = getDisplayParallaxVideoTheme();
                    Mode.image = ts.resize(Mode);
                    Mode.smooth = true;
                    updatePageBackgroundImage(Mode, function () {
                        ts.UI.newtab.$tou.find(".tou-photo-block").remove();
                        ts.UI.newtab.$tou.find(".tou-photo").remove();
                        if (Mode.link.indexOf('http') === -1)
                            Mode.link = "http://" + Mode.link;
                        var $block = $("<div>").addClass("tou-photo-block");
                        if (VAL.get("show-tags")) {
                            $block
                                .append($("<span>")
                                .addClass('tou-photo-id')
                                .text("ID: " + Mode.id + ",")
                                .attr("title", "ID: " + Mode.id));
                        }
                        $block.append($("<span>")
                            .addClass('tou-photo-title')
                            .text(Mode.title));
                        $block.append($("<div>")
                            .addClass('tou-photo-bottom')
                            .append($("<span>")
                            .addClass('tou-photo-refresh')
                            .attr('title', translate('show_next_picture'))
                            .append($("<i>")
                            .addClass("glyphicon glyphicon-repeat"))
                            .on("click", function (event) {
                            ts.refreshBtn($(event.currentTarget));
                        }))
                            .append($("<a>")
                            .addClass('tou-photo-by')
                            .attr("href", Mode.link)
                            .attr("target", "_blank")
                            .text("Photo by " + Mode.hosting.capitalizeFirstLetter())));
                        ts.UI.newtab.$tou.append($block);
                    });
                    break;
                case "demo-block":
                    if (!ts.status()) {
                        ts.UI.options.demo.$wrap.addClass("fade-out");
                        setTimeout(function () {
                            ts.UI.options.demo.$title.addClass("process");
                            ts.UI.options.demo.$image.addClass("process");
                        }, 150);
                        var mode = VAL.get("tags-wallpapers");
                        var list = VAL.get("tags-selected");
                        if (!list) {
                            ts.UI.options.demo.$hint.text(translate("tags_choose_hint"));
                        }
                        else {
                            ts.UI.options.demo.$hint.text(translate("tags_enable_hint"));
                        }
                    }
                    else {
                        ts.UI.options.demo.$image.css({
                            "background-image": "none"
                        });
                        ts.UI.options.demo.$wrap.removeClass("fade-out");
                    }
                    break;
                case "demo":
                    var tagsAll = Mode.tags.split(',');
                    var tags = [];
                    for (var _c = 0, _d = ts.state.selected; _c < _d.length; _c++) {
                        var tag = _d[_c];
                        tag = String(tag);
                        if (tagsAll.indexOf(tag) !== -1) {
                            tags.push(tag);
                        }
                    }
                    if (!tags.length)
                        tags = tagsAll;
                    var tagId = tags[Math.floor(Math.random() * tags.length)];
                    var name_1 = false;
                    for (var _e = 0, _f = ts.tagsLocalList.concat(ts.tagsServerList); _e < _f.length; _e++) {
                        var tag = _f[_e];
                        if (String(tag.id) == tagId) {
                            name_1 = tag.name;
                            break;
                        }
                    }
                    ts.UI.options.demo.$image.addClass("process");
                    ts.UI.options.demo.$updHint.addClass("process");
                    var src_1 = ts.resize(Mode);
                    var start_1 = Date.now();
                    Async.chain([
                        function (showHandler) {
                            $("<img/>")
                                .on('load', function () {
                                showHandler();
                            })
                                .on('error', function () {
                                console.log("error loading image");
                                showHandler();
                            })
                                .attr("src", src_1);
                        },
                        function (releaseHandler) {
                            ts.UI.options.demo.$title.addClass("process");
                            var delay = 500 + Date.now() - start_1;
                            setTimeout(function () {
                                ts.UI.options.demo.$image.removeClass("process");
                                ts.UI.options.demo.$image.css({
                                    "background-image": "url('" + ts.resize(Mode) + "')"
                                });
                            }, Math.max(1, delay));
                            setTimeout(function () {
                                ts.UI.options.demo.$name.delay(300).text(name_1);
                                ts.UI.options.demo.$title.removeClass("process");
                                ts.UI.options.demo.$updHint.removeClass("process");
                            }, Math.max(250, delay));
                            if (Mode.reload)
                                NAVI.reload("newtab");
                        }
                    ]);
                    break;
                case "prepare":
                    $("body").append($("<img>")
                        .addClass("hide")
                        .attr("src", ts.resize(Mode)));
                    break;
                default:
                    console.warn("Unknown action:", action);
            }
        };
        var $listTop, $listBottom, selected, selected, ids, $item;
        for (var _i = 0, Actions_1 = Actions; _i < Actions_1.length; _i++) {
            var action = Actions_1[_i];
            var state_1 = _loop_1(action);
            if (typeof state_1 === "object")
                return state_1.value;
        }
    };
    ;
    wallpapersTags.prototype.resize = function (Mode) {
        Mode.width = parseInt(Mode.width);
        Mode.height = parseInt(Mode.height);
        var target = {
            w: screen.width || 1920,
            h: screen.height || 1080
        };
        var tolerance = 1.5;
        if (Mode.hosting == "pexels"
            &&
                Mode.source.indexOf('static.pexels.com') !== -1
            &&
                Mode.source.indexOf('?') === -1
            &&
                Mode.width > target.w * tolerance && Mode.height > target.h * tolerance) {
            var size = {
                w: target.w,
                h: target.h
            };
            var calc = {
                w: Math.ceil(Mode.width * (target.h / Mode.height)),
                h: Math.ceil(Mode.height * (target.w / Mode.width))
            };
            if (calc.h >= target.h) {
                size.h = calc.h;
            }
            else if (calc.w >= target.w) {
                size.w = calc.w;
            }
            Mode.source = Mode.source + "?w=" + size.w + "&h=" + size.h + "&fit=crop&auto=compress&cs=tinysrgb";
        }
        return Mode.source;
    };
    ;
    wallpapersTags.prototype.refreshBtn = function ($el) {
        var ts = this;
        if (!$el.hasClass("reloading")) {
            $el.addClass("reloading");
            ts.show({ change: true });
            setTimeout(function () {
                $el.removeClass("reloading");
            }, 1.5e3);
        }
    };
    ;
    wallpapersTags.prototype.redraw = function (source) {
        var ts = this;
        if (source == "server") {
            if (ts.tagsServerList) {
                ts.draw("addTags", { $wrap: ts.UI.options.$full, list: ts.tagsServerList, showId: true });
            }
            else {
                ts.once("tagsList");
            }
        }
        else {
            ts.draw("addTags", { $wrap: ts.UI.options.$local, list: ts.tagsLocalList, noSort: true });
        }
    };
    ;
    wallpapersTags.prototype.showNext = function () {
        var ts = this;
        clearTimeout(ts.state.nextTimeout);
        ts.state.nextTimeout = setTimeout(function () {
            ts.show({ demo: true, reload: true });
        }, 750);
    };
    ;
    wallpapersTags.prototype.show = function (Mode) {
        var ts = this;
        if (typeof Mode != "object")
            Mode = [Mode || false];
        if (!ts.status())
            return ts.draw("demo-block");
        var livetime = VAL.get("tags-autoupdate", "int");
        var updated = VAL.get("tags-updated", "int");
        var current = VAL.get("tags-current");
        var next = VAL.get("tags-next");
        var now = Date.now();
        var timeout = updated + livetime;
        Async.chain([
            function (nextHandler) {
                if (current
                    && current != "false"
                    && updated > 0
                    && timeout >= now
                    && !Mode.change) {
                    ts.draw("theme", merge(current, Mode));
                    nextHandler();
                }
                else if (next
                    && next != "false") {
                    VAL.set("tags-next", "");
                    VAL.set("tags-current", next);
                    VAL.set("tags-updated", now);
                    ts.draw("theme", merge(next, Mode));
                    nextHandler();
                }
                else {
                    ts.load(function (nowImage) {
                        ts.draw("theme", merge(nowImage, Mode));
                        VAL.set("tags-updated", now);
                        VAL.set("tags-current", JSON.stringify(nowImage));
                        nextHandler();
                    });
                }
            },
            function (preloadHandler) {
                var nextNow = VAL.get("tags-next");
                if (nextNow) {
                    preloadHandler();
                }
                else {
                    ts.load(function (nextImage) {
                        if (nextImage) {
                            VAL.set("tags-next", JSON.stringify(nextImage));
                            preloadHandler();
                        }
                        else {
                            console.warn(nextImage);
                        }
                    });
                }
            },
            function (endHandler) {
                var updatedNow = VAL.get("tags-updated", "int");
                if (updatedNow == now
                    ||
                        updatedNow - now < 5e3) {
                    var nextNow = VAL.get("tags-next");
                    ts.draw("prepare", nextNow);
                }
            }
        ]);
        ts.buttons();
    };
    ;
    wallpapersTags.prototype.buttons = function () {
        var ts = this;
        ts.UI.newtab.menu.$player.addClass("hide");
        ts.UI.newtab.menu.$next.removeClass("none hide");
    };
    ;
    wallpapersTags.prototype.load = function (cb) {
        var ts = this;
        $.ajax({
            method: "GET",
            url: ts.API.host + ts.API.show,
            data: {
                tags: ts.state.selected.join(','),
                cursor: parseInt(VAL.get("tags-cursor")) || 0,
                mode: VAL.get("tags-wallpapers"),
                synonyms: VAL.get("tags-synonyms")
            }
        })
            .done(function (response) {
            var response = JSON.parse(response);
            if (response.error == 0) {
                if (VAL.get("tags-wallpapers") == "on")
                    VAL.set("tags-cursor", 1 + (parseInt(VAL.get("tags-cursor")) || 0));
                cb(response.body[0]);
            }
            else {
                console.warn(response);
            }
        })
            .fail(function (ex) {
            console.warn(ex);
        });
    };
    ;
    wallpapersTags.prototype.check = function ($el, tagType) {
        var ts = this;
        var $div = $el.parents(".tag-item");
        var tagsIds = String($el.attr("tagId"));
        if (tagsIds.indexOf(',') !== -1)
            tagsIds = tagsIds.split(',');
        else
            tagsIds = [String(tagsIds)];
        if (!ts.state.selected || !String(ts.state.selected) || ts.state.selected.length === 0) {
            ts.setStatus('random', true);
        }
        if ($el.prop("checked")) {
            $div.addClass("selected");
            for (var _i = 0, tagsIds_1 = tagsIds; _i < tagsIds_1.length; _i++) {
                var tag = tagsIds_1[_i];
                ts.state.selected.push(String(tag));
            }
        }
        else {
            $div.removeClass("selected");
            for (var _a = 0, tagsIds_2 = tagsIds; _a < tagsIds_2.length; _a++) {
                var tag = tagsIds_2[_a];
                var index = ts.state.selected.indexOf(String(tag));
                if (index !== -1) {
                    delete ts.state.selected[index];
                }
            }
        }
        var selected = [];
        for (var _b = 0, _c = ts.state.selected; _b < _c.length; _b++) {
            var id = _c[_b];
            if (id)
                selected.push(id);
        }
        ts.state.selected = selected;
        localStorage.setItem("tags-selected", selected.join(','));
        localStorage.removeItem("tags-queue");
        ts.draw("mode");
        ts.clear();
        if (typeof NAVI == "object") {
            NAVI.markSelected();
        }
        ts.showNext();
    };
    ;
    wallpapersTags.prototype.clear = function () {
        VAL.set("tags-current", "");
        VAL.set("tags-next", "");
        VAL.set("tags-updated", 0);
        VAL.set("tags-cursor", 0);
    };
    ;
    wallpapersTags.prototype.tagsList = function () {
        var ts = this;
        $.ajax({
            method: "GET",
            url: ts.API.host + ts.API.list,
            data: { gallery: 'photo' }
        })
            .done(function (list) {
            var list = JSON.parse(list);
            if (list.error == 0) {
                ts.tagsServerList = list.body;
                ts.draw("addTags", { $wrap: ts.UI.options.$full, list: list.body, showId: true });
            }
            else {
                console.warn(list);
            }
        })
            .fail(function (ex) {
            console.warn(ex);
        });
    };
    ;
    wallpapersTags.prototype.activeNote = function () {
        var ts = this;
        if (ts.status() !== false) {
            $.jGrowl(translate("photo_turned_on_note"), { "life": 7000 });
        }
    };
    ;
    wallpapersTags.prototype.GA = function (action, label, value) {
        sendToGoogleAnaliticMP(function () {
            gamp('send', 'event', 'tags', action, label, value);
        });
    };
    ;
    wallpapersTags.prototype.once = function (Actions) {
        if (typeof Actions != "object")
            Actions = [Actions || false];
        for (var _i = 0, Actions_2 = Actions; _i < Actions_2.length; _i++) {
            var action = Actions_2[_i];
            if (this.ONCE.indexOf(action) !== -1)
                continue;
            else
                this.ONCE.push(action);
            switch (action) {
                case "init":
                    this.listeners();
                    this.draw("init");
                    break;
                case "tagsList":
                    this.tagsList();
                    break;
            }
        }
    };
    ;
    return wallpapersTags;
}());
$(function () {
    BRW_langLoaded(function () {
        TAGS = new wallpapersTags();
    });
});
//# sourceMappingURL=tags.js.map
localStorage.setItem("flixel-themes-current-page", "0");
var $, NAVI = false, onLoadNavi = [], UPDListener = true;
var VAL, Size, BRW_langLoaded, translate, autoTranslate, extensionGetUrl, openUrlInNewTab, openUrlInCurrentTab, openUrlInBackgroundTab, onlyUnique, BRW_sendMessage, redrawElements, getSettingsBackgroundTabId, getThemesSortType, getLiveThemesSortType, getImagesSortType, updateAvailableThemesListOnPageLoad, updateAvailableThemesListFavorites, setVisibleElementsBySortType, getRandomThemesDisplay, sendToGoogleAnaliticMP, gamp;
var optionsNavi = (function () {
    function optionsNavi() {
        this.ONCE = [];
        this.WRAP = {
            $navi: $("#tree-navi-left"),
            $head: $("#tree-navi-head"),
            $body: $("#tree-navi-body")
        };
        this.state = {
            loaded: {
                head: false,
                navi: false,
                upper: false,
                sections: false
            },
            page: {
                main: String(document.location.pathname)
                    .split('/').pop()
                    .split('\\').pop()
                    .split('.').shift(),
                sub: String(document.location.hash).replace('#', '').split('?').shift(),
                tab: document.location.hash.indexOf('?tabs=') != -1 ? document.location.hash.replace('#', '').split('?tabs=').pop().split('&').shift().split(',') : []
            },
            active: {
                group: {},
                single: []
            },
            checkExists: [],
            lastSort: 0,
            pending: {}
        };
    }
    ;
    optionsNavi.prototype.htmlLoaded = function (tmpl) {
        var prm = true;
        this.state.loaded[tmpl] = true;
        for (var k in this.state.loaded)
            if (this.state.loaded[k] === false) {
                prm = false;
                break;
            }
        if (prm) {
            this.once(["init", "onLoad"]);
        }
    };
    ;
    optionsNavi.prototype.legacy = function () {
        var ts = this;
        getRandomThemesDisplay();
        if (localStorage.getItem("background-parallax-display") == "1") {
            localStorage.setItem("background-parallax-show-settings", "1");
        }
        if (localStorage.getItem("background-parallax-show-settings") == "1") {
            ts.UI.navi.$section.filter("[nav=navi-settings-parallax]").removeClass("hide");
        }
    };
    ;
    optionsNavi.prototype.getUi = function () {
        var _this = this;
        var ts = this;
        ts.UI = {
            navi: {
                $wrap: ts.WRAP.$navi,
                $section: ts.WRAP.$navi.find(".navi-item"),
                $sort: ts.WRAP.$navi.find(".sort-navi")
            },
            body: {
                $links: $("[nav]"),
                $block: ts.WRAP.$body.find(".navi-page-block"),
                $label: ts.WRAP.$body.find(".navi-tabs-labels li"),
                $tabs: ts.WRAP.$body.find(".navi-tab"),
                $memorize: ts.WRAP.$body.find("[memorize]"),
                $controls: ts.WRAP.$body.find("input, textarea, select"),
                $watchers: ts.WRAP.$body.find("[watch]"),
                $media: ts.WRAP.$body.find("#navi-theme-play"),
                $bgName: ts.WRAP.$body.find(".current-bg-name"),
                $bgAuthor: ts.WRAP.$body.find(".current-bg-author"),
                $bgType: ts.WRAP.$body.find("#bg-type-list > .sort-item"),
                $bgTypeCheck: ts.WRAP.$body.find("#bg-type-list > .sort-item .navi-label [type=checkbox]"),
                $conditions: ts.WRAP.$body.find(".navi-conditions"),
                $mark: ts.WRAP.$body.find("[mark]"),
                $installTheme: ts.WRAP.$body.find("[mark]"),
                $variable: ts.WRAP.$body.find("[variable]"),
                $markSelected: ts.WRAP.$body.find(".mark-selected"),
                $reloadNewtab: ts.WRAP.$body.find(".reload-newtab"),
                $proOptions: ts.WRAP.$body.find(".pro-option")
            },
            active: {
                $group: ts.WRAP.$body.find("[option-group]"),
                $single: ts.WRAP.$body.find("[option-single]")
            },
            common: {
                $animate: $(".animate-waiting"),
                $links: $(".navi-link, .navi-block-link"),
                $exit: $(".navi-exit"),
                $fixed: $(".scroll-fixed")
            },
            any: {
                $wallpapers: $("#available-image-themes-container"),
                $tagsRadio: $("#tags-radio-wrap"),
                $tagsFull: ts.WRAP.$body.find("[for=walpapers-tags-full]"),
                $tagsDemo: ts.WRAP.$body.find("#walpapers-demo")
            },
            sets: {
                $favorites: ts.WRAP.$body.find("[name=randomize-favorites]")
            }
        };
        setTimeout(function () {
            ts.UI.body.$controls.addClass("animate");
            ts.UI.body.$watchers.addClass("animate");
            ts.UI.common.$animate.removeClass("animate-waiting").addClass("animate");
        }, 500);
        ts.UI.active.$group.each(function (N, el) {
            var groupName = $(el).attr("option-group");
            if (!_this.state.active.group[groupName])
                _this.state.active.group[groupName] = [];
            _this.state.active.group[groupName].push($(el).attr("id"));
        });
        ts.UI.active.$single.each(function (N, el) {
            _this.state.active.single.push($(el).attr("option-single"));
        });
        this.state.active.single = this.state.active.single.filter(onlyUnique);
    };
    ;
    optionsNavi.prototype.listeners = function () {
        var ts = this;
        ts.UI.navi.$section.unbind("click").on("click", function (event) {
            ts.setNavi($(event.currentTarget), { ctrlKey: event.ctrlKey, shiftKey: event.shiftKey });
        });
        ts.UI.common.$links.unbind("click").on("click", function (event) {
            var href = $(event.currentTarget).attr("href");
            if (href) {
                event.preventDefault();
                ts.openUrl(href, { ctrlKey: true, shiftKey: event.shiftKey });
            }
            else {
            }
        });
        ts.UI.body.$links.unbind("click").on("click", function (event) {
            ts.setNavi($(event.currentTarget), { ctrlKey: event.ctrlKey, shiftKey: event.shiftKey });
        });
        ts.UI.body.$label.unbind("click").on("click", function (event) {
            ts.setTab($(event.currentTarget), { ctrlKey: event.ctrlKey, shiftKey: event.shiftKey });
        });
        this.UI.body.$controls.on("change", function (event) {
            ts.change($(event.currentTarget));
        });
        this.UI.active.$group.on("change", function (event) {
            VAL.set($(event.currentTarget), { group: $(event.currentTarget).attr("option-group") });
        });
        this.UI.active.$single.on("change", function (event) {
            VAL.set($(event.currentTarget), { name: $(event.currentTarget).attr("option-single") });
        });
        this.UI.common.$exit.on("click", function (event) {
            event.preventDefault();
            ts.openUrl(extensionGetUrl("/pages/newtab/newtab.html"), { ctrlKey: event.ctrlKey, shiftKey: event.shiftKey });
        });
        this.UI.body.$proOptions.on("click", ".pro-curtain", function (event) {
            event.preventDefault();
            AUTH.isPremium("discovered");
        });
        this.WRAP.$body.on("click", ".available-install-live-theme", function (event) {
            ts.installLiveTheme($(event.currentTarget));
        });
        $(window).on("focus", function () {
            ts.refreshSortType();
        });
        $(document).on("scroll", function () {
            ts.draw("scroll");
        });
        ts.UI.body.$markSelected.on("change", function (event) {
            setTimeout(function () {
                ts.markSelected();
                ts.reload("newtab");
            }, 150);
        });
        ts.UI.body.$reloadNewtab.on("change", function (event) {
            setTimeout(function () {
                ts.reload("newtab");
            }, 150);
        });
    };
    ;
    optionsNavi.prototype.openUrl = function (URL, Mode) {
        if (Mode === void 0) { Mode = false; }
        var ts = this;
        if (typeof Mode != "object")
            Mode = [Mode || false];
        if (!Mode.ctrlKey && !Mode.shiftKey) {
            if (URL.indexOf(document.location.pathname) !== -1) {
                document.location.href = URL;
                ;
            }
            else {
                openUrlInCurrentTab(URL);
            }
        }
        else if (Mode.ctrlKey && !Mode.shiftKey) {
            openUrlInNewTab(URL);
        }
        else if (Mode.shiftKey) {
            openUrlInBackgroundTab(URL);
            if (URL.indexOf("/options.html") != -1) {
                setTimeout(function () {
                }, 500);
            }
        }
    };
    ;
    optionsNavi.prototype.change = function ($el, Mode) {
        if (Mode === void 0) { Mode = false; }
        if (typeof Mode != "object")
            Mode = [Mode || false];
        if ($el.attr('evince'))
            this.draw("evince", { $el: $el });
        if (!Mode.passive) {
            if ($el.attr('mirror'))
                this.draw("mirror", { $el: $el });
            if ($el.attr("variable"))
                VAL.set($el);
            if ($el.attr("reload"))
                this.reload($el.attr("reload"));
        }
    };
    ;
    optionsNavi.prototype.clone = function (obj) {
        return JSON.parse(JSON.stringify(obj));
    };
    ;
    optionsNavi.prototype.setTab = function ($el, Mode) {
        if (Mode === void 0) { Mode = false; }
        var ts = this;
        if (typeof Mode != "object")
            Mode = [Mode || false];
        if (Mode.ctrlKey || Mode.shiftKey) {
            var last_1 = ts.clone(ts.state.page);
            UPDListener = false;
            setTimeout(function () {
                ts.state.page = ts.clone(last_1);
            }, 250);
        }
        else {
            UPDListener = true;
        }
        if (!Mode.passive) {
            if ($el.hasClass("disabled"))
                return false;
            if (!$el || !$el.attr("for"))
                return;
            var tab = $el.attr("for"), $labels = $el.parents(".navi-tabs-labels");
            for (var k = ts.state.page.tab.length - 1; k >= 0; k--) {
                if ($labels.find("[for=" + ts.state.page.tab[k] + "]").length) {
                    ts.state.page.tab.splice(k, 1);
                }
            }
            ts.state.page.tab.push(tab);
            var url = String(document.location.pathname).split('/');
            url.pop();
            if ($el.parents(["memorize"]).length || $el.attr(["memorize"]))
                VAL.set($el, { group: "navi-tabs" });
            this.urlAddTabs(Mode);
        }
        if (!Mode.ctrlKey && !Mode.shiftKey) {
            ts.draw("page", { $el: $el, passive: Mode.passive || false });
        }
        return true;
    };
    ;
    optionsNavi.prototype.setNavi = function ($el, Mode) {
        if ($el === void 0) { $el = false; }
        if (Mode === void 0) { Mode = false; }
        var ts = this;
        if (typeof Mode != "object")
            Mode = [Mode || false];
        if (Mode.ctrlKey || Mode.shiftKey) {
            var last_2 = ts.clone(ts.state.page);
            UPDListener = false;
            setTimeout(function () {
                ts.state.page = ts.clone(last_2);
            }, 250);
        }
        else {
            UPDListener = true;
        }
        if (!$el) {
            if (ts.state.page.sub)
                $el = ts.UI.navi.$section.filter("[nav=" + ts.state.page.sub + "]");
            else {
                $el = ts.UI.navi.$section.filter("[page=" + ts.state.page.main + "]").filter(".selected");
                if (!$el.length) {
                    $el = ts.UI.navi.$section.filter("[page=" + ts.state.page.main + "]").filter("[default=1]");
                }
            }
        }
        var page = $el.attr("page") || "any";
        var target = {
            main: page != "any" ? page : ts.state.page.main,
            sub: $el.attr("nav")
        };
        if ($el.hasClass("passive")) {
            target.sub = $el.parent().find("[default=1]").attr("nav");
        }
        if (target.main != ts.state.page.main) {
            target.url = String(document.location.pathname).split('/');
            target.url.pop();
            target.url = target.url.join("/") + "/" + target.main + ".html";
            if (target.sub)
                target.url += "#" + target.sub;
            if (String(target.url).indexOf("undefined") === -1) {
                ts.openUrl(target.url, Mode);
            }
            else {
                console.warn("Wrong new tab URL", target.url);
                console.trace();
            }
        }
        else {
            VAL.set("navi-section-" + ts.state.page.main, target.sub);
            ts.state.page.main = target.main;
            ts.state.page.sub = target.sub;
            ts.urlAddTabs(Mode);
            if (!Mode.ctrlKey && !Mode.shiftKey) {
                ts.draw("page", { $el: $el });
            }
        }
    };
    ;
    optionsNavi.prototype.urlAddTabs = function (Mode) {
        if (Mode === void 0) { Mode = false; }
        var ts = this;
        if (typeof Mode != "object")
            Mode = [Mode || false];
        var $blockTabs = ts.UI.body.$block.filter("[block=" + ts.state.page.sub + "]").find(".navi-tabs-labels > [for]");
        var targetURL = document.location.pathname;
        if (ts.state.page.sub) {
            targetURL += "#" + ts.state.page.sub;
            if ($blockTabs.length) {
                for (var i = (ts.state.page.tab.length - 1); i >= 0; i--) {
                    if ($blockTabs.filter("[for=" + ts.state.page.tab[i] + "]").length === 0) {
                        ts.state.page.tab.splice(i, 1);
                    }
                }
                if (ts.state.page.tab.length) {
                    targetURL += '?tabs=' + ts.state.page.tab.filter(onlyUnique).sort().join(',');
                }
            }
        }
        else {
        }
        if (targetURL.indexOf("undefined") === -1) {
            ts.openUrl(targetURL, Mode);
        }
        else {
            console.warn("Wrong URL", targetURL);
            console.trace();
        }
    };
    ;
    optionsNavi.prototype.applyVal = function ($el, val, Mode) {
        if (Mode === void 0) { Mode = false; }
        var ts = this;
        if (typeof Mode != "object")
            Mode = [Mode || false];
        if (typeof $el === "string")
            $el = ts.UI.body.$controls.filter("#" + $el.replace('#', '') + ", [name=" + $el.replace('#', '') + "]");
        if ($el.length) {
            var tag = $el.attr("type");
            if (tag == "checkbox")
                val = $el.prop("checked", val ? true : false);
            else if (tag == "radio")
                val = $el.filter("[value=" + val + "]").prop("checked", true);
            else if (tag == "select")
                val = $el.val(val);
            else
                val = $el.val(val);
            ts.change($el, Mode);
        }
        else {
        }
    };
    ;
    optionsNavi.prototype.draw = function (Actions, Mode) {
        if (Mode === void 0) { Mode = false; }
        var ts = this;
        if (typeof Actions != "object")
            Actions = [Actions || false];
        if (typeof Mode != "object")
            Mode = [Mode || false];
        var _loop_1 = function (action) {
            switch (action) {
                case "init":
                    for (var groupName in ts.state.active.group) {
                        ts.draw("group", { name: groupName });
                    }
                    for (var _i = 0, _a = ts.state.active.single; _i < _a.length; _i++) {
                        var singleName = _a[_i];
                        ts.draw("single", { name: singleName });
                    }
                    if (ts.state.page.main == "options") {
                        var Tabs = VAL.get("navi-tabs", "group");
                        for (var tab in Tabs) {
                            var $tab = ts.UI.body.$memorize.filter("[memorize=" + tab + "]").find("[for=" + Tabs[tab] + "]");
                            if ($tab.length)
                                ts.setTab($tab, { passive: true });
                        }
                        ts.reloadTheme();
                    }
                    if (true) {
                        var Names_1 = [], Navs_1 = {};
                        ts.UI.navi.$sort.each(function (N, item) {
                            Names_1.push($(item).text());
                            Navs_1[$(item).text()] = $(item).attr("nav");
                        });
                        Names_1.sort();
                        for (var k in Names_1) {
                            ts.UI.navi.$sort.filter("[nav=" + Navs_1[Names_1[k]] + "]").css("order", k);
                        }
                    }
                    ts.UI.body.$variable.each(function (N, item) {
                        var $el = $(item);
                        ts.applyVal($el, VAL.get($el.attr("name")), { passive: true });
                    });
                    setTimeout(function () {
                        ts.draw("fixed");
                    }, 100);
                    ts.draw("special");
                    break;
                case "special":
                    if (VAL.get("show-tags")) {
                        ts.UI.any.$tagsFull.removeClass("hide");
                    }
                    break;
                case "scroll":
                    var scroll_1 = $(document).scrollTop();
                    ts.UI.common.$fixed.each(function (N, item) {
                        var $fixed = $(item);
                        var activate = parseInt($fixed.attr("activate"));
                        if (activate) {
                            if (scroll_1 >= activate)
                                $fixed.addClass("fixed");
                            else
                                $fixed.removeClass("fixed");
                        }
                    });
                    break;
                case "fixed":
                    var $set = void 0;
                    if (Mode.$wrap && Mode.$wrap.length)
                        $set = Mode.$wrap.find(".scroll-fixed");
                    else
                        $set = ts.UI.common.$fixed;
                    $set.each(function (N, item) {
                        var $fixed = $(item);
                        var $inner = $fixed.find(".scroll-inner");
                        var offset = $fixed.offset();
                        var width = $fixed.width();
                        var height = parseInt($fixed.height());
                        if (width && height && !$fixed.attr("activate")) {
                            $fixed.css({
                                height: height
                            })
                                .attr("activate", offset.top);
                            $inner.css({
                                left: offset.left
                            });
                        }
                    });
                    break;
                case "group":
                    var vals_1 = VAL.get(Mode.name, "group");
                    ts.UI.active.$group.filter("[option-group='" + Mode.name + "']").each(function (N, el) {
                        var name = $(el).attr("id");
                        ts.applyVal($(el), vals_1[name]);
                    });
                    break;
                case "single":
                    var val = VAL.get(Mode.name);
                    ts.applyVal(ts.UI.active.$single.filter("[option-single='" + Mode.name + "']"), val, { passive: true });
                    break;
                case "evince":
                    var tagName = String(Mode.$el[0].tagName).toLowerCase();
                    var $watchers = $.fn.add.call(ts.UI.body.$block.find("[watch='" + Mode.$el.attr("evince") + "']"), ts.UI.navi.$section.filter("[watch='" + Mode.$el.attr("evince") + "']"));
                    $watchers.removeClass("disabled").removeClass("enabled");
                    if (Mode.$el.attr("type") == "checkbox") {
                        if (Mode.$el.prop("checked")) {
                            $watchers.filter(":not(.watch-invert)").addClass("enabled");
                            $watchers.filter(".watch-invert").addClass("disabled");
                        }
                        else {
                            $watchers.filter(":not(.watch-invert)").addClass("disabled");
                            $watchers.filter(".watch-invert").addClass("enabled");
                        }
                    }
                    else if (tagName == "select") {
                        var val_1 = Mode.$el.val();
                        $watchers.addClass("disabled");
                        $watchers.filter(".w_" + val_1).removeClass("disabled").addClass("enabled");
                    }
                    break;
                case "page":
                    ts.UI.navi.$section.removeClass("active");
                    ts.UI.body.$block.removeClass("active");
                    if (ts.state.page.sub) {
                        ts.UI.navi.$section.filter("[nav=" + ts.state.page.sub + "]").addClass("active");
                        ts.UI.body.$links.filter("[nav=" + ts.state.page.sub + "]").addClass("active");
                        var $currentBlock_1 = ts.UI.body.$block.filter("[block=" + ts.state.page.sub + "]");
                        $currentBlock_1.addClass("active");
                        $currentBlock_1.find("[setId]").each(function (N, target) {
                            var setId = $(target).attr("setId");
                            if ($(target).attr("id") != setId) {
                                $("#" + setId).attr("id", "");
                                $(target).attr("id", setId);
                            }
                        });
                        $currentBlock_1.find(".navi-active-clean").each(function (N, target) {
                            var tagName = String($(target)[0].tagName).toLowerCase();
                            if (tagName == "input") {
                                $(target).val("");
                            }
                            else {
                                $(target).html("");
                            }
                        });
                        $currentBlock_1.find(".navi-tabs-labels").each(function (N, labels) {
                            var curTab = false;
                            var $li = $(labels).find("li");
                            for (var _i = 0, _a = ts.state.page.tab; _i < _a.length; _i++) {
                                var tab = _a[_i];
                                var $tab = $li.filter("[for=" + tab + "]");
                                if ($tab.length) {
                                    curTab = $tab.attr("for");
                                    break;
                                }
                            }
                            if (!curTab) {
                                var filter = ".active";
                                if (!$li.filter(filter).length)
                                    filter = ":eq(0)";
                                curTab = $li.filter(filter).attr("for");
                                if (ts.state.page.tab.indexOf(curTab) === -1)
                                    ts.state.page.tab.push(curTab);
                            }
                            $li.removeClass("active").filter("[for=" + curTab + "]").addClass("active");
                            var $naviBlock = $li.parents('.navi-block');
                            if (ts.state.page.main == "options") {
                                $naviBlock
                                    .attr("active", curTab)
                                    .css({
                                    "min-height": ($(window).height() - $naviBlock.offset().top - 60)
                                });
                            }
                            $naviBlock.find(".navi-tab")
                                .removeClass("active")
                                .filter("[tab=" + curTab + "]")
                                .addClass("active");
                        });
                        ts.draw("player");
                        ts.draw("fixed", $currentBlock_1);
                        ts.draw("conditions", { $el: $currentBlock_1 });
                        setTimeout(function () {
                            ts.draw("conditions", { $el: $currentBlock_1 });
                        }, 500);
                    }
                    if (!Mode.passive) {
                        ts.setSortType();
                        if (String(ts.state.page.sub) == "navi-bg-favorites-and-downloaded")
                            ts.draw("downloaded-dummy");
                    }
                    break;
                case "conditions":
                    var indent = $(window).height() - Mode.$el.offset().top - Mode.$el.height();
                    if (indent > 60)
                        ts.UI.body.$conditions.addClass('fixed');
                    else
                        ts.UI.body.$conditions.removeClass('fixed');
                    break;
                case "counters":
                    if (!Mode.$wrap)
                        Mode.$wrap = ts.UI.body.$block.filter(".active");
                    var counts_1 = {};
                    Mode.$wrap.find("[counter]").each(function (N, el) {
                        var $el = $(el);
                        var $label = $el.parents("[for]:eq(0)");
                        var label = $label.attr("for");
                        var $tab = $label.parents(".navi-block").find("[tab=" + label + "]");
                        if (!Mode.ignore
                            ||
                                String($tab.attr("tab")).indexOf(String(Mode.ignore)) === -1) {
                            var count = $tab.find($el.attr("counter")).length;
                            if (count === 0) {
                                $tab.addClass("hide-tiles");
                                $tab.find(".navi-null-message").addClass("active");
                                $tab.find(".navi-null-hide").addClass("hide");
                            }
                            else {
                                $tab.removeClass("hide-tiles");
                                $tab.find(".navi-null-message").removeClass("active");
                                $tab.find(".navi-null-hide").removeClass("hide");
                            }
                            counts_1[label] = count;
                            $el.text(" (" + count + ")");
                        }
                    });
                    var section = false;
                    if (ts.isTabActive("favorites"))
                        section = "favorites";
                    else if (ts.isTabActive("downloaded"))
                        section = "downloaded";
                    if ((section == "favorites" || section == "downloaded")
                        &&
                            (!Mode.ignore || Mode.ignore !== section)) {
                        var option = "randomize-" + section;
                        var val_2 = VAL.get(option);
                        var $controls = ts.UI.body.$controls.filter("[name=" + option + "]");
                        if (counts_1[section + "-static-wallpapers"] > 0) {
                            $controls.filter("[value=image]").attr("disabled", false).parent().attr("title", "");
                        }
                        else {
                            if (val_2 == "images")
                                VAL.set(option, { value: "off", apply: true });
                            $controls.filter("[value=image]").attr("disabled", "disabled")
                                .parent().attr("title", translate("navi_" + section + "_disabled").replace("[name]", translate("navi_singular_bg_static")));
                        }
                        if (counts_1[section + "-live-backgrounds"] > 0 || counts_1[section + "-live-themes"]) {
                            $controls.filter("[value=both]").attr("disabled", false).parent().attr("title", "");
                            $controls.filter("[value=video]").attr("disabled", false).parent().attr("title", "");
                        }
                        else {
                            if (val_2 == "video")
                                VAL.set(option, { value: "off", apply: true });
                            $controls.filter("[value=video]").attr("disabled", "disabled")
                                .parent().attr("title", translate("navi_" + section + "_disabled").replace("[name]", translate("navi_singular_bg_live")));
                            if (counts_1[section + "-static-wallpapers"] == 0) {
                                if (val_2 == "both")
                                    VAL.set(option, { value: "off", apply: true });
                                $controls.filter("[value=both]").attr("disabled", "disabled")
                                    .parent().attr("title", translate("navi_" + section + "_disabled").replace("[name]", translate("navi_singular_bg_any")));
                            }
                        }
                    }
                    ts.draw("inactives", Mode);
                    break;
                case "inactives":
                    if (ts.isTabActive("favorites")) {
                        var len = Object.keys(getFavoriteThemesObject()).length;
                        if (!len) {
                            ts.UI.sets.$favorites.attr("disabled", "disabled");
                            VAL.set("randomize-favorites", "off");
                        }
                        else {
                            ts.UI.sets.$favorites.removeAttr("disabled");
                        }
                    }
                    break;
                case "downloaded-dummy":
                    var downloaded = JSON.parse(localStorage.getItem("installed-themes") || "[]");
                    var liveThemesIDs = JSON.parse(localStorage.getItem("live-themes-ids") || "[]");
                    var content = { $video: [], $image: [], $theme: [] };
                    for (var themeId in downloaded) {
                        var theme = downloaded[themeId];
                        if (!Size(theme.bgVideoPath)) {
                            content.$image.push($("<li class='dummy'>" + theme.title + "</li>"));
                        }
                        else {
                            content.$video.push($("<li class='dummy'>" + theme.title + "</li>"));
                            if (theme.chromeThemeUrl || liveThemesIDs.indexOf(theme.id) !== -1) {
                                content.$theme.push($("<li class='dummy'>" + theme.title + "</li>"));
                            }
                        }
                    }
                    ts.UI.body.$tabs.filter("[tab=downloaded-live-backgrounds]").find(".dummy-content").html(content.$video);
                    ts.UI.body.$tabs.filter("[tab=downloaded-static-wallpapers]").find(".dummy-content").html(content.$image);
                    ts.UI.body.$tabs.filter("[tab=downloaded-live-themes]").find(".dummy-content").html(content.$theme);
                    ts.draw("counters", { ignore: "favorites" });
                    break;
                case "video":
                    if (ts.UI.body.$media.find("video").length &&
                        String(ts.UI.body.$media.find("source").attr("src")).indexOf(Mode.mediaFile) !== -1) {
                        return { value: void 0 };
                    }
                    ts.UI.body.$media
                        .removeClass("media-image")
                        .html("")
                        .append($("<video>")
                        .attr("loop", "loop")
                        .attr("muted", "muted")
                        .attr("autoplay", "autoplay")
                        .attr("src", Mode.mediaFile)
                        .append($("<source>")
                        .attr("type", "video/" + Mode.mediaFile.split('?').shift().split('.').pop())
                        .attr("src", Mode.mediaFile)));
                    ts.draw("bg-name", { fileName: String(localStorage.getItem("background-video-file")) });
                    ts.draw("player");
                    break;
                case "player":
                    var $video = ts.UI.body.$media.find("video");
                    if ($video.length) {
                        if (!Mode.control)
                            Mode.control = ts.state.page.sub == "navi-bg-active" ? "play" : "pause";
                        var video = $video[0];
                        if (Mode.control == "play") {
                            video.play();
                        }
                        else {
                            video.pause();
                        }
                    }
                    break;
                case "image":
                    if (String(ts.UI.body.$media.css("background-image")).indexOf(Mode.mediaFile) !== -1)
                        return { value: void 0 };
                    ts.UI.body.$media
                        .addClass("media-image")
                        .html("")
                        .css("background-image", "url(" + Mode.mediaFile);
                    ts.draw("bg-name", { fileName: String(localStorage.getItem("background-image-file")) });
                    break;
                case "bg-name":
                    var themes = JSON.parse(localStorage.getItem("installed-themes") || "[]");
                    for (var key in themes) {
                        if (Mode.fileName.indexOf(key) !== -1) {
                            ts.UI.body.$bgName.text(themes[key].title);
                            ts.UI.body.$bgAuthor.html("");
                            if (themes[key].author_url) {
                                ts.UI.body.$bgAuthor
                                    .append($("<a>")
                                    .attr("target", "_blank")
                                    .attr("href", themes[key].author_url)
                                    .text(themes[key].author.replace('https://', '').replace('http://', '').replace('www.', '')));
                            }
                            else if (themes[key].author) {
                                ts.UI.body.$bgAuthor.text(themes[key].author.replace('https://', '').replace('http://', '').replace('www.', ''));
                            }
                            break;
                        }
                    }
                    break;
                case "mirror":
                    break;
                case "exists":
                    ts.state.checkExists = [];
                    if (ts.state.page.sub == "navi-bg-favorites-and-downloaded") {
                        var $currentBlock = ts.UI.body.$block.filter("[block=" + ts.state.page.sub + "]");
                        var $themes = $currentBlock.find(".av-content-container:not(.av-restore-default-container)");
                        $themes.each(function (N, el) {
                            ts.state.checkExists.push($(el).find("[data-content-theme]:eq(0)").attr("data-content-theme"));
                        });
                        ts.themeFilesExists("start");
                    }
                    break;
                case "pro":
                    waitAuth(function (useAuth) {
                        if (isAuthEnable() && !AUTH.isPremium()) {
                            ts.UI.body.$proOptions.find('.desc').each(function (N, el) {
                                var txt = $(el).text();
                                $(el)
                                    .html('')
                                    .append($("<span>").text(txt))
                                    .append($("<span>").addClass('sup-icon pro-icon'));
                            });
                            ts.UI.body.$proOptions.find('input, select').attr("disabled", "disabled");
                            ts.UI.body.$proOptions.append($("<span>").addClass('pro-curtain'));
                        }
                        else {
                            ts.UI.body.$proOptions.find('.pro-curtain, .pro-icon').remove();
                            ts.UI.body.$proOptions.find('input, select').removeAttr("disabled");
                        }
                    });
                    break;
                default:
                    console.warn("Unknown action:", action);
            }
        };
        for (var _i = 0, Actions_1 = Actions; _i < Actions_1.length; _i++) {
            var action = Actions_1[_i];
            var state_1 = _loop_1(action);
            if (typeof state_1 === "object")
                return state_1.value;
        }
    };
    ;
    optionsNavi.prototype.themeFilesExists = function (message) {
        var ts = this;
        if (message != "start") {
            if (message.themeId) {
                var index = ts.state.checkExists.indexOf(message.themeId);
                if (index > -1)
                    ts.state.checkExists.splice(index, 1);
                var $currentBlock = ts.UI.body.$block.filter("[block=" + ts.state.page.sub + "]");
                var $theme = $currentBlock.find("[data-content-theme='" + message.themeId + "']").parents(".av-content-container");
                if ($theme.length) {
                    if (message.exists)
                        $theme.addClass("is-exists");
                    else {
                        $theme.addClass("not-exists");
                        $theme.find(".av-content-footer").append($("<i>")
                            .addClass("need-to-reload")
                            .addClass("fa fa-exclamation-triangle")
                            .attr("area-hidden", "true")
                            .attr("title", translate("theme_files_lost")));
                    }
                }
            }
            else {
                console.warn("Unknown themeId", message);
                return;
            }
        }
        if (ts.state.checkExists.length) {
            BRW_sendMessage({
                command: "isThemeExists",
                themeId: ts.state.checkExists[0]
            });
        }
    };
    ;
    optionsNavi.prototype.refreshSortType = function () {
        var ts = this;
        var sortTime = parseInt(localStorage.getItem("navi-sort-time")) || 0;
        if (sortTime != ts.state.lastSort) {
            ts.setSortType();
        }
    };
    ;
    optionsNavi.prototype.isTabActive = function (name) {
        var ts = this;
        if (!name) {
            console.warn("Required Tab Name");
            console.trace();
            return false;
        }
        else if ((name == "favorites"
            &&
                ts.state.page.sub === "navi-bg-favorites-and-downloaded"
            &&
                ts.state.page.tab.indexOf("favorites-live-backgrounds") !== -1)
            ||
                (name == "downloaded"
                    &&
                        ts.state.page.sub === "navi-bg-favorites-and-downloaded"
                    &&
                        ts.state.page.tab.indexOf("downloaded-live-backgrounds") !== -1)) {
            return true;
        }
        else {
            return false;
        }
    };
    ;
    optionsNavi.prototype.setSortType = function ($el) {
        if ($el === void 0) { $el = false; }
        var ts = this;
        var needUpdate = false, settingsTab = false, liveBgSortType = false, imagesSortType = false, liveThemesSortType = false;
        ts.state.lastSort = Date.now();
        localStorage.setItem("navi-sort-time", ts.state.lastSort);
        if (ts.isTabActive("favorites")) {
            needUpdate = true;
            VAL.set("show-favorites", 1);
            if (needUpdate)
                updateAvailableThemesListFavorites();
        }
        else {
            VAL.set("show-favorites", 1);
            localStorage.setItem("flixel-themes-current-page", "0");
            if (ts.state.page.sub === "navi-bg-live-backgrounds") {
                settingsTab = 0;
                liveBgSortType = 2;
                if (ts.state.page.tab.indexOf("live-bg-new") !== -1)
                    liveBgSortType = 0;
                else if (ts.state.page.tab.indexOf("live-bg-popular") !== -1)
                    liveBgSortType = 1;
                else if (ts.state.page.tab.indexOf("live-bg-featured") !== -1)
                    liveBgSortType = 2;
                else if (ts.state.page.tab.indexOf("live-bg-search") !== -1)
                    liveBgSortType = 4;
                needUpdate = true;
                try {
                    TAGS.draw("mode");
                }
                catch (ex) {
                    console.info(ex);
                }
            }
            else if (ts.state.page.sub === "navi-bg-wallpapers") {
                settingsTab = 2;
                if (ts.state.page.tab.indexOf("walpapers-tags") !== -1
                    ||
                        ts.state.page.tab.indexOf("walpapers-tags-full") !== -1) {
                    ts.UI.any.$wallpapers.addClass("hide");
                    ts.UI.any.$tagsRadio.removeClass("hide");
                    ts.UI.any.$tagsDemo.removeClass("hide");
                    tagsOnLoad(function () {
                        if (ts.state.page.tab.indexOf("walpapers-tags-full") !== -1) {
                            ts.UI.any.$tagsRadio.find("[for=tags-wallpapers-on]").removeClass("hide");
                            ts.UI.any.$tagsRadio.find("[for=tags-wallpapers-random] span").text(translate("randomize"));
                            TAGS.redraw("server");
                        }
                        else {
                            ts.UI.any.$tagsRadio.find("[for=tags-wallpapers-on]").addClass("hide");
                            ts.UI.any.$tagsRadio.find("[for=tags-wallpapers-random] span").text(translate("enabled"));
                            TAGS.redraw("local");
                        }
                        TAGS.show({ demo: true });
                    });
                }
                else {
                    imagesSortType = 0;
                    ts.UI.any.$wallpapers.removeClass("hide");
                    ts.UI.any.$tagsRadio.addClass("hide");
                    ts.UI.any.$tagsDemo.addClass("hide");
                    if (ts.state.page.tab.indexOf("walpapers-search") !== -1) {
                        console.info("walpapers-search");
                    }
                    else {
                        if (ts.state.page.tab.indexOf("walpapers-gallery") !== -1)
                            imagesSortType = 0;
                        else if (ts.state.page.tab.indexOf("walpapers-custom") !== -1)
                            imagesSortType = 1;
                        needUpdate = true;
                    }
                }
            }
            else if (ts.state.page.sub === "navi-bg-live-themes") {
                settingsTab = 3;
                liveThemesSortType = 0;
                if (ts.state.page.tab.indexOf("live-themes-newest") !== -1)
                    liveThemesSortType = 0;
                else if (ts.state.page.tab.indexOf("live-themes-popular") !== -1)
                    liveThemesSortType = 1;
                needUpdate = true;
            }
            if (ts.isTabActive("downloaded")) {
                liveBgSortType = 3;
                imagesSortType = 0;
                liveThemesSortType = 0;
                if (ts.state.page.tab.indexOf("downloaded-live-backgrounds") !== -1) {
                    settingsTab = 0;
                }
                else if (ts.state.page.tab.indexOf("downloaded-static-wallpapers") !== -1) {
                    settingsTab = 2;
                }
                else if (ts.state.page.tab.indexOf("downloaded-live-themes") !== -1) {
                    settingsTab = 3;
                }
                needUpdate = true;
                VAL.set("show-downloaded", 1);
            }
            else {
                VAL.set("show-downloaded", 0);
            }
            if (settingsTab !== false
                &&
                    settingsTab !== getSettingsBackgroundTabId()) {
                BRW_sendMessage({
                    command: "changeSettingsBackgroundCurrentTab",
                    tabid: settingsTab,
                    noupd: ((liveBgSortType !== false && liveBgSortType !== getThemesSortType())
                        ||
                            (imagesSortType !== false && imagesSortType !== getImagesSortType())
                        ||
                            (liveThemesSortType !== false && liveThemesSortType !== getLiveThemesSortType())) ? true : false
                });
                redrawElements();
                needUpdate = false;
            }
            if (liveBgSortType !== false && liveBgSortType !== getThemesSortType()) {
                BRW_sendMessage({
                    command: "setThemesSortType",
                    val: liveBgSortType
                });
                needUpdate = false;
            }
            if (imagesSortType !== false && imagesSortType !== getImagesSortType()) {
                BRW_sendMessage({
                    command: "setImagesSortType",
                    val: imagesSortType
                });
                needUpdate = false;
            }
            if (liveThemesSortType !== false && liveThemesSortType !== getLiveThemesSortType()) {
                BRW_sendMessage({
                    command: "setLiveThemesSortType",
                    val: liveThemesSortType
                });
                needUpdate = false;
            }
            if (needUpdate) {
                updateAvailableThemesListOnPageLoad();
            }
            setTimeout(function () {
                if (typeof setVisibleElementsBySortType == "function")
                    setVisibleElementsBySortType();
            }, 10);
        }
    };
    ;
    optionsNavi.prototype.markSelected = function () {
        var ts = this, filter, value;
        ts.UI.navi.$section.removeClass("selected");
        ts.UI.body.$mark.removeClass("selected");
        ts.UI.body.$bgTypeCheck.attr("disabled", false).siblings("pseudo").attr("title", "");
        if (VAL.get("tags-wallpapers") !== "off" && VAL.get("tags-selected")) {
            filter = "navi-bg-wallpapers";
            value = "tags";
        }
        else if (VAL.get("randomize-favorites") !== "off"
            ||
                VAL.get("randomize-downloaded") !== "off") {
            filter = "navi-bg-favorites-and-downloaded";
            value = "favorites-and-downloaded";
        }
        else if (VAL.get("background-image-file")) {
            filter = "navi-bg-wallpapers";
            value = "wallpapers";
        }
        else if (VAL.get("background-video-file")) {
            if (VAL.get("background-video-content-type") == 4) {
                filter = "navi-bg-live-themes";
                value = "live-themes";
            }
            else {
                filter = "navi-bg-live-backgrounds";
                value = "live-backgrounds";
            }
        }
        if (filter) {
            ts.UI.navi.$section.filter("[nav=" + filter + "]").addClass("selected");
            ts.UI.body.$mark.filter("[mark=" + filter + "]").addClass("selected");
            var $check = ts.UI.body.$bgType.filter("[mark=" + filter + "]").find(".navi-label [type=checkbox]");
            if ($check.length) {
                if (!$check.prop("checked"))
                    ts.applyVal($check, 1);
                $check.attr("disabled", "disabled").siblings("pseudo").attr("title", translate("navi_cant_disable_active"));
            }
        }
    };
    ;
    optionsNavi.prototype.installLiveTheme = function ($button) {
        var ts = this;
        var theme, $wrap = $button.parents(".av-content-container");
        if ($wrap.length) {
            theme = $wrap.find("[data-theme]:eq(0)").attr("data-theme");
            ts.GA('webstore', theme, 1);
        }
    };
    ;
    optionsNavi.prototype.GA = function (action, label, value) {
        sendToGoogleAnaliticMP(function () {
            gamp('send', 'event', 'theme', action, label, value);
        });
    };
    ;
    optionsNavi.prototype.reloadTheme = function () {
        var ts = this;
        if (ts.state.page.main != "options") {
            console.warn("Can't reload theme for page", ts.state.page.main);
            console.trace();
            return;
        }
        BRW_sendMessage({ command: "getBackgroundImage" }, function (response) {
            if (typeof response == "object"
                &&
                    (response.video || response.image)) {
                if (response.video)
                    ts.draw("video", { mediaFile: response.video });
                else if (response.image)
                    ts.draw("image", { mediaFile: response.image });
                ts.markSelected();
            }
        });
    };
    ;
    optionsNavi.prototype.once = function (Actions) {
        var _this = this;
        if (typeof Actions != "object")
            Actions = [Actions || false];
        for (var _i = 0, Actions_2 = Actions; _i < Actions_2.length; _i++) {
            var action = Actions_2[_i];
            if (this.ONCE.indexOf(action) !== -1)
                continue;
            switch (action) {
                case "init":
                    this.getUi();
                    this.legacy();
                    this.listeners();
                    this.draw("init");
                    this.draw("pro");
                    this.markSelected();
                    setTimeout(function () {
                        _this.setNavi();
                    }, 50);
                    break;
                case "onLoad":
                    for (var _a = 0, onLoadNavi_1 = onLoadNavi; _a < onLoadNavi_1.length; _a++) {
                        var cb = onLoadNavi_1[_a];
                        if (typeof cb == "function")
                            cb.call();
                    }
                    break;
                case "walpapers-tags":
                    break;
            }
        }
    };
    ;
    optionsNavi.prototype.reload = function (Mode) {
        var ts = this;
        if (typeof Mode != "object")
            Mode = String(Mode).split(",");
        clearTimeout(ts.state.pending[String(Mode)]);
        ts.state.pending[String(Mode)] = setTimeout(function () {
            if (Mode.indexOf("newtab") !== -1)
                BRW_sendMessage({ command: "reloadNewTabPages" });
        }, 1050);
    };
    ;
    return optionsNavi;
}());
$(function () {
    NAVI = new optionsNavi();
    var $navi = $("#tree-navi-left"), $head = $("#tree-navi-head"), $upper = $("#navi-upper-sections"), $sections = $("#navi-additional-sections");
    BRW_langLoaded(function () {
        $navi.load("../common/options/html/navi.html", function () {
            NAVI.htmlLoaded("navi");
            autoTranslate($navi);
        });
        $head.load("../common/options/html/head.html", function () {
            NAVI.htmlLoaded("head");
            autoTranslate($head);
        });
        $upper.load("../common/options/html/upper.html", function () {
            NAVI.htmlLoaded("upper");
            autoTranslate($upper);
        });
        $sections.load("../common/options/html/sections.html", function () {
            NAVI.htmlLoaded("sections");
            autoTranslate($sections);
        });
    });
});
//# sourceMappingURL=navi.js.map
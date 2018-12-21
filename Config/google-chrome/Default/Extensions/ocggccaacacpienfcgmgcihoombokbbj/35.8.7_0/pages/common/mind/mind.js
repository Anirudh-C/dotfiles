var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var mindDEV = false;
var AWS, AUTH, MIND = false, MEDITATION = false, BRW_post;
var lspMind = (function () {
    function lspMind() {
        this.DEV = mindDEV || false;
        this.debug = true;
        this.authInfo = {};
        this.ONCE = [];
        this.UI = {};
        this.LOADER = [];
        this.INTERVAL = [];
        this.AUDIO = [];
        this.API = {
            server: "https://sync.everhelper.me"
        };
        this.locales = ['ru'];
        this.postfix = '';
        this.state = {
            PRO: false,
            RU: false,
            active: false,
            audio: {
                active: false,
                list: {},
                listExample: [],
                order: [],
                volume: 0.7,
                langsAll: [],
                langsUse: JSON.parse(localStorage.getItem("relax-audio-langs") || '["en","ru"]'),
                tunes: 0,
                paused: false,
                loading: false,
                gap: 0.126,
                currentKey: false,
                currentUrl: false,
                currentData: false,
                currentContent: false,
                timeSingle: false,
                showVolume: true,
                trackTimer: false,
                auditionedEpisodes: [],
                tracksResume: {},
                playerBackTimeout: false
            },
            current: {
                trackId: false
            },
            navi: {
                open: false
            },
            common: {
                showBackground: true
            },
            prepare: {
                promise: false,
                date: 0,
                livetime: 15 * 60 * 1000
            },
            scanAllPending: false,
            scanPending: [],
            cache: 24 * 60 * 60 * 1000,
            circle: {}
        };
        this.table = {
            "nimbus_single": { time: 0, data: false },
            "nimbus_series": { time: 0, data: false },
            "nimbus_series_episodes": { time: 0, data: false },
            "nimbus_music": { time: 0, data: false },
            "nimbus_sound": { time: 0, data: false }
        };
        this.AWSParams = {
            AWSS3Bucket: "nimbusmind-s3",
            AWSIdentityPool: "us-east-1:af73471f-47c3-48e1-8c8e-76af9061a501",
            AWSIdentityRegion: ".USEast1",
            AWSRegionType: ".USEast1",
            AWSCognitoID: "USEast1Cognito",
            AWSS3BucketURL: "nimbusmind-s3.s3.amazonaws.com",
            AWSS3CloudFrontURL: "d3nv43jb1ykirp.cloudfront.net",
            LSPCloudFrontURL: "dn5tun53sj283.cloudfront.net"
        };
        var ts = this;
        if (ts.DEV)
            $(function () {
                $("body").attr("meditation-dev", true);
                ts.load();
            });
    }
    ;
    lspMind.prototype.load = function () {
        var ts = this;
        ts.state.active = true;
        ts.once("init");
        ts.UI.player.$wrap.addClass('noanimate');
        setTimeout(function () {
            ts.UI.player.$wrap.removeClass('noanimate');
        }, 750);
    };
    ;
    lspMind.prototype.once = function (action, callback) {
        var ts = this;
        if (ts.ONCE.indexOf(action) != -1)
            return;
        else
            ts.ONCE.push(action);
        switch (action) {
            case "init":
                ts.initSettings();
                ts.getAuth();
                ts.getUI();
                ts.initUI();
                ts.listeners();
                ts.initTabs();
                ts.volumeSlider();
                ts.volumeIcons();
                ts.toggleVolumeSlider("set");
                ts.togglePlayerBackground("set");
                ts.auditionedEpisodes();
                ts.tracksResume();
                ts.toggleMind("auto");
                ts.prepare();
                break;
            default:
                if (callback)
                    callback();
        }
    };
    ;
    lspMind.prototype.initUI = function () {
        var ts = this;
    };
    ;
    lspMind.prototype.initSettings = function () {
        var ts = this;
        var index = ts.locales.indexOf(String(translate("mind_locale")));
        if (index !== -1)
            ts.postfix = "_" + ts.locales[index];
        var volume = parseFloat(localStorage.getItem("mind-volume"));
        if (!isNaN(volume))
            ts.state.audio.volume = volume;
        ts.state.navi.open = localStorage.getItem("mind-navi") == "hide" ? false : true;
        var volumeSlider = parseInt(localStorage.getItem("mind-show-volume"));
        if (!isNaN(volumeSlider))
            ts.state.audio.showVolume = Boolean(volumeSlider);
        var showBackground = parseInt(localStorage.getItem("mind-show-background"));
        if (!isNaN(showBackground))
            ts.state.common.showBackground = Boolean(showBackground);
        try {
            var tablesCache = localStorage.getItem("mind-tables-cache");
            if (tablesCache !== null) {
                tablesCache = JSON.parse(tablesCache);
                var prm = true;
                for (var k in ts.table) {
                    if (typeof tablesCache[k] !== "object" || !tablesCache[k].data)
                        prm = false;
                }
                if (prm) {
                    ts.table = tablesCache;
                }
            }
        }
        catch (ex) {
            console.warn(ex);
        }
    };
    ;
    lspMind.prototype.isPRO = function (data, options) {
        if (options === void 0) { options = {}; }
        var ts = this;
        if (!ts.state.PRO
            &&
                data.premium
            &&
                data.premium.BOOL) {
            options.title = data.name.S;
            options.image = data.image.S;
            if (!options.check)
                AUTH.isPremium("meditation", false, options);
            return true;
        }
        return false;
    };
    ;
    lspMind.prototype.getAuth = function () {
        var ts = this;
        ts.state.PRO = AUTH.isPremium(false) || false;
        if (ts.state.PRO)
            $("body").attr("mind-pro", "pro");
    };
    ;
    lspMind.prototype.initTabs = function () {
        var ts = this;
        ts.switchTabs($(".tab-header[tab=" + (localStorage.getItem("mind-active-tab") || "single") + "]"));
    };
    ;
    lspMind.prototype.getUI = function () {
        var ts = this;
        var $player = $("#mind-player");
        var $mindWrap = $("#meditation-wrap");
        ts.UI.player = {
            $wrap: $player,
            $hide: $player.find('.mind-hide-player'),
            $back: $player.find('.mind-back'),
            $page: $player.find('.mind-player-detail'),
            list: {
                $single: $player.find('.content-single'),
                $series: $player.find('.content-series'),
                $music: $player.find('.content-music')
            },
            page: {
                $single: $player.find('#mind-singles-detail'),
                $singleName: $player.find('#mind-singles-detail .single-name'),
                $singleDesc: $player.find('#mind-singles-detail .single-desc'),
                $singleTime: $player.find('#mind-singles-detail .mind-time-list'),
                $singleStart: $player.find('#mind-singles-detail .mind-start'),
                $singleUnlock: $player.find('#mind-singles-detail .mind-unlock'),
                $singleUnlockAll: $player.find('#mind-singles-detail .mind-time-unlock-all'),
                $series: $player.find('#mind-series-detail'),
                $seriesName: $player.find('#mind-series-detail .single-name'),
                $seriesDesc: $player.find('#mind-series-detail .single-desc'),
                $seriesList: $player.find('#mind-series-detail .mind-series-list'),
                $seriesStart: $player.find('#mind-series-detail .mind-start'),
                $scrollElement: $player.find('#mind-series-detail .scroll-me')
            },
            control: {
                $wrap: $("#mind-player-control"),
                $cancel: $mindWrap.find(".mind-player-cancel"),
                $circle: $("#mind-player-control .mind-player-circle"),
                $track: $("#mind-player-control .mind-track"),
                $progress: $("#mind-player-control .mind-track circle:eq(1)"),
                $audio: $("#mind-player-control audio"),
                $playpause: $("#mind-player-control .mind-play-pause"),
                $timer: $("#mind-player-control .mind-timer"),
                $btnBackground: $("#mind-player-control .mind-button-background"),
                $btnVolume: $("#mind-player-control .mind-button-volume"),
                $volumeControls: $("#mind-player-control .mind-volume-controls"),
                $volumeSlider: $("#mind-player-control .mind-volume-slider slider"),
                $volumeSlider: $("#mind-player-control .mind-volume-slider slider"),
                $volumeDown: $("#mind-player-control .mind-sounds-volume-down"),
                $volumeUp: $("#mind-player-control .mind-sounds-volume-up")
            }
        };
        var $tabWraps = $player.find(".active-tabs");
        ts.UI.tabs = {
            $wraps: $tabWraps,
            $head: $tabWraps.find('.tab-header'),
            $body: $tabWraps.find('.tab-body')
        };
        ts.UI.common = {
            $open: $("#meditations-button"),
            $outside: $("#meditation-wrap, #relax, #auth-wrap"),
            $outplayer: $("#mind-sidebar, #mind-player-control-inner")
        };
    };
    ;
    lspMind.prototype.listeners = function () {
        var ts = this;
        ts.UI.tabs.$head.unbind("click").on("click", function (el) {
            ts.switchTabs($(el.currentTarget));
        });
        ts.UI.common.$open.on("click", function (e) {
            e.preventDefault();
            ts.toggleMind("open");
        });
        ts.UI.player.$hide.unbind("click").on("click", function (e) {
            ts.toggleMind("hide");
        });
        ts.UI.player.$back.unbind("click").on("click", function (e) {
            ts.activePage("main");
        });
        ts.UI.player.list.$single.on("click", ".content-list-item", function (event) {
            ts.activePage("single", $(event.currentTarget));
        });
        ts.UI.player.list.$series.on("click", ".content-list-item", function (event) {
            ts.activePage("series", $(event.currentTarget));
        });
        ts.UI.player.page.$singleTime.on("click", "li:not(.active)", function (event) {
            ts.setSingleTime($(event.currentTarget));
        });
        ts.UI.player.page.$seriesList.on("click", "li.available:not(.active)", function (event) {
            ts.setSeriesTrack($(event.currentTarget));
        });
        ts.UI.player.control.$volumeDown.unbind("click").on("click", function () {
            ts.setVolume("-4 steps", "button");
        });
        ts.UI.player.control.$volumeUp.unbind("click").on("click", function () {
            ts.setVolume("4 steps", "button");
        });
        ts.UI.player.control.$playpause.unbind("click").on("click", function (e) {
            ts.playerControl("toggle");
        });
        ts.UI.player.control.$btnVolume.unbind("click").on("click", function () {
            ts.toggleVolumeSlider();
        });
        ts.UI.player.control.$btnBackground.unbind("click").on("click", function () {
            ts.togglePlayerBackground();
        });
        ts.UI.player.control.$cancel.on("click", function () {
            ts.playerControl("exit");
        });
        ts.UI.player.control.$track.on("click", function (e) {
            ts.calcTime(e, true);
        });
        ts.UI.player.control.$track.on("mousemove", function (e) {
            ts.hoverTime(e, true);
        });
        ts.UI.player.list.$music.on("click", ".content-list-item", function (event) {
            ts.playMusic("music", $(event.currentTarget).attr("table-key"), $(event.currentTarget));
        });
        ts.UI.player.page.$singleStart.on("click", function (event) {
            ts.playMusic("single");
        });
        ts.UI.player.page.$seriesStart.on("click", function (event) {
            ts.playMusic("series");
        });
        ts.UI.player.page.$singleUnlock.unbind("click").on("click", function (event) {
            ts.isPRO(ts.state.audio.dataSingle);
        });
        ts.UI.player.page.$singleUnlockAll.unbind("click").on("click", function (event) {
            ts.isPRO(ts.state.audio.dataSingle);
        });
        document.addEventListener("keydown", function (event) {
            if (ts.state.active)
                ts.keyboard(event);
        }, false);
        $(document).on("mousedown", function (e) {
            if (MEDITATION.state.relax) {
                if (ts.state.audio.active) {
                    var $container = ts.UI.common.$outplayer;
                }
                else {
                    var $container = ts.UI.common.$outside;
                }
                if ($container.has(e.target).length === 0) {
                    if (ts.state.audio.active) {
                        if (!MEDITATION.state.sidebar.open) {
                            MEDITATION.togglePanel("show");
                        }
                        else {
                            MEDITATION.togglePanel("hide");
                        }
                    }
                    else {
                        if (!ts.state.navi.open && !MEDITATION.state.sidebar.open) {
                            ts.toggleMind("show");
                            MEDITATION.togglePanel("show");
                        }
                        else {
                            MEDITATION.togglePanel("hide");
                            ts.toggleMind("hide");
                        }
                    }
                }
                else {
                }
            }
        });
    };
    ;
    lspMind.prototype.keyboard = function (event) {
        var ts = this;
        if (AUTH.state.tab)
            return;
        var code = event.keyCode;
        var handle = true;
        if (ts.state.audio.active) {
            if (code == 13) {
                ts.togglePlayerBackground();
            }
            else if (code == 32) {
                ts.playerControl("toggle");
            }
            else if (code == 38) {
                ts.setVolume("10 steps", "button");
            }
            else if (code == 40) {
                ts.setVolume("-10 steps", "button");
            }
            else if (code == 8) {
                ts.playerControl("exit");
            }
            else {
                handle = false;
            }
        }
        else {
            if (code == 8) {
                if (ts.UI.player.$page.hasClass('active')) {
                    ts.activePage("main");
                }
                else {
                    ts.toggleMind("hide");
                }
            }
            else if (code == 38) {
                ts.toggleMind("open");
            }
            else if (code == 40) {
                ts.toggleMind("hide");
            }
            else {
                handle = false;
            }
        }
        if (handle) {
            event.preventDefault();
            event.stopPropagation();
        }
    };
    ;
    lspMind.prototype.playMusic = function (mode, key, $el) {
        return __awaiter(this, void 0, void 0, function () {
            var ts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ts = this;
                        ts.state.audio.currentMode = mode;
                        if (mode == "music") {
                            ts.state.audio.currentKey = key;
                            ts.state.audio.currentData = ts.table["nimbus_" + mode].data[key];
                            ts.state.audio.currentContent = ts.state.audio.currentData.content.S;
                            if (ts.isPRO(ts.state.audio.currentData))
                                return [2, false];
                        }
                        else if (mode == "single") {
                            ts.state.audio.currentKey = ts.state.audio.keySingle;
                            ts.state.audio.currentData = ts.state.audio.dataSingle;
                            ts.state.audio.currentContent = ts.state.audio.currentData.options.M[ts.state.audio.timeSingle].S;
                        }
                        else if (mode == "series") {
                            ts.state.audio.currentKey = ts.state.audio.keyEpisode;
                            ts.state.audio.currentData = ts.table["nimbus_series_episodes"].data[ts.state.audio.keyEpisode];
                            ts.state.audio.currentContent = ts.state.audio.currentData.content.S;
                        }
                        ts.playerControl("loading");
                        ts.playerControl("autofullscreen");
                        return [4, ts.prepare()];
                    case 1:
                        _a.sent();
                        ts.getFile().then(function () {
                            ts.setTrack();
                        });
                        return [2];
                }
            });
        });
    };
    ;
    lspMind.prototype.clearCirclePos = function () {
        var ts = this;
        ts.state.circle = {};
    };
    ;
    lspMind.prototype.getCirclePos = function (event) {
        var ts = this;
        if (!ts.state.circle.offset)
            ts.state.circle.offset = ts.UI.player.control.$track.offset();
        if (!ts.state.circle.size)
            ts.state.circle.size = ts.UI.player.control.$track.width();
        if (!ts.state.circle.center)
            ts.state.circle.center = {
                top: ts.state.circle.offset.top + ts.state.circle.size / 2,
                left: ts.state.circle.offset.left + ts.state.circle.size / 2
            };
        var pos = {
            x: event.clientX - ts.state.circle.center.left,
            y: event.clientY - ts.state.circle.center.top
        };
        pos.g = Math.sqrt(pos.x * pos.x + pos.y * pos.y);
        return pos;
    };
    ;
    lspMind.prototype.hoverTime = function (event) {
        var ts = this;
        var pos = ts.getCirclePos(event);
        if (pos.g < 70 || pos.g > 80) {
            if (ts.state.circle.hover) {
                ts.UI.player.control.$track.removeClass('pointer');
                ts.state.circle.hover = false;
            }
        }
        else {
            if (!ts.state.circle.hover) {
                ts.UI.player.control.$track.addClass('pointer');
                ts.state.circle.hover = true;
            }
        }
    };
    ;
    lspMind.prototype.calcTime = function (event, andSet) {
        var ts = this;
        var pos = ts.getCirclePos(event);
        if (pos.g < 65 || pos.g > 85)
            return false;
        var deg = Math.atan(Math.abs(pos.x / pos.y)) * 180 / Math.PI;
        if (pos.x >= 0) {
            if (pos.y < 0)
                deg += 0;
            else
                deg = 180 - deg;
        }
        else {
            if (pos.y >= 0)
                deg += 180;
            else
                deg = 360 - deg;
        }
        if (deg < 3 || deg > 358)
            deg = 0;
        if (andSet)
            ts.setTime(deg / 360);
    };
    ;
    lspMind.prototype.setTime = function (percent) {
        var ts = this;
        var time = Math.round(percent * ts.UI.player.control.$audio[0].duration);
        ts.UI.player.control.$audio[0].currentTime = time;
        ts.playerProgress(time);
    };
    ;
    lspMind.prototype.setTrack = function () {
        var ts = this;
        ts.UI.player.control.$audio.find("source").remove();
        ts.UI.player.control.$audio.attr("src", ts.state.audio.currentUrl);
        ts.state.audio.duration = 0;
        ts.UI.player.control.$audio[0].volume = ts.state.audio.volume;
        ts.UI.player.control.$timer.removeClass('fade-in');
        ts.playerProgress(0);
        ts.clearCirclePos();
        var i = 0;
        var playTime = 0.01;
        var resumeTime = ts.state.audio.tracksResume[ts.state.audio.currentData.id.S] || false;
        if (resumeTime) {
            playTime += resumeTime;
            ts.UI.player.control.$audio[0].currentTime = resumeTime;
            ts.playerProgress(resumeTime);
        }
        clearInterval(ts.state.audio.loading);
        ts.state.audio.loading = setInterval(function () {
            if (ts.UI.player.control.$audio[0].currentTime > playTime) {
                clearInterval(ts.state.audio.loading);
                ts.state.audio.duration = Math.round(ts.UI.player.control.$audio[0].duration);
                ts.UI.player.control.$circle.removeClass("loading");
                ts.UI.player.control.$timer.text(secToTime(ts.state.audio.duration));
                ts.UI.player.control.$timer.addClass('fade-in');
                ts.trackTimer();
            }
            else if (i == 0) {
                ts.UI.player.control.$circle.addClass("loading");
            }
            i++;
        }, 110);
        ts.playerControl("start");
    };
    ;
    lspMind.prototype.getFile = function () {
        var ts = this;
        var expires = 4 * 60 * 60;
        return new Promise(function (resolve, reject) {
            if (typeof ts.AUDIO[ts.state.audio.currentContent] == "object"
                &&
                    ts.AUDIO[ts.state.audio.currentContent].expires < Date.now()) {
                ts.state.audio.currentUrl = ts.AUDIO[ts.state.audio.currentContent].url;
                resolve(ts.state.audio.currentUrl);
            }
            else {
                var params = {
                    Bucket: ts.AWSParams.AWSS3Bucket,
                    Key: ts.state.audio.currentContent,
                    Expires: expires
                };
                ts.S3.getSignedUrl('getObject', params, function (error, url) {
                    if (!error) {
                        ts.state.audio.currentUrl = String(url).replace(ts.AWSParams.AWSS3BucketURL, ts.AWSParams.LSPCloudFrontURL);
                        ts.AUDIO[ts.state.audio.currentContent] = {
                            url: ts.state.audio.currentUrl,
                            expires: Date.now() + 1000 * (expires - 3600)
                        };
                        resolve(ts.state.audio.currentUrl);
                    }
                    else {
                        console.warn(url, error);
                        reject();
                    }
                });
            }
        });
    };
    ;
    lspMind.prototype.playerProgress = function (seconds) {
        var ts = this;
        ts.UI.player.control.$timer.text(secToTime(Math.max(0, ts.state.audio.duration - seconds)));
        var percent = ts.state.audio.duration ? (100 * seconds / ts.state.audio.duration) : 0;
        ts.UI.player.control.$progress.css("stroke-dasharray", Math.round(parseFloat(percent) * 4.77) + "px 477px");
    };
    ;
    lspMind.prototype.trackTimer = function () {
        var ts = this;
        clearInterval(ts.state.audio.trackTimer);
        ts.state.audio.trackTimer = setInterval(function () {
            var time = Math.round(ts.UI.player.control.$audio[0].currentTime);
            ts.playerProgress(time);
            if (ts.state.audio.duration && time == ts.state.audio.duration) {
                ts.playerControl("after");
                clearInterval(ts.state.audio.trackTimer);
            }
        }, 250);
    };
    ;
    lspMind.prototype.playerControl = function (action) {
        var ts = this;
        if (action == "toggle") {
            action = ts.state.audio.paused ? "play" : "pause";
        }
        if (action == "loading") {
            ts.UI.player.control.$circle.addClass("loading");
            ts.UI.player.control.$timer.removeClass('fade-in');
            ts.UI.player.control.$wrap.css("display", "block");
            $("body").attr("mind-player", true);
        }
        else if (action == "play" || action == "start") {
            ts.UI.player.control.$playpause.attr("mode", "play");
            ts.state.audio.paused = false;
            ts.state.audio.active = true;
            if (action == "start") {
                ts.UI.player.control.$wrap.css("display", "block");
                $("body").attr("mind-player", true);
            }
            ts.UI.player.control.$audio[0].play();
            ts.trackTimer();
            clearTimeout(ts.state.audio.playerBackTimeout);
        }
        else if (action == "pause" || action == "stop" || action == "exit") {
            ts.UI.player.control.$playpause.attr("mode", "pause");
            ts.UI.player.control.$audio[0].pause();
            ts.state.audio.paused = true;
            if (action == "exit") {
                ts.state.audio.active = false;
                ts.UI.player.control.$wrap.css("display", "none");
                $("body").removeAttr("mind-player");
                MEDITATION.fullScreenControl("autostop");
                if (ts.state.audio.currentMode == "series") {
                    ts.trackResumeCheck();
                }
            }
        }
        else if (action == "next") {
        }
        else if (action == "prev") {
        }
        else if (action == "after") {
            ts.playerControl('pause');
            ts.UI.player.control.$audio[0].currentTime = 0;
            if (ts.state.audio.currentMode == "series") {
                ts.auditionedEpisodes(ts.state.audio.currentData.id.S);
            }
            clearTimeout(ts.state.audio.playerBackTimeout);
            ts.state.audio.playerBackTimeout = setTimeout(function () {
                ts.playerControl("exit");
            }, 3000);
        }
        else if (action == "autofullscreen") {
            MEDITATION.fullScreenControl("autostart");
        }
    };
    ;
    lspMind.prototype.trackResumeCheck = function () {
        var ts = this;
        var time = Math.round(ts.UI.player.control.$audio[0].currentTime);
        if (ts.state.audio.duration) {
            ts.tracksResume(ts.state.audio.currentData.id.S, time == ts.state.audio.duration || time == 0 ? 'full' : time);
        }
    };
    ;
    lspMind.prototype.tracksResume = function (addTrack, time) {
        var ts = this;
        if (addTrack) {
            if (time == "full") {
                delete ts.state.audio.tracksResume[addTrack];
            }
            else {
                ts.state.audio.tracksResume[addTrack] = time;
            }
            localStorage.setItem("mind-tracks-resume", JSON.stringify(ts.state.audio.tracksResume));
            ts.drawAuditionedEpisodes();
        }
        else {
            ts.state.audio.tracksResume = JSON.parse(localStorage.getItem("mind-tracks-resume") || "{}");
        }
        return ts.state.audio.tracksResume;
    };
    ;
    lspMind.prototype.auditionedEpisodes = function (addEpisode) {
        if (addEpisode === void 0) { addEpisode = false; }
        var ts = this;
        if (addEpisode) {
            ts.state.audio.auditionedEpisodes.push(addEpisode);
            localStorage.setItem("mind-auditioned-episodes", JSON.stringify(ts.state.audio.auditionedEpisodes));
            ts.drawAuditionedEpisodes();
        }
        else {
            ts.state.audio.auditionedEpisodes = JSON.parse(localStorage.getItem("mind-auditioned-episodes") || "[]");
        }
        return ts.state.audio.auditionedEpisodes;
    };
    ;
    lspMind.prototype.drawAuditionedEpisodes = function () {
        var ts = this;
        var newEpisode = 0;
        ts.UI.player.page.$seriesList.find("li").each(function (i, el) {
            if (ts.state.audio.auditionedEpisodes.indexOf($(el).attr("table-id")) !== -1) {
                $(el).addClass("available completed");
            }
            else if (!newEpisode++) {
                $(el).addClass("available");
            }
        });
        ts.setSeriesTrack();
    };
    ;
    lspMind.prototype.activePage = function (mode, $el) {
        return __awaiter(this, void 0, void 0, function () {
            var ts, tableKey, pro, key, $li;
            return __generator(this, function (_a) {
                ts = this;
                if ($el)
                    tableKey = parseInt($el.attr("table-key"));
                if (mode == "main") {
                    ts.UI.player.$page.removeClass('active');
                }
                else if (mode == "single") {
                    ts.state.audio.keySingle = parseInt($el.attr("table-key"));
                    ts.state.audio.dataSingle = ts.table.nimbus_single.data[ts.state.audio.keySingle];
                    ts.UI.player.page.$singleName.text(ts.state.audio.dataSingle.name.S);
                    ts.UI.player.page.$singleDesc.text(ts.state.audio.dataSingle.desc.S);
                    ts.UI.player.page.$singleTime.html("");
                    pro = ts.isPRO(ts.state.audio.dataSingle, { check: true });
                    if (pro)
                        ts.UI.player.page.$single.addClass('pro-detail');
                    else
                        ts.UI.player.page.$single.removeClass('pro-detail');
                    for (key in ts.state.audio.dataSingle.options.M) {
                        $li = $("<li>").attr("time-key", key).text(key);
                        if (pro && parseInt(key) != 5)
                            $li.addClass('pro-item');
                        ts.UI.player.page.$singleTime.append($li);
                    }
                    ts.UI.player.page.$single.addClass('active');
                    ts.setSingleTime();
                }
                else if (mode == "series") {
                    ts.state.audio.keySeries = parseInt($el.attr("table-key"));
                    ts.state.audio.dataSeries = ts.table.nimbus_series.data[ts.state.audio.keySeries];
                    if (ts.isPRO(ts.state.audio.dataSeries))
                        return [2, false];
                    ts.UI.player.page.$seriesName.text(ts.state.audio.dataSeries.name.S);
                    ts.UI.player.page.$seriesDesc.text(ts.state.audio.dataSeries.desc.S);
                    ts.UI.player.page.$seriesList.html("");
                    ts.UI.player.page.$series.addClass('active');
                    ts.drawTableData("series_episodes", ts.UI.player.page.$seriesList).then(function () {
                    });
                    ts.UI.player.page.$scrollElement.css({
                        top: Math.max(239, 25 + ts.UI.player.page.$seriesName.outerHeight(true) + ts.UI.player.page.$seriesDesc.outerHeight(true) + ts.UI.player.page.$seriesStart.outerHeight(true))
                    });
                }
                return [2];
            });
        });
    };
    ;
    lspMind.prototype.setSeriesTrack = function ($el) {
        if ($el === void 0) { $el = this.UI.player.page.$seriesList.find("li.available").last(); }
        var ts = this;
        ts.state.audio.keyEpisode = parseInt($el.attr("table-key"));
        ts.UI.player.page.$seriesList.find('.active').removeClass('active');
        $el.addClass('active');
        ts.startButtonText();
    };
    ;
    lspMind.prototype.startButtonText = function () {
        var ts = this;
        var currentData = ts.table["nimbus_series_episodes"].data[ts.state.audio.keyEpisode];
        if (ts.state.audio.tracksResume[currentData.id.S]) {
            ts.UI.player.page.$seriesStart.text(translate("mind_resume"));
        }
        else {
            ts.UI.player.page.$seriesStart.text(translate("mind_start"));
        }
    };
    ;
    lspMind.prototype.setSingleTime = function ($el) {
        if ($el === void 0) { $el = this.UI.player.page.$singleTime.find("li:not(.pro-item):eq(0)"); }
        var ts = this;
        ts.state.audio.timeSingle = parseInt($el.attr("time-key"));
        ts.UI.player.page.$singleTime.find('.active').removeClass('active');
        $el.addClass('active');
        if ($el.hasClass('pro-item'))
            ts.UI.player.page.$single.addClass('locked');
        else
            ts.UI.player.page.$single.removeClass('locked');
    };
    ;
    lspMind.prototype.toggleMind = function (mode) {
        var ts = this;
        if (mode == "auto") {
            ts.UI.player.$wrap.addClass('noanimate');
            setTimeout(function () {
                ts.UI.player.$wrap.removeClass('noanimate');
            }, 1000);
        }
        if (mode == "hide"
            ||
                mode == "auto" && !ts.state.navi.open) {
            ts.state.navi.open = false;
            ts.UI.player.$wrap.attr('hidden', true);
            ts.UI.common.$open.removeAttr('hidden');
        }
        else {
            ts.state.navi.open = true;
            ts.UI.player.$wrap.removeAttr('hidden');
            ts.UI.common.$open.attr('hidden', true);
        }
        localStorage.setItem("mind-navi", ts.state.navi.open ? "open" : "hide");
    };
    ;
    lspMind.prototype.switchTabs = function ($tab) {
        var ts = this;
        if ($tab.hasClass('active'))
            return;
        var $wrap = $tab.parents('.active-tabs');
        var $action = $wrap.find('.tab-header, .tab-body');
        var active = $tab.attr('tab');
        $action.removeClass('active');
        $action.filter('[tab=' + active + ']').addClass('active');
        $wrap.attr('activeTab', active);
        if ($wrap.attr('headerSelector') && $tab.attr('headerMsg')) {
            var $header = $($wrap.attr('headerSelector'));
            $header.text(translate($tab.attr('headerMsg')));
        }
        localStorage.setItem("mind-active-tab", active);
        var load = $tab.attr("load");
        if (load && typeof ts.table["nimbus_" + load].data != "undefined") {
            ts.once("draw_nimbus_" + load, function () {
                ts.drawTableData(load, $action.filter('[tab=' + active + '].tab-body').find('.tab-body-content'));
            });
        }
    };
    ;
    lspMind.prototype.drawTableData = function (table, $container) {
        return __awaiter(this, void 0, void 0, function () {
            var ts, tableName, animation, $listPRO, $listFree, newEpisode, key, val;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ts = this;
                        tableName = 'nimbus_' + table;
                        $scrollContainer = $container.parents(".scroll-me");
                        if (!$scrollContainer.length)
                            $scrollContainer = $container;
                        animation = setTimeout(function () {
                            $scrollContainer.addClass('content-loading');
                        }, 15);
                        if (!!ts.table[tableName].data) return [3, 2];
                        return [4, ts.scan(tableName)];
                    case 1:
                        _a.sent();
                        return [3, 2];
                    case 2:
                        clearTimeout(animation);
                        $listPRO = [];
                        $listFree = [];
                        newEpisode = 0;
                        if (ts.table[tableName] && ts.table[tableName].data)
                            for (key in ts.table[tableName].data) {
                                val = ts.table[tableName].data[key];
                                if (["single", "series", "music"].indexOf(table) !== -1) {
                                    $li =
                                        $("<div>")
                                            .attr("table-id", val.id.S)
                                            .attr("table-key", key)
                                            .addClass("content-list-item")
                                            .append($("<span>")
                                            .addClass("item-image")
                                            .append($("<img>")
                                            .attr("src", val.image.S)))
                                            .append($("<span>")
                                            .addClass("item-text")
                                            .append($("<span>")
                                            .addClass("item-name")
                                            .text(val.name.S))
                                            .append($("<span>")
                                            .addClass("item-desc")
                                            .text(val.desc.S)));
                                }
                                else if (table == "series_episodes") {
                                    if (val.series.S !== ts.state.audio.dataSeries.id.S)
                                        continue;
                                    $li =
                                        $("<li>")
                                            .attr("table-id", val.id.S)
                                            .attr("table-key", key)
                                            .append($("<span>")
                                            .addClass("item-title")
                                            .append($("<span>")
                                            .addClass("item-title-text")
                                            .text(val.name.S)));
                                }
                                if (val.premium && val.premium.BOOL === true) {
                                    $li.addClass("pro-item");
                                    if (table == "series"
                                        &&
                                            (val.id.N == 102100 || val.id.N == 106100)) {
                                        $listFree.push($li);
                                    }
                                    else {
                                        $listPRO.push($li);
                                    }
                                }
                                else {
                                    $listFree.push($li);
                                }
                            }
                        $container.html('');
                        if ($listFree.length)
                            $container.append($listFree);
                        if ($listPRO.length)
                            $container.append($listPRO);
                        if (table == "series_episodes") {
                            ts.drawAuditionedEpisodes();
                        }
                        if (["single", "series", "music"].indexOf(table) !== -1 || true) {
                            $scrollContainer.mCustomScrollbar({
                                theme: "dark",
                                axis: "y",
                                autoHideScrollbar: false,
                                scrollInertia: 150,
                                scrollEasing: "easeOut",
                                mouseWheel: {
                                    enable: true,
                                    axis: "y",
                                    normalizeDelta: true,
                                    scrollAmount: 100,
                                    deltaFactor: 10,
                                    normalizeDelta: true
                                },
                                advanced: {},
                                callbacks: {
                                    onScroll: function () {
                                        MEDITATION.touchEvent('scroll', {});
                                    }
                                }
                            });
                        }
                        $scrollContainer.removeClass('content-loading');
                        return [2, Promise.resolve()];
                }
            });
        });
    };
    ;
    lspMind.prototype.togglePlayerBackground = function (mode) {
        if (mode === void 0) { mode = "toggle"; }
        var ts = this;
        if (mode == "toggle") {
            ts.state.common.showBackground = !ts.state.common.showBackground;
            localStorage.setItem("mind-show-background", ts.state.common.showBackground ? "1" : "0");
        }
        var $video = $("video#background");
        if (ts.state.common.showBackground) {
            ts.UI.player.control.$btnBackground.addClass("active");
            $("body").removeAttr("mind-player-gradient");
            try {
            }
            catch (ex) {
                console.warn(ex);
            }
        }
        else {
            ts.UI.player.control.$btnBackground.removeClass("active");
            $("body").attr("mind-player-gradient", "1");
            try {
            }
            catch (ex) {
                console.warn(ex);
            }
        }
    };
    ;
    lspMind.prototype.toggleVolumeSlider = function (mode) {
        if (mode === void 0) { mode = "toggle"; }
        var ts = this;
        if (mode == "toggle") {
            ts.state.audio.showVolume = !ts.state.audio.showVolume;
            localStorage.setItem("mind-show-volume", ts.state.audio.showVolume ? "1" : "0");
        }
        if (ts.state.audio.showVolume) {
            ts.UI.player.control.$btnVolume.addClass("active");
            ts.UI.player.control.$volumeControls.removeAttr("hidden");
        }
        else {
            ts.UI.player.control.$btnVolume.removeClass("active");
            ts.UI.player.control.$volumeControls.attr("hidden", "1");
        }
    };
    ;
    lspMind.prototype.volumeSlider = function () {
        var ts = this;
        ts.UI.player.control.$volumeSlider.slider({
            range: "min",
            value: 100 * ts.state.audio.volume,
            min: 0,
            max: 100,
            slide: function (event, jqui) {
                ts.setVolume(jqui.value / 100);
            },
            stop: function (event, jqui) {
                ts.setVolume(jqui.value / 100, "write");
            }
        });
    };
    ;
    lspMind.prototype.setVolume = function (vol, mode) {
        var ts = this;
        if (String(vol).indexOf("steps") != -1) {
            var step = parseInt(vol);
            var part = 1 / Math.abs(step);
            var vol = (Math.floor(ts.state.audio.volume / part) + (step / Math.abs(step))) * part;
            vol = Math.max(0, Math.min(1, vol));
        }
        ts.UI.player.control.$audio.each(function (i, el) {
            el.volume = vol;
        });
        ts.state.audio.volume = vol;
        if (typeof mode !== "object")
            mode = [mode];
        if (mode.indexOf("write") !== -1 || mode.indexOf("button") !== -1 || mode.indexOf("mirror") !== -1)
            localStorage.setItem("mind-volume", vol);
        if (mode.indexOf("button") !== -1 || mode.indexOf("mirror") !== -1)
            ts.UI.player.control.$volumeSlider.slider("value", Math.round(100 * vol));
        if (mode.indexOf("mirror") === -1) {
            mode.push("mirror");
        }
        ts.volumeIcons();
    };
    ;
    lspMind.prototype.volumeIcons = function () {
        var ts = this;
        var volumeAttr = String(Math.min(2, Math.ceil(ts.state.audio.volume * 2)));
        ts.UI.player.control.$btnVolume.attr("volume", volumeAttr);
    };
    lspMind.prototype.scanAll = function () {
        var ts = this;
        if (ts.state.scanAllPending)
            return;
        else
            ts.state.scanAllPending = true;
        var queue = Object.keys(ts.table);
        return new Promise(function (resolve, reject) {
            var done = function (tableName) {
                var index = queue.indexOf(tableName);
                if (index > -1)
                    queue.splice(index, 1);
                if (queue.length === 0) {
                    resolve();
                }
            };
            var now = Date.now();
            for (var key in ts.table) {
                if (ts.state.scanPending.indexOf(key) !== -1
                    &&
                        (!ts.table[key].time
                            ||
                                now - ts.table[key].time < ts.state.cache)) {
                    done(key);
                }
                else {
                    ts.scan(key, false, false, true)
                        .then(function (tableName) {
                        done(tableName);
                    })["catch"](function (tableName) {
                        console.info('Catch', tableName);
                        done(tableName);
                    });
                }
            }
        });
    };
    ;
    lspMind.prototype.scan = function (tableName, force, scanAll, checkCache) {
        if (force === void 0) { force = false; }
        if (scanAll === void 0) { scanAll = true; }
        if (checkCache === void 0) { checkCache = false; }
        return __awaiter(this, void 0, void 0, function () {
            var ts;
            return __generator(this, function (_a) {
                ts = this;
                ts.state.scanPending.push(tableName);
                return [2, new Promise(function (resolve, reject) {
                        if (typeof ts.table[tableName].data == "object"
                            && !force
                            && (!checkCache || Date.now() - ts.table[tableName].time < ts.state.cache)) {
                            resolve(tableName);
                            if (scanAll)
                                ts.scanAll();
                        }
                        else {
                            ts.prepare().then(function () {
                                ts.ddb.scan({ "TableName": tableName + ts.postfix }, function (err, data) {
                                    if (err) {
                                        console.warn('Scan err', tableName, err);
                                        reject(tableName);
                                    }
                                    else {
                                        var tableData = data.Items;
                                        var tableDataPrepared = [];
                                        var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
                                        for (var key in tableData) {
                                            var letters = String(tableData[key].id.S).replace(/\d/g, '').split('');
                                            var numbers = 100 + parseInt(String(tableData[key].id.S).replace(/\D/g, '') || 0);
                                            if (letters.length) {
                                                for (var k in letters) {
                                                    var index = alphabet.indexOf(letters[k].toLowerCase());
                                                    if (index != -1)
                                                        letters[k] = 100 + index;
                                                }
                                                letters = parseInt(letters.join(''));
                                            }
                                            else {
                                                letters = 1;
                                            }
                                            tableData[key].id.N = parseInt([letters, numbers].join(''));
                                            tableDataPrepared[tableData[key].id.N] = tableData[key];
                                        }
                                        ts.table[tableName].time = Date.now();
                                        ts.table[tableName].data = {};
                                        for (var key in tableDataPrepared)
                                            if (tableDataPrepared[key] !== null) {
                                                if (tableName == "nimbus_single")
                                                    tableDataPrepared[key].premium = { BOOL: true };
                                                ts.table[tableName].data[key] = tableDataPrepared[key];
                                            }
                                        tableDataPrepared;
                                        ts.writeCache();
                                        resolve(tableName);
                                    }
                                    if (scanAll)
                                        ts.scanAll();
                                });
                            });
                        }
                    })];
            });
        });
    };
    ;
    lspMind.prototype.writeCache = function () {
        var ts = this;
        localStorage.setItem("mind-tables-cache", JSON.stringify(ts.table));
    };
    ;
    lspMind.prototype.prepare = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ts, isLiveTime;
            return __generator(this, function (_a) {
                ts = this;
                isLiveTime = Date.now() - ts.state.prepare.date < ts.state.prepare.livetime;
                if (ts.S3 && ts.ddb && isLiveTime)
                    return [2, Promise.resolve()];
                else if (ts.state.prepare.promise && isLiveTime)
                    return [2, ts.state.prepare.promise];
                else {
                    ts.state.prepare.date = Date.now();
                    ts.authInfo = {};
                    ts.state.prepare.promise = new Promise(function (resolve, reject) {
                        ts.auth().then(function () {
                            if (ts.authInfo.identityId && ts.authInfo.token) {
                                ts.config();
                                ts.dbInit();
                                ts.s3Init();
                                ts.state.prepare.date = Date.now();
                                return resolve();
                            }
                            else {
                                return reject();
                            }
                        });
                    });
                    return [2, ts.state.prepare.promise];
                }
                return [2];
            });
        });
    };
    ;
    lspMind.prototype.s3Init = function () {
        var ts = this;
        ts.S3 = new AWS.S3({});
    };
    lspMind.prototype.dbInit = function () {
        var ts = this;
        ts.ddb = new AWS.DynamoDB({
            apiVersion: '2012-10-08',
            dynamoDbCrc32: false
        });
    };
    lspMind.prototype.config = function () {
        var ts = this;
        AWS.config.update({
            region: 'us-east-1'
        });
        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            IdentityId: ts.authInfo.identityId,
            IdentityPoolId: 'us-east-1:af73471f-47c3-48e1-8c8e-76af9061a501',
            Logins: {
                'cognito-identity.amazonaws.com': ts.authInfo.token
            }
        });
        AWS.config.credentials.get(function (err, data) {
            if (err) {
                console.warn('ERR', err);
            }
            else {
            }
        });
    };
    ;
    lspMind.prototype.auth = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ts;
            return __generator(this, function (_a) {
                ts = this;
                return [2, new Promise(function (resolve, reject) {
                        if (AUTH.getLogin() == "Not authorized") {
                            ts.connect(true).then(resolve)["catch"](reject);
                        }
                        else {
                            ts.connect(false).then(resolve)["catch"](reject);
                        }
                    })];
            });
        });
    };
    ;
    lspMind.prototype.connect = function (quest) {
        var ts = this;
        return new Promise(function (resolve, reject) {
            if (typeof ts.authInfo == "object" && ts.authInfo.identityId && ts.authInfo.token) {
                resolve(ts.authInfo);
            }
            else {
                var authInfo = VAL.get('mind.auth');
                if (authInfo && false) {
                    ts.authInfo = JSON.parse(authInfo);
                }
                else {
                    ts.ajax({
                        send: {
                            "action": "user:getCognitoToken",
                            "body": {
                                "guest": quest || false
                            }
                        },
                        success: function (result) {
                            ts.authInfo = result;
                            VAL.set('mind.auth', JSON.stringify(result));
                            resolve(result);
                        },
                        error: function (err) {
                            console.warn(err);
                            reject();
                        }
                    });
                }
            }
        });
    };
    ;
    lspMind.prototype.ajax = function (data) {
        var ts = this;
        var server = data.server || ts.API.server;
        var xhr = BRW_post(server, JSON.stringify(data.send), function (result) {
            if (result.errorCode == 0) {
                if (data.success)
                    data.success(result.body);
                else if (ts.debug)
                    console.info(data, result);
            }
            else {
                console.warn(data, result);
                if (data.error)
                    data.error(result);
            }
            xhr = null;
        }, function (error) {
            console.warn(data, error);
            if (data.error)
                data.error(error);
        });
    };
    ;
    return lspMind;
}());
var lspMeditation = (function () {
    function lspMeditation() {
        this.DEV = mindDEV || false;
        this.debug = false;
        this.authInfo = {};
        this.ONCE = [];
        this.UI = {};
        this.LOADER = [];
        this.INTERVAL = [];
        this.API = {
            server: "https://sync.everhelper.me"
        };
        this.vars = {
            SRV: "https://livestartpage.com",
            tune: "/api/getMeditationAudio",
            maxFreeTunes: 4,
            freeTunes: ['Music pure relaxation', 'Campfire', 'Birds in Forest', 'River'],
            Notes: ['music', '[music]', 'музыка', '[музыка]']
        };
        this.state = {
            fullscreen: localStorage.getItem("meditation-enable-fullscreen") || "off",
            autofullscreen: false,
            relax: false,
            sidebar: {
                open: true,
                fill: false,
                list: false,
                keys: [],
                fade: false,
                shuffle: false,
                shuffleTimer: false
            },
            themes: false,
            themeId: false,
            themeDefault: false,
            playDefault: false,
            prevTimeout: 0,
            RU: false,
            audio: {
                list: {},
                listExample: [],
                order: [],
                loop: localStorage.getItem("relax-audio-loop") || "off",
                volume: 0.7,
                langsAll: [],
                langsUse: JSON.parse(localStorage.getItem("relax-audio-langs") || '["en","ru"]'),
                tunes: 0,
                paused: false,
                loading: false,
                gap: 0.126,
                soundsVolume: JSON.parse(localStorage.getItem("relax-sounds-volume") || '{"id_0":25,"id_1":25}')
            },
            current: {
                trackId: false
            },
            touch: {
                time: Date.now(),
                delay: parseInt(localStorage.getItem("mind-fade")) || 5000,
                hidden: false,
                mouse: false,
                interval: false
            },
            f11: false,
            esc: false,
            pageTitle: "",
            pageIcon: "",
            outTimeout: false
        };
        this.WRAP = {};
        var ts = this;
        if (ts.DEV)
            $(function () {
                $("body").attr("meditation-dev", true);
                ts.load();
            });
    }
    ;
    lspMeditation.prototype.load = function () {
        var ts = this;
        ts.once("init");
        ts.state.relax = true;
        ts.state.playDefault = backgroundVideoActionsState();
        ts.state.touch.time = Date.now() + 5000;
        ts.checkFullScreen();
    };
    ;
    lspMeditation.prototype.once = function (action, callback) {
        var ts = this;
        if (ts.ONCE.indexOf(action) != -1)
            return;
        else
            ts.ONCE.push(action);
        switch (action) {
            case "init":
                ts.initSettings();
                ts.getUI();
                ts.initUI();
                ts.listeners();
                ts.initTabs();
                ts.getThemesList();
                ts.getSoundsListAWS();
                ts.volumeSlider();
                ts.togglePanel("auto");
                break;
            case "sideTimer":
                $(document).on("mousemove", function (e) {
                    ts.state.touch = Date.now();
                    if (ts.state.relax && ts.state.sidebar.fade) {
                        if (!ts.state.mouseInMove) {
                            ts.state.mouseInMove = { status: "compare", pageX: e.pageX, pageY: e.pageY };
                        }
                        else if (typeof ts.state.mouseInMove == "object" && ts.state.mouseInMove.status == "compare") {
                            var diff = Math.abs(ts.state.mouseInMove.pageX - e.pageX) + Math.abs(ts.state.mouseInMove.pageY - e.pageY);
                            if (diff > 50) {
                                if (ts.state.sidebar.fade)
                                    ts.sidebarFade("show");
                            }
                        }
                    }
                });
                $(document).on("keyup", function (e) {
                    ts.state.touch = Date.now();
                    if (e.keyCode != 32) {
                        ts.state.mouseInMove = false;
                        if (ts.state.relax && ts.state.sidebar.fade) {
                            ts.sidebarFade("show");
                        }
                    }
                });
                break;
            default:
                if (callback)
                    callback();
        }
    };
    ;
    lspMeditation.prototype.initSettings = function () {
        var ts = this;
        var volume = parseFloat(localStorage.getItem("relax-volume-tune"));
        if (!isNaN(volume))
            ts.state.audio.volume = volume;
        ts.state.sidebar.open = localStorage.getItem("mind-sidebar") == "hide" ? false : true;
    };
    ;
    lspMeditation.prototype.initTabs = function () {
        var ts = this;
        ts.switchTabs($(".tab-header[tab=" + (localStorage.getItem("mind-sidebar-tab") || "sounds") + "]"));
    };
    ;
    lspMeditation.prototype.getUI = function () {
        var ts = this;
        var $sidebar = $("#mind-sidebar");
        ts.UI.panel = {
            $sidebar: $sidebar,
            $themesWrap: $sidebar.find('#mind-themes-wrap'),
            $themesList: $sidebar.find('#mind-themes-list'),
            $video: $sidebar.find("#relax-sidebar-controls .relax-control-video"),
            $soundsWrap: $sidebar.find('#mind-sounds-wrap'),
            $soundsList: $sidebar.find('#mind-sounds-list'),
            volume: {
                $wrap: $sidebar.find("#mind-sounds-bottom"),
                $slider: $sidebar.find(".mind-volume-slider slider"),
                $down: $sidebar.find(".mind-sounds-volume-down"),
                $up: $sidebar.find(".mind-sounds-volume-up")
            },
            $hide: $sidebar.find('.mind-hide-sidebar'),
            $toggle: $sidebar.find('.mind-open-sidebar'),
            $fullscreen: $sidebar.find('.mind-fullscreen')
        };
        var $tabWraps = $sidebar.find(".active-tabs");
        ts.UI.tabs = {
            $wraps: $tabWraps,
            $head: $tabWraps.find('.tab-header'),
            $body: $tabWraps.find('.tab-body')
        };
        ts.UI.common = {
            $exit: $(".meditation-exit")
        };
    };
    ;
    lspMeditation.prototype.initUI = function () {
        var ts = this;
        ts.fullScreenButton();
    };
    ;
    lspMeditation.prototype.listeners = function () {
        var ts = this;
        ts.UI.tabs.$head.unbind("click").on("click", function (el) {
            ts.switchTabs($(el.currentTarget));
        });
        ts.UI.panel.$themesList.on("mouseover", "li", function (el) {
            clearTimeout(ts.outTimeout);
            ts.toggleVideoPreview($(el.currentTarget), "show");
        });
        ts.UI.panel.$themesList.on("mouseout", "li", function (el) {
            clearTimeout(ts.outTimeout);
            ts.outTimeout = setTimeout(function () {
                if (!ts.UI.panel.$themesList.find('li.preview:hover').length) {
                    ts.toggleVideoPreview($(el.currentTarget), "hide");
                }
            }, 5);
        });
        ts.UI.panel.$themesList.on("click", "li", function (event) {
            if ($(event.currentTarget).hasClass("more-themes-button")) {
                openUrlInNewTab(extensionGetUrl("/pages/options/options.html#navi-bg-live-backgrounds"));
            }
            else {
                ts.setTheme($(event.currentTarget).attr("themeId"));
            }
        });
        ts.UI.panel.$soundsList.on("mousedown", "li", function (event) {
            $target = $(event.currentTarget);
            if (MIND.isPRO(ts.state.audio.list[$target.attr("trackId")].source, { white: true }))
                return false;
        });
        ts.UI.panel.volume.$down.unbind("click").on("click", function () {
            ts.setVolume("-4 steps", "button");
        });
        ts.UI.panel.volume.$up.unbind("click").on("click", function () {
            ts.setVolume("4 steps", "button");
        });
        ts.UI.panel.$hide.unbind("click").on("click", function () {
            ts.togglePanel("hide");
        });
        ts.UI.panel.$toggle.unbind("click").on("click", function () {
            ts.togglePanel("toggle");
        });
        ts.UI.panel.$fullscreen.unbind("click").on("click", function () {
            ts.fullScreenToggle();
        });
        ts.UI.common.$exit.unbind("click").on("click", function () {
            relaxSwitcher("stop");
        });
        document.addEventListener("keydown", function (e) {
            if (ts.state.relax)
                ts.keyboard(e);
            ts.touchEvent('keydown', e);
        }, false);
        $(document).on("mousemove", function (e) {
            ts.touchEvent('mousemove', e);
        });
        $(document).on("mousewheel", function (e) {
            ts.touchEvent('scroll', e);
        });
    };
    ;
    lspMeditation.prototype.touchEvent = function (action, event) {
        var ts = this;
        ts.state.touch.time = Math.max(Date.now(), ts.state.touch.time);
        if (ts.state.touch.hidden) {
            if (action == "mousemove") {
                if (typeof ts.state.touch.mouse == "object") {
                    var diff = Math.abs(ts.state.touch.mouse.pageX - event.pageX) + Math.abs(ts.state.touch.mouse.pageY - event.pageY);
                    if (diff > 50) {
                        ts.meditationFade("show");
                    }
                }
                else {
                    ts.state.touch.mouse = { pageX: event.pageX, pageY: event.pageY };
                }
            }
            else {
                ts.meditationFade("show");
            }
        }
    };
    ;
    lspMeditation.prototype.keyboard = function (event) {
        var ts = this;
        if (AUTH.state.tab)
            return;
        if (ts.state.touch.hidden)
            ts.meditationFade("show");
        var code = event.keyCode;
        if (code == 32) {
            ts.playerControl("toggle");
        }
        else if (code == 38) {
        }
        else if (code == 40) {
        }
        else if (code == 37) {
            ts.togglePanel("open");
        }
        else if (code == 39) {
            ts.togglePanel("hide");
        }
        else if (code == 27) {
            ts.state.esc = true;
            setTimeout(function () {
                ts.state.esc = false;
            }, 150);
            relaxSwitcher("stop");
        }
        else if (code == 122) {
            ts.state.f11 = true;
            setTimeout(function () {
                ts.state.f11 = false;
            }, 150);
        }
    };
    ;
    lspMeditation.prototype.f11Actions = function (callback) {
        var ts = this;
        if (!ts.state.relax)
            callback(false);
        else {
            setTimeout(function () {
                callback(!ts.state.esc);
                if (!ts.state.esc) {
                    ts.checkFullScreen();
                }
            }, 10);
        }
    };
    ;
    lspMeditation.prototype.ifFullScreen = function (callback, reject) {
        if (callback === void 0) { callback = false; }
        if (reject === void 0) { reject = false; }
        var ts = this;
        if (ts.state.fullscreen == "on" && typeof callback == "function")
            callback();
        else if (typeof reject == "function")
            reject();
        return ts.state.fullscreen == "on";
    };
    ;
    lspMeditation.prototype.fullScreenToggle = function () {
        var ts = this;
        ts.state.fullscreen = ts.state.fullscreen == "on" ? "off" : "on";
        localStorage.setItem("meditation-enable-fullscreen", ts.state.fullscreen);
        ts.fullScreenButton();
        ts.switchFullScreen(ts.state.fullscreen == "on");
        MIND.clearCirclePos();
    };
    ;
    lspMeditation.prototype.switchFullScreen = function (mode) {
        var ts = this;
        suspendResizeListener();
        toggleFullScreen(document.body, mode);
    };
    ;
    lspMeditation.prototype.fullScreenControl = function (action) {
        var ts = this;
        if (action == "autostart") {
            if (ts.state.fullscreen != "on") {
                ts.state.autofullscreen = true;
                ts.fullScreenToggle();
            }
        }
        else if (action == "autostop") {
            if (ts.state.autofullscreen && ts.state.fullscreen == "on") {
                ts.state.autofullscreen = false;
                ts.fullScreenToggle();
            }
        }
    };
    ;
    lspMeditation.prototype.fullScreenButton = function () {
        var ts = this;
        if (ts.state.fullscreen == "on")
            ts.UI.panel.$fullscreen.addClass("active");
        else
            ts.UI.panel.$fullscreen.removeClass("active");
    };
    ;
    lspMeditation.prototype.checkFullScreen = function () {
        var ts = this;
        ts.state.fullscreen = checkIsFullScreen() ? "on" : "off";
        ts.fullScreenButton();
    };
    lspMeditation.prototype.meditationFade = function (mode) {
        var ts = this;
        if (mode == "show") {
            $("body").removeAttr("meditation-fade");
            ts.state.touch.hidden = false;
        }
        else if (mode == "hide") {
            $("body").attr("meditation-fade", "fade");
            ts.state.touch.mouse = false;
            ts.state.touch.hidden = true;
        }
        else if (mode == "timer") {
            ts.state.touch.intreval = setInterval(function () {
                var now = Date.now();
                if (now - ts.state.touch.time > ts.state.touch.delay
                    &&
                        !ts.state.touch.hidden) {
                    ts.meditationFade("hide");
                }
            }, 1000);
        }
        else if (mode == "stop") {
            clearInterval(ts.state.touch.intreval);
            ts.meditationFade("show");
        }
    };
    ;
    lspMeditation.prototype.togglePanel = function (mode) {
        var ts = this;
        if (mode == "auto") {
            ts.UI.panel.$sidebar.addClass('noanimate');
            setTimeout(function () {
                ts.UI.panel.$sidebar.removeClass('noanimate');
            }, 1000);
        }
        else if (mode == "toggle") {
            mode = ts.state.sidebar.open ? "hide" : "open";
        }
        if (mode == "hide"
            ||
                mode == "auto" && !ts.state.sidebar.open) {
            ts.UI.panel.$sidebar.attr('hidden', true);
            ts.state.sidebar.open = false;
            ts.toggleVideoPreview(false, "hide");
        }
        else {
            ts.UI.panel.$sidebar.removeAttr('hidden');
            ts.state.sidebar.open = true;
        }
        localStorage.setItem("mind-sidebar", ts.state.sidebar.open ? "open" : "hide");
    };
    ;
    lspMeditation.prototype.setImage = function (themeId, mode) {
        var ts = this;
        ts.highlightTheme(themeId);
        ts.state.themeId = themeId;
        if (themeId) {
            localStorage.setItem("dont-reload-tabs", "3s-" + Date.now());
            BRW_sendMessage({ command: "changeImageBackground", theme: themeId });
            ts.reloadBackground(mode || false);
        }
    };
    ;
    lspMeditation.prototype.setTheme = function (themeId, mode) {
        var ts = this;
        if (!themeId || themeId == ts.state.themeId)
            return;
        else
            ts.state.themeId = themeId;
        ts.highlightTheme(themeId);
        if (ts.state.sidebar.list[themeId].type != "tags") {
            var command = {
                theme: themeId
            };
            if (ts.state.sidebar.list[themeId].lastInstallBgVideo) {
                command.resolution = ts.state.sidebar.list[themeId].lastInstallBgVideo ? ts.state.sidebar.list[themeId].lastInstallBgVideo.resolution : false;
                if (ts.state.sidebar.list[themeId].isFlixelContent) {
                    command.command = "changeFlixerVideoBackground";
                }
                else {
                    command.command = "changeVideoBackground";
                }
            }
            else {
                command.command = "changeImageBackground";
            }
            if (command.command && command.theme) {
                localStorage.setItem("dont-reload-tabs", "3s-" + Date.now());
                ts.reloadBackground(mode || false);
                setRandomIgnore();
                BRW_sendMessage(command);
            }
        }
        else if (ts.state.sidebar.list[themeId].type == "tags") {
            ts.reloadBackground(mode || false);
        }
        VAL.set("video-wallpapers", "on");
    };
    ;
    lspMeditation.prototype.highlightTheme = function (themeId) {
        var ts = this;
        ts.UI.panel.$themesList.find(".active").removeClass("active");
        ts.UI.panel.$themesList.find("[themeId=" + themeId + "]").addClass("active");
    };
    ;
    lspMeditation.prototype.reloadBackground = function (mode) {
        var ts = this;
        var cur = localStorage.getItem("background-video-url");
        var theme = ts.state.sidebar.list[ts.state.themeId];
        var bgWait = setInterval(function () {
            if (String(localStorage.getItem("background-image-file")).indexOf(ts.state.themeId) > -1
                ||
                    String(localStorage.getItem("background-video-file")).indexOf(ts.state.themeId) > -1
                ||
                    theme.type == "tags") {
                clearInterval(bgWait);
                var $body = $("body");
                var $image = $("#background-container");
                var $video = $("#background-container video");
                var $img = $("#background-container img");
                setTimeout(function () {
                    if ($video.length) {
                        $video
                            .css({
                            position: "absolute",
                            top: 0, left: 0
                        })
                            .animate({ "opacity": "0.01" }, (mode == "fast" ? 100 : 1000));
                    }
                    else {
                        $body.css("background-image", "");
                        $image.animate({ "opacity": "0.01" }, (mode == "fast" ? 100 : 1000), function () {
                            $image.delay(15).css({
                                opacity: 1,
                                "background-image": ""
                            });
                        });
                    }
                }, 430);
                setTimeout(function () {
                    $img.remove();
                    $video.remove();
                    if (theme.type != "tags") {
                        BRW_sendMessage({ command: "getBackgroundImage" }, function (response) {
                            if (response) {
                                if (typeof (response.video) != "undefined" && response.video) {
                                    updatePageBackgroundVideo(response, (mode == "fast" ? "fast" : "slide"));
                                    ts.UI.panel.$video.removeClass("hide");
                                }
                                else if (typeof (response.image) != "undefined" && response.image) {
                                    updatePageBackgroundImage(response);
                                    ui.sidebar.$video.addClass("hide");
                                    if (ts.state.relax) {
                                        $image.css({ opacity: 0 }).animate({ "opacity": 1 }, 650);
                                        setMeditationBgImage();
                                    }
                                }
                            }
                        });
                    }
                    else if (theme.type == "tags") {
                        theme.parallaxValue = getBackgroundParallaxValue();
                        theme.enableParallax = getDisplayParallaxVideoTheme();
                        theme.image = theme.source;
                        updatePageBackgroundImage(theme, function () {
                        });
                        ui.sidebar.$video.addClass("hide");
                        if (ts.state.relax) {
                            $image.css({ opacity: 0 }).animate({ "opacity": 1 }, 650);
                            setMeditationBgImage();
                        }
                    }
                }, (450 + (mode == "fast" ? 100 : 1000)));
            }
        }, 150);
    };
    ;
    lspMeditation.prototype.relaxMode = function (mode) {
        var ts = this;
        if (mode == "start") {
            $("body").attr("meditation", true);
            MIND.load();
            ts.load();
            ts.playerControl("play");
            ts.meditationFade("timer");
            ts.switchTitle("start");
        }
        else {
            $("body").removeAttr("meditation", false);
            ts.state.relax = false;
            ts.playerControl("pause");
            MIND.playerControl("exit");
            MIND.state.active = false;
            ts.meditationFade("stop");
            setTimeout(function () { clearRandomIgnore(); }, 0);
            ts.switchTitle("stop");
        }
    };
    ;
    lspMeditation.prototype.switchTitle = function (mode) {
        var ts = this;
        if (mode == "start") {
            ts.state.pageTitle = document.title;
            ts.state.pageIcon = $("link[rel=icon]").attr("href");
            document.title = translate("meditation_title");
            $("link[rel=icon]").attr("href", "/pages/common/mind/img/assets/icon.png");
        }
        else {
            document.title = ts.state.pageTitle;
            $("link[rel=icon]").attr("href", ts.state.pageIcon || "../../img/icon/icon16.png");
        }
    };
    ;
    lspMeditation.prototype.toggleVideoPreview = function ($el, mode) {
        if (mode == "show" && $el.hasClass("preview"))
            return;
        var ts = this;
        clearTimeout(ts.state.prevTimeout);
        if (!$el)
            $el = ts.UI.panel.$themesList.find("li.preview");
        var $video = $el.find("video");
        if (mode == "show") {
            ts.UI.panel.$themesList.find("li.preview").removeClass("preview");
            ts.state.prevTimeout = setTimeout(function () {
                $el.addClass("preview");
                $video.attr("poster", $el.find("img:eq(0)").attr("src"));
                $video.attr("src", $video.attr("set-src"))[0].play();
            }, 500);
        }
        else {
            $el.removeClass("preview");
            $video.attr("src", "");
        }
    };
    ;
    lspMeditation.prototype.switchTabs = function ($tab) {
        if ($tab.hasClass('active'))
            return;
        var $wrap = $tab.parents('.active-tabs');
        var $action = $wrap.find('.tab-header, .tab-body');
        var active = $tab.attr('tab');
        $action.removeClass('active');
        $action.filter('[tab=' + active + ']').addClass('active');
        $wrap.attr('activeTab', active);
        if ($wrap.attr('headerSelector') && $tab.attr('headerMsg')) {
            var $header = $($wrap.attr('headerSelector'));
            $header.text(translate($tab.attr('headerMsg')));
        }
        localStorage.setItem("mind-sidebar-tab", active);
    };
    ;
    lspMeditation.prototype.getThemesList = function () {
        var ts = this;
        ts.state.sidebar.list = getInstalledThemes();
        for (var k in ts.state.sidebar.list) {
            if (!ts.state.sidebar.list[k].isFlixelContent || ts.state.sidebar.list[k].handmade) {
                ts.state.sidebar.list[k].thumbImage = getThemeContentThumbImage(ts.state.sidebar.list[k].id, ts.state.sidebar.list[k].downloadedByUser);
            }
            else {
                ts.state.sidebar.list[k].thumbImage = getFlixelFileThumb(ts.state.sidebar.list[k].id);
            }
            ts.state.sidebar.list[k].type = "gallery";
        }
        try {
            var photo = VAL.get("tags-current");
            if (photo) {
                photo = JSON.parse(photo);
                photo.thumbImage = photo.thumb;
                photo.type = "tags";
                var newList = {};
                newList[photo.id] = photo;
                for (var k in ts.state.sidebar.list)
                    newList[k] = ts.state.sidebar.list[k];
                ts.state.sidebar.list = newList;
            }
        }
        catch (ex) {
            console.warn(ex);
        }
        ts.drawThemesList();
    };
    ;
    lspMeditation.prototype.drawThemesList = function () {
        var ts = this;
        if (ts.state.sidebar.fill)
            return;
        var current = String(localStorage.getItem("background-video-file"));
        var isTags = TAGS.status();
        var idTags = TAGS.id();
        var $ul = [], n = 0;
        ts.state.themeDefault = false;
        ts.state.imageDefault = false;
        ts.state.themeId = false;
        for (var k in ts.state.sidebar.list) {
            if (isTags) {
                if (ts.state.sidebar.list[k].id == idTags) {
                    ts.state.themeDefault = ts.state.sidebar.list[k].id;
                    ts.state.themeId = ts.state.sidebar.list[k].id;
                }
            }
            else if (current && current.indexOf(ts.state.sidebar.list[k].id) != -1) {
                ts.state.themeDefault = ts.state.sidebar.list[k].id;
                ts.state.themeId = ts.state.sidebar.list[k].id;
            }
            if (ts.state.sidebar.list[k].lastInstallBgVideo
                ||
                    (typeof ts.state.sidebar.list[k].bgFilePath == "object"
                        &&
                            Size(ts.state.sidebar.list[k].bgFilePath))
                ||
                    (ts.state.sidebar.list[k].type == "tags")) {
                ts.state.sidebar.keys.push(ts.state.sidebar.list[k].id);
                var $li = $("<li>").attr("themeId", ts.state.sidebar.list[k].id).attr('themeType', ts.state.sidebar.list[k].type);
                if (String(ts.state.sidebar.list[k].id).indexOf('usr') === 0)
                    $li.addClass('hide');
                $li
                    .append($("<img>")
                    .addClass("thumb-image"))
                    .append($("<span>")
                    .addClass("thumb-set")
                    .append($("<span>")
                    .addClass("thumb-set-text")
                    .text(translate("mind_set_theme"))))
                    .append($("<div>")
                    .addClass("thumb-preview")
                    .append($("<div>")
                    .addClass("thumb-preview-inner")
                    .append($("<span>")
                    .addClass("thumb-title")
                    .text(ts.state.sidebar.list[k].title))
                    .append($("<video>")
                    .addClass("thumb-video")
                    .attr("set-src", getVideoThumb(ts.state.sidebar.list[k]))
                    .attr("loop", true))
                    .append((!ts.state.sidebar.list[k].isFlixelContent || ts.state.sidebar.list[k].handmade) ? $("<span>") :
                    $("<a>")
                        .addClass("thumb-link")
                        .attr("href", "http://flixel.com/")
                        .attr("target", "_blank")
                        .text("Flixel"))
                    .append($("<a>")
                    .addClass("thumb-link thumb-author")
                    .attr("href", ts.state.sidebar.list[k].author_url)
                    .attr("target", "_blank")
                    .text(translate("options_tabs_item_chanel_description_text_flixel_bg" + (ts.state.sidebar.list[k].handmade ? "_handmade" : "")) + " " + ts.state.sidebar.list[k].author))));
                if (ts.state.sidebar.list[k].thumbImage) {
                    $li.find("img").attr("src", ts.state.sidebar.list[k].thumbImage);
                }
                else {
                    $li.find("img").attr("need-thumb", ts.state.sidebar.list[k].id);
                    BRW_sendMessage({ command: "getThumbForUserImage", theme: ts.state.sidebar.list[k] });
                }
                if (ts.state.themeDefault && ts.state.themeDefault == ts.state.sidebar.list[k].id) {
                    $li.addClass("active");
                }
                $ul.push($li);
            }
            n++;
        }
        var $btn = $("<li>").addClass("more-themes-button").text(translate("more_themes_button"));
        $ul.push($btn);
        ts.UI.panel.$themesList.html($ul);
        if (!ts.state.themeDefault) {
            ts.state.imageDefault = String(localStorage.getItem("background-image-file")).split("/").shift();
        }
        ts.once("scrollbar-themes", function () {
            ts.UI.panel.$themesWrap.mCustomScrollbar({
                theme: "dark",
                axis: "y",
                autoHideScrollbar: false,
                scrollInertia: 150,
                scrollEasing: "easeOut",
                mouseWheel: {
                    enable: true,
                    axis: "y",
                    normalizeDelta: true,
                    scrollAmount: 100,
                    deltaFactor: 10,
                    normalizeDelta: true
                },
                advanced: {},
                callbacks: {
                    onScroll: function () {
                        MEDITATION.touchEvent('scroll', {});
                    }
                }
            });
        });
    };
    ;
    lspMeditation.prototype.getSoundsListAWS = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ts;
            return __generator(this, function (_a) {
                ts = this;
                MIND.scan("nimbus_sound").then(function () {
                    for (var key in MIND.table.nimbus_sound.data) {
                        var value = MIND.table.nimbus_sound.data[key];
                        var val = [];
                        val.name = value.name.S;
                        val.title = value.name.S;
                        val.image = value.image.S;
                        val.url = value.content.S;
                        val.lang = "all";
                        val.sound = 1;
                        val.category = "Sound";
                        val.duration = 0;
                        if (ts.state.PRO)
                            val.allow = true;
                        else {
                            if (value.premium && value.premium.BOOL === true)
                                val.allow = false;
                            else
                                val.allow = true;
                        }
                        val.source = value;
                        ts.state.audio.list["id_" + value.id.S] = val;
                    }
                    ts.drawSoundslist();
                });
                return [2];
            });
        });
    };
    ;
    lspMeditation.prototype.drawSoundslist = function () {
        var ts = this;
        ts.state.audio.order = [];
        var $ul = {
            'allow': [],
            'disallow': []
        };
        var localAudio = [
            'river_new.mp3',
            'Sound Forest Loop 2.mp3',
            'Cat Purrs-1.mp3',
            'fire-strong.mp3',
            'Fire Burning.mp3',
            'forest-night-ambience.mp3',
            'Night Ambience With Campfire.mp3',
            'ocean-beach-with-seagulls.mp3',
            'ocean-waves.mp3',
            'heavy rain new.mp3',
            'rain light.mp3',
            'J Type - Soundscapes - Rainforest.mp3',
            'Campfire.mp3',
            'Nature_ambience_river_with_birds 2.mp3',
            'Thunderstorm.mp3',
            'Thunderstorm 2.mp3',
            'wind.mp3'
        ];
        for (var key in ts.state.audio.list) {
            if (ts.state.audio.list[key].lang != "all"
                &&
                    ts.state.audio.langsUse.indexOf(ts.state.audio.list[key].lang) == -1) {
                continue;
            }
            var fileName = ts.state.audio.list[key].url.split('/').pop();
            if (localAudio.indexOf(fileName) !== -1) {
                var source = "/default-content/sound/" + fileName;
            }
            else {
                var source = ts.state.audio.list[key].url;
            }
            var $li = $("<li>")
                .addClass("audio-track")
                .attr("trackId", key)
                .attr("source", source)
                .attr("volume", String(ts.state.audio.soundsVolume[key] || 0));
            if (parseInt(ts.state.audio.soundsVolume[key] || 0))
                $li.addClass('active');
            if (key === ts.state.current.trackId)
                $li.addClass("active");
            if (ts.state.audio.list[key].lang != "en"
                &&
                    ts.state.audio.list[key].name_ru
                &&
                    ts.state.RU) {
                var title = ts.state.audio.list[key].name_ru;
            }
            else {
                var title = ts.state.audio.list[key].name;
            }
            ts.state.audio.list[key].title = title;
            var titleClasses = "audio-track-name";
            var $slider = ts.createSoundSlider($li, key);
            $li
                .attr("custom-tooltip", title)
                .append($("<span>")
                .addClass("audio-track-icon")
                .append($("<img>")
                .attr("src", ts.state.audio.list[key].image))
                .append($("<span>")
                .addClass("audio-track-pro")))
                .append($("<span>")
                .addClass('audio-track-body')
                .append($("<span>")
                .addClass(titleClasses)
                .text(title))
                .append($("<span>")
                .addClass("audio-track-slider")
                .append($slider))
                .append($("<span>")
                .addClass("audio-track-duration")
                .text(ts.state.audio.list[key].duration))
                .append($("<span>")
                .addClass("audio-track-loading")));
            $audio = $("<audio>").attr("src", source);
            $audio[0].volume = ts.soundVolume(key);
            $li.append($audio);
            $audio = $("<audio>").attr("src", source);
            $audio[0].volume = ts.soundVolume(key);
            $li.append($audio);
            if (ts.state.audio.list[key].allow) {
                ts.state.audio.order.push(key);
            }
            else {
                $li.addClass("audio-disallow");
            }
            $ul[(ts.state.audio.list[key].allow ? 'allow' : 'disallow')].push($li);
        }
        ts.UI.panel.$soundsList.html("").removeClass("loading");
        ts.UI.panel.$soundsWrap.removeClass("content-loading");
        if (Size($ul['allow']))
            ts.UI.panel.$soundsList.append($ul['allow']);
        if (Size($ul['disallow']))
            ts.UI.panel.$soundsList.append($ul['disallow']);
        ts.once("scrollbar-sounds", function () {
            ts.UI.panel.$soundsWrap.mCustomScrollbar({
                theme: "dark",
                axis: "y",
                autoHideScrollbar: false,
                scrollInertia: 150,
                scrollEasing: "easeOut",
                mouseWheel: {
                    enable: true,
                    axis: "y",
                    normalizeDelta: true,
                    scrollAmount: 100,
                    deltaFactor: 10,
                    normalizeDelta: true
                },
                advanced: {},
                callbacks: {
                    onScroll: function () {
                        MEDITATION.touchEvent('scroll', {});
                    }
                }
            });
        });
        ts.once("play-sounds", function () {
            ts.playerControl("play");
        });
    };
    ;
    lspMeditation.prototype.createSoundSlider = function ($li, trackId) {
        var ts = this;
        var $slider = $("<slider>").slider({
            range: "min",
            value: parseInt($li.attr("volume") || 0),
            min: 0,
            max: 100,
            slide: function (event, jqui) {
                $li.attr("volume", jqui.value);
                ts.playerControl("sound", { $li: $li });
            },
            stop: function (event, jqui) {
                ts.playerControl("sound", { $li: $li, write: true });
            }
        });
        return $slider;
    };
    ;
    lspMeditation.prototype.playerControl = function (action, mode) {
        var ts = this;
        if (typeof mode !== "object")
            mode = { mode: mode || false };
        if (action == "toggle") {
            action = ts.state.audio.paused ? "play" : "pause";
        }
        if (action == "sound") {
            var volume_1 = parseInt(mode.$li.attr("volume")) || 0;
            if (volume_1 == 0) {
                if (mode.$li.hasClass("active")) {
                    mode.$li.removeClass("active");
                    ts.soundStop(mode.$li.find("audio"));
                }
            }
            else {
                var audio = mode.$li.find("audio");
                audio.each((function (i, el) {
                    el.volume = volume_1 * ts.state.audio.volume / 100;
                }));
                if (!mode.$li.hasClass("active")) {
                    mode.$li.addClass("active");
                    ts.soundLoop(audio);
                }
            }
            if (mode.write) {
                ts.state.audio.soundsVolume[mode.$li.attr("trackId")] = volume_1;
                localStorage.setItem("relax-sounds-volume", JSON.stringify(ts.state.audio.soundsVolume));
            }
        }
        else if (action == "volume") {
            ts.UI.panel.$soundsList.find("li.active").each(function (i, el) {
                ts.playerControl("sound", { $li: $(el) });
            });
        }
        else if (action == "play") {
            ts.state.keyPaused = false;
            ts.state.audio.paused = false;
            ts.UI.panel.$soundsList.find("li").each(function (i, el) {
                var audio = $(el).find("audio")[0];
                var src = $(el).find("audio").attr("src");
                if ($(el).hasClass("active")) {
                    ts.soundLoop($(el).find("audio"));
                }
                else {
                }
            });
        }
        else if (action == "pause") {
            ts.state.audio.paused = true;
            ts.UI.panel.$soundsList.find("li").each(function (i, el) {
                if ($(el).hasClass("active")) {
                    ts.soundStop($(el).find("audio"));
                }
            });
        }
    };
    ;
    lspMeditation.prototype.soundLoop = function ($audio) {
        var ts = this;
        if ($audio[0].paused && $audio[1].paused) {
            var cur = 0;
            var interval = Math.max(50, Math.round(1000 * ts.state.audio.gap / 30));
            var startLoad = Date.now();
            $audio[1].currentTime = ts.state.audio.gap;
            $audio[0].currentTime = ts.state.audio.gap;
            $audio[0].load();
            var listenerIsActive = true;
            $audio[0].addEventListener("canplaythrough", function (e) {
                if (listenerIsActive) {
                    listenerIsActive = false;
                    setTimeout(function () {
                        $audio[0].play();
                    }, 50);
                }
            });
            var $li = $audio.parent("li");
            var i = 0;
            clearInterval(ts.LOADER[$audio.attr("src")]);
            ts.LOADER[$audio.attr("src")] = setInterval(function () {
                if ($audio[0].currentTime > ts.state.audio.gap) {
                    clearInterval(ts.LOADER[$audio.attr("src")]);
                    ts.soundLoopInterval($audio);
                    $li.removeClass("loading");
                }
                else if (i * interval < 650 && i * interval > 450) {
                    $li.addClass("loading");
                }
                i++;
            }, interval);
        }
    };
    ;
    lspMeditation.prototype.soundVolume = function (trackId) {
        var ts = this;
        var volume = ts.state.audio.volume * (ts.state.audio.soundsVolume[trackId] || 0) / 100;
        ;
        return volume;
    };
    lspMeditation.prototype.soundLoopInterval = function ($audio) {
        var ts = this;
        var trackId = $audio.parents("[trackId]").attr("trackId");
        var cur = 0;
        clearInterval(ts.INTERVAL[$audio.attr("src")]);
        ts.INTERVAL[$audio.attr("src")] = setInterval(function () {
            if (ts.debug)
                console.info("Current: [" + cur + "]", Math.round($audio[cur].currentTime * 10) / 10, '/', Math.round($audio[cur].duration * 10) / 10, "Volume:", $audio[0].volume == $audio[1].volume, $audio[0].volume, $audio[1].volume);
            if (($audio[cur].duration - $audio[cur].currentTime) < 2 * ts.state.audio.gap) {
                var pre = cur;
                ts.soundLoopPrepare($audio, trackId, pre);
                cur = cur ? 0 : 1;
                $audio[cur].volume = ts.soundVolume(trackId);
                $audio[cur].play();
            }
        }, 1000 * ts.state.audio.gap);
    };
    ;
    lspMeditation.prototype.soundLoopPrepare = function ($audio, trackId, cur) {
        var ts = this;
        var v = 0;
        var interval = setInterval(function () {
            v++;
            $audio[cur].volume = (10 - v) * ts.soundVolume(trackId) / 10;
            if (v == 9)
                clearInterval(interval);
        }, 210 * ts.state.audio.gap);
        setTimeout(function () {
            $audio[cur].pause();
            $audio[cur].currentTime = ts.state.audio.gap;
            $audio[cur].volume = ts.soundVolume(trackId);
        }, 3000 * ts.state.audio.gap);
    };
    ;
    lspMeditation.prototype.soundStop = function ($audio) {
        var ts = this;
        $audio[0].pause();
        $audio[1].pause();
        clearInterval(ts.INTERVAL[$audio.attr("src")]);
    };
    ;
    lspMeditation.prototype.volumeSlider = function () {
        var ts = this;
        ts.UI.panel.volume.$slider.slider({
            range: "min",
            value: 100 * ts.state.audio.volume,
            min: 0,
            max: 100,
            slide: function (event, jqui) {
                ts.setVolume(jqui.value / 100);
            },
            stop: function (event, jqui) {
                ts.setVolume(jqui.value / 100, ["write"]);
            }
        });
    };
    ;
    lspMeditation.prototype.setVolume = function (vol, mode) {
        var ts = this;
        if (String(vol).indexOf("steps") != -1) {
            var step = parseInt(vol);
            var part = 1 / Math.abs(step);
            var vol = (Math.floor(ts.state.audio.volume / part) + (step / Math.abs(step))) * part;
            vol = Math.max(0, Math.min(1, vol));
        }
        ts.state.audio.volume = vol;
        ts.playerControl("volume");
        if (typeof mode !== "object")
            mode = [mode];
        if (mode.indexOf("write") !== -1 || mode.indexOf("button") !== -1)
            localStorage.setItem("relax-volume-tune", vol);
        if (mode.indexOf("button") !== -1 || mode.indexOf("mirror") !== -1)
            ts.UI.panel.volume.$slider.slider("value", Math.round(100 * vol));
        if (mode.indexOf("mirror") === -1) {
            mode.push("mirror");
        }
    };
    ;
    lspMeditation.prototype.GET = function (opt) {
        var ts = this;
        var options = opt;
        var xhr = BRW_json(ts.vars.SRV + options.api, function (result) {
            if (result.error == 0) {
                if (options.success)
                    options.success(result.list);
            }
            else {
                if (options.error)
                    options.error(result);
            }
            xhr = null;
        }, function (error) {
            if (errorFunc)
                errorFunc(error);
        });
        return xhr;
    };
    ;
    return lspMeditation;
}());
$(function () {
    setTimeout(function () {
        MIND = new lspMind();
        MEDITATION = new lspMeditation();
    }, mindDEV ? 1000 : 0);
});
//# sourceMappingURL=mind.js.map
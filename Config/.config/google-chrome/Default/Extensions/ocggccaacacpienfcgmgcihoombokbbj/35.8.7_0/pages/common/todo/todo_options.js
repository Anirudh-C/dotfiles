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
var lspChaosOptions = (function () {
    function lspChaosOptions() {
        this.DEV = false;
        this.ONCE = [];
        this.UI = {};
        this.datePicker = false;
        this.state = {};
        var ts = this;
    }
    ;
    lspChaosOptions.prototype.load = function () {
        var ts = this;
        ts.once('init');
    };
    ;
    lspChaosOptions.prototype.once = function (action, callback) {
        var ts = this;
        if (ts.ONCE.indexOf(action) != -1)
            return;
        else
            ts.ONCE.push(action);
        switch (action) {
            case "init":
                ts.getUI();
                ts.listeners();
                ts.setAPI('chaos');
                break;
            default:
                if (callback)
                    callback();
        }
    };
    ;
    lspChaosOptions.prototype.getUI = function () {
        var ts = this;
        var $WRAP = $("#todo-chaos-options");
        ts.UI = {
            $wrap: $WRAP,
            bottom: {
                $hasAuth: $WRAP.find(".chaos-bottom.has-auth"),
                $noAuth: $WRAP.find(".chaos-bottom.no-auth"),
                $pro: $WRAP.find(".todo-chaos-get-pro"),
                $login: $WRAP.find(".chaos-login-here"),
                $countdown: $WRAP.find(".chaos-desc-countdown")
            },
            auth: {
                $curtain: $WRAP.find('.chaos-curtain'),
                $login: $WRAP.find('.chaos-popup [name=ta-login]'),
                $pass: $WRAP.find('.chaos-popup [name=ta-pass]'),
                $submit: $WRAP.find('.chaos-popup [name=ta-submit]'),
                $form: $WRAP.find('.chaos-popup input, .chaos-popup [name=ta-submit]'),
                $warn: $WRAP.find('.chaos-popup .ta-warn'),
                $input: $WRAP.find('.chaos-popup input'),
                $close: $WRAP.find('.chaos-popup-close')
            },
            button: {
                $login: $WRAP.find('.chaos-login'),
                $logout: $WRAP.find('.chaos-logout'),
                $pro: $WRAP.find('.chaos-get-pro')
            }
        };
    };
    ;
    lspChaosOptions.prototype.listeners = function () {
        var ts = this;
        ts.UI.auth.$input.on("change", function (el) {
            $(el.currentTarget).removeClass('warn');
        });
        ts.UI.auth.$submit.on("click", function (el) {
            ts.login();
        });
        ts.UI.auth.$login.on("keypress", function (event) {
            var keyCode = event.keyCode || event.which;
            if (keyCode == 13)
                ts.login();
        });
        ts.UI.auth.$pass.on("keypress", function (event) {
            var keyCode = event.keyCode || event.which;
            if (keyCode == 13)
                ts.login();
        });
        ts.UI.button.$login.on("click", function (el) {
            ts.draw("login", true);
        });
        ts.UI.button.$logout.on("click", function (el) {
            ts.logout();
        });
        ts.UI.button.$pro.on("click", function (el) {
            AUTH.isPremium("discovered");
        });
        ts.UI.auth.$curtain.on("click", function (el) {
            if ($(el.target).hasClass('chaos-curtain')) {
                ts.draw("login", false);
            }
        });
        ts.UI.auth.$close.on("click", function (el) {
            ts.draw("login", false);
        });
    };
    ;
    lspChaosOptions.prototype.keyboard = function (event) {
        var ts = this;
    };
    ;
    lspChaosOptions.prototype.draw = function (actions, mode) {
        return __awaiter(this, void 0, void 0, function () {
            var ts, _loop_1, _i, actions_1, action;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ts = this;
                        if (typeof actions != "object")
                            actions = [actions || false];
                        if (typeof mode != "object")
                            mode = { mode: mode || false };
                        _loop_1 = function (action) {
                            var _a, metaData, expiries_1;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        _a = action;
                                        switch (_a) {
                                            case "login": return [3, 1];
                                            case "auth_warn": return [3, 2];
                                            case "auth_loading": return [3, 3];
                                            case "bottom": return [3, 4];
                                            case "pro": return [3, 7];
                                        }
                                        return [3, 9];
                                    case 1:
                                        if (mode.mode) {
                                            ts.UI.$wrap.attr("popup", "login");
                                        }
                                        else {
                                            ts.UI.$wrap.removeAttr("popup");
                                        }
                                        return [3, 9];
                                    case 2:
                                        if (mode.text) {
                                            setTimeout(function () {
                                                ts.UI.auth.$warn.addClass('active').text(mode.text);
                                            }, 150);
                                        }
                                        else {
                                            ts.UI.auth.$warn.removeClass('active').text('');
                                        }
                                        return [3, 9];
                                    case 3:
                                        if (mode.wait) {
                                            ts.UI.auth.$form.attr("disabled", "disabled").addClass('wait');
                                        }
                                        else {
                                            ts.UI.auth.$form.removeAttr("disabled").removeClass('wait');
                                        }
                                        return [3, 9];
                                    case 4:
                                        ts.UI.$wrap.attr("mode", mode.auth ? "has-auth" : "no-auth");
                                        if (!mode.auth) return [3, 6];
                                        return [4, LSP.Msg.send('TodoBack.API.getMeta', true)];
                                    case 5:
                                        metaData = _b.sent();
                                        ts.UI.bottom.$login.text(metaData.login);
                                        ts.draw('pro');
                                        _b.label = 6;
                                    case 6: return [3, 9];
                                    case 7: return [4, LSP.Msg.send('TodoBack.API.getTrialRest', true)];
                                    case 8:
                                        expiries_1 = _b.sent();
                                        waitAuth(function () {
                                            if (AUTH.isPremium()) {
                                                ts.UI.bottom.$pro.addClass('hide');
                                            }
                                            else {
                                                ts.UI.bottom.$pro.removeClass('hide');
                                                ts.UI.bottom.$countdown.text(numEnding(expiries_1, '', translate('options_chaos_countdown_1')).replace('#', String(expiries_1)));
                                            }
                                        });
                                        return [3, 9];
                                    case 9: return [2];
                                }
                            });
                        };
                        _i = 0, actions_1 = actions;
                        _a.label = 1;
                    case 1:
                        if (!(_i < actions_1.length)) return [3, 4];
                        action = actions_1[_i];
                        return [5, _loop_1(action)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3, 1];
                    case 4: return [2];
                }
            });
        });
    };
    ;
    lspChaosOptions.prototype.setAPI = function (apiName) {
        return __awaiter(this, void 0, void 0, function () {
            var ts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ts = this;
                        if (apiName)
                            ts.state.service = apiName;
                        return [4, LSP.Msg.send('TodoBack.setAPI', [ts.state.service], true)];
                    case 1:
                        _a.sent();
                        ts.auth({ login: true, cb: function (success) {
                                ts.draw("bottom", { auth: success });
                            } });
                        return [2];
                }
            });
        });
    };
    ;
    lspChaosOptions.prototype.setService = function (apiName) {
        var ts = this;
        ts.state.service = apiName;
        VAL.set("todo.service", ts.state.service);
        BRW_sendMessage({ command: "todoFrontend:setService" });
    };
    ;
    lspChaosOptions.prototype.auth = function (data) {
        var ts = this;
        if (typeof data != "object") {
            if (typeof data == "function") {
                data = { login: false, cb: data };
            }
            else {
                data = { data: data, login: true, cb: false };
            }
        }
        LSP.Msg.send('TodoBack.API.checkAuth', [{}], true).then(function (state) {
            if (!state && data.login) {
                ts.draw("login");
            }
            if (typeof data.cb == "function")
                data.cb(state);
        });
    };
    ;
    lspChaosOptions.prototype.logout = function () {
        var ts = this;
        LSP.Msg.send('TodoBack.API.logout');
        ts.setService('lsp');
        ts.draw("bottom", { auth: false });
        BRW_sendMessage({ command: "todoFrontend:logout" });
    };
    ;
    lspChaosOptions.prototype.login = function () {
        var ts = this;
        ts.draw('auth_warn', false);
        var login = ts.UI.auth.$login.val().trim();
        var pass = ts.UI.auth.$pass.val().trim();
        var warn = false;
        if (!login) {
            ts.UI.auth.$login.addClass('warn');
            warn = translate('todo_auth_err_login');
        }
        if (!pass) {
            ts.UI.auth.$pass.addClass('warn');
            warn = warn ? translate('todo_auth_err_both') : translate('todo_auth_err_pass');
        }
        if (warn) {
            ts.draw('auth_warn', { text: warn });
        }
        else {
            ts.draw('auth_loading', { wait: true });
            LSP.Msg.send('TodoBack.API.checkAuth', [{ LOGIN: login, PASS: pass }], true).then(function (state) {
                setTimeout(function () {
                    ts.draw('auth_loading', { wait: false });
                    if (!state) {
                        ts.draw('auth_warn', { text: translate('todo_auth_err_reject') });
                    }
                    else {
                        ts.draw("login");
                        ts.draw("bottom", { auth: state });
                        ts.setService('chaos');
                        ts.getList(true);
                    }
                }, 1e3);
            });
        }
    };
    ;
    lspChaosOptions.prototype.getList = function (data) {
        var ts = this;
        if (typeof data !== "object")
            data = { force: data || false };
        LSP.Msg.send('TodoBack.API.getDataList', [data], true).then(function (success) {
            console.info(success);
        });
    };
    ;
    return lspChaosOptions;
}());
$(function () {
    if ($("#todo-chaos-options").length) {
        TODO = new lspChaosOptions();
        TODO.load();
    }
});
//# sourceMappingURL=todo_options.js.map
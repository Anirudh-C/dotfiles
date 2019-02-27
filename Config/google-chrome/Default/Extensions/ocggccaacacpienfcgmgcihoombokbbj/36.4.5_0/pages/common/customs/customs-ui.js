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
var classCustomsUI = (function () {
    function classCustomsUI() {
        this.DEV = true;
        this.ONCE = [];
        this.UI = {};
        this.actions = CUSTOMS.actions;
        this.state = {};
        this.locale = {
            restore: translate('customs_list_restore'),
            remove: translate('customs_list_remove'),
            edit: translate('customs_list_edit'),
            will_message: translate("customs_will_backup_message"),
            will_list: translate("customs_will_backup_list")
        };
        console.info('Customs UI constructor');
    }
    ;
    classCustomsUI.prototype.init = function () {
        var ts = this;
        ts.once('init');
    };
    ;
    classCustomsUI.prototype.once = function (action, callback) {
        var ts = this;
        if (ts.ONCE.indexOf(action) != -1)
            return;
        else
            ts.ONCE.push(action);
        switch (action) {
            case "init":
                console.info('Customs UI', 'init');
                ts.getUI();
                ts.listeners();
                ts.getAuth();
                break;
            default:
                if (callback)
                    callback();
        }
    };
    ;
    classCustomsUI.prototype.getUI = function () {
        var ts = this;
        var $WRAP = $("#customs-block");
        ts.UI = {
            $wrap: $WRAP,
            btns: {
                $create: $WRAP.find('#customs-create-btn'),
                $restore: $WRAP.find('#customs-restore-btn'),
                $login: $WRAP.find('#customs-login-btn'),
                $premium: $WRAP.find('#customs-premium-btn')
            },
            progress: {
                $wrap: $WRAP.find('#customs-informer'),
                $info: $WRAP.find('#customs-informer .customs-informer-progress'),
                $reload: $WRAP.find('#customs-informer #customs-reload-btn'),
                $seconds: $WRAP.find('#customs-informer #customs-reload-btn t')
            },
            $list: $WRAP.find('#customs-list')
        };
    };
    ;
    classCustomsUI.prototype.listeners = function () {
        var ts = this;
        ts.UI.btns.$create.unbind("click").on("click", function (e) {
            ts.createConfirmation();
        });
        ts.UI.btns.$restore.unbind("click").on("click", function (e) {
        });
        ts.UI.$list.on("click", ".customs-list-icons i", function (event) {
            ts.actionsButton($(event.currentTarget));
        });
        ts.UI.$list.on("click", ".customs-list-button .btn", function (event) {
            ts.actionsButton($(event.currentTarget));
        });
        ts.UI.progress.$reload.unbind("click").on("click", function (e) {
            ts.UI.progress.$reload.attr("disabled", "disabled");
            ts.actions.reloadAllPages();
        });
        ts.UI.btns.$login.unbind("click").on("click", function (e) {
            AUTH.tab("login");
        });
        ts.UI.btns.$premium.unbind("click").on("click", function (e) {
            AUTH.isPremium("discovered");
        });
    };
    ;
    classCustomsUI.prototype.getAuth = function () {
        var ts = this;
        waitAuth(function (useAuth) {
            console.info('getAuth', useAuth);
            if (AUTH.getLogin() == "Not authorized") {
                ts.state.auth = false;
                ts.state.pro = false;
                ts.draw(["auth"]);
            }
            else {
                ts.state.auth = true;
                ts.state.pro = AUTH.isPremium() ? true : false;
                ts.draw(["auth", "customs-list"]);
            }
        });
    };
    ;
    classCustomsUI.prototype.draw = function (actions, mode) {
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
                            var _a, list, _i, _b, item, values, $li, $name, $icons, $button, max_1, $last_1;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        _a = action;
                                        switch (_a) {
                                            case "customs-list": return [3, 1];
                                            case "highlight": return [3, 3];
                                            case "empty": return [3, 4];
                                            case "loading": return [3, 5];
                                            case "progress": return [3, 6];
                                            case "auth": return [3, 7];
                                            case "error": return [3, 8];
                                        }
                                        return [3, 9];
                                    case 1:
                                        ts.draw('loading', true);
                                        return [4, ts.actions.getList()];
                                    case 2:
                                        _c.sent();
                                        list = [];
                                        for (_i = 0, _b = ts.actions.list.items; _i < _b.length; _i++) {
                                            item = _b[_i];
                                            values = JSON.parse(item.value);
                                            $li = $('<li>')
                                                .addClass('customs-list-item')
                                                .attr('uuidHead', item.uuid)
                                                .attr('uuidData', values.uuidData)
                                                .attr('date', values.date)
                                                .css('order', -1 * parseInt(String(values.date).substr(2, 8)) || 0);
                                            $name = $('<span>')
                                                .addClass('customs-list-name')
                                                .text(values.name);
                                            $icons = $('<span>').addClass('customs-list-icons')
                                                .append($('<i>')
                                                .attr('action', 'edit')
                                                .addClass("fa fa-pencil")
                                                .attr('title', ts.locale.edit))
                                                .append($('<i>')
                                                .attr('action', 'remove')
                                                .addClass("fa fa-trash")
                                                .attr('title', ts.locale.remove));
                                            $button = $('<span>').addClass('customs-list-button')
                                                .append($('<span>')
                                                .attr('action', 'restore')
                                                .addClass("btn btn-mini btn-success")
                                                .text(ts.locale.restore));
                                            $li.append($icons);
                                            $li.append($name);
                                            $li.append($button);
                                            list.push($li);
                                        }
                                        ts.UI.$list.html('').append(list);
                                        ts.draw(['empty', 'loading'], false);
                                        return [3, 9];
                                    case 3:
                                        max_1 = 0;
                                        ts.UI.$list.find('li').each(function (N, el) {
                                            max_1 = Math.max(parseInt($(el).attr('date')) || 0, max_1);
                                        });
                                        $last_1 = ts.UI.$list.find("li[date=" + max_1 + "]");
                                        setTimeout(function () {
                                            $last_1.addClass('transition').addClass('highlight');
                                        }, 10);
                                        setTimeout(function () {
                                            $last_1.removeClass('highlight');
                                            setTimeout(function () {
                                                $last_1.removeClass('transition');
                                            }, 1e3);
                                        }, 15e2);
                                        return [3, 9];
                                    case 4:
                                        if (!ts.UI.$list.find('li').length) {
                                            ts.UI.$list.append($('<li>')
                                                .addClass('customs-list-empty')
                                                .text(translate('customs_empty_message')));
                                        }
                                        return [3, 9];
                                    case 5:
                                        if (mode.mode) {
                                            ts.UI.$wrap.addClass('loading');
                                        }
                                        else {
                                            ts.UI.$wrap.removeClass('loading');
                                        }
                                        return [3, 9];
                                    case 6:
                                        ts.UI.progress.$wrap.removeClass('hide');
                                        ts.UI.progress.$info.text(Math.ceil(100 * parseInt(mode.info.ready) / parseInt(mode.info.need)) + '%');
                                        if (mode.countdown !== false) {
                                            ts.UI.progress.$reload.removeClass('hide');
                                            ts.UI.progress.$seconds.text(mode.countdown);
                                        }
                                        return [3, 9];
                                    case 7:
                                        ts.UI.$wrap.attr('mode', ts.state.auth && ts.state.pro ? 'auth' : 'not-auth');
                                        return [3, 9];
                                    case 8:
                                        alert(mode.error || 'Error');
                                        ts.draw('loading');
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
    classCustomsUI.prototype.actionsButton = function ($action) {
        var ts = this;
        var action = $action.attr('action');
        var $item = $action.parents('.customs-list-item');
        var uuidHead = $item.attr('uuidHead');
        var uuidData = $item.attr('uuidData');
        var $name = $item.find('.customs-list-name');
        var name = $name.text();
        if (!action || !uuidHead || !uuidData)
            return;
        if (action == 'edit') {
            ts.dialogName(name, translate("customs_settings_rename_title"), translate("customs_settings_rename"), function (value) {
                if (value) {
                    $name.text(value);
                    ts.actions.rename(uuidHead, value);
                }
            });
        }
        else if (action == 'remove') {
            dialogConfirm({
                title: translate("customs_remove_title"),
                message: $('<span>').addClass('dialog-message-center-big').text(name),
                confirmTxt: translate("customs_list_remove"),
                cancelHide: false,
                confirm: function () {
                    $item.remove();
                    ts.draw('empty');
                    ts.actions.remove(uuidHead);
                }
            });
        }
        else if (action == 'restore') {
            dialogConfirm({
                title: translate("customs_restore_title"),
                message: $('<span>').addClass('dialog-message-center-big').text(name),
                confirmTxt: translate("customs_list_restore"),
                cancelHide: false,
                confirm: function () {
                    ts.draw('loading', true);
                    ts.actions.restore(uuidHead);
                }
            });
        }
    };
    ;
    classCustomsUI.prototype.createConfirmation = function () {
        var ts = this;
        var name = ts.nameGenerator();
        ts.dialogName(name, translate("customs_settings_create_title"), translate("customs_settings_create"), function (value) {
            ts.draw('loading', true);
            ts.actions.create(value);
        });
    };
    ;
    classCustomsUI.prototype.dialogName = function (value, title, button, cb) {
        var ts = this;
        var $input = $("<input>")
            .addClass("input-modal")
            .attr('placeholder', translate("customs_settings_create_placeholder"))
            .attr('maxlength', 100)
            .val(value);
        var $html = $("<div>")
            .append($("<div>")
            .addClass("common-modal-body-inputs")
            .append($input))
            .append($("<div>")
            .addClass("common-modal-body-list")
            .append($('<p>')
            .append($("<h5>").text(ts.locale.will_message))
            .append($("<span>").text(ts.locale.will_list))))
            .append($("<div>")
            .addClass("common-modal-body-buttons")
            .append($("<button>")
            .attr("data-dismiss", "modal")
            .addClass("btn btn-success options-common-popup-btn options-common-popup-hide relative min-w96")
            .text(button)
            .on("click", function () {
            if (cb)
                cb($input.val());
        })));
        dialogConfirm({
            title: title,
            message: $html,
            noButtons: true
        });
        setTimeout(function () {
            $input.focus();
        }, 500);
    };
    ;
    classCustomsUI.prototype.nameGenerator = function () {
        var name = 'Backup ';
        name += String(browserName()).capitalizeFirstLetter();
        name += ', ' + (new Date()).toLocaleString();
        return name;
    };
    ;
    return classCustomsUI;
}());
CUSTOMS.ui = new classCustomsUI();
//# sourceMappingURL=customs-ui.js.map
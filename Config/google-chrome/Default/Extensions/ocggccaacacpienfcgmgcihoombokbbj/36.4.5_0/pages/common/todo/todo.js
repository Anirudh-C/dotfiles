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
var todoDEV = false;
var TODO;
var lspToDo = (function () {
    function lspToDo() {
        this.DEV = todoDEV || false;
        this.ONCE = [];
        this.UI = {};
        this.datePicker = false;
        this.timePicker = false;
        this.state = {
            service: VAL.get("todo.service") || "lsp",
            update: {
                interval: 15 * 60 * 1e3,
                last: VAL.get("todo.updated") || 0,
                process: false,
                clicks: 0
            },
            editing: {},
            model: {
                task: {
                    id: null,
                    title: '',
                    complete: false,
                    start: 0,
                    due: 0,
                    startH: '',
                    dueH: '',
                    today: false,
                    overdue: false,
                    order: 0
                }
            },
            menu: {
                active: false
            },
            locale: {
                due: translate('todo_due') + ':',
                start: translate('todo_start') + ':',
                copy: translate('copy_task'),
                edit: translate('todo_actions_edit'),
                "delete": translate('todo_actions_delete'),
                date: translate('set_date'),
                task_edit: translate('todo_edit_task'),
                task_new: translate('todo_new_task'),
                warn_title: translate('todo_warn_fill_title'),
                no_tasks: translate('todo_no_tasks_count'),
                countdown: translate('options_chaos_countdown_widget')
            },
            tabs: VAL.get('todo.tabs', 'json') || {},
            promo: {
                limit: 3,
                showDelay: 2 * 24 * 60 * 60 * 1000,
                shown: parseInt(localStorage.getItem('todo-promo-shown')) || 0,
                lastShown: parseInt(localStorage.getItem('todo-promo-shown-time')) || parseInt(getAppInstalledDate()) || 0,
                shownOnPage: false
            },
            pro: {
                hide: false,
                expired: false
            },
            clockFormat: getClockFormat(),
            dayEnd: (23 * 60 + 59) * 60e3,
            redraw: false
        };
        var ts = this;
    }
    ;
    lspToDo.prototype.load = function () {
        var ts = this;
        ts.once('init');
    };
    ;
    lspToDo.prototype.once = function (action, callback) {
        var ts = this;
        if (ts.ONCE.indexOf(action) != -1)
            return;
        else
            ts.ONCE.push(action);
        switch (action) {
            case "init":
                ts.getUI();
                ts.listeners();
                ts.draw(["menu", "body", "tasks-tabs-all", "task-scroll", "sortable"]);
                ts.setAPI(true);
                ts.draw(["date-picker-init", "promo-global"]);
                break;
            default:
                if (callback)
                    callback();
        }
    };
    ;
    lspToDo.prototype.getUI = function () {
        var ts = this;
        var $WRAP = $("#todo-container");
        ts.UI = {
            $wrap: $WRAP,
            menu: {
                $button: $WRAP.find("#todo-more-button"),
                $wrap: $WRAP.find("#todo-more"),
                $ul: $WRAP.find("#todo-services"),
                $li: $WRAP.find("#todo-services li")
            },
            internal: {
                $body: $WRAP.find('.todo-main-content')
            },
            services: {
                $body: $WRAP.find('.todo-service-content'),
                $data: $WRAP.find('.todo-tasks'),
                $auth: $WRAP.find('.todo-auth'),
                $sync: $WRAP.find('#todo-sync-button'),
                user: {
                    $wrap: $WRAP.find('#todo-user'),
                    $button: $WRAP.find('#todo-user-button'),
                    $name: $WRAP.find('.todo-user-name'),
                    $logout: $WRAP.find('.todo-user-logout')
                },
                auth: {
                    $logo: $WRAP.find('.todo-auth .ta-logo'),
                    $submit: $WRAP.find('.todo-auth [name=ta-submit]'),
                    $login: $WRAP.find('.todo-auth [name=ta-login]'),
                    $pass: $WRAP.find('.todo-auth [name=ta-pass]'),
                    $form: $WRAP.find('.todo-auth input, .todo-auth [name=ta-submit]'),
                    $warn: $WRAP.find('.todo-auth .ta-warn'),
                    $back: $WRAP.find('.todo-auth [name=ta-back]')
                },
                projects: {
                    $wrap: $WRAP.find('#todo-projects-wrap'),
                    $list: $WRAP.find('#todo-projects'),
                    $current: $WRAP.find('.todo-project-current')
                },
                tasks: {
                    $inner: $WRAP.find('.todo-tasks-inner'),
                    $list: $WRAP.find('.todo-tasks-list'),
                    $active: $WRAP.find('.todo-tasks-active'),
                    $complete: $WRAP.find('.todo-tasks-complete'),
                    $tabs: $WRAP.find('.todo-tasks-tab'),
                    $activeTab: $WRAP.find('.todo-tasks-tab-active'),
                    $activeTabCnt: $WRAP.find('.todo-tasks-tab-active .counter'),
                    $completeTab: $WRAP.find('.todo-tasks-tab-complete'),
                    $completeTabCnt: $WRAP.find('.todo-tasks-tab-complete .counter')
                },
                edit: {
                    $wrap: $WRAP.find('.todo-edit'),
                    $title: $WRAP.find('[name=tte-text]')
                },
                header: {
                    $icon: $WRAP.find('#todo-header-icon'),
                    $iconImg: $WRAP.find('#todo-header-icon img'),
                    $title: $WRAP.find('#todo-header-title'),
                    $count: $WRAP.find('#todo-header-count')
                },
                date: {
                    $wrap: $WRAP.find('.todo-date-wrap'),
                    $picker: $WRAP.find('#todo-date-picker'),
                    $time: $WRAP.find('.todo-date-time'),
                    $close: $WRAP.find('.date-close'),
                    $delete: $WRAP.find('.date-delete')
                },
                promo: {
                    $star: $WRAP.find('#todo-star-button'),
                    $wrap: $WRAP.find('.todo-promo'),
                    $close: $WRAP.find('.promo-close, .promo-button-close'),
                    $more: $WRAP.find('.promo-button-more')
                },
                other: {
                    $settings: $WRAP.find('.open_settings')
                },
                pro: {
                    $wrap: $WRAP.find('#todo-trial'),
                    $text: $WRAP.find('.todo-trial-text'),
                    $close: $WRAP.find('.todo-trial-close')
                }
            }
        };
    };
    ;
    lspToDo.prototype.listeners = function () {
        var ts = this;
        $("body").on("mousedown", function (event) {
            ts.click(event);
        });
        ts.UI.menu.$button.on("click", function (el) {
            ts.switchButton();
        });
        ts.UI.menu.$li.on("click", function (el) {
            ts.setService($(el.currentTarget).attr("service"));
        });
        ts.UI.services.auth.$submit.on("click", function (el) {
            ts.login();
        });
        ts.UI.services.auth.$back.on("click", function (el) {
            ts.setService("lsp");
        });
        ts.UI.services.auth.$login.on("change", function (el) {
            ts.UI.services.auth.$login.removeClass('warn');
        });
        ts.UI.services.auth.$pass.on("change", function (el) {
            ts.UI.services.auth.$pass.removeClass('warn');
        });
        ts.UI.services.auth.$login.on("keypress", function (event) {
            var keyCode = event.keyCode || event.which;
            if (keyCode == 13)
                ts.login();
        });
        ts.UI.services.auth.$pass.on("keypress", function (event) {
            var keyCode = event.keyCode || event.which;
            if (keyCode == 13)
                ts.login();
        });
        ts.UI.services.projects.$current.on("click", function (el) {
            ts.draw('projects-menu', 'toggle');
        });
        ts.UI.services.projects.$list.on("click", "li", function (event) {
            ts.setProject($(event.currentTarget));
        });
        ts.UI.services.tasks.$tabs.on("click", function (event) {
            ts.draw('tasks-tab', { $el: $(event.currentTarget) });
        });
        ts.UI.services.tasks.$active.on("keydown", ".todo-task-item-title", function (event) {
            var keyCode = event.keyCode || event.which;
            if (keyCode == 13 || keyCode == 27) {
                event.preventDefault();
                event.stopPropagation();
                if (keyCode == 13)
                    ts.saveTask($(event.currentTarget));
                else if (keyCode == 27) {
                    $(event.currentTarget).text('');
                    ts.saveTask($(event.currentTarget));
                }
            }
        });
        ts.UI.services.tasks.$active.on("focusout", ".todo-task-item-title", function (event) {
            ts.saveTask($(event.currentTarget));
        });
        ts.UI.services.tasks.$active.on("click", ".todo-task-item:not(.editing)", function (event) {
            if ($(event.target).hasClass('todo-task-item')
                ||
                    $(event.target).hasClass('todo-task-item-title')) {
                ts.editTask($(event.currentTarget).attr('taskId'));
            }
        });
        ts.UI.services.tasks.$list.on("click", ".tti-button", function (event) {
            ts.actionsButton($(event.currentTarget));
        });
        ts.UI.services.tasks.$active.on("click", ".todo-task-item-due", function (event) {
            ts.actionsButton("due", $(event.currentTarget));
        });
        ts.UI.services.date.$close.on("click", function (event) {
            ts.closeDate();
        });
        ts.UI.services.date.$delete.on("click", function (event) {
            ts.deleteDate();
        });
        ts.UI.services.tasks.$list.on("click", "[type=checkbox]", function (event) {
            ts.updateTask({ complete: 'change' }, $(event.currentTarget), event);
        });
        ts.UI.services.edit.$title.on("keypress", function (event) {
            if (event.keyCode == 13 || event.which == 13) {
                ts.saveTask();
            }
        });
        ts.UI.services.$sync.on("click", function (event) {
            ts.state.update.clicks++;
            ts.getList();
        });
        ts.UI.services.user.$button.on("click", function (event) {
            ts.draw('user-menu', 'toggle');
        });
        ts.UI.services.user.$logout.on("click", function (event) {
            ts.logout();
        });
        ts.UI.services.promo.$star.on("click", function (event) {
            if (!ts.UI.services.promo.$star.hasClass('active')) {
                ts.draw("promo", { view: 'bottom' });
            }
            else {
                ts.draw("promo", { increase: true });
            }
        });
        ts.UI.services.promo.$close.on("click", function (event) {
            ts.draw("promo", { increase: true });
        });
        ts.UI.services.promo.$more.on("click", function (event) {
            openUrlInNewTab(extensionGetUrl("/pages/options/settings.html#navi-settings-todo?tabs=todo-chaos"));
        });
        ts.UI.services.other.$settings.on("click", function (event) {
            openUrlInNewTab(extensionGetUrl("/pages/options/settings.html#navi-settings-todo"));
        });
        ts.UI.services.pro.$close.on("click", function (event) {
            ts.state.pro.hide = true;
            ts.draw('pro');
        });
        ts.UI.services.date.$time.on("click", function (event) {
            ts.setDefaultDate();
        });
    };
    ;
    lspToDo.prototype.message = function (msg) {
        var ts = this;
        var command = String(msg.command).split(':')[1];
        switch (command) {
            case "setService":
                ts.state.service = VAL.get("todo.service");
                ts.setAPI();
                ts.draw(['menu', 'title', 'tasks-tabs-all', 'body', 'loading'], { full: true, wait: true });
                break;
            case "logout":
                ts.logout();
                ts.setService('lsp');
                break;
        }
    };
    ;
    lspToDo.prototype.keyboard = function (event) {
        var ts = this;
    };
    ;
    lspToDo.prototype.click = function (event) {
        var ts = this;
        if (ts.state.menu.active
            &&
                !$(event.target).closest(ts.UI.menu.$button).length) {
            ts.switchButton();
        }
    };
    ;
    lspToDo.prototype.draw = function (actions, mode) {
        return __awaiter(this, void 0, void 0, function () {
            var ts, _loop_1, _i, actions_1, action, state_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ts = this;
                        if (typeof actions != "object")
                            actions = [actions || false];
                        if (typeof mode != "object")
                            mode = { mode: mode || false };
                        _loop_1 = function (action) {
                            var _a, showTitle, showIcon, hideLogout, current, projects, list, count, _b, _c, _i, k, $li, name_1, _d, $el, key, $switch, tasks, active, complete, count, _e, _f, _g, k, props, _h, text, task, task, $task, $title, user, date, setDate, task, due, expiries_1, isGetTrialRest_1;
                            return __generator(this, function (_j) {
                                switch (_j.label) {
                                    case 0:
                                        _a = action;
                                        switch (_a) {
                                            case "menu": return [3, 1];
                                            case "title": return [3, 2];
                                            case "body": return [3, 6];
                                            case "login": return [3, 7];
                                            case "tasks": return [3, 8];
                                            case "no-tasks": return [3, 9];
                                            case "auth_warn": return [3, 10];
                                            case "auth_loading": return [3, 11];
                                            case "loading": return [3, 12];
                                            case "projects": return [3, 13];
                                            case "project-active": return [3, 21];
                                            case "user-menu": return [3, 24];
                                            case "projects-menu": return [3, 25];
                                            case "tasks-tabs-all": return [3, 26];
                                            case "tasks-tab": return [3, 27];
                                            case "fade": return [3, 29];
                                            case "default": return [3, 30];
                                            case "task-list": return [3, 31];
                                            case "count": return [3, 40];
                                            case "promo": return [3, 41];
                                            case "task-scroll": return [3, 42];
                                            case "task-edit": return [3, 43];
                                            case "task-edit-warn": return [3, 50];
                                            case "user": return [3, 51];
                                            case "date-picker-init": return [3, 53];
                                            case "date-picker": return [3, 54];
                                            case "date-button": return [3, 60];
                                            case "time-picker": return [3, 61];
                                            case "pro": return [3, 62];
                                            case "sortable": return [3, 66];
                                            case "promo-global": return [3, 67];
                                        }
                                        return [3, 68];
                                    case 1:
                                        ts.UI.menu.$li.removeClass('selected');
                                        ts.UI.menu.$li.filter("[service=" + ts.state.service + "]").addClass('selected');
                                        return [3, 68];
                                    case 2: return [4, LSP.Msg.send('TodoBack.API.config.showTitle', true)];
                                    case 3:
                                        showTitle = _j.sent();
                                        if (showTitle) {
                                            ts.UI.services.header.$title.removeClass('hide').text(showTitle);
                                        }
                                        else {
                                            ts.UI.services.header.$title.addClass('hide').text('');
                                        }
                                        return [4, LSP.Msg.send('TodoBack.API.config.showIcon', true)];
                                    case 4:
                                        showIcon = _j.sent();
                                        if (showIcon) {
                                            ts.UI.services.header.$icon.removeClass('hide');
                                            ts.UI.services.header.$iconImg.attr('src', showIcon);
                                        }
                                        else {
                                            ts.UI.services.header.$icon.addClass('hide');
                                        }
                                        return [4, LSP.Msg.send('TodoBack.API.config.hideLogout', true)];
                                    case 5:
                                        hideLogout = _j.sent();
                                        if (hideLogout) {
                                            ts.UI.services.user.$wrap.addClass('hide');
                                        }
                                        else {
                                            ts.UI.services.user.$wrap.removeClass('hide');
                                        }
                                        return [3, 68];
                                    case 6:
                                        ts.UI.$wrap.attr('service', ts.state.service);
                                        if (ts.state.service == "lsp-OFF") {
                                            ts.UI.services.$body.addClass('hide');
                                            ts.UI.internal.$body.removeClass('hide');
                                        }
                                        else {
                                            ts.UI.internal.$body.addClass('hide');
                                            ts.UI.services.$body.removeClass('hide');
                                            ts.UI.services.auth.$logo.text(translate('todo_service_name_' + ts.state.service));
                                        }
                                        return [3, 68];
                                    case 7:
                                        if (mode.clean) {
                                            ts.UI.services.auth.$login.val('');
                                            ts.UI.services.auth.$pass.val('');
                                        }
                                        ts.UI.$wrap.attr("mode", "login");
                                        return [3, 68];
                                    case 8:
                                        ts.UI.$wrap.attr("mode", "tasks");
                                        return [3, 68];
                                    case 9:
                                        ts.UI.$wrap.attr("mode", "no-tasks");
                                        return [3, 68];
                                    case 10:
                                        if (mode.text) {
                                            setTimeout(function () {
                                                ts.UI.services.auth.$warn.addClass('active').text(mode.text);
                                            }, 10);
                                        }
                                        else {
                                            ts.UI.services.auth.$warn.removeClass('active').text('');
                                        }
                                        return [3, 68];
                                    case 11:
                                        if (mode.wait) {
                                            ts.UI.services.auth.$form.attr("disabled", "disabled").addClass('wait');
                                        }
                                        else {
                                            ts.UI.services.auth.$form.removeAttr("disabled").removeClass('wait');
                                        }
                                        return [3, 68];
                                    case 12:
                                        if (mode.wait && ts.state.service != "lsp") {
                                            if (mode.full)
                                                ts.UI.$wrap.addClass('loading');
                                            ts.UI.$wrap.addClass('loading-soft');
                                            if (mode.push)
                                                ts.UI.$wrap.addClass('loading-push');
                                        }
                                        else {
                                            ts.UI.$wrap.removeClass('loading loading-soft loading-push loading-pull');
                                        }
                                        return [3, 68];
                                    case 13: return [4, LSP.Msg.send('TodoBack.API.config.hideProjects', true)];
                                    case 14:
                                        if (_j.sent()) {
                                            ts.UI.services.projects.$wrap.addClass('hide');
                                            return [2, "continue"];
                                        }
                                        else {
                                            ts.UI.services.projects.$wrap.removeClass('hide');
                                        }
                                        ts.UI.services.projects.$list.html('');
                                        return [4, LSP.Msg.send('TodoBack.API.getProjectId', true)];
                                    case 15:
                                        current = _j.sent();
                                        return [4, LSP.Msg.send('TodoBack.API.getProjects', true)];
                                    case 16:
                                        projects = _j.sent();
                                        list = [], count = 0;
                                        _b = [];
                                        for (_c in projects)
                                            _b.push(_c);
                                        _i = 0;
                                        _j.label = 17;
                                    case 17:
                                        if (!(_i < _b.length)) return [3, 20];
                                        k = _b[_i];
                                        $li = $("<li>");
                                        return [4, LSP.Msg.send('TodoBack.API.rename', [projects[k].name], true)];
                                    case 18:
                                        name_1 = _j.sent();
                                        $li.text(name_1);
                                        if (name_1.length > 33)
                                            $li.attr("title", name_1);
                                        $li.attr("project-id", projects[k].id);
                                        list.push($li);
                                        count++;
                                        _j.label = 19;
                                    case 19:
                                        _i++;
                                        return [3, 17];
                                    case 20:
                                        ts.UI.services.projects.$list.append(list);
                                        if (count > 1)
                                            ts.UI.services.projects.$current.addClass('options');
                                        else
                                            ts.UI.services.projects.$current.removeClass('options');
                                        ts.draw("project-active", { current: current });
                                        return [3, 68];
                                    case 21:
                                        if (!!mode.current) return [3, 23];
                                        _d = mode;
                                        return [4, LSP.Msg.send('TodoBack.API.getProjectId', true)];
                                    case 22:
                                        _d.current = _j.sent();
                                        _j.label = 23;
                                    case 23:
                                        ts.UI.services.projects.$list.find('.selected').removeClass('selected');
                                        $el = ts.UI.services.projects.$list.find('[project-id=' + mode.current + ']');
                                        $el.addClass('selected');
                                        ts.UI.services.projects.$current.text($el.text());
                                        return [3, 68];
                                    case 24:
                                        if (mode.mode == "toggle" || !mode.mode) {
                                            if (!ts.UI.services.user.$button.hasClass('active'))
                                                mode.mode = "open";
                                            else
                                                mode.mode = "close";
                                        }
                                        if (mode.mode == "open") {
                                            ts.UI.services.user.$button.addClass('active');
                                        }
                                        else {
                                            ts.UI.services.user.$button.removeClass('active');
                                        }
                                        return [3, 68];
                                    case 25:
                                        if (mode.mode == "toggle" || !mode.mode) {
                                            if (!ts.UI.services.projects.$list.hasClass('active'))
                                                mode.mode = "open";
                                            else
                                                mode.mode = "close";
                                        }
                                        if (mode.mode == "open") {
                                            ts.UI.services.projects.$list.addClass('active');
                                            ts.UI.services.projects.$current.addClass('open');
                                        }
                                        else {
                                            ts.UI.services.projects.$list.removeClass('active');
                                            ts.UI.services.projects.$current.removeClass('open');
                                        }
                                        return [3, 68];
                                    case 26:
                                        for (key in ts.state.tabs) {
                                            ts.draw("tasks-tab", {
                                                action: "init",
                                                "switch": key,
                                                $el: ts.UI.services.tasks[key + 'Tab'],
                                                silent: true
                                            });
                                        }
                                        return [3, 68];
                                    case 27:
                                        $switch = mode["switch"] || mode.$el.attr("switch");
                                        return [4, LSP.Msg.send('TodoBack.API.config.hideSlide', true)];
                                    case 28:
                                        if (_j.sent()) {
                                            mode.action = "open";
                                            ts.UI.services.tasks.$tabs.addClass('hide');
                                        }
                                        else {
                                            ts.UI.services.tasks.$tabs.addClass('close');
                                        }
                                        if (!mode.action) {
                                            if (mode.$el.hasClass('collapsed'))
                                                mode.action = "open";
                                            else
                                                mode.action = "close";
                                        }
                                        else if (mode.action == "init") {
                                            if (ts.state.tabs[$switch])
                                                mode.action = ts.state.tabs[$switch];
                                        }
                                        if (mode.action == "close") {
                                            mode.$el.addClass('collapsed');
                                            ts.UI.services.tasks[$switch].addClass('collapsed');
                                        }
                                        else {
                                            mode.$el.removeClass('collapsed');
                                            ts.UI.services.tasks[$switch].removeClass('collapsed');
                                        }
                                        if (!mode.silent)
                                            ts.updateTabs({ tab: $switch, action: mode.action });
                                        return [3, 68];
                                    case 29:
                                        ts.UI.$wrap.attr("mode", "fade");
                                        return [3, 68];
                                    case 30:
                                        ts.draw("tasks");
                                        return [3, 68];
                                    case 31: return [4, LSP.Msg.send('TodoBack.API.getTasks', true)];
                                    case 32:
                                        tasks = _j.sent();
                                        active = [], complete = [], count = { all: 0, active: 0 };
                                        _e = [];
                                        for (_f in tasks)
                                            _e.push(_f);
                                        _g = 0;
                                        _j.label = 33;
                                    case 33:
                                        if (!(_g < _e.length)) return [3, 39];
                                        k = _e[_g];
                                        return [4, LSP.Msg.send('TodoBack.API.getProps', [tasks[k]], true)];
                                    case 34:
                                        props = _j.sent();
                                        if (!props.complete)
                                            count.active++;
                                        count.all++;
                                        $li = $("<li>")
                                            .addClass('todo-task-item')
                                            .attr('taskId', props.id)
                                            .append($('<span>').addClass('sort-handler'));
                                        $main = $("<div>")
                                            .addClass('todo-task-item-main')
                                            .append($("<input>")
                                            .addClass('todo-task-item-checkbox')
                                            .attr("id", props.id)
                                            .attr("type", "checkbox")
                                            .prop("checked", props.complete))
                                            .append($("<span>")
                                            .addClass('todo-task-item-checkbox-image'))
                                            .append($("<span>")
                                            .addClass('todo-task-item-title')
                                            .attr('for', props.id)
                                            .text(props.title));
                                        $li.append($main);
                                        _h = props.due;
                                        if (!_h) return [3, 36];
                                        return [4, LSP.Msg.send('TodoBack.API.config.hideDatePicker', true)];
                                    case 35:
                                        _h = !(_j.sent());
                                        _j.label = 36;
                                    case 36:
                                        if ((_h)) {
                                            $period = $('<div>').addClass('todo-task-item-period');
                                            if (props.due) {
                                                $period.append($("<span>")
                                                    .addClass('todo-task-item-due')
                                                    .append($('<span>')
                                                    .addClass('time-date')
                                                    .addClass(props.today ? 'today' : '')
                                                    .addClass(props.overdue ? 'overdue' : '')
                                                    .text(props.dueH)));
                                            }
                                            $li.append($period);
                                        }
                                        $buttons = $("<div>").addClass('todo-task-item-actions').html('');
                                        return [4, LSP.Msg.send('TodoBack.API.config.hideDatePicker', true)];
                                    case 37:
                                        if (!(_j.sent())) {
                                            $buttons.append($("<span>")
                                                .addClass('tti-button')
                                                .attr('action', 'due')
                                                .attr('title', ts.state.locale.date));
                                        }
                                        $buttons.append($("<span>")
                                            .addClass('tti-button')
                                            .attr('action', 'copy')
                                            .attr('title', ts.state.locale.copy));
                                        $buttons.append($("<span>")
                                            .addClass('tti-button')
                                            .attr('action', 'delete')
                                            .attr('title', ts.state.locale["delete"]));
                                        $li.append($buttons);
                                        if (props.complete)
                                            complete.push($li);
                                        else
                                            active.push($li);
                                        _j.label = 38;
                                    case 38:
                                        _g++;
                                        return [3, 33];
                                    case 39:
                                        ts.UI.services.tasks.$active.html('').append(active);
                                        ts.UI.services.tasks.$activeTabCnt.text("(" + active.length + ")");
                                        ts.UI.services.tasks.$activeTab.removeClass('filled').addClass(active.length ? 'filled' : '');
                                        ts.UI.services.tasks.$complete.html('').append(complete);
                                        ts.UI.services.tasks.$completeTabCnt.text("(" + complete.length + ")");
                                        ts.UI.services.tasks.$completeTab.removeClass('filled').addClass(complete.length ? 'filled' : '');
                                        ts.UI.services.$data.attr('mode', (active.length || complete.length) ? 'filled' : 'addnew');
                                        if (!count.all) {
                                            ts.draw("no-tasks");
                                        }
                                        else {
                                            ts.draw("tasks");
                                            ts.draw('promo', { view: 'auto' });
                                        }
                                        ts.draw('count', { count: count.active });
                                        ts.draw('pro');
                                        return [3, 68];
                                    case 40:
                                        text = ts.state.locale.no_tasks;
                                        if (mode.count) {
                                            text = mode.count + ' ' + numEnding(mode.count, translate('todo_num_task'));
                                        }
                                        ts.UI.services.header.$count.text(text);
                                        return [3, 68];
                                    case 41:
                                        if (!mode.view) {
                                            ts.UI.$wrap.removeAttr("promo");
                                            ts.UI.services.promo.$star.removeClass("active");
                                            if (mode.increase) {
                                                ts.state.promo.shown++;
                                                localStorage.setItem('todo-promo-shown', ts.state.promo.shown);
                                            }
                                        }
                                        else {
                                            if (mode.view == 'auto') {
                                                if (ts.state.service == 'lsp'
                                                    &&
                                                        !ts.state.promo.shownOnPage
                                                    &&
                                                        ts.state.promo.shown < ts.state.promo.limit
                                                    &&
                                                        Date.now() > ts.state.promo.lastShown + ts.state.promo.showDelay) {
                                                    localStorage.setItem('todo-promo-shown-time', Date.now());
                                                    ts.state.promo.shownOnPage = true;
                                                    mode.view = 'full';
                                                }
                                                else {
                                                    ts.draw('promo');
                                                    return [2, "continue"];
                                                }
                                            }
                                            ts.UI.$wrap.attr("promo", mode.view);
                                            ts.UI.services.promo.$star.addClass("active");
                                        }
                                        return [3, 68];
                                    case 42:
                                        ts.UI.services.tasks.$inner.mCustomScrollbar({
                                            theme: "light",
                                            axis: "y",
                                            autoHideScrollbar: false,
                                            scrollInertia: 350,
                                            scrollEasing: "easeOut",
                                            mouseWheel: {
                                                enable: true,
                                                axis: "y",
                                                normalizeDelta: true,
                                                scrollAmount: 90,
                                                deltaFactor: 10,
                                                normalizeDelta: true
                                            },
                                            advanced: {}
                                        });
                                        return [3, 68];
                                    case 43:
                                        if (ts.state.pro.expired)
                                            return [2, { value: false }];
                                        if (!(!mode.action || mode.action == 'close')) return [3, 44];
                                        ts.draw('tasks');
                                        return [3, 49];
                                    case 44:
                                        ts.UI.$wrap.attr("mode", "edit");
                                        if (!mode.id) return [3, 47];
                                        return [4, LSP.Msg.send('TodoBack.API.getTaskById', [mode.id], true)];
                                    case 45:
                                        task = _j.sent();
                                        return [4, LSP.Msg.send('TodoBack.API.getProps', [task], true)];
                                    case 46:
                                        task = _j.sent();
                                        return [3, 48];
                                    case 47:
                                        task = ts.state.model.task;
                                        _j.label = 48;
                                    case 48:
                                        ts.state.editing = task;
                                        $task = ts.UI.services.tasks.$active.find("[taskId=" + task.id + "]");
                                        $title = $task.find('.todo-task-item-title');
                                        $title.attr('previous', $title.text()).attr('contenteditable', true).focus();
                                        $title.parents('.todo-task-item').addClass('editing');
                                        setCursorToEnd($title.get(0));
                                        _j.label = 49;
                                    case 49: return [3, 68];
                                    case 50:
                                        if (mode.text) {
                                            setTimeout(function () {
                                                ts.UI.services.edit.$warn.addClass('active').text(mode.text);
                                            }, 10);
                                        }
                                        else {
                                            ts.UI.services.edit.$warn.removeClass('active').text('');
                                        }
                                        return [3, 68];
                                    case 51: return [4, LSP.Msg.send('TodoBack.API.getMeta', true)];
                                    case 52:
                                        user = _j.sent();
                                        if (typeof user == "object") {
                                            ts.UI.services.user.$name.text(user.login);
                                        }
                                        return [3, 68];
                                    case 53:
                                        date = new Date();
                                        ts.datePicker = new lspDatePicker({
                                            dom: document.getElementById('todo-date-picker'),
                                            year: date.getFullYear(),
                                            month: date.getMonth() + 1,
                                            onClickDate: function (date) {
                                                ts.UI.services.date.$picker.attr('current', 'date');
                                                ts.datePicker.set((new Date(date)).getTime());
                                            }
                                        });
                                        ts.timePicker = new lspTimePicker({
                                            $wrap: ts.UI.services.date.$time,
                                            format: ts.state.clockFormat == 1 ? 12 : 24
                                        });
                                        return [3, 68];
                                    case 54:
                                        if (ts.state.pro.expired)
                                            return [2, { value: false }];
                                        ts.UI.services.date.$picker.removeAttr('current');
                                        if (!mode.id) return [3, 58];
                                        setDate = false;
                                        return [4, LSP.Msg.send('TodoBack.API.getTaskById', [mode.id], true)];
                                    case 55:
                                        task = _j.sent();
                                        due = parseInt(task.due);
                                        if (!due) return [3, 57];
                                        return [4, LSP.Msg.send('TodoBack.API.getLocalTime', [due], true)];
                                    case 56:
                                        setDate = _j.sent();
                                        _j.label = 57;
                                    case 57:
                                        ts.state.editing = task;
                                        ts.datePicker.set(setDate);
                                        ts.draw("time-picker", { microtime: setDate });
                                        ts.UI.$wrap.attr("mode", "date-picker");
                                        ts.draw('date-button');
                                        return [3, 59];
                                    case 58:
                                        ts.draw("tasks");
                                        _j.label = 59;
                                    case 59: return [3, 68];
                                    case 60:
                                        if (ts.UI.services.date.$picker.attr('current')) {
                                            ts.UI.services.date.$delete.removeClass('hide');
                                        }
                                        else {
                                            ts.UI.services.date.$delete.addClass('hide');
                                        }
                                        return [3, 68];
                                    case 61:
                                        if (!mode.microtime) {
                                            mode.microtime = ts.state.dayEnd;
                                        }
                                        else {
                                            mode.microtime = (mode.microtime - timezoneOffset()) % (24 * 60 * 60 * 1e3);
                                        }
                                        ts.timePicker.set(mode.microtime);
                                        return [3, 68];
                                    case 62: return [4, LSP.Msg.send('TodoBack.isAPIFunc', ['getTrialRest'], true)];
                                    case 63:
                                        isGetTrialRest_1 = _j.sent();
                                        if (!isGetTrialRest_1) return [3, 65];
                                        return [4, LSP.Msg.send('TodoBack.API.getTrialRest', true)];
                                    case 64:
                                        expiries_1 = _j.sent();
                                        _j.label = 65;
                                    case 65:
                                        waitAuth(function () {
                                            if (AUTH.isPremium()
                                                ||
                                                    !isGetTrialRest_1) {
                                                ts.state.pro.expired = false;
                                                ts.UI.$wrap.removeAttr("trial");
                                            }
                                            else {
                                                ts.state.pro.expired = false;
                                                if (expiries_1 <= 10) {
                                                    ts.UI.services.pro.$text.text(numEnding(expiries_1, '', ts.state.locale.countdown).replace('#', String(expiries_1)));
                                                    if (expiries_1 == 0) {
                                                        ts.UI.$wrap.attr("trial", ts.state.pro.hide ? "expired_hide" : "expired");
                                                        ts.state.pro.expired = true;
                                                    }
                                                    else {
                                                        ts.UI.$wrap.attr("trial", "show");
                                                    }
                                                }
                                                else {
                                                    ts.UI.$wrap.removeAttr("trial");
                                                }
                                            }
                                        });
                                        return [3, 68];
                                    case 66:
                                        ts.UI.services.tasks.$active.sortable({ axis: 'y',
                                            update: function (event, ui) {
                                                ts.tasksOrder();
                                            },
                                            handle: '.sort-handler'
                                        });
                                        return [3, 68];
                                    case 67:
                                        if (localStorage.getItem('todo.service.chaos.meta')) {
                                            ts.UI.services.promo.$star.addClass('hide');
                                        }
                                        return [3, 68];
                                    case 68: return [2];
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
                        state_1 = _a.sent();
                        if (typeof state_1 === "object")
                            return [2, state_1.value];
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
    lspToDo.prototype.setDefaultDate = function () {
        var ts = this;
        if (!ts.state.editing.due
            ||
                ['NULL', 'false'].indexOf(ts.state.editing.due) !== -1) {
            if (!ts.UI.services.date.$picker.attr('current')) {
                ts.datePicker.set(Date.now() + 24 * 60 * 60 * 1e3);
                ts.draw('date-button');
            }
        }
    };
    lspToDo.prototype.tasksOrder = function (mode) {
        return __awaiter(this, void 0, void 0, function () {
            var ts, order, items, exclude;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ts = this;
                        if (typeof mode != "object")
                            mode = { mode: mode || false };
                        order = 0, items = [], exclude = [];
                        if (mode.checked) {
                            exclude.push(mode.checked);
                        }
                        ts.UI.services.tasks.$active.find('.todo-task-item').each(function (N, el) {
                            var taskId = $(el).attr("taskId");
                            if (exclude.indexOf(taskId) === -1) {
                                items.push({ id: taskId, order: ++order });
                            }
                        });
                        if (mode.checked) {
                            items.push({ id: mode.checked, order: ++order });
                        }
                        ts.UI.services.tasks.$complete.find('.todo-task-item').each(function (N, el) {
                            var taskId = $(el).attr("taskId");
                            if (exclude.indexOf(taskId) === -1) {
                                items.push({ id: taskId, order: ++order });
                            }
                        });
                        return [4, LSP.Msg.send('TodoBack.API.tasksOrder', [items], true)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    ;
    lspToDo.prototype.deleteDate = function () {
        var ts = this;
        ts.timePicker.set(ts.state.dayEnd);
        ts.datePicker.set('');
        ts.draw('date-button');
        ts.closeDate();
    };
    ;
    lspToDo.prototype.closeDate = function () {
        var ts = this;
        if (ts.timePicker.isOpen()) {
            ts.timePicker.draw('close');
        }
        else {
            var date = ts.UI.services.date.$picker.attr('current');
            ts.draw("date-picker", { close: true });
            if (date
                ||
                    !date && ts.state.editing.due) {
                ts.updateDate(date || '');
            }
        }
    };
    ;
    lspToDo.prototype.updateDate = function (date) {
        var ts = this;
        var microtime = false;
        if (!date) {
            date = ts.UI.services.date.$picker.attr('current') || '';
        }
        if (date) {
            var time = ts.timePicker.get() / 60e3;
            microtime = (new Date(date)).getTime();
            microtime += time * 60 * 1e3;
        }
        if (ts.state.editing.due != microtime) {
            ts.state.editing.due = microtime;
            ts.updateTask(ts.state.editing);
        }
    };
    ;
    lspToDo.prototype.updateTabs = function (mode) {
        var ts = this;
        ts.state.tabs[mode.tab] = mode.action;
        VAL.set('todo.tabs', ts.state.tabs, 'json');
    };
    ;
    lspToDo.prototype.dateDefault = function ($el) {
        var val = $el.val();
        if (!val) {
            var date = new Date();
            if ($el.attr('name') == 'tte-start') {
                var dateShift = new Date(date.getTime() - 60e3 * date.getTimezoneOffset());
                var setDate = dateShift.toISOString().split(':').shift() + ':00:00';
            }
            else {
                var dayStart = date.toISOString().split('T').shift() + 'T00:00:00';
                var setTime = (new Date(dayStart)).getTime() + (30 * 24 * 60 * 60 * 1000) + (23 * 60 * 60 * 1000) - (60e3 * date.getTimezoneOffset());
                var setDate = (new Date(setTime)).toISOString().split('.').shift();
            }
            $el.val(setDate);
        }
    };
    ;
    lspToDo.prototype.inputDateTimeVal = function (val) {
        if (!val)
            return '';
        var result = '';
        if (typeof val == 'number'
            ||
                parseInt(val) == val) {
            var date = new Date(val);
            result = date.toISOString().split('.').shift();
        }
        else {
            var date = new Date(val);
            result = date.getTime();
        }
        return result;
    };
    ;
    lspToDo.prototype.actionsButton = function (action, $el) {
        var ts = this;
        if (typeof action != "string") {
            $el = action;
            action = $el.attr('action');
        }
        var id = ts.getObjTaskId($el);
        switch (action) {
            case "edit":
                ts.editTask(id);
                break;
            case "delete":
                ts.updateTask({ id: id, state: 'delete' });
                break;
            case "copy":
                ts.copyToClipboard({ id: id });
                break;
            case "due":
                if (ts.saveIfNecessary(id))
                    return;
                ts.draw("date-picker", { id: id });
                break;
        }
    };
    ;
    lspToDo.prototype.editTask = function (el) {
        var ts = this;
        var id = false;
        if (el) {
            if (el instanceof $) {
                id = ts.getObjTaskId(el);
            }
            else if (typeof el == "string") {
                id = el;
            }
        }
        ts.draw("task-edit", { action: 'open', id: id });
    };
    ;
    lspToDo.prototype.getEditable = function () {
        var ts = this;
        var $editable = ts.UI.services.tasks.$active.find(".todo-task-item-title[contenteditable]");
        return $editable.length ? $editable : false;
    };
    ;
    lspToDo.prototype.saveIfNecessary = function () {
        var ts = this;
        var $editable = ts.getEditable();
        if ($editable) {
            ts.saveTask($editable);
            return true;
        }
        else {
            return false;
        }
    };
    ;
    lspToDo.prototype.saveTask = function ($title) {
        var ts = this;
        var stop = false;
        ts.state.promo.shownOnPage = true;
        ts.UI.services.edit.$title.attr("disabled", "disabled");
        var props = objClone(ts.state.model.task);
        for (var i in ts.state.editing)
            props[i] = ts.state.editing[i];
        if ($title) {
            var previous = $title.attr('previous').trim();
            var text = $title.text().trim();
            $title.removeAttr("contenteditable");
            if (!text)
                $title.text(previous);
            $title.parents('.todo-task-item').removeClass('editing');
            props.id = $title.parents('.todo-task-item').attr('taskId');
            props.title = text;
            if (text == previous)
                stop = true;
        }
        else {
            props.id = ts.UI.services.edit.$wrap.attr('taskId') || false;
            props.title = ts.UI.services.edit.$title.val() || false;
            if (props.title) {
                setTimeout(function () {
                    ts.UI.services.edit.$title.focus();
                }, 350);
            }
        }
        if (props.title || stop) {
            ts.updateTask(props);
        }
        else {
            ts.UI.services.edit.$title.removeAttr("disabled");
        }
    };
    ;
    lspToDo.prototype.updateTask = function (props, $el, event) {
        return __awaiter(this, void 0, void 0, function () {
            var ts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ts = this;
                        if ($el && !props.id) {
                            props.id = ts.getObjTaskId($el);
                        }
                        if (ts.saveIfNecessary(props.id)) {
                            return [2];
                        }
                        ts.state.update.process = true;
                        ts.draw("loading", { wait: true, push: true });
                        if (props.complete == "change") {
                            if (typeof $el == "object" && typeof $el.prop == "function" && $el.prop('checked')) {
                                console.info(props, $el);
                            }
                        }
                        if (props.due === false || props.due == 'false') {
                            props.due = '';
                        }
                        LSP.Msg.send('TodoBack.API.updateProps', [props], true).then(function (state) {
                            console.info('Finish update', state);
                            if (state != 'transferred') {
                                ts.state.update.process = false;
                                ts.draw("loading");
                            }
                        });
                        if (ts.state.service == 'lsp') {
                            SYNC.deleteToDo({ id: props.id });
                        }
                        setTimeout(function () {
                            ts.state.editing = {};
                            ts.UI.services.edit.$title.removeAttr("disabled").removeAttr('taskId').val('');
                        }, 150);
                        return [4, LSP.Msg.send('TodoBack.API.config.listenUpdateMessage', true)];
                    case 1:
                        if (!(_a.sent())) {
                            ts.draw(["task-edit", "task-list"]);
                        }
                        return [2];
                }
            });
        });
    };
    ;
    lspToDo.prototype.refresh = function (filter) {
        var ts = this;
        if (filter && filter != ts.state.service)
            return;
        ts.draw(["task-edit", "task-list"]);
    };
    ;
    lspToDo.prototype.getObjTaskId = function ($el) {
        return $el.parents('[taskId]').attr('taskId') || $el.attr('taskId') || $el.attr('id');
    };
    ;
    lspToDo.prototype.copyToClipboard = function (mode) {
        var ts = this;
        var find = '.todo-task-item';
        if (typeof mode == "object" && mode.id)
            find += "[taskId=" + mode.id + "]";
        var tasks = {};
        ts.UI.services.tasks.$list.find(find).each(function (N, el) {
            var $el = $(el);
            tasks[$el.attr('taskId')] = {
                complete: $el.find('[type=checkbox]').prop('checked'),
                title: $el.find('.todo-task-item-title').text(),
                dueH: $el.find('.todo-task-item-due').text() || false
            };
        });
        var active = [], complete = [];
        var checkboxes = Object.keys(tasks).length > 1;
        for (var k in tasks) {
            var txt = '', props = tasks[k];
            if (checkboxes) {
                txt = props.complete ? "☑ " : "☐ ";
            }
            txt += props.title;
            if (props.dueH) {
                txt += "\n\t";
                txt += props.dueH;
            }
            if (!props.complete)
                active.push(txt);
            else
                complete.push(txt);
        }
        var result = active.concat(complete);
        if (!result.length) {
            jGrowlApply(translate('copy_task_list_empty'), { force: true });
        }
        else {
            copyTextToClipboard(result.join("\n\n"), function () {
                jGrowlApply(translate('copy_success'), { force: true });
            });
        }
    };
    lspToDo.prototype.setProject = function ($el) {
        return __awaiter(this, void 0, void 0, function () {
            var ts, id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ts = this;
                        id = $el.attr('project-id');
                        if (!id || $el.hasClass('selected'))
                            return [2, false];
                        return [4, LSP.Msg.send('TodoBack.API.setProjectId', [id], true)];
                    case 1:
                        _a.sent();
                        ts.draw(["project-active", "projects-menu", "task-list", "task-edit"]);
                        return [2];
                }
            });
        });
    };
    ;
    lspToDo.prototype.setService = function (mode) {
        var ts = this;
        if (typeof mode == "string")
            mode = { service: mode };
        ts.state.service = mode.service;
        VAL.set("todo.service", mode.service);
        ts.draw(['fade', 'menu', 'title', 'tasks-tabs-all', 'body']);
        setTimeout(function () {
        }, 350);
        ts.setAPI();
    };
    ;
    lspToDo.prototype.setAPI = function (escape) {
        return __awaiter(this, void 0, void 0, function () {
            var ts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ts = this;
                        return [4, LSP.Msg.send('TodoBack.setAPI', [ts.state.service], true)];
                    case 1:
                        _a.sent();
                        ts.auth({ login: true, escape: escape || false, cb: function (success) {
                                if (success) {
                                    ts.draw(['title', 'projects', 'tasks-tabs-all', 'task-list', 'user']);
                                }
                            } });
                        return [2, true];
                }
            });
        });
    };
    ;
    lspToDo.prototype.auth = function (data) {
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
                if (data.escape) {
                    ts.setService('lsp');
                }
                else {
                    ts.draw('login');
                }
            }
            if (typeof data.cb == "function")
                data.cb(state);
        });
    };
    ;
    lspToDo.prototype.logout = function () {
        var ts = this;
        LSP.Msg.send('TodoBack.API.logout');
        ts.draw('login', { clean: true });
    };
    ;
    lspToDo.prototype.login = function () {
        var ts = this;
        ts.draw('auth_warn', false);
        var login = ts.UI.services.auth.$login.val().trim();
        var pass = ts.UI.services.auth.$pass.val().trim();
        var warn = false;
        if (!login) {
            ts.UI.services.auth.$login.addClass('warn');
            warn = translate('todo_auth_err_login');
        }
        if (!pass) {
            ts.UI.services.auth.$pass.addClass('warn');
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
                        ts.draw(['title', 'projects', 'tasks-tabs-all', 'task-list', 'user', 'tasks', 'user', 'promo-global']);
                        ts.getList(true);
                    }
                }, 1e3);
            });
        }
    };
    ;
    lspToDo.prototype.getList = function (data) {
        var ts = this;
        if (ts.state.update.process)
            return false;
        else
            ts.state.update.process = true;
        if (typeof data !== "object")
            data = { force: data || false };
        ts.draw('loading', { wait: true, full: data.force });
        setTimeout(function () {
            if (ts.state.update.clicks >= 4) {
                data.force = true;
                data.erase = true;
                ts.draw('loading', { wait: true, full: data.force });
            }
            ts.state.update.clicks = 0;
            VAL.set("todo.last_update", Date.now());
            LSP.Msg.send('TodoBack.API.getDataList', [data], true).then(function (success) {
                ts.state.update.process = false;
            });
        }, 750);
    };
    ;
    lspToDo.prototype.updated = function (success) {
        var ts = this;
        ts.draw('loading');
        clearTimeout(ts.state.redraw);
        if (!ts.getEditable()) {
            if (success)
                ts.draw(['projects', 'task-list']);
        }
        else {
            console.info('Update interval', 1e3);
            setTimeout(function () {
                ts.updated(success);
            }, 1e3);
        }
    };
    ;
    lspToDo.prototype.switchButton = function (force) {
        var ts = this;
        if (typeof force == "boolean")
            ts.state.menu.active = force;
        else {
            ts.state.menu.active = !ts.state.menu.active;
        }
        if (ts.state.menu.active) {
            ts.UI.menu.$button.addClass('active');
        }
        else {
            ts.UI.menu.$button.removeClass('active');
        }
    };
    ;
    return lspToDo;
}());
$(function () {
    if ($("#todo-container").length) {
        TODO = new lspToDo();
        TODO.load();
    }
});
//# sourceMappingURL=todo.js.map
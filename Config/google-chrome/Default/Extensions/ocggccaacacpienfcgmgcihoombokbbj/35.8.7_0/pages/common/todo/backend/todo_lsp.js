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
var serviceToDoLSP = (function () {
    function serviceToDoLSP() {
        this.DEV = false;
        this.config = {
            hideProjects: true,
            hideSlide: true,
            hideLogout: true,
            listenUpdateMessage: true,
            showTitle: '',
            showIcon: '/img/icon/icon16.png'
        };
        this.virtual = {
            deleted: [],
            changed: {}
        };
        this.state = {
            version: localStorage.getItem("addon-version"),
            locale: {
                due: translate('todo_due'),
                today: translate('todo_due_today_msg'),
                pretext: translate('todo_due_pretext'),
                yesterday: translate('todo_due_yesterday')
            }
        };
        this.convert = {
            id: 'id',
            title: 'title',
            done: 'complete',
            item_date: 'start',
            item_order: 'order',
            due: 'due'
        };
        var ts = this;
    }
    ;
    serviceToDoLSP.prototype.checkAuth = function (param) {
        return true;
    };
    serviceToDoLSP.prototype.getTasks = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ts, items;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ts = this;
                        return [4, ts.getTodoItems(false)];
                    case 1:
                        items = _a.sent();
                        return [2, items];
                }
            });
        });
    };
    ;
    serviceToDoLSP.prototype.getTaskById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var ts, items;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ts = this;
                        return [4, ts.getTodoItems(id)];
                    case 1:
                        items = _a.sent();
                        return [2, items.shift()];
                }
            });
        });
    };
    ;
    serviceToDoLSP.prototype.getMeta = function () {
        var ts = this;
        return { user: 'lsp' };
    };
    ;
    serviceToDoLSP.prototype.getTodoItems = function (id) {
        var ts = this;
        return new Promise(function (resolve, reject) {
            BRW_dbTransaction(function (tx) {
                BRW_dbSelect({
                    tx: tx,
                    from: 'TODO_ITEMS',
                    order: 'item_order',
                    where: !id ? false : {
                        'id': parseInt(id)
                    }
                }, function (results) {
                    var itemsLength = results.rows.length, items = [];
                    for (var i = 0; i < itemsLength; i++) {
                        var item = results.rows[i];
                        if (ts.virtual.deleted.indexOf(String(item.id)) !== -1)
                            continue;
                        items.push(item);
                    }
                    resolve(items);
                }, function (error) {
                    console.error("Can't get TODO items (function: readTodoItems)");
                    resolve([]);
                });
            });
        });
    };
    ;
    serviceToDoLSP.prototype.getProps = function (source) {
        var ts = this;
        var task = {};
        if (typeof source == "object") {
            for (var prop in ts.convert) {
                if (source.hasOwnProperty(prop)) {
                    task[ts.convert[prop]] = source[prop];
                }
            }
            task.due = ts.getLocalTime(source.due || 0);
            if (task.due) {
                task.overdue = task.due ? task.due < Date.now() : false;
                task.today = false;
                var now = new Date();
                var time = new Date(task.due);
                var timeString = cutSeconds(time.toLocaleTimeString());
                var yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000);
                if (timeString == '11:59 PM' || timeString == '23:59') {
                    timeString = false;
                }
                if (time.toDateString() == now.toDateString()) {
                    task.dueH = ts.state.locale.today + (!timeString ? '' : " " + ts.state.locale.pretext + " " + timeString);
                    task.today = true;
                }
                else if (time.toDateString() == yesterday.toDateString()) {
                    task.dueH = ts.state.locale.yesterday + (!timeString ? '' : " " + ts.state.locale.pretext + " " + timeString);
                    task.today = true;
                }
                else {
                    task.dueH = ts.state.locale.due + ' ' + cutYear(time.toLocaleDateString()) + (!timeString ? '' : ", " + timeString);
                }
            }
        }
        return task;
    };
    ;
    serviceToDoLSP.prototype.getTaskFromProps = function (source) {
        var ts = this;
        var task = {};
        if (typeof source == "object")
            for (var prop in ts.convert) {
                if (source.hasOwnProperty(ts.convert[prop])) {
                    task[prop] = source[ts.convert[prop]];
                }
            }
        return task;
    };
    ;
    serviceToDoLSP.prototype.updateProps = function (props) {
        return __awaiter(this, void 0, void 0, function () {
            var ts, dbState, task;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ts = this;
                        if (!props.id) return [3, 4];
                        if (!(props.state == "delete")) return [3, 1];
                        ts.virtual.deleted.push(String(props.id));
                        deleteTodoItemDb(props.id);
                        return [3, 3];
                    case 1: return [4, ts.getTaskById(props.id)];
                    case 2:
                        dbState = _a.sent();
                        if (props.title && dbState.title != props.title) {
                            changeTodoItemTitleDb(props.id, props.title);
                        }
                        if (dbState.due != props.due) {
                            changeTodoItemCommon({ id: props.id, due: props.due });
                        }
                        if (props.complete == "change") {
                            changeTodoItemDoneDb(props.id, dbState.done ? 0 : 1);
                        }
                        _a.label = 3;
                    case 3: return [3, 5];
                    case 4:
                        task = ts.getTaskFromProps(props);
                        task.id = (new Date()).getTime();
                        task.item_date = (new Date()).toISOString().split('T').shift();
                        task.order = 1;
                        saveTodoItemDb(task.id, task.title, task.order);
                        _a.label = 5;
                    case 5: return [2];
                }
            });
        });
    };
    serviceToDoLSP.prototype.getLocalTime = function (val) {
        return parseInt(val) || 0;
    };
    ;
    serviceToDoLSP.prototype.tasksOrder = function (items) {
        BRW_sendMessage({ command: "changeTodoItemSort", items: items });
    };
    return serviceToDoLSP;
}());
//# sourceMappingURL=todo_lsp.js.map
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
var serviceToDoChaos = (function () {
    function serviceToDoChaos() {
        this.DEV = false;
        this.API = {
            url: 'http://app.chaos-control.mobi/api/1/',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            get_time: 'get_time'
        };
        this.config = {
            hideProjects: true,
            hideSlide: true,
            showTitle: translate('todo_day_plan'),
            showIcon: '/pages/common/todo/img/chaos.ico',
            trialDays: 30
        };
        this.state = {
            version: localStorage.getItem("addon-version"),
            meta: {},
            data: { task: {} },
            update: {},
            order: {},
            types: {
                int: ['predefined', 'state', 'timestamp', 'folder', 'inbox', 'due', 'start']
            },
            locale: {
                due: translate('todo_due'),
                today: translate('todo_due_today_msg'),
                yesterday: translate('todo_due_yesterday'),
                pretext: translate('todo_due_pretext')
            },
            propsToTask: {
                title: 'name',
                due: 'due',
                start: 'start'
            },
            pushed: {},
            model: {
                all: { task: {}, project: {}, context: {} }
            },
            timeshift: false,
            cursor: false
        };
        this.name_replace = {
            "Inbox": translate('todo_name_chaos'),
            "1-step actions": translate('todo_name_chaos_1_step')
        };
        this.queryId = 0;
        var ts = this;
        ts.getAuthVal();
        ts.getDataVal();
        ts.getSortOrder();
        ts.getUpdateVal();
    }
    ;
    serviceToDoChaos.prototype.getUpdateVal = function () {
        var ts = this;
        ts.state.update = VAL.get('todo.service.chaos.update', 'json');
        if (typeof ts.state.update.task !== 'object')
            ts.state.update = objClone(ts.state.model.all);
        return ts.state.update;
    };
    ;
    serviceToDoChaos.prototype.setUpdateVal = function () {
        var ts = this;
        VAL.set('todo.service.chaos.update', ts.state.update, 'json');
        return ts.state.update;
    };
    ;
    serviceToDoChaos.prototype.getAuthVal = function () {
        var ts = this;
        ts.state.meta = VAL.get('todo.service.chaos.meta', 'json');
        return ts.state.meta;
    };
    ;
    serviceToDoChaos.prototype.setAuthVal = function () {
        var ts = this;
        VAL.set('todo.service.chaos.meta', ts.state.meta, 'json');
    };
    ;
    serviceToDoChaos.prototype.getDataVal = function () {
        var ts = this;
        ts.state.data = VAL.get('todo.service.chaos.data', 'json');
        return ts.state.meta;
    };
    ;
    serviceToDoChaos.prototype.setDataVal = function () {
        var ts = this;
        VAL.set('todo.service.chaos.data', ts.state.data, 'json');
    };
    ;
    serviceToDoChaos.prototype.setSortOrder = function () {
        var ts = this;
        VAL.set('todo.service.chaos.order', ts.state.order, 'json');
    };
    ;
    serviceToDoChaos.prototype.getSortOrder = function () {
        var ts = this;
        ts.state.order = VAL.get('todo.service.chaos.order', 'json');
        return ts.state.order;
    };
    ;
    serviceToDoChaos.prototype.tasksOrder = function (items) {
        var ts = this;
        ts.state.order = items;
        ts.setSortOrder();
    };
    ;
    serviceToDoChaos.prototype.getTrialRest = function () {
        var ts = this;
        var name = 'todo.service.chaos.trial';
        var time = parseInt(VAL.get('todo.service.chaos.trial')) || false;
        if (!time) {
            time = Date.now();
            VAL.set('todo.service.chaos.trial', time);
        }
        var shift = Math.floor((Date.now() - time) / (24 * 60 * 60 * 1e3));
        var rest = Math.max(0, ts.config.trialDays - shift);
        return rest;
    };
    ;
    serviceToDoChaos.prototype.logout = function () {
        var ts = this;
        ts.state.meta = {};
        ts.setAuthVal();
        ts.state.update = objClone(ts.state.model.all);
        ts.setUpdateVal();
        ts.state.data = objClone(ts.state.model.all);
        ts.setDataVal();
        return true;
    };
    ;
    serviceToDoChaos.prototype.getMeta = function () {
        var ts = this;
        return ts.state.meta;
    };
    ;
    serviceToDoChaos.prototype.rename = function (name) {
        var ts = this;
        return ts.name_replace[name] || name;
    };
    ;
    serviceToDoChaos.prototype.setProjectId = function (setId) {
        var ts = this;
        var approved = false;
        if (ts.state.data.project)
            for (var k in ts.state.data.project) {
                if (setId == ts.state.data.project[k].id) {
                    approved = ts.state.data.project[k].id;
                    break;
                }
            }
        if (approved) {
            ts.state.meta.projectId = approved;
            ts.setAuthVal();
            return true;
        }
        else {
            return false;
        }
    };
    ;
    serviceToDoChaos.prototype.getProjectId = function () {
        var ts = this;
        var id = null;
        if (ts.state.meta.projectId) {
            id = ts.state.meta.projectId;
        }
        else if (ts.state.data.project) {
            for (var k in ts.state.data.project) {
                if (!id)
                    id = ts.state.data.project[k].id;
                if (ts.state.data.project[k].name == 'Inbox') {
                    id = ts.state.data.project[k].id;
                    break;
                }
            }
        }
        return id;
    };
    ;
    serviceToDoChaos.prototype.getProjects = function () {
        var ts = this;
        var projects = {};
        for (var key in ts.state.data.project) {
            if (!ts.isParentProject(key)) {
                projects[key] = ts.state.data.project[key];
            }
        }
        return projects;
    };
    ;
    serviceToDoChaos.prototype.isParentProject = function (id) {
        var ts = this;
        var result = false;
        for (var key in ts.state.data.project) {
            if (id == ts.state.data.project[key].parent) {
                result = true;
                break;
            }
        }
        return result;
    };
    ;
    serviceToDoChaos.prototype.getTimeDiff = function (cb) {
        var ts = this;
        if (ts.state.timeshift !== false) {
            if (cb)
                cb(ts.state.timeshift);
            return ts.state.timeshift;
        }
        ts.post({ q: 'get_time', cb: function (status, xml) {
                var shift = 0;
                if (status === 0) {
                    var time = parseInt($(xml).find('time').text());
                    if (time) {
                        var now = Math.floor(Date.now() / 1000);
                        shift = time - now;
                    }
                }
                ts.state.timeshift = shift;
                if (cb)
                    cb(ts.state.timeshift);
            } });
    };
    ;
    serviceToDoChaos.prototype.getTimeStamp = function () {
        var ts = this;
        return new Promise(function (resolve, reject) {
            ts.getTimeDiff(function () {
                var now = Math.floor(Date.now() / 1000);
                var timestamp = now + ts.state.timeshift;
                resolve(timestamp);
            });
        });
    };
    ;
    serviceToDoChaos.prototype.updateProps = function (props) {
        return __awaiter(this, void 0, void 0, function () {
            var ts, id, prop, val, task, date, now, dayEnd;
            return __generator(this, function (_a) {
                ts = this;
                id = false;
                if (props.id) {
                    if (!ts.state.data.task[props.id]) {
                        console.warn('Can`t find task with id: ', props.id);
                        return [2, 500];
                    }
                    if (props.complete == 'change') {
                        ts.state.data.task[props.id].state = ts.state.data.task[props.id].state === 0 ? 2 : 0;
                    }
                    if (props.state == 'delete') {
                        ts.state.data.task[props.id].state = ts.state.data.task[props.id].state === 0 ? 1 : 3;
                    }
                    for (prop in ts.state.propsToTask) {
                        if (props.hasOwnProperty(prop)) {
                            val = props[prop];
                            if (prop == 'start' || prop == 'due') {
                                val = ts.getServerTime(val);
                            }
                            ts.state.pushed[props.id] = false;
                            ts.state.data.task[props.id][ts.state.propsToTask[prop]] = val;
                        }
                    }
                    ts.state.data.task[props.id].isnew = false;
                    id = props.id;
                }
                else {
                    task = {
                        id: guid(),
                        state: 0,
                        timestamp: Math.floor(Date.now() / 1000),
                        parent: ts.getProjectId(),
                        name: props.title,
                        due: ts.getServerTime(props.due),
                        start: ts.getServerTime(props.start),
                        isnew: true
                    };
                    if (!task.due || task.due == "NULL") {
                        date = new Date();
                        now = date.getTime() - date.getTimezoneOffset() * 60e3;
                        dayEnd = (new Date(now)).toISOString().split('T').shift() + 'T23:59:00';
                        task.due = ts.getServerTime((new Date(dayEnd)).getTime());
                    }
                    ts.state.pushed[task.id] = false;
                    ts.state.data.task[task.id] = task;
                    id = task.id;
                }
                ts.state.update.task[id] = ts.state.data.task[id];
                ts.setUpdateVal();
                ts.setDataVal();
                return [2, ts.uploadData({})];
            });
        });
    };
    ;
    serviceToDoChaos.prototype.getProps = function (item) {
        var ts = this;
        var now = new Date();
        var props = {
            id: item.id,
            complete: item.state !== 0,
            state: item.state,
            title: item.name,
            start: ts.getLocalTime(item.start),
            due: ts.getLocalTime(item.due),
            today: false,
            overdue: ts.isOverdue(item.due)
        };
        var times = ['start', 'due'];
        for (var i in times) {
            if (props[times[i]]) {
                var time = new Date(props[times[i]]);
                var timeString = cutSeconds(time.toLocaleTimeString());
                if (timeString == '11:59 PM' || timeString == '23:59') {
                    timeString = false;
                }
                var yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000);
                if (time.toDateString() == now.toDateString()) {
                    props[times[i] + 'H'] = ts.state.locale.today + (!timeString ? '' : " " + ts.state.locale.pretext + " " + timeString);
                    if (times[i] == 'due')
                        props.today = true;
                }
                else if (time.toDateString() == yesterday.toDateString()) {
                    props[times[i] + 'H'] = ts.state.locale.yesterday + (!timeString ? '' : " " + ts.state.locale.pretext + " " + timeString);
                    if (times[i] == 'due')
                        props.today = true;
                }
                else {
                    props[times[i] + 'H'] = ts.state.locale.due + ' ' + cutYear(time.toLocaleDateString()) + (!timeString ? '' : ", " + timeString);
                }
            }
        }
        return props;
    };
    ;
    serviceToDoChaos.prototype.isOverdue = function (due) {
        var ts = this;
        var overdue = false;
        if (due) {
            due += 60 * (new Date()).getTimezoneOffset();
            if (due * 1e3 < Date.now())
                overdue = true;
        }
        return overdue;
    };
    ;
    serviceToDoChaos.prototype.getServerTime = function (val) {
        var time = val / 1000 || 'NULL';
        if (time && time != 'NULL') {
            time -= 60 * (new Date()).getTimezoneOffset();
        }
        return time;
    };
    ;
    serviceToDoChaos.prototype.getLocalTime = function (val) {
        var time = 1e3 * (parseInt(val) || 0);
        if (time)
            time += 1000 * 60 * (new Date()).getTimezoneOffset();
        return time;
    };
    ;
    serviceToDoChaos.prototype.getTaskById = function (id) {
        var ts = this;
        return ts.state.data.task[id] || null;
    };
    ;
    serviceToDoChaos.prototype.getTasks = function () {
        var ts = this;
        return new Promise(function (resolve, reject) {
            resolve(ts.filterDayPlan());
        });
    };
    ;
    serviceToDoChaos.prototype.filterDayPlan = function () {
        var ts = this;
        var dayEnd = (new Date()).setHours(23, 59, 59, 000) / 1000;
        dayEnd -= 60 * (new Date()).getTimezoneOffset();
        var tasks = {}, taskOrder = [], taskOrderDue = [];
        var max = 0;
        for (var i in ts.state.order)
            max = Math.max(max, ts.state.order[max]);
        max++;
        for (var k in ts.state.data.task) {
            if ((ts.state.data.task[k].state === 0
                && ts.state.data.task[k].due
                && ts.state.data.task[k].due <= dayEnd) || (ts.state.data.task[k].state === 2
                && ts.state.data.task[k].due
                && ts.state.data.task[k].due < dayEnd
                && ts.state.data.task[k].due >= dayEnd - 24 * 60 * 60)) {
                var order = 0;
                for (var i in ts.state.order) {
                    if (ts.state.order[i].id == k) {
                        order = ts.state.order[i].order;
                        break;
                    }
                }
                if (typeof taskOrder[order] !== "object")
                    taskOrder[order] = [];
                taskOrder[order].push(k);
                var due = ts.state.data.task[k].due || 1e14;
                if (typeof taskOrderDue[due] !== "object")
                    taskOrderDue[due] = [];
                taskOrderDue[due].push(k);
            }
        }
        if (taskOrder.length > 1) {
            for (var i in taskOrder)
                for (var k in taskOrder[i]) {
                    var id = taskOrder[i][k];
                    tasks[id] = ts.state.data.task[id];
                }
        }
        else {
            for (var i in taskOrderDue)
                for (var k in taskOrderDue[i]) {
                    var id = taskOrderDue[i][k];
                    tasks[id] = ts.state.data.task[id];
                }
        }
        return tasks;
    };
    ;
    serviceToDoChaos.prototype.filterTasks = function () {
        var ts = this;
        var projectId = ts.getProjectId();
        var tasks = {};
        if (ts.state.data.project)
            for (var k in ts.state.data.task) {
                if ([1, 3].indexOf(ts.state.data.task[k].state) === -1
                    &&
                        ts.state.data.task[k].parent == projectId) {
                    tasks[k] = ts.state.data.task[k];
                }
            }
        return tasks;
    };
    ;
    serviceToDoChaos.prototype.getDataList = function (data) {
        var ts = this;
        return new Promise(function (resolve, reject) {
            if (typeof data !== "object")
                data = { force: data || false };
            var revision = parseInt(ts.state.meta.revision) || 0;
            if (data.force)
                revision = 0;
            if (data.erase) {
                ts.state.data = objClone(ts.state.model.all);
                ts.setDataVal();
                ts.state.update = objClone(ts.state.model.all);
                ts.setUpdateVal();
            }
            ts.post({ q: 'get_changes_ex', values: { REVISION: revision }, cb: function (status, xml) {
                    var dataList = objClone(ts.state.model.all);
                    for (var key in dataList) {
                        $(xml).find(key).each(function (k, el) {
                            var entry = {};
                            $(el).find('*').each(function (k2, item) {
                                var name = $(item).prop('tagName').toLowerCase();
                                var value = $(item).text();
                                if (ts.state.types.int.indexOf(name) !== -1 && value !== "")
                                    value = parseInt(value);
                                if (String(name) !== "undefined")
                                    entry[name] = value;
                            });
                            if (entry.id)
                                dataList[key][entry.id] = entry;
                        });
                    }
                    ts.mergeData(dataList);
                    ts.setDataVal();
                    ts.state.meta.revision = parseInt($(xml).find('revision').text()) || 0;
                    ts.setAuthVal();
                    resolve(status === 0);
                    LSP.Msg.send('TODO.updated', [status === 0]);
                    if (!data.noUpload)
                        ts.uploadData({ skipPull: true });
                } });
        });
    };
    ;
    serviceToDoChaos.prototype.checkAuth = function (data) {
        var ts = this;
        return new Promise(function (resolve, reject) {
            if (typeof data != "object")
                data = data ? { data: data } : {};
            ts.getAuthVal();
            if (!data.LOGIN
                &&
                    (!ts.state.meta.login || !ts.state.meta.hash)) {
                resolve(false);
            }
            else if (!data.LOGIN) {
                resolve(true);
            }
            else {
                var needUpdate_1 = false;
                if (data.PASS) {
                    data.PASS = CryptoJS.MD5(data.PASS).toString();
                    needUpdate_1 = true;
                }
                ts.post({ q: 'check_login', values: data, cb: function (status, xml) {
                        if (status === 0 && needUpdate_1) {
                            ts.state.meta = {
                                login: data.LOGIN,
                                hash: data.PASS,
                                date: new Date().toString(),
                                revision: 0,
                                projectId: ts.state.meta.projectId || false
                            };
                            ts.setAuthVal();
                            ts.getTimeDiff();
                        }
                        resolve(status === 0);
                    } });
            }
        });
    };
    ;
    serviceToDoChaos.prototype.uploadData = function (mode) {
        var ts = this;
        return new Promise(function (resolve, reject) {
            if (typeof mode != "object")
                mode = { mode: mode || false };
            if (!Object.keys(ts.state.update.task).length) {
                resolve(true);
            }
            else if (ts.state.dataUpdating) {
                resolve('transferred');
            }
            else if (mode.skipPull) {
                ts.uploadDataEach(function (state) {
                    resolve(state);
                });
            }
            else {
                ts.state.dataUpdating = true;
                ts.getDataList({ noUpload: true }).then(function (state) {
                    ts.state.dataUpdating = false;
                    ts.uploadDataEach(function (state) {
                        resolve(state);
                    });
                });
            }
        });
    };
    ;
    serviceToDoChaos.prototype.uploadDataEach = function (cb, cursor) {
        return __awaiter(this, void 0, void 0, function () {
            var ts, key, k, send, _a, _b, _i, k, val;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        ts = this;
                        if (!ts.state.cursor && !cursor) {
                            cursor = Date.now() + Math.random();
                            ts.state.cursor = cursor;
                        }
                        else if (ts.state.cursor != cursor) {
                            console.info('Exit due to cursor');
                        }
                        key = false;
                        for (k in ts.state.update.task) {
                            if (!ts.state.pushed[k]) {
                                key = k;
                            }
                        }
                        if (!key) return [3, 7];
                        send = {};
                        _a = [];
                        for (_b in ts.state.update.task[key])
                            _a.push(_b);
                        _i = 0;
                        _c.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3, 6];
                        k = _a[_i];
                        if (['isnew'].indexOf(k) !== -1)
                            return [3, 5];
                        val = ts.state.update.task[key][k];
                        if (!(['start', 'due'].indexOf(k) !== -1 && !val)) return [3, 2];
                        val = 'NULL';
                        return [3, 4];
                    case 2:
                        if (!(k == 'timestamp')) return [3, 4];
                        return [4, ts.getTimeStamp()];
                    case 3:
                        val = _c.sent();
                        _c.label = 4;
                    case 4:
                        send[String(k).toUpperCase()] = val;
                        _c.label = 5;
                    case 5:
                        _i++;
                        return [3, 1];
                    case 6:
                        ts.uploadDateSend(key, send).then(function (status, xml) {
                            ts.state.cursor = cursor;
                            ts.uploadDataEach(cb, ts.state.cursor);
                        });
                        return [3, 8];
                    case 7:
                        ts.state.cursor = false;
                        if (cb)
                            cb(true);
                        _c.label = 8;
                    case 8: return [2];
                }
            });
        });
    };
    ;
    serviceToDoChaos.prototype.uploadDateSend = function (id, values) {
        var ts = this;
        return new Promise(function (resolve, reject) {
            if (ts.state.pushed[id]) {
                console.info('Just pushed', id);
                return;
            }
            else {
                ts.state.pushed[id] = true;
            }
            var method = ts.state.update.task[id].isnew ? 'create_task' : 'update_task';
            values.REVISION = ts.state.meta.revision;
            ts.post({ q: method, values: values, cb: function (status, xml) {
                    ts.state.pushed[id] = false;
                    if (status !== 0)
                        console.warn(status, xml);
                    if (status === 0
                        || status == 104) {
                        delete ts.state.update.task[id];
                        console.info('Delete from queue', id, ts.state.update.task);
                        ts.setUpdateVal();
                    }
                    if (status == 104)
                        return;
                    resolve(status, xml);
                } });
        });
    };
    ;
    serviceToDoChaos.prototype.mergeData = function (dataList) {
        var ts = this;
        ts.state.data = mergeDeep(ts.state.data, dataList);
        ts.clearData();
        return ts.state.data;
    };
    ;
    serviceToDoChaos.prototype.clearData = function () {
        var ts = this;
        for (var list in ts.state.data) {
            if (typeof ts.state.data[list] == "object")
                for (var id in ts.state.data[list]) {
                    if (typeof ts.state.data[list][id] == "object"
                        &&
                            [1, 3].indexOf(parseInt(ts.state.data[list][id].state)) !== -1) {
                        delete ts.state.data[list][id];
                    }
                }
        }
    };
    ;
    serviceToDoChaos.prototype.addAuth = function (values) {
        var ts = this;
        if (typeof values !== "object")
            values = {};
        values.PLATFORM = 'LSP';
        values.VERSION = ts.state.version;
        values.LOGIN = values.LOGIN || ts.state.meta.login || '';
        values.PASS = values.PASS || ts.state.meta.hash || '';
        return values;
    };
    ;
    serviceToDoChaos.prototype.post = function (data) {
        var ts = this;
        if (typeof data != "object")
            data = { query: data || '' };
        data.query = data.query || data.q || {};
        data.values = ts.addAuth(data.values || data.val || false);
        data.pairs = [];
        for (var k in data.values)
            data.pairs.push(k + "=" + encodeURIComponent(data.values[k]));
        var url = ts.API.url + data.query;
        var request = new XMLHttpRequest();
        request.open("POST", url);
        request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        var qid = ++ts.queryId;
        request.addEventListener("load", function (response) {
            var xml = response.target.responseXML.documentElement;
            var status = parseInt($(xml).find('status').text());
            var revision = parseInt($(xml).find('revision').text());
            if (revision) {
                ts.state.meta.revision = revision;
                ts.setAuthVal();
            }
            if (typeof data.cb == "function")
                data.cb(status, xml);
        });
        request.addEventListener("error", function (ex) {
            console.info(ex);
            if (typeof data.cb == "function")
                data.cb(404, xml);
        });
        request.send(data.pairs.join('&'));
    };
    ;
    return serviceToDoChaos;
}());
//# sourceMappingURL=todo_chaos.js.map
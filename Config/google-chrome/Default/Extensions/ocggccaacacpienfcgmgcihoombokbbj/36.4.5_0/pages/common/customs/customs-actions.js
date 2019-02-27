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
var CUSTOMS = {};
var classCustomsActions = (function () {
    function classCustomsActions() {
        this.DEV = true;
        this.ONCE = [];
        this.API = {
            auth: "https://everhelper.me/auth/process.php?",
            server: "https://sync.everhelper.me"
        };
        this.tables = {
            'SETTINGS': { source: 'datebase', allow_empty: true },
            'storage': { source: 'localStorage', allow_empty: true }
        };
        this.state = {
            listKeyHead: 'custom_lsp_head',
            listKeyData: 'custom_lsp_data'
        };
        this.list = {};
        var ts = this;
        ts.once('init');
    }
    ;
    classCustomsActions.prototype.once = function (action, callback) {
        var ts = this;
        if (ts.ONCE.indexOf(action) != -1)
            return;
        else
            ts.ONCE.push(action);
        switch (action) {
            case "init":
                break;
            default:
                if (callback)
                    callback();
        }
    };
    ;
    classCustomsActions.prototype.getList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ts, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        ts = this;
                        _a = ts;
                        return [4, ts.server({
                                send: {
                                    "action": "lists:get",
                                    "body": { key: ts.state.listKeyHead }
                                }
                            })["catch"](function (ex) {
                                console.info(ex);
                                ts.drawUI('error', { error: "Can't load list" });
                            })];
                    case 1:
                        _a.list = _b.sent();
                        return [2, ts.list];
                }
            });
        });
    };
    ;
    classCustomsActions.prototype.restore = function (uuidHead) {
        return __awaiter(this, void 0, void 0, function () {
            var ts, item, data, dataList, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ts = this;
                        item = ts.getItem(uuidHead);
                        data = false;
                        return [4, ts.server({
                                send: {
                                    "action": "lists:get",
                                    "body": {
                                        key: ts.state.listKeyData,
                                        uuid: item.uuidData
                                    }
                                }
                            })["catch"](function (ex) {
                                console.info(ex);
                                ts.drawUI('error', { error: "Can't load backup" });
                            })];
                    case 1:
                        dataList = _a.sent();
                        console.info(dataList);
                        for (i in dataList.items) {
                            if (dataList.items[i].uuid == item.uuidData) {
                                try {
                                    data = JSON.parse(dataList.items[i].value);
                                }
                                catch (ex) {
                                    console.warn(ex);
                                }
                                break;
                            }
                        }
                        ts.restoreData(data);
                        return [2];
                }
            });
        });
    };
    ;
    classCustomsActions.prototype.restoreData = function (Back) {
        var ts = this;
        console.info(Back);
        if (!Back) {
            ts.drawUI('error', { error: 'Backup is damaged' });
            return;
        }
        for (var key in ts.tables) {
            if (Back[key]) {
                switch (ts.tables[key].source) {
                    case "datebase":
                        ts.restoreTable(key, Back[key]);
                        break;
                    case "localStorage":
                        ts.restoreLocalStorage(key, Back[key]);
                        break;
                }
            }
        }
        ts.progress();
    };
    ;
    classCustomsActions.prototype.restoreLocalStorage = function (Name, Data) {
        var ts = this;
        ts.tables[Name].need = Data.length;
        ts.tables[Name].redy = 0;
        var updated = [];
        for (var key in Data) {
            ts.tables[Name].redy++;
            if ((Data[key].key == 'restoring') ||
                (Data[key].key == 'browser-mode') ||
                (Data[key].key.indexOf("Dexie") != -1) ||
                (Data[key].key.indexOf("LargeLocalStorage") != -1))
                continue;
            if (Data[key].key == 'show-random-content-state') {
                Data[key].val = 0;
            }
            localStorage.setItem(Data[key].key, Data[key].val);
            updated.push(Data[key].key);
        }
        var safe = ['install-key', 'installed-key', 'installed-themes', 'html5-video-h264', 'definedLocation', 'OFF-background-video-file', 'OFF-background-image-file', 'background-video-resolution', 'background-image-resolution', 'available-themes-data', 'available-themes-data-next-update', 'flixel-themes-data', 'flixel-themes-display-data', 'flixel-themes-data-next-update', 'flixel-themes-total-pages', 'background-video-resolution', 'background-video-content-type', 'background-video-content-author-url', 'background-video-content-author', 'available-themes-data', 'browser-mode', 'Dexie.DatabaseNames', 'LargeLocalStorage-meta', 'restoring'];
        for (var i = 0; i < localStorage.length; i++) {
            var key_1 = localStorage.key(i);
            if ((key_1.indexOf('_ondialsearch') != -1) ||
                (key_1.indexOf("Dexie") != -1) ||
                (key_1.indexOf("LargeLocalStorage") != -1))
                continue;
            if ((safe.indexOf(key_1) == -1) &&
                (updated.indexOf(key_1) == -1)) {
                console.info('removeItem', key_1);
                localStorage.removeItem(key_1);
            }
        }
    };
    ;
    classCustomsActions.prototype.restoreTable = function (Name, Data) {
        var ts = this;
        ts.tables[Name].need = Data.length;
        ts.tables[Name].redy = 0;
        BRW_dbUnsafeDeleteAll(Name, false, false, crc32(Name));
        setTimeout(function () {
            for (var key in Data) {
                ts.restoreTableItem(Name, Data[key], key);
            }
        }, 250);
    };
    ;
    classCustomsActions.prototype.restoreTableItem = function (Name, Item) {
        var ts = this;
        setTimeout(function () {
            BRW_dbTransaction(function (tx) {
                if (Item.id)
                    var where = { id: Item.id };
                else
                    var where = { name: Item.name };
                var Update = {
                    param: {
                        tx: tx,
                        table: Name,
                        'set': Item
                    },
                    success: function (response) {
                        ts.tables[Name].redy++;
                        ts.progress();
                    },
                    error: function (obj, err) {
                        console.log("ERR", err, Name, Item);
                        ts.tables[Name].redy++;
                        ts.progress();
                    }
                };
                BRW_dbSelect({
                    tx: tx,
                    from: Name,
                    where: where,
                    limit: 1
                }, function (data) {
                    if (data && data.rows && data.rows.length > 0) {
                        if (where.id) {
                            delete Update.param.set.id;
                            Update.param.where = {
                                key: 'id',
                                val: where.id
                            };
                        }
                        else {
                            delete Update.param.set.name;
                            Update.param.where = {
                                key: 'name',
                                val: where.name
                            };
                        }
                        BRW_dbUpdate(Update.param, Update.success, Update.error);
                    }
                    else {
                        BRW_dbInsert(Update.param, Update.success, Update.error);
                    }
                }, function (err) {
                    console.log("DBSelect ERR: ", Name, where);
                });
            });
        }, (100 * (ts.state.n++)));
    };
    ;
    classCustomsActions.prototype.progress = function () {
        var ts = this;
        var DonePrm = true;
        var info = { ready: 0, need: 0 };
        for (var key in ts.tables) {
            info.ready += ts.tables[key].redy || 0;
            info.need += ts.tables[key].need || 0;
            if (ts.tables[key].need > ts.tables[key].redy) {
                DonePrm = false;
            }
        }
        ts.drawUI("progress", { info: info, countdown: false });
        if (DonePrm) {
            console.info('Done');
            var delay = 10;
            ts.reloadAllPages(delay * 1000);
            var interval_1 = setInterval(function () {
                console.info(delay + 'sec before reload');
                delay--;
                ts.drawUI("progress", { info: info, countdown: Math.max(0, delay) });
                if (delay < 0)
                    clearInterval(interval_1);
            }, 1000);
            NAVI.markSelected();
        }
    };
    ;
    classCustomsActions.prototype.remove = function (uuidHead) {
        return __awaiter(this, void 0, void 0, function () {
            var ts, item, sendServerDelHead, sendServerDelData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ts = this;
                        item = ts.getItem(uuidHead);
                        sendServerDelHead = {
                            "action": "lists:delete",
                            "body": {
                                "key": ts.state.listKeyHead,
                                "uuid": [uuidHead]
                            }
                        };
                        sendServerDelData = {
                            "action": "lists:delete",
                            "body": {
                                "key": ts.state.listKeyData,
                                "uuid": [item.uuidData]
                            }
                        };
                        return [4, ts.server({ send: sendServerDelHead })];
                    case 1:
                        _a.sent();
                        ts.server({ send: sendServerDelData });
                        console.info('Remove finish');
                        return [2];
                }
            });
        });
    };
    ;
    classCustomsActions.prototype.rename = function (uuidHead, name) {
        return __awaiter(this, void 0, void 0, function () {
            var ts, item, sendServerAddHead, resultHead;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ts = this;
                        item = ts.getItem(uuidHead);
                        item.name = name;
                        sendServerAddHead = {
                            "action": "lists:set",
                            "body": {
                                "key": ts.state.listKeyHead,
                                "item": [{
                                        uuid: uuidHead,
                                        value: JSON.stringify(item)
                                    }]
                            }
                        };
                        return [4, ts.server({ send: sendServerAddHead })];
                    case 1:
                        resultHead = _a.sent();
                        console.info('Rename finish');
                        return [2];
                }
            });
        });
    };
    ;
    classCustomsActions.prototype.getItem = function (uuidHead) {
        var ts = this;
        var item = false;
        for (var i in ts.list.items) {
            if (ts.list.items[i].uuid == uuidHead) {
                item = JSON.parse(ts.list.items[i].value);
                break;
            }
        }
        return item;
    };
    ;
    classCustomsActions.prototype.create = function (name) {
        var ts = this;
        console.info('Create: ', name);
        BRW_dbTransaction(function (tx) {
            for (var key in ts.tables) {
                if (ts.tables[key].source == "datebase") {
                    ts.dbRead(tx, key);
                }
                else if (ts.tables[key].source == "localStorage") {
                    ts.localStorageRead(key);
                }
            }
        });
        var WaitInterval = setInterval(function () {
            var done = true;
            for (var key in ts.tables)
                if (ts.tables[key].wait)
                    done = false;
            if (done) {
                clearInterval(WaitInterval);
                ts.writeCustoms(name);
            }
        }, 750);
    };
    ;
    classCustomsActions.prototype.writeCustoms = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var ts, now, uuidHead, uuidData, customsData, k, sendServerAddHead, sendServerAddData, resultHead, resultData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ts = this;
                        now = Date.now();
                        uuidHead = ts.createUUID(now);
                        uuidData = ts.createUUID(now + 1);
                        customsData = {};
                        for (k in ts.tables)
                            customsData[k] = ts.tables[k].data;
                        sendServerAddHead = {
                            "action": "lists:set",
                            "body": {
                                "key": ts.state.listKeyHead,
                                "item": [{
                                        uuid: uuidHead,
                                        value: JSON.stringify({ name: name, date: now, uuidData: uuidData })
                                    }]
                            }
                        };
                        sendServerAddData = {
                            "action": "lists:set",
                            "body": {
                                "key": ts.state.listKeyData,
                                "item": [{
                                        uuid: uuidData,
                                        value: JSON.stringify(customsData)
                                    }]
                            }
                        };
                        return [4, ts.server({ send: sendServerAddHead })];
                    case 1:
                        resultHead = _a.sent();
                        return [4, ts.server({ send: sendServerAddData })];
                    case 2:
                        resultData = _a.sent();
                        return [4, ts.removeTail()];
                    case 3:
                        _a.sent();
                        ts.drawUI(["customs-list", "highlight"]);
                        console.info('Finish');
                        return [2];
                }
            });
        });
    };
    ;
    classCustomsActions.prototype.removeTail = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ts, tail, minDate, uuidHeadRemove, i, item, curDate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ts = this;
                        tail = 2;
                        minDate = false;
                        uuidHeadRemove = false;
                        if (typeof AUTH == "object") {
                            if (AUTH.isPremium())
                                tail = 10;
                        }
                        else {
                            console.warn('AUTH is ', typeof AUTH);
                        }
                        if (!(ts.list.items.length >= tail)) return [3, 2];
                        for (i in ts.list.items) {
                            item = JSON.parse(ts.list.items[i].value);
                            curDate = parseInt(item.date) || 0;
                            minDate = minDate ? Math.min(minDate, curDate) : curDate;
                            if (curDate == minDate)
                                uuidHeadRemove = ts.list.items[i].uuid;
                        }
                        if (!uuidHeadRemove) return [3, 2];
                        console.info('Remove tail', uuidHeadRemove);
                        return [4, ts.remove(uuidHeadRemove)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2];
                }
            });
        });
    };
    ;
    classCustomsActions.prototype.drawUI = function (action, mode) {
        if (typeof action !== 'object')
            action = [action || "customs-list"];
        if (typeof CUSTOMS.ui == "object") {
            CUSTOMS.ui.draw(action, mode);
        }
    };
    ;
    classCustomsActions.prototype.localStorageRead = function (Name) {
        var ts = this;
        ts.tables[Name].data = [];
        ts.tables[Name].wait = true;
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            if ((key.indexOf('_ondialsearch') !== -1) ||
                (key.indexOf('_serverdials') !== -1) ||
                (key.indexOf("browser-mode") !== -1) ||
                (key.indexOf("Dexie") !== -1) ||
                (key.indexOf("-cache") !== -1) ||
                (key.indexOf("LargeLocalStorage") !== -1))
                continue;
            var val = localStorage.getItem(key);
            ts.tables[Name].data.push({ key: key, val: val });
        }
        ts.tables[Name].success = true;
        ts.tables[Name].wait = false;
    };
    ;
    classCustomsActions.prototype.dbRead = function (tx, Name) {
        var ts = this;
        ts.tables[Name].data = [];
        ts.tables[Name].wait = true;
        BRW_dbSelect({ tx: tx, from: Name }, function (data) {
            if (data.rows)
                for (var key in data.rows)
                    if (typeof data.rows[key] == "object") {
                        var row = data.rows[key];
                        ts.tables[Name].data.push(row);
                    }
            if (ts.tables[Name].data.length || ts.tables[Name].allow_empty)
                ts.tables[Name].success = true;
            else
                ts.tables[Name].success = false;
            ts.tables[Name].wait = false;
        }, function (err) {
            console.log("BackUp ERR: ", Name, err);
            ts.tables[Name].success = false;
            ts.tables[Name].wait = false;
        });
    };
    ;
    classCustomsActions.prototype.server = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var ts;
            return __generator(this, function (_a) {
                ts = this;
                return [2, new Promise(function (resolve, reject) {
                        var xhr = BRW_post(ts.API.server, JSON.stringify(data.send), function (result) {
                            if ((result.errorCode == 0) ||
                                ((data.options && data.options.errors) &&
                                    (data.options.errors === true || data.options.errors.indexOf(result.errorCode) > -1))) {
                                resolve(result.body);
                            }
                            else {
                                console.warn(result);
                                reject(result.errorCode);
                            }
                            xhr = null;
                        }, function (error) {
                            console.warn(error);
                            reject(error);
                        });
                    })];
            });
        });
    };
    ;
    classCustomsActions.prototype.createUUID = function (id) {
        var uuid = [];
        uuid.push(crc32(String(id)).toString("16"));
        var date = new Date(parseInt(id) || id);
        uuid.push(date.getFullYear());
        uuid.push(String("0" + String(date.getMonth() + 1)).slice(-2)
            +
                String("0" + String(date.getDate())).slice(-2));
        uuid.push(String("0" + String(date.getHours())).slice(-2)
            +
                String("0" + String(date.getMinutes())).slice(-2));
        uuid.push(String(String(id).substr(1)));
        uuid = String(uuid.join('-'));
        return uuid;
    };
    ;
    classCustomsActions.prototype.reloadAllPages = function (timeout) {
        BRW_sendMessage({
            command: "reloadAllPages",
            timeout: timeout || 0,
            except: ['newtab']
        });
        setTimeout(function () {
            getNetTabPages(reloadTabPages);
        }, 150);
    };
    return classCustomsActions;
}());
CUSTOMS.actions = new classCustomsActions();
//# sourceMappingURL=customs-actions.js.map
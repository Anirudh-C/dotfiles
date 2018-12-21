var messagesClass = (function () {
    function messagesClass() {
        this.state = {};
        this.promises = {};
        this.subscribers = {};
        var ts = this;
        ts.listeners();
    }
    ;
    messagesClass.prototype.listeners = function () {
        var ts = this;
        chrome.runtime.onMessage.addListener(function (message, sender) {
            if (typeof message != "object" || message.emitter == LSP.env || message.handler != 'msg')
                return;
            else
                ts.handler(message, sender);
        });
    };
    ;
    messagesClass.prototype.subscribe = function (message, filter, func) {
        var ts = this;
        if (typeof func == "undefined"
            &&
                typeof filter == "function") {
            func = filter;
            filter = false;
        }
        if (typeof ts.subscribers[message] != "object") {
            ts.subscribers[message] = {};
        }
        var id = 's_' + genId();
        ts.subscribers[message][id] = {
            filter: filter,
            func: func
        };
    };
    ;
    messagesClass.prototype.handler = function (message, sender) {
        var ts = this;
        var result, endpoint = window, applyThis = window;
        if (typeof message == "object" && message.cmd) {
            if (message.cmd == "response" && message.sid) {
                if (ts.promises[message.sid]) {
                    ts.promises[message.sid].resolve(message.result);
                    delete ts.promises[message.sid];
                }
                else {
                    console.info('Has no query with SID:', message.sid);
                }
            }
            else if (message.cmd == "emit") {
                console.info("Emitter in " + LSP.env, message);
                if (ts.subscribers[message.action]) {
                    for (var key in ts.subscribers[message.action]) {
                        var premission = true, val = ts.subscribers[message.action][key];
                        if (typeof val.filter == "object") {
                            for (var k in val.filter) {
                                if (message.data[k] != val.filter[k]) {
                                    premission = false;
                                    break;
                                }
                            }
                        }
                        if (premission && typeof val.func == "function") {
                            val.func(message.data);
                        }
                    }
                }
            }
            else {
                var cmd = String(message.cmd).split('.');
                var object = window;
                for (var k in cmd) {
                    var type = typeof endpoint[cmd[k]];
                    if (type !== "undefined") {
                        if (type == "object")
                            applyThis = applyThis[cmd[k]];
                        endpoint = endpoint[cmd[k]];
                    }
                    else {
                        endpoint = undefined;
                        break;
                    }
                }
                if (typeof endpoint == "function") {
                    result = endpoint.apply(applyThis, message.args);
                }
                else {
                    result = endpoint;
                }
                if (message.sid) {
                    var response_1 = {
                        cmd: 'response',
                        sid: message.sid,
                        query: message
                    };
                    if (sender && sender.tab) {
                        response_1.tabId = sender.tab.id;
                    }
                    if (getTypeOf(result, "promise")) {
                        result.then(function (data) {
                            response_1.result = data;
                            ts.sendMessage(response_1);
                        });
                    }
                    else {
                        response_1.result = result;
                        ts.sendMessage(response_1);
                    }
                }
            }
        }
    };
    ;
    messagesClass.prototype.emit = function (action, data) {
        var ts = this;
        ts.send({ cmd: 'emit', action: action, data: data || {} });
    };
    ;
    messagesClass.prototype.send = function (data, opt_args, opt_mode) {
        var ts = this;
        if (typeof data !== "object") {
            data = { cmd: data };
            if (typeof opt_args !== "undefined") {
                if (opt_args === true && !opt_mode) {
                    data.wait = true;
                }
                else if (getTypeOf(opt_args, "array")) {
                    data.args = opt_args;
                }
                else {
                    data.args = [opt_args];
                }
            }
            if (opt_mode === true) {
                data.wait = true;
            }
        }
        if (data.wait) {
            data.sid = 'p_' + genId();
            ts.promises[data.sid] = {};
            ts.promises[data.sid].promise = new Promise(function (resolve, reject) {
                ts.promises[data.sid].resolve = resolve;
                ts.promises[data.sid].reject = reject;
            });
        }
        ts.sendMessage(data);
        return data.wait ? ts.promises[data.sid].promise : true;
    };
    ;
    messagesClass.prototype.sendMessage = function (message) {
        var ts = this;
        message.emitter = LSP.env;
        message.handler = 'msg';
        if (message.tabId) {
            chrome.tabs.sendMessage(message.tabId, message);
        }
        else {
            chrome.runtime.sendMessage(message);
        }
    };
    ;
    return messagesClass;
}());
LSP.Msg = new messagesClass();
//# sourceMappingURL=messages.js.map
var lspToDoBackend = (function () {
    function lspToDoBackend() {
        this.ONCE = [];
        this.API = null;
        this.APIData = {
            lsp: {
                "class": serviceToDoLSP,
                func: true
            },
            chaos: {
                "class": serviceToDoChaos,
                func: false
            }
        };
        this.state = {
            service: VAL.get("todo.service") || "lsp",
            update: {
                process: false
            }
        };
        var ts = this;
        ts.setAPI();
        ts.autoUpdate(true);
        setInterval(function () {
            ts.autoUpdate();
        }, 5e3);
    }
    ;
    lspToDoBackend.prototype.message = function (msg) {
        console.info(msg);
    };
    ;
    lspToDoBackend.prototype.setAPI = function (service) {
        var ts = this;
        if (service)
            ts.state.service = service;
        if (typeof ts.APIData[ts.state.service].func !== "object") {
            ts.APIData[ts.state.service].func = new ts.APIData[ts.state.service]["class"]();
        }
        ts.API = ts.APIData[ts.state.service].func;
        return true;
    };
    ;
    lspToDoBackend.prototype.isAPIFunc = function (name) {
        var ts = this;
        return typeof ts.API[name] == "function";
    };
    ;
    lspToDoBackend.prototype.autoUpdate = function (force) {
        var ts = this;
        var now = Date.now();
        var last = parseInt(VAL.get("todo.last_update")) || 0;
        if (force
            ||
                (ts.state.service !== 'lsp'
                    &&
                        now - last > ts.state.update.interval
                    &&
                        !ts.state.pro.expired)) {
            ts.getList();
        }
    };
    ;
    lspToDoBackend.prototype.getList = function (data) {
        var ts = this;
        if (typeof ts.API.getDataList != "function")
            return;
        if (ts.state.update.process)
            return false;
        else
            ts.state.update.process = true;
        VAL.set("todo.last_update", Date.now());
        ts.API.getDataList(data).then(function (success) {
            ts.state.update.process = false;
        });
    };
    ;
    return lspToDoBackend;
}());
var TodoBack = new lspToDoBackend();
//# sourceMappingURL=todo_backend.js.map
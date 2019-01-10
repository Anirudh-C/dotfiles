var isdevuse = false;

if (!isdevuse) {
    console.log = function () {};
}

var airline_codes = {
    "q5": "40 mile air",
    "aq": "9air",
    "gb": "abx air",
    "jp": "adria airways",
    "a3": "aegean airlines",
    "ei": "aer lingus",
    "dw": "aero charter",
    "7t": "aero express del ecuador",
    "m0": "aero mongolia",
    "a4": "aerocon",
    "aj": "aztec airways",
    "su": "aeroflot russian airlines",
    "kg": "aerogaviota",
    "ar": "aerolíneas argentinas",
    "n3": "aerolíneas mas",
    "p4": "aerolíneas sosa",
    "3s": "aerologic",
    "vw": "aeromar",
    "am": "aeromexico",
    "5d": "aeromexico connect",
    "vh": "aeropostal – alas de venezuela",
    "6n": "aerosucre",
    "6r": "alrosa mirny air enterprise",
    "fk": "africa west",
    "aw": "africa world airlines",
    "xu": "african express airways",
    "8u": "afriqiyah airways",
    "zi": "aigle azur",
    "ah": "air algérie",
    "g9": "air arabia",
    "e5": "air arabia egypt",
    "9p": "air arabia jordan",
    "3o": "air arabia maroc",
    "qn": "air armenia",
    "kc": "air astana",
    "cc": "air atlanta icelandic",
    "uu": "air austral",
    "w9": "air bagan",
    "ab": "air berlin",
    "kr": "air bishkek",
    "bp": "air botswana",
    "b1": "air bucharest",
    "2j": "air burkina",
    "bx": "air busan",
    "sm": "air cairo",
    "ty": "air calédonie",
    "ac": "air canada",
    "rv": "air canada rouge",
    "tx": "air caraïbes",
    "2q": "air cargo carriers",
    "cw": "chinggis airways",
    "ca": "air china",
    "3e": "air choice one",
    "xk": "air corsica",
    "lb": "air costa",
    "hf": "air côte d'ivoire",
    "yn": "air creebec",
    "hd": "air do",
    "en": "air dolomiti",
    "ux": "air europa",
    "x4": "air excursions, llc",
    "af": "air france",
    "gl": "air greenland",
    "ld": "air hong kong",
    "ny": "air iceland",
    "ai": "air india",
    "ix": "air india express",
    "9i": "air india regional",
    "i6": "air indus",
    "3h": "air inuit",
    "i9": "air italy",
    "jm": "air jamaica",
    "nq": "air japan",
    "k7": "air kbz",
    "4a": "air kiribati",
    "js": "air koryo",
    "wj": "air labrador",
    "q9": "air liaison",
    "7q": "ulendo airlink",
    "lt": "air lituanica",
    "nx": "air macau",
    "md": "air madagascar",
    "qm": "air malawi",
    "km": "air malta",
    "6t": "air mandalay",
    "mk": "air mauritius",
    "ml": "air méditerranée",
    "9u": "air moldova",
    "sw": "air namibia",
    "nz": "air new zealand",
    "a7": "air niamey",
    "px": "air niugini",
    "4n": "air north",
    "m3": "latam cargo",
    "yw": "air nostrum",
    "og": "air onix",
    "7p": "air panama",
    "gz": "air rarotonga",
    "pj": "air saint-pierre",
    "ju": "air serbia",
    "hm": "air seychelles",
    "4d": "air sinai",
    "yi": "air sunshine",
    "vt": "air tahiti",
    "tn": "air tahiti nui",
    "tc": "air tanzania",
    "da": "air tindi",
    "ts": "air transat",
    "8c": "air transport international (ati)",
    "u7": "air uganda",
    "3n": "air urga",
    "nf": "air vanuatu",
    "vl": "air via",
    "zw": "air wisconsin",
    "um": "air zimbabwe",
    "ak": "airasia",
    "i5": "airasia india",
    "pq": "airasia philippines",
    "d7": "airasia x",
    "z2": "airasia zest",
    "bt": "airbaltic",
    "pa": "airblue",
    "ru": "airbridge cargo",
    "sb": "aircalin",
    "p2": "airkenya express",
    "cg": "airlines png",
    "4z": "airlink",
    "tl": "regionallink",
    "2b": "ak bars aero",
    "6l": "aklak air",
    "as": "alaska airlines",
    "xj5": "alaska seaplane service l.l.c.",
    "g2": "albatros airlines",
    "az": "alitalia",
    "nh": "all nippon airways (ana)",
    "g4": "allegiant air",
    "qq": "alliance airlines",
    "kh": "aloha air cargo",
    "5a": "alpine aviation",
    "z8": "amaszonas",
    "yj": "asian wings airways",
    "aa": "american airlines",
    "mq": "american eagle airlines",
    "a8": "ameriflight",
    "m6": "amerijet international",
    "eh": "ana wings",
    "2g": "angara airlines",
    "q3": "anguilla air services",
    "o4": "antrak air",
    "fg": "ariana afghan airlines",
    "w3": "arik air",
    "iz": "arkia israeli airlines",
    "u8": "armavia",
    "ag": "aruba airlines",
    "r7": "aserca airlines",
    "oz": "asiana airlines",
    "kp": "asky airlines",
    "5o": "europe airpost",
    "a2": "astra airlines",
    "8d": "servant air",
    "i3": "ata airlines",
    "rc": "atlantic airways",
    "td": "atlantis european airways",
    "5y": "atlas air",
    "h8": "auric air services",
    "gr": "aurigny air services",
    "hz": "aurora",
    "au": "austral líneas aéreas",
    "xm": "j-air",
    "os": "austrian airlines",
    "yk": "avia traffic company",
    "zr": "aviacon zitotrans",
    "6a": "aviacsa",
    "av": "avianca",
    "o6": "avianca brasil",
    "qt": "avianca cargo",
    "lr": "avianca costa rica",
    "2k": "avianca ecuador",
    "ta": "avianca el salvador",
    "t0": "avianca peru",
    "mv": "maldivian air taxi",
    "4b": "aviastar-tu",
    "gu": "aviateca",
    "u3": "avies air company",
    "x9": "avion express",
    "9v": "avior airlines",
    "j2": "azerbaijan airlines",
    "s4": "azores airlines",
    "ad": "azul",
    "zf": "azur air",
    "cj": "ba cityflyer",
    "j4": "badr airlines",
    "up": "bahamasair",
    "1b": "balkan holidays air",
    "pg": "bangkok airways",
    "b4": "bankair",
    "y6": "batavia air",
    "id": "batik",
    "jv": "bearskin airlines",
    "jd": "beijing capital airlines",
    "z9": "bek air",
    "4t": "belair airlines",
    "b2": "belavia belarusian airlines",
    "ch": "bemidji airlines",
    "8e": "bering air",
    "j8": "berjaya air",
    "b3": "bhutan airlines",
    "bg": "biman bangladesh airlines",
    "nt": "binter canarias",
    "0b": "blue air",
    "bz": "blue dart aviation",
    "si": "blue islands",
    "bv": "blue panorama airlines",
    "kf": "blue1",
    "bf": "bluebird cargo",
    "bm": "bmi regional",
    "ob": "boliviana de aviación",
    "yb": "borajet",
    "dc": "braathens regional",
    "1x": "branson airexpress",
    "l9": "bristow group",
    "db": "brit air",
    "ba": "british airways",
    "sn": "brussels airlines",
    "u4": "buddha air",
    "fb": "bulgaria air",
    "1t": "bulgarian air charter",
    "uz": "buraq air",
    "8b": "business air",
    "xv": "bvi airways",
    "bu": "caa congo",
    "5c": "cal cargo air lines",
    "mo": "calm air",
    "qc": "camair-co",
    "k6": "cambodia angkor air",
    "5t": "canadian north",
    "c6": "canjet airlines",
    "9k": "cape air",
    "8f": "cardig air",
    "w8": "cargojet airways",
    "cv": "cargolux",
    "c8": "cronos airlines",
    "bw": "caribbean airlines",
    "v3": "carpatair",
    "iv": "caspian airlines",
    "ka": "dragonair",
    "cx": "cathay pacific airways",
    "kx": "cayman airways",
    "dg": "cebgo",
    "5j": "cebu pacific air",
    "c2": "ceiba intercontinental",
    "9m": "central mountain air ltd.",
    "ce": "chalair aviation",
    "6q": "cham wings airlines",
    "5b": "chanchangi airlines",
    "rp": "chautauqua airlines",
    "eu": "chengdu airlines",
    "ci": "china airlines",
    "ck": "china cargo airlines",
    "mu": "china eastern airlines",
    "g5": "china express airlines",
    "8y": "china postal airlines",
    "cz": "china southern airlines",
    "kn": "china united airlines",
    "oq": "chongqing airlines",
    "qg": "citilink",
    "e8": "city airways",
    "wx": "cityjet",
    "zm": "cityline hungary",
    "nm": "citywing",
    "c4": "click airways",
    "dq": "delta connection (kenya)",
    "co": "cobalt air",
    "nc": "cobham aviation services australia",
    "mn": "comair",
    "c5": "commutair",
    "cp": "compass airlines",
    "de": "condor flugdienst",
    "v0": "conviasa",
    "cm": "copa airlines",
    "p5": "copa airlines colombia",
    "xc": "corendon airlines",
    "cd": "corendon dutch airlines",
    "ss": "corsair",
    "ou": "croatia airlines",
    "ok": "csa czech airlines",
    "cu": "cubana",
    "d3": "daallo airlines",
    "9j": "dana air",
    "dx": "danish air transport (dat)",
    "v5": "danube wings",
    "dl": "delta air lines",
    "j7": "flynonstop",
    "d5": "dhl aero expreso",
    "d0": "dhl air uk",
    "l3": "dhl de guatemala, s.a.",
    "es": "dhl international e.c.",
    "hs": "direktflyg",
    "do": "discovery air",
    "z6": "dniproavia",
    "qd": "dobrolet airlines",
    "d9": "donavia",
    "7d": "donbassaero",
    "dz": "donghai airlines",
    "r6": "dot lt",
    "kb": "druk air (royal bhutan airlines)",
    "2d": "dynamic airways",
    "h7": "eagle air",
    "b5": "east african safari air express",
    "ze": "eastar jet",
    "ea": "eastern airlines",
    "t3": "eastern airways",
    "u2": "easyjet",
    "ds": "easyjet switzerland",
    "qy": "eat leipzig",
    "lc": "ecair",
    "8j": "ecojet",
    "wk": "edelweiss air",
    "ms": "egyptair",
    "ly": "el al israel airlines",
    "ek": "emirates airlines",
    "9e": "endeavor air",
    "eg": "enerjet",
    "e4": "enter air",
    "e7": "estafeta carga aérea",
    "ye": "eram air",
    "b8": "eritrean airlines",
    "ov": "estonian air",
    "et": "ethiopian airlines",
    "ey": "etihad airways",
    "f7": "etihad regional",
    "yu": "euroatlantic airways",
    "k2": "eurolot",
    "ew": "eurowings",
    "br": "eva airways",
    "e9": "evelop airlines",
    "5v": "everts air",
    "ev": "expressjet",
    "fe": "far eastern air transport (fat)",
    "fn": "fastjet",
    "fx": "fedex",
    "fo": "felix airways",
    "fj": "fiji link",
    "ay": "finnair",
    "fy": "firefly",
    "7f": "first air",
    "w2": "flexflight aps",
    "4y": "flight alaska",
    "rf": "florida west international airways",
    "oj": "fly jamaica airways",
    "5h": "fly540",
    "z7": "flyafrica.com",
    "be": "flybe",
    "fz": "flydubai",
    "vp": "flyme",
    "5m": "flymontserrat",
    "xy": "flynas",
    "gt": "flyvista",
    "fh": "freebird airlines",
    "fp": "freedom air",
    "f9": "frontier airlines",
    "2f": "frontier flying service",
    "jh": "fuji dream airlines",
    "fu": "fuzhou airlines",
    "ga": "garuda indonesia",
    "4g": "gazpromavia",
    "a9": "georgian airlines",
    "st": "germania",
    "4u": "germanwings",
    "g6": "ghadames air transport",
    "5s": "global aviation and service group",
    "gh": "globus",
    "g8": "goair",
    "g7": "gojet airlines",
    "g3": "gol transportes aéreos",
    "y5": "golden myanmar airlines",
    "cn": "grand china airlines",
    "gv": "grant aviation",
    "zk": "great lakes airlines",
    "zg": "grozny avia",
    "6p": "gryphon airlines",
    "gf": "gulf air",
    "h6": "hageland aviation services",
    "hr": "hahn air",
    "hu": "hainan airlines",
    "7z": "halcyonair cabo verde airways s.a.",
    "h3": "hermes airline",
    "ha": "hawaiian airlines",
    "bh": "hawkair",
    "hn": "heavylift cargo airlines",
    "ns": "hebei airlines",
    "2l": "helvetic airways",
    "ud": "hex'air",
    "5k": "hi fly",
    "hc": "holidays czech airlines",
    "hx": "hong kong airlines",
    "uo": "hong kong express",
    "a5": "hop!",
    "qx": "horizon air",
    "mr": "hunnu air",
    "h5": "i-fly",
    "ii": "ibc airways",
    "ib": "iberia",
    "i2": "iberia express",
    "fw": "ibex airlines",
    "fi": "icelandair",
    "6e": "indigo",
    "qz": "indonesia airasia",
    "xt": "indonesia airasia x",
    "7i": "insel air",
    "8i": "insel air aruba",
    "d6": "interair",
    "jy": "intercaribbean airways",
    "4o": "interjet-abc",
    "i4": "international airlink",
    "3l": "intersky",
    "io": "iraero",
    "ir": "iran air",
    "b9": "iran airtour",
    "ep": "iran aseman airlines",
    "nv": "iranian naft airlines",
    "ia": "iraqi airways",
    "ih": "irtysh air",
    "is": "island airlines",
    "wp": "island airlines hawaii",
    "wc": "isleña airlines",
    "6h": "israir airlines",
    "4i": "izair",
    "i8": "izhavia",
    "jx": "jambojet",
    "jc": "japan air commuter",
    "jl": "japan airlines",
    "nu": "japan transocean air",
    "j9": "jazeera airways",
    "qk": "jazz",
    "7c": "jeju airlines",
    "9w": "jet airways",
    "jf": "jet asia airways",
    "s2": "jet konnect",
    "jo": "jet time",
    "ls": "jet2",
    "tb": "jetairfly",
    "b6": "jetblue airways",
    "jg": "jetgo",
    "jq": "jetstar",
    "3k": "jetstar asia",
    "gk": "jetstar japan",
    "bl": "jetstar pacific airlines",
    "lj": "jin air",
    "3b": "job air - central connect airlines",
    "r5": "jordan aviation",
    "jr": "joy air",
    "6j": "jubba airways",
    "3j": "jubba airways kenya",
    "ho": "juneyao airlines",
    "8k": "k-mile air",
    "kd": "kal star aviation",
    "k4": "kalitta air",
    "k9": "tonlesap airlines",
    "rq": "kam air",
    "k8": "world atlantic airlines",
    "ik": "kaya airlines",
    "m5": "kenmore air",
    "4k": "kenn borek air",
    "kq": "kenya airways",
    "kt": "kharkiv airlines",
    "ko": "khors air",
    "y9": "kish air",
    "wa": "klm cityhopper",
    "kl": "klm royal dutch airlines",
    "7k": "kolavia (kogalymavia)",
    "ke": "korean air",
    "zc": "korongo airlines",
    "ky": "kunming airlines",
    "ku": "kuwait airways",
    "6k": "kyrgyz trans avia",
    "qh": "kyrgyzstan air company",
    "b0": "la compagnie",
    "5u": "lade - lineas aéreas del estado",
    "tm": "lam mozambique airlines",
    "l7": "lanco",
    "qv": "lao airlines",
    "lf": "lao central airlines",
    "le": "laparkan airways",
    "8z": "laser-linea aérea de servicio ejecutivo regional",
    "4m": "latam argentina",
    "jj": "latam brasil",
    "uc": "latam cargo chile",
    "m7": "latam cargo mexico",
    "la": "latam chile",
    "4c": "latam colombia",
    "xl": "latam ecuador",
    "lu": "latam express",
    "pz": "latam paraquay",
    "lp": "latam perú",
    "w4": "lc perú",
    "li": "liat",
    "ln": "libyan airlines",
    "4v": "lignes aériennes congolaises",
    "jt": "lion air",
    "lm": "loganair",
    "gj": "loong air",
    "lo": "lot polish airlines",
    "8l": "lucky air",
    "lh": "lufthansa",
    "cl": "lufthansa cityline",
    "lg": "luxair",
    "l2": "lynden air cargo",
    "vm": "macair jet",
    "uj": "magnicharters",
    "w5": "mahan air",
    "3w": "malawian airlines",
    "mh": "malaysia airlines",
    "q2": "maldivian",
    "od": "malindo air",
    "tf": "malmö aviation",
    "ae": "mandarin airlines",
    "je": "mango",
    "7y": "mann yatanarpon airlines",
    "mp": "martinair",
    "l6": "mauritania airlines international",
    "nr": "max air",
    "mw": "mokulele airlines",
    "lv": "mega maldives",
    "im": "menajet",
    "4x": "mercury world cargo",
    "ig": "meridiana",
    "mz": "merpati (merpati nusantara airlines)",
    "yv": "mesa airlines",
    "ll": "miami air international",
    "om": "miat-mongolian airlines",
    "me": "middle east airlines (mea)",
    "my": "midwest airlines (egypt)",
    "mj": "mihin lanka",
    "mb": "mng airlines",
    "zb": "monarch airlines",
    "ym": "montenegro airlines",
    "ub": "myanma airways",
    "8m": "myanmar airways international",
    "9t": "mycargo airlines",
    "ue": "nasair",
    "n8": "national airlines (n8)",
    "on": "nauru airlines",
    "zn": "naysa",
    "no": "neos",
    "ra": "nepal airlines",
    "n7": "nht linhas aéreas",
    "ne": "nesma airlines",
    "1i": "netjets",
    "ej": "new england airlines",
    "e3": "new gen airways",
    "2n": "nextjet",
    "hg": "niki",
    "np": "nile air",
    "kz": "nippon cargo airlines (nca)",
    "dd": "nok air",
    "5e": "nok mini",
    "5n": "nordavia regional airlines",
    "y7": "nordstar",
    "n4": "trans air benin",
    "hw": "north-wright airways ltd.",
    "j3": "northwestern air",
    "d8": "norwegian air international",
    "dy": "norwegian air shuttle",
    "du": "norwegian long haul",
    "bj": "nouvelair",
    "o9": "nova airways",
    "n9": "novair",
    "vq": "novoair",
    "oi": "okapi airlines",
    "bk": "okay airways",
    "oa": "olympic air",
    "wy": "oman air",
    "oy": "omni air international",
    "8q": "onur air",
    "ec": "openskies",
    "6o": "orbest",
    "r2": "orenair",
    "ox": "orient thai airlines",
    "oc": "oriental air bridge",
    "pe": "people's vienna line",
    "3f": "pacific airways inc",
    "8p": "pacific coastal airlines",
    "lw": "pacific wings",
    "pk": "pakistan international airlines (pia)",
    "2p": "pal express",
    "2z": "passaredo linhas aéreas",
    "mm": "peach",
    "pc": "pegasus airlines",
    "ks": "penair",
    "p9": "peruvian airlines",
    "pr": "philippine airlines",
    "dp": "podeba",
    "po": "polar air cargo",
    "yq": "polet airlines",
    "pi": "polyarnye avialinii",
    "ph": "polynesian airlines",
    "pd": "porter airlines",
    "ni": "tap express",
    "pw": "precision air services",
    "3x": "premier trans aire",
    "0j": "premium jet",
    "pf": "primera air",
    "8w": "private wings",
    "p6": "privilege style",
    "p0": "proflight commuter services",
    "pb": "provincial airlines",
    "oh": "psa airlines",
    "p1": "publiccharters.com",
    "qf": "qantas airways",
    "qr": "qatar airways",
    "qb": "qeshm airlines",
    "qw": "qingdao airlines",
    "rk": "r airlines",
    "rt": "rak airways",
    "7h": "ravn alaska",
    "rn": "rayani air",
    "wz": "red wings airlines",
    "rx": "regent airways",
    "f2": "safari link",
    "ys": "régional compagnie aérienne européenne",
    "zl": "regional express (rex)",
    "yx": "republic airlines",
    "fv": "rossiya",
    "rg": "rotana jet",
    "rr": "royal air force",
    "at": "royal air maroc",
    "bi": "royal brunei airlines",
    "rl": "royal falcon",
    "4r": "royal flight",
    "rj": "royal jordanian airlines",
    "ry": "royal wings",
    "dr": "ruili airlines",
    "r4": "rus aviation",
    "7r": "rusline",
    "5r": "rutaca airlines (rutas aéreas ca)",
    "wb": "rwandair",
    "rd": "ryan international airlines",
    "fr": "ryanair",
    "s7": "s7 airlines",
    "fa": "safair",
    "4q": "safi airways",
    "so": "salsa d'haiti",
    "rz": "sansa airlines",
    "6w": "saravia (saratov airlines)",
    "sk": "sas scandinavian airlines",
    "sp": "sata air açores",
    "9r": "satena (servicio aéreo a territorios nacionales)",
    "sv": "saudia",
    "s3": "sba airlines",
    "dv": "scat airlines",
    "yr": "scenic airlines",
    "tz": "scoot",
    "bb": "seaborne airlines",
    "k5": "seaport airlines",
    "dn": "sénégal airlines",
    "d2": "severstal air company",
    "o3": "sf airlines",
    "nl": "shaheen air international",
    "sc": "shandong airlines",
    "fm": "shanghai airlines",
    "sh": "sharp airlines",
    "zh": "shenzhen airlines",
    "s5": "shuttle america",
    "o8": "siam air",
    "3u": "sichuan airlines",
    "zp": "silk way airlines",
    "7l": "silk way west airlines",
    "mi": "silkair",
    "3m": "silver airways",
    "sq": "singapore airlines",
    "h2": "sky airline",
    "za": "sky angkor airlines",
    "gg": "sky lease cargo",
    "rs": "sky regional airlines",
    "q7": "skybahamas",
    "bc": "skymark airlines",
    "q6": "skytrans",
    "oo": "skywest airlines",
    "xr": "skywest airlines (pty)",
    "sx": "skywork airlines",
    "m4": "smart aviation company",
    "qs": "smart wings",
    "6y": "smartlynx airlines",
    "2e": "smokey bay air",
    "8r": "sol líneas aéreas",
    "4s": "solar cargo",
    "lq": "solaseed air",
    "ie": "solomon airlines",
    "4j": "somon air",
    "sa": "south african airways",
    "xz": "south african express airways",
    "yg": "south airlines",
    "9s": "southern air",
    "pl": "southern air charter",
    "wn": "southwest airlines",
    "sg": "spicejet",
    "nk": "spirit airlines",
    "9c": "spring airlines",
    "ij": "spring airlines japan",
    "ul": "srilankan airlines",
    "sj": "sriwijaya air",
    "pv": "st barth commuter",
    "2i": "star perú",
    "s9": "starbow airlines",
    "7g": "starflyer",
    "qp": "starlight airlines",
    "re": "stobart air",
    "sd": "sudan airways",
    "s6": "sun air",
    "6g": "sun air express",
    "ez": "sun air of scandinavia",
    "sy": "sun country airlines",
    "2u": "sun d'or international airlines",
    "xq": "sunexpress",
    "xg": "sunexpress deutschland",
    "wg": "sunwing airlines",
    "py": "surinam airways",
    "lx": "swiss international air lines",
    "7e": "sylt air",
    "fs": "syphax airlines",
    "rb": "syrianair",
    "tw": "t'way air",
    "dt": "taag angola airlines",
    "hh": "taban air",
    "vr": "tacv cabo verde airlines",
    "ti": "tailwind airlines",
    "7j": "tajik air",
    "eq": "tame linea aérea del ecuador",
    "4e": "tanana air service",
    "tq": "tandem aero",
    "tp": "tap portugal",
    "k3": "taquan air",
    "ro": "tarom romanian air transport",
    "hj": "tasman cargo airlines",
    "sf": "tassili airlines",
    "u9": "tatarstan",
    "fd": "thai airasia",
    "xj": "thai airasia x",
    "tg": "thai airways international",
    "sl": "thai lion air",
    "we": "thai smile",
    "mt": "thomas cook airlines",
    "hq": "thomas cook airlines belgium",
    "dk": "thomas cook airlines scandinavia",
    "by": "thomson airways",
    "gs": "tianjin airlines",
    "3p": "tiara air aruba",
    "tv": "tibet airlines",
    "tr": "tigerair",
    "tt": "tigerair australia",
    "it": "tigerair taiwan",
    "zt": "titan airways",
    "3v": "tnt airways",
    "9d": "toumaï air tchad",
    "tj": "tradewind aviation",
    "q8": "trans air congo",
    "m8": "trans maldivian airways",
    "ax": "trans states airlines",
    "un": "transaero airlines",
    "ge": "transasia airways",
    "hv": "transavia.com",
    "to": "transavia.com france",
    "th": "transmile air services",
    "7o": "travel service (hungary)",
    "6d": "travel service (slovakia)",
    "3z": "travel service polska",
    "gm": "tri mg airlines",
    "il": "trigana air service",
    "t4": "trip linhas aéreas",
    "pm": "tropic air",
    "or": "tui airlines netherlands",
    "x3": "tuifly",
    "6b": "tuifly nordic",
    "tu": "tunisair",
    "ug": "tunisair express",
    "8s": "turbojet",
    "tk": "turkish airlines",
    "t5": "turkmenistan airlines",
    "t7": "twin jet",
    "ps": "ukraine international airlines",
    "go": "uls airlines cargo",
    "uf": "um air",
    "b7": "uni airways",
    "uw": "uni-top airlines",
    "ua": "united airlines",
    "4h": "united airways bangladesh",
    "5x": "ups airlines (united parcel service)",
    "u6": "ural airlines",
    "uq": "urumqi air",
    "us": "us airways",
    "bs": "us-bangla airlines",
    "ut": "utair aviation",
    "ur": "utair express",
    "qu": "utair ukraine",
    "hy": "uzbekistan airways",
    "zv": "v air",
    "v9": "van air europe",
    "jw": "vanilla air",
    "vu": "veca airlines",
    "v4": "vieques air link",
    "vj": "vietjet air",
    "vn": "vietnam airlines",
    "nn": "vim airlines",
    "vx": "virgin america",
    "vs": "virgin atlantic airways",
    "va": "virgin australia",
    "dj": "virgin samoa",
    "v2": "vision airlines",
    "uk": "vistara",
    "vb": "vivaaerobus",
    "fc": "vivacolombia",
    "xf": "vladivostok air",
    "vg": "vlm airlines",
    "y4": "volaris",
    "vi": "volga-dnepr airlines",
    "v7": "volotea airlines",
    "vy": "vueling airlines",
    "eb": "wamos air",
    "4w": "warbelow's air ventures inc.",
    "wt": "wasaya airways",
    "2w": "welcome air",
    "pn": "west air",
    "pt": "west air sweden",
    "8o": "west coast air",
    "wh": "westair benin",
    "ws": "westjet airlines",
    "wr": "westjet encore",
    "wf": "widerøe",
    "wm": "winair",
    "7w": "windrose airlines",
    "iw": "wings air",
    "l4": "wings of lebanon",
    "w6": "wizz air",
    "ww": "wow air",
    "mf": "xiamen airlines",
    "se": "xl airways france",
    "r3": "yakutia airlines",
    "yc": "yamal airlines",
    "yh": "yangon airways",
    "y8": "yangtze river express",
    "iy": "yemenia (yemen airways)",
    "yt": "yeti airlines",
    "z4": "zagros airlines"
};

(function (i,s,o,g,r,a,m) {i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function () {
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document, "script", "https://www.google-analytics.com/analytics.js", "ga");

console.log("start of background page");

if (!isdevuse) {
    ga("create", "UA-49863451-1", "auto");
    ga("require", "displayfeatures");
    ga("set", "checkProtocolTask", function () {});
}

try {
    chrome.storage.local.get("user_id", function (result) {
        if (result["user_id"]) {
            ga("set", "&uid", result["user_id"]);
            ga("set", "userId", result["user_id"]);
            console.log("user_id set to analyt");
        } else {
            console.log("user id not set to analytics,1st time install?");
        }
    });
} catch (err) {
    console.log(err);
}

ga("send", "pageview", "/background.html");

var tracked_sites = [];
var notifClickOpenURL = "";
var storage = chrome.storage.local;
var coupons_icon_set = false;

var getUUID = function (message, sender, sendResponse) {
    console.log(message);
    if (message.method == "getUUID") {
        // check 1
        try {
            storage.get("gcm_id", function (gcm_data) {
                //test 1
                if (chrome.runtime.lastError) {
                    ga("send", "event", "runtime error", "storage", chrome.runtime.lastError.message);
                    console.log(chrome.runtime.lastError.message);
                    sendResponse({});
                }

                storage.get("uuid", function (items) {
                    //test 2
                    if (chrome.runtime.lastError) {
                        ga("send", "event", "runtime error", "storage", chrome.runtime.lastError.message);
                        console.log(chrome.runtime.lastError.message);
                        sendResponse({});
                    }

                    if (items) {
                        if (items.uuid) {
                            console.log("mc: mothership here, have message YaY");
                            sendResponse({status: items.uuid, gcm_id: gcm_data.gcm_id});
                        } else {
                            console.log("mc: mothership here, no message sob");
                            sendResponse({status: items.uuid, gcm_id: gcm_data.gcm_id});
                        }
                    } else {
                        console.log("mc: mothership here, no items message boohoo!");
                        sendResponse({status: items, gcm_id: gcm_data.gcm_id});
                    }
                });
            });
        } catch (err) {
            ga("send", "event", "storage error", "getUUID", err);
            console.log(err);
            sendResponse({});
        }
    } else if (message.method == "setUUID") {
        try {
            console.log("mc: setting mothership birthname " + message.key.length);
        } catch (err) {
            console.log("mc: something wrong in setting mothership name" + err.message);
        }
        // check 2
        try {
            storage.set({"uuid": message.key}, function () {
                //test 3
                if (chrome.runtime.lastError) {
                    ga("send", "event", "runtime error", "storage", chrome.runtime.lastError.message);
                    console.log(chrome.runtime.lastError.message);
                    sendResponse({});
                }
            });
        } catch (err) {
            ga("send", "event", "storage error", "setUUID", err);
            console.log(err);
            sendResponse({});
        }
    } else if (message.method == "showpageicon") {
        //check 3
        try {
            chrome.tabs.query({currentWindow: true, active : true}, function (tabArray) {
                //test 4
                if (chrome.runtime.lastError) {
                    ga("send", "event", "runtime error", "tab", chrome.runtime.lastError.message);
                    console.log(chrome.runtime.lastError.message);
                    sendResponse({});
                }
                setPageActionIcon(tabArray[0].id);
                sendResponse({});
            });
        } catch (err) {
            ga("send", "event", "tabs error", "showpageicon", err);
            console.log(err);
            sendResponse({});
        }
    } else if (message.method == "ga-recommendclick") {
        console.log("recommend clicked");
        ga("send", "event", "a", "click", "pricedroppopup");
    } else if (message.method == "getCassy") {
        //check 4
        try {
            storage.get("cassy", function (items) {
                //test 5
                if (chrome.runtime.lastError) {
                    ga("send", "event", "runtime error", "storage", chrome.runtime.lastError.message);
                    console.log(chrome.runtime.lastError.message);
                    sendResponse({});
                }
                console.log("item?");
                console.log(items);
                if (items) {
                    if (items.cassy) {
                        console.log("mc: mothership here, have sassy message YaY");
                        sendResponse({status: items.cassy});
                    } else {
                        console.log("mc: mothership here, no sassy message sob");
                        sendResponse({status: items.cassy});
                    }
                } else {
                    console.log("mc: mothership here, no sassy items message boohoo!");
                    sendResponse({status: items});
                }
            });
        } catch (err) {
            ga("send", "event", "storage error", "cassy", err);
            console.log(err);
            sendResponse({});
        }
    } else if (message.method == "getEmmy") {
        //check 5
        try {
            storage.get(["emmy", "uuid", "gcm_id", "user_id","sd_id"], function (items) {
                //test 6
                if (chrome.runtime.lastError) {
                    ga("send", "event", "runtime error", "storage", chrome.runtime.lastError.message);
                    console.log(chrome.runtime.lastError.message);
                    sendResponse({});
                }
                console.log("emmy?");
                console.log(items);
                if (items) {
                    if (items.emmy) {
                        console.log("mc: mothership here, have emmy message YaY");
                        console.log(items.emmy);
                        sendResponse({status: items});
                    } else {
                        console.log("mc: mothership here, no emmy message sob");
                        sendResponse({status: items});
                    }
                } else {
                    console.log("mc: mothership here, no emmy items message boohoo!");
                    sendResponse({status: items});
                }
            });
        } catch (err) {
            ga("send", "event", "storage error", "getEmmy", err);
            console.log(err);
            sendResponse({});
        }
    } else if (message.method == "getaffy") {
        update_affy_flags();
        try {
            storage.get(["az_search", "fk_search", "sd_search", "ja_search", "my_search", "az_price", "fk_price", "sd_price","tc_search","tc_price"], function (items) {
                if (chrome.runtime.lastError) {
                    ga("send", "event", "runtime error", "storage", chrome.runtime.lastError.message);
                    console.log(chrome.runtime.lastError.message);
                    sendResponse({});
                } else {
                    console.log(items);
                    sendResponse({status: items});
                }
            });
        } catch (err) {
            ga("send", "event", "storage error", "getEmmy", err);
            console.log(err);
            sendResponse({});
        }
    } else if (message.method == "setaffy") {
        var affyflag_deets_obj = {};
        affyflag_deets_obj[message.affy] = message.value;
        chrome.storage.local.set(affyflag_deets_obj, function () {});
    } else if (message.method == "set_is_our_affy") {
        var affyflag_deets_obj = {};
        affyflag_deets_obj[message.affy] = message.value;
        chrome.storage.local.set(affyflag_deets_obj, function () {});
    } else if (message.method == "get_is_our_affy") {
        update_affy_flags();
        try {
            storage.get(["is_our_az"], function (items) {
                if (chrome.runtime.lastError) {
                    ga("send", "event", "runtime error", "storage", chrome.runtime.lastError.message);
                    console.log(chrome.runtime.lastError.message);
                    sendResponse({});
                } else {
                    console.log(items);
                    sendResponse({status: items});
                }
            });
        } catch (err) {
            ga("send", "event", "storage error", "getEmmy", err);
            console.log(err);
            sendResponse({});
        }
    } else if (message.method == "checkTrackPiddle") {
        console.log("in checkTrackPiddle");
        try {
            console.log("mc: checking if piddle tracked " + message.key);
        } catch (err) {
            console.log("mc: something wrong in setting piddle straight" + err.message);
        }
        var curr_piddle = message.key;

        //check 6
        try {
            storage.get(["emmy", "trackpiddles"], function (items) {
                //test 7
                if (chrome.runtime.lastError) {
                    ga("send", "event", "runtime error", "storage", chrome.runtime.lastError.message);
                    console.log(chrome.runtime.lastError.message);
                    sendResponse({});
                }
                console.log("all piddles?");
                console.log(items);
                if (items && items.trackpiddles) {
                    console.log("found piddles in cupboard, checking");
                    console.log(items.trackpiddles);
                    var tracked_piddles=JSON.parse(items.trackpiddles);
                    console.log(tracked_piddles);
                    if (curr_piddle in tracked_piddles) {
                        console.log("tracking this piddle");
                        sendResponse({status: "tracking", emmy: items.emmy});
                    } else {
                        console.log("not tracked this piddle");
                        sendResponse({status: "nottracking", emmy: items.emmy});
                    }
                } else {
                    sendResponse({status: "empty"});
                }
            });
        } catch (err) {
            ga("send", "event", "storage error", "checkTrackPiddle", err);
            console.log(err);
            sendResponse({});
        }
    } else if (message.method == "setTrackPiddle") {
        console.log("in setTrackPiddle");
        try {
            console.log("mc: setting piddle straight " + message.key);
        } catch (err) {
            console.log("mc: something wrong in setting piddle straight" + err.message);
        }
        var curr_piddle = JSON.parse(message.key);
        var curr_piddle_obj = Object.keys(curr_piddle)[0];
        var curr_piddle_date = curr_piddle[curr_piddle_obj];

        //check 7
        try {
            storage.get("trackpiddles", function (items) {
                //test 8
                if (chrome.runtime.lastError) {
                    ga("send", "event", "runtime error", "storage", chrome.runtime.lastError.message);
                    console.log(chrome.runtime.lastError.message);
                    sendResponse({});
                }
                console.log("all piddles?");
                console.log(items);
                if (items && items.trackpiddles) {
                    console.log("found piddles in cupboard");
                    console.log(items.trackpiddles);
                    console.log("what is this?");
                    var tracked_piddles=JSON.parse(items.trackpiddles);
                    console.log(tracked_piddles);
                    tracked_piddles[curr_piddle_obj]=curr_piddle_date;

                    storage.set({"trackpiddles": JSON.stringify(tracked_piddles)}, function () {
                        //test 9
                        if (chrome.runtime.lastError) {
                            ga("send", "event", "runtime error", "storage", chrome.runtime.lastError.message);
                            console.log(chrome.runtime.lastError.message);
                            sendResponse({});
                        }
                        console.log("updated tracked piddles!");
                        console.log(JSON.stringify(tracked_piddles));
                    });
                } else {
                    console.log("piddle cupboard empty?");
                    storage.set({"trackpiddles": message.key}, function () {
                        //test 10
                        if (chrome.runtime.lastError) {
                            ga("send", "event", "runtime error", "storage", chrome.runtime.lastError.message);
                            console.log(chrome.runtime.lastError.message);
                            sendResponse({});
                        }
                        console.log("updated tracked piddles!");
                        console.log(JSON.stringify(tracked_piddles));
                    });
                }
            });    //storage.get
        } catch (err) {
            ga("send", "event", "storage error", "setTrackPiddle", err);
            console.log(err);
            sendResponse({});
        }
    } else if (message.method == "setEmmy") {
        try {
            console.log("mc: setting emmy straight " + message.key.length);
        } catch (err) {
            console.log("mc: something wrong in setting emmy straight" + err.message);
        }

        //check 8
        try {
            storage.set({"emmy": message.key}, function () {
                //test 11
                if (chrome.runtime.lastError) {
                    ga("send", "event", "runtime error", "storage", chrome.runtime.lastError.message);
                    console.log(chrome.runtime.lastError.message);
                    sendResponse({});
                }
                console.log("awarded emmy!");
                console.log(message.key);
            });
        } catch (err) {
            ga("send", "event", "storage error", "setEmmy", err);
            console.log(err);
            sendResponse({});
        }
    } else if (message.method == "setCassy") {
        try {
            console.log("mc: setting sassy straight " + message.key.length);
        } catch (err) {
            console.log("mc: something wrong in setting sassy straight " + err.message);
        }

        //check 9
        try {
            storage.set({"cassy": message.key}, function () {
                //test 12
                if (chrome.runtime.lastError) {
                    ga("send", "event", "runtime error", "storage", chrome.runtime.lastError.message);
                    console.log(chrome.runtime.lastError.message);
                    sendResponse({});
                }
            });
        } catch (err) {
            ga("send", "event", "storage error", "setCassy", err);
            console.log(err);
            sendResponse({});
        }
    } else if (message.method == "trackMotion") {
        var motion = message.motion;
        /* track redirects */
        ga("send", "event", "redirects", motion.redirect.from + " - " + motion.redirect.to);
        /* track price/sim/nofound */
        ga("send", "event", "resulttype", motion.rowHit.hitType);
        /* track rownumber */
        ga("send", "event", "rownumber", motion.rowHit.rowNumber);
    } else if (message.method == "backPostGet") {
        try {
            var req_send = $.ajax(message.key);
            req_send.done(function ( data, textStatus, jqXHR ) {
                sendResponse({status: true, req: "succ", data: data, text_status: textStatus, jq_xhr: jqXHR});
            });
            req_send.fail(function ( jqXHR, textStatus, errorThrown ) {
                //console.log("Failure in background ajax!")
                sendResponse({status: true, req: "fail", error: errorThrown, text_status: textStatus, jq_xhr: jqXHR});
            });
        } catch (err) {
            console.log("backPostGetFailed");
            sendResponse({status: false});
            //check 10
            ga("send", "event", "ajax", "backPostGet", err);
        }
    } else if (message.method == "backPostGet_get_easemt_trip_data") {
        try {
            var req_send = $.ajax(message.key);
            req_send.done(function ( data, textStatus, jqXHR ) {
                console.log("backPostGet_get_easemt_trip_data ajax!");
                var contracts = $(data).find("Contract");
                var onward_trip = [];
                var return_trip = [];

                for (var i = 0; i < contracts.length; i++) {
                    var abf, adt, cn, sd, st, type, stops, duration, ed, et, stms, etms, cbf, cdt, ibf, inft;

                    abf = parseFloat($(contracts[i]).find("AdultBaseFare").text());
                    adt = parseFloat($(contracts[i]).find("AdultTaxes").text());

                    cbf = parseFloat($(contracts[i]).find("ChildBaseFare").text());
                    cdt = parseFloat($(contracts[i]).find("ChildTaxes").text());

                    ibf = parseFloat($(contracts[i]).find("InfantBaseFare").text());
                    inft = parseFloat($(contracts[i]).find("InfantTaxes").text());

                    //in minutes
                    duration = parseInt($(contracts[i]).find("JourneyDuration").text().split(" ")[0])*60 + parseInt($(contracts[i]).find("JourneyDuration").text().split(" ")[1]);
                    var flights = $(contracts[i]).find("Flight");

                    stops = flights.length;

                    cn = $(flights[0]).find("AirlineName").text();

                    //checking for multiple carrier journey
                    for (var j=0; j < flights.length; j++) {
                        if (cn == $(flights[j]).find("AirlineName").text()) {
                            //same carrier no need to change
                        } else {
                            cn="Multiple CArrier";
                            break;
                        }
                    }

                    if (cn.length == 2) {
                        cn = airline_codes[cn.toLowerCase()];
                    }

                    var start_time= new Date(
                        $(flights[0]).find("DepartureDate").text().split("/")[2],
                        $(flights[0]).find("DepartureDate").text().split("/")[1]-1,
                        $(flights[0]).find("DepartureDate").text().split("/")[0],
                        $(flights[0]).find("DepartureTime").text().split(":")[0],
                        $(flights[0]).find("DepartureTime").text().split(":")[1]
                    );

                    stms = start_time.getTime();
                    sd = start_time.getMonth() + " " + start_time.getDate();
                    st = start_time.getHours() + ":" + start_time.getMinutes();

                    //end time
                    var last_flight_index = flights.length-1;

                    var end_time= new Date(
                        $(flights[last_flight_index]).find("ArrivalDate").text().split("/")[2],
                        $(flights[last_flight_index]).find("ArrivalDate").text().split("/")[1]-1,
                        $(flights[last_flight_index]).find("ArrivalDate").text().split("/")[0],
                        $(flights[last_flight_index]).find("ArrivalTime").text().split(":")[0],
                        $(flights[last_flight_index]).find("ArrivalTime").text().split(":")[1]
                    );

                    ed = end_time.getMonth() + " " + end_time.getDate();
                    et = end_time.getHours() + ":" + end_time.getMinutes();
                    etms = end_time.getTime();

                    var bounds = $(contracts[i]).find("BoundType");
                    var bound_type = $(bounds[0]).text();

                    var fin_obj = {
                        "abf": abf,
                        "adt": adt,
                        "cbf": cbf,
                        "cdt": cdt,
                        "ibf": ibf,
                        "inft": inft,
                        "cn": cn,
                        "stops": stops,
                        "sd": sd,
                        "ed": ed,
                        "st": st,
                        "et": et,
                        "dur": duration,
                        "stms": stms,
                        "etms": etms,
                        "type": bound_type
                    };

                    // console.log(bound_type);
                    if (bound_type == "OUTBOUND") {
                        onward_trip.push(fin_obj);
                    } else {
                        return_trip.push(fin_obj);
                    }
                }
                sendResponse({status: true, req: "succ", data: {"onward_trip": onward_trip, "return_trip": return_trip}, text_status: textStatus, jq_xhr: jqXHR});
            });
            req_send.fail(function ( jqXHR, textStatus, errorThrown ) {
                //console.log("Failure in background ajax!")
                sendResponse({status: true, req: "fail", error: errorThrown, text_status: textStatus, jq_xhr: jqXHR});
            });
        } catch (err) {
            console.log("backPostGetFailed");
            sendResponse({status: false});
            ga("send", "event", "ajax", "backPostGet", err);
        }
    } else if (message.method == "backPostGet_get_easemt_trip_int_data") {
        try {
            var req_send = $.ajax(message.key);

            req_send.done(function ( data, textStatus, jqXHR ) {
                console.log("backPostGet_get_easemt_trip_data ajax!");
                var contracts = $(data).find("Contract");

                var onward_trip=[];
                var return_trip=[];
                for (var i = 0; i < contracts.length; i++) {
                    var trips = $(contracts[i]).find("Trip");
                    for(var k = 0; k < trips.length; k++) {
                        var abf, adt, cn, sd, st, type, stops, duration, ed, et, stms, etms, cbf, cdt, ibf, inft;

                        abf = parseFloat($(contracts[i]).find("AdultBaseFare").text());
                        adt = parseFloat($(contracts[i]).find("AdultTaxes").text());

                        cbf = parseFloat($(contracts[i]).find("ChildBaseFare").text());
                        cdt = parseFloat($(contracts[i]).find("ChildTaxes").text());

                        ibf = parseFloat($(contracts[i]).find("InfantBaseFare").text());
                        inft = parseFloat($(contracts[i]).find("InfantTaxes").text());

                        //in minutes
                        duration = parseInt($(trips[k]).find("JourneyDuration").text().split(" ")[0])*60 + parseInt($(trips[k]).find("JourneyDuration").text().split(" ")[1]);
                        var flights = $(trips[k]).find("Flight");
                        stops = flights.length;

                        cn = $(flights[0]).find("AirlineName").text();

                        //checking for multiple carrier journey
                        for (var j = 0; j < flights.length; j++) {
                            if (cn == $(flights[0]).find("AirlineName").text()) {
                                //same carrier no need to change
                            } else {
                                cn="Multiple CArrier";
                                break;
                            }
                        }

                        if (cn.length == 2) {
                            cn = airline_codes[cn.toLowerCase()];
                        }

                        var start_time = new Date(
                            $(flights[0]).find("DepartureDate").text().split("/")[2],
                            $(flights[0]).find("DepartureDate").text().split("/")[1]-1,
                            $(flights[0]).find("DepartureDate").text().split("/")[0],
                            $(flights[0]).find("DepartureTime").text().split(":")[0],
                            $(flights[0]).find("DepartureTime").text().split(":")[1]
                        );

                        stms = start_time.getTime();
                        sd = start_time.getMonth() + " " + start_time.getDate();
                        st = start_time.getHours() + ":" + start_time.getMinutes();

                        //end time
                        var last_flight_index = flights.length-1;

                        var end_time = new Date(
                            $(flights[last_flight_index]).find("ArrivalDate").text().split("/")[2],
                            $(flights[last_flight_index]).find("ArrivalDate").text().split("/")[1]-1,
                            $(flights[last_flight_index]).find("ArrivalDate").text().split("/")[0],
                            $(flights[last_flight_index]).find("ArrivalTime").text().split(":")[0],
                            $(flights[last_flight_index]).find("ArrivalTime").text().split(":")[1]
                        );

                        ed = end_time.getMonth() + " " + end_time.getDate();
                        et = end_time.getHours() + ":" + end_time.getMinutes();
                        etms = end_time.getTime();

                        var bounds = $(trips[k]).find("BoundType");
                        var bound_type = $(bounds[0]).text();

                        var fin_obj = {
                            "abf": abf,
                            "adt": adt,
                            "cbf": cbf,
                            "cdt": cdt,
                            "ibf": ibf,
                            "inft": inft,
                            "cn": cn,
                            "stops": stops,
                            "sd": sd,
                            "ed": ed,
                            "st": st,
                            "et": et,
                            "dur": duration,
                            "stms": stms,
                            "etms": etms,
                            "type": bound_type
                        };
                        if (k == 0) {
                            onward_trip.push(fin_obj);
                        } else {
                            return_trip.push(fin_obj);
                        }
                    }
                }
                sendResponse({status: true, req: "succ", data: {"onward_trip": onward_trip, "return_trip": return_trip}, text_status: textStatus, jq_xhr: jqXHR});
            });
            req_send.fail(function ( jqXHR, textStatus, errorThrown ) {
                //console.log("Failure in background ajax!")
                sendResponse({status: true, req: "fail", error: errorThrown, text_status: textStatus, jq_xhr: jqXHR});
            });
        } catch (err) {
            console.log("backPostGetFailed");
            sendResponse({status: false});
            ga("send", "event", "ajax", "backPostGet", err);
        }
    } else if (message.method == "trackDisplayedResults") {
        ga("send", "event", "displayed_results", message.product_page, JSON.stringify(message.displayed_details));

        if (message.displayed_details.num_data_from_elastic != 0) {
            var elDispToData = ((message.displayed_details.num_price_results_displayed_from_elastic + message.displayed_details.num_oos_results_displayed) / message.displayed_details.num_data_from_elastic) * 100;
        } else {
            var elDispToData = 0;
        }

        if (message.displayed_details.total_no_of_results_displayed != 0) {
            var elDispToTotal = ((message.displayed_details.num_price_results_displayed_from_elastic + message.displayed_details.num_oos_results_displayed) / message.displayed_details.total_no_of_results_displayed) * 100;
        } else {
            var elDispToTotal = 0;
        }

        ga("send", "event", "elDispToData", message.displayed_details.categ, message.displayed_details.site, parseInt(Math.round(elDispToData)));
        ga("send", "event", "elDispToTotal", message.displayed_details.categ, message.displayed_details.site, parseInt(Math.round(elDispToTotal)));
        ga("send", "event", "matchScore", message.displayed_details.categ, message.displayed_details.site, parseInt(Math.round(message.displayed_details.average_match_score)));
    } else if (message.method == "trackCateg") {
        ga("send", "event", message.site, message.categ, message.subcateg);
    } else if (message.method == "trackCateg1") {
        ga("send", "event", "categ_" + message.site, message.categ, message.subcateg, 1);
    } else if (message.method == "dispElastic") {
        ga("send", "event", message.method, message.uid);
    } else if (message.method == "mystuff") {
        ga("send", "event", "click", "mystuff");
    } else if (message.method == "trackprod") {
        ga("send", "event", "click", "trackprod");
    } else if (message.method == "steals") {
        ga("send", "event", "click", "steals");
    } else if (message.method == "yogisend") {
        ga("send", "event", "click", "yogisend");
    } else if (message.method == "tip_action") {
        ga("send", "event", message.type,message.tip);
    } else if (message.method == "registerWebRequestListeners") {

        chrome.webRequest.onBeforeSendHeaders.addListener(
            function (details) {
                var headers = details.requestHeaders,
                blockingResponse = {};

                // Each header parameter is stored in an array. Since Chrome
                // makes no guarantee about the contents/order of this array,
                // you'll have to iterate through it to find for the
                // 'User-Agent' element
                for (var i = 0, l = headers.length; i < l; ++i) {
                    if ( headers[i].name == "User-Agent" ) {
                        headers[i].value = "Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19";
                        console.log(headers[i].value);
                        break;
                    }
                    // If you want to modify other headers, this is the place to
                    // do it. Either remove the 'break;' statement and add in more
                    // conditionals or use a 'switch' statement on 'headers[i].name'
                }

                blockingResponse.requestHeaders = headers;
                return blockingResponse;
            }, {urls: ["*://*.myntra.com/*"]}, ["requestHeaders", "blocking"]
        );
    } else if (message.method == "getWebReqPerm") {
        // first see if we already have permissions
        // if not and not asked before, request, else return
        console.log("in getWebReqPerm");
        //check 11
        try {
            chrome.permissions.contains({
                permissions: ["webRequest", "webRequestBlocking"],
                origins: ["<all_urls>"]
            }, function (result) {
                //test 13
                if (chrome.runtime.lastError) {
                    console.log(chrome.runtime.lastError.message);
                    sendResponse({});
                }

                console.log("result " + result);
                if (result) {
                    // we do have permissions
                    console.log("have webRequest permission already");
                    sendResponse({status: "haveAlready"});
                } else {
                    // haven't asked, ask now
                    chrome.permissions.request({
                        permissions: ["webRequest", "webRequestBlocking"],
                        origins: ["<all_urls>"]
                    }, function (granted) {
                        // store acceptance/rejection
                        //test 14
                        if (chrome.runtime.lastError) {
                            console.log(chrome.runtime.lastError.message);
                            sendResponse({});
                        }
                        storage.set({"webReqPerm": granted, "askedForWebReq": true}, function () {
                            //test 15
                            if (chrome.runtime.lastError) {
                                console.log(chrome.runtime.lastError.message);
                                sendResponse({});
                            }
                        });
                        if (granted) {
                            // was accepted :)
                            sendResponse({status: "accepted"});
                        } else {
                            sendResponse({status: "rejected"});
                        }
                    });
                }
            });
        } catch (err) {
            ga("send", "event", "tabs error", "getTabPermissions", err);
            console.log(err);
            sendResponse({});
        }
    } else if (message.method == "getTabPermissions") {
        // first see if we already have permissions
        // if not and not asked before, request, else return
        console.log("in getTabPermissions");
        //check 11
        try {
            chrome.permissions.contains({
                permissions: ["tabs"]
            }, function (result) {
                //test 13
                if (chrome.runtime.lastError) {
                    ga("send", "event", "runtime error", "tab", chrome.runtime.lastError.message);
                    console.log(chrome.runtime.lastError.message);
                    sendResponse({});
                }
                console.log("result " + result);
                if (result) {
                    // we do have permissions
                    console.log("have tab permissions already");
                    sendResponse({status: "haveAlready"});
                } else {
                    // haven"t asked, ask now
                    chrome.permissions.request({
                        permissions: ["tabs"]
                    }, function (granted) {
                        // store acceptance/rejection
                        //test 14
                        if (chrome.runtime.lastError) {
                            ga("send", "event", "runtime error", "tab", chrome.runtime.lastError.message);
                            console.log(chrome.runtime.lastError.message);
                            sendResponse({});
                        }
                        storage.set({"tabsPerm": granted, "askedForTabs": true}, function () {
                            //test 15
                            if (chrome.runtime.lastError) {
                                ga("send", "event", "runtime error", "storage", chrome.runtime.lastError.message);
                                console.log(chrome.runtime.lastError.message);
                                sendResponse({});
                            }
                        });
                        if (granted) {
                            sendResponse({status: "accepted"});
                        } else {
                            sendResponse({status: "rejected"});
                        }
                    });
                }
            });
        } catch (err) {
            ga("send", "event", "tabs error", "getTabPermissions", err);
            console.log(err);
            sendResponse({});
        }
    } else if (message.method == "removeTabPermissions") {
        // assuming we already have permissions
        //check 12
        try {
            chrome.permissions.remove({
                permissions: ["tabs"]
            }, function (removed) {
                //test 16
                if (chrome.runtime.lastError) {
                    ga("send", "event", "runtime error", "tab", chrome.runtime.lastError.message);
                    console.log(chrome.runtime.lastError.message);
                    sendResponse({});
                }
            });
            // record this thing in localStorage
            storage.set({"tabsPerm": false}, function () {
                //test 17
                if (chrome.runtime.lastError) {
                    ga("send", "event", "runtime error", "storage", chrome.runtime.lastError.message);
                    console.log(chrome.runtime.lastError.message);
                    sendResponse({});
                }
            });
        } catch (err) {
            ga("send", "event", "tabs error", "removeTabPermissions", err);
            console.log(err);
            sendResponse({});
        }
    } else if (message.method == "requestCookiePermissions") {
        console.log("Got request to request cookie permissions");
        //check 13
        try {
            chrome.permissions.contains({
                permissions: ["cookies"],
                origins: ["*://*/"]
            }, function (result) {
                //test 18
                if (chrome.runtime.lastError) {
                    ga("send", "event", "runtime error", "cookie", chrome.runtime.lastError.message);
                    console.log(chrome.runtime.lastError.message);
                    sendResponse({});
                }
                if (result) {
                    // we have permissions; go forth
                    console.log("have permissions already");
                    sendResponse({status: "haveAlready"});
                } else {
                    // don"t have permissions :(
                    // request now!
                    chrome.permissions.request({
                        permissions: ["cookies"],
                        origins: ["*://*/"]
                    }, function (granted) {
                        //test 19
                        if (chrome.runtime.lastError) {
                            ga("send", "event", "runtime error", "cookie", chrome.runtime.lastError.message);
                            console.log(chrome.runtime.lastError.message);
                            sendResponse({});
                        }
                        // store the status
                        storage.set({"cookiesPerm": granted, "askedForCookies": true}, function () {
                            //test 20
                            if (chrome.runtime.lastError) {
                                ga("send", "event", "runtime error", "storage", chrome.runtime.lastError.message);
                                console.log(chrome.runtime.lastError.message);
                                sendResponse({});
                            }
                        });
                        if (granted) {
                            sendResponse({status: "accepted"});
                        } else {
                            sendResponse({status: "rejected"});
                        }
                    });
                }
            });
        } catch (err) {
            ga("send", "event", "cookie error", "requestCookiePermissions", err);
            console.log(err);
            sendResponse({});
        }
    } else if (message.method == "removeCookiePermissions") {
        //check 14
        try {
            chrome.permissions.remove({
                permissions: ["cookies"]
            }, function (removed) {
                //test 21
                if (chrome.runtime.lastError) {
                    ga("send", "event", "runtime error", "cookie", chrome.runtime.lastError.message);
                    console.log(chrome.runtime.lastError.message);
                    sendResponse({});
                }
            });
            // record this thing in localStorage
            storage.set({"cookiesPerm": false}, function () {
                //test 22
                if (chrome.runtime.lastError) {
                    ga("send", "event", "runtime error", "storage", chrome.runtime.lastError.message);
                    console.log(chrome.runtime.lastError.message);
                    sendResponse({});
                }
            });
        } catch (err) {
            ga("send", "event", "cookie error", "removeCookiePermissions", err);
            console.log(err);
            sendResponse({});
        }
    } else if (message.method == "showOptionsPage") {
        try {
            var options_page = "chrome-extension://" + chrome.runtime.id + "/options.html";
            chrome.tabs.create({url: options_page});
        } catch (err) {
            console.log("could not create a new tab for options page");
            console.log(err);
        }
    } else if (message.method == "showCashBackPage") {
        try {
            //var cashBack_page = "chrome-extension://" + chrome.runtime.id + "/CashbackPage.html";
            var cashBack_page = "http://localhost:8080/hiddenmessage";
            chrome.tabs.create({url: cashBack_page});
        } catch (err) {
            console.log("could not create a new tab for cash back page");
            console.log(err);
        }
    } else if (message.method == "checkTabPerm") {
        //check 15
        try {
            chrome.permissions.contains({
                permissions: ["tabs"]
            }, function (result) {
                //test 23
                if (chrome.runtime.lastError) {
                    ga("send", "event", "runtime error", "tab", chrome.runtime.lastError.message);
                    console.log(chrome.runtime.lastError.message);
                    sendResponse({});
                }
                // see if asked earlier
                storage.get({"askedForTabs": false, "settingsHit": 0}, function (items) {
                    //test 24
                    if (chrome.runtime.lastError) {
                        ga("send", "event", "runtime error", "storage", chrome.runtime.lastError.message);
                        console.log(chrome.runtime.lastError.message);
                        sendResponse({});
                    }
                    sendResponse({status: result, asked: items.askedForTabs, settingsHit: items.settingsHit});
                });
            });
        } catch (err) {
            ga("send", "event", "tabs error", "checkTabPerm", err);
            console.log(err);
            sendResponse({});
        }
    } else if (message.method == "checkCookiePerm") {
        //check 16
        try {
            chrome.permissions.contains({
                permissions: ["cookies"]
            }, function (result) {
                //test 25
                if (chrome.runtime.lastError) {
                    ga("send", "event", "runtime error", "cookie", chrome.runtime.lastError.message);
                    console.log(chrome.runtime.lastError.message);
                    sendResponse({});
                }
                // see if the user has been already asked for this
                storage.get({"askedForCookies": false, "settingsHit": 0}, function (items) {
                    //test 26
                    if (chrome.runtime.lastError) {
                        ga("send", "event", "runtime error", "storage", chrome.runtime.lastError.message);
                        console.log(chrome.runtime.lastError.message);
                        sendResponse({});
                    }
                    sendResponse({status: result, asked: items.askedForCookies, settingsHit: items.settingsHit});
                });
            });
        } catch (err) {
            ga("send", "event", "cookie error", "checkCookiePerm", err);
            console.log(err);
            sendResponse({});
        }
    } else if (message.method == "getrecommended") {
        //check 17
        try {
            storage.get({"gcm_id": ""}, function (data) {
                //test 27
                if (chrome.runtime.lastError) {
                    ga("send", "event", "runtime error", "storage", chrome.runtime.lastError.message);
                    console.log(chrome.runtime.lastError.message);
                    sendResponse({});
                }
                if (data.gcm_id) {
                    var req_send = $.ajax({
                                            type: "POST",
                                            url: "https://steals.makkhichoose.com/mystuff",
                                            data: JSON.stringify({"gcm_id": data.gcm_id, "isDevUse": isdevuse}),
                                            contentType: "application/json; charset=utf-8",
                                            dataType: "json",
                                            timeout: 2500
                                        });

                    req_send.done(function ( data, textStatus, jqXHR ) {
                        //console.log("background ajax!")
                        sendResponse({status: true, req: "succ", data: data, text_status: textStatus, jq_xhr: jqXHR});
                    });
                    req_send.fail(function ( jqXHR, textStatus, errorThrown ) {
                        //console.log("Failure in background ajax!")
                        console.log(textStatus);
                        console.log(errorThrown);
                        sendResponse({status: true, req: "fail", error: errorThrown, text_status: textStatus, jq_xhr: jqXHR});
                    });
                } else {
                    //empty gcm_id
                    console.log("empty gcm");
                    sendResponse({status: false, req: "fail"});
                }
            });
        } catch (err) {
            ga("send", "event", "storage error", "getrecommended", err);
            console.log(err);
            sendResponse({});
        }
    } else if (message.method == "pageviewtracking") {
        ga("send", "pageview", message.host);
    } else if (message.method == "getCartList") {
        console.log("in BG page, checking method == getCartList");
        //check 18
        try {
            chrome.tabs.query({currentWindow: true}, function (tabs) {
                //test 28
                if (chrome.runtime.lastError) {
                    ga("send", "event", "runtime error", "tab", chrome.runtime.lastError.message);
                    console.log(chrome.runtime.lastError.message);
                    sendResponse({});
                }
                getCartList(tabs, sendResponse);
            });
        } catch (err) {
            ga("send", "event", "tabs error", "getCartList", err);
            console.log(err);
            sendResponse({});
        }
    } else if (message.method == "switchTab") {
        console.log("Got request to apply coupon from Coupon site");
        var targetTab = message.tab;
        var couponCode = message.couponCode;
        var portalCode = message.portalCode;
        console.log("target " + targetTab);
        console.log("couponcode " + couponCode);
        console.log("portalcode " + portalCode);
        //check 19
        try {
            chrome.tabs.update(targetTab, {active: true}, sendCouponApplyReq(portalCode, couponCode));
        } catch (err) {
            ga("send", "event", "tabs error", "switchTab", err);
            console.log(err);
            sendResponse({});
        }
    } else if (message.method == "addSettingsHit") {
        var hitsToAdd = message.hits;
        console.log("bg: adding settings hit");
        //check 20
        try {
            storage.get({"settingsHit": 0},
                function (items) {
                    //test 29
                    if (chrome.runtime.lastError) {
                        ga("send", "event", "runtime error", "storage", chrome.runtime.lastError.message);
                        console.log(chrome.runtime.lastError.message);
                        sendResponse({});
                    }
                    console.log("Hits so far: " + items.settingsHit);
                    storage.set({"settingsHit": items.settingsHit+hitsToAdd}, function () {
                        //test 30
                        if (chrome.runtime.lastError) {
                            ga("send", "event", "runtime error", "storage", chrome.runtime.lastError.message);
                            console.log(chrome.runtime.lastError.message);
                            sendResponse({});
                        }
                    });
                }
            );
        } catch (err) {
            ga("send", "event", "storage error", "addSettingsHit", err);
            console.log(err);
            sendResponse({});
        }
    } else if (message.method == "copyToClipboard") {
        console.log("gotcha copyText message content-script!");
        copyToClipboard(message.text);
        sendResponse({rowID: message.rowID});
    } else if (message.method == "pasteToCouponBox") {
        console.log("bg, pasting");
        paste();
    } else if (message.method == "registerbirthmark") {
        console.log("register your birth certificate");
        getBirthRegister();
    } else if (message.method == "trackclickMenu") {
        ga("send", "event", "menu", message.site, message.menu_name);
    } else if (message.method == "trackclickButton") {
        ga("send", "event", "buttons", message.site, message.button_name);
    } else if (message.method == "trackclickSearch") {
        ga("send", "event", "search", message.site, message.search_name);
    } else if (message.method == "trackhoverGraph") {
        ga("send", "event", "graph", message.site, "Graph Hover");
    } else if (message.method == "showTatkalNotification") {
        showTatkalNotification();
    } else if (message.method == "getNotificationPermission") {
        checkNotificationPermission();
    } else if (message.method == "log_to_background") {
        console.log(message.message);
    } else if (message.method == "user_scrolled") {
        console.log(message);
        ga("send", "event", "Scroll", "scrolled");
    } else if (message.method == "user_scrolled_till_end") {
        console.log(message);
        ga("send", "event", "Scroll_till_end", "scrolled_till_end");
    } else if (message.method == "user_clicked_price") {
        ga("send", "event", "result_click", "all_price_result_click", JSON.stringify(message.ga_obj), 1);
    } else if (message.method == "user_clicked_price_flights") {
        ga("send", "event", "result_click", "all_price_result_click_flights", JSON.stringify(message.ga_obj), 1);
    } else if (message.method == "user_clicked_search") {
        ga("send", "event", "result_click", "manual_search_result_click", JSON.stringify(message.ga_obj), 1);
    } else if (message.method == "user_clicked_oos") {
        ga("send", "event", "result_click", "oos_result_click", JSON.stringify(message.ga_obj), 1);
    } else if (message.method == "user_clicked_sim") {
        ga("send", "event", "result_click", "sim_result_click", JSON.stringify(message.ga_obj), 1);
    } else if (message.method == "user_clicked_deals") {
        ga("send", "event", "user_clicked_deals", message.row_number+"");
        console.log("clicked deals row no is: " + message.row_number);
    } else if (message.method == "report_button_click") {
        ga("send", "event", "report_button_click", "report_button_clicked");
    } else if (message.method == "settings_button_click") {
        ga("send", "event", "settings_button_click", "settings_button_clicked");
    } else if (message.method == "track_click") {
        ga("send", "event", "track_button_click", "track_button_clicked");
    } else if (message.method == "wishlist_click") {
        ga("send", "event", "wishlist_button_click", "wishlist_button_clicked");
    } else if (message.method == "time_spent_in_results") {
        ga("send", "event", "time_spent_in_results", message.message);
    } else if (message.method == "time_spent_in_graph") {
        ga("send", "event", "time_spent_in_graph", message.message);
        send_graph_times(message.message,message.prod_id,message.page_url);
    } else if (message.method == "trackMakkhiBoxDisplay") {
        ga("send", "event", "MakkhiBoxDisplay", message.event_action, "", 1);
    } else if (message.method == "trackMakkhiBoxDisplay_flights") {
        ga("send", "event", "MakkhiBoxDisplay_flights", message.event_action, "", 1);
    } else if (message.method == "trackmakkhiboxview") {
        ga("send", "event", "makkhiboxview", message.event_action, "", 1);
    } else if (message.method == "trackmakkhiboxview_flights") {
        ga("send", "event", "makkhiboxview_flights", message.event_action, "", 1);
    } else if (message.method == "low_price_displayed") {
        ga("send", "event", "low_price_displayed", message.prod_site, message.categ, 1);
    }else if (message.method == "price_graph_arrow_click") {
        ga("send", "event", "price_graph_arrow_click", message.reason, message.dock, 1);
    }else if (message.method == "dock_settings") {
        ga("send", "event", "dock_settings", message.site, message.dock);
    }else if (message.method == "dock_icon_click") {
        ga("send", "event", "dock_icon_click", message.site, message.type);
    }else if (message.method == "low_price_displayed_flights") {
        ga("send", "event", "low_price_displayed_flights", message.prod_site, "", 1);
    } else if (message.method == "pop_dst") {
        //send site
        if (tracked_sites.indexOf(message.site) != -1) {
            // already tracked
        } else {
            tracked_sites.push(message.site);
            chrome.storage.local.get("user_id", function (result) {
                if (result["user_id"]) {
                    //user id pressnt;
                    ga("send", "event", "site_visit", message.site, result["user_id"]);
                } else {
                    //no user_id
                    ga("send", "event", "site_visit", message.site, "no_id");
                }
            });
        }
    } else if (message.method == "send_postpid_time") {
        console.log("postpid_time" + message.time_diff);
        ga("send", "event", "postpidtime", message.time_diff, "", parseInt(message.time_diff));
    } else if (message.method == "feedback_click") {
        //send site
        chrome.storage.local.get("user_id", function (result) {
            if (result["user_id"]) {
                //user id pressnt;
                ga("send", "event", "feedback_click", message.site, result["user_id"]);
            } else {
                //no user_id
                ga("send", "event", "feedback_click", message.site, "no_id");
            }
        });
    } else if(message.method == "postpid_failure"){
        ga("send", "event", "postpid_failure", message.link, message.text);
    }else if (message.method == "useme_click") {
        //send site
        chrome.storage.local.get("user_id", function (result) {
            if (result["user_id"]) {
                //user id pressnt;
                ga("send", "event", "useme_click", message.site, result["user_id"]);
            } else {
                //no user_id
                ga("send", "event", "useme_click", message.site, "no_id");
            }
        });
    } else if (message.method == "save_makkhi_min_pos") {
        //send site
        ga("send", "event", "makkhi_min_pos", message.site, message.left + "px, " + message.top + "px");
        try {
            var kl = "mmpos_" + message.site + "left";
            var kt = "mmpos_" + message.site + "top";
            var wh = "mmpos_" + message.site + "wh";
            var ww = "mmpos_" + message.site + "ww";
            var store_coords={};
            store_coords[kl] = message.left;
            store_coords[kt] = message.top;
            store_coords[wh] = message.wh;
            store_coords[ww] = message.ww;
            console.log("stored mmpos");
            console.log(store_coords);
            chrome.storage.local.set(store_coords);
        } catch (err) {
            //ga("send", "event", "storage error", "registerCallback",err);
            console.log("mmpos storage error");
            console.log(err);
            sendResponse({});
        }
    } else if (message.method == "get_mmpos") {
        try {
            var kl = "mmpos_" + message.site + "left";
            var kt = "mmpos_" + message.site + "top";
            var wh = "mmpos_" + message.site + "wh";
            var ww = "mmpos_" + message.site + "ww";

            chrome.storage.local.get([kl,kt,wh,ww], function (response) {
                if (chrome.runtime.lastError) {
                    ga("send", "event", "runtime error", "storage", chrome.runtime.lastError.message);
                    console.log(chrome.runtime.lastError.message);
                    sendResponse({"state": "error"});
                } else {
                    console.log("mmpos sent");
                    console.log(response);
                    sendResponse({"state": "ok", pos_left: response[kl], pos_top: response[kt], win_height: response[wh], win_width: response[ww]});
                }
            });
        } catch (err) {
            console.log("mmpos error occured")
            console.log(err);
            sendResponse({"state": "error"});
        }
    } else if (message.method == "hide_button_clicked") {
        ga("send", "event", "hide_button_clicked", message.site);
    } else if (message.method == "do_walk_through") {
        try {
            chrome.storage.local.get(["is_walk_through_done"], function (response) {
                if (chrome.runtime.lastError) {
                    ga("send", "event", "runtime error", "storage", chrome.runtime.lastError.message);
                    console.log(chrome.runtime.lastError.message);
                    sendResponse({"state": "error"});
                } else {
                    console.log("walk_through_done_info");
                    console.log(response);
                    console.log({"state": "ok", resp: response});
                    sendResponse({"state": "ok", resp: response});
                    setWalkThroughInfo(true);
                }
            });
        } catch (err) {
            console.log("walk_through_done_info");
            console.log(err);
            sendResponse({"state": "error"});
        }
    } else if (message.method == "help_button_click") {
        console.log("in help button click");
        // chrome.tabs.create({url: "http://www.amazon.in/Philips-QT4011-Skin-Advance-Trimmer/dp/B00JJIDBIC/?tag=makkhiwalk-21&ascsubtag=" + message.uid});
        chrome.tabs.create({url: "http://www.makkhichoose.com/howto?user=" + message.uid});
        ga("send", "event", "help_button_click", message.site);
    }else if (message.method == "show_all_button") {
        console.log("in show all button click");
        // chrome.tabs.create({url: "http://www.amazon.in/Philips-QT4011-Skin-Advance-Trimmer/dp/B00JJIDBIC/?tag=makkhiwalk-21&ascsubtag=" + message.uid});
        chrome.tabs.create({url: "http://www.makkhichoose.com/results?pid="+message.pid+"&utm_source="+message.uid});
        ga("send", "event", "show_all_button_click", message.site);
    }else if (message.method == "show_all_button_with_beacon") {
        console.log("in show all button click");
        // chrome.tabs.create({url: "http://www.amazon.in/Philips-QT4011-Skin-Advance-Trimmer/dp/B00JJIDBIC/?tag=makkhiwalk-21&ascsubtag=" + message.uid});
        chrome.tabs.create({url: "http://www.makkhichoose.com/results?pid="+message.pid+"&utm_source="+message.uid});
        ga("send", "event", "show_all_button_with_beacon_click", message.site);
    }else if (message.method == "skip_button_clicked") {
        ga("send", "event", "skip_button_click", "skip_button_clicked");
    } else if (message.method == "close_button_clicked") {
        ga("send", "event", "close_button_clicked", message.step_number);
    } else if (message.method == "pop_up_settings_button_click") {
        ga("send", "event", "pop_up_settings_button_click", "pop_up_settings_button_clicked");
    } else if (message.method == "pop_up_settings_button_click") {
        ga("send", "event", "pop_up_settings_button_click", "pop_up_settings_button_clicked");
    } else if (message.method == "popup_help_button_click") {
        // chrome.tabs.create({url: "http://www.amazon.in/Philips-QT4011-Skin-Advance-Trimmer/dp/B00JJIDBIC/?tag=makkhiwalk-21"});
        chrome.tabs.create({url: "http://www.makkhichoose.com/howto?user=" + message.uid});
        ga("send", "event", "popup_help_button_click", "popup_help_button_clicked");
    } else if (message.method == "popup_wishlist_click") {
        ga("send", "event", "popup_wishlist_click", "popup_wishlist_clicked");
    } else if (message.method == "wt_continue_button_clicked") {
        ga("send", "event", "wt_continue_button_click", "wt_continue_button_clicked");
    } else if (message.method == "wt_next_button_clicked") {
        ga("send", "event", "wt_next_button_clicked", message.step_num);
    } else if (message.method == "wt_Done_button_clicked") {
        ga("send", "event", "wt_Done_button_clicked", "wt_Done_button_clicked");
    } else if (message.method == "toggle_button_turned_on") {
        ga("send", "event", "toggle_button_turned_on", message.uid);
    } else if (message.method == "toggle_button_turned_off") {
        ga("send", "event", "toggle_button_turned_off", message.uid);
    } else if (message.method == "new_tab_deals_clicked") {
        ga("send", "event", "new_tab_deals_clicked", message.uid);
    }else if (message.method == "daily_deals") {
        ga("send", "event", "daily_deals_click",message.site,message.uid);
    } else if (message.method == "chillarchange_click") {
        ga("send", "event", "chillarchange_click",message.site,message.uid);
    } else if (message.method == "remind_me_test") {
        check_for_reminders();
    } else if (message.method == "image_url_to_b64_url") {
        var xmlHTTP = new XMLHttpRequest();
        xmlHTTP.open("GET", message.url, true);

        // Must include this line - specifies the response type we want
        xmlHTTP.responseType = "arraybuffer";

        xmlHTTP.onload = function (e) {
            var arr = new Uint8Array(this.response);

            // Convert the int array to a binary string
            // We have to use apply() as we are converting an *array*
            // and String.fromCharCode() takes one or more single values, not
            // an array.
            // var raw = String.fromCharCode.apply(null,arr);

            var raw = "";
            var i,j,subArray, chunk = 5000;
            for (i=0,j=arr.length; i<j; i+=chunk) {
                subArray = arr.subarray(i,i+chunk);
                raw += String.fromCharCode.apply(null, subArray);
            }

            // This works!!!
            var b64=btoa(raw);
            var dataURL="data:image/jpeg;base64, "+b64;
            // document.getElementById("image").src = dataURL;
            sendResponse({status: true, req: "succ", data: dataURL, id: message.id});
        };

        xmlHTTP.send();
    } else if (message.method == "disp_settings") {
        try {
            storage.get(["showDeals"], function (items) {
                //test 6
                if (chrome.runtime.lastError) {
                    ga("send", "event", "runtime error", "storage", chrome.runtime.lastError.message);
                    console.log(chrome.runtime.lastError.message);
                    sendResponse({});
                }
                console.log("disp_settings");
                console.log(items);
                if (items) {
                    console.log("sending settings");
                    console.log(items);
                    sendResponse({status: items});
                }
            });
        } catch (err) {
            ga("send", "event", "storage error", "disp_settings", err);
            console.log(err);
            sendResponse({});
        }
    } else if (message.method == "sendlp") {
        test_com();
    } else if (message.method == "clean_old_deals") {
        clean_expired_deals();
    } else if (message.method == "dittory_categ"){
        ga("send", "event", "dittory_categ_display", message.site+'_'+message.categ, message.deets);
        console.log(message);
    }else if (message.method == "dittory_categ_click"){
        ga("send", "event", "dittory_categ_click", message.site+'_'+message.categ, message.link);
        console.log("dittory_categ_click");
        console.log(message);
    }else if (message.method == "dittory_categ_makkhi_results_display"){
        ga("send", "event", "dittory_categ_makkhi_results_display", message.site+'_'+message.categ, message.deets);
        console.log(message);
    }else if (message.method == "dittory_categ_makkhi_result_click"){
        ga("send", "event", "dittory_categ_makkhi_result_click", message.site+'_'+message.categ, message.link);
        console.log("dittory_categ_makkhi_result_click");
        console.log(message);
    }else if (message.method == "dittory_result_display"){
        ga("send", "event", "dittory_result_display", message.site+'_'+message.categ, message.deets);
        console.log(message);
    }else if (message.method == "dittory_result_click"){
        ga("send", "event", "dittory_result_click", message.site+'_'+message.categ, message.link);
        console.log("dittory_result_click");
        console.log(message);
    }else if (message.method == "dittory_categ_dittory_results_display"){
        ga("send", "event", "dittory_categ_dittory_results_display", message.site+'_'+message.categ, message.deets);
        console.log(message);
    }else if (message.method == "dittory_categ_dittorry_result_click"){
        ga("send", "event", "dittory_categ_dittorry_result_click", message.site+'_'+message.categ, message.link);
        console.log("dittory_result_click");
        console.log(message);
    }
    else if(message.method=="open_wishlist_page"){
        chrome.storage.local.get({"emmy":""}, function(response){
            if(response.emmy!=""){
                chrome.tabs.create({"url":"http://www.makkhichoose.com/myproducts?email_id="+response.emmy});
            }
        }); 
    }
    else if (message.method == "books_display"){
        
        chrome.storage.local.get({"user_id":""},function(response){
            if(response.user_id == ""){
                ga("send", "event", "books_display", message.deets.prod_site, "id not found");
            }
            else{
                ga("send", "event", "books_display", message.deets.prod_site,response.user_id);
            }
        });
        console.log("books_display");
        console.log(message);
    }    else if (message.method == "book_result_click"){
        
        chrome.storage.local.get({"user_id":""},function(response){
            var book_click_deets = message.deets;
            book_click_deets['clicked_link'] = message.link;
            book_click_deets = JSON.stringify(book_click_deets);
            if(response.user_id == ""){
                ga("send", "event", "book_result_click", "id not found",book_click_deets);
            }
            else{
                ga("send", "event", "book_result_click", response.user_id,book_click_deets);
            }
        });
        console.log("book_result_click");
        console.log(message);
    }  else if (message.method == "top_tag_click"){

        console.log("top_tag_clicked");
        
        chrome.storage.local.get({"user_id":""},function(response){
            var top_tag_click_deets = {};
            top_tag_click_deets['clicked_link'] = message.link;
            top_tag_click_deets['site'] = message.site;
            top_tag_click_deets = JSON.stringify(top_tag_click_deets);
            if(response.user_id == ""){
                ga("send", "event", "top_tag_click", "id not found",top_tag_click_deets);
            }
            else{
                ga("send", "event", "top_tag_click", response.user_id,top_tag_click_deets);
            }
        });
        console.log("book_result_click");
        console.log(message);
    }
    else if(message.method=="get_coupons_to_display"){
            chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {method: "get_url"}, function (response) {
                    console.log("got url message");
                    console.log(response);
                    var site_key= "mc_coupon_"+response.url;

                    chrome.storage.local.get({"mc_coupons":""},function(coupons_response){
                        if(coupons_response["mc_coupons"]==""){
                            sendResponse({"display_coupons":false});
                        }
                        else{
                           var coupons_data = coupons_response.mc_coupons;
                           
                           if(coupons_data.hasOwnProperty(site_key)){
                                if(coupons_data[site_key]["data"].length>0){
                                    sendResponse({"display_coupons":true,"data":coupons_data[site_key]["data"]});
                                }
                                else{
                                    sendResponse({"display_coupons":false});
                                }

                                
                           }
                           else{
                                sendResponse({"display_coupons":false});   
                           }
                        }
                    });

                });
            });

        } else if(message.method=="get_coupons_from_server"){

            chrome.storage.local.get({"mc_coupons":""},function(data){
                if(data.mc_coupons == ""){
                    console.log("mc_coupons is empty");
                    get_coupons_from_server(message.key);
                }
                else{
                    console.log("mc_coupons not empty");
                    if(data["mc_coupons"].hasOwnProperty(message.key)){
                        console.log("coupons has key");
                        var coupons_data = data["mc_coupons"][message.key];
                        if(coupons_data["last_updated"] != getCurrentDateStr()){
                            console.log("updating coupons");
                            get_coupons_from_server(message.key);  
                            sendResponse({msg:"not exist"});  
                        }else if(coupons_data["data"].length>0){
                            // console.log("setting makkhi bright icon");
                            // chrome.tabs.query({active: true, currentWindow: true}, function (tabs){
                            //     coupons_icon_set = true;
                            //     chrome.pageAction.setIcon({tabId: tabs[0].id, path: "makkhi_bright.png"});  
                            // });
                                coupons_icon_set = true;
                                chrome.pageAction.setIcon({tabId: sender.tab.id, path: "makkhi_bright.png"});
                                sendResponse({msg:"exist"});
                        }
                        else{
                            console.log("coupons empty");
                            console.log(coupons_data["data"].length);
                            sendResponse({msg:"not exist"});
                        }
                    }
                    else{
                        console.log("coupons don't have key "+ message.key);
                        get_coupons_from_server(message.key,sender.tab.id);
                        sendResponse({msg:"not exist"});       
                    }

                }
            });

            
            
        }else if(message.method=="popup_close_button_clicked"){
                console.log("popup close button clicked");
             chrome.tabs.query({active: true, currentWindow: true}, function (tabs){

                chrome.tabs.sendMessage(tabs[0].id, {method:"remove_popup"},function(response){});

             });
        }else if(message.method=="kadoo_categ_notif_displayed"){
            ga("send", "event", "kadoo_categ_notif_displayed",message.link);
        }else if(message.method=="kadoo_categ_notif_clicked"){
            ga("send", "event", "kadoo_categ_notif_clicked",message.link);
        }else if(message.method=="kadoo_pp_banner_displayed"){
            ga("send", "event", "kadoo_pp_banner_displayed",message.link);
        }else if(message.method=="kadoo_pp_banner_clicked"){
            ga("send", "event", "kadoo_pp_banner_clicked",message.link);
        }else if(message.method=="kadoo_checkout_click"){
            ga("send", "event", "kadoo_checkout_click",message.link);
        }else if(message.method=="kadoo_addtocart_click"){
            ga("send", "event", "kadoo_addtocart_click",message.link);
        }else if(message.method=="kadoo_continue_shopping_click"){
            ga("send", "event", "kadoo_continue_shopping_click",message.link);
        }else if(message.method =="coupon_copied"){
            send_copied_coupon(message.coupon);    
                
        }else if(message.method =="may_sale_daily_notifs"){
            may_sale_daily_site_notifs();   
                
        }else if(message.method=="send_event"){
            if(!message.eventValue){
                ga("send","event",message.eventCategory,message.eventAction,message.eventLabel);    
            }else{
                ga("send","event",message.eventCategory,message.eventAction,message.eventLabel,message.eventValue);
            }
            
        }else if(message.method=="open_url_in_tab"){

            chrome.tabs.create({
                    url:message.url
                });

        }else if(message.method=="open_beacon_link"){
            ga("send","event",'beacon_link_open');
            open_beacon_link();
        }else {
            sendResponse({});
        }

    return true;
};

function paste() {
    var result = "";
    var sandbox = $("input[ng-model]").val("").select();
    if (document.execCommand("paste")) {
        result = $("input[ng-model]").val();
    }
    //sandbox.val("");
    return result;
}

var copyToClipboard = function (text) {
    var copyDiv = document.createElement("div");
    copyDiv.contentEditable = true;
    document.body.appendChild(copyDiv);
    copyDiv.innerHTML = text;
    copyDiv.unselectable = "off";
    copyDiv.focus();
    document.execCommand("SelectAll");
    document.execCommand("Copy", false, null);
    document.body.removeChild(copyDiv);
    console.log("We are done copying, it seems!");
}

var sendCouponApplyReq = function (portalCode, couponCode) {
    return function () {
        //sendResponse({portal: portal, couponCode: couponCode});
        //chrome.tabs.sendMessage(targetTab, {method: "applyCoupon", portal: portal, couponCode: couponCode}, function () {console.log("sent applycoupon")});
        console.log("in sendCouponApplyReq");
        //check 21
        try {
            chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
                //test 31
                if (chrome.runtime.lastError) {
                    ga("send", "event", "runtime error", "tab", chrome.runtime.lastError.message);
                    console.log(chrome.runtime.lastError.message);
                    sendResponse({});
                }
                console.log("TARGET " + tabs[0].id);
                console.log("PORTAL " + portalCode);
                console.log("CCODE " + couponCode);
                chrome.tabs.sendMessage(tabs[0].id, {method: "applyCoupon", portalCode: portalCode, couponCode: couponCode}, function (response) {
                    //test 32
                    if (chrome.runtime.lastError) {
                        ga("send", "event", "runtime error", "tab", chrome.runtime.lastError.message);
                        console.log(chrome.runtime.lastError.message);
                        sendResponse({});
                    }
                });
            });
        } catch (err) {
            ga("send", "event", "tab error", "sendCouponApplyReq", err);
            console.log(err);
            sendResponse({});
        }
    }
}
// Listen for the content script to send a message to the background page.

var getCartList = function (tabs, sendResponse) {
    // list of cart pages
    var openCarts = Array();
    // container holding portal ID, and tab ID
    cartInfo = {};
    for (var i=0; i<tabs.length; i++) {
        var URL = tabs[i].url;
        var cartInfo = {};
        if (jabongCart(URL)) {
            cartInfo.portal = "ja";
            cartInfo.tab = tabs[i].id;
            openCarts.push(cartInfo);
        } else if (myntraCart(URL)) {
            cartInfo.portal = "my";
            cartInfo.tab = tabs[i].id;
            openCarts.push(cartInfo);
        } else if (homeshop18Cart(URL)) {
            cartInfo.portal = "hs";
            cartInfo.tab = tabs[i].id;
            openCarts.push(cartInfo);
        } else if (ebayCart(URL)) {
            cartInfo.portal = "eb";
            cartInfo.tab = tabs[i].id;
            openCarts.push(cartInfo);
        } else if (infibeamCart(URL)) {
            cartInfo.portal = "ib";
            cartInfo.tab = tabs[i].id;
            openCarts.push(cartInfo);
        } else if (naaptolCart(URL)) {
            cartInfo.portal = "nt";
            cartInfo.tab = tabs[i].id;
            openCarts.push(cartInfo);
        } else if (indiaTimesCart(URL)) {
            cartInfo.portal = "it";
            cartInfo.tab = tabs[i].id;
            openCarts.push(cartInfo);
        } else if (shopcluesCart(URL)) {
            cartInfo.portal = "sc";
            cartInfo.tab = tabs[i].id;
            openCarts.push(cartInfo);
        } else if (firstCryCart(URL)) {
            cartInfo.portal = "fc";
            cartInfo.tab = tabs[i].id;
            openCarts.push(cartInfo);
        } else if (babyOyeCart(URL)) {
            cartInfo.portal = "bo";
            cartInfo.tab = tabs[i].id;
            openCarts.push(cartInfo);
        } else if (paytmCart(URL)) {
            cartInfo.portal = "pt";
            cartInfo.tab = tabs[i].id;
            openCarts.push(cartInfo);
        } else if (fabfurnishCart(URL)) {
            cartInfo.portal = "ff";
            cartInfo.tab = tabs[i].id;
            openCarts.push(cartInfo);
        } else if (pepperfryCart(URL)) {
            cartInfo.portal = "pf";
            cartInfo.tab = tabs[i].id;
            openCarts.push(cartInfo);
        } else if (urbanladderCart(URL)) {
            cartInfo.portal = "ul";
            cartInfo.tab = tabs[i].id;
            openCarts.push(cartInfo);
        } else if (fashionaraCart(URL)) {
            cartInfo.portal = "fa";
            cartInfo.tab = tabs[i].id;
            openCarts.push(cartInfo);
        } else if (lenskartCart(URL)) {
            cartInfo.portal = "lc";
            cartInfo.tab = tabs[i].id;
            openCarts.push(cartInfo);
        } else if (foodpandaCart(URL)) {
            cartInfo.portal = "fp";
            cartInfo.tab = tabs[i].id;
            openCarts.push(cartInfo);
        } else if (justeatCart(URL)) {
            cartInfo.portal = "je";
            cartInfo.tab = tabs[i].id;
            openCarts.push(cartInfo);
        } else if (dominosCart(URL)) {
            cartInfo.portal = "dm";
            cartInfo.tab = tabs[i].id;
            openCarts.push(cartInfo);
        } else if (pizzahutCart(URL)) {
            cartInfo.portal = "ph";
            cartInfo.tab = tabs[i].id;
            openCarts.push(cartInfo);
        } else if (makemytripCart(URL)) {
            cartInfo.portal = "mt";
            cartInfo.tab = tabs[i].id;
            openCarts.push(cartInfo);
        } else if (cleartripCart(URL)) {
            cartInfo.portal = "ct";
            cartInfo.tab = tabs[i].id;
            openCarts.push(cartInfo);
        } else if (goibiboCart(URL)) {
            cartInfo.portal = "gb";
            cartInfo.tab = tabs[i].id;
            openCarts.push(cartInfo);
        }
    }
    // send the list back to contentscript
    sendResponse({carts: openCarts});
}

//check 22
try {
    chrome.runtime.onMessage.addListener(getUUID);
} catch (err) {
    ga("send", "event", "listener error", "check 22", err);
}

var createDefaultSettings = function () {
    chrome.storage.sync.set({
        showDeals: false,
        showNotifications: true,
        emmy: "",
        emailFreq: ""
    });
}

//check 23
try {
    chrome.runtime.onInstalled.addListener(function (deets) {
        //test 33
        console.log("on install lisener executed");
        if (chrome.runtime.lastError) {
            ga("send", "event", "runtime error", "listener", chrome.runtime.lastError.message);
            console.log(chrome.runtime.lastError.message);
            sendResponse({});
        }
        if (deets.reason == "install") {
            console.log("mc: hello new friend i love you already");
            registerInstallTime();
            ga("send", "pageview", "makkhiinstalled");
            ga("send", "event", "installed");
            ga("send", "event", "install_ver", chrome.runtime.getManifest().version.toString());
            getIPSetUUID();
            // this one would go, and create the default settings,
            // store them locally so that we can read em before taking
            // "unexpected" actions
            createDefaultSettings();
            createaffyflags();
            create_is_our_affy();
            chrome.storage.local.set({showDeals: false}, function () {});
            check_for_user_action_storage();
            // setWalkThroughInfo(false);
            // chrome.tabs.create({url: "http://www.amazon.in/Lenovo-Ideapad-15-6-inch-Integrated-Graphics/dp/B01EN6RA7W?ie=UTF8&redirect=true&ref_=s9_simh_gw_g147_i1_r&tag=makkhiwalk-21&ascsubtag=mwt"});
        } else if (deets.reason == "update") {

            ga("send", "event", "updated", chrome.runtime.getManifest().version.toString());

            console.log("fresh new updates from your fly friend");
            getBirthRegister();
            console.log("updating user Id");
            checkUserId();
            setWalkThroughInfo(true);
            createaffyflags();
            create_is_our_affy();
            check_for_user_action_storage();
            if(chrome.runtime.getManifest().version.toString() === "2.1.4"){
            	console.log(chrome.runtime.getManifest().version.toString());
            	console.log("opening update page");
                ga("send","event","update_bounty_page_open","v1");
            	chrome.tabs.create({url: "http://www.makkhichoose.com/bitcoinbounty?ver="+chrome.runtime.getManifest().version.toString()});
            }
            
        }
    });
} catch (err) {
    ga("send", "event", "listener error", "check 23", err);
    console.log(err);
    sendResponse({});
}

var getIPSetUUID = function () {
    var ip_req_send = $.ajax({
        type: "GET",
        url: "https://search.makkhichoose.com/getip"
    });

    ip_req_send.done(function (response) {
        console.log("mc: hey fatherboat, thanks for blessing the baby!");
        var ipval = response.replace(/\./gi, "").substr(0,40);
        var date_val = (new Date()).getTime();
        console.log(date_val);
        var rand_str = Math.floor(Math.random() * 10000);
        var rand_uuid = ipval + "b" + date_val + "b" + rand_str;
        //check 24
        try {
            storage.set({"uuid": rand_uuid}, function () {
                //test 34
                if (chrome.runtime.lastError) {
                    ga("send", "event", "runtime error", "storage", chrome.runtime.lastError.message);
                    console.log(chrome.runtime.lastError.message);
                    sendResponse({});
                }
                console.log("tattooed fresh makkhi");
                getBirthRegister();
            });
        } catch (err) {
            ga("send", "event", "storage error", "getIPSetUUID", err);
            console.log(err);
            sendResponse({});
        }
    });
    ip_req_send.fail(function (response) {
        console.log("mc: fatherboat silent, so tragic, baby disowned!");
        var ipval = "iperr";
        var date_val = (new Date()).getTime();
        var rand_str = Math.floor(Math.random() * 100000);
        var rand_uuid = ipval + "b" + date_val + "b" + rand_str;
        //check 25
        try {
            storage.set({"uuid": rand_uuid}, function () {
                //test 35
                if (chrome.runtime.lastError) {
                    ga("send", "event", "runtime error", "storage", chrome.runtime.lastError.message);
                    console.log(chrome.runtime.lastError.message);
                    sendResponse({});
                }
                console.log("tattooed orphanmaster makkhi!");
                getBirthRegister();
            });
        } catch (err) {
            ga("send", "event", "storage error", "getIPSetUUID", err);
            console.log(err);
            sendResponse({});
        }
    });
}

//gcm
function registerCallback(registrationId) {
    console.log(registrationId);
    if (chrome.runtime.lastError) {
        // When the registration fails, handle the error and retry the
        // registration later.
        console.log("registration error!");
        return;
    }
    //check 26
    try {
        chrome.storage.local.set({gcm_registered: true, gcm_id: registrationId}, function () {
            //test 36
            if (chrome.runtime.lastError) {
                ga("send", "event", "runtime error", "storage", chrome.runtime.lastError.message);
                console.log(chrome.runtime.lastError.message);
                sendResponse({});
            }
            console.log("registration set!");

            chrome.storage.local.get("uuid", function (data) {
                //test 37
                if (chrome.runtime.lastError) {
                    ga("send", "event", "runtime error", "storage", chrome.runtime.lastError.message);
                    console.log(chrome.runtime.lastError.message);
                    sendResponse({});
                }

                console.log(data);
                console.log("sending gcm birthmarks to smartmothership!");

                var birth_send = $.ajax({
                    type: "POST",
                    url: "https://shades.makkhichoose.com/registerbirthmark",
                    data: JSON.stringify({"uuid": data.uuid, "gcm_id": registrationId, "version": chrome.runtime.getManifest().version.toString(), "isDevUse": isdevuse}),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    timeout: 2500
                });
                birth_send.done(function (response) {
                    console.log(response);
                    //get uid from server
                    console.log("birthmarks registration done");
                    // var turl = "http://www.makkhichoose.com/readysetsave?id=" + registrationId + "&isdevuse=" + isdevuse;
                    // var turl = "http://www.makkhichoose.com/installed?id=" + registrationId + "&isdevuse=" + isdevuse + "&ver="+chrome.runtime.getManifest().version.toString();
                    // chrome.tabs.create({
                    //     url:turl
                    // });
                });
                birth_send.fail(function (response) {
                    console.log("birthmarks registration failed");
                    console.log(response);
                });
                //to get user Id on every install
                getUserIdFromServer(registrationId);
            });
        });
    } catch (err) {
        ga("send", "event", "storage error", "registerCallback", err);
        console.log(err);
        sendResponse({});
    }
}

function getBirthRegister() {
    //check 27
    try {
        chrome.storage.local.get("gcm_registered", function (result) {
            //test 38
            if (chrome.runtime.lastError) {
                ga("send", "event", "runtime error", "storage", chrome.runtime.lastError.message);
                console.log(chrome.runtime.lastError.message);
                sendResponse({});
            }

            if (result["gcm_registered"]) {
                console.log("gcm already done baby!");
                chrome.storage.local.get("gcm_id", function (data) {
                    //test 39
                    if (chrome.runtime.lastError) {
                        ga("send", "event", "runtime error", "storage", chrome.runtime.lastError.message);
                        console.log(chrome.runtime.lastError.message);
                        sendResponse({});
                    }
                    console.log(data);
                });
                return;
            } else {
                var senderIds = ["828794141085"];
                console.log("we have an unscannable, imprint!");
                chrome.gcm.register(senderIds, registerCallback);
            }
        });
    } catch (err) {
        ga("send", "event", "storage error", "getBirthRegister", err);
        console.log(err);
        sendResponse({});
    }
}

//check 28
try {
    chrome.runtime.onStartup.addListener(function () {
        getBirthRegister();
        chrome.storage.sync.set({"show" : true}, function (data) {});
    });
} catch (err) {
    ga("send", "event", "listener error", "check 28", err);
}

// Listen for any changes to the URL of any tab.
function setPageActionIcon(tabId) {
    //check 29
    try {
        chrome.storage.local.get("new_price_Drops", function (data) {
            //test 40
            if (chrome.runtime.lastError) {
                ga("send", "event", "runtime error", "storage", chrome.runtime.lastError.message);
                console.log(chrome.runtime.lastError.message);
                sendResponse({});
            }
            if (data != null && data.new_price_Drops) {
                chrome.pageAction.setIcon({tabId: tabId, path: "makkhi_bright.png"});
            } else {
                if(coupons_icon_set == false){
                    chrome.pageAction.setIcon({tabId: tabId, path: "makkhi_pale.png"});    
                }
                
            }
            chrome.pageAction.show(tabId);
        });
    } catch (err) {
        ga("send", "event", "pageaction error", "setPageActionIcon", err);
        console.log(err);
        sendResponse({});
    }
}

//check 30
try {
    chrome.tabs.onUpdated.addListener(function (tabId) {
        //test 41
        if (chrome.runtime.lastError) {
            ga("send", "event", "runtime error", "listener", chrome.runtime.lastError.message);
            console.log(chrome.runtime.lastError.message);
            sendResponse({});
        }
        setPageActionIcon(tabId);
    });
} catch (err) {
    ga("send", "event", "listener error", "check 30", err);
    console.log(err);
    sendResponse({});
}

//check 31
try {
    chrome.tabs.onCreated.addListener(function (tab) {
        //test 42
        if (chrome.runtime.lastError) {
            ga("send", "event", "runtime error", "listener", chrome.runtime.lastError.message);
            console.log(chrome.runtime.lastError.message);
            sendResponse({});
        }
        setPageActionIcon(tab.id);
    });
} catch (err) {
    ga("send", "event", "listener error", "check 31", err);
    console.log(err);
    sendResponse({});
}

// listen for gcm message from server
//check 32
try {
    chrome.gcm.onMessage.addListener(function (message) {
        // A message is an object with a data property that
        // consists of key-value pairs.
        console.log("gcm message");
        console.log(message);
        //test 43
        if (chrome.runtime.lastError) {
            ga("send", "event", "runtime error", "listener", chrome.runtime.lastError.message);
            console.log(chrome.runtime.lastError.message);
            sendResponse({});
        }

        if (message.data.type == 3) {
            notifClickOpenURL = message.data.link;
            var notifTitle = message.data.notifTitle;
            var notifMessage = message.data.notifMessage;
            var notifIconUrl = message.data.notifIconUrl;
            var notifImageUrl = message.data.notifImageUrl;
            var notifType = message.data.notifType;
            chrome.permissions.contains({
                permissions: ["notifications"]
            }, function (result) {
                if (result) {
                    var opt = {
                        type: "image",
                        title: "Makkhichoose",
                        message: notifMessage,
                        iconUrl: "makkhi_bright.png",
                        isClickable: true
                    };
                    if (notifTitle) {
                        opt["title"] = notifTitle;
                    }
                    if (notifIconUrl) {
                        opt["iconUrl"] = notifIconUrl;
                    }
                    if (notifImageUrl) {
                        opt["imageUrl"] = notifImageUrl;
                    }

                   if (notifType) {
                        opt["type"] = notifType;
                    }

                    // AddNotificationListener();
                    console.log(opt);
                    addListener();
                    console.log(notifClickOpenURL);
                    chrome.notifications.clear("gcmnotif", function (wasUpdated) {
                        chrome.notifications.create("gcmnotif", opt, function (notificationId) {});
                    });
                }
            });
        } else if (message.data.type == 2) {
            console.log("wow from gcm");
            var prodpid = message.data.pid;
            var prodweb = message.data.website;

            chrome.storage.local.get("gcm_id", function (data) {
                //test 44
                if (chrome.runtime.lastError) {
                    ga("send", "event", "runtime error", "storage", chrome.runtime.lastError.message);
                    console.log(chrome.runtime.lastError.message);
                    sendResponse({});
                }

                var birth_send = $.ajax({
                    type: "POST",
                    url: "https://data1.makkhichoose.com/trackover",
                    data: JSON.stringify({"pid": prodpid, "website": prodweb, "gcm_id": data.gcm_id, "isDevUse": isdevuse}),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    timeout: 2500,
                });
                birth_send.done(function (response) {
                    console.log(response);
                });
            });

            var thisProdData =    {
                "prod_title": message.data.prod_title,
                "price_drop": message.data.price_drop,
                "start_price": message.data.start_price,
                "current_price": message.data.current_price,
                "drop_percent": message.data.drop_percent,
                "url": message.data.url,
                "img_src": message.data.img_src,
                "pid": prodpid,
                "website": prodweb
            };

            chrome.storage.local.get("price_drop_prods", function (data) {
                //test 45
                if (chrome.runtime.lastError) {
                    ga("send", "event", "runtime error", "listener", chrome.runtime.lastError.message);
                    console.log(chrome.runtime.lastError.message);
                    sendResponse({});
                }
                var stored_price_drops = [];
                if (data != null && data.price_drop_prods != null) {
                    stored_price_drops = data.price_drop_prods;
                }

                var isAlreadyAdded = false;
                for (i = 0; i < stored_price_drops.length; i++) {
                    if (stored_price_drops[i].pid == prodpid && stored_price_drops[i].website == prodweb) {
                        isAlreadyAdded = true;
                        break;
                    }
                }

                if (isAlreadyAdded) {
                    return;
                }

                showPricedropNotification(thisProdData);

                if (stored_price_drops.length > 9) {
                    stored_price_drops.splice(9, stored_price_drops.length - 9);
                }

                stored_price_drops.unshift(thisProdData);
                chrome.storage.local.set({"price_drop_prods": stored_price_drops}, function () {
                    //test 46
                    if (chrome.runtime.lastError) {
                        ga("send", "event", "runtime error", "storage", chrome.runtime.lastError.message);
                        console.log(chrome.runtime.lastError.message);
                        sendResponse({});
                    }
                });
                chrome.storage.local.set({"new_price_Drops": true}, function () {
                    //test 47
                    if (chrome.runtime.lastError) {
                        ga("send", "event", "runtime error", "storage", chrome.runtime.lastError.message);
                        console.log(chrome.runtime.lastError.message);
                        sendResponse({});
                    }

                    chrome.tabs.query({currentWindow: true, active : true}, function (tabArray) {
                        //test 48
                        if (chrome.runtime.lastError) {
                            ga("send", "event", "runtime error", "tab", chrome.runtime.lastError.message);
                            console.log(chrome.runtime.lastError.message);
                            sendResponse({});
                        }
                        setPageActionIcon(tabArray[0].id);
                    });
                });
            });
        } else if (message.data.type == 5) {
            console.log("received toast notification");
            chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {method: "show_toast", "toast_msg": message.data.toast_msg}, function (response) {
                    console.log("message sent to content script");
                });
            });
        }
        else if (message.data.type == 6) {
            
            // console.log("received toast notification");
            // chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            //     chrome.tabs.sendMessage(tabs[0].id, {method: "show_toast", "toast_msg": message.data.toast_msg}, function (response) {
            //         console.log("message sent to content script");
            //     });
            // });

            chrome.storage.local.get({"notif_details":""},function(response){
                console.log("notification message");
                console.log(message);
                console.log("test");
                console.log(response);
                if(response.notif_details==""){
                    //no data present add data and send to it
                    console.log("empty notif details");
                    var temp_arr =[];
                    temp_arr.push({"notif_id":message.data.notif_id,"last_displayed":new Date().getTime()});
                    chrome.storage.local.set({"notif_details":temp_arr},function(response){
                    });
                    //send notif
                    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
                        chrome.tabs.sendMessage(tabs[0].id, {method: "show_toast", "toast_msg": message.data.toast_msg}, function (response) {
                            console.log("message sent to content script");
                        });
                    });

                }
                else{
                    try{
                        var temp_arr = response.notif_details;
                        if(is_notif_id_present(message.data.notif_id,temp_arr)){
                            //don't send notification
                            console.log("notification already displayed");
                        }
                        else{
                            //send notifications and save it
                            temp_arr.push({"notif_id": message.data.notif_id,"last_displayed":new Date().getTime()});
                            chrome.storage.local.set({"notif_details":temp_arr},function(response){
                            });
                            //send notif
                            chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
                                chrome.tabs.sendMessage(tabs[0].id, {method: "show_toast", "toast_msg": message.data.toast_msg}, function (response) {
                                    console.log("message sent to content script");
                                });
                            });                            

                        }

                    }
                    catch(err){

                    }
                }
            });

        }
        else if (message.data.type == 7) {
          inform_notification_msg_recieved({'notif_id':message.data.notif_id});
          chrome.storage.local.get({"notif_details":""},function(response){
                console.log("notification message");
                console.log(message);
                console.log("test");
                console.log(response);
                if(response.notif_details==""){
                    //no data present add data and send to it
                    console.log("empty notif details");
                    var temp_arr =[];
                    temp_arr.push({"notif_id":message.data.notif_id,"last_displayed":new Date().getTime()});
                    chrome.storage.local.set({"notif_details":temp_arr},function(response){
                    });
                    //send notif
                    send_notification_or_toast(message.data);
                }
                else{
                    try{
                        var temp_arr = response.notif_details;
                        if(is_notif_id_present(message.data.notif_id,temp_arr)){
                            //don't send notification
                            console.log("notification already displayed");
                        }
                        else{
                            //send notifications and save it
                            temp_arr.push({"notif_id": message.data.notif_id,"last_displayed":new Date().getTime()});
                            chrome.storage.local.set({"notif_details":temp_arr},function(response){
                            });
                            //send notif
                             send_notification_or_toast(message.data);   

                        }

                    }
                    catch(err){

                    }
                }
            });
        }
        else if (message.data.type == 8) {
          inform_notification_msg_recieved({'notif_id':message.data.notif_id});  
          chrome.storage.local.get({"notif_details":""},function(response){
                console.log("notification message");
                console.log(message);
                console.log("test");
                console.log(response);
                var link = message.data.link;
                if(link==""){
                    link = "www.makkhichooose.com";
                }
                if(response.notif_details==""){
                    //no data present add data and send to it
                    console.log("empty notif details");
                    var temp_arr =[];
                    temp_arr.push({"notif_id":message.data.notif_id,"last_displayed":new Date().getTime()});
                    chrome.storage.local.set({"notif_details":temp_arr},function(response){
                       //send notif
                        chrome.storage.local.set({"beacon_msg":true,"beacon_link":link},function(response){
                            send_beacon_notification_or_toast(message.data);    
                        });
                    });
                    
                }
                else{
                    try{
                        var temp_arr = response.notif_details;
                        if(is_notif_id_present(message.data.notif_id,temp_arr)){
                            //don't send notification
                            console.log("notification already displayed");
                        }
                        else{
                            //send notifications and save it
                            temp_arr.push({"notif_id": message.data.notif_id,"last_displayed":new Date().getTime()});
                            chrome.storage.local.set({"notif_details":temp_arr},function(response){
                                //send notif
                                chrome.storage.local.set({"beacon_msg":true,"beacon_link":link},function(response){
                                    send_beacon_notification_or_toast(message.data);    
                                });
                            });
                        }
                    }
                    catch(err){
                    }
                }
            });
        }
        else if(message.data.type == 9){
            try{
                console.log(message);
                var scroll_notif_on_all_pages = false;
                if(message.data.scroll_notif_on_all_pages == "true" || message.data.scroll_notif_on_all_pages == true){
                    scroll_notif_on_all_pages = true;
                }
                chrome.storage.local.set({"scroll_notif_on_all_pages":scroll_notif_on_all_pages,"scroll_notif_avail":true,"scroll_notif_deets":{
                    message:message.data.message,
                    msg_url:message.data.msg_url
                }},function(response){
                });

            }
            catch(err){

            }

        }

    });
} catch (err) {
    ga("send", "event", "listener error", "check 32", err);
    console.log(err);
    sendResponse({});
}

function inform_notification_msg_recieved(deets){
    chrome.storage.local.get({user_id:" ",gcm_id:" "},function(response){

        deets['extension_id'] = chrome.runtime.id;
        deets['version'] = chrome.runtime.getManifest().version;
        deets['user_id'] = response['user_id'];
        deets['gcm_id'] = response['gcm_id'];
        deets['notif_id'] = deets['notif_id'];

        var send_info= $.ajax({
            type: "POST",
            url: "https://notifications.makkhichoose.com/messagerecieved",
            data: JSON.stringify(deets),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            timeout: 2500
        });

        send_info.done(function(response){
            // do something
        });

        send_info.fail(function(response){
            // do something
        })


    })
}


function inform_notification_msg_clicked(deets){
    chrome.storage.local.get({user_id:" ",gcm_id:" "},function(response){

        deets['extension_id'] = chrome.runtime.id;
        deets['version'] = chrome.runtime.getManifest().version;
        deets['user_id'] = response['user_id'];
        deets['gcm_id'] = response['gcm_id'];
        deets['notif_id'] = deets['notif_id'];

        var send_info= $.ajax({
            type: "POST",
            url: "https://notifications.makkhichoose.com/actiontaken",
            data: JSON.stringify(deets),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            timeout: 2500
        });

        send_info.done(function(response){
            // do something
        });

        send_info.fail(function(response){
            // do something
        });
    })
}

function combineUrlBitsWithParams(url_a,params) {
    var url_b="";
    var param_iter_1=true;
    $.each(params,function(key,value){
        url_b=url_b+'&'+key+'='+value;
    });
    url_b=url_b.slice(1);
    if (url_a.indexOf('?')==-1) {
        return url_a+'?'+url_b;
        }
    else {
        return url_a+'&'+url_b;
    }
}

var handled_notifications = [];

function send_notification_or_toast_click_listener (notificationId) {
    console.log(handled_notifications)
    if(handled_notifications.indexOf(notificationId)>-1){
        return;
    }
    inform_notification_msg_clicked({'notif_id':notificationId})
    console.log('listener executed');
    console.log("notification click detected");
    if (notificationId) {
        if (notifClickOpenURL) {
            window.open(notifClickOpenURL, "target=_blank");

        }
        handled_notifications.push(notificationId);
    }
}

function send_notification_or_toast(data){

  // chrome.permissions.contains(
  //       {
  //           permissions: ["notifications"]
  //       }, function (result) {
  //           if (result) {
  //               //console.log("premission exists");
  //               //do chrome notification
  //               notifClickOpenURL = data.link;
  //               if(data.send_uid){

  //               }

  //               var opt = data.gcm_notif_opts;
  //               if(typeof data.gcm_notif_opts =="string"){
  //                   opt = JSON.parse(data.gcm_notif_opts);
  //               }
  //               console.log(opt);
  //               chrome.notifications.create("gcmnotif", opt, function (notificationId) {});
  //           } else {
  //               //no permission
  //              // do toast notifications
  //               chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
  //                   chrome.tabs.sendMessage(tabs[0].id, {method: "show_toast", "toast_msg": data.toast_msg}, function (response) {
  //                       console.log("message sent to content script");
  //                   });
  //               });
  //           }
  //       }
  //   );
  console.log("or_toast data");
  console.log(data);

  if(typeof data.toast_msg == "string"){
    data.toast_msg = JSON.parse(data.toast_msg);
  }


  storage.get(["emmy", "uuid", "gcm_id", "user_id","sd_id"], function(response){

    var id_deets={};

    id_deets.gcm_id="";
    id_deets.user_id="";
    id_deets.emmy="";
    id_deets.sd_id="";

    id_deets.gcm_id=response.gcm_id;
    id_deets.user_id=response.user_id;
    id_deets.emmy=response.emmy;
    if(response.sd_id != undefined){
    id_deets.sd_id = response.sd_id;
    }
    id_deets.ext_ver=chrome.runtime.getManifest().version;
    id_deets.ext_id=chrome.runtime.id;

    var url_id_params ={
        uid : id_deets.user_id,
        ver : id_deets.ext_ver,
        eid : id_deets.ext_id
    }
    var url_with_ids = data.link;
    if(data.send_uid){
      url_with_ids   = combineUrlBitsWithParams(url_with_ids,url_id_params)
    }
    console.log("url_with_ids");
    console.log(url_with_ids);
    data.link = url_with_ids;
    data.toast_msg.text = $(data["toast_msg"]["text"]).attr('href',url_with_ids).prop('outerHTML');


 chrome.permissions.contains(
        {
            permissions: ["notifications"]
        }, function (result) {
            if (result) {
                //console.log("premission exists");
                //do chrome notification
                notifClickOpenURL = data.link;
                var opt = data.gcm_notif_opts;
                if(typeof data.gcm_notif_opts =="string"){
                    opt = JSON.parse(data.gcm_notif_opts);
                }
                // console.log(opt);
                console.log("notification listener set");
                console.log(chrome.notifications.onClicked.hasListener(send_notification_or_toast_click_listener));
                if(chrome.notifications.onClicked.hasListener(send_notification_or_toast_click_listener)){
                    console.log("removing old listener");
                    chrome.notifications.onClicked.removeListener(send_notification_or_toast_click_listener);
                }
                chrome.notifications.onClicked.addListener(send_notification_or_toast_click_listener);


                chrome.notifications.create(data.notif_id, opt, function (notificationId) {});
            } else {
                //no permission
               // do toast notifications
                chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
                    chrome.tabs.sendMessage(tabs[0].id, {method: "show_toast", "toast_msg": data.toast_msg}, function (response) {
                        console.log("message sent to content script");
                    });
                });
            }
        }
 );

});


}


function showPricedropNotification(data) {
    chrome.permissions.contains(
        {
            permissions: ["notifications"]
        }, function (result) {
            if (result) {
                addListener(data.url);
                chrome.notifications.clear("3", function (wasUpdated) {});
                console.log(data);
                var message = "Price Has Dropped For " + data.prod_title + " by " + data.drop_percent + "%";
                var opt = {
                    type: "basic",
                    title: data.prod_title,
                    message: message,
                    iconUrl : data.img_src,
                    isClickable: true
                };
                chrome.notifications.create("3", opt, function () {
                    console.log("notification shown");
                    ga("send", "event", "price_drop_notification", "notification_shown");
                });

            }
        }
    );
}


function send_beacon_notification_or_toast_click_listener(notificationId) {
    
    if(handled_notifications.indexOf(notificationId)>-1){
        return;
    }
  inform_notification_msg_clicked({'notif_id':notificationId});
  console.log("notification click detected");
  if (notificationId) {
    chrome.storage.local.set({"beacon_msg":false,"beacon_link":""},function(){
      if (notifClickOpenURL) {
          window.open(notifClickOpenURL, "target=_blank");
          chrome.storage.local.set({"beacon_link":"","beacon_msg":false},function(response){});
          handled_notifications.push(notificationId);
      }
    })
  }
}

function send_beacon_notification_or_toast_button_click_listener_1(notificationId,buttonIndex){
    if(handled_notifications.indexOf(notificationId)>-1){
        return;
    }
    inform_notification_msg_clicked({'notif_id':notificationId});
    if( (notificationId ) && (buttonIndex == 0) ){
        window.open(button1_link,"target=_blank");
        chrome.storage.local.set({"beacon_link":"","beacon_msg":false},function(response){});
        handled_notifications.push(notificationId);
    }else if((notificationId) && (buttonIndex == 1)){
        window.open(button2_link,"target=_blank");
        chrome.storage.local.set({"beacon_link":"","beacon_msg":false},function(response){});
        handled_notifications.push(notificationId);
    }
    
}

function send_beacon_notification_or_toast_button_click_listener_2(notificationId,buttonIndex){
    if(handled_notifications.indexOf(notificationId)>-1){
        return;
    }
    inform_notification_msg_clicked({'notif_id':notificationId});
    if( (notificationId) && (buttonIndex == 0) ){
        window.open(button1_link,"target=_blank");
        chrome.storage.local.set({"beacon_link":"","beacon_msg":false},function(response){});
        handled_notifications.push(notificationId);
    }
}


function send_beacon_notification_or_toast(data){

    console.log("beacon_toast data");
    console.log(data);

    if(typeof data.toast_msg == "string"){
      data.toast_msg = JSON.parse(data.toast_msg);
    }

    storage.get(["emmy", "uuid", "gcm_id", "user_id","sd_id"], function(response){

      var id_deets={};

      id_deets.gcm_id="";
      id_deets.user_id="";
      id_deets.emmy="";
      id_deets.sd_id="";

      id_deets.gcm_id=response.gcm_id;
      id_deets.user_id=response.user_id;
      id_deets.emmy=response.emmy;
      if(response.sd_id != undefined){
      id_deets.sd_id = response.sd_id;
      }
      id_deets.ext_ver=chrome.runtime.getManifest().version;
      id_deets.ext_id=chrome.runtime.id;

      var url_id_params ={
          uid : id_deets.user_id,
          ver : id_deets.ext_ver,
          eid : id_deets.ext_id
      }
      var url_with_ids = data.link;
      if(data.link.match("www.makkhichoose.com/chat")){
        data.link = data.link+'/'+uid;
      }
      if(data.send_uid){
        url_with_ids   = combineUrlBitsWithParams(url_with_ids,url_id_params)
      }
      console.log("url_with_ids");
      console.log(url_with_ids);
      data.link = url_with_ids;
      data.toast_msg.text = $(data["toast_msg"]["text"]).attr('href',url_with_ids).prop('outerHTML');


   chrome.permissions.contains(
          {
              permissions: ["notifications"]
          }, function (result) {
              if (result) {
                  //console.log("premission exists");
                  //do chrome notification
                  notifClickOpenURL = data.link;
                  var opt = data.gcm_notif_opts;
                  if(typeof data.gcm_notif_opts =="string"){
                      opt = JSON.parse(data.gcm_notif_opts);
                  }
                  // console.log(opt);
                  console.log("notification listener set");
                  if(chrome.notifications.onClicked.hasListener(send_beacon_notification_or_toast_click_listener)){
                    chrome.notifications.onClicked.removeListener(send_beacon_notification_or_toast_click_listener);
                  }
                  chrome.notifications.onClicked.addListener(send_beacon_notification_or_toast_click_listener);
                  // message truncation
                  console.log("trying to truncate message");
                  console.log(opt.message.length);
                  if(opt.message.length>63){
                    console.log("truncating");
                    opt.message= opt.message.slice(0,64) + "..."
                  }

                  if(opt.buttons){
                    if((opt.buttons.length==2) && (data.button1_link) && (data.button2_link) ){

                        button1_link  = data.button1_link;
                        button2_link  = data.button2_link;
                        if(data.send_uid){
                            button1_link = combineUrlBitsWithParams(button1_link,url_id_params);
                            button2_link = combineUrlBitsWithParams(button2_link,url_id_params);
                        }

                        if(chrome.notifications.onButtonClicked.hasListener(send_beacon_notification_or_toast_button_click_listener_1)){
                            chrome.notifications.onButtonClicked.removeListener(send_beacon_notification_or_toast_button_click_listener_1);
                        }                        
                        chrome.notifications.onButtonClicked.addListener(send_beacon_notification_or_toast_button_click_listener_1);
                    }else if((opt.buttons.length==1) && (data.button1_link)){
                        button1_link  = data.button1_link;
                        if(data.send_uid){
                            button1_link = combineUrlBitsWithParams(button1_link,url_id_params);
                        }

                        if(chrome.notifications.onButtonClicked.hasListener(send_beacon_notification_or_toast_button_click_listener_2)){
                            chrome.notifications.onButtonClicked.removeListener(send_beacon_notification_or_toast_button_click_listener_2);
                        }                        
                        chrome.notifications.onButtonClicked.addListener(send_beacon_notification_or_toast_button_click_listener_2);
                    }
                  }
                  chrome.notifications.create(data.notif_id, opt, function (notificationId) {

                  });
              } else {
                  //no permission
                 // do toast notifications
                  // chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
                  //     chrome.tabs.sendMessage(tabs[0].id, {method: "show_toast", "toast_msg": data.toast_msg}, function (response) {
                  //         console.log("message sent to content script");
                  //     });
                  // });
              }
          }
   );

  });


}


function open_beacon_link(){
  chrome.storage.local.get({"user_id":"","beacon_link":""},function(response){
    var link = "";
    if(response.user_id!="" && response.beacon_link!=""){
      if(response.beacon_link.match("www.makkhichoose.com/chat")){
        link = response.beacon_link + '/' + response.user_id;
        window.open(link);
      }else{
        var params = {
            uid : response.user_id
        }
        link = combineUrlBitsWithParams(response.beacon_link,params);
        window.open(link);
      }
      chrome.storage.local.set({"beacon_link":""},function(response){});
    }
  });
}

function showTatkalNotification() {
    // chrome.storage.sync.get("show", function (data) {
    //     if (data["show"] != false) {
    //         chrome.permissions.contains(
    //             {
    //                 permissions: ["notifications"]
    //             }, function (result) {
    //                 if (result) {
    //                     addListener();
    //                     chrome.notifications.clear("2", function (wasUpdated) {});
    //                     var message = "Tired Of Getting Waitlisted? Use TatkalNow";
    //                     var opt = {
    //                         type: "basic",
    //                         title: "A Message From Makkhichoose",
    //                         message: message,
    //                         iconUrl: "makkhi_IRCTC.png",
    //                         buttons: [
    //                             { title: "Know More" },
    //                             { title: "Don't show again" }
    //                         ],
    //                         isClickable: true
    //                     };
    //                     chrome.notifications.create("2", opt, function () {});
    //                     chrome.storage.sync.set({"show" : false}, function (data) {});
    //                     var dateshown = new Date();
    //                     dateshown = dateshown.getTime();
    //                     chrome.storage.sync.set({"date" : dateshown}, function () {});
    //                 }
    //             }
    //         );
    //     }
    // });
}

chrome.runtime.onMessageExternal.addListener(
    function (request, sender, sendResponse) {
        if (request.getTargetData == "hello makkhi")
            sendResponse({targetData: "hello tatkal"});
    }
);


function old_notif_click_listener(notificationId) {
    if (notificationId == "3") {
        var open = window.open(price_drop_url, "target=_blank");
    } else if (notificationId == "2") {
        var open = window.open("http://www.makkhichoose.com/gettatkalnow?utm_campaign=cross_click&utm_source=makkhichoose&utm_medium=makkhichoose", "target=_blank");
    } else if (notificationId == "gcmnotif") {
        if (notifClickOpenURL) {
            window.open(notifClickOpenURL, "target=_blank");
        }
    }
}

function addListener(price_drop_url) {
    chrome.permissions.contains(
        {
            permissions: ["notifications"]
        }, function (result) {
            if (result) {
                chrome.notifications.onButtonClicked.addListener(function (notificationId, buttonIndex) {
                    if (notificationId == "2") {
                        //makkhichoose install notification
                        if (buttonIndex == 1) {
                            chrome.storage.sync.set({"donotshow" : true}, function () {console.log("donotshow")});
                        } else if (buttonIndex == 0) {
                            var open = window.open("http://www.makkhichoose.com/gettatkalnow?utm_campaign=cross_click&utm_source=makkhichoose&utm_medium=makkhichoose", "target=_blank");
                        }
                    }
                });
                if(chrome.notifications.onClicked.hasListener(old_notif_click_listener)){
                    chrome.notifications.onClicked.removeListener(old_notif_click_listener);
                }
                chrome.notifications.onClicked.addListener(old_notif_click_listener);
            }
        }
    );
}

function checkNotificationPermission() {
    chrome.permissions.contains(
        {
            permissions: ["notifications"]
        }, function (result) {
            if (result) {
                //console.log("premission exists");
            } else {
                //console.log("request permission");
                check_for_permission();
            }
        }
    );
}



function check_for_permission(){
    chrome.storage.local.get({"installedTime":"","get_permission_last_attempt":"","get_permission_attempts":""},function(response){
        var current_time = new Date().getTime();
        console.log(response);

        if(response.get_permission_last_attempt){
            var last_attempted_time = response.get_permission_last_attempt + (10*24*3600*1000);
            if(last_attempted_time<=current_time){
                // 10 days elapsed after previous time
                if(response.get_permission_attempts &&  response.get_permission_attempts<2){
                    //ask permission
                    get_permission_from_user();
                }else if(!response.get_permission_attempts){
                    //some thing is wrong don't ask
                }
            }
        }else{
            var time_threshold = response.installedTime + (2*24*3600*1000);
            console.log(new Date(time_threshold));
            console.log(new Date(response.installedTime));
            console.log(current_time)
            if(time_threshold <= current_time){
                //ask permission
                get_permission_from_user();
            }

        }
    });

}


function get_permission_from_user(){
    chrome.permissions.request({
            permissions: ["notifications"]
        }, function (granted) {
            if (granted) {
                //console.log("request granted");
            } else {
                //console.log("request declined");
            }
    });

    chrome.storage.local.get({get_permission_attempts:""},function(response){
        var attempts = response.get_permission_attempts
        if(!attempts){
            attempts = 1;
        }else{
            attempts = attempts+1;
        }
        chrome.storage.local.set({"get_permission_last_attempt": new Date().getTime(), get_permission_attempts:attempts},function(){

        });

    });

}


function getUserIdFromServer(gcm_id) {
    var get_uid= $.ajax({
        type: "POST",
        url: "https://cashback.makkhichoose.com/register_user",
        data: JSON.stringify({"gcm_id":gcm_id}),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        timeout: 2500
    });
    get_uid.done(function(response){
        setUserId(response);
        var turl = "http://www.makkhichoose.com/installed?id=" + gcm_id + "&isdevuse=" + isdevuse + "&ver="+chrome.runtime.getManifest().version.toString()+ "&uid="+response.userID;
        chrome.tabs.create({
            url:turl
        });        
    });
    get_uid.fail(function (response) {
        console.log("fail");
    });
}

function setUserId(response) {
    var uid = response.userID;
    console.log("user_id");
    console.log(uid);
    ga("set", "&uid", uid);
    ga("set", "userId", uid);
    console.log("user id set to analutics from setuser id");
    try {
        chrome.storage.local.set({user_id_in_storage: true, user_id: uid}, function () {
            if (chrome.runtime.lastError) {
                console.log(chrome.runtime.lastError.message);
                sendResponse({});
            }
            console.log("userID set!");
        });
    } catch (err) {
        console.log(err);
        sendResponse({});
    }

    //getting sdid after getting userid from server
    sd_id_startup_check();
}


function checkUserId() {
    try {
        chrome.storage.local.get("user_id", function (result) {
            if (!result["user_id"]) {
                chrome.storage.local.get("gcm_id", function (result) {
                    if (result["gcm_id"]) {
                        console.log("getting user id from server");
                        getUserIdFromServer(result["gcm_id"]);
                    }
                });
            } else {
                console.log("user id exists");
            }
        });
    } catch (err) {
        console.log(err);
        sendResponse({});
    }
}

function sd_id_startup_check(){

    // var get_sd_id= $.ajax({
    //     type: "GET",
    //     url: "https://sga.snapdeal.biz/sa/tp/info",
    //     timeout: 2500
    // });
    // get_sd_id.done(function(server_response) {
    //     console.log("sdid response");
    //     console.log(server_response);
    //     try {
    //         chrome.storage.local.get({"sd_id":""}, function (result) {
    //             if (result["sd_id"] == "") {
    //                 set_sd_id(server_response);
    //             } else if(result["sd_id"] != server_response ) {
    //                 console.log("changing sd_id")
    //                 set_sd_id(server_response);
    //             }
    //             else if(result["sd_id"] == server_response){
    //                 console.log("sd id exists");
    //             }
    //         });
    //     } catch (err) {
    //         console.log(err);
    //         sendResponse({});
    //     }
    // });
    // get_sd_id.fail(function (response) {
    //     console.log("fail");
    // });
}


function set_sd_id(sd_id) {
    try{
        chrome.storage.local.set({sd_id:sd_id},function(resp){
            console.log("success set sd id");
            send_sd_id_to_server(sd_id);
            console.log("success")

        });
    }
    catch(err){
        console.log(err);
    }
}

function send_sd_id_to_server(sd_id) {

    try {
        storage.get(["emmy", "uuid", "gcm_id", "user_id"], function (items) {
            //test 6
            if (chrome.runtime.lastError) {
                ga("send", "event", "runtime error", "storage", chrome.runtime.lastError.message);
                console.log(chrome.runtime.lastError.message);
                sendResponse({});
            }
            console.log("emmy?");
            console.log(items);
            if (items) {
                
                // if (items.emmy) {
                //     console.log("mc: mothership here, have emmy message YaY");
                //     console.log(items.emmy);
                //     sendResponse({status: items});
                // } else {
                //     console.log("mc: mothership here, no emmy message sob");
                //     sendResponse({status: items});
                // }
                var send_sd_id= $.ajax({
                                    type: "POST",
                                    url: "https://shades.makkhichoose.com/namingceremony",
                                    data: JSON.stringify({"gcm_id":items.gcm_id,"user_id":items.user_id,"sd_id":sd_id}),
                                    contentType: "application/json; charset=utf-8",
                                    dataType: "json",
                                    timeout: 3000
                                });
                send_sd_id.done(function(){
                    console.log("success sent sd id");
                });

                send_sd_id.fail(function(){
                    console.log("failure sending sd id");
                });

            } else {
                console.log("mc: mothership here, no emmy items message boohoo!");
                sendResponse({status: items});
            }
        });
    } catch (err) {
        ga("send", "event", "storage error", "getEmmy", err);
        console.log(err);
        sendResponse({});
    }

}

function createaffyflags() {
    var last_updated_date = getCurrentDateStr();
    try {
        chrome.storage.local.set(
            {
                affy_flags_last_used: last_updated_date,
                az_search: true,
                fk_search: true,
                sd_search: true,
                az_price: true,
                ja_search: true,
                my_search: true,
                tc_search:true,
                fk_price: true,
                sd_price:true,
                tc_price:true
            }, function () {
                if (chrome.runtime.lastError) {
                    console.log(chrome.runtime.lastError.message);
                    sendResponse({});
                }
            }
        );
    } catch (err) {
        console.log(err);
        sendResponse({});
    }
}

function create_is_our_affy() {
    var last_updated_date = getCurrentDateStr();
    try {
        chrome.storage.local.set({"is_our_az": false}, function () {
            if (chrome.runtime.lastError) {
                console.log(chrome.runtime.lastError.message);
                sendResponse({});
            }
        });
    } catch (err) {
        console.log(err);
        sendResponse({});
    }
}

function getCurrentDateStr() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!

    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = "0" + dd;
    }
    if (mm < 10) {
        mm = "0" + mm;
    }
    var today_date = dd + "/" + mm + "/" + yyyy;
    return today_date;
}

function update_affy_flags() {
    chrome.storage.local.get("affy_flags_last_used", function (result) {
        if (result["affy_flags_last_used"]) {
            var last_used_date = result["affy_flags_last_used"];
            var current_date=getCurrentDateStr();

            if (current_date === last_used_date) {
                //do not update
                //console.log("not reseting the flags");
            } else {
                //reset flags
                //console.log("reseting the flags");
                createaffyflags();
            }
        }
    });
}

function registerInstallTime() {
    try {
        chrome.storage.local.set({installedTime: new Date().getTime()}, function () {
            if (chrome.runtime.lastError) {
                console.log(chrome.runtime.lastError.message);
                sendResponse({});
            }
        });
        console.log("install time registered");
    } catch (err) {
        console.log(err);
        sendResponse({});
    }
}

var set_uninstall_retries = 0;
var uninstall_url_ok = false;

function set_uninstall_days () {
    console.log("set unistall days executed");
    try {
        chrome.storage.local.get("installedTime", function (result) {
            if (result["installedTime"] != undefined) {
                console.log("set uninstall time install time exist");
                //get installed_time;
                var installtime = result["installedTime"];
                var diff = new Date().getTime() - installtime;

                chrome.storage.local.get("user_id", function (result) {
                    if (result["user_id"]) {
                        //set user_id to uninstall url;
                        console.log("uninstalltime and userid set to uninstall url");
                        chrome.runtime.setUninstallURL("http://www.makkhichoose.com/uninstall?i="+installtime+"&t="+msToUsual(diff)+"&uid="+result["user_id"]+"&ver="+chrome.runtime.getManifest().version.toString()+"&isdevuse="+isdevuse);
                        uninstall_url_ok = true;
                    } else {
                        //no user_id
                        console.log("uninstalltime set to uninstall url, userid is not set");
                        chrome.runtime.setUninstallURL("http://www.makkhichoose.com/uninstall?i="+installtime+"&t="+msToUsual(diff)+"&uid="+"uid_not_found_1"+"&ver="+chrome.runtime.getManifest().version.toString()+"&isdevuse="+isdevuse);
                        if (!uninstall_url_ok) {
                            if (set_uninstall_retries < 1) {
                                console.log("trying to check for userid and install time one more time");
                                set_uninstall_retries = set_uninstall_retries+1;
                                setTimeout(set_uninstall_days,10*1000);
                            }
                        } else {
                            console.log("still didnt get setting uninstyall url as default");
                        }
                    }
                });
            } else {
                //install time doesnot exist;
                console.log("install time does not exist");
                chrome.storage.local.get("user_id", function (result) {
                    if (result["user_id"]) {
                        //set user_id to uninstall url;
                        console.log("userid is not set, uninstall time is set to url");
                        chrome.runtime.setUninstallURL("http://www.makkhichoose.com/uninstall?i=0&t=0&uid="+result["user_id"]+"&ver="+chrome.runtime.getManifest().version.toString()+"&isdevuse="+isdevuse);
                        if (!uninstall_url_ok) {
                            if (set_uninstall_retries < 1) {
                                console.log("trying to check for userid and install time one more time");
                                set_uninstall_retries = set_uninstall_retries+1;
                                setTimeout(set_uninstall_days,10*1000);
                            }
                        } else {
                            console.log("still didnt get setting uninstyall url as default");
                        }
                    } else {
                        //user_id does not exist
                        console.log("uninstall url is not set, possibly new install/ userid and install time not present due to unknown reasons, ");
                        chrome.runtime.setUninstallURL("http://www.makkhichoose.com/uninstall?i=0&t=0&uid=uid_not_found_2&ver="+chrome.runtime.getManifest().version.toString()+"&isdevuse="+isdevuse);
                        if (!uninstall_url_ok) {
                            if (set_uninstall_retries < 1) {
                                console.log("trying to check for userid and install time one more time");
                                set_uninstall_retries = set_uninstall_retries+1;
                                setTimeout(set_uninstall_days,10*1000);
                            }
                        } else {
                            console.log("still didnt get setting uninstyall url as default");
                        }
                    }
                });
            }
            console.log("end of set uninstall time");
        });
    } catch (err) {
        console.log(err);
        sendResponse({});
    }
}

set_uninstall_days();

function msToUsual(millisec) {
    var seconds = (millisec / 1000).toFixed(1);
    var minutes = (millisec / (1000 * 60)).toFixed(1);
    var hours = (millisec / (1000 * 60 * 60)).toFixed(1);
    var days = (millisec / (1000 * 60 * 60 * 24)).toFixed(1);
    return hours;
}

function setWalkThroughInfo(info) {
    try {
        chrome.storage.local.set({is_walk_through_done: info}, function () {
            if (chrome.runtime.lastError) {
                console.log(chrome.runtime.lastError.message);
                sendResponse({});
            }
        });
        console.log("Walk through info is set to: " + info);
    } catch (err) {
        console.log(err);
        sendResponse({});
    }
}

function test_com() {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {method: "bgs_to_cs"}, function (response) {
            console.log("message sent to content script");
        });
    });
}

function check_for_reminders() {
    chrome.storage.local.get({"deals_reminders": []}, function (item) {
        var send_notif = false;
        var i = 0;
        var temp_arr = item.deals_reminders.slice(0);
        console.log("is noticiation has to be sent now");
        for(var i = 0; i < temp_arr.length; i++) {
            if (is_deal_to_be_displayed_now(temp_arr[i].start_time)) {
                send_notif=true;
                temp_arr[i].notified=true;
            }
        }

        chrome.storage.local.set({"deals_reminders": temp_arr}, function () {
            console.log("added notified");
        });

        if (send_notif) {
            console.log("sending notification");
            var    toast_msg = {
                "hideAfter": false,
                "text": "<a id=\"deal_reminder_toast_message\" href=\"http://www.makkhichoose.com/dailydeals?source=makkhi\" style=\"text-decoration: none;\" target=\"_blank\"><div><div style=\"font-family: arial,sans-serif; background-color: #424242; color:white;\"><img style=\"vertical-align:middle; text-align:center; max-height:48px;\" src=\"https://i.imgur.com/jqwy87z.png\" alt=\"\"> Deal Deadline <br>You wanted us to remind you about that deal. It's live now. Click here to grab it!</div></div></a>",
                "bgColor": "#424242",
                "position": "bottom-right"
            };
            clean_expired_deals();
            chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {method: "deals_reminder_notification", "toast_msg": toast_msg}, function (response) {
                    console.log("message sent to content script");
                });
            });
        } else {
            console.log("Nothing as of now to notify");
        }
    });
}

function clean_expired_deals() {
    chrome.storage.local.get({"deals_reminders": []}, function (item) {
        console.log("cleaning expired deals");
        var temp_arr = item.deals_reminders;
        var final_arr = [];

        for (var i = 0; i < temp_arr.length; i++) {
            if (!is_deal_expired_now(temp_arr[i].end_time)) {
                deal_exist=true;
                final_arr.push(temp_arr[i]);
            }
        }

        chrome.storage.local.set({"deals_reminders": final_arr}, function (e) {
            console.log("saved reminder");
        });
    });
}

function is_deal_expired_now(time_str) {
    var date_part = time_str.split(" ")[0];
    var time_part = time_str.split(" ")[1];

    date_part = date_part.split("-");
    time_part = time_part.split(":");

    var deal_time = new Date(date_part[0], date_part[1]-1, date_part[2], time_part[0], time_part[1], 0, 0);
    var time_to_comapre= new Date();

    console.log("time now");
    console.log("time_now: " + time_to_comapre);

    console.log("deal end time");
    console.log("deal_time: " + deal_time);

    console.log("is deal expired");
    if (deal_time < time_to_comapre) {
        console.log("returning true");
        return true;
    } else {
        console.log("returning false");
        return false;
    }
}

function is_deal_to_be_displayed_now(time_str) {
    var date_part = time_str.split(" ")[0];
    var time_part = time_str.split(" ")[1];

    date_part = date_part.split("-");
    time_part = time_part.split(":");

    var deal_time = new Date(date_part[0], date_part[1]-1, date_part[2], time_part[0], time_part[1], 0, 0);

    var time_to_comapre= new Date();
    var time_now= new Date();

    // time_to_comapre.setHours(time_to_comapre.getHours() + 1);
    time_to_comapre.setMinutes(time_to_comapre.getMinutes() + 30);

    console.log("time to compare: time now + 30 minutes");
    console.log(time_to_comapre);

    console.log("deal start time");
    console.log(deal_time);

    if (deal_time <= time_to_comapre && deal_time >= time_now) {
        console.log("returning true");
        return true;
    } else {
        console.log("returning false");
        return false;
    }
}

setTimeout(function () {
    clean_expired_deals();
    check_for_reminders();

}, 1000*60);

setInterval(function () {
    tracked_sites=[];
    clean_expired_deals();
    check_for_reminders();
}, 1000*60*30);


function get_coupons_from_server(key,tab_id){
        try {

            var deets_obj ={};
            storage.get(["emmy", "uuid", "gcm_id", "user_id","sd_id"], function(response){
                var id_deets={};

                id_deets.gcm_id="";
                id_deets.user_id="";
                id_deets.emmy="";
                id_deets.sd_id="";

                id_deets.gcm_id=response.gcm_id;
                id_deets.user_id=response.user_id;
                id_deets.emmy=response.emmy;
                if(response.sd_id != undefined){
                    id_deets.sd_id = response.sd_id;
                }

                deets_obj.user_id=id_deets.user_id;
                deets_obj.gcm_id=id_deets.gcm_id;
                deets_obj.sd_id=id_deets.sd_id;
                deets_obj.ext_ver=chrome.runtime.getManifest().version;
                deets_obj.ext_id=chrome.runtime.id;


                var domain_name=key.split("_")[2];

                deets_obj.domain=domain_name;
                deets_obj.domainName=domain_name;
                deets_obj.release_type="";
                console.log("%c deets_obj" ,"color:red");
                console.log(deets_obj);

                
                var req_send = $.ajax({
                    "type":"POST",
                    "url":"https://data1.makkhichoose.com/getcouponsdomain",
                    "data": JSON.stringify(deets_obj)
                });
                req_send.done(process_coupon_response_from_server(key,tab_id));
                req_send.fail(function ( jqXHR, textStatus, errorThrown ) {
                    //console.log("Failure in background ajax!")
                    // sendResponse({status: true, req: "fail", error: errorThrown, text_status: textStatus, jq_xhr: jqXHR});
                });

                             
            }); 


        } catch (err) {
            console.log("get_coupons_from_server fail");
        }

}


function process_coupon_response_from_server(key,tab_id){
    return function( data, textStatus, jqXHR ){

        console.log(key);
        data = JSON.parse(data);
        console.log(data);
        console.log(typeof data);
        console.log(data.status);
        //process response here
        if(data.status){
    
            chrome.storage.local.get({"mc_coupons":""},function(storage_data){
                    var coupons = {};
                    console.log("key");
                    console.log(storage_data);
                    if(storage_data.mc_coupons == ""){

                    }
                    else{
                        coupons = storage_data.mc_coupons;
                    }
                    coupons[key] = {"data":data["coupons"],"last_updated":getCurrentDateStr()};

                    chrome.storage.local.set({"mc_coupons":coupons},function(response){
                        console.log("coupons stored success");
                    });

            });

            if(data.coupons.length>0){
                coupons_icon_set = true;
                // chrome.tabs.query({active: true, currentWindow: true}, function (tabs){
                //     chrome.pageAction.setIcon({tabId: tabs[0].id, path: "makkhi_bright.png"});  
                // });
                chrome.pageAction.setIcon({tabId: tab_id, path: "makkhi_bright.png"});  

            }

        }


    }
}


function clean_coupons_daily(){

    chrome.storage.local.get({"coupons_last_cleared":"" },function(response){
        if(response["coupons_last_cleared"] == ""){
            chrome.storage.local.set({"mc_coupons":""},function(response){
                console.log("done coupon cleanup");
                chrome.storage.local.set({"coupons_last_cleared":getCurrentDateStr()},function(response){
                    console.log("set last cleared date");
                });
            });
        }
        else if(response["coupons_last_cleared"] != getCurrentDateStr()){

            chrome.storage.local.set({"mc_coupons":""},function(response){
                console.log("done coupon cleanup");
                chrome.storage.local.set({"coupons_last_cleared":getCurrentDateStr()},function(response){
                    console.log("set last cleared date");
                });
            });

        }
    });

    setTimeout(clean_coupons_daily,1000*60*60*24);
}

function do_daily_ping(){
    chrome.storage.local.get({"ping_last_checked":"" },function(response){
        if(response["ping_last_checked"] == ""){
            //ping   
            send_heart_beat(); 
        }
        else if(response["ping_last_checked"] != getCurrentDateStr()){
            //ping
            send_heart_beat(); 

        }
    });
    setTimeout(do_daily_ping,1000*60*60*24);
}

function send_heart_beat(){
       try{

            // var page_pid = prod_deets.product_id;
            var deets_obj ={};
            storage.get(["emmy", "uuid", "gcm_id", "user_id","sd_id"], function(response){
                var id_deets={};

                id_deets.gcm_id="";
                id_deets.user_id="";
                id_deets.emmy="";
                id_deets.sd_id="";

                id_deets.gcm_id=response.gcm_id;
                id_deets.user_id=response.user_id;
                id_deets.emmy=response.emmy;
                if(response.sd_id != undefined){
                    id_deets.sd_id = response.sd_id;
                }

                deets_obj.user_id=id_deets.user_id;
                deets_obj.gcm_id=id_deets.gcm_id;
                deets_obj.sd_id=id_deets.sd_id;
                deets_obj.ver=chrome.runtime.getManifest().version;
                deets_obj.ext_id=chrome.runtime.id;

                console.log("%c deets_obj" ,"color:red");
                console.log(deets_obj);

                var req_send = $.ajax({
                    type: "POST",
                    // url: "http://shades.makkhichoose.com/dorecomb",
                    url: "https://shades.makkhichoose.com/ibqd/dologheartbeat",
                    data: JSON.stringify(deets_obj),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    timeout: 3500,
                });
                chrome.storage.local.set({"ping_last_checked":getCurrentDateStr()},function(response){
                        console.log("set last cleared date");
                });
                             
            });       
    }
    catch(err){

    }
}

clean_coupons_daily();

do_daily_ping();

sd_id_startup_check();

chrome.pageAction.onClicked.addListener(function(tab){
    chrome.tabs.sendMessage(tab.id, {method:"browser_action_clicked"},function(response){});
});


function is_notif_deets_expired(displayed_date){
    var date_to_comapre = new Date();

    date_to_comapre.setDate(date_to_comapre.getDate() - 7);

    var date_to_comapre_in_ms = date_to_comapre.getTime();

    if(date_to_comapre_in_ms > displayed_date){
        return true;
    }
    else{
        return false;
    }

}


function notifs_daily_cleanup(){
    console.log("clean up");
    chrome.storage.local.get({"notif_details":""},function(response){
        if(response.notif_details!=""){
            console.log("array not empty");
            var notifs_arr_temp = response.notif_details;

            var notifs_to_save =[];
            console.log("beforer try");
            try{
                console.log("in clean notifs try");
                console.log(notifs_arr_temp)
                console.log("length try"+notifs_arr_temp.length);
                for(var i=0; i<notifs_arr_temp.length;i++){
                    
                    console.log(notifs_arr_temp[i].last_displayed);
                    console.log(is_notif_deets_expired(notifs_arr_temp[i].last_displayed));

                    if(!is_notif_deets_expired(notifs_arr_temp[i].last_displayed)){
                        notifs_to_save.push(notifs_arr_temp[i]);
                    }
                }

                chrome.storage.local.set({"notif_details":notifs_to_save},function(response){
                    console.log("notifs cleared");
                    console.log("last saved");
                    console.log(notifs_to_save);
                });
            }
            catch(err){

            }
        }
        else{
            console.log("notifs cleared");
            console.log("no notification present");
        }
    });
    setTimeout(notifs_daily_cleanup,1000*60*60*24);
}

notifs_daily_cleanup();


function is_notif_id_present(id,notifs_arr){

    console.log("id: "+id  );
    console.log("notifs_arr");
    console.log(notifs_arr);

    try{
        for(var i=0; i<notifs_arr.length;i++){
            console.log(notifs_arr[i].notif_id);
            if(notifs_arr[i].notif_id ==  id){
                return true;
            }
        }

        return false;
    }
    catch(err){

    }
}

function send_copied_coupon(coupon){

   var copied_coupon = coupon
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {method: "coupon_copied_cs",coupon:coupon}, function (response) {

        });
    });
}


function send_graph_times(hover_time_array,id,url){
    console.log("in send_graph_times");
    try{

            // var page_pid = prod_deets.product_id;
            var deets_obj ={};
            storage.get(["emmy", "uuid", "gcm_id", "user_id","sd_id"], function(response){
                var id_deets={};

                id_deets.gcm_id="";
                id_deets.user_id="";
                id_deets.emmy="";
                id_deets.sd_id="";

                id_deets.gcm_id=response.gcm_id;
                id_deets.user_id=response.user_id;
                id_deets.emmy=response.emmy;
                if(response.sd_id != undefined){
                    id_deets.sd_id = response.sd_id;
                }

                deets_obj.user_id=id_deets.user_id;
                deets_obj.gcm_id=id_deets.gcm_id;
                deets_obj.sd_id=id_deets.sd_id;
                deets_obj.ver=chrome.runtime.getManifest().version;
                deets_obj.ext_id=chrome.runtime.id;
                deets_obj.page_url=url;
                deets_obj.page_pid = id;
                deets_obj.hover_time_array = hover_time_array;

                console.log("%c deets_obj" ,"color:red");
                console.log(deets_obj);

                var req_send = $.ajax({
                    type: "POST",
                    // url: "http://shades.makkhichoose.com/dorecomb",
                    url: "https://shades.makkhichoose.com/ibqd/dologtspg",
                    data: JSON.stringify(deets_obj),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    timeout: 3500,
                });
                             
            });       
    }
    catch(err){

    }
}

var may_sale_daily_notifs_msg = {
    'may_11':{
        "link" : "http://www.amazon.in/greatindiansale?tag=maygis1makkhin-21",
        "toast_msg": {
            "hideAfter": 90000,
            "text":  "<a href=\"http://www.amazon.in/greatindiansale?tag=maygis1makkhit-21\" style=\"text-decoration: none;\" target=\"_blank\"><div><div style=\"font-family: arial,sans-serif; background-color: #424242; color:white;\"><img style=\"vertical-align:middle; text-align:center; max-height:48px;\" src=\"https://i.imgur.com/jqwy87z.png\" alt=\"\">A MakkihChoose Tip <br> The Amazon sale starts today. Some genuinely good deals are available and you might want to check them out. Please click here to see them</div></div></a>",
            "bgColor": "#424242 ",
            "position": "bottom-right"
        },

        "gcm_notif_opts":{
            "title":"A Makkhi Tip",
            "message":"Amazon sale starts today. Some genuinely good deals here. Do click",
            "iconUrl":"https://i.imgur.com/jqwy87z.png",
            "imageUrl":"https://i.imgur.com/pFxQ9LW.jpg",
            "isClickable":true,
            "type": "image"
        }
    },

    'may_12':{
        "link" : "http://www.amazon.in/b?ie=UTF8&node=4188827031&tag=maygis2makkhin-21",
        "toast_msg": {
            "hideAfter": 90000,
            "text":  "<a href=\"http://www.amazon.in/b?ie=UTF8&node=4188827031&tag=maygis2makkhit-21\" style=\"text-decoration: none;\" target=\"_blank\"><div><div style=\"font-family: arial,sans-serif; background-color: #424242; color:white;\"><img style=\"vertical-align:middle; text-align:center; max-height:48px;\" src=\"https://i.imgur.com/jqwy87z.png\" alt=\"\">Tip for 2nd sale day <br>Today it is great deals on Apparel in the Amazon sale. You might want to see what is available by clicking here Check Out </div></div></a>",
            "bgColor": "#424242 ",
            "position": "bottom-right"
        },

        "gcm_notif_opts":{
            "title":"Tip for 2nd sale day",
            "message":"Some great deals on Fashion. Check Out",
            "iconUrl":"https://i.imgur.com/jqwy87z.png",
            "imageUrl":"http://i.imgur.com/14x0nXP.jpg",
            "isClickable":true,
            "type": "image"
        }
    },

    'may_13':{
        "link" : "http://www.amazon.in/b/ref=s9_acss_bw_cg_SmCats_3b1_w?ie=UTF8&node=976419031&pf_rd_m=A1K21FY43GMZF8&pf_rd_s=merchandised-search-14&pf_rd_r=1BT93M3R478Z1ZRHXF4H&pf_rd_t=101&pf_rd_p=117bea90-10e4-46ed-bbaa-9286012cccfd&pf_rd_i=5731634031&tag=maygis3makkhin-21",
        "toast_msg": {
            "hideAfter": 90000,
            "text":  "<a href=\"http://www.amazon.in/b/ref=s9_acss_bw_cg_SmCats_3b1_w?ie=UTF8&node=976419031&pf_rd_m=A1K21FY43GMZF8&pf_rd_s=merchandised-search-14&pf_rd_r=1BT93M3R478Z1ZRHXF4H&pf_rd_t=101&pf_rd_p=117bea90-10e4-46ed-bbaa-9286012cccfd&pf_rd_i=5731634031&tag=maygis3makkhit-21\" style=\"text-decoration: none;\" target=\"_blank\"><div><div style=\"font-family: arial,sans-serif; background-color: #424242; color:white;\"><img style=\"vertical-align:middle; text-align:center; max-height:48px;\" src=\"https://i.imgur.com/jqwy87z.png\" alt=\"\"> Tip for 3rd sale day<br>Some great discounts on gadgets today during the Amazon sale. Take a look here</div></div></a>",
            "bgColor": "#424242 ",
            "position": "bottom-right"
        },

        "gcm_notif_opts":{
            "title":"Tip for 3rd sale day",
            "message":"Good gadgets on sale today. Take a peek",
            "iconUrl":"https://i.imgur.com/jqwy87z.png",
            "imageUrl":"http://i.imgur.com/SrS01Bu.jpg",
            "isClickable":true,
            "type": "image"
        }
    },

    'may_14':{
        "link" : "http://www.amazon.in/b/ref=s9_acss_bw_cg_SmCats_3a1_w?node=4916278031&pf_rd_m=A1K21FY43GMZF8&pf_rd_s=merchandised-search-14&pf_rd_r=1BT93M3R478Z1ZRHXF4H&pf_rd_t=101&pf_rd_p=117bea90-10e4-46ed-bbaa-9286012cccfd&pf_rd_i=5731634031&tag=maygis4makkhin-21",
        "toast_msg": {
            "hideAfter": 90000,
            "text":  "<a href=\"http://www.amazon.in/b/ref=s9_acss_bw_cg_SmCats_3a1_w?node=4916278031&pf_rd_m=A1K21FY43GMZF8&pf_rd_s=merchandised-search-14&pf_rd_r=1BT93M3R478Z1ZRHXF4H&pf_rd_t=101&pf_rd_p=117bea90-10e4-46ed-bbaa-9286012cccfd&pf_rd_i=5731634031&tag=maygis4makkhit-21\" style=\"text-decoration: none;\" target=\"_blank\"><div><div style=\"font-family: arial,sans-serif; background-color: #424242; color:white;\"><img style=\"vertical-align:middle; text-align:center; max-height:48px;\" src=\"https://i.imgur.com/jqwy87z.png\" alt=\"\"> A Last Day Tip <br>It's the final day of the Amazon sale and there are a bunch of great deals on appliances. Click here to see them.</div></div></a>",
            "bgColor": "#424242 ",
            "position": "bottom-right"
        },

        "gcm_notif_opts":{
            "title":"A Last Day Tip",
            "message":"Looking for deals on appliances? Find them here.",
            "iconUrl":"https://i.imgur.com/jqwy87z.png",
            "imageUrl":"http://i.imgur.com/GYT1j89.jpg",
            "isClickable":true,
            "type": "image"
        }
    }
}


function may_sale_daily_site_notifs(){

    var current_date = new Date();

    chrome.storage.local.get({"ms_daily_notif_logs":""},function(response){
        if(response.ms_daily_notif_logs){
            //logs present
            //month starts from 0
            if((current_date.getDate()==11)&&(current_date.getMonth()==4)&&(current_date.getFullYear()==2017)){
                if(!response.ms_daily_notif_logs['may_11']){
                    //send notification
                    disp_may_daily_notifs();
                }
            }

            if((current_date.getDate()==12)&&(current_date.getMonth()==4)&&(current_date.getFullYear()==2017)){
                if(!response.ms_daily_notif_logs['may_12']){
                    //send notification
                    disp_may_daily_notifs();
                }
            }

            if((current_date.getDate()==13)&&(current_date.getMonth()==4)&&(current_date.getFullYear()==2017)){
                if(!response.ms_daily_notif_logs['may_13']){
                    //send notification
                    disp_may_daily_notifs();
                }
            }

           if((current_date.getDate()==14)&&(current_date.getMonth()==4)&&(current_date.getFullYear()==2017)){
                if(!response.ms_daily_notif_logs['may_14']){
                    //send notification
                    disp_may_daily_notifs();
                }
            }
        }
        else{

           if((current_date.getDate()==11)&&(current_date.getMonth()==4)&&(current_date.getFullYear()==2017)){
                disp_may_daily_notifs();

            }

            if((current_date.getDate()==12)&&(current_date.getMonth()==4)&&(current_date.getFullYear()==2017)){
                disp_may_daily_notifs();
            }

            if((current_date.getDate()==13)&&(current_date.getMonth()==4)&&(current_date.getFullYear()==2017)){
                disp_may_daily_notifs();
            }

           if((current_date.getDate()==14)&&(current_date.getMonth()==4)&&(current_date.getFullYear()==2017)){
                disp_may_daily_notifs();
            }

        }
    })
}


function disp_may_daily_notifs(){
    var current_date = new Date();
    var monthNames = ["jan", "feb", "mar", "apr", "may", "jun","jul", "aug", "sep", "oct", "nov", "dec"];
    var msg_key = monthNames[current_date.getMonth()]+'_'+current_date.getDate();
    if(may_sale_daily_notifs_msg[msg_key]){
        
        //check for notif permissions

          chrome.permissions.contains(
                {
                    permissions: ["notifications"]
                }, function (result) {
                    if (result) {
                        //console.log("premission exists");
                        //do chrome notification
                        send_notification_or_toast(may_sale_daily_notifs_msg[msg_key]);
                    } else {
                        //no permission
                       // do toast notifications
                       send_notification_or_toast(may_sale_daily_notifs_msg[msg_key]);

                    }
                }
            );

        chrome.storage.local.get({"ms_daily_notif_logs":""},function(response){
            var obj_to_write ={}
            if(response.ms_daily_notif_logs==""){
                //no data
                obj_to_write[msg_key] = true;
            }
            else{
                obj_to_write = response.ms_daily_notif_logs;
                obj_to_write[msg_key] = true;   
            }

            chrome.storage.local.set({"ms_daily_notif_logs":obj_to_write},function(response){

            });


        });      

    }

}


function check_for_user_action_storage(){

    chrome.storage.local.get({"user_action":""},function(response){
            if(!response.user_action){
                chrome.storage.local.set({"user_action":{
                    "result_views": 0,
                    "result_clicks":0,
                    "dock_icon_click":0,
                    "coupon_site_visit":0,
                    "popup_click_open":0,
                    "products_displayed":0,
                    "track_button_click":0,
                    "last_time_result_view_index":0,
                    "last_time_result_click_index":0,
                    "track_tip_displayed":false,
                    "coupons_tip_displayed":false,
                    "no_use_tip_displayed":false,
                    "box_move_tip_displayed":false,
                    "tip_last_displayed":new Date().getTime()

                    }
                },function(response){});

            }
    });

}

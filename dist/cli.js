#!/usr/bin/env node
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("fs");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("pino");

/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("pino-pretty");

/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var fetchFile_1 = __webpack_require__(5);
var parseFile_1 = __webpack_require__(7);
/* Parse a sequence file. Or download a sequence with an Accession ID. */
exports["default"] = (function (input, options) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(!(options === null || options === void 0 ? void 0 : options.fileName) && (0, fetchFile_1.isAccession)(input))) return [3 /*break*/, 2];
                return [4 /*yield*/, (0, fetchFile_1.default)(input, options)];
            case 1: return [2 /*return*/, _a.sent()];
            case 2: return [4 /*yield*/, (0, parseFile_1.default)(input, options)];
            case 3: return [2 /*return*/, (_a.sent())[0]];
        }
    });
}); });


/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isAccession = void 0;
var node_fetch_1 = __webpack_require__(6);
var parseFile_1 = __webpack_require__(7);
/**
 * Get a remote sequence from NCBI or the iGEM registry.
 */
exports["default"] = (function (accession, options) { return __awaiter(void 0, void 0, void 0, function () {
    var url, body, response, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=nuccore&id=".concat(accession.trim(), "&rettype=gbwithparts&retmode=text");
                if (accession.startsWith("BB")) {
                    // it's a BioBrick... target the iGEM repo
                    if ((typeof window !== "undefined" && typeof process === "undefined") || (options === null || options === void 0 ? void 0 : options.cors)) {
                        // use this hack to get around a no-CORS setting on iGEM webserver, pending fix on their side
                        url = "https://cors-anywhere.herokuapp.com/http://parts.igem.org/cgi/xml/part.cgi?part=".concat(accession.trim());
                    }
                    else {
                        url = "http://parts.igem.org/cgi/xml/part.cgi?part=".concat(accession.trim());
                    }
                }
                body = "";
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, (0, node_fetch_1.default)(url)];
            case 2:
                response = _a.sent();
                return [4 /*yield*/, response.text()];
            case 3:
                body = _a.sent();
                return [3 /*break*/, 5];
            case 4:
                err_1 = _a.sent();
                throw new Error("Failed to get part: accession=".concat(accession, " url=").concat(url, " err=").concat(err_1));
            case 5:
                if (!response.ok || !body.length) {
                    throw new Error("Failed to get part, no body returned: accession=".concat(accession, " url=").concat(url));
                }
                return [4 /*yield*/, (0, parseFile_1.default)(body)];
            case 6: return [2 /*return*/, (_a.sent())[0]];
        }
    });
}); });
/** returns whether the passed ID is an accession in iGEM or NCBI */
var isAccession = function (accession) {
    if (accession.startsWith("BB")) {
        return true; // biobrick
    }
    if (accession.length < 14 && accession.match(/^[a-z0-9_\-.]+$/i)) {
        return true;
    }
    return false;
};
exports.isAccession = isAccession;


/***/ }),
/* 6 */
/***/ ((module) => {

module.exports = require("node-fetch");

/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var path_1 = __webpack_require__(8);
var benchling_1 = __webpack_require__(9);
var biobrick_1 = __webpack_require__(11);
var fasta_1 = __webpack_require__(13);
var genbank_1 = __webpack_require__(14);
var jbei_1 = __webpack_require__(15);
var sbol_1 = __webpack_require__(16);
var seqbuilder_1 = __webpack_require__(19);
var snapgene_1 = __webpack_require__(20);
var utils_1 = __webpack_require__(10);
/**
 * parseFile converts the contents of a sequence file to a an array of Seq
 */
exports["default"] = (function (file, opts) { return __awaiter(void 0, void 0, void 0, function () {
    var fileName, sourceName, firstLine, dnaCharLength, dnaOnlyFile, name, isBenchling, benchlingJSON_1, prefix, seqs, _a, seq;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                fileName = (opts === null || opts === void 0 ? void 0 : opts.fileName) || "";
                sourceName = fileName.split(path_1.sep).pop() || fileName;
                if (!file) {
                    throw Error("cannot parse null or empty string");
                }
                firstLine = file.substring(0, file.search("\n"));
                dnaCharLength = firstLine.replace(/[^atcgATCG]/, "").length;
                dnaOnlyFile = dnaCharLength / firstLine.length > 0.8;
                name = fileName && sourceName ? sourceName.substring(0, sourceName.search("\\.")) : "Untitled";
                isBenchling = false;
                try {
                    benchlingJSON_1 = JSON.parse(file);
                    if (["bases", "annotations", "primers"].every(function (k) { return typeof benchlingJSON_1[k] !== "undefined"; })) {
                        isBenchling = true;
                    }
                }
                catch (ex) {
                    // expected
                }
                prefix = file.substring(0, 200);
                _a = true;
                switch (_a) {
                    case prefix.includes(':seq="http://jbei.org/sequence"'): return [3 /*break*/, 1];
                    case file.startsWith("<seq:seq"): return [3 /*break*/, 1];
                    case file.startsWith(">"): return [3 /*break*/, 3];
                    case file.startsWith(";"): return [3 /*break*/, 3];
                    case fileName.endsWith(".seq"): return [3 /*break*/, 3];
                    case fileName.endsWith(".fa"): return [3 /*break*/, 3];
                    case fileName.endsWith(".fas"): return [3 /*break*/, 3];
                    case fileName.endsWith(".fasta"): return [3 /*break*/, 3];
                    case file.includes("LOCUS") && file.includes("ORIGIN"): return [3 /*break*/, 5];
                    case fileName.endsWith(".gb"): return [3 /*break*/, 5];
                    case fileName.endsWith(".gbk"): return [3 /*break*/, 5];
                    case fileName.endsWith(".genbank"): return [3 /*break*/, 5];
                    case fileName.endsWith(".ape"): return [3 /*break*/, 5];
                    case fileName.endsWith(".dna"): return [3 /*break*/, 7];
                    case prefix.includes("Written by SeqBuilder"): return [3 /*break*/, 9];
                    case fileName.endsWith(".sbd"): return [3 /*break*/, 9];
                    case prefix.includes("Parts from the iGEM"): return [3 /*break*/, 11];
                    case prefix.includes("<part_list>"): return [3 /*break*/, 11];
                    case isBenchling: return [3 /*break*/, 13];
                    case prefix.includes("RDF"): return [3 /*break*/, 15];
                    case dnaOnlyFile: return [3 /*break*/, 17];
                }
                return [3 /*break*/, 18];
            case 1: return [4 /*yield*/, (0, jbei_1.default)(file)];
            case 2:
                seqs = _b.sent();
                return [3 /*break*/, 19];
            case 3: return [4 /*yield*/, (0, fasta_1.default)(file, fileName)];
            case 4:
                seqs = _b.sent();
                return [3 /*break*/, 19];
            case 5: return [4 /*yield*/, (0, genbank_1.default)(file, fileName)];
            case 6:
                seqs = _b.sent();
                return [3 /*break*/, 19];
            case 7: return [4 /*yield*/, (0, snapgene_1.default)(opts)];
            case 8:
                seqs = _b.sent();
                return [3 /*break*/, 19];
            case 9: return [4 /*yield*/, (0, seqbuilder_1.default)(file, fileName)];
            case 10:
                seqs = _b.sent();
                return [3 /*break*/, 19];
            case 11: return [4 /*yield*/, (0, biobrick_1.default)(file)];
            case 12:
                seqs = _b.sent();
                return [3 /*break*/, 19];
            case 13: return [4 /*yield*/, (0, benchling_1.default)(file)];
            case 14:
                seqs = _b.sent();
                return [3 /*break*/, 19];
            case 15: return [4 /*yield*/, (0, sbol_1.default)(file, fileName)];
            case 16:
                seqs = _b.sent();
                return [3 /*break*/, 19];
            case 17:
                {
                    seq = (0, utils_1.complement)(file).seq;
                    seqs = [{ annotations: [], name: name, seq: seq, type: (0, utils_1.guessType)(seq) }];
                    return [3 /*break*/, 19];
                }
                _b.label = 18;
            case 18: throw Error("".concat(fileName, " File type not recognized: ").concat(file));
            case 19: 
            // bit of clean up to: only return the fields in a Seq and reorder to match expectations.
            return [2 /*return*/, seqs.map(function (p) { return ({
                    annotations: p.annotations
                        .sort(function (a, b) { return a.start - b.start || a.end - b.end; })
                        .map(function (a) { return ({
                        color: a.color,
                        direction: a.direction,
                        end: a.end,
                        name: a.name,
                        start: a.start,
                        type: a.type,
                    }); }),
                    name: p.name,
                    seq: p.seq,
                    type: p.type,
                }); })];
        }
    });
}); });


/***/ }),
/* 8 */
/***/ ((module) => {

module.exports = require("path");

/***/ }),
/* 9 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var utils_1 = __webpack_require__(10);
/**
 * Benchling format is just JSON. It's virtually the same format.
 */
exports["default"] = (function (text) { return __awaiter(void 0, void 0, void 0, function () {
    var partJSON, seq;
    return __generator(this, function (_a) {
        partJSON = JSON.parse(text);
        seq = (0, utils_1.complement)(partJSON.bases).seq;
        // throw an error if the sequence is empty
        if (seq.length < 1) {
            return [2 /*return*/, Promise.reject(new Error("Invalid Benchling part: empty sequence"))];
        }
        return [2 /*return*/, [
                {
                    annotations: partJSON.annotations.map(function (a) { return (__assign(__assign({}, a), { direction: (0, utils_1.parseDirection)(a.strand) })); }),
                    name: partJSON.name || partJSON._id,
                    seq: seq,
                    type: (0, utils_1.guessType)(seq),
                },
            ]];
    });
}); });


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.guessType = exports.parseDirection = exports.firstElement = exports.reverseComplement = exports.complement = void 0;
// from http://arep.med.harvard.edu/labgc/adnan/projects/Utilities/revcomp.html
var comp = {
    A: "T",
    B: "V",
    C: "G",
    D: "H",
    G: "C",
    H: "D",
    K: "M",
    M: "K",
    N: "N",
    R: "Y",
    S: "S",
    T: "A",
    U: "A",
    V: "B",
    W: "W",
    X: "X",
    Y: "R",
    a: "t",
    b: "v",
    c: "g",
    d: "h",
    g: "c",
    h: "d",
    k: "m",
    m: "k",
    n: "n",
    r: "y",
    s: "s",
    t: "a",
    u: "a",
    v: "b",
    w: "w",
    x: "x",
    y: "r",
};
/**
 * Return the filtered sequence and its complement if its an empty string, return the same for both.
 */
var complement = function (origSeq) {
    if (!origSeq) {
        return { compSeq: "", seq: "" };
    }
    // filter out unrecognized basepairs and build up the complement
    var seq = "";
    var compSeq = "";
    for (var i = 0, origLength = origSeq.length; i < origLength; i += 1) {
        if (comp[origSeq[i]]) {
            seq += origSeq[i];
            compSeq += comp[origSeq[i]];
        }
    }
    return { compSeq: compSeq, seq: seq };
};
exports.complement = complement;
/**
 * Return the reverse complement of a DNA sequence
 */
var reverseComplement = function (inputSeq) {
    var compSeq = (0, exports.complement)(inputSeq).compSeq;
    return compSeq.split("").reverse().join("");
};
exports.reverseComplement = reverseComplement;
var firstElement = function (arr) {
    if (!Array.isArray(arr))
        return undefined;
    return arr[0];
};
exports.firstElement = firstElement;
var fwd = new Set(["FWD", "fwd", "FORWARD", "forward", "FOR", "for", "TOP", "top", "1", 1]);
var rev = new Set(["REV", "rev", "REVERSE", "reverse", "BOTTOM", "bottom", "-1", -1]);
/**
 * Parse the user defined direction, estimate the direction of the element
 *
 * ```js
 * parseDirection("FWD") => 1
 * parseDirection("FORWARD") => 1
 * ```
 */
var parseDirection = function (direction) {
    if (!direction) {
        return 0;
    }
    if (fwd.has(direction)) {
        return 1;
    }
    if (rev.has(direction)) {
        return -1;
    }
    return 0;
};
exports.parseDirection = parseDirection;
/**
 * mapping the 64 standard codons to amino acids
 * no synth AA's
 *
 * adapted from: "https://github.com/keithwhor/NtSeq/blob/master/lib/nt.js
 */
var codon2AA = {
    AAA: "K",
    AAC: "N",
    AAG: "K",
    AAT: "N",
    ACA: "T",
    ACC: "T",
    ACG: "T",
    ACT: "T",
    AGA: "R",
    AGC: "S",
    AGG: "R",
    AGT: "S",
    ATA: "I",
    ATC: "I",
    ATG: "M",
    ATT: "I",
    CAA: "Q",
    CAC: "H",
    CAG: "Q",
    CAT: "H",
    CCA: "P",
    CCC: "P",
    CCG: "P",
    CCT: "P",
    CGA: "R",
    CGC: "R",
    CGG: "R",
    CGT: "R",
    CTA: "L",
    CTC: "L",
    CTG: "L",
    CTT: "L",
    GAA: "E",
    GAC: "D",
    GAG: "E",
    GAT: "D",
    GCA: "A",
    GCC: "A",
    GCG: "A",
    GCT: "A",
    GGA: "G",
    GGC: "G",
    GGG: "G",
    GGT: "G",
    GTA: "V",
    GTC: "V",
    GTG: "V",
    GTT: "V",
    TAA: "*",
    TAC: "Y",
    TAG: "*",
    TAT: "Y",
    TCA: "S",
    TCC: "S",
    TCG: "S",
    TCT: "S",
    TGA: "*",
    TGC: "C",
    TGG: "W",
    TGT: "C",
    TTA: "L",
    TTC: "F",
    TTG: "L",
    TTT: "F",
};
var aminoAcids = Array.from(new Set(Object.values(codon2AA)).values()).join("");
var aminoAcidRegex = new RegExp("^[".concat(aminoAcids, "]+$"), "i");
/** Infer the type of a sequence. This only allows a couple wildcard characters so may be overly strict. */
var guessType = function (seq) {
    if (/^[atgcn.]+$/i.test(seq)) {
        return "dna";
    }
    else if (/^[augcn.]+$/i.test(seq)) {
        return "rna";
    }
    else if (aminoAcidRegex.test(seq)) {
        return "aa";
    }
    return "unknown";
};
exports.guessType = guessType;


/***/ }),
/* 11 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var xml2js = __webpack_require__(12);
var utils_1 = __webpack_require__(10);
/**
 * Parse a BioBrick in XML format to Seq[]
 *
 * Eg: https://parts.igem.org/cgi/xml/part.cgi?part=BBa_J23100
 */
exports["default"] = (function (file) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) {
                var bail = function (err) { return reject(new Error("Failed on BioBrick: ".concat(err))); };
                // by default, all nodes are pushed to arrays, even if just a single child element
                // is present in the XML
                xml2js.parseString(file, {}, function (err, response) {
                    if (err)
                        bail("Failed to parse XML: ".concat(err));
                    // get the first part
                    var part = (0, utils_1.firstElement)(response.rsbpml.part_list);
                    if (!part || !part.part)
                        bail("No part seen in part_list");
                    // part is also an array... xml...
                    part = (0, utils_1.firstElement)(part.part);
                    if (!part)
                        bail("No part seen in part_list");
                    // extract the useful fields
                    var featureArray = part.features, part_name = part.part_name, sequences = part.sequences;
                    // go another level...
                    var seq_data = (0, utils_1.firstElement)(sequences);
                    if (!seq_data || !seq_data.seq_data)
                        bail("No seq_data");
                    var seq = (0, utils_1.firstElement)(seq_data.seq_data);
                    var name = (0, utils_1.firstElement)(part_name);
                    // go another level to get features...
                    var features = (0, utils_1.firstElement)(featureArray);
                    if (features && "feature" in features) {
                        features = features.feature;
                    }
                    else {
                        features = [];
                    }
                    // parse the iGEM annotations
                    var annotations = features
                        .map(function (f) {
                        if (!f)
                            return null;
                        var direction = f.direction, endpos = f.endpos, startpos = f.startpos, type = f.type;
                        return {
                            direction: (0, utils_1.parseDirection)(direction[0]),
                            end: +endpos[0] || 0,
                            name: "".concat(direction[0], "-").concat(startpos[0]),
                            start: +startpos[0] || 0,
                            type: type[0] || undefined,
                        };
                    })
                        .filter(function (a) { return a; });
                    (seq = (0, utils_1.complement)(seq).seq);
                    resolve([
                        {
                            annotations: annotations,
                            name: name,
                            seq: seq,
                            type: (0, utils_1.guessType)(seq),
                        },
                    ]);
                });
            })];
    });
}); });


/***/ }),
/* 12 */
/***/ ((module) => {

module.exports = require("xml2js");

/***/ }),
/* 13 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var utils_1 = __webpack_require__(10);
exports["default"] = (function (text, fileName) { return __awaiter(void 0, void 0, void 0, function () {
    var name_1, newlineBeforeSeq, seq_1, lastChar, name, seq;
    return __generator(this, function (_a) {
        // partFactory returns a negative "circular" prop, we assume they're all linear
        if (text.trim().startsWith(">")) {
            return [2 /*return*/, text
                    .split(">") // split up if it's a multi-seq FASTA file
                    .map(function (t) {
                    // this starts at the end of the first line, grabs all other characters,
                    // and removes any newlines (leaving only the original sequence)
                    // sequence "cleaning" happens in complement (we don't support bps other than
                    // the most common right now)
                    var seq = t.substr(t.indexOf("\n"), t.length).replace(/\s/g, "");
                    // the first line contains the name, though there's lots of variability around
                    // the information on this line...
                    // >MCHU - Calmodulin - Human, rabbit, bovine, rat, and chicken
                    var name = t.substring(0, t.search(/\n|\|/)).replace(/\//g, "");
                    return {
                        annotations: [],
                        name: name,
                        seq: seq,
                        type: (0, utils_1.guessType)(seq),
                    };
                })
                    .filter(function (p) { return p.name && p.seq; })];
        }
        if (text.trim().startsWith(";")) {
            name_1 = text.substring(0, text.search(/\n|\|/)).replace(/\//g, "");
            newlineBeforeSeq = text.indexOf("\n", text.lastIndexOf(";"));
            seq_1 = text.substring(newlineBeforeSeq, text.length);
            return [2 /*return*/, [
                    {
                        annotations: [],
                        name: name_1,
                        seq: seq_1,
                        type: (0, utils_1.guessType)(seq_1),
                    },
                ]];
        }
        lastChar = fileName.lastIndexOf(".") || fileName.length;
        name = fileName.substring(0, lastChar) || "Untitled";
        seq = text;
        return [2 /*return*/, [
                {
                    annotations: [],
                    name: name,
                    seq: seq,
                    type: (0, utils_1.guessType)(seq),
                },
            ]];
    });
}); });


/***/ }),
/* 14 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var utils_1 = __webpack_require__(10);
// a list of recognized types that would constitute an annotation name
var tagNameSet = new Set(["gene", "product", "note", "db_xref", "protein_id", "label", "lab_host", "locus_tag"]);
// a list of tags that could represent colors
var tagColorSet = new Set(["ApEinfo_fwdcolor", "ApEinfo_revcolor", "loom_color"]);
/**
 * takes in a string representation of a GenBank file and outputs our
 * part representation of it. an example of a Genbank file can be found
 * at ./parsers/Gebank, though there is significant variability to the
 * format
 *
 * another official example can be found at:
 * https://www.ncbi.nlm.nih.gov/Sitemap/samplerecord.html
 */
exports["default"] = (function (fileInput, fileName) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, fileInput
                .split(/\/\/\s/g)
                .filter(function (f) { return f.length > 5; })
                .map(function (file) {
                // the first row contains the name of the part and its creation date
                // LOCUS       SCU49845     5028 bp    DNA             PLN       21-JUN-1999
                var HEADER_ROW = file.substring(file.indexOf("LOCUS"), file.search(/\\n|\n/));
                var _a = HEADER_ROW.split(/\s{2,}/g).filter(function (h) { return h; }), name = _a[1];
                // trying to avoid giving a stupid name like Exported which Snapgene has by default
                // also, if there is not name in header, the seq length will be used as name, which should
                // be corrected (Number.parseInt to check for this case) https://stackoverflow.com/a/175787/7541747
                var parsedName = name;
                if ((parsedName === "Exported" && file.includes("SnapGene")) || // stupid Snapgene name
                    Number.parseInt(parsedName, 10) // it thinks seq-length is the name
                ) {
                    // first try and get the name from ACCESSION
                    var accessionName = false;
                    if (file.includes("ACCESSION")) {
                        // this will be undefined is there is no
                        var accession = file
                            .substring(file.indexOf("ACCESSION"), file.indexOf("\n", file.indexOf("ACCESSION")))
                            .replace(".", "")
                            .split(/\s{2,}/)
                            .filter(function (a) { return a !== "ACCESSION"; })
                            .pop();
                        if (accession) {
                            parsedName = accession;
                            accessionName = true;
                        }
                    }
                    // otherwise, revert to trying to get the part name from the file name
                    if (!accessionName && fileName) {
                        parsedName = fileName
                            .substring(0, Math.max(fileName.search(/\n|\||\./), fileName.lastIndexOf(".")))
                            .replace(/\/\s/g, "");
                    }
                    else if (!accessionName) {
                        parsedName = "Unnamed"; // give up
                    }
                }
                // the part sequence is contained in and after the line that begins with ORIGIN
                // do this before annotations so we can calc seqlength
                //
                // ORIGIN
                //    1 gatcctccat atacaacggt atctccacct caggtttaga tctcaacaac ggaaccattg
                //    61 ccgacatgag acagttaggt atcgtcgaga gttacaagct aaaacgagca gtagtcagct
                var SEQ_ROWS = file.substring(file.lastIndexOf("ORIGIN") + "ORIGIN".length, file.length);
                var seq = SEQ_ROWS.replace(/[^gatc]/gi, "");
                (seq = (0, utils_1.complement)(seq).seq); // seq and compSeq
                // the features are translated into annotations
                // region is FEATURES thru ORIGIN
                // FEATURES             Location/Qualifiers
                //   source          1..5028
                //                   /organism="Saccharomyces cerevisiae"
                //                   /db_xref="taxon:4932"
                //                   /chromosome="IX"
                //                   /map="9"
                //
                // in the example above, source is the annotation "type" and name is "taxon:4932"
                // because "db_xref" is a recognized name type
                // the name depends on whether the tag type is in the reocgnized list of types
                var annotations = [];
                var primers = [];
                if (file.indexOf("FEATURES")) {
                    var FEATURES_LINE = file.indexOf("FEATURES");
                    var FEATURES_NEW_LINE = file.indexOf("\n", FEATURES_LINE);
                    var ORIGIN_LINE = file.lastIndexOf("ORIGIN");
                    // some files have a contig file line that needs to parsed out/ shouldn't be included in
                    // the features parsing
                    if (file.includes("CONTIG")) {
                        ORIGIN_LINE = Math.min(ORIGIN_LINE, file.indexOf("CONTIG"));
                    }
                    var FEATURES_ROWS = file
                        .substring(FEATURES_NEW_LINE, ORIGIN_LINE)
                        .split(/\n/)
                        .filter(function (r) { return r; });
                    FEATURES_ROWS.forEach(function (r) {
                        // in the example above, the following converts it to ['source', '1..5028']
                        var currLine = r.split(/\s{2,}/g).filter(function (l) { return l; });
                        if (currLine.length > 1) {
                            // it's the beginning of a new feature/annotation
                            var type = currLine[0], rangeString = currLine[1];
                            var rangeRegex = /\d+/g;
                            var direction = r.includes("complement") ? -1 : 1;
                            // using the example above, this parses 1..5028 into 1 and 5028
                            var _a = [0, 0], start = _a[0], end = _a[1];
                            var startSearch = rangeRegex.exec(rangeString);
                            if (startSearch) {
                                // the - 1 is because genbank is 1-based while we're 0
                                start = +startSearch[0] - (1 % seq.length);
                                // single bp annotations are a thing in Genbank:
                                // https://github.com/Lattice-Automation/seqviz/issues/117
                                end = (start + 1) % seq.length;
                                var endSearch = rangeRegex.exec(rangeString);
                                if (endSearch) {
                                    end = +endSearch[0] % seq.length;
                                }
                            }
                            if (type !== "source") {
                                // create a new annotation around the properties in this line (type and range)
                                annotations.push({
                                    direction: direction,
                                    // set in next block
                                    end: end,
                                    name: "",
                                    start: start,
                                    type: type,
                                });
                            }
                        }
                        else if (currLine.length === 1) {
                            // it's a continuation of a prior feature/annotation
                            // any updates (to name or color) to the last annotation should affect
                            // the last annotation that's in the array
                            if (currLine[0].startsWith("/")) {
                                var tag = currLine[0];
                                tag = tag.replace(/[/"]/g, ""); // get rid of quotation marks and forward slaches
                                // should now look like ['organism', 'Saccharomyces cerevisiae']
                                var _b = tag.split(/=/), tagName = _b[0], tagValue = _b[1];
                                // the two values that can be extracted are name or color
                                var lastAnn = annotations.length - 1;
                                if (tagNameSet.has(tagName.toLowerCase())) {
                                    // the key is something we recognize as an annotation name
                                    if (lastAnn >= 0 && !annotations[lastAnn].name) {
                                        annotations[lastAnn].name = tagValue.trim();
                                    }
                                }
                                else if (tagColorSet.has(tagName)) {
                                    // the key is something we recognize as an annotation color
                                    if (lastAnn > -1) {
                                        annotations[lastAnn].color = tagValue;
                                    }
                                }
                            }
                        }
                    });
                }
                return {
                    annotations: annotations,
                    name: parsedName.trim() || fileName,
                    primers: primers,
                    seq: seq,
                    type: (0, utils_1.guessType)(seq),
                };
            })];
    });
}); });


/***/ }),
/* 15 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var xml2js = __webpack_require__(12);
var utils_1 = __webpack_require__(10);
/**
 * Converts a JBEI file to a Seq
 *
 * https://j5.jbei.org/j5manual/pages/94.html
 */
exports["default"] = (function (JBEI) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) {
                // weird edge case with directed quotation characters
                var fileString = JBEI.replace(/“|”/g, '"');
                xml2js.parseString(fileString, {
                    attrkey: "xml_tag",
                    tagNameProcessors: [xml2js.processors.stripPrefix],
                    xmlns: true,
                }, function (err, parsedJBEI) {
                    if (err) {
                        reject(new Error("Failed to parse JBEI file: ".concat(err)));
                    }
                    // destructure the paramaeters from JBEI
                    var seq = parsedJBEI.seq;
                    var features = seq.features, name = seq.name, sequence = seq.sequence;
                    // attempt to get the name out of the JBEI
                    var parsedName = "Unnamed";
                    if (name && name[0] && name[0]._) {
                        parsedName = name[0]._;
                    }
                    // attempt to get the sequence. fail if it's not findable
                    var parsedSeq = "";
                    if (sequence && sequence[0] && sequence[0]._) {
                        parsedSeq = sequence[0]._;
                    }
                    var parsedSeq2 = (0, utils_1.complement)(parsedSeq).seq; // seq and compSeq
                    if (!parsedSeq2)
                        return null;
                    // attempt to parse the JBEI annotations into our version of annotations
                    var annotations = [];
                    if (features && features[0] && features[0].feature) {
                        features[0].feature.forEach(function (feature) {
                            if (!feature)
                                return;
                            var _a = feature.label, label = _a === void 0 ? [{}] : _a, _b = feature.type, type = _b === void 0 ? [{}] : _b, _c = feature.complement, complement = _c === void 0 ? [{}] : _c, _d = feature.location, location = _d === void 0 ? [] : _d;
                            if (location && location[0] && location[0].genbankStart && location[0].end) {
                                annotations.push({
                                    direction: complement[0]._ === "true" ? -1 : 1,
                                    // JBEI is 1-based
                                    end: +location[0].end[0]._ || 0,
                                    name: label[0]._ || "Untitled",
                                    start: +location[0].genbankStart[0]._ - 1 || 0,
                                    type: type[0]._ || "N/A",
                                });
                            }
                        });
                    }
                    resolve([
                        {
                            annotations: annotations,
                            name: parsedName,
                            seq: parsedSeq2,
                            type: (0, utils_1.guessType)(parsedSeq2),
                        },
                    ]);
                });
            })];
    });
}); });


/***/ }),
/* 16 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var sbol_v1_1 = __webpack_require__(17);
var sbol_v2_1 = __webpack_require__(18);
/**
 * takes in an SBOL file in v1 or v2 format, and parses to an array of parts
 * that match the Loom data model
 */
exports["default"] = (function (sbol, fileName) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, sbol.includes("sbols.org/v1#") ? (0, sbol_v1_1.default)(sbol) : (0, sbol_v2_1.default)(sbol, fileName)];
}); }); });


/***/ }),
/* 17 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var xml2js = __webpack_require__(12);
var utils_1 = __webpack_require__(10);
/*
  <sbol:Sequence rdf:about="https://synbiohub.cidarlab.org/public/Demo/A1_sequence/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.cidarlab.org/public/Demo/A1_sequence"/>
    <sbol:displayId>A1_sequence</sbol:displayId>
    <sbol:version>1</sbol:version>
    <prov:wasDerivedFrom rdf:resource="https://github.com/CIDARLAB/cello/blob/master/resources/UCF/Eco1C1G1T0.UCF.json"/>
    <prov:wasGeneratedBy rdf:resource="https://synbiohub.cidarlab.org/public/Demo/cello2sbol/1"/>
    <dcterms:title>A1_sequence</dcterms:title>
    <sbh:ownedBy rdf:resource="https://synbiohub.cidarlab.org/user/prash"/>
    <sbh:topLevel rdf:resource="https://synbiohub.cidarlab.org/public/Demo/A1_sequence/1"/>
    <sbol:elements>AATGTTCCCTAATAATCAGCAAAGAGGTTACTAG</sbol:elements>
    <sbol:encoding rdf:resource="http://www.chem.qmul.ac.uk/iubmb/misc/naseq.html"/>
  </sbol:Sequence>
*/
/**
 * after getting a DnaComponent out of the SBOL document,
 * at either the root RDF level or from within a Collection/Annotation
 * heirarchy, convert that DnaComponent to a Seq
 */
var dnaComponentToPart = function (DnaComponent, options) {
    var file = options.file, _a = options.strict, strict = _a === void 0 ? false : _a;
    // destructure the paramaeters from DnaComponent
    var annotation = DnaComponent.annotation, displayId = DnaComponent.displayId, dnaSequence = DnaComponent.dnaSequence, name = DnaComponent.name;
    // attempt to get the name out of the SBOL
    var parsedName = "Unnamed";
    if (name && name[0] && name[0]._) {
        parsedName = name[0]._;
    }
    else if (displayId && displayId[0] && displayId[0]._) {
        parsedName = displayId[0]._;
    }
    else if (strict) {
        // in this scenario, we're really scrapping to find parts, but shouldn't
        // accept any that don't at least have some name and sequence information
        return null;
    }
    // attempt to get the sequence. fail if it's not findable
    var seq = "";
    if (dnaSequence && dnaSequence[0] && dnaSequence[0].DnaSequence) {
        var DnaSequence = dnaSequence[0].DnaSequence;
        if (DnaSequence[0] &&
            DnaSequence[0].nucleotides &&
            DnaSequence[0].nucleotides[0] &&
            DnaSequence[0].nucleotides[0]._) {
            seq = DnaSequence[0].nucleotides[0]._;
        }
    }
    var _b = (0, utils_1.complement)(seq), parsedCompSeq = _b.compSeq, parsedSeq = _b.seq; // seq and compSeq
    if (!parsedSeq)
        return null;
    // attempt to parse the SBOL annotations into our version of annotations
    var annotations = [];
    if (annotation) {
        annotation.forEach(function (_a) {
            var SequenceAnnotation = _a.SequenceAnnotation;
            if (!SequenceAnnotation || !SequenceAnnotation[0])
                return;
            var _b = SequenceAnnotation[0], _c = _b.bioStart, bioStart = _c === void 0 ? [{}] : _c, _d = _b.bioEnd, bioEnd = _d === void 0 ? [{}] : _d, strand = _b.strand, subComponent = _b.subComponent;
            if (subComponent && subComponent[0] && subComponent[0].DnaComponent && subComponent[0].DnaComponent[0]) {
                var _e = subComponent[0].DnaComponent[0], _f = _e.type, annType = _f === void 0 ? [{}] : _f, _g = _e.displayId, annId = _g === void 0 ? [{}] : _g, _h = _e.name, annName = _h === void 0 ? [{}] : _h;
                annotations.push({
                    // we're 0-based
                    direction: strand[0]._ === "+" ? 1 : -1,
                    // sbol is 1-based
                    end: bioEnd[0]._ || 0,
                    name: annName[0]._ || annId[0]._ || "Untitled",
                    start: bioStart[0]._ - 1 || 0,
                    type: annType[0]._ || "N/A",
                });
            }
        });
    }
    // guess whether it's circular or not based on the presence of a word like vector.
    // very ad hoc
    var circular = file.search(/plasmid/i) > 0;
    return {
        annotations: annotations,
        circular: circular,
        compSeq: parsedCompSeq,
        name: parsedName,
        seq: parsedSeq,
        type: (0, utils_1.guessType)(seq),
    };
};
/**
 * find all nodes that of the type Sequence, and convert those to parts "Sequence" -> Part
 *
 
 * this is not the standard format. see A1.xml
 */
var sequenceToPart = function (Seq, file) {
    // get the name
    var name = (Seq.displayId[0] && Seq.displayId[0]._) || (Seq.title[0] && Seq.title[0]._) || "Unnamed";
    // get the sequence
    var seqOrig = (Seq.elements[0] && Seq.elements[0]._) || "";
    var _a = (0, utils_1.complement)(seqOrig), compSeq = _a.compSeq, seq = _a.seq;
    // guess whether it's circular or not based on the presence of a word like vector.
    // very ad hoc
    var circular = file.search(/plasmid/i) > 0;
    return { annotations: [], circular: circular, compSeq: compSeq, name: name, seq: seq, type: (0, utils_1.guessType)(seq) };
};
/**
 * find all the nodes within the SBOL JSON document that are keyed "DnaComponent"
 *
 * this is a last-resort scrapper that tries to find valid parts that aren't within a root
 * DnaComponent document or within a root Collection array
 */
var findDnaComponentNodes = function (acc, doc) {
    Object.keys(doc).forEach(function (k) {
        if (k === "DnaComponent" && doc[k].length)
            acc.push.apply(acc, doc[k]);
        if (Array.isArray(doc[k])) {
            doc[k].forEach(function (nestedNode) {
                findDnaComponentNodes(acc, nestedNode);
            });
        }
    });
};
/**
 * find all the nodes within the JSON document that are keyed "Sequence"
 *
 * this is another last-resort scrapper for trying to find valid parts
 */
var findSequenceNodes = function (acc, doc) {
    Object.keys(doc).forEach(function (k) {
        if (k === "Sequence" && doc[k].length)
            acc.push.apply(acc, doc[k]);
        if (Array.isArray(doc[k])) {
            doc[k].forEach(function (nestedNode) {
                findSequenceNodes(acc, nestedNode);
            });
        }
    });
};
/**
 * takes an SBOL file, as a string, and converts it into our DB
 * representation of a part(s). an example of this type of file can be
 * found in ../examples/j5.SBOL.xml
 */
exports["default"] = (function (sbol) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) {
                // it shouldn't take longer than this to parse the SBOL file
                setTimeout(function () {
                    reject(new Error("Took to long to parse SBOL"));
                }, 2000);
                // util reject function that will be triggered if any fields fail
                var rejectSBOL = function (errType) { return reject(new Error("Failed on SBOL file; ".concat(errType))); };
                // weird edge case with directed quotation characters
                var fileString = sbol.replace(/“|”/g, '"');
                xml2js.parseString(fileString, {
                    attrkey: "xml_tag",
                    tagNameProcessors: [xml2js.processors.stripPrefix],
                    xmlns: true,
                }, function (err, parsedSBOL) {
                    if (err)
                        rejectSBOL(err);
                    var RDF = null;
                    if (parsedSBOL.RDF)
                        (RDF = parsedSBOL.RDF);
                    if (!RDF)
                        reject(new Error("No root RDF document"));
                    // @ts-expect-error ts-migrate(2339) FIXME: Property 'Collection' does not exist on type 'null... Remove this comment to see the full error message
                    var Collection = RDF.Collection, DnaComponent = RDF.DnaComponent;
                    if (Collection && Collection.length) {
                        // it's a collection of DnaComponents, parse each to a part
                        var partList_1 = [];
                        Collection.forEach(function (_a) {
                            var component = _a.component;
                            if (component && component.length) {
                                component.forEach(function (_a) {
                                    var nestedDnaComponent = _a.DnaComponent;
                                    partList_1.push(
                                    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '{ seq: string; compSeq: string; ... Remove this comment to see the full error message
                                    dnaComponentToPart(nestedDnaComponent[0], {
                                        file: sbol,
                                        strict: false,
                                    }));
                                });
                            }
                        });
                        // check whether any parts were created from the collection
                        if (partList_1.length)
                            resolve(partList_1);
                    }
                    else if (DnaComponent && DnaComponent.length) {
                        // create a single part from the single one passed
                        var validPart = dnaComponentToPart(DnaComponent[0], {
                            file: sbol,
                            strict: false,
                        });
                        // it will be null if there isnt' any sequence information beneath it
                        if (validPart)
                            resolve([validPart]);
                    }
                    // go on a fishing expedition for DnaComponents
                    // everything else has failed
                    // accumulate all that are "valid" (name + seq)
                    var dnaComponentAccumulator = [];
                    findDnaComponentNodes(dnaComponentAccumulator, RDF);
                    // @ts-ignore
                    var attemptedSeqs = dnaComponentAccumulator
                        .map(function (p) {
                        return dnaComponentToPart(p, {
                            file: sbol,
                            strict: true,
                        });
                    })
                        .filter(function (p) { return !!p; }); // invalid parts will be null
                    if (attemptedSeqs.length)
                        resolve(attemptedSeqs);
                    // go on another fishing expedition, but for Sequence nodes
                    var dnaSequenceAccumulator = [];
                    findSequenceNodes(dnaSequenceAccumulator, RDF);
                    var sequenceNodes = dnaSequenceAccumulator.map(function (p) { return sequenceToPart(p, sbol); }).filter(function (p) { return p; }); // invalid parts will be null
                    if (sequenceNodes.length)
                        resolve(sequenceNodes);
                    // neither a DnaComponent nor Collection was found anywhere in document
                    reject(new Error("no valid DnaComponent or Collection"));
                });
            })];
    });
}); });


/***/ }),
/* 18 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var xml2js = __webpack_require__(12);
var utils_1 = __webpack_require__(10);
// get the first string/number child out of an array of possible null elements
var first = function (elArr) {
    if (elArr && elArr[0]) {
        if (elArr[0]._) {
            return elArr[0]._;
        }
        return elArr[0];
    }
    return null;
};
/**
 * Converts an SBOL file to our Seq format.
 *
 * SBOL v2.0 schema definition can be found at: http://sbolstandard.org/wp-content/uploads/2016/06/SBOL-data-model-2.2.1.pdf
 * differs from SBOL v1.0 in that the ComponentDefinitions are like the root parts,
 * and the sequence and annotations are separated (they're no longer defined relationally
 * by nesting but, instead, by id) we only care about components that have sequence information
 */
exports["default"] = (function (sbol, fileName) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) {
                // weird edge case with directed quotation characters
                var fileString = sbol.replace(/“|”/g, '"');
                xml2js.parseString(fileString, {
                    attrkey: "xml_tag",
                    tagNameProcessors: [xml2js.processors.stripPrefix],
                    xmlns: true,
                }, function (err, parsedSBOL) {
                    if (err) {
                        reject(new Error("Failed to parse SBOL v2: ".concat(err)));
                    }
                    try {
                        var seqList = parseSBOL2(parsedSBOL, fileName);
                        if (seqList.length) {
                            resolve(seqList);
                        }
                        else {
                            throw new Error("No Sequence info found");
                        }
                    }
                    catch (err) {
                        reject("Failed to parse SBOL v2 file: ".concat(err));
                    }
                });
            })];
    });
}); });
var parseSBOL2 = function (parsedSBOL, fileName) {
    var RDF = null;
    if (parsedSBOL.RDF) {
        (RDF = parsedSBOL.RDF);
    }
    if (!RDF) {
        throw new Error("No root RDF document");
    }
    // check if anything is defined, return if not
    var ComponentDefinition = RDF.ComponentDefinition, Sequence = RDF.Sequence;
    if (!ComponentDefinition && !Sequence) {
        throw new Error("Failed to parse SBOL v2: No ComponentDefinition or Sequence");
    }
    // read thru the Sequence elements
    var getSeq = function (seqID) {
        var seqElement = seqID
            ? // @ts-ignore
                Sequence.find(function (s) {
                    return (s.persistentIdentity &&
                        s.persistentIdentity.length &&
                        s.persistentIdentity[0].xml_tag["rdf:resource"].value === seqID) ||
                        s.xml_tag["rdf:about"].value === seqID;
                })
            : first(Sequence);
        if (seqElement && seqElement.elements) {
            var seq_1 = (0, utils_1.complement)(first(seqElement.elements) || "").seq;
            return {
                annotations: [],
                name: first(seqElement.displayId),
                seq: seq_1,
                type: (0, utils_1.guessType)(seq_1),
            };
        }
        return null;
    };
    // if it's a collection of DnaComponents, parse each to a part
    var seqList = [];
    // @ts-ignore
    ComponentDefinition === null || ComponentDefinition === void 0 ? void 0 : ComponentDefinition.forEach(function (c, i) {
        var _a, _b;
        // we're only making parts out of those with seq info
        if (!c.sequence || !c.sequence.length) {
            return;
        }
        var displayId = c.displayId, sequence = c.sequence, sequenceAnnotation = c.sequenceAnnotation;
        var name = first(displayId) || "".concat(fileName, "_").concat(i + 1);
        var annotations = [];
        (sequenceAnnotation || []).forEach(function (_a) {
            var SequenceAnnotation = _a.SequenceAnnotation;
            var ann = SequenceAnnotation[0];
            var annId = first(ann.displayId);
            var Range = first(ann.location).Range;
            var range = first(Range);
            if (range) {
                annotations.push({
                    end: first(range.end) - 1,
                    name: annId,
                    start: first(range.start) - 1,
                });
            }
        });
        var seqID = (_b = (_a = first(sequence)) === null || _a === void 0 ? void 0 : _a.xml_tag["rdf:resource"]) === null || _b === void 0 ? void 0 : _b.value;
        var seq = getSeq(seqID);
        if (seq) {
            seqList.push({
                annotations: annotations,
                name: name,
                seq: seq.seq,
                type: seq.type,
            });
        }
    });
    // if it's a single sequence, just try and get the sequence from that alone
    var seq = getSeq();
    if (!seqList.length && seq) {
        seqList.push(seq);
    }
    return seqList;
};


/***/ }),
/* 19 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var utils_1 = __webpack_require__(10);
// a list of recognized types that would constitute an annotation name
var tagNameList = ["gene", "product", "note", "db_xref", "protein_id", "label", "lab_host"];
// a list of tags that could represent colors
var tagColorList = ["ApEinfo_fwdcolor", "ApEinfo_revcolor", "loom_color"];
/**
 * takes in a string representation of a SeqBuilder file and outputs our
 * part representation of it. an example of a SeqBuilder file can be found
 * at imports/io/examples/seqbuilder, though there may be variations to the
 * format
 */
exports["default"] = (function (fileInput, fileName) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, fileInput.split(/\/\/\s/g).map(function (file) {
                // +++++SEQUENCE+++++//
                // the part sequence comes after the line that specifies the seqbuilder version number
                // @ts-ignore
                var SEQ_ROWS = file
                    .substring(file.search(/.*?written by seqbuilder .*?[0-9.]+[^actg]+/i) +
                    // @ts-ignore
                    file.match(/.*?written by seqbuilder .*?[0-9.]+[^actg]+/i)[0].length, file.length)
                    .match(/[actgyrwskmdvhbxn]+/gim)[0];
                var seq = SEQ_ROWS;
                (seq = (0, utils_1.complement)(seq).seq); // seq and compSeq
                // there may be a genbank-like header row after the sequence
                // LOCUS       SCU49845     5028 bp    DNA             PLN       21-JUN-1999
                var parsedName = fileName.length > 0 ? fileName : "Unnamed";
                if (~file.indexOf("LOCUS")) {
                    var HEADER_ROW = file.substring(file.indexOf("LOCUS"), file.search(/\\n|\n/));
                    if (HEADER_ROW && HEADER_ROW.split(/\s{2,}/g)) {
                        var _a = HEADER_ROW.split(/\s{2,}/g).filter(function (h) { return h; }), name_1 = _a[1];
                        parsedName = name_1;
                    }
                }
                // Name setting logic ported from GenBank parser
                if ((parsedName === "Exported" && file.includes("SnapGene")) || // stupid Snapgene name
                    Number.parseInt(parsedName, 10) // it thinks seq-length is the name
                ) {
                    // first try and get the name from ACCESSION
                    var accessionName = false;
                    if (file.includes("ACCESSION")) {
                        // this will be undefined is there is no
                        var accession = file
                            .substring(file.indexOf("ACCESSION"), file.indexOf("\n", file.indexOf("ACCESSION")))
                            .replace(".", "")
                            .split(/\s{2,}/)
                            .filter(function (a) { return a !== "ACCESSION"; })
                            .pop();
                        if (accession) {
                            parsedName = accession;
                            accessionName = true;
                        }
                    }
                    // otherwise, revert to trying to get the part name from the file name
                    if (!accessionName && fileName) {
                        parsedName = fileName
                            .substring(0, Math.max(fileName.search(/\n|\||\./), fileName.lastIndexOf(".")))
                            .replace(/\/\s/g, "");
                    }
                    else if (!accessionName) {
                        parsedName = "Unnamed"; // give up
                    }
                }
                // +++++ANNOTATIONS+++++//
                // the features are translated into annotations
                // region is FEATURES thru ORIGIN
                // FEATURES             Location/Qualifiers
                //   source          1..5028
                //                   /organism="Saccharomyces cerevisiae"
                //                   /db_xref="taxon:4932"
                //                   /chromosome="IX"
                //                   /map="9"
                //
                // in the example above, source is the annotation "type" and name is "taxon:4932"
                // because "db_xref" is a recognized name type
                // the name depends on whether the tag type is in the reocgnized list of types
                var annotations = [];
                if (file.indexOf("FEATURES")) {
                    var FEATURES_LINE = file.indexOf("FEATURES");
                    var FEATURES_NEW_LINE = file.indexOf("\n", FEATURES_LINE);
                    var ORIGIN_LINE = file.lastIndexOf("ORIGIN");
                    // some files have a contig file line that needs to parsed out/ shouldn't be included in
                    // the features parsing
                    if (file.includes("CONTIG")) {
                        ORIGIN_LINE = Math.min(ORIGIN_LINE, file.indexOf("CONTIG"));
                    }
                    var FEATURES_ROWS = file
                        .substring(FEATURES_NEW_LINE, ORIGIN_LINE)
                        .split(/\n/)
                        .filter(function (r) { return r; });
                    FEATURES_ROWS.forEach(function (r) {
                        // in the example above, the following converts it to ['source', '1..5028']
                        var currLine = r.split(/\s{2,}/g).filter(function (l) { return l; });
                        if (currLine.length > 1) {
                            // it's the beginning of a new feature/annotation
                            var type = currLine[0], rangeString = currLine[1];
                            var rangeRegex = /\d+/g;
                            var direction = r.includes("complement") ? -1 : 1;
                            // using the example above, this parses 1..5028 into 1 and 5028
                            var _a = [0, 0], start = _a[0], end = _a[1];
                            var startSearch = rangeRegex.exec(rangeString);
                            if (startSearch) {
                                // the - 1 is because genbank is 1-based while we're 0
                                start = +startSearch[0] - (1 % seq.length);
                                var endSearch = rangeRegex.exec(rangeString);
                                if (endSearch) {
                                    end = +endSearch[0] % seq.length;
                                }
                            }
                            if (type !== "source") {
                                // source would just be an annotation for the entire sequence so remove
                                // create a new annotation around the properties in this line (type and range)
                                annotations.push({
                                    direction: direction,
                                    end: end,
                                    name: "",
                                    start: start,
                                    type: type,
                                });
                            }
                        }
                        else if (currLine.length === 1) {
                            // it's a continuation of a prior feature/annotation
                            // any updates (to name or color) to the last annotation should affect
                            // the last annotation that's in the array
                            var tag = currLine[0];
                            tag = tag.replace(/[/"]/g, ""); // get rid of quotation marks and forward slaches
                            // should now look like ['organism', 'Saccharomyces cerevisiae']
                            var _b = tag.split(/=/), tagName = _b[0], tagValue = _b[1];
                            // the two values that can be extracted are name or color
                            var lastAnnIndex = annotations.length - 1;
                            if (tagNameList.includes(tagName)) {
                                // it's key value pair where the key is something we recognize as an annotation name
                                if (lastAnnIndex > -1 && !annotations[annotations.length - 1].name) {
                                    // defensively check that there isn't already a defined annotation w/o a name
                                    annotations[annotations.length - 1].name = tagValue.trim();
                                }
                            }
                            else if (tagColorList.includes(tagName)) {
                                // it's key value pair where the key is something we recognize as an annotation color
                                if (lastAnnIndex > -1) {
                                    // defensively check that there's already been a defined annotation
                                    annotations[annotations.length - 1].color = tagValue;
                                }
                            }
                        }
                    });
                }
                return {
                    annotations: annotations,
                    name: parsedName.trim() || fileName,
                    seq: seq,
                    type: (0, utils_1.guessType)(seq),
                };
            })];
    });
}); });


/***/ }),
/* 20 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var path_1 = __webpack_require__(8);
var xml2js = __webpack_require__(12);
var utils_1 = __webpack_require__(10);
/**
 * Parse a Snapgene file to Seq[]
 *
 * this is adapted from https://github.com/TeselaGen/ve-sequence-parsers/blob/master/src/parsers/snapgeneToJson.js
 * which was adapted from https://github.com/IsaacLuo/SnapGeneFileReader/blob/master/snapgene_reader/snapgene_reader.py
 */
exports["default"] = (function (options) { return __awaiter(void 0, void 0, void 0, function () {
    var fileName, seq, buffer, offset, read, readEnc, length, title, _loop_1;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (!options || !options.source) {
                    throw new Error("Failed to parse SnapGene file. No valid file input");
                }
                fileName = (options === null || options === void 0 ? void 0 : options.fileName) || "";
                seq = {
                    annotations: [],
                    circular: false,
                    name: "",
                    seq: "",
                    type: "unknown",
                };
                buffer = Buffer.from(options.source);
                offset = 0;
                read = function (size) {
                    var start = offset;
                    offset += size;
                    return buffer.subarray(start, offset);
                };
                readEnc = function (size, fmt) { return read(size).toString(fmt); };
                // Read the first byte
                read(1);
                length = read(4).readUInt32BE();
                title = readEnc(8, "ascii");
                if (length !== 14 || title !== "SnapGene") {
                    throw new Error("Wrong format for a SnapGene file: length=".concat(length, " title=").concat(title));
                }
                read(2); // isDNA
                read(2); // exportVersion
                read(2); // importVersion
                _loop_1 = function () {
                    var nextByte, blockSize, ord, size, xml_1, b, _c, _d, _e, Feature;
                    return __generator(this, function (_f) {
                        switch (_f.label) {
                            case 0:
                                nextByte = read(1);
                                blockSize = read(4).readUInt32BE();
                                ord = nextByte.toString().charCodeAt(0);
                                if (!(ord === 0)) return [3 /*break*/, 1];
                                // Read the sequence and its properties
                                read(1); // isCircular
                                size = blockSize - 1;
                                if (size < 0)
                                    throw new Error("Failed parsing SnapGene: < 0 length sequence");
                                seq.seq = readEnc(size, "ascii");
                                return [3 /*break*/, 4];
                            case 1:
                                if (!(ord === 10)) return [3 /*break*/, 3];
                                xml_1 = readEnc(blockSize, "utf8");
                                return [4 /*yield*/, new Promise(function (resolve, reject) {
                                        xml2js.parseString(xml_1, function (err, result) {
                                            if (err)
                                                reject(err);
                                            resolve(result);
                                        });
                                    })];
                            case 2:
                                b = _f.sent();
                                _c = b.Features, _d = _c === void 0 ? {} : _c, _e = _d.Feature, Feature = _e === void 0 ? [] : _e;
                                Feature.forEach(function (_a) {
                                    var attrs = _a.$, _b = _a.Segment, Segment = _b === void 0 ? [] : _b;
                                    var minStart = 0;
                                    var maxEnd = 0;
                                    if (Segment) {
                                        Segment.forEach(function (_a) {
                                            var seg = _a.$;
                                            if (!seg)
                                                throw new Error("Invalid feature definition");
                                            var range = seg.range;
                                            var _b = range.split("-"), start = _b[0], end = _b[1];
                                            minStart = minStart === 0 ? +start : Math.min(minStart, +start);
                                            maxEnd = Math.max(maxEnd, +end);
                                        });
                                    }
                                    // create an Annotation
                                    seq.annotations.push({
                                        direction: (0, utils_1.parseDirection)({
                                            "0": "NONE",
                                            "1": 1,
                                            "2": -1,
                                            "3": "BIDIRECTIONAL",
                                            undefined: "NONE",
                                        }[attrs.directionality]),
                                        end: maxEnd - 1,
                                        name: attrs.name,
                                        start: minStart - 1,
                                        type: attrs.type,
                                    });
                                });
                                return [3 /*break*/, 4];
                            case 3:
                                // UNKNOWN: WE IGNORE THE WHOLE BLOCK
                                read(blockSize);
                                _f.label = 4;
                            case 4: return [2 /*return*/];
                        }
                    });
                };
                _b.label = 1;
            case 1:
                if (!(offset < buffer.length)) return [3 /*break*/, 3];
                return [5 /*yield**/, _loop_1()];
            case 2:
                _b.sent();
                return [3 /*break*/, 1];
            case 3: return [2 /*return*/, [
                    __assign(__assign({}, seq), { 
                        // snapgene uses the filename as the sequence name
                        name: ((_a = fileName.split(path_1.sep).pop()) === null || _a === void 0 ? void 0 : _a.replace(".dna", "")) || fileName, type: (0, utils_1.guessType)(seq.seq) }),
                ]];
        }
    });
}); });


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
//#!/usr/bin/env node

Object.defineProperty(exports, "__esModule", ({ value: true }));
var fs_1 = __webpack_require__(1);
var pino_1 = __webpack_require__(2);
var pino_pretty_1 = __webpack_require__(3);
var _1 = __webpack_require__(4);
/** use LOG_LEVEL=debug for some debugging help */
var stream = (0, pino_pretty_1.default)({
    colorize: true,
});
var logger = (0, pino_1.default)({
    level: process.env.LOG_LEVEL || "info",
}, stream);
/** bail, log an example */
var exit = function () {
    console.error("# Example USAGE:\n\n# parse a file\nseqparse gene.fa\n\n# parse a file from stdin\ncat gene.fa | seqparse\n\n# fetch and parse a file from NCBI of iGEM by accession\nseqparse FJ172221");
    process.exit(1);
};
/** input can be a file name as first arg or stdin */
var parseOptions = {};
var input = null;
if (process.argv[2]) {
    input = process.argv[2];
    logger = logger.child({ arg: true });
    logger.debug(null, "reading from arg");
}
else {
    logger = logger.child({ stdin: true });
    try {
        logger.debug(null, "attempting to read stdin");
        parseOptions.source = (0, fs_1.readFileSync)(process.stdin.fd);
        parseOptions.fileName = "Unknown";
        input = parseOptions.source.toString("utf-8");
        logger.debug(null, "successfully read stdin");
    }
    catch (err) {
        // only a debug here because am assuming the user just didn't pass anything
        logger.debug({ err: err }, "failed to read stdin");
        exit();
    }
}
/** throw, no input detected */
if (!input || !input.length) {
    logger.error(null, "no input detected");
    exit();
    process.exit(1);
}
/** check if file, if so, read */
var isFile = (0, fs_1.existsSync)(input);
logger = logger.child({ isFile: isFile });
var fileContents = null;
if (isFile) {
    logger = logger.child({ fileName: input });
    parseOptions.fileName = input;
    try {
        logger.debug(null, "attempting to read file");
        parseOptions.source = (0, fs_1.readFileSync)(input);
        fileContents = parseOptions.source.toString("utf-8");
        logger = logger.child({ length: fileContents.length, prefix: fileContents.substring(0, 50) });
        logger.debug(null, "successfully read file");
    }
    catch (err) {
        logger.error({ err: err }, "failed to read file");
        exit();
    }
}
/** parse, write to stdout */
logger.debug(null, "attempting to parse input");
(0, _1.default)(fileContents || input, parseOptions)
    .then(function (r) {
    logger.debug(null, "successfully parsed file");
    console.log(JSON.stringify(r, null, 2));
})
    .catch(function (err) {
    logger.error({ err: err }, "failed to parse input");
    exit();
});

})();

/******/ })()
;
//# sourceMappingURL=cli.js.map
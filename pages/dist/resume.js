"use strict";
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
exports.__esModule = true;
exports.getServerSideProps = void 0;
var core_1 = require("@octokit/core");
require("devicon");
var router_1 = require("next/router");
var react_1 = require("react");
var react_github_calendar_1 = require("react-github-calendar");
// import Calendar from "react-github-contribution-calendar";
var index_1 = require("../components/index");
var context_1 = require("../context");
var BackUp_1 = require("../layouts/BackUp");
var svg_1 = require("../public/svg");
var utils_1 = require("../utils");
var values = {
    "2022-01-23": 1,
    "2022-01-26": 2,
    "2022-01-27": 3,
    "2022-01-28": 4,
    "2022-01-29": 4
};
var until = "2022-01-30";
// 一些通用 css
var styles = {
    listHover: "hover:scale-[1.5] text-center transition-all duration-150",
    count: "flex flex-col text-center mr-2",
    common: "mt-[10px] rounded-xl h-[830px] cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-[1.06]"
};
var Resume = function (_a) {
    var userInfo = _a.userInfo, language = _a.language, repoNames = _a.repoNames;
    var basicInfo = [
        {
            icon: svg_1.Email,
            link: userInfo === null || userInfo === void 0 ? void 0 : userInfo.email
        },
        {
            icon: svg_1.Website,
            link: userInfo === null || userInfo === void 0 ? void 0 : userInfo.blog
        },
        {
            icon: svg_1.Twitter,
            link: "https://twitter.com/search?q=" + (userInfo === null || userInfo === void 0 ? void 0 : userInfo.twitter_username) + "&src=typed_query&f=user"
        },
        {
            icon: svg_1.Github,
            link: userInfo === null || userInfo === void 0 ? void 0 : userInfo.html_url
        },
    ];
    var token = react_1.useContext(context_1.StoreCtx).token;
    var router = router_1.useRouter();
    react_1.useEffect(function () {
        if (!token || token.length <= 0) {
            router.replace("/loginGithub");
        }
        console.log(userInfo);
        console.log(language);
        console.log(new Set(repoNames));
    }, []);
    return (React.createElement("div", { className: "h-screen overflow-y-scroll flex flex-col justify-center bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500" },
        React.createElement("div", { className: "w-[700px] max-h-[850px] flex flex-row m-auto" },
            React.createElement("div", { className: "w-[320px] ml-[14px] mr-[20px] bg-[#8080806b] hover:bg-[#80808091] " + styles.common },
                React.createElement(index_1.UserInfo, { name: (userInfo === null || userInfo === void 0 ? void 0 : userInfo.name) || "", nickName: (userInfo === null || userInfo === void 0 ? void 0 : userInfo.login) || "", avatar: (userInfo === null || userInfo === void 0 ? void 0 : userInfo.avatar_url) || "" }),
                React.createElement("div", { className: "mb-3 flex w-[260px] m-auto" }, basicInfo.map(function (_a, i) {
                    var icon = _a.icon, link = _a.link;
                    return React.createElement(index_1.MsgBar, { key: link || "" + i, icon: icon, link: link });
                })),
                React.createElement(index_1.MsgBar, { icon: svg_1.Location, text: userInfo === null || userInfo === void 0 ? void 0 : userInfo.location }),
                (userInfo === null || userInfo === void 0 ? void 0 : userInfo.company) && (React.createElement(index_1.MsgBar, { icon: svg_1.Company, text: userInfo === null || userInfo === void 0 ? void 0 : userInfo.company })),
                React.createElement(index_1.MsgBar, { title: "Introduction" },
                    React.createElement("p", { className: "indent-3" }, userInfo === null || userInfo === void 0 ? void 0 : userInfo.bio)),
                React.createElement(index_1.MsgBar, { title: "Basic Info" },
                    React.createElement("ul", { className: "flex flex-row justify-center" },
                        React.createElement("li", { className: "" + styles.count },
                            React.createElement("span", null, userInfo === null || userInfo === void 0 ? void 0 : userInfo.public_repos),
                            React.createElement("span", null, "Repos")),
                        React.createElement("li", { className: "" + styles.count },
                            React.createElement("span", null, userInfo === null || userInfo === void 0 ? void 0 : userInfo.following),
                            React.createElement("span", null, "Following")),
                        React.createElement("li", { className: "" + styles.count },
                            React.createElement("span", null, userInfo === null || userInfo === void 0 ? void 0 : userInfo.followers),
                            React.createElement("span", null, "Followers")))),
                React.createElement(index_1.MsgBar, { title: "Language" },
                    React.createElement("ul", { className: "indent-4 text-2xl flex flex-wrap" }, language.map(function (item) {
                        var iconUrl = item.colored
                            ? "devicon-" + item.language + "-" + item.style + " " + (item.colored ? "colored" : "")
                            : "devicon-" + item.language + "-" + item.style;
                        return (React.createElement("li", { key: item.language, className: styles.listHover + " group" },
                            React.createElement("i", { className: iconUrl })));
                    }))),
                React.createElement(index_1.MsgBar, { title: "Contribution" },
                    React.createElement(react_github_calendar_1["default"], { username: (userInfo === null || userInfo === void 0 ? void 0 : userInfo.login) || '' }))),
            React.createElement("div", { className: "w-[380px] bg-white overflow-y-scroll " + styles.common },
                React.createElement(index_1.DetailCard, { title: "Highlights" },
                    React.createElement("p", null, "\u6700\u8FD1\u5173\u6CE8\u7684")),
                React.createElement(index_1.DetailCard, { title: "Get Around" },
                    React.createElement("p", null, "you get around")),
                React.createElement(index_1.DetailCard, { title: "New Friends" },
                    React.createElement("p", null, "\u6700\u8FD1\u5173\u6CE8\u7684")),
                React.createElement(index_1.DetailCard, { title: "New Love" },
                    React.createElement("p", null, "\u6700\u8FD1\u5173\u6CE8\u7684"))))));
};
exports["default"] = Resume;
// 布局组件
Resume.getLayout = function (page) {
    return React.createElement(BackUp_1["default"], null, page);
};
// 构建客户端数据结构
exports.getServerSideProps = function (_a) {
    var query = _a.query;
    return __awaiter(void 0, void 0, void 0, function () {
        var octokit, _userInfos, _b, language, repoNames, error_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    octokit = new core_1.Octokit({
                        auth: query.token,
                        baseUrl: "https://api.github.com"
                    });
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, octokit.request("GET /user")];
                case 2:
                    _userInfos = (_c.sent()).data;
                    return [4 /*yield*/, utils_1["default"].countLanguage(_userInfos.public_repos, _userInfos.login, octokit)];
                case 3:
                    _b = _c.sent(), language = _b.language, repoNames = _b.repoNames;
                    return [2 /*return*/, {
                            props: {
                                userInfo: __assign({}, _userInfos),
                                language: language,
                                repoNames: repoNames
                            }
                        }];
                case 4:
                    error_1 = _c.sent();
                    console.log(error_1);
                    return [2 /*return*/, {
                            redirect: {
                                destination: "/loginGithub",
                                permanent: false
                            }
                        }];
                case 5: return [2 /*return*/];
            }
        });
    });
};

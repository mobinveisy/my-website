"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/contact";
exports.ids = ["pages/api/contact"];
exports.modules = {

/***/ "@notionhq/client":
/*!***********************************!*\
  !*** external "@notionhq/client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@notionhq/client");

/***/ }),

/***/ "./pages/api/contact.js":
/*!******************************!*\
  !*** ./pages/api/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst { Client  } = __webpack_require__(/*! @notionhq/client */ \"@notionhq/client\");\nconst notion = new Client({\n    auth: process.env.NOTION_API_TOKEN\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method !== 'POST') {\n        return res.status(405).json({\n            msg: 'Only POST requests are allowed'\n        });\n    }\n    try {\n        const { name , email , subject , message  } = JSON.parse(req.body);\n        await notion.pages.create({\n            parent: {\n                database_id: process.env.NOTION_DATABASE_ID\n            },\n            properties: {\n                Name: {\n                    title: [\n                        {\n                            text: {\n                                content: name\n                            }\n                        }, \n                    ]\n                },\n                Email: {\n                    email\n                },\n                Subject: {\n                    rich_text: [\n                        {\n                            text: {\n                                content: subject\n                            }\n                        }, \n                    ]\n                },\n                Message: {\n                    rich_text: [\n                        {\n                            text: {\n                                content: message\n                            }\n                        }, \n                    ]\n                }\n            }\n        });\n        res.status(201).json({\n            msg: 'Success'\n        });\n    } catch (error) {\n        console.log(error);\n        res.status(500).json({\n            msg: 'Failed'\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvY29udGFjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsS0FBSyxDQUFDLENBQUMsQ0FBQ0EsTUFBTSxFQUFDLENBQUMsR0FBR0MsbUJBQU8sQ0FBQywwQ0FBa0I7QUFFN0MsS0FBSyxDQUFDQyxNQUFNLEdBQUcsR0FBRyxDQUFDRixNQUFNLENBQUMsQ0FBQztJQUN6QkcsSUFBSSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsZ0JBQWdCO0FBQ3BDLENBQUM7QUFFRCxpRUFBTSxPQUFnQkMsR0FBRyxFQUFFQyxHQUFHLEdBQUssQ0FBQztJQUNsQyxFQUFFLEVBQUVELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLENBQU0sT0FBRSxDQUFDO1FBQzFCLE1BQU0sQ0FBQ0QsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztZQUFDQyxHQUFHLEVBQUUsQ0FBZ0M7UUFBQyxDQUFDO0lBQ3ZFLENBQUM7SUFDRCxHQUFHLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxDQUFDLENBQUNDLElBQUksR0FBRUMsS0FBSyxHQUFFQyxPQUFPLEdBQUVDLE9BQU8sRUFBQyxDQUFDLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDWCxHQUFHLENBQUNZLElBQUk7UUFDN0QsS0FBSyxDQUFDakIsTUFBTSxDQUFDa0IsS0FBSyxDQUFDQyxNQUFNLENBQUMsQ0FBQztZQUN6QkMsTUFBTSxFQUFFLENBQUM7Z0JBQ1BDLFdBQVcsRUFBRW5CLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDbUIsa0JBQWtCO1lBQzdDLENBQUM7WUFDREMsVUFBVSxFQUFFLENBQUM7Z0JBQ1hDLElBQUksRUFBRSxDQUFDO29CQUNMQyxLQUFLLEVBQUUsQ0FBQzt3QkFDTixDQUFDOzRCQUNDQyxJQUFJLEVBQUUsQ0FBQztnQ0FDTEMsT0FBTyxFQUFFaEIsSUFBSTs0QkFDZixDQUFDO3dCQUNILENBQUM7b0JBQ0gsQ0FBQztnQkFDSCxDQUFDO2dCQUNEaUIsS0FBSyxFQUFFLENBQUM7b0JBQ05oQixLQUFLO2dCQUNQLENBQUM7Z0JBQ0RpQixPQUFPLEVBQUUsQ0FBQztvQkFDUkMsU0FBUyxFQUFFLENBQUM7d0JBQ1YsQ0FBQzs0QkFDQ0osSUFBSSxFQUFFLENBQUM7Z0NBQ0xDLE9BQU8sRUFBRWQsT0FBTzs0QkFDbEIsQ0FBQzt3QkFDSCxDQUFDO29CQUNILENBQUM7Z0JBQ0gsQ0FBQztnQkFDRGtCLE9BQU8sRUFBRSxDQUFDO29CQUNSRCxTQUFTLEVBQUUsQ0FBQzt3QkFDVixDQUFDOzRCQUNDSixJQUFJLEVBQUUsQ0FBQztnQ0FDTEMsT0FBTyxFQUFFYixPQUFPOzRCQUNsQixDQUFDO3dCQUNILENBQUM7b0JBQ0gsQ0FBQztnQkFDSCxDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7UUFDRFIsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztZQUFDQyxHQUFHLEVBQUUsQ0FBUztRQUFDLENBQUM7SUFDekMsQ0FBQyxDQUFDLEtBQUssRUFBRXNCLEtBQUssRUFBRSxDQUFDO1FBQ2ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLO1FBQ2pCMUIsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztZQUFDQyxHQUFHLEVBQUUsQ0FBUTtRQUFDLENBQUM7SUFDeEMsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92c2NvZGUtcG9ydGZvbGlvLy4vcGFnZXMvYXBpL2NvbnRhY3QuanM/MzQ5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IENsaWVudCB9ID0gcmVxdWlyZSgnQG5vdGlvbmhxL2NsaWVudCcpO1xyXG5cclxuY29uc3Qgbm90aW9uID0gbmV3IENsaWVudCh7XHJcbiAgYXV0aDogcHJvY2Vzcy5lbnYuTk9USU9OX0FQSV9UT0tFTixcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBpZiAocmVxLm1ldGhvZCAhPT0gJ1BPU1QnKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtc2c6ICdPbmx5IFBPU1QgcmVxdWVzdHMgYXJlIGFsbG93ZWQnIH0pO1xyXG4gIH1cclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBuYW1lLCBlbWFpbCwgc3ViamVjdCwgbWVzc2FnZSB9ID0gSlNPTi5wYXJzZShyZXEuYm9keSk7XHJcbiAgICBhd2FpdCBub3Rpb24ucGFnZXMuY3JlYXRlKHtcclxuICAgICAgcGFyZW50OiB7XHJcbiAgICAgICAgZGF0YWJhc2VfaWQ6IHByb2Nlc3MuZW52Lk5PVElPTl9EQVRBQkFTRV9JRCxcclxuICAgICAgfSxcclxuICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIE5hbWU6IHtcclxuICAgICAgICAgIHRpdGxlOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBuYW1lLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgRW1haWw6IHtcclxuICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgU3ViamVjdDoge1xyXG4gICAgICAgICAgcmljaF90ZXh0OiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBzdWJqZWN0LFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgTWVzc2FnZToge1xyXG4gICAgICAgICAgcmljaF90ZXh0OiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgbXNnOiAnU3VjY2VzcycgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbXNnOiAnRmFpbGVkJyB9KTtcclxuICB9XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJDbGllbnQiLCJyZXF1aXJlIiwibm90aW9uIiwiYXV0aCIsInByb2Nlc3MiLCJlbnYiLCJOT1RJT05fQVBJX1RPS0VOIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsIm1zZyIsIm5hbWUiLCJlbWFpbCIsInN1YmplY3QiLCJtZXNzYWdlIiwiSlNPTiIsInBhcnNlIiwiYm9keSIsInBhZ2VzIiwiY3JlYXRlIiwicGFyZW50IiwiZGF0YWJhc2VfaWQiLCJOT1RJT05fREFUQUJBU0VfSUQiLCJwcm9wZXJ0aWVzIiwiTmFtZSIsInRpdGxlIiwidGV4dCIsImNvbnRlbnQiLCJFbWFpbCIsIlN1YmplY3QiLCJyaWNoX3RleHQiLCJNZXNzYWdlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/contact.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/contact.js"));
module.exports = __webpack_exports__;

})();
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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PaginaInicial)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @skynexui/components */ \"@skynexui/components\");\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n\n\n// COMPONENTE REACT!\n\n\n\n\nfunction Title(props) {\n    const Tag = props.tag || 'h1';\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tag, {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                    [\n                        \"483f6b4ef64af63\",\n                        [\n                            Tag,\n                            _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[600]\n                        ]\n                    ]\n                ]),\n                /*#__PURE__*/ children: props.children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wakez\\\\Documents\\\\Felipe\\\\Imers\\xe3o React - ALURA\\\\aluracord\\\\pages\\\\index.js\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"483f6b4ef64af63\",\n                dynamic: [\n                    Tag,\n                    _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[600]\n                ],\n                children: `${Tag}.__jsx-style-dynamic-selector{color:${_config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[600]};\nfont-size:24px;\nfont-weight:600}`\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true));\n}\n/* function HomePage() {\r\n    // JSX\r\n    return (\r\n        <div>\r\n            <GlobalStyle />\r\n            <Title tag=\"h2\">Boas vindas</Title>\r\n            <h2>Discord - felipe</h2>\r\n        </div>\r\n    )\r\n};\r\n\r\nexport default HomePage */ function PaginaInicial() {\n    //const username = 'PhilipFelipe';\n    const [username, setUsername] = react__WEBPACK_IMPORTED_MODULE_3___default().useState('');\n    const roteamento = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [validate, setValidate] = react__WEBPACK_IMPORTED_MODULE_3___default().useState('none');\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n            styleSheet: {\n                display: 'flex',\n                alignItems: 'center',\n                justifyContent: 'center',\n                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[100],\n                backgroundImage: 'url(https://images.pexels.com/photos/6646941/pexels-photo-6646941.jpeg?cs=srgb&dl=pexels-rodnae-productions-6646941.jpg&fm=jpg)',\n                backgroundRepeat: 'no-repeat',\n                backgroundSize: 'cover',\n                backgroundBlendMode: 'multiply'\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                styleSheet: {\n                    display: 'flex',\n                    alignItems: 'center',\n                    justifyContent: 'space-between',\n                    flexDirection: {\n                        xs: 'column',\n                        sm: 'row'\n                    },\n                    width: '100%',\n                    maxWidth: '700px',\n                    borderRadius: '5px',\n                    padding: '32px',\n                    margin: '16px',\n                    boxShadow: '0 2px 5px 1px rgb(120, 226, 161)',\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[100]\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        as: \"form\",\n                        onSubmit: function(event) {\n                            event.preventDefault();\n                            roteamento.push('/chat');\n                        //window.location.href = '/chat';\n                        },\n                        styleSheet: {\n                            display: 'flex',\n                            flexDirection: 'column',\n                            alignItems: 'center',\n                            justifyContent: 'center',\n                            width: {\n                                xs: '100%',\n                                sm: '50%'\n                            },\n                            textAlign: 'center',\n                            marginBottom: '32px'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                                tag: \"h2\",\n                                children: \"Boas vindas ao Helpcord!\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\wakez\\\\Documents\\\\Felipe\\\\Imers\\xe3o React - ALURA\\\\aluracord\\\\pages\\\\index.js\",\n                                lineNumber: 80,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                variant: \"body3\",\n                                styleSheet: {\n                                    marginBottom: '32px',\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[\"050\"]\n                                },\n                                children: _config_json__WEBPACK_IMPORTED_MODULE_5__.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\wakez\\\\Documents\\\\Felipe\\\\Imers\\xe3o React - ALURA\\\\aluracord\\\\pages\\\\index.js\",\n                                lineNumber: 81,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n                                value: username,\n                                onChange: function(event) {\n                                    const value = event.target.value;\n                                    setUsername(value);\n                                    if (value.length > 2) {\n                                        setValidate('block');\n                                    } else {\n                                        setValidate('none');\n                                    }\n                                },\n                                fullWidth: true,\n                                textFieldColors: {\n                                    neutral: {\n                                        textColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[100],\n                                        mainColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[900],\n                                        mainColorHighlight: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[100],\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[200]\n                                    }\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\wakez\\\\Documents\\\\Felipe\\\\Imers\\xe3o React - ALURA\\\\aluracord\\\\pages\\\\index.js\",\n                                lineNumber: 94,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                type: \"submit\",\n                                label: \"Entrar\",\n                                fullWidth: true,\n                                styleSheet: {\n                                    display: `${validate}`\n                                },\n                                buttonColors: {\n                                    contrastColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[\"000\"],\n                                    mainColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[500],\n                                    mainColorLight: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[400],\n                                    mainColorStrong: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[700]\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\wakez\\\\Documents\\\\Felipe\\\\Imers\\xe3o React - ALURA\\\\aluracord\\\\pages\\\\index.js\",\n                                lineNumber: 113,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\wakez\\\\Documents\\\\Felipe\\\\Imers\\xe3o React - ALURA\\\\aluracord\\\\pages\\\\index.js\",\n                        lineNumber: 68,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        styleSheet: {\n                            display: 'flex',\n                            flexDirection: 'column',\n                            alignItems: 'center',\n                            maxWidth: '200px',\n                            padding: '16px',\n                            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[200],\n                            border: '1px solid',\n                            borderColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[800],\n                            borderRadius: '10px',\n                            flex: 1,\n                            minHeight: '240px',\n                            boxShadow: '2px 2px 8px 1px #221c1c'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                                styleSheet: {\n                                    borderRadius: '50%',\n                                    marginBottom: '16px',\n                                    display: `${validate}`\n                                },\n                                src: `https://github.com/${username}.png`\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\wakez\\\\Documents\\\\Felipe\\\\Imers\\xe3o React - ALURA\\\\aluracord\\\\pages\\\\index.js\",\n                                lineNumber: 148,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                variant: \"body4\",\n                                styleSheet: {\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[100],\n                                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[900],\n                                    padding: '3px 10px',\n                                    borderRadius: '1000px'\n                                },\n                                children: username\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\wakez\\\\Documents\\\\Felipe\\\\Imers\\xe3o React - ALURA\\\\aluracord\\\\pages\\\\index.js\",\n                                lineNumber: 156,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\wakez\\\\Documents\\\\Felipe\\\\Imers\\xe3o React - ALURA\\\\aluracord\\\\pages\\\\index.js\",\n                        lineNumber: 132,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\wakez\\\\Documents\\\\Felipe\\\\Imers\\xe3o React - ALURA\\\\aluracord\\\\pages\\\\index.js\",\n                lineNumber: 52,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\wakez\\\\Documents\\\\Felipe\\\\Imers\\xe3o React - ALURA\\\\aluracord\\\\pages\\\\index.js\",\n            lineNumber: 44,\n            columnNumber: 13\n        }, this)\n    }, void 0, false));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O29DQUNBTCxTQUFTLEVBQUVyRDtvQ0FDWDJEO29DQUNBQyxNQUFBQSw2REFBQUEsQ0FBQUEsd0RBQWlCNUQ7Z0NBQ3JCLENBQUM7Ozs7Ozs7Ozs7OzswQ0FPUlAsR0FBRzt3QkFDQXVCLFVBQVUsRUFBRSxDQUFDOzRCQUNUQyxPQUFPLEVBQUUsQ0FBTTs0QkFDZlEsYUFBYSxFQUFFLENBQVE7NEJBQ3ZCUDs7NEJBRUFhLE9BQU8sRUFBRSxDQUFNOzRCQUNmWCxlQUFlLEVBQUVwQixTQUFTLENBQUNLLEtBQUssQ0FBQ0MsTUFBTSxDQUFDNEIsUUFBUSxDQUFDLEdBQUc7NEJBQ3BEMkIsTUFBTSxFQUFFLENBQVc7NEJBQ25CQyxXQUFXOzRCQUNYaEM7NEJBQ0FpQyxJQUFJLEVBQUUsNkRBQUM7NEJBQ1BDLFNBQVM7NEJBQ1QvQixTQUFTLEVBQUUsQ0FBeUI7d0JBQ3hDLENBQUM7OztnQ0FHR2pCLFVBQVUsRUFBRTtvQ0FDUmMsU0FBQUEsb0VBQW1CO29DQUNuQlcsWUFBWTtvQ0FDWnhCLEtBQUFBLG9FQUFvQjtnQ0FDeEIsQ0FBQztnQ0FDRGdELEdBQUc7Ozs7Ozs7Z0NBR0h2QixPQUFPLEVBQUMsQ0FBTztnQ0FDZjFCLFVBQVUsRUFBRSxDQUFDO29DQUNUMkIsS0FBSyxFQUFFM0MsU0FBUyxDQUFDSyxLQUFLOztvQ0FFdEIwQixPQUFPLEVBQUUsQ0FBVTtvQ0FDbkJEO2dDQUNKLENBQUM7MENBRUFwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTdCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbHVyYWNvcmQvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIENPTVBPTkVOVEUgUkVBQ1QhXHJcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBUZXh0LCBUZXh0RmllbGQsIEltYWdlIH0gZnJvbSAnQHNreW5leHVpL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBhcHBDb25maWcgZnJvbSAnLi4vY29uZmlnLmpzb24nO1xyXG5cclxuZnVuY3Rpb24gVGl0bGUocHJvcHMpIHtcclxuICAgIGNvbnN0IFRhZyA9IHByb3BzLnRhZyB8fCAnaDEnO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8VGFnPntwcm9wcy5jaGlsZHJlbn08L1RhZz5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgJHtUYWd9IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHthcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNjAwXX07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG4vKiBmdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuICAgIC8vIEpTWFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8R2xvYmFsU3R5bGUgLz5cclxuICAgICAgICAgICAgPFRpdGxlIHRhZz1cImgyXCI+Qm9hcyB2aW5kYXM8L1RpdGxlPlxyXG4gICAgICAgICAgICA8aDI+RGlzY29yZCAtIGZlbGlwZTwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnaW5hSW5pY2lhbCgpIHtcclxuICAgIC8vY29uc3QgdXNlcm5hbWUgPSAnUGhpbGlwRmVsaXBlJztcclxuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gUmVhY3QudXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3Qgcm90ZWFtZW50byA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW3ZhbGlkYXRlLCBzZXRWYWxpZGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSgnbm9uZScpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVsxMDBdLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy82NjQ2OTQxL3BleGVscy1waG90by02NjQ2OTQxLmpwZWc/Y3M9c3JnYiZkbD1wZXhlbHMtcm9kbmFlLXByb2R1Y3Rpb25zLTY2NDY5NDEuanBnJmZtPWpwZyknLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLCBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJywgYmFja2dyb3VuZEJsZW5kTW9kZTogJ211bHRpcGx5JyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhzOiAnY29sdW1uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtOiAncm93JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJywgbWF4V2lkdGg6ICc3MDBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsIHBhZGRpbmc6ICczMnB4JywgbWFyZ2luOiAnMTZweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogJzAgMnB4IDVweCAxcHggcmdiKDEyMCwgMjI2LCAxNjEpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzEwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7LyogRm9ybXVsw6FyaW8gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcz1cImZvcm1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17ZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3RlYW1lbnRvLnB1c2goJy9jaGF0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3dpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9jaGF0JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiB7IHhzOiAnMTAwJScsIHNtOiAnNTAlJyB9LCB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5Cb3R0b206ICczMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaXRsZSB0YWc9XCJoMlwiPkJvYXMgdmluZGFzIGFvIEhlbHBjb3JkITwvVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJib2R5M1wiIHN0eWxlU2hlZXQ9e3sgbWFyZ2luQm90dG9tOiAnMzJweCcsIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWycwNTAnXSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthcHBDb25maWcubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt1c2VybmFtZX0gb25DaGFuZ2U9e2Z1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndXN1YXJpbyBkaWdpdG91JywgZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9PTkRFIEVTVMOBIE8gVkFMT1I/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vVFJPQ0FSIEEgVkFSScOBVkVMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRVc2VybmFtZSh2YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCB2YWx1ZT17dXNlcm5hbWV9IG9uQ2hhbmdlPXtmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRVc2VybmFtZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZhbGlkYXRlKCdibG9jaycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRWYWxpZGF0ZSgnbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RmllbGRDb2xvcnM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXV0cmFsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1sxMDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbOTAwXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbkNvbG9ySGlnaGxpZ2h0OiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbMTAwXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdFbnRyYXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBgJHt2YWxpZGF0ZX1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uQ29sb3JzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJhc3RDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1tcIjAwMFwiXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW5Db2xvckxpZ2h0OiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNDAwXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluQ29sb3JTdHJvbmc6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs3MDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICB7LyogRm9ybXVsw6FyaW8gKi99XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LyogUGhvdG8gQXJlYSAqL31cclxuICAgICAgICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzIwMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxNnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1syMDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzgwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICcyNDBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6ICcycHggMnB4IDhweCAxcHggIzIyMWMxYydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTZweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYCR7dmFsaWRhdGV9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vZ2l0aHViLmNvbS8ke3VzZXJuYW1lfS5wbmdgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHk0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1sxMDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s5MDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICczcHggMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTAwMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIFBob3RvIEFyZWEgKi99XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbIkJveCIsIkJ1dHRvbiIsIlRleHQiLCJUZXh0RmllbGQiLCJJbWFnZSIsIlJlYWN0IiwidXNlUm91dGVyIiwiYXBwQ29uZmlnIiwiVGl0bGUiLCJwcm9wcyIsIlRhZyIsInRhZyIsInRoZW1lIiwiY29sb3JzIiwicHJpbWFyeSIsImNoaWxkcmVuIiwiUGFnaW5hSW5pY2lhbCIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJ1c2VTdGF0ZSIsInJvdGVhbWVudG8iLCJ2YWxpZGF0ZSIsInNldFZhbGlkYXRlIiwic3R5bGVTaGVldCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kQmxlbmRNb2RlIiwiZmxleERpcmVjdGlvbiIsInhzIiwic20iLCJ3aWR0aCIsIm1heFdpZHRoIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsIm1hcmdpbiIsImJveFNoYWRvdyIsIm5ldXRyYWxzIiwiYXMiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwidGV4dEFsaWduIiwibWFyZ2luQm90dG9tIiwidmFyaWFudCIsImNvbG9yIiwibmFtZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJsZW5ndGgiLCJmdWxsV2lkdGgiLCJ0ZXh0RmllbGRDb2xvcnMiLCJuZXV0cmFsIiwidGV4dENvbG9yIiwibWFpbkNvbG9yIiwibWFpbkNvbG9ySGlnaGxpZ2h0IiwidHlwZSIsImxhYmVsIiwiYnV0dG9uQ29sb3JzIiwiY29udHJhc3RDb2xvciIsIm1haW5Db2xvckxpZ2h0IiwibWFpbkNvbG9yU3Ryb25nIiwiYm9yZGVyIiwiYm9yZGVyQ29sb3IiLCJmbGV4IiwibWluSGVpZ2h0Iiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@skynexui/components":
/*!***************************************!*\
  !*** external "@skynexui/components" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@skynexui/components");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "./config.json":
/*!*********************!*\
  !*** ./config.json ***!
  \*********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"Um centro de bate-papo sobre caridade e trabalho voluntário","theme":{"colors":{"primary":{"100":"#C1EAC5","150":"#c02163","200":"#A3D9A5","300":"#7BC47F","400":"#c88c6a","500":"#3F9142","600":"#2F8132","700":"#207227","800":"#0E5814","900":"#05400A"},"neutrals":{"100":"#f3ede2","200":"#2d2525","300":"#9AA5B1","400":"#52667A","500":"#313D49","600":"#29333D","700":"#212931","800":"#181F25","900":"#101418","999":"#080A0C","000":"#FFFFFF","050":"#9d1b51"}}},"stickers":["https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_1.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_2.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_3.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_4.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_5.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_6.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_7.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_8.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_9.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_10.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_11.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_12.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_13.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_14.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_15.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_16.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_17.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_18.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_19.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_20.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_21.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_22.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_23.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_24.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_25.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_26.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_27.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_28.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_29.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_30.png","http://2.bp.blogspot.com/-d21tffsTIQo/U_H9QjC69gI/AAAAAAAAKqM/wnvOyUr6a_I/s1600/Pikachu%2B2.gif","https://media1.giphy.com/media/BdghqxNFV4efm/200.gif","https://c.tenor.com/TKpmh4WFEsAAAAAC/alura-gaveta-filmes.gif","https://i.pinimg.com/originals/0b/1c/23/0b1c2307c83e1ebdeed72e41b9a058ad.gif","https://c.tenor.com/VylWt5lyjBoAAAAC/omg-yes.gif","https://i.pinimg.com/originals/96/34/c5/9634c520c9a3cd4e7f23190bb2c96500.gif"]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
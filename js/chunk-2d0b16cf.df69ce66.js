(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b16cf"],{2094:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("固定表头")]),n("Explain"),n("Base"),n("HeaderFixedDisabled")],1)},r=[],l=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("div",{staticClass:"tip"},[n("p",[e._v("1、属性"),n("code",[e._v("max-height")]),e._v("为表格的最大高度"),n("br"),e._v(" 2、表格总高度大于"),n("code",[e._v("max-height")]),e._v("值时，表格将会出现纵向滚动条"),n("br"),e._v(" 3、表格总高度小于"),n("code",[e._v("max-height")]),e._v("值时，表格将会高度自适应")])])])}],c=n("2877"),o={},s=Object(c["a"])(o,l,i,!1,null,null,null),d=s.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"基础功能",fileName:"base.md"}}),n("demo-block",[n("div",[n("p",[e._v("1、通过"),n("code",[e._v('fixed-header="true"')]),e._v("设置开启表头固定。默认为"),n("code",[e._v("true")]),n("br"),e._v("2、通过"),n("code",[e._v("max-height")]),e._v("设置表格最大高度")])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table\n        :max-height="200"\n        :fixed-header="true"\n        :columns="columns"\n        :table-data="tableData"\n        rowKeyFieldName="rowkey"\n    />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    { field: "name", key: "a", title: "Name", align: "center" },\n                    { field: "date", key: "b", title: "Date", align: "left" },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        align: "center",\n                    },\n                    {\n                        field: "address",\n                        key: "d",\n                        title: "Address",\n                        align: "left",\n                    },\n                ],\n                tableData: [],\n            };\n        },\n        methods: {\n            initTableData() {\n                let data = [];\n                for (let i = 0; i < 15; i++) {\n                    data.push({\n                        rowkey: i,\n                        name: i,\n                        date: i,\n                        hobby: i,\n                        address: i,\n                    });\n                }\n                this.tableData = data;\n            },\n        },\n        created() {\n            this.initTableData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},u=[];function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("ve-table",{attrs:{"max-height":200,"fixed-header":!0,columns:e.columns,"table-data":e.tableData,rowKeyFieldName:"rowkey"}})]],2)},t=[],n={data:function(){return{columns:[{field:"name",key:"a",title:"Name",align:"center"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"center"},{field:"address",key:"d",title:"Address",align:"left"}],tableData:[]}},methods:{initTableData:function(){for(var e=[],t=0;t<15;t++)e.push({rowkey:t,name:t,date:t,hobby:t,address:t});this.tableData=e}},created:function(){this.initTableData()}};return m({render:e,staticRenderFns:t},n)}()}},y=h,v=Object(c["a"])(y,b,u,!1,null,null,null),g=v.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"禁用固定表头",fileName:"header-fixed-disabled.md"}}),n("demo-block",[n("div",[n("p",[e._v("通过"),n("code",[e._v('fixed-header="false"')]),e._v("禁用固定头。内容过多时，表头跟随滚动")])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table :max-height="200" :fixed-header="false" :columns="columns" :table-data="tableData" />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    { field: "name", key: "a", title: "Name", align: "center" },\n                    { field: "date", key: "b", title: "Date", align: "left" },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        align: "center",\n                    },\n                    {\n                        field: "address",\n                        key: "d",\n                        title: "Address",\n                        align: "left",\n                    },\n                ],\n                tableData: [],\n            };\n        },\n        methods: {\n            initTableData() {\n                let data = [];\n                for (let i = 0; i < 15; i++) {\n                    data.push({\n                        name: i,\n                        date: i,\n                        hobby: i,\n                        address: i,\n                    });\n                }\n                this.tableData = data;\n            },\n        },\n        created() {\n            this.initTableData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},_=[];function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){x(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("ve-table",{attrs:{"max-height":200,"fixed-header":!1,columns:e.columns,"table-data":e.tableData}})]],2)},t=[],n={data:function(){return{columns:[{field:"name",key:"a",title:"Name",align:"center"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"center"},{field:"address",key:"d",title:"Address",align:"left"}],tableData:[]}},methods:{initTableData:function(){for(var e=[],t=0;t<15;t++)e.push({name:t,date:t,hobby:t,address:t});this.tableData=e}},created:function(){this.initTableData()}};return j({render:e,staticRenderFns:t},n)}()}},w=k,P=Object(c["a"])(w,O,_,!1,null,null,null),E=P.exports,N={name:"basic-main",components:{Explain:d,Base:g,HeaderFixedDisabled:E}},T=N,$=Object(c["a"])(T,a,r,!1,null,null,null);t["default"]=$.exports}}]);
//# sourceMappingURL=chunk-2d0b16cf.df69ce66.js.map
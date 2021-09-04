(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8a2253b6"],{"4db6":function(t,e,n){"use strict";n.r(e);var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("实例方法")]),n("Explain"),n("ScrollTo"),n("ScrollToRowKey"),n("API",{attrs:{title:"API",anchor:"API",desc:"实例方法"}})],1)},o=[],c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content example-md-doc"},[n("div",{staticClass:"tip"},[n("p",[t._v("1、实例方法可以直接通过 "),n("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components-edge-cases.html#%E8%AE%BF%E9%97%AE%E5%AD%90%E7%BB%84%E4%BB%B6%E5%AE%9E%E4%BE%8B%E6%88%96%E5%AD%90%E5%85%83%E7%B4%A0"}},[t._v("ref")]),t._v(" 访问")])])])}],r=n("2877"),a={},s=Object(r["a"])(a,c,i,!1,null,null,null),d=s.exports,u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"scrollTo 滚动方法",fileName:"scroll-to.md"}}),n("demo-block",[n("div",[n("p",[t._v("1、将表格滚动到指定位置（px）"),n("br"),t._v("2、参数请参考 "),n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollTo"}},[t._v("scrollTo")])])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <div>\n        <div style="margin-bottom:20px;line-height:3.0;">\n            <button class="button-demo" @click="scrollY(1000)">垂直滚动到1000px</button>\n            <button class="button-demo" @click="scrollY(500)">垂直滚动到500px</button>\n            <button class="button-demo" @click="scrollY(0)">垂直滚动到0px</button>\n            <button class="button-demo" @click="scrollX(500)">水平滚动到300px</button>\n            <button class="button-demo" @click="scrollX(300)">水平滚动到200px</button>\n            <button class="button-demo" @click="scrollX(0)">水平滚动到0px</button>\n        </div>\n        <ve-table\n            ref="tableRef"\n            style="width:1000px"\n            :scroll-width="1600"\n            :max-height="350"\n            border-y\n            :columns="columns"\n            :table-data="tableData"\n            rowKeyFieldName="rowkey"\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    {\n                        field: "col1",\n                        key: "a",\n                        title: "col1",\n                        width: 50,\n                        fixed: "left",\n                    },\n                    {\n                        title: "col2-col3",\n                        fixed: "left",\n                        children: [\n                            {\n                                field: "col2",\n                                key: "b",\n                                title: "col2",\n                                width: 50,\n                            },\n                            {\n                                field: "col3",\n                                key: "c",\n                                title: "col3",\n                                width: 50,\n                            },\n                        ],\n                    },\n                    {\n                        title: "col4-col5-col6",\n                        children: [\n                            {\n                                title: "col4-col5",\n                                children: [\n                                    {\n                                        field: "col4",\n                                        key: "d",\n                                        title: "col4",\n                                        width: 130,\n                                    },\n                                    {\n                                        field: "col5",\n                                        key: "e",\n                                        title: "col5",\n                                        width: 140,\n                                    },\n                                ],\n                            },\n                            {\n                                title: "col6",\n                                field: "col6",\n                                key: "f",\n                                width: 140,\n                            },\n                        ],\n                    },\n                    {\n                        title: "col7",\n                        fixed: "right",\n                        children: [\n                            {\n                                title: "col7-1",\n                                field: "col7",\n                                key: "g",\n                                width: 50,\n                            },\n                        ],\n                    },\n                    {\n                        field: "col8",\n                        key: "h",\n                        title: "col8",\n                        width: 50,\n                        fixed: "right",\n                    },\n                ],\n            };\n        },\n        methods: {\n            initTableData() {\n                let data = [];\n                for (let i = 0; i < 80; i++) {\n                    data.push({\n                        rowkey: i,\n                        col1: i,\n                        col2: i,\n                        col3: i,\n                        col4: i,\n                        col5: i,\n                        col6: i,\n                        col7: i,\n                        col8: i,\n                    });\n                }\n                this.tableData = data;\n            },\n            // scroll y\n            scrollY(val) {\n                this.$refs["tableRef"].scrollTo({ top: val, behavior: "smooth" });\n            },\n            // scroll x\n            scrollX(val) {\n                this.$refs["tableRef"].scrollTo({ left: val, behavior: "smooth" });\n            },\n        },\n        created() {\n            this.initTableData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},f=[];function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p={name:"component-doc",components:{"element-demo0":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("div",[n("div",{staticStyle:{"margin-bottom":"20px","line-height":"3.0"}},[n("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollY(1e3)}}},[t._v("垂直滚动到1000px")]),t._v(" "),n("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollY(500)}}},[t._v("垂直滚动到500px")]),t._v(" "),n("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollY(0)}}},[t._v("垂直滚动到0px")]),t._v(" "),n("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollX(500)}}},[t._v("水平滚动到300px")]),t._v(" "),n("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollX(300)}}},[t._v("水平滚动到200px")]),t._v(" "),n("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollX(0)}}},[t._v("水平滚动到0px")])]),t._v(" "),n("ve-table",{ref:"tableRef",staticStyle:{width:"1000px"},attrs:{"scroll-width":1600,"max-height":350,"border-y":"",columns:t.columns,"table-data":t.tableData,rowKeyFieldName:"rowkey"}})],1)]],2)},e=[],n={data:function(){return{columns:[{field:"col1",key:"a",title:"col1",width:50,fixed:"left"},{title:"col2-col3",fixed:"left",children:[{field:"col2",key:"b",title:"col2",width:50},{field:"col3",key:"c",title:"col3",width:50}]},{title:"col4-col5-col6",children:[{title:"col4-col5",children:[{field:"col4",key:"d",title:"col4",width:130},{field:"col5",key:"e",title:"col5",width:140}]},{title:"col6",field:"col6",key:"f",width:140}]},{title:"col7",fixed:"right",children:[{title:"col7-1",field:"col7",key:"g",width:50}]},{field:"col8",key:"h",title:"col8",width:50,fixed:"right"}]}},methods:{initTableData:function(){for(var t=[],e=0;e<80;e++)t.push({rowkey:e,col1:e,col2:e,col3:e,col4:e,col5:e,col6:e,col7:e,col8:e});this.tableData=t},scrollY:function(t){this.$refs["tableRef"].scrollTo({top:t,behavior:"smooth"})},scrollX:function(t){this.$refs["tableRef"].scrollTo({left:t,behavior:"smooth"})}},created:function(){this.initTableData()}};return b({render:t,staticRenderFns:e},n)}()}},y=p,w=Object(r["a"])(y,u,f,!1,null,null,null),v=w.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"scrollToRowKey 滚动方法",fileName:"scroll-to-row-key.md"}}),n("demo-block",[n("div",[n("p",[t._v("1、将表格滚动到行为 rowKey 的位置")])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <div>\n        <div style="margin-bottom:20px;line-height:3.0;">\n            <button class="button-demo" @click="scrollToRowKey(30)">滚动到rowKey为30的行</button>\n            <button class="button-demo" @click="scrollToRowKey(50)">滚动到rowKey为50的行</button>\n            <button class="button-demo" @click="scrollToRowKey(0)">滚动到rowKey为0的行</button>\n        </div>\n        <ve-table\n            ref="tableRef"\n            style="width:1000px"\n            :scroll-width="1600"\n            :max-height="350"\n            border-y\n            :columns="columns"\n            :table-data="tableData"\n            rowKeyFieldName="rowkey"\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    {\n                        field: "col1",\n                        key: "a",\n                        title: "col1",\n                        width: 50,\n                        fixed: "left",\n                    },\n                    {\n                        title: "col2-col3",\n                        fixed: "left",\n                        children: [\n                            {\n                                field: "col2",\n                                key: "b",\n                                title: "col2",\n                                width: 50,\n                            },\n                            {\n                                field: "col3",\n                                key: "c",\n                                title: "col3",\n                                width: 50,\n                            },\n                        ],\n                    },\n                    {\n                        title: "col4-col5-col6",\n                        children: [\n                            {\n                                title: "col4-col5",\n                                children: [\n                                    {\n                                        field: "col4",\n                                        key: "d",\n                                        title: "col4",\n                                        width: 130,\n                                    },\n                                    {\n                                        field: "col5",\n                                        key: "e",\n                                        title: "col5",\n                                        width: 140,\n                                    },\n                                ],\n                            },\n                            {\n                                title: "col6",\n                                field: "col6",\n                                key: "f",\n                                width: 140,\n                            },\n                        ],\n                    },\n                    {\n                        title: "col7",\n                        fixed: "right",\n                        children: [\n                            {\n                                title: "col7-1",\n                                field: "col7",\n                                key: "g",\n                                width: 50,\n                            },\n                        ],\n                    },\n                    {\n                        field: "col8",\n                        key: "h",\n                        title: "col8",\n                        width: 50,\n                        fixed: "right",\n                    },\n                ],\n            };\n        },\n        methods: {\n            initTableData() {\n                let data = [];\n                for (let i = 0; i < 80; i++) {\n                    data.push({\n                        rowkey: i,\n                        col1: i,\n                        col2: i,\n                        col3: i,\n                        col4: i,\n                        col5: i,\n                        col6: i,\n                        col7: i,\n                        col8: i,\n                    });\n                }\n                this.tableData = data;\n            },\n            // scroll y\n            scrollToRowKey(rowKey) {\n                this.$refs["tableRef"].scrollToRowKey({ rowKey: rowKey });\n            },\n        },\n        created() {\n            this.initTableData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},x=[];function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){O(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function O(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var E={name:"component-doc",components:{"element-demo0":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("div",[n("div",{staticStyle:{"margin-bottom":"20px","line-height":"3.0"}},[n("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollToRowKey(30)}}},[t._v("滚动到rowKey为30的行")]),t._v(" "),n("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollToRowKey(50)}}},[t._v("滚动到rowKey为50的行")]),t._v(" "),n("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollToRowKey(0)}}},[t._v("滚动到rowKey为0的行")])]),t._v(" "),n("ve-table",{ref:"tableRef",staticStyle:{width:"1000px"},attrs:{"scroll-width":1600,"max-height":350,"border-y":"",columns:t.columns,"table-data":t.tableData,rowKeyFieldName:"rowkey"}})],1)]],2)},e=[],n={data:function(){return{columns:[{field:"col1",key:"a",title:"col1",width:50,fixed:"left"},{title:"col2-col3",fixed:"left",children:[{field:"col2",key:"b",title:"col2",width:50},{field:"col3",key:"c",title:"col3",width:50}]},{title:"col4-col5-col6",children:[{title:"col4-col5",children:[{field:"col4",key:"d",title:"col4",width:130},{field:"col5",key:"e",title:"col5",width:140}]},{title:"col6",field:"col6",key:"f",width:140}]},{title:"col7",fixed:"right",children:[{title:"col7-1",field:"col7",key:"g",width:50}]},{field:"col8",key:"h",title:"col8",width:50,fixed:"right"}]}},methods:{initTableData:function(){for(var t=[],e=0;e<80;e++)t.push({rowkey:e,col1:e,col2:e,col3:e,col4:e,col5:e,col6:e,col7:e,col8:e});this.tableData=t},scrollToRowKey:function(t){this.$refs["tableRef"].scrollToRowKey({rowKey:t})}},created:function(){this.initTableData()}};return _({render:t,staticRenderFns:e},n)}()}},T=E,j=Object(r["a"])(T,k,x,!1,null,null,null),K=j.exports,D=n("c8d7"),R={name:"basic-main",components:{Explain:d,ScrollTo:v,ScrollToRowKey:K,API:D["a"]}},P=R,C=Object(r["a"])(P,l,o,!1,null,null,null);e["default"]=C.exports},c8d7:function(t,e,n){"use strict";var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("tpl",{attrs:{desc:t.desc,anchor:t.anchor,"table-data":t.db.instanceMethods.data,columns:t.db.instanceMethods.columns}})],1)},o=[],c=n("3ef3"),i=n("d890"),r={components:{tpl:c["a"]},props:{anchor:{type:String,default:"实例方法"},desc:{type:String,default:"Table Instance Methods"}},data:function(){return{db:i["a"]}}},a=r,s=n("2877"),d=Object(s["a"])(a,l,o,!1,null,null,null);e["a"]=d.exports}}]);
//# sourceMappingURL=chunk-8a2253b6.69a0c9c4.js.map
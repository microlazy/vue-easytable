(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c503f11"],{"50a9":function(e,t,n){"use strict";var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("tpl",{attrs:{desc:e.desc,anchor:e.anchor,"table-data":e.db.editOption.data,columns:e.db.editOption.columns}})],1)},a=[],i=n("3ef3"),o=n("7eb4"),r={components:{tpl:i["a"]},props:{anchor:{type:String,default:"Cell Edit option"},desc:{type:String,default:"editOption"}},data:function(){return{db:o["a"]}}},d=r,c=n("2877"),s=Object(c["a"])(d,l,a,!1,null,null,null);t["a"]=s.exports},5682:function(e,t,n){"use strict";n.r(t);var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Cell Edit")]),n("Explain"),n("ShortCuts"),n("Base"),n("InstanceMethods"),n("CombineColumnFixed"),n("CombineElementUi"),n("API",{attrs:{title:"API",anchor:"API",desc:"eidtOption 单元格编辑配置"}})],1)},a=[],i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("div",{staticClass:"tip"},[n("p",[e._v("1、Configure the cell editing function through the "),n("code",[e._v("editoption")]),e._v(" attribute"),n("br"),e._v(" 2、Set 'edit=true' allowed columns edit through the 'columns' object"),n("br"),e._v(" 3、You can use shortcut keys and edit like excel"),n("br")])])])}],r=n("2877"),d={},c=Object(r["a"])(d,i,o,!1,null,null,null),s=c.exports,u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"Shortcuts",fileName:"shortcuts.md"}}),n("p",[e._v("Editable cells support the following shortcut keys (refer to excel shortcut keys):")]),e._m(0)],1)},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",{staticClass:"example-table"},[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"left"}},[e._v("Feature")]),n("th",{staticStyle:{"text-align":"left"}},[e._v("Shortcuts")])])]),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"left"}},[e._v("The active cell starts editing")]),n("td",{staticStyle:{"text-align":"left"}},[n("code",[e._v("F2")])])]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[e._v("Stop editing and stay in the current cell")]),n("td",{staticStyle:{"text-align":"left"}},[n("code",[e._v("Ctrl")]),e._v(" + "),n("code",[e._v("Enter")])])]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[e._v("Wrap text in editing cell")]),n("td",{staticStyle:{"text-align":"left"}},[n("code",[e._v("Alt")]),e._v(" + "),n("code",[e._v("Enter")])])]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[e._v("Empty active cell contents")]),n("td",{staticStyle:{"text-align":"left"}},[n("code",[e._v("Delete")])])]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[e._v("Clear the contents of the active cell and starts editing")]),n("td",{staticStyle:{"text-align":"left"}},[n("code",[e._v("BackSpace")])])]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[e._v("Empty the contents of the active cell and fill in the blanks")]),n("td",{staticStyle:{"text-align":"left"}},[n("code",[e._v("Space")])])]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[e._v("Stops editing and moves the active cell down")]),n("td",{staticStyle:{"text-align":"left"}},[n("code",[e._v("Enter")])])]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[e._v("Stops editing and moves the active cell up")]),n("td",{staticStyle:{"text-align":"left"}},[n("code",[e._v("Shift")]),e._v(" + "),n("code",[e._v("Enter")])])]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[e._v("Stops editing and moves the active cell to the right")]),n("td",{staticStyle:{"text-align":"left"}},[n("code",[e._v("Tab")])])]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[e._v("Stops editing and moves the active cell to the left")]),n("td",{staticStyle:{"text-align":"left"}},[n("code",[e._v("Shift")]),e._v(" + "),n("code",[e._v("Tab")])])]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[e._v("It supports directly filling text in editable cells")]),n("td",{staticStyle:{"text-align":"left"}},[e._v("-")])]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[e._v("When long text input is supported, the edit box automatically expands and contracts")]),n("td",{staticStyle:{"text-align":"left"}},[e._v("-")])])])])}],f={},h=Object(r["a"])(f,u,m,!1,null,null,null),b=h.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"Basic usage",fileName:"base.md"}}),n("demo-block",[n("div",[n("p",[e._v("The "),n("code",[e._v("cellValueChange")]),e._v(" method will be triggered after cell editing is stopped,The parameter "),n("code",[e._v("row")]),e._v(" is the updated row data information, and the parameter "),n("code",[e._v("column")]),e._v(" is the currently edited column information")])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <ve-table\n            rowKeyFieldName="rowKey"\n            :fixed-header="true"\n            :columns="columns"\n            :table-data="tableData"\n            :editOption="editOption"\n            :rowStyleOption="rowStyleOption"\n            border-y\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                rowStyleOption: {\n                    clickHighlight: false,\n                },\n                // edit option\n                editOption: {\n                    // cell value change\n                    cellValueChange: ({ row, column }) => {\n                        console.log("cellValueChange row::", row);\n                        console.log("cellValueChange column::", column);\n                    },\n                },\n                columns: [\n                    {\n                        field: "",\n                        key: "a",\n                        title: "",\n                        width: 50,\n                        align: "center",\n                        renderBodyCell: ({ row, column, rowIndex }, h) => {\n                            return ++rowIndex;\n                        },\n                    },\n                    {\n                        field: "name",\n                        key: "name",\n                        title: "Name",\n                        align: "left",\n                        width: "15%",\n                        edit: true,\n                    },\n                    {\n                        field: "date",\n                        key: "date",\n                        title: "Date",\n                        align: "left",\n                        width: "15%",\n                        edit: true,\n                    },\n                    {\n                        field: "number",\n                        key: "number",\n                        title: "Number",\n                        align: "right",\n                        width: "30%",\n                        edit: true,\n                    },\n                    {\n                        field: "address",\n                        key: "address",\n                        title: "Address",\n                        align: "left",\n                        width: "40%",\n                        edit: true,\n                    },\n                ],\n                // table data\n                tableData: [\n                    {\n                        name: "John",\n                        date: "1900-05-20",\n                        number: "32",\n                        address: "No.1 Century Avenue, Shanghai",\n                        rowKey: 0,\n                    },\n                    {\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        number: "676",\n                        address: "No.1 Century Avenue, Beijing",\n                        rowKey: 1,\n                    },\n                    {\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        number: "76",\n                        address: "No.1 Century Avenue, Chongqing",\n                        rowKey: 2,\n                    },\n                    {\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        number: "7797",\n                        address: "No.1 Century Avenue, Xiamen",\n                        rowKey: 3,\n                    },\n                    {\n                        name: "Jami",\n                        date: "2020-09-20",\n                        number: "8978",\n                        address: "No.1 Century Avenue, Shenzhen",\n                        rowKey: 4,\n                    },\n                ],\n            };\n        },\n    };\n<\/script>\n')])])])],2)],1)},g=[];function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("div",[n("ve-table",{attrs:{rowKeyFieldName:"rowKey","fixed-header":!0,columns:e.columns,"table-data":e.tableData,editOption:e.editOption,rowStyleOption:e.rowStyleOption,"border-y":""}})],1)]],2)},t=[],n={data:function(){return{rowStyleOption:{clickHighlight:!1},editOption:{cellValueChange:function(e){var t=e.row,n=e.column;console.log("cellValueChange row::",t),console.log("cellValueChange column::",n)}},columns:[{field:"",key:"a",title:"",width:50,align:"center",renderBodyCell:function(e,t){e.row,e.column;var n=e.rowIndex;return++n}},{field:"name",key:"name",title:"Name",align:"left",width:"15%",edit:!0},{field:"date",key:"date",title:"Date",align:"left",width:"15%",edit:!0},{field:"number",key:"number",title:"Number",align:"right",width:"30%",edit:!0},{field:"address",key:"address",title:"Address",align:"left",width:"40%",edit:!0}],tableData:[{name:"John",date:"1900-05-20",number:"32",address:"No.1 Century Avenue, Shanghai",rowKey:0},{name:"Dickerson",date:"1910-06-20",number:"676",address:"No.1 Century Avenue, Beijing",rowKey:1},{name:"Larsen",date:"2000-07-20",number:"76",address:"No.1 Century Avenue, Chongqing",rowKey:2},{name:"Geneva",date:"2010-08-20",number:"7797",address:"No.1 Century Avenue, Xiamen",rowKey:3},{name:"Jami",date:"2020-09-20",number:"8978",address:"No.1 Century Avenue, Shenzhen",rowKey:4}]}}};return v({render:e,staticRenderFns:t},n)}()}},C=O,_=Object(r["a"])(C,y,g,!1,null,null,null),x=_.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"Instance method",fileName:"instance-method.md"}}),n("demo-block",[n("div",[n("p",[e._v("1、Open the edited cell through instance method "),n("code",[e._v("startEditingCell({ rowKey, colKey, defaultValue })")])])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <button class="button-demo" @click="startEditingCell(0,\'name\')">Edit Cell 0-0</button>\n        <button class="button-demo" @click="startEditingCell(2,\'hobby\',\'\')">\n            Edit And Clear Cell 2-2\n        </button>\n        <br />\n        <br />\n        <ve-table\n            ref="tableRef"\n            rowKeyFieldName="rowKey"\n            :max-height="300"\n            :fixed-header="true"\n            :columns="columns"\n            :table-data="tableData"\n            :editOption="editOption"\n            border-y\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                // edit option\n                editOption: {\n                    // cell value change\n                    cellValueChange: ({ row, column }) => {\n                        console.log("cellValueChange row::", row);\n                        console.log("cellValueChange column::", column);\n                    },\n                },\n                columns: [\n                    {\n                        field: "",\n                        key: "a",\n                        title: "",\n                        width: 50,\n                        align: "center",\n                        renderBodyCell: ({ row, column, rowIndex }, h) => {\n                            return ++rowIndex;\n                        },\n                    },\n                    {\n                        field: "name",\n                        key: "name",\n                        title: "Name",\n                        align: "left",\n                        width: "15%",\n                        edit: true,\n                    },\n                    {\n                        field: "date",\n                        key: "date",\n                        title: "Date",\n                        align: "left",\n                        width: "15%",\n                        edit: true,\n                    },\n                    {\n                        field: "hobby",\n                        key: "hobby",\n                        title: "Hobby",\n                        align: "left",\n                        width: "30%",\n                        edit: true,\n                    },\n                    {\n                        field: "address",\n                        key: "address",\n                        title: "Address",\n                        align: "left",\n                        width: "40%",\n                        edit: true,\n                    },\n                ],\n                // table data\n                tableData: [\n                    {\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shanghai",\n                        rowKey: 0,\n                    },\n                    {\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Beijing",\n                        rowKey: 1,\n                    },\n                    {\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Chongqing",\n                        rowKey: 2,\n                    },\n                    {\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Xiamen",\n                        rowKey: 3,\n                    },\n                    {\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                        rowKey: 4,\n                    },\n                ],\n            };\n        },\n        methods: {\n            // start editing cell\n            startEditingCell(rowKey, colKey, defaultValue) {\n                this.$refs["tableRef"].startEditingCell({ rowKey, colKey, defaultValue });\n            },\n        },\n    };\n<\/script>\n')])])])],2)],1)},S=[];function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("div",[n("button",{staticClass:"button-demo",on:{click:function(t){return e.startEditingCell(0,"name")}}},[e._v("Edit Cell 0-0")]),e._v(" "),n("button",{staticClass:"button-demo",on:{click:function(t){return e.startEditingCell(2,"hobby","")}}},[e._v("\n            Edit And Clear Cell 2-2\n        ")]),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("ve-table",{ref:"tableRef",attrs:{rowKeyFieldName:"rowKey","max-height":300,"fixed-header":!0,columns:e.columns,"table-data":e.tableData,editOption:e.editOption,"border-y":""}})],1)]],2)},t=[],n={data:function(){return{editOption:{cellValueChange:function(e){var t=e.row,n=e.column;console.log("cellValueChange row::",t),console.log("cellValueChange column::",n)}},columns:[{field:"",key:"a",title:"",width:50,align:"center",renderBodyCell:function(e,t){e.row,e.column;var n=e.rowIndex;return++n}},{field:"name",key:"name",title:"Name",align:"left",width:"15%",edit:!0},{field:"date",key:"date",title:"Date",align:"left",width:"15%",edit:!0},{field:"hobby",key:"hobby",title:"Hobby",align:"left",width:"30%",edit:!0},{field:"address",key:"address",title:"Address",align:"left",width:"40%",edit:!0}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai",rowKey:0},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing",rowKey:1},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing",rowKey:2},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen",rowKey:3},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen",rowKey:4}]}},methods:{startEditingCell:function(e,t,n){this.$refs["tableRef"].startEditingCell({rowKey:e,colKey:t,defaultValue:n})}}};return K({render:e,staticRenderFns:t},n)}()}},N=E,P=Object(r["a"])(N,k,S,!1,null,null,null),A=P.exports,V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"Combine column fixed",fileName:"combine-column-fixed.md"}}),n("demo-block",[n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <ve-table\n            :scroll-width="1600"\n            :max-height="500"\n            row-key-field-name="rowKey"\n            :fixed-header="true"\n            :columns="columns"\n            :table-data="tableData"\n            :edit-option="editOption"\n            :row-style-option="rowStyleOption"\n            :virtual-scroll-option="{enable:true}"\n            border-y\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                rowStyleOption: {\n                    clickHighlight: false,\n                },\n                // edit option\n                editOption: {\n                    // cell value change\n                    cellValueChange: ({ row, column }) => {\n                        console.log("cellValueChange row::", row);\n                        console.log("cellValueChange column::", column);\n                    },\n                },\n                columns: [\n                    {\n                        field: "col1",\n                        key: "col1",\n                        title: "col1",\n                        width: 50,\n                        fixed: "left",\n                        edit: true,\n                    },\n                    {\n                        title: "col2-col3",\n                        fixed: "left",\n                        children: [\n                            {\n                                field: "col2",\n                                key: "col2",\n                                title: "col2",\n                                width: 50,\n                                edit: true,\n                            },\n                            {\n                                field: "col3",\n                                key: "col3",\n                                title: "col3",\n                                width: 50,\n                                edit: true,\n                            },\n                        ],\n                    },\n                    {\n                        title: "col4-col5-col6",\n                        children: [\n                            {\n                                title: "col4-col5",\n                                children: [\n                                    {\n                                        field: "col4",\n                                        key: "col4",\n                                        title: "col4",\n                                        width: 130,\n                                        edit: true,\n                                    },\n                                    {\n                                        field: "col5",\n                                        key: "col5",\n                                        title: "col5",\n                                        width: 140,\n                                        edit: true,\n                                    },\n                                ],\n                            },\n                            {\n                                title: "col6",\n                                field: "col6",\n                                key: "col6",\n                                width: 140,\n                                edit: true,\n                            },\n                        ],\n                    },\n                    {\n                        title: "col7",\n                        fixed: "right",\n                        children: [\n                            {\n                                title: "col7-1",\n                                field: "col7",\n                                key: "col7",\n                                width: 50,\n                                edit: true,\n                            },\n                        ],\n                    },\n                    {\n                        field: "col8",\n                        key: "col8",\n                        title: "col8",\n                        width: 50,\n                        fixed: "right",\n                        edit: true,\n                    },\n                ],\n                // table data\n                tableData: [],\n            };\n        },\n\n        methods: {\n            initTableData() {\n                let data = [];\n                for (let i = 0; i < 100; i++) {\n                    data.push({\n                        rowKey: i,\n                        col1: `A` + i,\n                        col2: `B` + i,\n                        col3: `C` + i,\n                        col4: `D` + i,\n                        col5: `E` + i,\n                        col6: `F` + i,\n                        col7: `G` + i,\n                        col8: `H` + i,\n                    });\n                }\n                this.tableData = data;\n            },\n        },\n        created() {\n            this.initTableData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},I=[];function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){F(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var J={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("div",[n("ve-table",{attrs:{"scroll-width":1600,"max-height":500,"row-key-field-name":"rowKey","fixed-header":!0,columns:e.columns,"table-data":e.tableData,"edit-option":e.editOption,"row-style-option":e.rowStyleOption,"virtual-scroll-option":{enable:!0},"border-y":""}})],1)]],2)},t=[],n={data:function(){return{rowStyleOption:{clickHighlight:!1},editOption:{cellValueChange:function(e){var t=e.row,n=e.column;console.log("cellValueChange row::",t),console.log("cellValueChange column::",n)}},columns:[{field:"col1",key:"col1",title:"col1",width:50,fixed:"left",edit:!0},{title:"col2-col3",fixed:"left",children:[{field:"col2",key:"col2",title:"col2",width:50,edit:!0},{field:"col3",key:"col3",title:"col3",width:50,edit:!0}]},{title:"col4-col5-col6",children:[{title:"col4-col5",children:[{field:"col4",key:"col4",title:"col4",width:130,edit:!0},{field:"col5",key:"col5",title:"col5",width:140,edit:!0}]},{title:"col6",field:"col6",key:"col6",width:140,edit:!0}]},{title:"col7",fixed:"right",children:[{title:"col7-1",field:"col7",key:"col7",width:50,edit:!0}]},{field:"col8",key:"col8",title:"col8",width:50,fixed:"right",edit:!0}],tableData:[]}},methods:{initTableData:function(){for(var e=[],t=0;t<100;t++)e.push({rowKey:t,col1:"A"+t,col2:"B"+t,col3:"C"+t,col4:"D"+t,col5:"E"+t,col6:"F"+t,col7:"G"+t,col8:"H"+t});this.tableData=e}},created:function(){this.initTableData()}};return $({render:e,staticRenderFns:t},n)}()}},z=J,G=Object(r["a"])(z,V,I,!1,null,null,null),T=G.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"Combine element-ui",fileName:"combine-element-ui.md"}}),n("demo-block",[n("div",[n("p",[e._v("1、You can also edit date, number, dropdown and other functions in combination with the element UI component")])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <button class="button-demo" @click="submit()">Submit</button>\n        <br />\n        <br />\n        <ve-table\n            rowKeyFieldName="rowKey"\n            :fixed-header="true"\n            :columns="columns"\n            :table-data="tableData"\n            :cell-selection-option="cellSelectionOption"\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                // submit data\n                submitData: [\n                    // {\n                    //     rowKey: 0,\n                    //     field: "",\n                    //     value: "",\n                    // },\n                ],\n                cellSelectionOption: {\n                    // default true\n                    enable: false,\n                },\n                columns: [\n                    {\n                        field: "name",\n                        key: "name",\n                        title: "Name",\n                        align: "left",\n                        width: "15%",\n                    },\n                    {\n                        field: "date",\n                        key: "date",\n                        title: "Date",\n                        align: "left",\n                        width: "15%",\n                        renderBodyCell: ({ row, column, rowIndex }, h) => {\n                            return (\n                                <el-date-picker\n                                    size="small"\n                                    value={row["date"]}\n                                    on-input={(val) => {\n                                        row["date"] = val;\n                                        this.cellDataChange(row, column, val);\n                                    }}\n                                    type="date"\n                                    value-format="yyyy-MM-dd"\n                                    placeholder="选择日期"\n                                ></el-date-picker>\n                            );\n                        },\n                    },\n                    {\n                        field: "age",\n                        key: "age",\n                        title: "Age",\n                        align: "center",\n                        width: "30%",\n                        renderBodyCell: ({ row, column, rowIndex }, h) => {\n                            return (\n                                <el-input-number\n                                    size="small"\n                                    min={1}\n                                    value={row["age"]}\n                                    on-input={(val) => {\n                                        row["age"] = val;\n                                    }}\n                                    on-change={(val) => {\n                                        this.cellDataChange(row, column, val);\n                                    }}\n                                ></el-input-number>\n                            );\n                        },\n                    },\n                    {\n                        field: "gender",\n                        key: "gender",\n                        title: "Gender",\n                        align: "left",\n                        width: "40%",\n                        renderBodyCell: ({ row, column, rowIndex }, h) => {\n                            return (\n                                <el-select\n                                    size="small"\n                                    value={row["gender"]}\n                                    on-input={(val) => {\n                                        row["gender"] = val;\n                                        this.cellDataChange(row, column, val);\n                                    }}\n                                    placeholder="请选择"\n                                >\n                                    <el-option label="female" value="female"></el-option>\n                                    <el-option label="male" value="male"></el-option>\n                                </el-select>\n                            );\n                        },\n                    },\n                ],\n                // table data\n                tableData: [\n                    {\n                        name: "John",\n                        date: "1900-05-20",\n                        age: 17,\n                        gender: "female",\n                        rowKey: 0,\n                    },\n                    {\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        age: 20,\n                        gender: "male",\n                        rowKey: 1,\n                    },\n                    {\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        age: 22,\n                        gender: "female",\n                        rowKey: 2,\n                    },\n                    {\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        age: 18,\n                        gender: "male",\n                        rowKey: 3,\n                    },\n                    {\n                        name: "Jami",\n                        date: "2020-09-20",\n                        age: 29,\n                        gender: "female",\n                        rowKey: 4,\n                    },\n                ],\n            };\n        },\n        methods: {\n            // submit\n            submit() {\n                alert(JSON.stringify(this.submitData));\n            },\n\n            // cell data change\n            cellDataChange(row, column, cellValue) {\n                const { submitData } = this;\n\n                let currentCell = submitData.find(\n                    (x) => x.rowKey === row["rowKey"] && x.field === column.field,\n                );\n\n                if (currentCell) {\n                    currentCell.value = cellValue;\n                } else {\n                    let newCell = {\n                        rowKey: row["rowKey"],\n                        field: column.field,\n                        value: cellValue,\n                    };\n                    this.submitData.push(newCell);\n                }\n            },\n        },\n    };\n<\/script>\n')])])])],2)],1)},R=[];function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){q(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var X={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("div",[n("button",{staticClass:"button-demo",on:{click:function(t){return e.submit()}}},[e._v("Submit")]),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("ve-table",{attrs:{rowKeyFieldName:"rowKey","fixed-header":!0,columns:e.columns,"table-data":e.tableData,"cell-selection-option":e.cellSelectionOption}})],1)]],2)},t=[],n={data:function(){var e=this;this.$createElement;return{submitData:[],cellSelectionOption:{enable:!1},columns:[{field:"name",key:"name",title:"Name",align:"left",width:"15%"},{field:"date",key:"date",title:"Date",align:"left",width:"15%",renderBodyCell:function(t,n){var l=t.row,a=t.column;t.rowIndex;return n("el-date-picker",{attrs:{size:"small",value:l["date"],type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},on:{input:function(t){l["date"]=t,e.cellDataChange(l,a,t)}}})}},{field:"age",key:"age",title:"Age",align:"center",width:"30%",renderBodyCell:function(t,n){var l=t.row,a=t.column;t.rowIndex;return n("el-input-number",{attrs:{size:"small",min:1,value:l["age"]},on:{input:function(e){l["age"]=e},change:function(t){e.cellDataChange(l,a,t)}}})}},{field:"gender",key:"gender",title:"Gender",align:"left",width:"40%",renderBodyCell:function(t,n){var l=t.row,a=t.column;t.rowIndex;return n("el-select",{attrs:{size:"small",value:l["gender"],placeholder:"请选择"},on:{input:function(t){l["gender"]=t,e.cellDataChange(l,a,t)}}},[n("el-option",{attrs:{label:"female",value:"female"}}),n("el-option",{attrs:{label:"male",value:"male"}})])}}],tableData:[{name:"John",date:"1900-05-20",age:17,gender:"female",rowKey:0},{name:"Dickerson",date:"1910-06-20",age:20,gender:"male",rowKey:1},{name:"Larsen",date:"2000-07-20",age:22,gender:"female",rowKey:2},{name:"Geneva",date:"2010-08-20",age:18,gender:"male",rowKey:3},{name:"Jami",date:"2020-09-20",age:29,gender:"female",rowKey:4}]}},methods:{submit:function(){alert(JSON.stringify(this.submitData))},cellDataChange:function(e,t,n){var l=this.submitData,a=l.find((function(n){return n.rowKey===e["rowKey"]&&n.field===t.field}));if(a)a.value=n;else{var i={rowKey:e["rowKey"],field:t.field,value:n};this.submitData.push(i)}}}};return M({render:e,staticRenderFns:t},n)}()}},U=X,W=Object(r["a"])(U,H,R,!1,null,null,null),Y=W.exports,Q=n("50a9"),Z={name:"basic-main",components:{Explain:s,ShortCuts:b,Base:x,InstanceMethods:A,CombineColumnFixed:T,CombineElementUi:Y,API:Q["a"]}},ee=Z,te=Object(r["a"])(ee,l,a,!1,null,null,null);t["default"]=te.exports}}]);
//# sourceMappingURL=chunk-3c503f11.d82009fb.js.map
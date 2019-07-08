(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d230aa5"],{ecf7:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"authors"},[s("div",{staticClass:"page--head"},[s("div",{staticClass:"wrap--content"},[s("div",{staticClass:"page--title"},[s("div",[s("h1",{staticClass:"title--text"},[t._v("\n                        Authors\n                        "),t.total?s("span",{staticClass:"badge--count"},[t._v("\n                            ("+t._s(t.total)+")\n                        ")]):t._e()]),s("breadcrumb",{attrs:{links:t.breadcrumb}})],1),t.isInUserPermissions("author.manage")?s("div",{staticClass:"page--title--action ml-auto"},[s("router-link",{staticClass:"button is-primary",attrs:{to:{path:"/authorForm"}}},[t._v("Add New Author")])],1):t._e()])])]),s("div",{staticClass:"wrap--content"},[s("div",{staticClass:"card-filter--herader"},[s("filter-items",{attrs:{allItemChecked:t.allItemChecked},on:{selectAllItems:t.selectAllItems,featchByFilter:t.featchByFilter}})],1),t.dataLoading?[s("loading-data")]:[t.authors.length?s("list",{attrs:{allItemsSelected:t.allItemsSelected,data:t.authors},on:{fetchAllItems:t.fetchAllItems,checkButtonSelectAll:t.checkButtonSelectAll}}):[s("no-data",{attrs:{text:"No authors have been created"}})]],t.authors.length?[s("div",{staticClass:"pagination--custom--number"},[s("b-pagination",{attrs:{total:t.total,current:t.page,order:t.order,rounded:!0,"per-page":t.limit},on:{"update:current":function(e){t.page=e}}})],1)]:t._e()],2)])},a=[],n=(s("96cf"),s("3b8d")),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._l(t.data,function(e){return s("item",{key:e.id,attrs:{item:e,itemsSelected:t.itemsSelected},on:{fetchAllItems:t.fetchAllItems,checkboxItem:t.checkboxItemStatus}})}),[s("div",{staticClass:"all--actions",class:{"show--action--bottom":t.itemsSelected.length}},[s("div",{staticClass:"wrap--content"},[s("button",{staticClass:"button is-danger",on:{click:function(e){return t.deleteItems()}}},[t._v("Delete All Selected")])])])]],2)},l=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"block--item"},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"item--checkbox"},[s("b-checkbox",{attrs:{"native-value":t.item.id},on:{input:function(e){return t.updateCheckbox(t.item.id)}},model:{value:t.checkItemSelected,callback:function(e){t.checkItemSelected=e},expression:"checkItemSelected"}})],1),s("div",{staticClass:"col-12 col-sm-6 col-xl table--item"},[s("div",{staticClass:"block--item--title d-flex align-items-center item--text"},[s("div",{staticClass:"text--title"},[t._v(t._s(t.item.name))])])]),s("div",{staticClass:"col-12 col-sm-6 col-xl table--item"},[s("div",{staticClass:"block--item--title d-flex align-items-center item--text"},[s("div",{staticClass:"text--title"},[t._v(t._s(t.item.description))])])]),s("div",{staticClass:"col-12 col-sm-6 col-xl table--item"},[s("div",{staticClass:"item--text"},[t._m(0),t._v("\n        "+t._s(t.item.created)+"\n      ")])]),s("div",{staticClass:"col-12 col-sm-12 col-xl item--text table--item"},[s("div",{staticClass:"all--item--action d-flex align-item-center"},[s("div",{staticClass:"all--item--action d-flex align-item-center"},[t.item.policies.indexOf("author.manage")>-1?s("router-link",{staticClass:"button--circle is-primary-light",attrs:{to:"/authorForm/"+t.item.id}},[s("i",{staticClass:"fas fa-pen"})]):t._e(),t.item.policies.indexOf("author.manage")>-1?s("button",{staticClass:"button--circle is-danger-light",on:{click:function(e){return t.deleteItem(t.item.id)}}},[s("i",{staticClass:"fas fa-trash"})]):t._e()],1)])])])])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon"},[s("i",{staticClass:"fas fa-clock"})])}],u=s("d7f2"),h=u["a"].get("authors"),m={props:["item","itemsSelected"],data:function(){return{checkItemSelected:!1}},watch:{itemsSelected:function(){var t=this;this.itemsSelected.length?this.itemsSelected.map(function(e){e==t.item.id&&(t.checkItemSelected=!0)}):this.checkItemSelected=!1},$route:function(t,e){this.fetchAllItems()}},methods:{deleteItem:function(t){this.confirmCustomDelete(t)},updateCheckbox:function(){this.$emit("checkboxItem",{id:this.item.id,status:this.checkItemSelected})},updateAuthor:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(e,s){var i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h.updateAuthor(e,s);case 2:i=t.sent,this.aleartMessage(i.message);case 4:case"end":return t.stop()}},t,this)}));function e(e,s){return t.apply(this,arguments)}return e}(),deleteAuthor:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(e){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h.deleteAuthor(e);case 2:s=t.sent,this.aleartMessage(s.message),this.$emit("fetchAllItems");case 5:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),aleartMessage:function(t){this.$snackbar.open({message:t,type:"is-success",position:"is-bottom-right",actionText:"OK",queue:!1,duration:3e3,indefinite:!1})},confirmCustomDelete:function(t){var e=this;this.$dialog.confirm({title:"Deleting Author",message:"Are you sure you want to <b>delete</b> This Author? This action cannot be undone.",confirmText:"Delete Group",type:"is-danger",hasIcon:!0,onConfirm:function(){return e.deleteAuthor(t)}})}}},d=m,f=s("2877"),p=Object(f["a"])(d,r,o,!1,null,null,null),g=p.exports,v=u["a"].get("authors"),b={props:["data","allItemsSelected"],data:function(){return{itemsSelected:[]}},components:{Item:g},watch:{allItemsSelected:function(){var t=this;this.allItemsSelected?this.data.map(function(e){t.itemsSelected.push(e.id)}):this.itemsSelected=[]},itemsSelected:function(){this.itemsSelected.length&&this.$emit("checkButtonSelectAll",this.itemsSelected)}},methods:{checkboxItemStatus:function(t){if(1==t.status)!this.itemsSelected.indexOf(t.id)>-1&&this.itemsSelected.push(t.id);else if(this.itemsSelected.indexOf(t.id)>-1)for(var e=0;e<this.itemsSelected.length;e++)this.itemsSelected[e]==t.id&&this.itemsSelected.splice(e,1)},deleteItems:function(){this.confirmCustomDelete(this.itemsSelected)},deleteCategory:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,v.deleteAuthor(e);case 2:t.sent,this.$emit("fetchAllItems");case 4:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),deleteCategories:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(e){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,v.deleteAuthors(e);case 2:s=t.sent,this.$emit("fetchAllItems"),this.aleartMessage(s.message);case 5:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),updateCategory:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(e,s){var i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,v.updateAuthor(e,s);case 2:i=t.sent,this.$emit("fetchAllItems"),this.aleartMessage(i.message);case 5:case"end":return t.stop()}},t,this)}));function e(e,s){return t.apply(this,arguments)}return e}(),fetchAllItems:function(){this.$emit("fetchAllItems")},aleartMessage:function(t){this.$snackbar.open({message:t,type:"is-success",position:"is-bottom-right",actionText:"OK",queue:!1,duration:3e3,indefinite:!1})},confirmCustomDelete:function(t){var e=this;this.$dialog.confirm({title:"Deleting Authors",message:"Are you sure you want to <b>delete</b> all authors? This action cannot be undone.",confirmText:"Delete Author",type:"is-danger",hasIcon:!0,onConfirm:function(){return e.deleteCategories(t)}})}}},C=b,I=Object(f["a"])(C,c,l,!1,null,null,null),k=I.exports,x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"filter--items"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-lg-6"},[s("div",{staticClass:"filter--items--left"},[s("div",{staticClass:"input--fuild"},[s("button",{staticClass:"button w-100",class:{"is-primary":t.checkItem&&t.allItemChecked.length},on:{click:t.selectAllItems}},[t._v("\n                          Select All\n                     ")])])])]),s("div",{staticClass:"col-12 col-lg-6"},[s("div",{staticClass:"filter--items--right"},[s("div",{staticClass:"input--fuild"},[s("div",{staticClass:"search icon--right"},[s("b-input",{attrs:{placeholder:"Search...",type:"search","icon-pack":"fa",icon:"search"},model:{value:t.searchQuery,callback:function(e){t.searchQuery=e},expression:"searchQuery"}})],1)])])])])])},A=[],S={props:["allItemChecked"],data:function(){return{group:"",groups:["All","admin","editor","users"],checkItem:!1,searchQuery:"",filters:{}}},watch:{allItemChecked:function(){0==this.allItemChecked&&(this.checkItem=!1)},searchQuery:function(){var t=this;this.filters.searchQuery=this.searchQuery,clearTimeout(this.debounce),this.debounce=setTimeout(function(){t.$emit("featchByFilter",t.filters)},500)}},methods:{selectAllItems:function(){this.checkItem=!this.checkItem,this.$emit("selectAllItems",this.checkItem)}}},w=S,y=Object(f["a"])(w,x,A,!1,null,null,null),_=y.exports,$=u["a"].get("authors"),O={name:"authors",data:function(){return{authors:[],total:null,allItemsSelected:!1,allItemChecked:0,page:1,limit:10,order:"is-centered",dataLoading:!0,breadcrumb:[{link:"",label:"authors"}]}},components:{List:k,FilterItems:_},created:function(){this.fetchAllItems()},watch:{page:function(){this.fetchAllItems()}},methods:{selectAllItems:function(t){this.allItemsSelected=!!t},checkButtonSelectAll:function(t){this.allItemChecked=t},fetchAllItems:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(e){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.dataLoading=!0,t.next=3,$.getAllAuthors(this.page,this.limit,e);case 3:s=t.sent,this.total=s.data.total,this.authors=s.data.docs,this.dataLoading=!1;case 7:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),featchByFilter:function(t){this.fetchAllItems(t)}}},R=O,j=Object(f["a"])(R,i,a,!1,null,null,null);e["default"]=j.exports}}]);
//# sourceMappingURL=chunk-2d230aa5.bf71b6f8.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21af84"],{be7b:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pages"},[s("div",{staticClass:"page--head"},[s("div",{staticClass:"wrap--content"},[s("div",{staticClass:"page--title"},[s("div",[s("h1",{staticClass:"title--text"},[t._v("\n                        "+t._s(t.$t("pages"))+"\n                        "),t.total?s("span",{staticClass:"badge--count"},[t._v("\n                            ("+t._s(t.total)+")\n                        ")]):t._e()]),s("breadcrumb",{attrs:{links:t.breadcrumb}})],1),t.isInUserPermissions("page.create")?s("div",{staticClass:"page--title--action ml-auto"},[s("router-link",{staticClass:"button is-primary ",attrs:{to:"/pageForm"}},[t._v("\n                        "+t._s(t.$t("pagesPage.addNewPage"))+"\n                    ")])],1):t._e()])])]),s("div",{staticClass:"wrap--content"},[s("div",{staticClass:"card-filter--herader"},[s("filter-items",{attrs:{allItemChecked:t.allItemChecked},on:{selectAllItems:t.selectAllItems,featchByFilter:t.featchByFilter}})],1),t.dataLoading?[s("loading-data")]:[t.pages.length?s("list",{attrs:{allItemsSelected:t.allItemsSelected,data:t.pages},on:{fetchAllItems:t.fetchAllItems,checkButtonSelectAll:t.checkButtonSelectAll}}):[s("no-data",{attrs:{text:t.$t("pagesPage.messages.noData")}})]],t.pages.length?[s("div",{staticClass:"pagination--custom--number"},[s("b-pagination",{attrs:{total:t.total,current:t.page,order:t.order,rounded:!0,"per-page":t.limit},on:{"update:current":function(e){t.page=e}}})],1)]:t._e()],2)])},a=[],l=(s("96cf"),s("3b8d")),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._l(t.data,function(e){return s("item",{key:e.id,attrs:{item:e,itemsSelected:t.itemsSelected},on:{fetchAllItems:t.fetchAllItems,checkboxItem:t.checkboxItemStatus}})}),[s("div",{staticClass:"all--actions",class:{"show--action--bottom":t.itemsSelected.length}},[s("div",{staticClass:"wrap--content"},[s("button",{staticClass:"button is-danger",on:{click:function(e){return t.deleteItems()}}},[t._v("\n            "+t._s(t.$t("deleteAllSelected"))+"\n        ")])])])]],2)},n=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"block--item"},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"item--checkbox"},[s("b-checkbox",{attrs:{"native-value":t.item.id},on:{input:function(e){return t.updateCheckbox(t.item.id)}},model:{value:t.checkItemSelected,callback:function(e){t.checkItemSelected=e},expression:"checkItemSelected"}})],1),s("div",{staticClass:"col-12 col-sm-6 col-xl table--item-4"},[s("div",{staticClass:"block--item--title d-flex align-items-center item--text"},[s("div",{staticClass:"text--title"},[t._v(t._s(t.item.title))])])]),s("div",{staticClass:"col-12 col-sm-6 col-xl table--item"},[s("div",{staticClass:"block--item--title d-flex align-items-center item--text"},[t._m(0),s("div",{staticClass:"text--title text-capitalize"},[t._v(t._s(t.item.user.first_name+" "+t.item.user.last_name))])])]),s("div",{staticClass:"col-12 col-sm-6 col-xl table--item"},[s("div",{staticClass:"block--item--title d-flex align-items-center justify-content-center item--text"},[s("div",{staticClass:"text--title"},[1===t.item.status?s("b-tag",{attrs:{type:"is-success"}},[t._v(t._s(t.$t("published")))]):s("b-tag",{attrs:{type:"is-danger"}},[t._v(t._s(t.$t("notPublished")))])],1)])]),s("div",{staticClass:"col-12 col-sm-6 col-xl table--item"},[s("div",{staticClass:"item--text"},[t._m(1),t._v("\n        "+t._s(t.item.created)+"\n      ")])]),s("div",{staticClass:"col-12 col-sm-12 col-xl item--text table--item"},[s("div",{staticClass:"all--item--action d-flex align-item-center"},[s("div",{staticClass:"all--item--action d-flex align-item-center"},[t.item.policies.indexOf("page.update")>-1?s("router-link",{staticClass:"button--circle is-primary-light",attrs:{to:"/pageForm/"+t.item.id}},[s("i",{staticClass:"fas fa-pen"})]):t._e(),t.item.policies.indexOf("page.delete")>-1?s("button",{staticClass:"button--circle is-danger-light",on:{click:function(e){return t.deleteItem(t.item.id)}}},[s("i",{staticClass:"fas fa-trash"})]):t._e()],1)])])])])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon"},[s("i",{staticClass:"fas fa-user"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon"},[s("i",{staticClass:"fas fa-clock"})])}],u=s("d7f2"),m=u["a"].get("pages"),d={props:["item","itemsSelected"],data:function(){return{checkItemSelected:!1}},watch:{itemsSelected:function(){var t=this;this.itemsSelected.length?this.itemsSelected.map(function(e){e==t.item.id&&(t.checkItemSelected=!0)}):this.checkItemSelected=!1}},methods:{deleteItem:function(t){this.confirmCustomDelete(t)},updateCheckbox:function(){this.$emit("checkboxItem",{id:this.item.id,status:this.checkItemSelected})},updatePage:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(e,s){var i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m.updatePage(e,s);case 2:i=t.sent,this.aleartMessage(i.message);case 4:case"end":return t.stop()}},t,this)}));function e(e,s){return t.apply(this,arguments)}return e}(),deletePage:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(e){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m.deletePage(e);case 2:s=t.sent,this.aleartMessage(s.message),this.$emit("fetchAllItems");case 5:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),aleartMessage:function(t){this.$snackbar.open({message:t,type:"is-success",position:"is-bottom-right",actionText:"OK",queue:!1,duration:3e3,indefinite:!1})},confirmCustomDelete:function(t){var e=this;this.$dialog.confirm({title:this.$t("pagesPage.messages.deletePage.title"),message:this.$t("pagesPage.messages.deletePage.message"),confirmText:this.$t("pagesPage.messages.deletePage.confirmText"),cancelText:this.$t("pagesPage.messages.deletePage.cancelText"),type:"is-danger",hasIcon:!0,onConfirm:function(){return e.deletePage(t)}})}}},h=d,f=s("2877"),g=Object(f["a"])(h,r,o,!1,null,null,null),p=g.exports,v=u["a"].get("pages"),b={props:["data","allItemsSelected"],data:function(){return{itemsSelected:[]}},components:{Item:p},watch:{allItemsSelected:function(){var t=this;this.allItemsSelected?this.data.map(function(e){t.itemsSelected.push(e.id)}):this.itemsSelected=[]},itemsSelected:function(){this.itemsSelected&&this.$emit("checkButtonSelectAll",this.itemsSelected)}},methods:{checkboxItemStatus:function(t){if(1==t.status)!this.itemsSelected.indexOf(t.id)>-1&&this.itemsSelected.push(t.id);else if(this.itemsSelected.indexOf(t.id)>-1)for(var e=0;e<this.itemsSelected.length;e++)this.itemsSelected[e]==t.id&&this.itemsSelected.splice(e,1)},deleteItems:function(){this.confirmCustomDelete(this.itemsSelected)},deletePages:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(e){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,v.deletePages(e);case 2:s=t.sent,this.$emit("fetchAllItems"),this.aleartMessage(s.message);case 5:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),updatePages:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(e,s){var i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,v.updatePages(e,s);case 2:i=t.sent,this.$emit("fetchAllItems"),this.aleartMessage(i.message);case 5:case"end":return t.stop()}},t,this)}));function e(e,s){return t.apply(this,arguments)}return e}(),fetchAllItems:function(){this.$emit("fetchAllItems")},aleartMessage:function(t){this.$snackbar.open({message:t,type:"is-success",position:"is-bottom-right",actionText:"OK",queue:!1,duration:3e3,indefinite:!1})},confirmCustomDelete:function(t){var e=this;this.$dialog.confirm({title:this.$t("pagesPage.messages.deletePages.title"),message:this.$t("pagesPage.messages.deletePages.message"),confirmText:this.$t("pagesPage.messages.deletePages.confirmText"),cancelText:this.$t("pagesPage.messages.deletePages.cancelText"),type:"is-danger",hasIcon:!0,onConfirm:function(){return e.deletePages(t)}})}}},C=b,k=Object(f["a"])(C,c,n,!1,null,null,null),x=k.exports,I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"filter--items"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-lg"},[s("div",{staticClass:"filter--items--left"},[s("div",{staticClass:"input--fuild"},[s("button",{staticClass:"button w-100",class:{"is-primary":t.checkItem},on:{click:t.selectAllItems}},[t._v("\n                        "+t._s(t.$t("selectAll"))+"\n                    ")])])])]),s("div",{staticClass:"col-12 col-lg"},[s("div",{staticClass:"filter--items--right"},[s("div",{staticClass:"input--fuild"},[s("v-select",{staticClass:"select--with--icon w-100 w-fuild-md v--select--scroll",attrs:{options:t.orderOptions,clearable:!1,label:"title"},scopedSlots:t._u([{key:"option",fn:function(e){return[t._v("\n                            "+t._s(e.title)+"\n                        ")]}}]),model:{value:t.order,callback:function(e){t.order=e},expression:"order"}})],1),s("div",{staticClass:"input--fuild"},[s("v-select",{staticClass:"select--with--icon w-100 v--select--scroll w-fuild-md",attrs:{options:t.allStatus,label:"name",placeholder:t.$t("sortByStatus")},scopedSlots:t._u([{key:"option",fn:function(e){return[t._v("\n                            "+t._s(e.name)+"\n                        ")]}}]),model:{value:t.status,callback:function(e){t.status=e},expression:"status"}})],1),s("div",{staticClass:"input--fuild"},[s("div",{staticClass:"search icon--right"},[s("b-input",{attrs:{placeholder:t.$t("search")+"...",type:"search","icon-pack":"fa",icon:"search"},model:{value:t.searchQuery,callback:function(e){t.searchQuery=e},expression:"searchQuery"}})],1)])])])])])},_=[],S=(u["a"].get("categories"),{props:["allItemChecked"],data:function(){return{status:"",checkItem:!1,searchQuery:"",filters:{categories:[]},allStatus:[{id:"1",name:this.$t("published")},{id:"0",name:this.$t("notPublished")}],page:1,limit:100,order:{title:this.$t("aecent"),value:"desc"},orderOptions:[{title:this.$t("aecent"),value:"desc"},{title:this.$t("recent"),value:"asc"}]}},watch:{allItemChecked:function(){0==this.allItemChecked&&(this.checkItem=!1)},searchQuery:function(){var t=this;this.filters.searchQuery=this.searchQuery,clearTimeout(this.debounce),this.debounce=setTimeout(function(){t.$emit("featchByFilter",t.filters)},500)},status:function(){this.status?(this.filters.status=this.status.id,this.$emit("featchByFilter",this.filters)):(this.filters.status="",this.$emit("featchByFilter",this.filters))},order:function(){this.filters.order=this.order.value,this.$emit("featchByFilter",this.filters)}},methods:{selectAllItems:function(){this.checkItem=!this.checkItem,this.$emit("selectAllItems",this.checkItem)}}}),$=S,w=Object(f["a"])($,I,_,!1,null,null,null),y=w.exports,P=u["a"].get("pages"),A={name:"pages",data:function(){return{pages:[],total:null,allItemsSelected:!1,allItemChecked:0,page:1,limit:10,order:"is-centered",dataLoading:!0,breadcrumb:[{link:"",label:this.$t("pagesPage.breadcrumb[0]")}]}},components:{List:x,FilterItems:y},created:function(){this.fetchAllItems()},watch:{page:function(){this.fetchAllItems()}},methods:{selectAllItems:function(t){this.allItemsSelected=!!t},checkButtonSelectAll:function(t){this.allItemChecked=t},fetchAllItems:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(e){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.dataLoading=!0,t.next=3,P.getAllPages(this.page,this.limit,e);case 3:s=t.sent,this.pages=s.data.docs,this.total=s.data.total,this.dataLoading=!1;case 7:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),featchByFilter:function(t){this.fetchAllItems(t)}}},O=A,B=Object(f["a"])(O,i,a,!1,null,null,null);e["default"]=B.exports}}]);
//# sourceMappingURL=chunk-2d21af84.289991c4.js.map
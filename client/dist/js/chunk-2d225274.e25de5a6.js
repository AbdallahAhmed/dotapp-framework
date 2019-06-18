(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d225274"],{e2d5:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"categories"},[i("div",{staticClass:"page--title"},[i("h1",{staticClass:"title--text"},[e._v("\n      Categories\n      "),e.total?i("span",{staticClass:"badge--count"},[e._v("\n        ("+e._s(e.total)+")\n      ")]):e._e()]),e.isInUserPermissions("category.create")?i("div",{staticClass:"page--title--action ml-auto"},[i("router-link",{staticClass:"button is-primary is-rounded",attrs:{to:"/categoryForm"}},[e._v("Add New Category")])],1):e._e()]),i("breadcrumb",{attrs:{links:e.breadcrumb}}),i("div",{staticClass:"card-filter--herader"},[i("filter-items",{attrs:{allItemChecked:e.allItemChecked},on:{selectAllItems:e.selectAllItems,featchByFilter:e.featchByFilter}})],1),e.dataLoading?[i("loading-data")]:[e.categories.length?i("list",{attrs:{allItemsSelected:e.allItemsSelected,data:e.categories},on:{fetchAllItems:e.fetchAllItems,checkButtonSelectAll:e.checkButtonSelectAll}}):i("div",{staticClass:"no-data"},[i("span",[e._v("No Data Here")])])],e.categories.length?[i("div",{staticClass:"pagination--custom--number"},[i("b-pagination",{attrs:{total:e.total,current:e.page,order:e.order,rounded:!0,"per-page":e.limit},on:{"update:current":function(t){e.page=t}}})],1)]:e._e()],2)},a=[],c=(i("96cf"),i("3b8d")),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e._l(e.data,function(t){return i("item",{key:t.id,attrs:{item:t,itemsSelected:e.itemsSelected},on:{fetchAllItems:e.fetchAllItems,checkboxItem:e.checkboxItemStatus}})}),[i("div",{staticClass:"alluser--action",class:{"show--action--bottom":e.itemsSelected.length}},[i("button",{staticClass:"button is-danger is-rounded",on:{click:function(t){return e.deleteItems()}}},[e._v("Delete All Selected")])])]],2)},l=[],r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.item?i("div",{staticClass:"block--item"},[i("div",{staticClass:"row align-items-center"},[i("div",{staticClass:"item--checkbox"},[i("b-checkbox",{attrs:{"native-value":e.item.id},on:{input:function(t){return e.updateCheckbox(e.item.id)}},model:{value:e.checkItemSelected,callback:function(t){e.checkItemSelected=t},expression:"checkItemSelected"}})],1),i("div",{staticClass:"col-12 col-sm-6 col-xl"},[i("div",{staticClass:"block--item--title d-flex align-items-center item--text"},[i("div",{staticClass:"text--title"},[i("router-link",{attrs:{to:"/categories/"+e.item.id}},[e._v("\n                        "+e._s(e.item.name)+"\n                    ")])],1)])]),i("div",{staticClass:"col-12 col-sm-6 col-xl"},[i("div",{staticClass:"block--item--title d-flex align-items-center item--text"},[i("div",{staticClass:"text--title"},[e._v("\n                    "+e._s(e.item.description)+"\n                ")])])]),i("div",{staticClass:"col-12 col-sm-6 col-xl"},[i("div",{staticClass:"item--text"},[e._m(0),e._v("\n                "+e._s(e.item.created)+"\n            ")])]),i("div",{staticClass:"col-12 col-sm-12 col-xl item--text"},[i("div",{staticClass:"all--item--action d-flex align-item-center"},[i("div",{staticClass:"all--item--action d-flex align-item-center"},[e.item.policies.indexOf("category.update")>-1?i("router-link",{staticClass:"button--circle is-primary-light",attrs:{to:"/categoryForm/"+e.item.id}},[i("i",{staticClass:"fas fa-pen"})]):e._e(),e.item.policies.indexOf("category.delete")>-1?i("button",{staticClass:"button--circle is-danger-light",on:{click:function(t){return e.deleteItem(e.item.id)}}},[i("i",{staticClass:"fas fa-trash"})]):e._e()],1)])])])]):e._e()},o=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",{staticClass:"icon"},[i("i",{staticClass:"fas fa-clock"})])}],u=i("d7f2"),m=u["a"].get("categories"),d={props:["item","itemsSelected"],data:function(){return{checkItemSelected:!1}},watch:{itemsSelected:function(){var e=this;this.itemsSelected.length?this.itemsSelected.map(function(t){t==e.item.id&&(e.checkItemSelected=!0)}):this.checkItemSelected=!1}},methods:{deleteItem:function(e){this.confirmCustomDelete(e)},updateCheckbox:function(){this.$emit("checkboxItem",{id:this.item.id,status:this.checkItemSelected})},updateCategory:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(t,i){var s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m.updateCategory(t,i);case 2:s=e.sent,this.aleartMessage(s.message);case 4:case"end":return e.stop()}},e,this)}));function t(t,i){return e.apply(this,arguments)}return t}(),deleteCategory:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(t){var i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m.deleteCategory(t);case 2:i=e.sent,this.aleartMessage(i.message),this.$emit("fetchAllItems");case 5:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),aleartMessage:function(e){this.$snackbar.open({message:e,type:"is-success",position:"is-bottom-right",actionText:"OK",queue:!1,duration:3e3,indefinite:!1})},confirmCustomDelete:function(e){var t=this;this.$dialog.confirm({title:"Deleting Group",message:"Are you sure you want to <b>delete</b> This Group? This action cannot be undone.",confirmText:"Delete Group",type:"is-danger",hasIcon:!0,onConfirm:function(){return t.deleteCategory(e)}})}}},h=d,f=i("2877"),g=Object(f["a"])(h,r,o,!1,null,null,null),p=g.exports,C=u["a"].get("categories"),v={props:["data","allItemsSelected"],data:function(){return{itemsSelected:[]}},components:{Item:p},watch:{allItemsSelected:function(){var e=this;this.allItemsSelected?this.data.map(function(t){e.itemsSelected.push(t.id)}):this.itemsSelected=[]},itemsSelected:function(){this.itemsSelected.length&&this.$emit("checkButtonSelectAll",this.itemsSelected)}},methods:{checkboxItemStatus:function(e){if(1==e.status)!this.itemsSelected.indexOf(e.id)>-1&&this.itemsSelected.push(e.id);else if(this.itemsSelected.indexOf(e.id)>-1)for(var t=0;t<this.itemsSelected.length;t++)this.itemsSelected[t]==e.id&&this.itemsSelected.splice(t,1)},deleteItems:function(){this.confirmCustomDelete(this.itemsSelected)},deleteCategory:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,C.deleteCategory(t);case 2:e.sent,this.$emit("fetchAllItems");case 4:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),deleteCategories:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(t){var i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,C.deleteCategories(t);case 2:i=e.sent,this.$emit("fetchAllItems"),this.aleartMessage(i.message);case 5:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),updateCategory:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(t,i){var s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,C.updateCategory(t,i);case 2:s=e.sent,this.$emit("fetchAllItems"),this.aleartMessage(s.message);case 5:case"end":return e.stop()}},e,this)}));function t(t,i){return e.apply(this,arguments)}return t}(),fetchAllItems:function(){this.$emit("fetchAllItems")},aleartMessage:function(e){this.$snackbar.open({message:e,type:"is-success",position:"is-bottom-right",actionText:"OK",queue:!1,duration:3e3,indefinite:!1})},confirmCustomDelete:function(e){var t=this;this.$dialog.confirm({title:"Deleting Categories",message:"Are you sure you want to <b>delete</b> all Categories? This action cannot be undone.",confirmText:"Delete Categories",type:"is-danger",hasIcon:!0,onConfirm:function(){return t.deleteCategories(e)}})}}},I=v,b=Object(f["a"])(I,n,l,!1,null,null,null),k=b.exports,x=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"filter--items"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-lg-6"},[i("div",{staticClass:"filter--items--left"},[i("div",{staticClass:"input--fuild"},[i("button",{staticClass:"button is-rounded w-100",class:{"is-primary":e.checkItem},on:{click:e.selectAllItems}},[e._v("\n                          Select All\n                     ")])])])]),i("div",{staticClass:"col-12 col-lg-6"},[i("div",{staticClass:"filter--items--right"},[i("div",{staticClass:"input--fuild"},[i("div",{staticClass:"search icon--right"},[i("b-input",{attrs:{placeholder:"Search...",type:"search","icon-pack":"fa",rounded:"",icon:"search"},model:{value:e.searchQuery,callback:function(t){e.searchQuery=t},expression:"searchQuery"}})],1)])])])])])},y=[],S={props:["allItemChecked"],data:function(){return{group:"",groups:["All","admin","editor","users"],checkItem:!1,searchQuery:"",filters:{}}},watch:{allItemChecked:function(){0==this.allItemChecked&&(this.checkItem=!1)},searchQuery:function(){var e=this;this.filters.searchQuery=this.searchQuery,clearTimeout(this.debounce),this.debounce=setTimeout(function(){e.$emit("featchByFilter",e.filters)},500)}},methods:{selectAllItems:function(){this.checkItem=!this.checkItem,this.$emit("selectAllItems",this.checkItem)}}},w=S,A=Object(f["a"])(w,x,y,!1,null,null,null),_=A.exports,$=u["a"].get("categories"),O={name:"categories",data:function(){return{categories:[],total:null,allItemsSelected:!1,allItemChecked:0,page:1,limit:10,order:"is-centered",dataLoading:!0,breadcrumb:[{link:"",label:"categories"}]}},components:{List:k,FilterItems:_},created:function(){this.fetchAllItems()},watch:{page:function(){this.fetchAllItems()}},methods:{selectAllItems:function(e){this.allItemsSelected=!!e},checkButtonSelectAll:function(e){this.allItemChecked=e},fetchAllItems:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(t){var i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.dataLoading=!0,e.next=3,$.getAllCategories(this.page,this.limit,t,this.$route.params.id);case 3:i=e.sent,this.categories=i.data.docs,this.total=i.data.total,this.dataLoading=!1;case 7:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),featchByFilter:function(e){this.fetchAllItems(e)}}},R=O,j=Object(f["a"])(R,s,a,!1,null,null,null);t["default"]=j.exports}}]);
//# sourceMappingURL=chunk-2d225274.e25de5a6.js.map
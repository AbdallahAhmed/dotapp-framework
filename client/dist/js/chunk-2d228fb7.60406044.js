(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d228fb7"],{dc02:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"users"},[s("div",{staticClass:"page--head"},[s("div",{staticClass:"wrap--content"},[s("div",{staticClass:"page--title"},[s("div",[s("h1",{staticClass:"title--text"},[e._v("\n                        Users\n                        "),e.total?s("span",{staticClass:"badge--count"},[e._v("\n                            ("+e._s(e.total)+")\n                        ")]):e._e()]),s("breadcrumb",{attrs:{links:e.breadcrumb}})],1),e.isInUserPermissions("user.create")?s("div",{staticClass:"page--title--action ml-auto"},[s("router-link",{staticClass:"button is-primary is-rounded",attrs:{to:"/userForm"}},[e._v("Add New User")])],1):e._e()])])]),s("div",{staticClass:"wrap--content"},[s("div",{staticClass:"card-filter--herader"},[s("filter-items",{on:{featchByFilter:e.featchByFilter,selectAllItems:e.selectAllItems}})],1),e.dataLoading?[s("loading-data")]:[e.users.length?s("list-users",{attrs:{allUserSelected:e.allUserSelected,data:e.users},on:{fetchAllItems:e.fetchAllItems}}):s("div",{staticClass:"no-data"},[s("span",[e._v("No Data Here")])])],e.users?[e.total?s("div",{staticClass:"pagination--custom--number"},[s("b-pagination",{attrs:{total:e.total,current:e.page,order:e.order,rounded:!0,"per-page":e.limit},on:{"update:current":function(t){e.page=t}}})],1):e._e()]:e._e()],2)])},r=[],a=(s("96cf"),s("3b8d")),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e._l(e.data,function(t){return s("item",{key:t.id,attrs:{user:t,usersSelected:e.usersSelected},on:{fetchAllItems:e.fetchAllItems,checkboxUser:e.checkboxUserStatus}})}),[s("div",{staticClass:"alluser--action",class:{"show--action--bottom":e.usersSelected.length}},[s("button",{staticClass:"button is-warning is-rounded",on:{click:function(t){return e.confirmCustomUpdate()}}},[e._v("Ban All Selected")]),s("button",{staticClass:"button is-danger is-rounded",on:{click:function(t){return e.deleteItems()}}},[e._v("Delete All Selected")])])]],2)},c=[],l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.user.policies.indexOf("user.view")>-1?i("div",{staticClass:"block--item"},[i("div",{staticClass:"row align-items-center"},[e.isInUserPermissions("user.delete")?i("div",{staticClass:"item--checkbox"},[i("b-checkbox",{attrs:{"native-value":e.user.id},on:{input:function(t){return e.updateCheckbox(e.user.id)}},model:{value:e.userSelected,callback:function(t){e.userSelected=t},expression:"userSelected"}})],1):e._e(),i("div",{staticClass:"col-12 col-sm-6 col-xl"},[i("div",{staticClass:"block--item--title d-flex align-items-center item--text"},[i("div",{staticClass:"item--avatar--img"},[e.user.photo?[i("img",{attrs:{src:e.user.photo.thumbnails.small,alt:e.user.photo.title}})]:e._e(),i("img",{attrs:{src:s("3e42")}})],2),i("div",{staticClass:"text--title text-capitalize"},[e._v("\n                    "+e._s(e.user.first_name)+"\n                ")])])]),i("div",{staticClass:"col-12 col-sm-6 col-xl"},[i("div",{staticClass:"item--text"},[i("b-tooltip",{attrs:{label:e.user.email,type:"is-dark",position:"is-top"}},[i("span",{staticClass:"icon"},[i("i",{staticClass:"fas fa-envelope"})]),e._v("\n                    "+e._s(e._f("textLimit")(e.user.email,16))+"\n                ")])],1)]),i("div",{staticClass:"col-12 col-sm-6 col-xl"},[i("div",{staticClass:"item--text"},[e._m(0),e._v("\n                "+e._s(e.user.created)+"\n            ")])]),i("div",{staticClass:"col-12 col-sm-6 col-xl"},[i("div",{staticClass:"item--text"},[e.user.role?[e._m(1),e._v("\n                    "+e._s(e.user.role.name)+"\n                ")]:[e._v("\n                    --------\n                ")]],2)]),i("div",{staticClass:"col-12 col-sm-6 col-xl-1"},[i("div",{staticClass:"item--text text-center"},[e.user.policies.indexOf("user.status")>-1?i("div",{staticClass:"field"},[i("b-switch",{attrs:{"true-value":"Active","false-value":"Not Active"},model:{value:e.userStatus,callback:function(t){e.userStatus=t},expression:"userStatus"}},[e._v("\n                        Active\n                    ")])],1):e._e()])]),i("div",{staticClass:"col-12 col-sm-12 col-xl item--text"},[i("div",{staticClass:"all--item--action d-flex align-item-center"},[e.user.policies.indexOf("user.update")>-1&&e.isInUserPermissions("user.update")?i("router-link",{staticClass:"button--circle is-primary-light",attrs:{to:"/userForm/"+e.user.id}},[i("i",{staticClass:"fas fa-pen"})]):e._e(),e.isInUserPermissions("user.delete")&&e.user.policies.indexOf("user.delete")>-1?i("button",{staticClass:"button--circle is-danger-light",on:{click:function(t){return e.deleteItem(e.user.id)}}},[i("i",{staticClass:"fas fa-trash"})]):e._e()],1)])])]):e._e()},u=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"icon"},[s("i",{staticClass:"fas fa-clock"})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"icon"},[s("i",{staticClass:"fas fa-award"})])}],o=s("d7f2"),d=o["a"].get("users"),h={props:["user","usersSelected"],data:function(){return{userSelected:!1,userStatus:1==this.user.status?"Active":"Not Active"}},watch:{userStatus:function(){var e={};"Active"==this.userStatus?e.status=1:e.status=0,this.updateUser(this.user.id,e)},usersSelected:function(){var e=this;this.usersSelected.length?this.usersSelected.map(function(t){t==e.user.id&&(e.userSelected=!0)}):this.userSelected=!1}},methods:{updateCheckbox:function(){this.$emit("checkboxUser",{id:this.user.id,status:this.userSelected})},deleteItem:function(e){this.confirmCustomDelete(e)},updateUser:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t,s){var i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d.updateUser(t,s);case 2:i=e.sent,this.isLoading=!1,i.success?this.successMessage(i.message):this.errorMessage(i[0]);case 5:case"end":return e.stop()}},e,this)}));function t(t,s){return e.apply(this,arguments)}return t}(),deleteUser:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d.deleteUser(t);case 2:s=e.sent,s.success?(this.successMessage(s.message),this.$emit("fetchAllItems")):this.errorMessage(s[0]);case 4:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),errorMessage:function(e){this.$snackbar.open({message:e,type:"is-danger",position:"is-bottom-right",actionText:"OK",queue:!1,duration:1e4,indefinite:!1})},successMessage:function(e){this.$snackbar.open({message:e,type:"is-success",position:"is-bottom-right",actionText:"OK",queue:!1,duration:1e4,indefinite:!1})},aleartMessage:function(e){this.$snackbar.open({message:e,type:"is-success",position:"is-bottom-right",actionText:"OK",queue:!1,duration:3e3,indefinite:!1})},confirmCustomDelete:function(e){var t=this;this.$dialog.confirm({title:"Deleting User",message:"Are you sure you want to <b>delete</b> This User? This action cannot be undone.",confirmText:"Delete User",type:"is-danger",hasIcon:!0,onConfirm:function(){return t.deleteUser(e)}})}}},m=h,f=s("2877"),p=Object(f["a"])(m,l,u,!1,null,null,null),v=p.exports,g=o["a"].get("users"),b={props:["data","allUserSelected"],data:function(){return{usersSelected:[]}},components:{Item:v},watch:{allUserSelected:function(){var e=this;this.allUserSelected?this.data.map(function(t){e.usersSelected.push(t.id)}):this.usersSelected=[]}},methods:{checkboxUserStatus:function(e){if(1==e.status)!this.usersSelected.indexOf(e.id)>-1&&this.usersSelected.push(e.id);else if(this.usersSelected.indexOf(e.id)>-1)for(var t=0;t<this.usersSelected.length;t++)this.usersSelected[t]==e.id&&this.usersSelected.splice(t,1)},deleteItems:function(){this.confirmCustomDelete(this.usersSelected)},deleteUser:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g.deleteUser(t);case 2:e.sent,this.$emit("fetchAllItems"),this.aleartMessage();case 5:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),deleteUsers:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g.deleteUsers(t);case 2:s=e.sent,this.$emit("fetchAllItems"),this.aleartMessage(s.message);case 5:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),activeItems:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g.updateUsers(this.usersSelected);case 2:t=e.sent,this.$emit("fetchAllItems"),this.aleartMessage(t.message);case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),updateUser:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t,s){var i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g.updateUser(t,s);case 2:i=e.sent,this.$emit("fetchAllItems"),this.aleartMessage(i.message);case 5:case"end":return e.stop()}},e,this)}));function t(t,s){return e.apply(this,arguments)}return t}(),fetchAllItems:function(){this.$emit("fetchAllItems")},aleartMessage:function(e){this.$snackbar.open({message:e,type:"is-success",position:"is-bottom-right",actionText:"OK",queue:!1,duration:3e3,indefinite:!1})},confirmCustomDelete:function(e){var t=this;this.$dialog.confirm({title:"Deleting Users",message:"Are you sure you want to <b>delete</b> All Users? This action cannot be undone.",confirmText:"Delete Users",type:"is-danger",hasIcon:!0,onConfirm:function(){return t.deleteUsers(e)}})},confirmCustomUpdate:function(){var e=this;this.$dialog.confirm({title:"Ban Users",message:"Are you sure you want to <b>ban</b> All Users? This action cannot be undone.",confirmText:"Ban Users",type:"is-primary",icon:"information-outline",hasIcon:!0,onConfirm:function(){return e.activeItems()}})}}},C=b,x=Object(f["a"])(C,n,c,!1,null,null,null),w=x.exports,S=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"filter--items"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-lg-6"},[s("div",{staticClass:"filter--items--left"},[s("div",{staticClass:"input--fuild"},[s("button",{staticClass:"button is-rounded w-100",class:{"is-primary":e.checkUsers},on:{click:e.selectAllItems}},[e._v("\n                        Select All\n                    ")])]),s("div",{staticClass:"input--fuild"},[s("v-select",{staticClass:"select--with--icon w-100 v--select--scroll",attrs:{options:e.groups,label:"name",placeholder:"Sort By Group"},scopedSlots:e._u([{key:"option",fn:function(t){return[e._v("\n                            "+e._s(t.name)+"\n                        ")]}}]),model:{value:e.group,callback:function(t){e.group=t},expression:"group"}})],1),s("div",{staticClass:"input--fuild"},[s("v-select",{staticClass:"select--with--icon w-100 v--select--scroll w-fuild-sm",attrs:{options:e.allStatus,label:"name",placeholder:"Sort By Status"},scopedSlots:e._u([{key:"option",fn:function(t){return[e._v("\n                            "+e._s(t.name)+"\n                        ")]}}]),model:{value:e.status,callback:function(t){e.status=t},expression:"status"}})],1)])]),s("div",{staticClass:"col-12 col-lg-6"},[s("div",{staticClass:"filter--items--right"},[s("div",{staticClass:"input--fuild"},[s("div",{staticClass:"search icon--right"},[s("b-input",{attrs:{placeholder:"Search...",type:"search","icon-pack":"fa",rounded:"",icon:"search"},model:{value:e.searchQuery,callback:function(t){e.searchQuery=t},expression:"searchQuery"}})],1)])])])])])},_=[],U=o["a"].get("groups"),k={data:function(){return{group:"",groups:[],checkUsers:!1,page:1,limit:50,filters:{},searchQuery:"",status:"",allStatus:[{id:"1",name:"Active"},{id:"0",name:"Not Active"}]}},created:function(){this.fetchAllItems()},watch:{group:function(){this.group?(this.filters.group=this.group.id,this.$emit("featchByFilter",this.filters)):(this.filters.group="",this.$emit("featchByFilter",this.filters))},status:function(){this.status?(this.filters.status=this.status.id,this.$emit("featchByFilter",this.filters)):(this.filters.status="",this.$emit("featchByFilter",this.filters))},searchQuery:function(){var e=this;this.filters.searchQuery=this.searchQuery,clearTimeout(this.debounce),this.debounce=setTimeout(function(){e.$emit("featchByFilter",e.filters)},500)}},methods:{selectAllItems:function(){this.checkUsers=!this.checkUsers,this.$emit("selectAllItems")},fetchAllItems:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,U.getAllGroups(this.page,this.limit);case 2:t=e.sent,this.groups=t.data.docs;case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},y=k,A=Object(f["a"])(y,S,_,!1,null,null,null),I=A.exports,$=o["a"].get("users"),O={name:"users",data:function(){return{users:[],total:null,allUserSelected:!1,page:1,limit:10,order:"is-centered",dataLoading:!0,filters:{},breadcrumb:[{link:"",label:"users"}]}},components:{ListUsers:w,FilterItems:I},created:function(){this.fetchAllItems()},watch:{page:function(){this.page&&this.fetchAllItems()}},methods:{selectAllItems:function(){this.allUserSelected=!this.allUserSelected},fetchAllItems:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.dataLoading=!0,e.next=3,$.getAllUsers(this.page,this.limit,t);case 3:s=e.sent,this.users=s.docs,this.total=s.total,this.dataLoading=!1;case 7:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),featchByFilter:function(e){this.fetchAllItems(e)}}},R=O,B=Object(f["a"])(R,i,r,!1,null,null,null);t["default"]=B.exports}}]);
//# sourceMappingURL=chunk-2d228fb7.60406044.js.map
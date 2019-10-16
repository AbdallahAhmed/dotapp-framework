(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2bd8f65c"],{7908:function(A,t,e){"use strict";e.r(t);var s,i=function(){var A=this,t=A.$createElement,s=A._self._c||t;return s("div",{staticClass:"authors"},[s("div",{staticClass:"page--head"},[s("div",{staticClass:"wrap--content"},[s("div",{staticClass:"page--title"},[s("div",[s("h1",{staticClass:"title--text"},[A._v("\n                        "+A._s(A.$t("authors"))+"\n                    ")]),s("breadcrumb",{attrs:{links:A.breadcrumb}})],1),this.$route.params.id&&A.isInUserPermissions("author.manage")?s("div",{staticClass:"page--title--action ml-auto"},[s("button",{staticClass:"button is-primary ",on:{click:function(t){return A.addNewAuthor()}}},[A._v(A._s(A.$t("authorsPage.addNewAuthor")))])]):A._e()])])]),s("div",{staticClass:"wrap--content"},[s("div",{staticClass:"card--block"},[s("div",{staticClass:"card--content"},[s("form",{staticClass:"row mt-3 justify-content-center",on:{submit:function(t){return t.preventDefault(),A.submitForm()}}},[s("div",{staticClass:"col-12 col-md-10 col-lg-8"},[s("b-field",{staticClass:"field-group"},[s("div",{staticClass:"text-center"},[s("div",{staticClass:"user--photo field-group"},[A.photo?s("img",{staticClass:"avatar-l",attrs:{src:A.photo,alt:""}}):s("img",{staticClass:"avatar-l",attrs:{src:e("dab8"),alt:""}})]),s("a",{staticClass:"button is-dark m-2 is-small",on:{click:function(t){return A.openModalMedia("image")}}},[A._v("\n                                    "+A._s(A.$t("changePhoto"))+"\n                                ")])])]),s("b-field",{staticClass:"field-group"},[s("b-input",{attrs:{type:"text",placeholder:A.$t("name")},model:{value:A.name,callback:function(t){A.name=t},expression:"name"}})],1),s("b-field",{staticClass:"field-group"},[s("b-input",{attrs:{type:"textarea",rows:"4",placeholder:A.$t("description")},model:{value:A.description,callback:function(t){A.description=t},expression:"description"}})],1)],1),s("div",{staticClass:"col-12 text-center button--save--form"},[s("button",{staticClass:"button is-primary",class:{"is-loading":A.isLoading}},[A._v(A._s(this.$route.params.id?A.$t("saveChanges"):A.$t("add")))])])])])])])])},r=[],a=(e("8e6e"),e("ac6a"),e("456d"),e("96cf"),e("3b8d")),n=(e("7f7f"),e("bd86")),o=e("d7f2"),c=e("2f62");function u(A,t){var e=Object.keys(A);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(A);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(A,t).enumerable}))),e.push.apply(e,s)}return e}function h(A){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?u(e,!0).forEach((function(t){Object(n["a"])(A,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(e)):u(e).forEach((function(t){Object.defineProperty(A,t,Object.getOwnPropertyDescriptor(e,t))}))}return A}var d=o["a"].get("authors"),l=(s={name:"authorForm",data:function(){return{name:"",description:"",isLoading:!1,photo:"",breadcrumb:[{link:"/authors",label:this.$t("authorsPage.breadcrumb[0]")},{link:"",label:this.$t("authorsPage.breadcrumb[1]")}]}},watch:{$route:function(A,t){this.$route.params.id?this.getAuthor(this.$route.params.id):this.resetfuild()}},created:function(){this.$route.params.id&&this.getAuthor(this.$route.params.id)},computed:h({},Object(c["c"])({imageSelected:function(A){return A.media.imageSelected}}))},Object(n["a"])(s,"watch",{imageSelected:function(){this.imageSelected.thumbnails&&(this.photo=this.imageSelected.thumbnails.medium)}}),Object(n["a"])(s,"methods",{resetfuild:function(){this.name="",this.description="",this.photo=""},addNewAuthor:function(){this.resetfuild(),this.$router.push({path:"/authorForm"})},submitForm:function(){this.isLoading=!1;var A={};A.name=this.name,this.description&&(A.description=this.description),this.imageSelected&&(A.image=this.imageSelected.id),this.isLoading=!0,this.$route.params.id?this.updateAuthor(this.$route.params.id,A):this.newAuthor(A)},newAuthor:function(){var A=Object(a["a"])(regeneratorRuntime.mark((function A(t){var e;return regeneratorRuntime.wrap((function(A){while(1)switch(A.prev=A.next){case 0:return A.next=2,d.newAuthor(t);case 2:e=A.sent,e.success?(this.successMessage(e.message),this.$router.push("/authorForm/"+e.data)):this.errorMessage(e[0]),this.isLoading=!1;case 5:case"end":return A.stop()}}),A,this)})));function t(t){return A.apply(this,arguments)}return t}(),getAuthor:function(){var A=Object(a["a"])(regeneratorRuntime.mark((function A(t){var e;return regeneratorRuntime.wrap((function(A){while(1)switch(A.prev=A.next){case 0:return A.next=2,d.getAuthor(t);case 2:e=A.sent,this.name=e.name,this.description=e.description,e.image&&(this.photo=e.image.thumbnails.medium);case 6:case"end":return A.stop()}}),A,this)})));function t(t){return A.apply(this,arguments)}return t}(),updateAuthor:function(){var A=Object(a["a"])(regeneratorRuntime.mark((function A(t,e){var s;return regeneratorRuntime.wrap((function(A){while(1)switch(A.prev=A.next){case 0:return A.next=2,d.updateAuthor(t,e);case 2:s=A.sent,s.success?this.successMessage(s.message):this.errorMessage(s[0]),this.isLoading=!1;case 5:case"end":return A.stop()}}),A,this)})));function t(t,e){return A.apply(this,arguments)}return t}(),errorMessage:function(A){this.$snackbar.open({message:A,type:"is-danger",position:"is-bottom-right",actionText:"OK",queue:!1,duration:1e4,indefinite:!1})},successMessage:function(A){this.$snackbar.open({message:A,type:"is-success",position:"is-bottom-right",actionText:"OK",queue:!1,duration:1e4,indefinite:!1})},openModalMedia:function(A){this.$store.commit("openMediaImage",A)}}),s),g=l,p=e("2877"),m=Object(p["a"])(g,i,r,!1,null,null,null);t["default"]=m.exports},dab8:function(A,t){A.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=chunk-2bd8f65c.081b1d7e.js.map
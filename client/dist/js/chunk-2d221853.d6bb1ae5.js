(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d221853"],{cb64:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"posts"},[a("div",{staticClass:"page--head"},[a("div",{staticClass:"wrap--content"},[a("div",{staticClass:"page--title"},[a("div",[a("h1",{staticClass:"title--text"},[t._v(t._s(t.$t("posts")))]),a("breadcrumb",{attrs:{links:t.breadcrumb}})],1),a("div",{staticClass:"page--title--action ml-auto"},[a("button",{staticClass:"button is-primary",on:{click:t.submitForm}},[t._v("\n              "+t._s(t.$t("saveChanges"))+"\n          ")])])])])]),a("div",{staticClass:"wrap--content"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm()}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-lg-8"},[a("div",{staticClass:"post--content"},[a("main-field-post",{attrs:{post:this.post},on:{setDataFromChild:t.setDataFromMainField}}),a("content-editor",{attrs:{post:this.post},on:{setDataFromChild:t.setDataFromCardsContent}}),a("div",{staticClass:"text-center button--save--form d-none d-lg-block"},[a("button",{staticClass:"button is-primary",class:{"is-loading":t.isLoading},attrs:{type:"submit"}},[t._v("\n              "+t._s(t.$t("saveChanges")))])])],1)]),a("post-info",{attrs:{post:this.post},on:{setDataFromChild:t.setDataFromPostInfo}}),a("div",{staticClass:"text-center button--save--form d-block d-lg-none w-100"},[a("button",{staticClass:"button is-primary",class:{"is-loading":t.isLoading},attrs:{type:"submit"}},[t._v("\n              "+t._s(t.$t("saveChanges"))+"\n          ")])])],1)])])])},i=[],n=(a("96cf"),a("3b8d")),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12 col-lg-4"},[a("div",{staticClass:"card--block"},[a("div",{staticClass:"card--content"},[a("div",{staticClass:"post--info--item"},[a("b-field",{staticClass:"field-group align-items-center justify-content-between"},[a("label",{staticClass:"label"},[t._v(t._s(t.$t("status")))]),a("b-switch",{attrs:{"true-value":1,"false-value":0},model:{value:t.postInfo.status,callback:function(e){t.$set(t.postInfo,"status",e)},expression:"postInfo.status"}},[t._v(t._s(t.$t("published")))])],1)],1),a("div",{staticClass:"post--info--item"},[a("b-field",{staticClass:"field-group flex-column"},[a("label",{staticClass:"label"},[t._v(t._s(t.$t("schedule")))]),a("datetime",{staticClass:"custom--datetime theme-primary",attrs:{type:"datetime",placeholder:t.$t("schedule"),"use12-hour":""},model:{value:t.postInfo.published_at,callback:function(e){t.$set(t.postInfo,"published_at",e)},expression:"postInfo.published_at"}})],1)],1),a("div",{staticClass:"post--info--item"},[a("b-field",{staticClass:"field-group flex-column"},[a("label",{staticClass:"label"},[t._v(t._s(t.$t("format")))]),a("v-select",{staticClass:"select--with--icon w-100 v--select--scroll",attrs:{options:t.allFormat,label:"name",placeholder:t.$t("format")},on:{input:t.changeSection},scopedSlots:t._u([{key:"option",fn:function(e){return[t._v(t._s(e.name))]}}]),model:{value:t.postInfo.format,callback:function(e){t.$set(t.postInfo,"format",e)},expression:"postInfo.format"}})],1)],1)])]),a("div",{staticClass:"card--block"},[a("div",{staticClass:"card--content"},[a("div",{staticClass:"post--info--item"},[a("b-field",{staticClass:"field-group flex-column"},[a("label",{staticClass:"label"},[t._v(t._s(t.$t("categories")))]),a("treeselect",{staticClass:"custom--treeSelect",attrs:{"show-count":!0,flat:!0,multiple:!0,options:t.categories},model:{value:t.postInfo.categories,callback:function(e){t.$set(t.postInfo,"categories",e)},expression:"postInfo.categories"}})],1)],1)])]),a("div",{staticClass:"card--block"},[a("div",{staticClass:"card--content"},[a("div",{staticClass:"post--info--item"},[a("b-field",{staticClass:"field-group flex-column"},[a("label",{staticClass:"label"},[t._v(t._s(t.$t("tags")))]),a("b-taginput",{attrs:{data:t.filteredTags,autocomplete:"","allow-new":!0,field:"name",icon:"label",placeholder:t.$t("addATag"),loading:t.tagsFilterLoading},on:{typing:t.getFilteredTags},model:{value:t.postInfo.tags,callback:function(e){t.$set(t.postInfo,"tags",e)},expression:"postInfo.tags"}})],1)],1)])])])},o=[],c=(a("7f7f"),a("859b")),l=(a("d355"),a("7026")),d=a.n(l),u=(a("542c"),a("d7f2")),p=a("3304"),m=u["a"].get("tags"),h=u["a"].get("categories"),f=u["a"].get("blocks"),g={props:["post"],data:function(){return{postInfo:{status:0,format:{value:"post",name:"Post"},tags:[],published_at:"",categories:[],author:"",blocks:[]},filteredTags:[],tagsFilterLoading:!1,allFormat:p["a"],scheduleDate:"",page:1,limit:10,value:null,categories:[],blocks:[],optionsSelect:[{id:"1",label:"Sports",children:[{id:"s1",label:"sports child one"},{id:"s2",label:"sports child two"},{id:"s3",label:"sports child three"}]},{id:"2",label:"Movies",children:[{id:"m1",label:"Movies child one"},{id:"m2",label:"Movies child two"},{id:"m3",label:"Movies child three"}]},{id:"3",label:"News"}]}},components:{Datetime:c["Datetime"],Treeselect:d.a},watch:{postInfo:{handler:function(){this.sentDataToParent()},deep:!0},post:function(){var t=this;this.post&&(this.postInfo.status=this.post.status,this.post.tags.length&&this.post.tags.map((function(e){t.postInfo.tags.push(e.name)})),this.post.categories.length&&this.post.categories.map((function(e){t.postInfo.categories.push(e.id)})),this.postInfo.published_at=this.post.published_at,this.postInfo.format=this.post.format)}},created:function(){this.$emit("setDataFromChild",this.postInfo),this.fetchAllCategories(),this.fetchBlocks()},methods:{sentDataToParent:function(){this.$emit("setDataFromChild",this.postInfo)},getFilteredTags:function(t){var e=this;this.filteredTags=[];var a={};a.searchQuery=t,clearTimeout(this.debounce),this.debounce=setTimeout((function(){e.fetchAllTags(a)}),500)},fetchAllTags:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a,s=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.tagsFilterLoading=!0,t.next=3,m.getAllTags(this.page,this.limit,e);case 3:a=t.sent,a.data.docs.map((function(t){s.filteredTags.push(t.name)})),this.tagsFilterLoading=!1;case 6:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),fetchBlocks:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,f.getAllBlocks(1,20,e);case 2:a=t.sent,this.blocks=a.data.docs;case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),fetchAllCategories:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a,s=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h.getAllCategories(this.page,this.limit);case 2:e=t.sent,a=e.data.docs,a.map((function(t){if(t.children.length){var e=[];t.children.map((function(t){e.push({id:t.id,label:t.name})})),s.categories.push({id:t.id,label:t.name,children:e})}else s.categories.push({id:t.id,label:t.name})}));case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),changeSection:function(){this.postInfo.section=""}}},v=g,b=a("2877"),C=Object(b["a"])(v,r,o,!1,null,null,null),y=C.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card--block"},[a("div",{staticClass:"card--content"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-12"},[a("b-field",{staticClass:"field-group"},[a("div",[t.mediaItemPreview.image?[t.mediaItemPreview.thumbnails?a("b-field",{staticClass:"field-group img--preview img--preview--mainimg"},[a("img",{attrs:{src:t.mediaItemPreview.thumbnails.max}}),a("div",{staticClass:"wrap--replace--media",on:{click:function(e){return t.openModalMedia("mainArticlePhoto")}}},[a("div",{staticClass:"btn--replace--media"},[t._v(t._s(t.$t("replace")))])]),a("a",{staticClass:"delete is-large btn--delete--media",on:{click:function(e){t.mediaItemPreview=""}}})]):t._e()]:a("div",{on:{click:function(e){return t.openModalMedia("mainArticlePhoto")}}},[a("media-placeholder",{attrs:{type:"image",text:t.$t("browseMedia")}})],1)],2)])],1),a("div",{staticClass:"col-12"},[a("b-field",{staticClass:"field-group"},[a("b-input",{attrs:{type:"text",size:"is-medium",placeholder:t.$t("title")},model:{value:t.mainFieldPost.title,callback:function(e){t.$set(t.mainFieldPost,"title",e)},expression:"mainFieldPost.title"}})],1)],1),a("div",{staticClass:"col-12"},[a("b-field",{staticClass:"field-group"},[a("b-input",{attrs:{type:"textarea",rows:"2",placeholder:t.$t("excerpt")},model:{value:t.mainFieldPost.excerpt,callback:function(e){t.$set(t.mainFieldPost,"excerpt",e)},expression:"mainFieldPost.excerpt"}})],1)],1)])])])},w=[],k=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),$=a("2f62");function x(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function P(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?x(a,!0).forEach((function(e){Object(k["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):x(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var I={props:["post"],data:function(){return{title:"",mediaItemPreview:{image:""},mainFieldPost:{title:"",excerpt:"",media:""}}},created:function(){this.resetData()},watch:{mainFieldPost:{handler:function(t){this.sentDataToParent()},deep:!0},mainArticlePhoto:function(){this.mediaItemPreview=this.mainArticlePhoto,this.mainFieldPost.media=this.mainArticlePhoto.id},post:function(){this.post&&(this.mainFieldPost.title=this.post.title,this.mainFieldPost.excerpt=this.post.excerpt,this.post.media&&(this.mediaItemPreview=this.post.media))}},methods:{openModalMedia:function(t){this.$store.commit("openMediaImageAndVideo",t)},sentDataToParent:function(t){this.$emit("setDataFromChild",this.mainFieldPost)},resetData:function(){this.$store.commit("resetPostData")}},computed:P({},Object($["c"])({mainArticlePhoto:function(t){return t.media.mainArticlePhoto}}))},M=I,F=Object(b["a"])(M,_,w,!1,null,null,null),O=F.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content--editor"},[a("menu-editor",{on:{setEditorType:t.setEditorType}}),t.cards.length?a("Container",{attrs:{"drag-handle-selector":".card-header-title-drop"},on:{drop:t.onDrop}},t._l(t.cards,(function(e,s){return a("Draggable",{key:e.id},["paragraph"===e.type?a("div",{staticClass:"card--block"},[a("div",{staticClass:"card-header"},[a("p",{staticClass:"card-header-title card-header-title-drop"},[t._v("\n                        "+t._s(t.$t("paragraph"))+"\n                    ")]),a("a",{staticClass:"card-header-icon",on:{click:function(e){return t.deleteCard(s)}}},[a("b-icon",{attrs:{icon:"close"}})],1)]),a("div",{staticClass:"card--content"},[a("vue-editor",{attrs:{editorToolbar:t.toolbarEditor},model:{value:e.content,callback:function(a){t.$set(e,"content",a)},expression:"card.content"}})],1)]):t._e(),"blockquote"===e.type?a("div",{staticClass:"card--block"},[a("div",{staticClass:"card-header"},[a("p",{staticClass:"card-header-title card-header-title-drop"},[t._v("\n                        "+t._s(t.$t("blockquote"))+"\n                    ")]),a("a",{staticClass:"card-header-icon",on:{click:function(e){return t.deleteCard(s)}}},[a("b-icon",{attrs:{icon:"close"}})],1)]),a("div",{staticClass:"card--content"},[a("b-input",{attrs:{type:"textarea",rows:"4",placeholder:"Blockquote"},model:{value:e.content,callback:function(a){t.$set(e,"content",a)},expression:"card.content"}})],1)]):t._e(),"embed"===e.type?a("div",{staticClass:"card--block preview--iframe"},[a("div",{staticClass:"card-header"},[a("p",{staticClass:"card-header-title card-header-title-drop"},[t._v("\n                         "+t._s(t.$t("embed"))+"\n                    ")]),a("a",{staticClass:"card-header-icon",on:{click:function(e){return t.deleteCard(s)}}},[a("b-icon",{attrs:{icon:"close"}})],1)]),a("div",{staticClass:"card--content"},[a("b-input",{attrs:{type:"textarea",rows:"2",placeholder:"Content"},model:{value:e.content,callback:function(a){t.$set(e,"content",a)},expression:"card.content"}}),a("div",{staticClass:"text-center mt-3",domProps:{innerHTML:t._s(e.content)}})],1)]):t._e(),"image"===e.type?a("div",{staticClass:"card--block"},[a("div",{staticClass:"card-header"},[a("p",{staticClass:"card-header-title card-header-title-drop"},[t._v("\n                        "+t._s(t.$t("image"))+"\n                    ")]),a("a",{staticClass:"card-header-icon",on:{click:function(e){return t.deleteCard(s)}}},[a("b-icon",{attrs:{icon:"close"}})],1)]),a("div",{staticClass:"card--content"},[e.image?[e.image.thumbnails?a("b-field",{staticClass:"field-group img--preview"},[a("img",{attrs:{src:e.image.thumbnails.large,alt:""}}),a("div",{staticClass:"wrap--replace--media",on:{click:function(e){return t.openModalMedia({type:"cardImage",index:s})}}},[a("div",{staticClass:"btn--replace--media"},[t._v("Replace")])]),a("a",{staticClass:"delete is-large btn--delete--media",on:{click:function(t){e.image={}}}})]):a("div",{on:{click:function(e){return t.openModalMedia({type:"cardImage",index:s})}}},[a("media-placeholder",{attrs:{type:"image",text:"Browse Media"}})],1)]:t._e()],2)]):t._e(),"ads"===e.type?a("div",{staticClass:"card--block"},[a("div",{staticClass:"card-header"},[a("p",{staticClass:"card-header-title card-header-title-drop"},[t._v("\n                        "+t._s(t.$t("ads"))+"\n                    ")]),a("a",{staticClass:"card-header-icon",on:{click:function(e){return t.deleteCard(s)}}},[a("b-icon",{attrs:{icon:"close"}})],1)]),a("div",{staticClass:"card--content"},[a("b-input",{staticClass:"mb-4 text-force-left",attrs:{placeholder:"URL",type:"url"},model:{value:e.link,callback:function(a){t.$set(e,"link",a)},expression:"card.link"}}),e.ads?[e.ads.thumbnails?a("b-field",{staticClass:"field-group img--preview"},[a("img",{attrs:{src:e.ads.thumbnails.large}}),a("div",{staticClass:"wrap--replace--media",on:{click:function(e){return t.openModalMedia({type:"cardAds",index:s})}}},[a("div",{staticClass:"btn--replace--media"},[t._v("Replace")])]),a("a",{staticClass:"delete is-large btn--delete--media",on:{click:function(t){e.ads={}}}})]):a("div",{on:{click:function(e){return t.openModalMedia({type:"cardAds",index:s})}}},[a("media-placeholder",{attrs:{type:"image",text:"Browse Media"}})],1)]:t._e()],2)]):t._e(),"gallery"===e.type?a("div",{staticClass:"card--block"},[a("div",{staticClass:"card-header"},[a("p",{staticClass:"card-header-title card-header-title-drop"},[t._v("\n                        "+t._s(t.$t("gallery"))+"\n                    ")]),a("a",{staticClass:"card-header-icon",on:{click:function(e){return t.deleteCard(s)}}},[a("b-icon",{attrs:{icon:"close"}})],1)]),a("div",{staticClass:"card--content gallery--editor"},[e.gallery?[e.gallery.length?t._l(e.gallery,(function(i,n){return a("div",{key:i.id,staticClass:"gallery--img--editor"},[i.thumbnails?[i.thumbnails?a("b-field",{staticClass:"field-group img--preview"},[a("img",{attrs:{src:i.thumbnails.large,alt:""}}),a("div",{staticClass:"wrap--replace--media",on:{click:function(e){return t.openModalMedia({type:"cardGallery",index:s})}}},[a("div",{staticClass:"btn--replace--media"},[t._v("Replace")])]),a("a",{staticClass:"delete is-large btn--delete--media",on:{click:function(t){return e.gallery.splice(n,1)}}})]):t._e()]:t._e()],2)})):a("div",{on:{click:function(e){return t.openModalMedia({type:"cardGallery",index:s})}}},[a("media-placeholder",{attrs:{type:"gallery",text:"Browse Media"}})],1)]:t._e()],2)]):t._e(),"video"===e.type?a("div",{staticClass:"card--block"},[a("div",{staticClass:"card-header"},[a("p",{staticClass:"card-header-title card-header-title-drop"},[t._v("\n                        "+t._s(t.$t("video"))+"\n                    ")]),a("a",{staticClass:"card-header-icon",on:{click:function(e){return t.deleteCard(s)}}},[a("b-icon",{attrs:{icon:"close"}})],1)]),a("div",{staticClass:"card--content"},[e.video?[e.video.thumbnails?a("b-field",{staticClass:"field-group img--preview"},[a("img",{attrs:{src:e.video.thumbnails.large,alt:""}}),a("div",{staticClass:"wrap--replace--media",on:{click:function(e){return t.openModalMedia({type:"cardVideo",index:s})}}},[a("div",{staticClass:"btn--replace--media"},[t._v("Replace")])]),a("a",{staticClass:"delete is-large btn--delete--media",on:{click:function(t){e.video={}}}})]):a("div",{on:{click:function(e){return t.openModalMedia({type:"cardVideo",index:s})}}},[a("media-placeholder",{attrs:{type:"video",text:"Browse Media"}})],1)]:t._e()],2)]):t._e()])})),1):t._e(),t.windowWidth>991.98?[a("div",{attrs:{id:"scroll--bottom"}})]:t._e()],2)},T=[],j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"menu--editor"},[a("ul",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#scroll--bottom",expression:"'#scroll--bottom'"}],staticClass:"nav"},[a("li",{staticClass:"menu--item",on:{click:function(e){return t.setEditorType("paragraph")}}},[t._m(0),t._v("\n            "+t._s(t.$t("paragraph"))+"\n        ")]),a("li",{staticClass:"menu--item",on:{click:function(e){return t.setEditorType("image")}}},[t._m(1),t._v("\n            "+t._s(t.$t("image"))+"\n        ")]),a("li",{staticClass:"menu--item",on:{click:function(e){return t.setEditorType("ads")}}},[t._m(2),t._v("\n            "+t._s(t.$t("ads"))+"\n        ")]),a("li",{staticClass:"menu--item",on:{click:function(e){return t.setEditorType("gallery")}}},[t._m(3),t._v("\n            "+t._s(t.$t("gallery"))+"\n        ")]),a("li",{staticClass:"menu--item",on:{click:function(e){return t.setEditorType("video")}}},[t._m(4),t._v("\n            "+t._s(t.$t("video"))+"\n        ")]),a("li",{staticClass:"menu--item",on:{click:function(e){return t.setEditorType("blockquote")}}},[t._m(5),t._v("\n            "+t._s(t.$t("blockquote"))+"\n        ")]),a("li",{staticClass:"menu--item",on:{click:function(e){return t.setEditorType("embed")}}},[t._m(6),t._v("\n            "+t._s(t.$t("embed"))+"\n        ")])])])},E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon"},[a("i",{staticClass:"fas fa-paragraph"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon"},[a("i",{staticClass:"fas fa-image"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon"},[a("i",{staticClass:"fas fa-ad"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon"},[a("i",{staticClass:"fas fa-images"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon"},[a("i",{staticClass:"fas fa-video"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon"},[a("i",{staticClass:"fas fa-quote-right"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon"},[a("i",{staticClass:"fas fa-link"})])}],A={methods:{setEditorType:function(t){this.$emit("setEditorType",t)}}},R=A,S=Object(b["a"])(R,j,E,!1,null,null,null),L=S.exports,V=a("3f7d"),B=a("5873"),G=a("ff41");function q(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function N(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?q(a,!0).forEach((function(e){Object(k["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):q(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var J={props:["post"],data:function(){return{cardEditorType:"",cards:[],toolbarEditor:[[{align:""},{align:"center"},{align:"right"},{align:"justify"}],["bold","italic","underline"],[{list:"ordered"},{list:"bullet"},{header:[1,2,3,!1]}],["link"]]}},components:{MenuEditor:L,Container:V["Container"],Draggable:V["Draggable"],VueEditor:B["a"]},watch:{setContentCardImage:function(){this.cards[this.setContentCardImage.index].image=this.setContentCardImage.item},setContentCardGallery:function(){this.cards[this.setContentCardGallery.index].gallery=this.setContentCardGallery.item},setContentCardVideo:function(){this.cards[this.setContentCardVideo.index].video=this.setContentCardVideo.item},setContentCardImageAds:function(){this.cards[this.setContentCardImageAds.index].ads=this.setContentCardImageAds.item},cards:{handler:function(){this.sentDataToParents(),console.log("this.cards",this.cards)},deep:!0},post:function(){this.post&&(this.cards=this.post.content)}},computed:N({},Object($["c"])({setContentCardImage:function(t){return t.media.setContentCardImage},setContentCardGallery:function(t){return t.media.setContentCardGallery},setContentCardVideo:function(t){return t.media.setContentCardVideo},setContentCardImageAds:function(t){return t.media.setContentCardImageAds}}),{windowWidth:function(){return window.innerWidth}}),methods:{setEditorType:function(t){this.cardEditorType=t,this.addNewCard(t)},sentDataToParents:function(){this.$emit("setDataFromChild",this.cards)},deleteCard:function(t){this.cards.splice(t,1)},onDrop:function(t){this.cards=Object(G["a"])(this.cards,t)},addNewCard:function(t){var e={type:t};switch(t){case"image":e.image={};break;case"ads":e.ads={};break;case"video":e.video={};break;case"gallery":e.gallery=[];break;default:e.content=""}this.cards.push(e)},openModalMedia:function(t){"cardVideo"===t.type?this.$store.commit("openMediaVideosFromPosts",t):"cardGallery"===t.type?this.$store.commit("openMediaGalleryFromPosts",t):"cardAds"===t.type?this.$store.commit("openMediaAdsFromPosts",t):this.$store.commit("openMediaImageFromPosts",t)}}},W=J,K=Object(b["a"])(W,D,T,!1,null,null,null),z=K.exports,H=u["a"].get("posts"),Q={name:"postForm",data:function(){return{breadcrumb:[{link:"/posts",label:this.$t("postsPage.breadcrumb[0]")},{link:"",label:this.$t("postsPage.breadcrumb[1]")}],postInfo:{},postMainField:{},postMainFieldData:{},allCards:[],cardContent:[],isLoading:!1,post:{}}},components:{PostInfo:y,ContentEditor:z,MainFieldPost:O},created:function(){this.$route.params.id&&this.getPost(this.$route.params.id)},watch:{},methods:{setDataFromPostInfo:function(t){this.postInfo=t},setDataFromMainField:function(t){this.postMainField=t},setDataFromCardsContent:function(t){this.allCards=t},submitForm:function(){this.isLoading=!1;var t=JSON.parse(JSON.stringify(this.allCards));if(t){var e=function(e){if("image"===t[e].type){var a=t[e].image;a.id&&(t[e].image=a.id)}if("video"===t[e].type){var s=t[e].video;s.id&&(t[e].video=s.id)}if("gallery"===t[e].type){var i=t[e].gallery;t[e].gallery=[],i.map((function(a){t[e].gallery.push(a.id)}))}};for(var a in t)e(a)}var s={};s.title=this.postMainField.title,s.excerpt=this.postMainField.excerpt,this.postMainField.media&&(s.media=this.postMainField.media),s.status=this.postInfo.status,s.tags=this.postInfo.tags,s.categories=this.postInfo.categories,this.postInfo.format&&(s.format=this.postInfo.format.value),s.published_at=this.postInfo.published_at,s.content=t,this.isLoading=!0,this.$route.params.id?this.updatePost(this.$route.params.id,s):this.newPost(s)},newPost:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,H.newPost(e);case 2:a=t.sent,a.success?(this.successMessage(a.message),this.$router.push("/postForm/"+a.data)):this.errorMessage(a[0]),this.isLoading=!1;case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),getPost:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,H.getPost(e);case 2:a=t.sent,this.post=a;case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),updatePost:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e,a){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,H.updatePost(e,a);case 2:s=t.sent,s.success?this.successMessage(s.message):this.errorMessage(s[0]),this.isLoading=!1;case 5:case"end":return t.stop()}}),t,this)})));function e(e,a){return t.apply(this,arguments)}return e}(),errorMessage:function(t){this.$snackbar.open({message:t,type:"is-danger",position:"is-bottom-right",actionText:"OK",queue:!1,duration:1e4,indefinite:!1})},successMessage:function(t){this.$snackbar.open({message:t,type:"is-success",position:"is-bottom-right",actionText:"OK",queue:!1,duration:1e4,indefinite:!1})},changeSideBarStyle:function(){document.body.classList.add("editor--mini"),this.$store.commit("miniSidebar")}}},U=Q,X=Object(b["a"])(U,s,i,!1,null,null,null);e["default"]=X.exports}}]);
//# sourceMappingURL=chunk-2d221853.d6bb1ae5.js.map
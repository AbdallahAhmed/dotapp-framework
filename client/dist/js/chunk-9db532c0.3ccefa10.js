(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9db532c0"],{"5c3a":function(A,t,s){"use strict";s.r(t);var a=function(){var A=this,t=A.$createElement,s=A._self._c||t;return s("div",{staticClass:"dashboard"},[s("div",{staticClass:"page--head"},[s("div",{staticClass:"wrap--content"},[s("div",{staticClass:"page--title"},[s("div",[s("h1",{staticClass:"title--text"},[A._v("\n                        "+A._s(A.$t("dashboardPage.pageName"))+"\n                    ")]),s("breadcrumb",{attrs:{links:A.breadcrumb}})],1),s("div",{staticClass:"page--title--action ml-auto"},[s("statistics")],1)])])]),s("div",{staticClass:"wrap--content"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-12 col-sm-12 col-md-8 "},[s("posts-card"),s("events-card")],1)])])])},e=[],i=function(){var A=this,t=A.$createElement,s=A._self._c||t;return s("ul",{staticClass:"list--statistics"},[s("li",{staticClass:"list-statistics-item"},[s("div",{staticClass:"statistics--content"},[A._m(0),s("div",{staticClass:"text-center"},[s("p",{staticClass:"statistics--title"},[A._v(" "+A._s(A.$t("dashboardPage.statistics.users")))]),s("p",{staticClass:"statistics--number"},[A._v(A._s(A.usersTotal))])])])]),s("li",{staticClass:"list-statistics-item"},[s("div",{staticClass:"statistics--content"},[A._m(1),s("div",{staticClass:"text-center"},[s("p",{staticClass:"statistics--title"},[A._v(" "+A._s(A.$t("dashboardPage.statistics.posts")))]),s("p",{staticClass:"statistics--number"},[A._v(A._s(A.postsTotal))])])])]),s("li",{staticClass:"list-statistics-item"},[s("div",{staticClass:"statistics--content"},[A._m(2),s("div",{staticClass:"text-center"},[s("p",{staticClass:"statistics--title"},[A._v(" "+A._s(A.$t("dashboardPage.statistics.events")))]),s("p",{staticClass:"statistics--number"},[A._v(A._s(A.eventsTotal))])])])])])},n=[function(){var A=this,t=A.$createElement,s=A._self._c||t;return s("span",{staticClass:"statistics--icon is-primary-light"},[s("i",{staticClass:"far fa-user"})])},function(){var A=this,t=A.$createElement,s=A._self._c||t;return s("span",{staticClass:"statistics--icon is-success-light"},[s("i",{staticClass:"far fa-newspaper"})])},function(){var A=this,t=A.$createElement,s=A._self._c||t;return s("span",{staticClass:"statistics--icon is-purple-light"},[s("i",{staticClass:"far fa-calendar-alt"})])}],l=(s("96cf"),s("3b8d")),r=s("d7f2"),c=r["a"].get("posts"),o=r["a"].get("events"),d=r["a"].get("users"),u={data:function(){return{usersTotal:null,eventsTotal:null,postsTotal:null,page:1,limit:0}},created:function(){this.getAllStatistics()},methods:{getAllStatistics:function(){var A=Object(l["a"])(regeneratorRuntime.mark(function A(){var t,s,a;return regeneratorRuntime.wrap(function(A){while(1)switch(A.prev=A.next){case 0:return A.next=2,c.getAllPosts(this.page,this.limit,"filters","post");case 2:return t=A.sent,t.success&&(this.postsTotal=t.data.total),A.next=6,o.getAllEvents(this.page,this.limit);case 6:return s=A.sent,this.eventsTotal=s.data.total,A.next=10,d.getAllUsers(this.page,this.limit);case 10:a=A.sent,this.usersTotal=a.total;case 12:case"end":return A.stop()}},A,this)}));function t(){return A.apply(this,arguments)}return t}()}},m=u,C=s("2877"),p=Object(C["a"])(m,i,n,!1,null,null,null),h=p.exports,g=function(){var A=this,t=A.$createElement,a=A._self._c||t;return a("div",{staticClass:"card--block card--feed"},[a("div",{staticClass:"card-header"},[a("p",{staticClass:"card-header-title"},[A._m(0),A._v("\n            "+A._s(A.$t("dashboardPage.latestPosts"))+"\n        ")])]),a("div",{staticClass:"card--content"},[A.dataLoading?[a("loading-data")]:[A.posts.length?a("b-table",{staticClass:"no--header table--feed",attrs:{data:A.posts,paginated:!1},scopedSlots:A._u([{key:"default",fn:function(t){return[a("b-table-column",{staticClass:"thumbnail--post--content",attrs:{width:"100"}},[t.row.media?a("div",{staticClass:"thumbnail--post"},[t.row.policies.indexOf("post.update")>-1?a("router-link",{attrs:{to:"/postForm/"+t.row.id}},[a("img",{attrs:{src:t.row.media.thumbnails.medium,alt:t.row.title}})]):a("img",{attrs:{src:t.row.media.thumbnails.medium,alt:t.row.title}})],1):a("div",{staticClass:"placeholder-img thumbnail--post"},[a("img",{attrs:{src:s("dab8")}})])]),a("b-table-column",[a("div",{staticClass:"post--title"},[t.row.policies.indexOf("post.update")>-1?a("router-link",{attrs:{to:"/postForm/"+t.row.id}},[A._v(A._s(t.row.title))]):[A._v(A._s(t.row.title))]],2),a("div",{staticClass:"post--date"},[a("span",{staticClass:"icon"},[a("i",{staticClass:"fas fa-clock"})]),A._v("\n                            "+A._s(t.row.created)+"\n                        ")])]),a("b-table-column",{attrs:{centered:""}},[a("div",{staticClass:"text--title"},[1===t.row.status?a("b-tag",{attrs:{type:"is-success"}},[A._v("\n                                "+A._s(A.$t("published"))+"\n                            ")]):a("b-tag",{attrs:{type:"is-danger"}},[A._v("\n                                "+A._s(A.$t("notPublished"))+"\n                            ")])],1)]),a("b-table-column",{attrs:{centered:""}},[a("div",{staticClass:"block--item--title d-flex align-items-center item--text created--by"},[a("span",{staticClass:"icon"},[a("i",{staticClass:"fas fa-user"})]),a("div",{staticClass:"text--title text-capitalize"},[A._v(A._s(t.row.user.first_name+" "+t.row.user.last_name))])])])]}}],null,!1,38899625)}):[a("no-data",{attrs:{text:"No posts have been created"}})]]],2)])},v=[function(){var A=this,t=A.$createElement,s=A._self._c||t;return s("span",{staticClass:"icon"},[s("i",{staticClass:"far fa-newspaper"})])}],f=r["a"].get("posts"),b={data:function(){return{page:1,limit:5,posts:[],dataLoading:!1}},created:function(){this.fetchAllItems()},methods:{fetchAllItems:function(){var A=Object(l["a"])(regeneratorRuntime.mark(function A(){var t;return regeneratorRuntime.wrap(function(A){while(1)switch(A.prev=A.next){case 0:return this.dataLoading=!0,A.next=3,f.getAllPosts(this.page,this.limit,"filters","post");case 3:t=A.sent,this.posts=t.data.docs,this.dataLoading=!1;case 6:case"end":return A.stop()}},A,this)}));function t(){return A.apply(this,arguments)}return t}()}},I=b,E=Object(C["a"])(I,g,v,!1,null,null,null),k=E.exports,w=function(){var A=this,t=A.$createElement,a=A._self._c||t;return a("div",{staticClass:"card--block card--feed"},[a("div",{staticClass:"card-header"},[a("p",{staticClass:"card-header-title"},[A._m(0),A._v("\n            "+A._s(A.$t("dashboardPage.latestEvents"))+"\n        ")])]),a("div",{staticClass:"card--content"},[A.dataLoading?[a("loading-data")]:[A.events.length?a("b-table",{staticClass:"no--header table--feed",attrs:{data:A.events,paginated:!1},scopedSlots:A._u([{key:"default",fn:function(t){return[a("b-table-column",{staticClass:"thumbnail--post--content",attrs:{width:"100"}},[t.row.media?a("div",{staticClass:"thumbnail--post"},[t.row.policies.indexOf("event.manage")>-1?a("router-link",{attrs:{to:"/eventForm/"+t.row.id}},[a("img",{attrs:{src:t.row.media.thumbnails.medium,alt:t.row.title}})]):a("img",{attrs:{src:t.row.media.thumbnails.medium,alt:t.row.title}})],1):a("div",{staticClass:"placeholder-img thumbnail--post"},[a("img",{attrs:{src:s("dab8")}})])]),a("b-table-column",[a("div",{staticClass:"post--title"},[t.row.policies.indexOf("event.manage")>-1?a("router-link",{attrs:{to:"/eventForm/"+t.row.id}},[A._v(A._s(t.row.title))]):[A._v(A._s(t.row.title))]],2),a("div",{staticClass:"post--date"},[a("span",{staticClass:"icon"},[a("i",{staticClass:"far fa-calendar-alt"})]),A._v("\n                            "+A._s(t.row.scheduled)+"\n                        ")])]),a("b-table-column",{attrs:{centered:""}},[a("div",{staticClass:"text--title"},[1===t.row.status?a("b-tag",{attrs:{type:"is-success"}},[A._v("\n                                "+A._s(A.$t("published"))+"\n                            ")]):a("b-tag",{attrs:{type:"is-danger"}},[A._v("\n                                "+A._s(A.$t("notPublished"))+"\n                            ")])],1)]),a("b-table-column",[t.row.place?a("div",{staticClass:"item--text"},[a("span",{staticClass:"icon"},[a("i",{staticClass:"fas fa-map-marker-alt"})]),A._v("\n                            "+A._s(A._f("address")(t.row.place))+"\n                        ")]):A._e()]),a("b-table-column",{attrs:{centered:""}},[a("div",{staticClass:"block--item--title d-flex align-items-center justify-content-center item--text"},[a("div",{staticClass:"text--title"},["free"===t.row.type?a("b-tag",{attrs:{type:"is-warning"}},[A._v("\n                                    "+A._s(A.$t("free"))+"\n                                ")]):a("b-tag",{attrs:{type:"is-info"}},[A._v("\n                                    "+A._s(A.$t("paid"))+"\n                                ")])],1)])]),a("b-table-column",{attrs:{centered:""}},[a("div",{staticClass:"block--item--title d-flex align-items-center item--text created--by"},[a("span",{staticClass:"icon"},[a("i",{staticClass:"fas fa-user"})]),a("div",{staticClass:"text--title text-capitalize"},[A._v(A._s(t.row.user.first_name+" "+t.row.user.last_name))])])])]}}],null,!1,1215851228)}):[a("no-data",{attrs:{text:"No events have been created"}})]]],2)])},Q=[function(){var A=this,t=A.$createElement,s=A._self._c||t;return s("span",{staticClass:"icon"},[s("i",{staticClass:"far fa-calendar-alt"})])}],_=r["a"].get("events"),B={data:function(){return{page:1,limit:5,events:[],dataLoading:!1}},created:function(){this.fetchAllItems()},methods:{fetchAllItems:function(){var A=Object(l["a"])(regeneratorRuntime.mark(function A(){var t;return regeneratorRuntime.wrap(function(A){while(1)switch(A.prev=A.next){case 0:return this.dataLoading=!0,A.next=3,_.getAllEvents(this.page,this.limit);case 3:t=A.sent,this.events=t.data.docs,this.dataLoading=!1;case 6:case"end":return A.stop()}},A,this)}));function t(){return A.apply(this,arguments)}return t}()}},x=B,y=Object(C["a"])(x,w,Q,!1,null,null,null),D=y.exports,j={name:"dashboard",data:function(){return{breadcrumb:[{link:"",label:this.$t("dashboardPage.breadcrumb[0]")}]}},components:{Statistics:h,PostsCard:k,EventsCard:D},methods:{}},K=j,P=Object(C["a"])(K,a,e,!1,null,null,null);t["default"]=P.exports},dab8:function(A,t){A.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=chunk-9db532c0.3ccefa10.js.map
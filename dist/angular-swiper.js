!function(e,i,t){"use strict";function n(){for(var e=[],i="0123456789abcdef",t=0;36>t;t++)e[t]=i.substr(Math.floor(16*Math.random()),1);e[14]="4",e[19]=i.substr(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-";var n=e.join("");return n}function r(e){return{restrict:"E",transclude:!0,scope:{slidesPerView:"=",slidesPerColumn:"=",spaceBetween:"=",paginationIsActive:"=",paginationClickable:"=",showNavButtons:"=",loop:"=",autoplay:"=",initialSlide:"=",containerCls:"@",paginationCls:"@",slideCls:"@",direction:"@",swiper:"=",overrideParameters:"="},controller:["$scope","$element",function(e,t){this.buildSwiper=function(){var n={slidesPerView:e.slidesPerView||1,slidesPerColumn:e.slidesPerColumn||1,spaceBetween:e.spaceBetween||0,direction:e.direction||"horizontal",loop:e.loop||!1,initialSlide:e.initialSlide||0,showNavButtons:!1};e.autoplay===!0&&(n=i.extend({},n,{autoplay:!0})),e.paginationIsActive===!0&&(n=i.extend({},n,{paginationClickable:e.paginationClickable||!0,pagination:"#paginator-"+e.swiper_uuid})),e.showNavButtons===!0&&(n.nextButton="#nextButton-"+e.swiper_uuid,n.prevButton="#prevButton-"+e.swiper_uuid),e.overrideParameters&&(n=i.extend({},n,e.overrideParameters));e.containerCls||"";if(i.isObject(e.swiper))e.swiper=new Swiper(t[0].firstChild,n);else{new Swiper(t[0].firstChild,n)}}}],link:function(e,t,r){var s=n();e.swiper_uuid=s;var o="paginator-"+s,a="prevButton-"+s,l="nextButton-"+s;i.element(t[0].querySelector(".swiper-pagination")).attr("id",o),i.element(t[0].querySelector(".swiper-button-next")).attr("id",l),i.element(t[0].querySelector(".swiper-button-prev")).attr("id",a)},template:'<div class="swiper-container {{containerCls}}"><div class="swiper-wrapper" ng-transclude></div><div class="swiper-pagination"></div><div class="swiper-button-next" ng-show="showNavButtons"></div><div class="swiper-button-prev" ng-show="showNavButtons"></div></div>'}}function s(e){return{restrict:"E",require:"^ksSwiperContainer",transclude:!0,template:"<div ng-transclude></div>",replace:!0,link:function(i,t,n,r){i.$last===!0&&e(function(){r.buildSwiper()},0)}}}i.module("ksSwiper",[]).directive("ksSwiperContainer",r).directive("ksSwiperSlide",s),r.$inject=["$log"],s.$inject=["$timeout"]}(window,angular,void 0);
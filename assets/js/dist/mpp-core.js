!function(){"use strict";var t,e,i,n={297:function(t,e,i){var n=i(694),p=i(690),o=i(203),a=i(993);let r=window.mpp||{};r.hooks=(0,n.createHooks)(),r.lightbox=o.Z,void 0===r.notify&&(r.notify=a.h,r.clearNotice=a.D),window.mpp=r,window.mpp_mejs_activate=p.w,window.mpp_mejs_activate_lightbox_player=p.V},203:function(t,e,i){var n=i(567),p=i.n(n);function o(t,e){var i=0,n=0;for(var p in e)e[p].id==t&&(n=i),i++;return n}e.Z={open:function(t,e,i){t.length<1?window.location=i:(p().magnificPopup.open({items:t,type:"inline",closeBtnInside:!1,preload:[1,3],closeOnBgClick:!0,showCloseBtn:!0,closeMarkup:'<button title="%title%" type="button" class="mfp-close mpp-lightbox-close-btn">&#215;</button>',gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]}},e),p()(document).trigger("mpp:lightbox:opened",[t,e]),p()(document).trigger("mpp_lightbox_opened"))},update:function(t){if(!mpp.lightbox.isLoaded())return!1;var e=p().magnificPopup.instance;e.currItem.src=t,e.items[e.index]=e.currItem,e.updateItemHTML()},gallery:function(t,e,i,n){var a=this;p().post(ajaxurl,{action:"mpp_fetch_gallery_media",gallery_id:t,cookie:encodeURIComponent(document.cookie)},(function(t){if(void 0!==t.items){var p=t.items;void 0!==n&&(e=o(n,p)),a.open(p,e,i)}}),"json")},media:function(t,e,i,n){var p=this;jQuery.post(ajaxurl,{action:"mpp_lightbox_fetch_media",media_ids:t,cookie:encodeURIComponent(document.cookie)},(function(t){if(void 0!==t.items){var a=t.items;void 0!==n&&(e=o(n,a)),p.open(a,e,i)}}),"json")},activity:function(t,e,i,n){var p=this;jQuery.post(ajaxurl,{action:"mpp_fetch_activity_media",activity_id:t,cookie:encodeURIComponent(document.cookie)},(function(t){if(void 0!==t.items){var a=t.items;void 0!==n&&(e=o(n,a)),p.open(a,e,i)}}),"json")},reloadMedia:function(t){var e=this;jq.post(ajaxurl,{action:"mpp_reload_lightbox_media",media_id:t},(function(t){t.success&&e.update(t.data.content)}))},reloadCurrentMedia:function(){var t=this.getCurrentMediaID();return!!t&&(this.reloadMedia(t),!0)},getCurrentMediaID:function(){if(!this.isLoaded()||!this.isOpen())return 0;var t=jQuery.magnificPopup.instance.currItem.data;return void 0!==t.id?t.id:0},isLoaded:function(){return void 0!==jQuery.fn.magnificPopup},isOpen:function(){return!0===jQuery.magnificPopup.instance.isOpen},is_lightbox_loaded:function(){return this.isLoaded()},supportsMediaType:function(t){return!t||!_mppSettings.lightboxDisabledTypes||!_mppSettings.lightboxDisabledTypes[t]}}},690:function(t,e,i){i.d(e,{V:function(){return a},w:function(){return o}});var n=i(567),p=i.n(n);function o(t){if(void 0===p().fn.mediaelementplayer)return;let e={};"undefined"!=typeof _wpmejsSettings&&(e=_wpmejsSettings),e.success=function(t){let e,i;"flash"===t.pluginType&&(e=t.attributes.autoplay&&"false"!==t.attributes.autoplay,i=t.attributes.loop&&"false"!==t.attributes.loop,e&&t.addEventListener("canplay",(function(){t.play()}),!1),i&&t.addEventListener("ended",(function(){t.play()}),!1))},p()(".wp-audio-shortcode, .wp-video-shortcode",p()("#activity-"+t)).mediaelementplayer(e),p()(".wp-playlist",p()("#activity-"+t)).each((function(){return new WPPlaylistView({el:this})}))}function a(){if(void 0===p().fn.mediaelementplayer)return;let t={};"undefined"!=typeof _wpmejsSettings&&(t=_wpmejsSettings),t.success=function(t){let e,i;"flash"===t.pluginType&&(e=t.attributes.autoplay&&"false"!==t.attributes.autoplay,i=t.attributes.loop&&"false"!==t.attributes.loop,e&&t.addEventListener("canplay",(function(){t.play()}),!1),i&&t.addEventListener("ended",(function(){t.play()}),!1))},p()(".wp-audio-shortcode, .wp-video-shortcode",p()(".mfp-content")).mediaelementplayer(t),p()(".wp-playlist",p()(".mfp-content")).each((function(){return new WPPlaylistView({el:this})}))}},993:function(t,e,i){i.d(e,{D:function(){return a},h:function(){return o}});var n=i(567),p=i.n(n);function o(t,e){var i="updated success";void 0!==e&&(i="error"),p()("#mpp-notice-message").remove();for(var n=["#mpp-container","#whats-new-form",".mpp-upload-shortcode"],o="",a=0;a<n.length;a++)if(p()(n[a]).get(0)){o=n[a];break}o&&p()(o).prepend('<div id="mpp-notice-message" class="mpp-notice mpp-template-notice '+i+'"><p>'+t+"</p></div>").show()}function a(){p()("#mpp-notice-message").remove()}},567:function(t){t.exports=window.jQuery},694:function(t){t.exports=window.wp.hooks}},p={};function o(t){var e=p[t];if(void 0!==e)return e.exports;var i=p[t]={exports:{}};return n[t](i,i.exports,o),i.exports}o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,{a:e}),e},o.d=function(t,e){for(var i in e)o.o(e,i)&&!o.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e=o(567),i=o.n(e),o(297),(t=i())(document).ready((function(){let e=mpp.lightbox.isLoaded();e&&_mppSettings.enable_activity_lightbox&&(t(document).on("click.mpp:activity:lightbox.mpp:lightbox",".mpp-activity-media-list a.mpp-activity-media, .mpp-activity-media-list a.mpp-activity-item-title",(function(){let e=t(this);if(e.hasClass("mpp-no-lightbox"))return;if(!mpp.lightbox.supportsMediaType(e.data("mpp-type")))return;let i,n,p=e.parents(".mpp-activity-item-content"),o=e.data("mpp-activity-id"),a=0;return p.length?a=e.parents(".mpp-container").find(".mpp-activity-item-content").index(p):!o&&e.find("img.mpp-attached-media-item").length&&(o=e.find("img.mpp-attached-media-item").data("mpp-activity-id")),n=e.attr("href"),!o||(i=e.data("mpp-media-id"),mpp.lightbox.activity(o,a,n,i),!1)})),t(document).on("click.mpp:activity:comment:lightbox.mpp:lightbox",".mpp-activity-comment-media-list a",(function(){let e=t(this);if(e.hasClass("mpp-no-lightbox"))return;if(!mpp.lightbox.supportsMediaType(e.data("mpp-type")))return;let i=e.data("mpp-media-id"),n=e.attr("href");return!i||(mpp.lightbox.media(i,0,n),!1)}))),e&&_mppSettings.enable_gallery_lightbox&&t(document).on("click.mpp:gallery:cover:lightbox.mpp:lightbox",".mpp-gallery a.mpp-gallery-cover",(function(){let e=t(this);if(e.hasClass("mpp-no-lightbox"))return;if(!mpp.lightbox.supportsMediaType(e.data("mpp-type")))return;let i=e.data("mpp-gallery-id"),n=e.attr("href");return!i||(mpp.lightbox.gallery(i,0,n),!1)})),e&&t(document).on("click.mpp:shortcode:lightbox.mpp:lightbox",".mpp-shortcode-lightbox-enabled a.mpp-media-thumbnail, .mpp-shortcode-lightbox-enabled a.mpp-media-title",(function(){let e=t(t(this).parents(".mpp-shortcode-lightbox-enabled").get(0));if(!e.get(0))return;var i=t(this);if(i.hasClass("mpp-no-lightbox"))return;if(!mpp.lightbox.supportsMediaType(i.data("mpp-type")))return;let n=e.data("media-ids"),p=i.attr("href"),o=i.data("mpp-media-id");return mpp.lightbox.media(n,0,p,o),!1})),e&&_mppSettings.enable_lightbox_in_gallery_media_list&&t(document).on("click.mpp:gallery:media:lightbox.mpp:lightbox",".mpp-single-gallery-media-list a.mpp-photo-thumbnail, .mpp-single-gallery-media-list a.mpp-media-title",(function(){let e=t(this);if(e.hasClass("mpp-no-lightbox"))return;if(!mpp.lightbox.supportsMediaType(e.data("mpp-type")))return;let i=e.parents(".mpp-single-gallery-media-list").data("gallery-id"),n=e.attr("href"),p=e.data("mpp-media-id");return!i||!p||(mpp.lightbox.gallery(i,0,n,p),!1)})),e&&t(document).on("click.mpp:link:lightbox.mpp:lightbox",".mpp-lightbox-link",(function(){var e=t(this);if(e.hasClass("mpp-no-lightbox"))return;if(!mpp.lightbox.supportsMediaType(e.data("mpp-type")))return;let i=e.data("activity-id"),n=e.data("gallery-id"),p=e.data("media-id"),o=e.attr("href"),a=!1,r=e.data("position");return r?r-=1:r=0,n?(mpp.lightbox.gallery(n,r,o),a=!0):p?(mpp.lightbox.media(p,r,o),a=!0):i&&(mpp.lightbox.activity(i,r,o),a=!0),!a&&void 0}))}))}();
//# sourceMappingURL=mpp-core.js.map
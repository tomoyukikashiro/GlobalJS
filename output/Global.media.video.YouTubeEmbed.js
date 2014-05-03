Ext.data.JsonP.Global_media_video_YouTubeEmbed({"tagname":"class","name":"Global.media.video.YouTubeEmbed","autodetected":{},"files":[{"filename":"YouTubeEmbed.js","href":"YouTubeEmbed.html#Global-media-video-YouTubeEmbed"}],"extends":"Global.ObservableClass","members":[{"name":"id","tagname":"cfg","owner":"Global.media.video.YouTubeEmbed","id":"cfg-id","meta":{}},{"name":"inst","tagname":"cfg","owner":"Global.media.video.YouTubeEmbed","id":"cfg-inst","meta":{}},{"name":"param","tagname":"cfg","owner":"Global.media.video.YouTubeEmbed","id":"cfg-param","meta":{}},{"name":"sdkId","tagname":"cfg","owner":"Global.media.video.YouTubeEmbed","id":"cfg-sdkId","meta":{}},{"name":"sdkSrc","tagname":"cfg","owner":"Global.media.video.YouTubeEmbed","id":"cfg-sdkSrc","meta":{}},{"name":"_appendSdk","tagname":"method","owner":"Global.media.video.YouTubeEmbed","id":"method-_appendSdk","meta":{"private":true}},{"name":"_applyConfig","tagname":"method","owner":"Global.core.BaseClass","id":"method-_applyConfig","meta":{"private":true}},{"name":"_createEmbedInstance","tagname":"method","owner":"Global.media.video.YouTubeEmbed","id":"method-_createEmbedInstance","meta":{"private":true}},{"name":"_getParam","tagname":"method","owner":"Global.media.video.YouTubeEmbed","id":"method-_getParam","meta":{}},{"name":"_getSdkCode","tagname":"method","owner":"Global.media.video.YouTubeEmbed","id":"method-_getSdkCode","meta":{"private":true}},{"name":"_hasSdk","tagname":"method","owner":"Global.media.video.YouTubeEmbed","id":"method-_hasSdk","meta":{"private":true}},{"name":"_onLoadSdk","tagname":"method","owner":"Global.media.video.YouTubeEmbed","id":"method-_onLoadSdk","meta":{"private":true}},{"name":"_onReadyVideo","tagname":"method","owner":"Global.media.video.YouTubeEmbed","id":"method-_onReadyVideo","meta":{"private":true}},{"name":"addEventListener","tagname":"method","owner":"Global.event.EventDispatcher","id":"method-addEventListener","meta":{}},{"name":"dispatchEvent","tagname":"method","owner":"Global.event.EventDispatcher","id":"method-dispatchEvent","meta":{}},{"name":"embed","tagname":"method","owner":"Global.media.video.YouTubeEmbed","id":"method-embed","meta":{}},{"name":"hasEventListener","tagname":"method","owner":"Global.event.EventDispatcher","id":"method-hasEventListener","meta":{}},{"name":"init","tagname":"method","owner":"Global.media.video.YouTubeEmbed","id":"method-init","meta":{}},{"name":"initsdk","tagname":"method","owner":"Global.media.video.YouTubeEmbed","id":"method-initsdk","meta":{}},{"name":"onesEventListener","tagname":"method","owner":"Global.event.EventDispatcher","id":"method-onesEventListener","meta":{}},{"name":"removeEventListener","tagname":"method","owner":"Global.event.EventDispatcher","id":"method-removeEventListener","meta":{}},{"name":"loadplayer","tagname":"event","owner":"Global.media.video.YouTubeEmbed","id":"event-loadplayer","meta":{}},{"name":"loadsdk","tagname":"event","owner":"Global.media.video.YouTubeEmbed","id":"event-loadsdk","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Global.media.video.YouTubeEmbed","short_doc":"var embed = Global.media.video.YouTubeEmbed({\n        id: 'test',\n        param: {\n            videoId: 'M7lc1UVf-VE'...","component":false,"superclasses":["Class","Global.core.BaseClass","Global.event.EventDispatcher","Global.core.ObservableClass"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Class' rel='Class' class='docClass'>Class</a><div class='subclass '><a href='#!/api/Global.core.BaseClass' rel='Global.core.BaseClass' class='docClass'>Global.core.BaseClass</a><div class='subclass '><a href='#!/api/Global.event.EventDispatcher' rel='Global.event.EventDispatcher' class='docClass'>Global.event.EventDispatcher</a><div class='subclass '><a href='#!/api/Global.core.ObservableClass' rel='Global.core.ObservableClass' class='docClass'>Global.core.ObservableClass</a><div class='subclass '><strong>Global.media.video.YouTubeEmbed</strong></div></div></div></div></div><h4>Files</h4><div class='dependency'><a href='source/YouTubeEmbed.html#Global-media-video-YouTubeEmbed' target='_blank'>YouTubeEmbed.js</a></div></pre><div class='doc-contents'><p>var embed = <a href=\"#!/api/Global.media.video.YouTubeEmbed\" rel=\"Global.media.video.YouTubeEmbed\" class=\"docClass\">Global.media.video.YouTubeEmbed</a>({\n        id: 'test',\n        param: {\n            videoId: 'M7lc1UVf-VE'\n        }\n    });\n    embed.initSdk();</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-id' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.media.video.YouTubeEmbed'>Global.media.video.YouTubeEmbed</span><br/><a href='source/YouTubeEmbed.html#Global-media-video-YouTubeEmbed-cfg-id' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.media.video.YouTubeEmbed-cfg-id' class='name expandable'>id</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>player id ...</div><div class='long'><p>player id</p>\n<p>Defaults to: <code>&#39;&#39;</code></p></div></div></div><div id='cfg-inst' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.media.video.YouTubeEmbed'>Global.media.video.YouTubeEmbed</span><br/><a href='source/YouTubeEmbed.html#Global-media-video-YouTubeEmbed-cfg-inst' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.media.video.YouTubeEmbed-cfg-inst' class='name expandable'>inst</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>instance of youtube embed class</p>\n</div><div class='long'><p>instance of youtube embed class</p>\n</div></div></div><div id='cfg-param' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.media.video.YouTubeEmbed'>Global.media.video.YouTubeEmbed</span><br/><a href='source/YouTubeEmbed.html#Global-media-video-YouTubeEmbed-cfg-param' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.media.video.YouTubeEmbed-cfg-param' class='name expandable'>param</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>parameter set to embed class\n@see https://developers.google.com/youtube/iframe_api_reference?hl=ja#Loading_a_Video_Pl...</div><div class='long'><p>parameter set to embed class\n@see https://developers.google.com/youtube/iframe_api_reference?hl=ja#Loading_a_Video_Player</p>\n</div></div></div><div id='cfg-sdkId' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.media.video.YouTubeEmbed'>Global.media.video.YouTubeEmbed</span><br/><a href='source/YouTubeEmbed.html#Global-media-video-YouTubeEmbed-cfg-sdkId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.media.video.YouTubeEmbed-cfg-sdkId' class='name expandable'>sdkId</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>sdk id ...</div><div class='long'><p>sdk id</p>\n<p>Defaults to: <code>&#39;g-youtube-embed&#39;</code></p></div></div></div><div id='cfg-sdkSrc' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.media.video.YouTubeEmbed'>Global.media.video.YouTubeEmbed</span><br/><a href='source/YouTubeEmbed.html#Global-media-video-YouTubeEmbed-cfg-sdkSrc' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.media.video.YouTubeEmbed-cfg-sdkSrc' class='name expandable'>sdkSrc</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>src of sdk ...</div><div class='long'><p>src of sdk</p>\n<p>Defaults to: <code>&#39;https://www.youtube.com/iframe_api&#39;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-_appendSdk' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.media.video.YouTubeEmbed'>Global.media.video.YouTubeEmbed</span><br/><a href='source/YouTubeEmbed.html#Global-media-video-YouTubeEmbed-method-_appendSdk' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.media.video.YouTubeEmbed-method-_appendSdk' class='name expandable'>_appendSdk</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-_applyConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Global.core.BaseClass' rel='Global.core.BaseClass' class='defined-in docClass'>Global.core.BaseClass</a><br/><a href='source/BaseClass.html#Global-core-BaseClass-method-_applyConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.core.BaseClass-method-_applyConfig' class='name expandable'>_applyConfig</a>( <span class='pre'>config</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-_createEmbedInstance' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.media.video.YouTubeEmbed'>Global.media.video.YouTubeEmbed</span><br/><a href='source/YouTubeEmbed.html#Global-media-video-YouTubeEmbed-method-_createEmbedInstance' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.media.video.YouTubeEmbed-method-_createEmbedInstance' class='name expandable'>_createEmbedInstance</a>( <span class='pre'>param</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>param</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-_getParam' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.media.video.YouTubeEmbed'>Global.media.video.YouTubeEmbed</span><br/><a href='source/YouTubeEmbed.html#Global-media-video-YouTubeEmbed-method-_getParam' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.media.video.YouTubeEmbed-method-_getParam' class='name expandable'>_getParam</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-_getSdkCode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.media.video.YouTubeEmbed'>Global.media.video.YouTubeEmbed</span><br/><a href='source/YouTubeEmbed.html#Global-media-video-YouTubeEmbed-method-_getSdkCode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.media.video.YouTubeEmbed-method-_getSdkCode' class='name expandable'>_getSdkCode</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-_hasSdk' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.media.video.YouTubeEmbed'>Global.media.video.YouTubeEmbed</span><br/><a href='source/YouTubeEmbed.html#Global-media-video-YouTubeEmbed-method-_hasSdk' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.media.video.YouTubeEmbed-method-_hasSdk' class='name expandable'>_hasSdk</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-_onLoadSdk' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.media.video.YouTubeEmbed'>Global.media.video.YouTubeEmbed</span><br/><a href='source/YouTubeEmbed.html#Global-media-video-YouTubeEmbed-method-_onLoadSdk' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.media.video.YouTubeEmbed-method-_onLoadSdk' class='name expandable'>_onLoadSdk</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-_onReadyVideo' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.media.video.YouTubeEmbed'>Global.media.video.YouTubeEmbed</span><br/><a href='source/YouTubeEmbed.html#Global-media-video-YouTubeEmbed-method-_onReadyVideo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.media.video.YouTubeEmbed-method-_onReadyVideo' class='name expandable'>_onReadyVideo</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-addEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Global.event.EventDispatcher' rel='Global.event.EventDispatcher' class='defined-in docClass'>Global.event.EventDispatcher</a><br/><a href='source/EventDispatcher.html#Global-event-EventDispatcher-method-addEventListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.event.EventDispatcher-method-addEventListener' class='name expandable'>addEventListener</a>( <span class='pre'>type, listener</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Add listener ...</div><div class='long'><p>Add listener</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Event type</p>\n</div></li><li><span class='pre'>listener</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>Callback function</p>\n</div></li></ul></div></div></div><div id='method-dispatchEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Global.event.EventDispatcher' rel='Global.event.EventDispatcher' class='defined-in docClass'>Global.event.EventDispatcher</a><br/><a href='source/EventDispatcher.html#Global-event-EventDispatcher-method-dispatchEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.event.EventDispatcher-method-dispatchEvent' class='name expandable'>dispatchEvent</a>( <span class='pre'>type, data</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Dispatch event message. ...</div><div class='long'><p>Dispatch event message.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Event type</p>\n</div></li><li><span class='pre'>data</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Attach data</p>\n</div></li></ul></div></div></div><div id='method-embed' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.media.video.YouTubeEmbed'>Global.media.video.YouTubeEmbed</span><br/><a href='source/YouTubeEmbed.html#Global-media-video-YouTubeEmbed-method-embed' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.media.video.YouTubeEmbed-method-embed' class='name expandable'>embed</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-hasEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Global.event.EventDispatcher' rel='Global.event.EventDispatcher' class='defined-in docClass'>Global.event.EventDispatcher</a><br/><a href='source/EventDispatcher.html#Global-event-EventDispatcher-method-hasEventListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.event.EventDispatcher-method-hasEventListener' class='name expandable'>hasEventListener</a>( <span class='pre'>type</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Return true this class listens passed type of event. ...</div><div class='long'><p>Return true this class listens passed type of event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Event type</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.media.video.YouTubeEmbed'>Global.media.video.YouTubeEmbed</span><br/><a href='source/YouTubeEmbed.html#Global-media-video-YouTubeEmbed-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.media.video.YouTubeEmbed-method-init' class='name expandable'>init</a>( <span class='pre'>config</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/Global.event.EventDispatcher-method-init\" rel=\"Global.event.EventDispatcher-method-init\" class=\"docClass\">Global.event.EventDispatcher.init</a></p></div></div></div><div id='method-initsdk' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.media.video.YouTubeEmbed'>Global.media.video.YouTubeEmbed</span><br/><a href='source/YouTubeEmbed.html#Global-media-video-YouTubeEmbed-method-initsdk' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.media.video.YouTubeEmbed-method-initsdk' class='name expandable'>initsdk</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-onesEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Global.event.EventDispatcher' rel='Global.event.EventDispatcher' class='defined-in docClass'>Global.event.EventDispatcher</a><br/><a href='source/EventDispatcher.html#Global-event-EventDispatcher-method-onesEventListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.event.EventDispatcher-method-onesEventListener' class='name expandable'>onesEventListener</a>( <span class='pre'>type, listener</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Event you passed is only called once. ...</div><div class='long'><p>Event you passed is only called once.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Event type</p>\n</div></li><li><span class='pre'>listener</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>Callback function</p>\n</div></li></ul></div></div></div><div id='method-removeEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Global.event.EventDispatcher' rel='Global.event.EventDispatcher' class='defined-in docClass'>Global.event.EventDispatcher</a><br/><a href='source/EventDispatcher.html#Global-event-EventDispatcher-method-removeEventListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.event.EventDispatcher-method-removeEventListener' class='name expandable'>removeEventListener</a>( <span class='pre'>type, listener</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Remove listener ...</div><div class='long'><p>Remove listener</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Event type</p>\n</div></li><li><span class='pre'>listener</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>Callback function</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-loadplayer' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.media.video.YouTubeEmbed'>Global.media.video.YouTubeEmbed</span><br/><a href='source/YouTubeEmbed.html#Global-media-video-YouTubeEmbed-event-loadplayer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.media.video.YouTubeEmbed-event-loadplayer' class='name expandable'>loadplayer</a>( <span class='pre'>target, eventName, data</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when player is loaded ...</div><div class='long'><p>Fired when player is loaded</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : <a href=\"#!/api/Global.media.video.YouTubeEmbed\" rel=\"Global.media.video.YouTubeEmbed\" class=\"docClass\">Global.media.video.YouTubeEmbed</a><div class='sub-desc'><p>this class.</p>\n</div></li><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>this event name.</p>\n</div></li><li><span class='pre'>data</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>data of this event.</p>\n</div></li></ul></div></div></div><div id='event-loadsdk' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.media.video.YouTubeEmbed'>Global.media.video.YouTubeEmbed</span><br/><a href='source/YouTubeEmbed.html#Global-media-video-YouTubeEmbed-event-loadsdk' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.media.video.YouTubeEmbed-event-loadsdk' class='name expandable'>loadsdk</a>( <span class='pre'>target, eventName, data</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when youtube sdk is loaded ...</div><div class='long'><p>Fired when youtube sdk is loaded</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : <a href=\"#!/api/Global.media.video.YouTubeEmbed\" rel=\"Global.media.video.YouTubeEmbed\" class=\"docClass\">Global.media.video.YouTubeEmbed</a><div class='sub-desc'><p>this class.</p>\n</div></li><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>this event name.</p>\n</div></li><li><span class='pre'>data</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>data of this event.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});
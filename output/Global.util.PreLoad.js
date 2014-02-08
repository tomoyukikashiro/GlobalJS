Ext.data.JsonP.Global_util_PreLoad({"tagname":"class","name":"Global.util.PreLoad","autodetected":{},"files":[{"filename":"PreLoad.js","href":"PreLoad.html#Global-util-PreLoad"}],"extends":"Global.core.ObservableClass","members":[{"name":"_applyConfig","tagname":"method","owner":"Global.core.BaseClass","id":"method-_applyConfig","meta":{"private":true}},{"name":"_doDispatchEvent","tagname":"method","owner":"Global.util.PreLoad","id":"method-_doDispatchEvent","meta":{"private":true}},{"name":"_getEventData","tagname":"method","owner":"Global.util.PreLoad","id":"method-_getEventData","meta":{"private":true}},{"name":"_getPercentage","tagname":"method","owner":"Global.util.PreLoad","id":"method-_getPercentage","meta":{"private":true}},{"name":"_onLoad","tagname":"method","owner":"Global.util.PreLoad","id":"method-_onLoad","meta":{"private":true}},{"name":"_prepareImages","tagname":"method","owner":"Global.util.PreLoad","id":"method-_prepareImages","meta":{"private":true}},{"name":"addEventListener","tagname":"method","owner":"Global.event.EventDispatcher","id":"method-addEventListener","meta":{}},{"name":"dispatchEvent","tagname":"method","owner":"Global.event.EventDispatcher","id":"method-dispatchEvent","meta":{}},{"name":"hasEventListener","tagname":"method","owner":"Global.event.EventDispatcher","id":"method-hasEventListener","meta":{}},{"name":"init","tagname":"method","owner":"Global.util.PreLoad","id":"method-init","meta":{}},{"name":"load","tagname":"method","owner":"Global.util.PreLoad","id":"method-load","meta":{}},{"name":"onesEventListener","tagname":"method","owner":"Global.event.EventDispatcher","id":"method-onesEventListener","meta":{}},{"name":"removeEventListener","tagname":"method","owner":"Global.event.EventDispatcher","id":"method-removeEventListener","meta":{}},{"name":"load","tagname":"event","owner":"Global.util.PreLoad","id":"event-load","meta":{}},{"name":"loadEnd","tagname":"event","owner":"Global.util.PreLoad","id":"event-loadEnd","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Global.util.PreLoad","short_doc":"This class preload images\n@example\n\nvar imgs = [\n      'hoge.png',\n      'fuga.png',\n      'piyo.png'\n    ],\n    inst...","component":false,"superclasses":["Class","Global.core.BaseClass","Global.event.EventDispatcher","Global.core.ObservableClass"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Class' rel='Class' class='docClass'>Class</a><div class='subclass '><a href='#!/api/Global.core.BaseClass' rel='Global.core.BaseClass' class='docClass'>Global.core.BaseClass</a><div class='subclass '><a href='#!/api/Global.event.EventDispatcher' rel='Global.event.EventDispatcher' class='docClass'>Global.event.EventDispatcher</a><div class='subclass '><a href='#!/api/Global.core.ObservableClass' rel='Global.core.ObservableClass' class='docClass'>Global.core.ObservableClass</a><div class='subclass '><strong>Global.util.PreLoad</strong></div></div></div></div></div><h4>Files</h4><div class='dependency'><a href='source/PreLoad.html#Global-util-PreLoad' target='_blank'>PreLoad.js</a></div></pre><div class='doc-contents'><p>This class preload images\n@example</p>\n\n<pre><code>var imgs = [\n      'hoge.png',\n      'fuga.png',\n      'piyo.png'\n    ],\n    instance = new <a href=\"#!/api/Global.util.PreLoad\" rel=\"Global.util.PreLoad\" class=\"docClass\">Global.util.PreLoad</a>({src: imgs});\n\n// listen load progress.\ninstance.addEventListener('load', function(e){\n    console.log(e.data.current); // current image element\n    console.log(e.data.percentage); // progress of loading (percentage)\n});\n\n// listen load end.\ninstance.addEventListener('loadend', function(e){\n   console.log('load end');\n});\n\ninstance.load();\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-_applyConfig' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Global.core.BaseClass' rel='Global.core.BaseClass' class='defined-in docClass'>Global.core.BaseClass</a><br/><a href='source/BaseClass.html#Global-core-BaseClass-method-_applyConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.core.BaseClass-method-_applyConfig' class='name expandable'>_applyConfig</a>( <span class='pre'>config</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-_doDispatchEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.util.PreLoad'>Global.util.PreLoad</span><br/><a href='source/PreLoad.html#Global-util-PreLoad-method-_doDispatchEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.util.PreLoad-method-_doDispatchEvent' class='name expandable'>_doDispatchEvent</a>( <span class='pre'>data</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-_getEventData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.util.PreLoad'>Global.util.PreLoad</span><br/><a href='source/PreLoad.html#Global-util-PreLoad-method-_getEventData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.util.PreLoad-method-_getEventData' class='name expandable'>_getEventData</a>( <span class='pre'>current, percentage</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>current</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>percentage</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-_getPercentage' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.util.PreLoad'>Global.util.PreLoad</span><br/><a href='source/PreLoad.html#Global-util-PreLoad-method-_getPercentage' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.util.PreLoad-method-_getPercentage' class='name expandable'>_getPercentage</a>( <span class='pre'>maxLenght, currentLength</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>maxLenght</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>currentLength</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-_onLoad' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.util.PreLoad'>Global.util.PreLoad</span><br/><a href='source/PreLoad.html#Global-util-PreLoad-method-_onLoad' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.util.PreLoad-method-_onLoad' class='name expandable'>_onLoad</a>( <span class='pre'>e</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-_prepareImages' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.util.PreLoad'>Global.util.PreLoad</span><br/><a href='source/PreLoad.html#Global-util-PreLoad-method-_prepareImages' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.util.PreLoad-method-_prepareImages' class='name expandable'>_prepareImages</a>( <span class='pre'>imgs</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>imgs</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-addEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Global.event.EventDispatcher' rel='Global.event.EventDispatcher' class='defined-in docClass'>Global.event.EventDispatcher</a><br/><a href='source/EventDispatcher.html#Global-event-EventDispatcher-method-addEventListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.event.EventDispatcher-method-addEventListener' class='name expandable'>addEventListener</a>( <span class='pre'>type, listener</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Add listener ...</div><div class='long'><p>Add listener</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Event type</p>\n</div></li><li><span class='pre'>listener</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>Callback function</p>\n</div></li></ul></div></div></div><div id='method-dispatchEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Global.event.EventDispatcher' rel='Global.event.EventDispatcher' class='defined-in docClass'>Global.event.EventDispatcher</a><br/><a href='source/EventDispatcher.html#Global-event-EventDispatcher-method-dispatchEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.event.EventDispatcher-method-dispatchEvent' class='name expandable'>dispatchEvent</a>( <span class='pre'>type, data</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Dispatch event message. ...</div><div class='long'><p>Dispatch event message.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Event type</p>\n</div></li><li><span class='pre'>data</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Attach data</p>\n</div></li></ul></div></div></div><div id='method-hasEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Global.event.EventDispatcher' rel='Global.event.EventDispatcher' class='defined-in docClass'>Global.event.EventDispatcher</a><br/><a href='source/EventDispatcher.html#Global-event-EventDispatcher-method-hasEventListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.event.EventDispatcher-method-hasEventListener' class='name expandable'>hasEventListener</a>( <span class='pre'>type</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Return true this class listens passed type of event. ...</div><div class='long'><p>Return true this class listens passed type of event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Event type</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.util.PreLoad'>Global.util.PreLoad</span><br/><a href='source/PreLoad.html#Global-util-PreLoad-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.util.PreLoad-method-init' class='name expandable'>init</a>( <span class='pre'>config</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/Global.event.EventDispatcher-method-init\" rel=\"Global.event.EventDispatcher-method-init\" class=\"docClass\">Global.event.EventDispatcher.init</a></p></div></div></div><div id='method-load' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.util.PreLoad'>Global.util.PreLoad</span><br/><a href='source/PreLoad.html#Global-util-PreLoad-method-load' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.util.PreLoad-method-load' class='name expandable'>load</a>( <span class='pre'>config, srcs</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Preload images ...</div><div class='long'><p>Preload images</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>srcs</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>[]<div class='sub-desc'><p>image path list</p>\n</div></li></ul></div></div></div><div id='method-onesEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Global.event.EventDispatcher' rel='Global.event.EventDispatcher' class='defined-in docClass'>Global.event.EventDispatcher</a><br/><a href='source/EventDispatcher.html#Global-event-EventDispatcher-method-onesEventListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.event.EventDispatcher-method-onesEventListener' class='name expandable'>onesEventListener</a>( <span class='pre'>type, listener</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Event you passed is only called once. ...</div><div class='long'><p>Event you passed is only called once.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Event type</p>\n</div></li><li><span class='pre'>listener</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>Callback function</p>\n</div></li></ul></div></div></div><div id='method-removeEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Global.event.EventDispatcher' rel='Global.event.EventDispatcher' class='defined-in docClass'>Global.event.EventDispatcher</a><br/><a href='source/EventDispatcher.html#Global-event-EventDispatcher-method-removeEventListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.event.EventDispatcher-method-removeEventListener' class='name expandable'>removeEventListener</a>( <span class='pre'>type, listener</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Remove listener ...</div><div class='long'><p>Remove listener</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Event type</p>\n</div></li><li><span class='pre'>listener</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>Callback function</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-load' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.util.PreLoad'>Global.util.PreLoad</span><br/><a href='source/PreLoad.html#Global-util-PreLoad-event-load' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.util.PreLoad-event-load' class='name expandable'>load</a>( <span class='pre'>target, eventName, data</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when the image loaded on. ...</div><div class='long'><p>Fired when the image loaded on.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : <a href=\"#!/api/Global.util.PreLoad\" rel=\"Global.util.PreLoad\" class=\"docClass\">Global.util.PreLoad</a><div class='sub-desc'><p>this class.</p>\n</div></li><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>this event name.</p>\n</div></li><li><span class='pre'>data</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>data of this event.</p>\n<ul><li><span class='pre'>current</span> : Element<div class='sub-desc'><p>Img element which is loaded.</p>\n</div></li><li><span class='pre'>percentage</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>progress of loading (percentage)</p>\n</div></li></ul></div></li></ul></div></div></div><div id='event-loadEnd' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.util.PreLoad'>Global.util.PreLoad</span><br/><a href='source/PreLoad.html#Global-util-PreLoad-event-loadEnd' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.util.PreLoad-event-loadEnd' class='name expandable'>loadEnd</a>( <span class='pre'>target, eventName, data</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : <a href=\"#!/api/Global.util.PreLoad\" rel=\"Global.util.PreLoad\" class=\"docClass\">Global.util.PreLoad</a><div class='sub-desc'><p>this class.</p>\n</div></li><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>this event name.</p>\n</div></li><li><span class='pre'>data</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>data of this event.</p>\n<ul><li><span class='pre'>current</span> : Element<div class='sub-desc'><p>Img element which is loaded.</p>\n</div></li><li><span class='pre'>percentage</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>progress of loading (percentage)</p>\n</div></li></ul></div></li></ul></div></div></div></div></div></div></div>","meta":{}});
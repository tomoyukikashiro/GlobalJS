Ext.data.JsonP.Global_data_model_Model({"tagname":"class","name":"Global.data.model.Model","autodetected":{},"files":[{"filename":"Model.js","href":"Model.html#Global-data-model-Model"}],"extends":"Global.core.ObservableClass","members":[{"name":"Proxy","tagname":"cfg","owner":"Global.data.model.Model","id":"cfg-Proxy","meta":{}},{"name":"data","tagname":"cfg","owner":"Global.data.model.Model","id":"cfg-data","meta":{}},{"name":"requestParam","tagname":"cfg","owner":"Global.data.model.Model","id":"cfg-requestParam","meta":{}},{"name":"requestSettings","tagname":"cfg","owner":"Global.data.model.Model","id":"cfg-requestSettings","meta":{}},{"name":"constructor","tagname":"method","owner":"Global.data.model.Model","id":"method-constructor","meta":{}},{"name":"_applyConfig","tagname":"method","owner":"Global.core.BaseClass","id":"method-_applyConfig","meta":{"private":true}},{"name":"_getRequestObj","tagname":"method","owner":"Global.data.model.Model","id":"method-_getRequestObj","meta":{"private":true}},{"name":"_modifyData","tagname":"method","owner":"Global.data.model.Model","id":"method-_modifyData","meta":{"private":true}},{"name":"_onSuccess","tagname":"method","owner":"Global.data.model.Model","id":"method-_onSuccess","meta":{"private":true}},{"name":"_request","tagname":"method","owner":"Global.data.model.Model","id":"method-_request","meta":{"private":true}},{"name":"addEventListener","tagname":"method","owner":"Global.event.EventDispatcher","id":"method-addEventListener","meta":{}},{"name":"dispatchEvent","tagname":"method","owner":"Global.event.EventDispatcher","id":"method-dispatchEvent","meta":{}},{"name":"get","tagname":"method","owner":"Global.data.model.Model","id":"method-get","meta":{}},{"name":"hasEventListener","tagname":"method","owner":"Global.event.EventDispatcher","id":"method-hasEventListener","meta":{}},{"name":"init","tagname":"method","owner":"Global.event.EventDispatcher","id":"method-init","meta":{}},{"name":"onesEventListener","tagname":"method","owner":"Global.event.EventDispatcher","id":"method-onesEventListener","meta":{}},{"name":"removeEventListener","tagname":"method","owner":"Global.event.EventDispatcher","id":"method-removeEventListener","meta":{}},{"name":"load","tagname":"event","owner":"Global.data.model.Model","id":"event-load","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Global.data.model.Model","component":false,"superclasses":["Class","Global.core.BaseClass","Global.event.EventDispatcher","Global.core.ObservableClass"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Class' rel='Class' class='docClass'>Class</a><div class='subclass '><a href='#!/api/Global.core.BaseClass' rel='Global.core.BaseClass' class='docClass'>Global.core.BaseClass</a><div class='subclass '><a href='#!/api/Global.event.EventDispatcher' rel='Global.event.EventDispatcher' class='docClass'>Global.event.EventDispatcher</a><div class='subclass '><a href='#!/api/Global.core.ObservableClass' rel='Global.core.ObservableClass' class='docClass'>Global.core.ObservableClass</a><div class='subclass '><strong>Global.data.model.Model</strong></div></div></div></div></div><h4>Files</h4><div class='dependency'><a href='source/Model.html#Global-data-model-Model' target='_blank'>Model.js</a></div></pre><div class='doc-contents'><p>,</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-Proxy' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.data.model.Model'>Global.data.model.Model</span><br/><a href='source/Model.html#Global-data-model-Model-cfg-Proxy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.data.model.Model-cfg-Proxy' class='name expandable'>Proxy</a> : <a href=\"#!/api/Global.data.proxy.Proxy\" rel=\"Global.data.proxy.Proxy\" class=\"docClass\">Global.data.proxy.Proxy</a><span class=\"signature\"></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-data' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.data.model.Model'>Global.data.model.Model</span><br/><a href='source/Model.html#Global-data-model-Model-cfg-data' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.data.model.Model-cfg-data' class='name expandable'>data</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>data of response</p>\n</div><div class='long'><p>data of response</p>\n</div></div></div><div id='cfg-requestParam' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.data.model.Model'>Global.data.model.Model</span><br/><a href='source/Model.html#Global-data-model-Model-cfg-requestParam' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.data.model.Model-cfg-requestParam' class='name expandable'>requestParam</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>request parameter of $.ajax({data: {}})\n\n requestParam: {\n     GET: {},\n     POST: {},\n     DELETE: {},\n     PUT: {}\n } ...</div><div class='long'><p>request parameter of $.ajax({data: {}})</p>\n\n<pre><code> requestParam: {\n     GET: {},\n     POST: {},\n     DELETE: {},\n     PUT: {}\n }\n</code></pre>\n<p>Defaults to: <code>{GET: {}}</code></p></div></div></div><div id='cfg-requestSettings' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.data.model.Model'>Global.data.model.Model</span><br/><a href='source/Model.html#Global-data-model-Model-cfg-requestSettings' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.data.model.Model-cfg-requestSettings' class='name expandable'>requestSettings</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>request settings of $.ajax method\n\n requestSettings: {\n     GET: {\n         type: 'GET',\n         dataType: 'json'\n  ...</div><div class='long'><p>request settings of $.ajax method</p>\n\n<pre><code> requestSettings: {\n     GET: {\n         type: 'GET',\n         dataType: 'json'\n     }\n }\n</code></pre>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.data.model.Model'>Global.data.model.Model</span><br/><a href='source/Model.html#Global-data-model-Model-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Global.data.model.Model-method-constructor' class='name expandable'>Global.data.model.Model</a>( <span class='pre'></span> ) : <a href=\"#!/api/Global.data.model.Model\" rel=\"Global.data.model.Model\" class=\"docClass\">Global.data.model.Model</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Global.data.model.Model\" rel=\"Global.data.model.Model\" class=\"docClass\">Global.data.model.Model</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_applyConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Global.core.BaseClass' rel='Global.core.BaseClass' class='defined-in docClass'>Global.core.BaseClass</a><br/><a href='source/BaseClass.html#Global-core-BaseClass-method-_applyConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.core.BaseClass-method-_applyConfig' class='name expandable'>_applyConfig</a>( <span class='pre'>config</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-_getRequestObj' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.data.model.Model'>Global.data.model.Model</span><br/><a href='source/Model.html#Global-data-model-Model-method-_getRequestObj' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.data.model.Model-method-_getRequestObj' class='name expandable'>_getRequestObj</a>( <span class='pre'>type, param</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>param</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-_modifyData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.data.model.Model'>Global.data.model.Model</span><br/><a href='source/Model.html#Global-data-model-Model-method-_modifyData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.data.model.Model-method-_modifyData' class='name expandable'>_modifyData</a>( <span class='pre'>data</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-_onSuccess' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.data.model.Model'>Global.data.model.Model</span><br/><a href='source/Model.html#Global-data-model-Model-method-_onSuccess' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.data.model.Model-method-_onSuccess' class='name expandable'>_onSuccess</a>( <span class='pre'>data</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-_request' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.data.model.Model'>Global.data.model.Model</span><br/><a href='source/Model.html#Global-data-model-Model-method-_request' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.data.model.Model-method-_request' class='name expandable'>_request</a>( <span class='pre'>param</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>param</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-addEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Global.event.EventDispatcher' rel='Global.event.EventDispatcher' class='defined-in docClass'>Global.event.EventDispatcher</a><br/><a href='source/EventDispatcher.html#Global-event-EventDispatcher-method-addEventListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.event.EventDispatcher-method-addEventListener' class='name expandable'>addEventListener</a>( <span class='pre'>type, listener</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Add listener ...</div><div class='long'><p>Add listener</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Event type</p>\n</div></li><li><span class='pre'>listener</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>Callback function</p>\n</div></li></ul></div></div></div><div id='method-dispatchEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Global.event.EventDispatcher' rel='Global.event.EventDispatcher' class='defined-in docClass'>Global.event.EventDispatcher</a><br/><a href='source/EventDispatcher.html#Global-event-EventDispatcher-method-dispatchEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.event.EventDispatcher-method-dispatchEvent' class='name expandable'>dispatchEvent</a>( <span class='pre'>type, data</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Dispatch event message. ...</div><div class='long'><p>Dispatch event message.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Event type</p>\n</div></li><li><span class='pre'>data</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Attach data</p>\n</div></li></ul></div></div></div><div id='method-get' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.data.model.Model'>Global.data.model.Model</span><br/><a href='source/Model.html#Global-data-model-Model-method-get' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.data.model.Model-method-get' class='name expandable'>get</a>( <span class='pre'>parameter</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>get data by using $.ajax ...</div><div class='long'><p>get data by using $.ajax</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>parameter</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>of $.ajax(data: {});</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>jquery.Deferred</p>\n</div></li></ul></div></div></div><div id='method-hasEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Global.event.EventDispatcher' rel='Global.event.EventDispatcher' class='defined-in docClass'>Global.event.EventDispatcher</a><br/><a href='source/EventDispatcher.html#Global-event-EventDispatcher-method-hasEventListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.event.EventDispatcher-method-hasEventListener' class='name expandable'>hasEventListener</a>( <span class='pre'>type</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Return true this class listens passed type of event. ...</div><div class='long'><p>Return true this class listens passed type of event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Event type</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-init' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Global.event.EventDispatcher' rel='Global.event.EventDispatcher' class='defined-in docClass'>Global.event.EventDispatcher</a><br/><a href='source/EventDispatcher.html#Global-event-EventDispatcher-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.event.EventDispatcher-method-init' class='name expandable'>init</a>( <span class='pre'>config</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/Global.core.BaseClass-method-init\" rel=\"Global.core.BaseClass-method-init\" class=\"docClass\">Global.core.BaseClass.init</a></p></div></div></div><div id='method-onesEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Global.event.EventDispatcher' rel='Global.event.EventDispatcher' class='defined-in docClass'>Global.event.EventDispatcher</a><br/><a href='source/EventDispatcher.html#Global-event-EventDispatcher-method-onesEventListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.event.EventDispatcher-method-onesEventListener' class='name expandable'>onesEventListener</a>( <span class='pre'>type, listener</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Event you passed is only called once. ...</div><div class='long'><p>Event you passed is only called once.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Event type</p>\n</div></li><li><span class='pre'>listener</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>Callback function</p>\n</div></li></ul></div></div></div><div id='method-removeEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Global.event.EventDispatcher' rel='Global.event.EventDispatcher' class='defined-in docClass'>Global.event.EventDispatcher</a><br/><a href='source/EventDispatcher.html#Global-event-EventDispatcher-method-removeEventListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.event.EventDispatcher-method-removeEventListener' class='name expandable'>removeEventListener</a>( <span class='pre'>type, listener</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Remove listener ...</div><div class='long'><p>Remove listener</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Event type</p>\n</div></li><li><span class='pre'>listener</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>Callback function</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-load' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.data.model.Model'>Global.data.model.Model</span><br/><a href='source/Model.html#Global-data-model-Model-event-load' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.data.model.Model-event-load' class='name expandable'>load</a>( <span class='pre'>target, eventName, data</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when data is loaded ...</div><div class='long'><p>Fired when data is loaded</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : <a href=\"#!/api/Global.data.model.Model\" rel=\"Global.data.model.Model\" class=\"docClass\">Global.data.model.Model</a><div class='sub-desc'><p>this class.</p>\n</div></li><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>this event name.</p>\n</div></li><li><span class='pre'>data</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>data of this event.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});
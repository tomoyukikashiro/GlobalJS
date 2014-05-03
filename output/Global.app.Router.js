Ext.data.JsonP.Global_app_Router({"tagname":"class","name":"Global.app.Router","autodetected":{},"files":[{"filename":"Router.js","href":"Router.html#Global-app-Router"}],"extends":"Global.core.BaseClass","members":[{"name":"controllers","tagname":"cfg","owner":"Global.app.Router","id":"cfg-controllers","meta":{}},{"name":"routingpath","tagname":"cfg","owner":"Global.app.Router","id":"cfg-routingpath","meta":{}},{"name":"_applyConfig","tagname":"method","owner":"Global.core.BaseClass","id":"method-_applyConfig","meta":{"private":true}},{"name":"_getController","tagname":"method","owner":"Global.app.Router","id":"method-_getController","meta":{"private":true}},{"name":"_getNoLastSlashPath","tagname":"method","owner":"Global.app.Router","id":"method-_getNoLastSlashPath","meta":{"private":true}},{"name":"init","tagname":"method","owner":"Global.core.BaseClass","id":"method-init","meta":{}},{"name":"start","tagname":"method","owner":"Global.app.Router","id":"method-start","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Global.app.Router","component":false,"superclasses":["Class","Global.core.BaseClass"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Class' rel='Class' class='docClass'>Class</a><div class='subclass '><a href='#!/api/Global.core.BaseClass' rel='Global.core.BaseClass' class='docClass'>Global.core.BaseClass</a><div class='subclass '><strong>Global.app.Router</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/Router.html#Global-app-Router' target='_blank'>Router.js</a></div></pre><div class='doc-contents'><p>Routing logic according to url pathname</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-controllers' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.app.Router'>Global.app.Router</span><br/><a href='source/Router.html#Global-app-Router-cfg-controllers' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.app.Router-cfg-controllers' class='name expandable'>controllers</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>cache controller instance ...</div><div class='long'><p>cache controller instance</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='cfg-routingpath' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.app.Router'>Global.app.Router</span><br/><a href='source/Router.html#Global-app-Router-cfg-routingpath' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.app.Router-cfg-routingpath' class='name expandable'>routingpath</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>and controller class</p>\n\n<pre><code>routing: {\n    '/'    : App.controller.Main,\n    '/list': App.controller.List\n}\n</code></pre>\n</div><div class='long'><p>and controller class</p>\n\n<pre><code>routing: {\n    '/'    : App.controller.Main,\n    '/list': App.controller.List\n}\n</code></pre>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-_applyConfig' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Global.core.BaseClass' rel='Global.core.BaseClass' class='defined-in docClass'>Global.core.BaseClass</a><br/><a href='source/BaseClass.html#Global-core-BaseClass-method-_applyConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.core.BaseClass-method-_applyConfig' class='name expandable'>_applyConfig</a>( <span class='pre'>config</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-_getController' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.app.Router'>Global.app.Router</span><br/><a href='source/Router.html#Global-app-Router-method-_getController' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.app.Router-method-_getController' class='name expandable'>_getController</a>( <span class='pre'>path, routing</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>path</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>routing</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-_getNoLastSlashPath' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.app.Router'>Global.app.Router</span><br/><a href='source/Router.html#Global-app-Router-method-_getNoLastSlashPath' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.app.Router-method-_getNoLastSlashPath' class='name expandable'>_getNoLastSlashPath</a>( <span class='pre'>path</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>path</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-init' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Global.core.BaseClass' rel='Global.core.BaseClass' class='defined-in docClass'>Global.core.BaseClass</a><br/><a href='source/BaseClass.html#Global-core-BaseClass-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.core.BaseClass-method-init' class='name expandable'>init</a>( <span class='pre'>config</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>This method apply config to own properites. ...</div><div class='long'><p>This method apply config to own properites.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-start' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.app.Router'>Global.app.Router</span><br/><a href='source/Router.html#Global-app-Router-method-start' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.app.Router-method-start' class='name expandable'>start</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>make controller instance according to current pathname\nstart routing. ...</div><div class='long'><p>make controller instance according to current pathname\nstart routing.</p>\n</div></div></div></div></div></div></div>","meta":{}});
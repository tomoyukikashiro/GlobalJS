Ext.data.JsonP.Global_animation_Animation({"tagname":"class","name":"Global.animation.Animation","autodetected":{},"files":[{"filename":"Animation.js","href":"Animation.html#Global-animation-Animation"}],"extends":"Global.core.ObservableClass","members":[{"name":"currentTime","tagname":"cfg","owner":"Global.animation.Animation","id":"cfg-currentTime","meta":{}},{"name":"easing","tagname":"cfg","owner":"Global.animation.Animation","id":"cfg-easing","meta":{}},{"name":"easingfn","tagname":"cfg","owner":"Global.animation.Animation","id":"cfg-easingfn","meta":{}},{"name":"fps","tagname":"cfg","owner":"Global.animation.Animation","id":"cfg-fps","meta":{}},{"name":"speed","tagname":"cfg","owner":"Global.animation.Animation","id":"cfg-speed","meta":{"private":true}},{"name":"startTime","tagname":"cfg","owner":"Global.animation.Animation","id":"cfg-startTime","meta":{}},{"name":"stepfn","tagname":"cfg","owner":"Global.animation.Animation","id":"cfg-stepfn","meta":{"private":true}},{"name":"value","tagname":"cfg","owner":"Global.animation.Animation","id":"cfg-value","meta":{}},{"name":"duration","tagname":"property","owner":"Global.animation.Animation","id":"property-duration","meta":{}},{"name":"from","tagname":"property","owner":"Global.animation.Animation","id":"property-from","meta":{}},{"name":"id","tagname":"property","owner":"Global.animation.Animation","id":"property-id","meta":{"private":true}},{"name":"to","tagname":"property","owner":"Global.animation.Animation","id":"property-to","meta":{}},{"name":"constructor","tagname":"method","owner":"Global.animation.Animation","id":"method-constructor","meta":{}},{"name":"_applyConfig","tagname":"method","owner":"Global.core.BaseClass","id":"method-_applyConfig","meta":{"private":true}},{"name":"_doStart","tagname":"method","owner":"Global.animation.Animation","id":"method-_doStart","meta":{"private":true}},{"name":"_setEasing","tagname":"method","owner":"Global.animation.Animation","id":"method-_setEasing","meta":{"private":true}},{"name":"addEventListener","tagname":"method","owner":"Global.event.EventDispatcher","id":"method-addEventListener","meta":{}},{"name":"cancel","tagname":"method","owner":"Global.animation.Animation","id":"method-cancel","meta":{}},{"name":"dispatchEvent","tagname":"method","owner":"Global.event.EventDispatcher","id":"method-dispatchEvent","meta":{}},{"name":"hasEventListener","tagname":"method","owner":"Global.event.EventDispatcher","id":"method-hasEventListener","meta":{}},{"name":"init","tagname":"method","owner":"Global.event.EventDispatcher","id":"method-init","meta":{}},{"name":"onesEventListener","tagname":"method","owner":"Global.event.EventDispatcher","id":"method-onesEventListener","meta":{}},{"name":"removeEventListener","tagname":"method","owner":"Global.event.EventDispatcher","id":"method-removeEventListener","meta":{}},{"name":"stop","tagname":"method","owner":"Global.animation.Animation","id":"method-stop","meta":{}},{"name":"end","tagname":"event","owner":"Global.animation.Animation","id":"event-end","meta":{}},{"name":"start","tagname":"event","owner":"Global.animation.Animation","id":"event-start","meta":{}},{"name":"step","tagname":"event","owner":"Global.animation.Animation","id":"event-step","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Global.animation.Animation","component":false,"superclasses":["Class","Global.core.BaseClass","Global.event.EventDispatcher","Global.core.ObservableClass"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Class' rel='Class' class='docClass'>Class</a><div class='subclass '><a href='#!/api/Global.core.BaseClass' rel='Global.core.BaseClass' class='docClass'>Global.core.BaseClass</a><div class='subclass '><a href='#!/api/Global.event.EventDispatcher' rel='Global.event.EventDispatcher' class='docClass'>Global.event.EventDispatcher</a><div class='subclass '><a href='#!/api/Global.core.ObservableClass' rel='Global.core.ObservableClass' class='docClass'>Global.core.ObservableClass</a><div class='subclass '><strong>Global.animation.Animation</strong></div></div></div></div></div><h4>Files</h4><div class='dependency'><a href='source/Animation.html#Global-animation-Animation' target='_blank'>Animation.js</a></div></pre><div class='doc-contents'><p>This is animation class</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-currentTime' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.animation.Animation'>Global.animation.Animation</span><br/><a href='source/Animation.html#Global-animation-Animation-cfg-currentTime' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.animation.Animation-cfg-currentTime' class='name expandable'>currentTime</a> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>milliseconds of elapsed time</p>\n</div><div class='long'><p>milliseconds of elapsed time</p>\n</div></div></div><div id='cfg-easing' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.animation.Animation'>Global.animation.Animation</span><br/><a href='source/Animation.html#Global-animation-Animation-cfg-easing' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.animation.Animation-cfg-easing' class='name expandable'>easing</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>|<a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><span class=\"signature\"></span></div><div class='description'><div class='short'>name of Easing class or easing class which get following paramter\n\n- t : current time\n- b : begInnIng value\n- c : cha...</div><div class='long'><p>name of <a href=\"#!/api/Global.animation.Easing\" rel=\"Global.animation.Easing\" class=\"docClass\">Easing class</a> or easing class which get following paramter</p>\n\n<pre><code>- t : current time\n- b : begInnIng value\n- c : change In value\n- d : duration\n</code></pre>\n<p>Defaults to: <code>&#39;linear&#39;</code></p></div></div></div><div id='cfg-easingfn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.animation.Animation'>Global.animation.Animation</span><br/><a href='source/Animation.html#Global-animation-Animation-cfg-easingfn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.animation.Animation-cfg-easingfn' class='name expandable'>easingfn</a> : <a href=\"#!/api/Global.animation.Easing\" rel=\"Global.animation.Easing\" class=\"docClass\">Global.animation.Easing</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>easing function class</p>\n</div><div class='long'><p>easing function class</p>\n</div></div></div><div id='cfg-fps' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.animation.Animation'>Global.animation.Animation</span><br/><a href='source/Animation.html#Global-animation-Animation-cfg-fps' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.animation.Animation-cfg-fps' class='name expandable'>fps</a> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"></span></div><div class='description'><div class='short'>easing fps (defalut : 60) ...</div><div class='long'><p>easing fps (defalut : 60)</p>\n<p>Defaults to: <code>60</code></p></div></div></div><div id='cfg-speed' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.animation.Animation'>Global.animation.Animation</span><br/><a href='source/Animation.html#Global-animation-Animation-cfg-speed' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.animation.Animation-cfg-speed' class='name expandable'>speed</a> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='cfg-startTime' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.animation.Animation'>Global.animation.Animation</span><br/><a href='source/Animation.html#Global-animation-Animation-cfg-startTime' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.animation.Animation-cfg-startTime' class='name expandable'>startTime</a> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>milliseconds when easing is started</p>\n</div><div class='long'><p>milliseconds when easing is started</p>\n</div></div></div><div id='cfg-stepfn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.animation.Animation'>Global.animation.Animation</span><br/><a href='source/Animation.html#Global-animation-Animation-cfg-stepfn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.animation.Animation-cfg-stepfn' class='name expandable'>stepfn</a> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'><p>easing function</p>\n</div><div class='long'><p>easing function</p>\n</div></div></div><div id='cfg-value' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.animation.Animation'>Global.animation.Animation</span><br/><a href='source/Animation.html#Global-animation-Animation-cfg-value' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.animation.Animation-cfg-value' class='name expandable'>value</a> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"></span></div><div class='description'><div class='short'>value to change by easing ...</div><div class='long'><p>value to change by easing</p>\n<p>Defaults to: <code>0</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-duration' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.animation.Animation'>Global.animation.Animation</span><br/><a href='source/Animation.html#Global-animation-Animation-property-duration' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.animation.Animation-property-duration' class='name expandable'>duration</a> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"></span></div><div class='description'><div class='short'>cfg {Number} duration duration of easing ...</div><div class='long'><p>cfg {Number} duration duration of easing</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-from' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.animation.Animation'>Global.animation.Animation</span><br/><a href='source/Animation.html#Global-animation-Animation-property-from' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.animation.Animation-property-from' class='name expandable'>from</a> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"></span></div><div class='description'><div class='short'>cfg {Number} from beginning value ...</div><div class='long'><p>cfg {Number} from beginning value</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-id' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.animation.Animation'>Global.animation.Animation</span><br/><a href='source/Animation.html#Global-animation-Animation-property-id' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.animation.Animation-property-id' class='name expandable'>id</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-to' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.animation.Animation'>Global.animation.Animation</span><br/><a href='source/Animation.html#Global-animation-Animation-property-to' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.animation.Animation-property-to' class='name expandable'>to</a> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"></span></div><div class='description'><div class='short'>cfg {Number} to goal value ...</div><div class='long'><p>cfg {Number} to goal value</p>\n<p>Defaults to: <code>0</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.animation.Animation'>Global.animation.Animation</span><br/><a href='source/Animation.html#Global-animation-Animation-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Global.animation.Animation-method-constructor' class='name expandable'>Global.animation.Animation</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Global.animation.Animation\" rel=\"Global.animation.Animation\" class=\"docClass\">Global.animation.Animation</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>of this class</p>\n<ul><li><span class='pre'>fps</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>frame per second</p>\n</div></li><li><span class='pre'>from</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>start value</p>\n</div></li><li><span class='pre'>to</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>end value</p>\n</div></li><li><span class='pre'>duration</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>duration</p>\n</div></li><li><span class='pre'>easing</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>|<a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>easing name of or easing function</p>\n</div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Global.animation.Animation\" rel=\"Global.animation.Animation\" class=\"docClass\">Global.animation.Animation</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_applyConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Global.core.BaseClass' rel='Global.core.BaseClass' class='defined-in docClass'>Global.core.BaseClass</a><br/><a href='source/BaseClass.html#Global-core-BaseClass-method-_applyConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.core.BaseClass-method-_applyConfig' class='name expandable'>_applyConfig</a>( <span class='pre'>config</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-_doStart' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.animation.Animation'>Global.animation.Animation</span><br/><a href='source/Animation.html#Global-animation-Animation-method-_doStart' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.animation.Animation-method-_doStart' class='name expandable'>_doStart</a>( <span class='pre'>startTime, from, to, duration, fn</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>startTime</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>from</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>to</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>duration</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>fn</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-_setEasing' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.animation.Animation'>Global.animation.Animation</span><br/><a href='source/Animation.html#Global-animation-Animation-method-_setEasing' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.animation.Animation-method-_setEasing' class='name expandable'>_setEasing</a>( <span class='pre'>easing</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>easing</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-addEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Global.event.EventDispatcher' rel='Global.event.EventDispatcher' class='defined-in docClass'>Global.event.EventDispatcher</a><br/><a href='source/EventDispatcher.html#Global-event-EventDispatcher-method-addEventListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.event.EventDispatcher-method-addEventListener' class='name expandable'>addEventListener</a>( <span class='pre'>type, listener</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Add listener ...</div><div class='long'><p>Add listener</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Event type</p>\n</div></li><li><span class='pre'>listener</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>Callback function</p>\n</div></li></ul></div></div></div><div id='method-cancel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.animation.Animation'>Global.animation.Animation</span><br/><a href='source/Animation.html#Global-animation-Animation-method-cancel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.animation.Animation-method-cancel' class='name expandable'>cancel</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>cancel easing ...</div><div class='long'><p>cancel easing</p>\n</div></div></div><div id='method-dispatchEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Global.event.EventDispatcher' rel='Global.event.EventDispatcher' class='defined-in docClass'>Global.event.EventDispatcher</a><br/><a href='source/EventDispatcher.html#Global-event-EventDispatcher-method-dispatchEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.event.EventDispatcher-method-dispatchEvent' class='name expandable'>dispatchEvent</a>( <span class='pre'>type, data</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Dispatch event message. ...</div><div class='long'><p>Dispatch event message.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Event type</p>\n</div></li><li><span class='pre'>data</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Attach data</p>\n</div></li></ul></div></div></div><div id='method-hasEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Global.event.EventDispatcher' rel='Global.event.EventDispatcher' class='defined-in docClass'>Global.event.EventDispatcher</a><br/><a href='source/EventDispatcher.html#Global-event-EventDispatcher-method-hasEventListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.event.EventDispatcher-method-hasEventListener' class='name expandable'>hasEventListener</a>( <span class='pre'>type</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Return true this class listens passed type of event. ...</div><div class='long'><p>Return true this class listens passed type of event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Event type</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-init' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Global.event.EventDispatcher' rel='Global.event.EventDispatcher' class='defined-in docClass'>Global.event.EventDispatcher</a><br/><a href='source/EventDispatcher.html#Global-event-EventDispatcher-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.event.EventDispatcher-method-init' class='name expandable'>init</a>( <span class='pre'>config</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/Global.core.BaseClass-method-init\" rel=\"Global.core.BaseClass-method-init\" class=\"docClass\">Global.core.BaseClass.init</a></p></div></div></div><div id='method-onesEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Global.event.EventDispatcher' rel='Global.event.EventDispatcher' class='defined-in docClass'>Global.event.EventDispatcher</a><br/><a href='source/EventDispatcher.html#Global-event-EventDispatcher-method-onesEventListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.event.EventDispatcher-method-onesEventListener' class='name expandable'>onesEventListener</a>( <span class='pre'>type, listener</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Event you passed is only called once. ...</div><div class='long'><p>Event you passed is only called once.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Event type</p>\n</div></li><li><span class='pre'>listener</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>Callback function</p>\n</div></li></ul></div></div></div><div id='method-removeEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Global.event.EventDispatcher' rel='Global.event.EventDispatcher' class='defined-in docClass'>Global.event.EventDispatcher</a><br/><a href='source/EventDispatcher.html#Global-event-EventDispatcher-method-removeEventListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.event.EventDispatcher-method-removeEventListener' class='name expandable'>removeEventListener</a>( <span class='pre'>type, listener</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Remove listener ...</div><div class='long'><p>Remove listener</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Event type</p>\n</div></li><li><span class='pre'>listener</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>Callback function</p>\n</div></li></ul></div></div></div><div id='method-stop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.animation.Animation'>Global.animation.Animation</span><br/><a href='source/Animation.html#Global-animation-Animation-method-stop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.animation.Animation-method-stop' class='name expandable'>stop</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>stop easing ...</div><div class='long'><p>stop easing</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-end' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.animation.Animation'>Global.animation.Animation</span><br/><a href='source/Animation.html#Global-animation-Animation-event-end' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.animation.Animation-event-end' class='name expandable'>end</a>( <span class='pre'>target, eventName, data</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when this animation is ended ...</div><div class='long'><p>Fired when this animation is ended</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : <a href=\"#!/api/Global.animation.Animation\" rel=\"Global.animation.Animation\" class=\"docClass\">Global.animation.Animation</a><div class='sub-desc'><p>this class.</p>\n</div></li><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>this event name.</p>\n</div></li><li><span class='pre'>data</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>data of this event.</p>\n<ul><li><span class='pre'>time</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>current time</p>\n</div></li><li><span class='pre'>value</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>current value</p>\n</div></li></ul></div></li></ul></div></div></div><div id='event-start' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.animation.Animation'>Global.animation.Animation</span><br/><a href='source/Animation.html#Global-animation-Animation-event-start' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.animation.Animation-event-start' class='name expandable'>start</a>( <span class='pre'>target, eventName, data</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when this animation is started ...</div><div class='long'><p>Fired when this animation is started</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : <a href=\"#!/api/Global.animation.Animation\" rel=\"Global.animation.Animation\" class=\"docClass\">Global.animation.Animation</a><div class='sub-desc'><p>this class.</p>\n</div></li><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>this event name.</p>\n</div></li><li><span class='pre'>data</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>data of this event.</p>\n<ul><li><span class='pre'>time</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>current time</p>\n</div></li><li><span class='pre'>value</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>current value</p>\n</div></li></ul></div></li></ul></div></div></div><div id='event-step' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.animation.Animation'>Global.animation.Animation</span><br/><a href='source/Animation.html#Global-animation-Animation-event-step' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Global.animation.Animation-event-step' class='name expandable'>step</a>( <span class='pre'>target, eventName, data</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when each step ...</div><div class='long'><p>Fired when each step</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : <a href=\"#!/api/Global.animation.Animation\" rel=\"Global.animation.Animation\" class=\"docClass\">Global.animation.Animation</a><div class='sub-desc'><p>this class.</p>\n</div></li><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>this event name.</p>\n</div></li><li><span class='pre'>data</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>data of this event.</p>\n<ul><li><span class='pre'>time</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>current time</p>\n</div></li><li><span class='pre'>value</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>current value</p>\n</div></li></ul></div></li></ul></div></div></div></div></div></div></div>","meta":{}});
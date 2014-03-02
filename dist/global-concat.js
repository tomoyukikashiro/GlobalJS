/**
 * @class Class
 * Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
(function(){
  var initializing = false, fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;
  this.Class = function(){};

  Class.extend = function(prop) {
    var _super = this.prototype;

    initializing = true;
    var prototype = new this();
    initializing = false;

    for (var name in prop) {
      prototype[name] = typeof prop[name] == "function" &&
        typeof _super[name] == "function" && fnTest.test(prop[name]) ?
        (function(name, fn){
          return function() {
            var tmp = this._super;

            this._super = _super[name];

            var ret = fn.apply(this, arguments);
            this._super = tmp;

            return ret;
          };
        })(name, prop[name]) :
        prop[name];
    }

    function Class() {
      if ( !initializing && this.init )
        this.init.apply(this, arguments);
    }

    Class.prototype = prototype;

    Class.prototype.constructor = Class;

    Class.extend = arguments.callee;

    return Class;
  };
})();


/**
 * @class  Global
 * This class is base of this framework.
 * It provide definition method and so on.
 * @singleton
 */
(function (win) {

    'use strict';

    var Global = {

        /**
         * @method define
         * define module in specific name space
         * @param  {String} namespace name space of module
         * @param  {Function} definition module definition
         */
        define: function (namespace, definition) {
            var modified = this._modifyDefinition(definition),
                module = this._getModule(modified),
                klass  = this._generateClass(module, namespace),
                alias = definition.alias;

            Global.regist(namespace, klass);

            if(definition.alias){
                Global.regist(alias, this._getRegistedClass(namespace));
            }
        },

        /**
         * @method regist
         * create name space and set passed object
         * @param  {String} nameSpace namespace to set passed object
         * @param  {Object} obj       object to set that namespace
         */
        regist: function (nameSpace, obj) {
            var nameList = nameSpace.split('.'),
                l = nameList.length,
                i = 0,
                name,
                currentObj = win;

            for(; i < l; i++) {
                name = nameList[i];
                if(typeof currentObj[name] === 'undefined') {
                    if(i === nameList.length - 1) {
                        currentObj[name] = obj;
                    } else {
                        currentObj[name] = {};
                    }
                }
                currentObj = currentObj[name];
            }
        },

        /**
         * @method _getRegistedClass
         * @private
         */
        _getRegistedClass: function(nameSpace) {
            var nameList = nameSpace.split('.'),
                l = nameList.length,
                i = 0,
                name,
                currentObj = win;

            for(; i < l; i++){
                name = nameList[i];
                currentObj = currentObj[name];
            }
            return currentObj;
        },

        /**
         * @method _getModule
         * @private
         */
        _getModule: function(definition){
            var module, parent;
            if(_.isUndefined(definition.extend)){
                parent = Global.core.BaseClass;
            }else if(_.isFunction(definition.extend)){
                parent = definition.extend;
            }else{
                console.error('you should set sub class of lib/Class.js');
                return;
            }
            module = parent.extend(definition);
            module.$parentClass = parent;
            return module;
        },
        /**
         * @method _generateClass
         * @private
         */
        _generateClass: function(Module, namespace){
            var klass;
            if(Module.prototype.singleton){
                klass = new Module();
            }else{
                klass = Module;
            }
            klass.$className = namespace;
            return klass;
        },
        /**
         * @method _modifyDefinition
         * @private
         */
        _modifyDefinition: function(definition) {
            var modified;
            modified = this._addGetSetter(definition);
            return modified;
        },
        /**
         * @method _addGetSetter
         * @private
         */
        _addGetSetter: function(definition) {
            var tmpProp,
                newPropName,
                key;
            for(key in definition){
                tmpProp = definition[key];
                if(!_.isFunction(tmpProp) && definition.hasOwnProperty(key)){
                    newPropName = this._conbineUpperStr('get', key);
                    definition[newPropName] = this._getGetSetFunc('get', definition, key);
                    newPropName = this._conbineUpperStr('set', key);
                    definition[newPropName] = this._getGetSetFunc('set', definition, key);
                }
            }
            return definition;
        },
        /**
         * @method _conbineUpperStr
         * @private
         */
        _conbineUpperStr: function(prefix, name){
            var firstUpper = name.charAt(0).toUpperCase(),
                theOthers = name.slice(1);
            return prefix + firstUpper + theOthers;
        },
        /**
         * @method _getGetSetFunc
         * @private
         */
        _getGetSetFunc: function(type, definition, propName){
            var func;
            if(type === 'get'){
                func = function(){
                    // return definition[propName];
                    return this[propName];
                };
            }else{
                func = function(value) {
                    // definition[propName] = value;
                    this[propName] = value;
                };
            }
            return func;
        }

    };

    /*--------------------------------
    * private
    --------------------------------*/
    Global.regist('Global', Global);

}(window));

(function(){
    'use strict';

    /**
     * @class Global.core.BaseClass
     * Base class of this library
     * @alternateClassName Global.BaseClass
     * @extends Class
     */
    Global.define('Global.core.BaseClass',{

        alias: 'Global.BaseClass',

        extend: Class,

        /**
         * @method init
         * This method apply config to own properites.
         * @constructor
         */
        init: function(config){
            this.config = config;
            this._applyConfig(config);
        },

        /**
         * @method _applyConfig
         * @private
         */
        _applyConfig: function(config){
            // define instance properties
            for(var key in config) {
                this[key] = config[key];
            }
        }
    });
})();

(function(){
    'use strict';

    /**
     * @class Global.event.Event
     * event object
     * @extends Global.core.BaseClass
     */
    Global.define('Global.event.Event',{

        /**
         * @method init
         * @constructor
         */
        init: function(config) {
            this._super(config);
            this.target = config.target;
            this.type = config.type;
            this.data = config.data;
        }
    });
})();

(function(){
    'use strict';

    /**
     * @class Global.event.EventDispatcher
     * manipulate publish / subscribe interface
     * @extends Global.core.BaseClass
     *
     *     var instance = new Global.event.EventDispatcher(),
     *         callback = Global.core.Functions.bind(console.log);
     *
     *     instance.addEventListener('hoge', callback);
     *     instance.dispatchEvent('hoge'); // log argumetns
     *
     */
    Global.define('Global.event.EventDispatcher',{

        /**
         * @method init
         * @constructor
         */
        init: function(config) {
            this.listeners = {};
            this._super(config);
        },

        /**
        * @method addEventListener
        * Add listener
        * @param {String} type Event type
        * @param {Function} listener Callback function
        *
        */
        addEventListener: function(type, listener){
            (this.listeners[type] || (this.listeners[type] = [])).push(listener);
        },

        /**
        * @method hasEventListener
        * Return true this class listens passed type of event.
        * @param {String} type Event type
        * @return {Boolean}
        */
        hasEventListener: function(type){
            return !!this.listeners[type];
        },

        /**
        * @method  removeEventListener
        * Remove listener
        * @param {String} type Event type
        * @param {Function} listener Callback function
        */
        removeEventListener: function(type, listener){
            var fncs = this.listeners[type];
            if(fncs){
                for (var i = fncs.length-1; i >= 0; i--){
                    if (fncs[i] === listener){
                        fncs.splice(i, 1);
                    }
                }
            }
        },

        /**
        * @method  onesEventListener
        * Event you passed is only called once.
        * @param {String} type Event type
        * @param {Function} listener Callback function
        */
        onesEventListener: function(type, listener){
            var self = this,
                callback = function (event){
                    self.removeEventListener(type, callback);
                    listener.apply(self, [event]);
                    callback = null;
                };
            this.addEventListener(type, callback);
        },

        /**
        * @method dispatchEvent
        * Dispatch event message.
        * @param {String} type Event type
        * @param {Object} data Attach data
        */
        dispatchEvent: function(type, data){
            var fncs = this.listeners[type],
                event = new Global.event.Event({target:this, type: type, data: data});

            if(fncs){
                fncs = fncs.concat();
                for (var i = 0, n = fncs.length; i < n; i++){
                    fncs[i].apply(this, [event]);
                }
            }
        }
    });
})();

(function(){
    'use strict';
    /**
     * @class Global.core.ObservableClass
     * class to extend to get observal method
     * @extends Global.event.EventDispatcher
     * @alternateClassName Global.ObservableClass
     */
    Global.define('Global.core.ObservableClass',{

        alias: 'Global.ObservableClass',

        extend: Global.event.EventDispatcher
    });
})();

(function(){
    'use strict';

    /**
     * @class Global.core.Array
     * Wrapper class for Array
     * @extends Global.core.BaseClass
     * @alternateClassName Global.Arra
     * @singleton
     *
     */
    Global.define('Global.core.Array',{

        alias: 'Global.Array',

        singleton: true,

        /**
         * @method isArray
         * Returns true if an object is an array, false if it is not.
         * @param {Object} object The object to be checked.
         * @return {Boolean} true if an object is an array.
         *
         *     // return true.
         *     Global.core.Array.isArray([]);
         */
        isArray: function(target){
            return target instanceof Array;
        },

        /**
         * @method args2Array
         * Returns array which arguments is convert to.
         * @param {Object} arguments arguments.
         * @return {Array} converted array object.
         *
         *     // return Array object.
         *     function awesomeFunc(){
         *         var ary = Global.core.Array.args2Array(arguments);
         *     }
         *
         */
        args2Array: function(args){
            if(args instanceof Array){
                return args;
            }else{
                return Array.prototype.slice.call(args);
            }
        },

        /**
         * @method map2Array
         * Returns array which map{key:value} is convert to.
         * @param {Object} map The map to be converted.
         * @return {Array} converted array object.
         *
         *     var map = {
         *         hoge: 'hoge',
         *         fuga: 'fuga',
         *         piyo: 'piyo'
         *     },
         *     list = Global.core.Array.map2Array(map);
         *
         *     console.log(list); // ['hoge', 'fuga', 'piyo'];
         *
         */
        map2Array: function(map) {
            var list = [],
                key;
            for(key in map){
                list.push(map[key]);
            }
            return list;
        },

        /**
         * @method each
         * Iterates an array.
         * @param {Object} map The map to be converted.
         *
         *     var list = ['hoge', 'fuga', 'piyo'];
         *
         *     Global.core.Array.each(list, function(index, value){
         *         console.log(index); // 0, 1, 2
         *         console.log(value); // 'hoge', 'fuga', 'piyo'
         *     });
         *
         */
        each: function(list, callback){
            var l = list.length,
                i = 0;
            for(; i < l; i++){
                callback(i, list[i]);
            }
        },

        /**
         * @method contains
         * Checks whether or not the given array contains the specified item.
         * @param {Boolean} return true when the given array contains the specified item.
         *
         *     var list = ['hoge', 'fuga', 'piyo'];
         *
         *     // return true.
         *     console.log(Global.core.Array.contains(list, 'fuga'));
         */
        contains: function(list, target) {
            var i = 0,
                l = list.length;
            for(; i < l; i++){
                if(list[i] === target){
                    return true;
                }
            }
            return false;
        }

    });
})();

(function(){
    'use strict';
    /**
     * @class Global.core.Functions
     * Wrapper class for Array
     * @extends Global.core.BaseClass
     * @alternateClassName Global.Functions
     * @singleton
     */
    Global.define('Global.core.Functions',{

        alias: 'Global.Functions',

        singleton: true,

        /**
         * @method createDebouce
         * make debounce instance
         * @return {Global.util.functions.Debounce} debounce instance
         *
         *     // this functions is called 1 times 5 seconds.
         *     var config = {
         *             callback: function(value){console.log(value);},
         *             interval: 1000 * 5
         *         },
         *         debounce = Global.core.Functions.createDebounce(config);
         *
         *     window.addEventListener('resize', debounce.execute);
         *
         */
        createDebounce: function(config){
            var instance = new Global.util.functions.Debounce(config);
            return function() {
                var ags = Global.core.Array.args2Array(arguments);
                instance.execute.apply(instance, ags);
            };
        },

        /**
         * @method  bind
         * bind context
         * @param  {Function} callback function to be fired
         * @param  {Object}   context  context of callback
         * @param  {Array}    args     parameter to be passed to callback
         * @return {Function}          function contain callback
         *
         *     var callback = Global.core.Functions.bind(console.log);
         *     window.addEventListener('resize', callback);
         *
         */
        bind: function(callback, context, args){
            var ary;
            return function(){
                ary = Global.core.Array.args2Array(arguments);
                if(Global.core.Array.isArray(args)){
                    ary = ary.concat(args);
                }
                callback.apply(context, ary);
            };
        }
    });
})();

(function(){
    'use strict';
    /**
     * @class
     * class for manipulate Map(key, value) data
     */
    Global.define('Global.data.Map',{

        singleton: true,

        /**
         * @private list2Map
         * convert list to Map
         * @param  {Array} data to be converted
         * @param  {String} key object key
         * @return {Array}      converted object
         */
        list2Map: function(data, key) {
            var map = {};
            $.each(data, function(index, obj){
                map[obj[key]] = obj;
            });
            return map;
        },
    });
})();

(function(){
    'use strict';

    /**
     * @class Global.math.Random
     * utility for get random numbers.
     * @extends Global.core.BaseClass
     * @singleton
     */
    Global.define('Global.math.Random',{

        singleton: true,

        /**
         * return random number.
         * @param  {Number} max max number you want to get.
         * @return {Number} random number which smaller than number you passed.
         */
        getRandomNum: function(max) {
            return Math.floor( Math.random() * max + 1 );
        },

        /**
         * return random number list.
         * @param  {Number} max max number you want to get.
         * @return {Array} random number list.
         */
        getRandomNumList: function(num) {
            var i, j, tmp, random = new Array(num);
            random[0] = 0;

            for(i = num - 1; i > 0; i--){
                j = Math.floor(Math.random() * (i+1));
                tmp = random[i] || i;
                random[i] = random[j] || j;
                random[j] = tmp;
            }
            return random;
        }
    });
})();

(function(){
    'use strict';
    /**
     * @class Global.util.functions.Debounce
     * debounce instance it is usefull to reduce functions call.
     * @extends Global.core.BaseClass
     *
     *
     *     var config = {
     *             callback: console.log,
     *             scope   : console,
     *             interval: 1000
     *         },
     *         instance = Global.util.functions.Debounce(config);
     *
     *     window.addEventListener('resize', instance.execute);
     */
    Global.define('Global.util.functions.Debounce',{

        /**
         * @method init
         * @constructor
         * @param {Object} config config of this class.
         * @param {Function} config.callback callback.
         * @param {Object} config.scope scope of callback
         * @param {Number} config.interval interval time. (ms) default is 1000ms.
         * @param {Boolean} config.immediate wheter callback is execute immediate or not.
         */
        init: function(config) {
            this.timer = null;
            this._super(config);
        },

        /**
         * @method execute
         * Execute function you passed.
         */
        execute: function() {
            var config = {
                callback: this.callback,
                args    : Global.core.Array.args2Array(arguments),
                scope   : this.scope || this,
                interval: this.interval || 1000,
                immediate: this.immediate
            };

            if (this.timer) {
                return false;
            }
            this._switchExecute(config);
        },
        /**
         * @method _switchExecute
         * @private
         */
        _switchExecute: function(config) {
            if (config.immediate) {
                this._executeBefore(config.callback, config.args, config.scope, config.interval);
            } else {
                this._executeAfter(config.callback, config.args, config.scope, config.interval);
            }
        },
        /**
         * @method _executeBefore
         * @private
         */
        _executeBefore: function(callback, args, scope, interval) {
            var me = this;
            callback.apply(scope, args);
            me.timer = setTimeout(function() {
                me.timer = null;
            }, interval);
        },
        /**
         * @method _executeAfter
         * @private
         */
        _executeAfter: function(callback, args, scope, interval) {
            var me = this;
            me.timer = setTimeout(function() {
                callback.apply(scope, args);
                me.timer = null;
            }, interval);
        }
    });
})();

(function(){
    'use strict';

    /**
     * @class Global.util.PreLoad
     * This class preload images
     * @extends Global.core.ObservableClass
     *
     *
     *     var imgs = [
     *           'hoge.png',
     *           'fuga.png',
     *           'piyo.png'
     *         ],
     *         instance = new Global.util.PreLoad({srcs: imgs});
     *
     *     // listen load progress.
     *     instance.addEventListener('load', function(e){
     *         console.log(e.data.current); // current image element
     *         console.log(e.data.percentage); // progress of loading (percentage)
     *     });
     *
     *     // listen load end.
     *     instance.addEventListener('loadend', function(e){
     *        console.log('load end');
     *     });
     *
     *     instance.load();
     *
     */
    Global.define('Global.util.PreLoad',{

        extend: Global.core.ObservableClass,

        srcs: [],

        imgs : [],

        eventName: {
            /**
             * @event
             * Fired when the image loaded on.
             * @param {Global.util.PreLoad} target this class.
             * @param {String} eventName this event name.
             * @param {Object} data data of this event.
             * @param {Object} data.current Img element which is loaded.
             * @param {Number} data.percentage progress of loading (percentage)
             */
            load   : 'load',
            /**
             * @event
             * @param {Global.util.PreLoad} target this class.
             * @param {String} eventName this event name.
             * @param {Object} data data of this event.
             * @param {Object} data.current Img element which is loaded.
             * @param {Number} data.percentage progress of loading (percentage)
             */
            loadEnd: 'loadend'
        },

        /**
         * @method init
         * @constructor
         */
        init: function(config) {
            this._super(config);
        },

        /**
         * @method load
         * Preload images
         * @param {Object} config
         * @param {String[]} srcs image path list
         */
        load: function(){
            var srcs = this.getSrcs(),
                orgImg = document.createElement('img'),
                list = [];

            Global.core.Array.each(srcs, function(index, src){
                list.push({
                    img : orgImg.cloneNode(),
                    src : src
                });
            });
            this._prepareImages(list);
        },

        /**
         * @private
         */
        _prepareImages: function(imgs) {
            var me = this;
            Global.core.Array.each(imgs, function(index, obj){
                obj.img.onload = Global.core.Functions.bind(me._onLoad, me);
                obj.img.src = obj.src;

                // for cached
                if(obj.img.complete){
                    me._onLoad({currentTarget: obj.img});
                }
            });
        },
        /**
         * @private
         */
        _onLoad: function(e){
            var srcs = this.getSrcs(),
                imgs = this.getImgs(),
                percentage, eData, current;

            if(e){
                current = e.currentTarget;
            }else{
                // for ie8
                current = window.event.srcElement;
            }

            imgs.push(current);
            percentage = this._getPercentage(srcs.length, imgs.length);

            eData = this._getEventData(current, percentage);
            this._doDispatchEvent(eData);
        },
        /**
         * @private
         */
        _doDispatchEvent: function(data){
            var eventName = this.getEventName();
            this.dispatchEvent(eventName.load, data);
            if(data.percentage === 100){
                this.dispatchEvent(eventName.loadEnd, data);
            }
        },
        /**
         * @private
         */
        _getPercentage: function(maxLenght, currentLength){
            return (currentLength / maxLenght) * 100;
        },
        /**
         * @private
         */
        _getEventData: function(current, percentage){
            return {
                current: current,
                percentage: percentage
            };
        }
    });
})();

(function(){
    'use strict';
    /**
     * @class Global.util.SpriteSheet
     * iterate css class at specific interval
     * @extends Global.core.BaseClass
     */
    Global.define('Global.util.SpriteSheet',{

        classList: [],

        interval : 500,

        targetSelector: null,

        $elm: null,

        count: 0,

        intervalId: null,

        /**
         * @constructor
         */
        init: function(config){
            this.$elm = $(config.targetSelector);
            this._super(config);
        },

        /**
         * execute spritesheet interval
         */
        execute: function(){
            var me = this,
                g = Global,
                config = {
                    callback: g.Functions.bind(function(id, count){
                        me._doSprite(count);
                        me._execute();
                    }, me, [me.count]),
                    interval: me.interval
                },
                callback = g.Functions.createDebounce(config);
            me.intervalId = g.util.RequestAnimationFrame.start(callback);
        },

        _doSprite: function(count){
            var me = this,
                cls = me._getClass(me.classList, count);
            me.$elm.removeClass(cls.current);
            me.$elm.addClass(cls.next);
            me.countUp(count);
        },

        _countUp: function(count){
            if(count === this.classList.length - 1){
                count = 0;
            }else{
                count += 1;
            }
            this.count = count;
        },

        _getClass: function(classList, count){
            return {
                current: classList[count],
                next   : classList[count + 1]
            };
        }
    });
})();

(function(){
    'use strict';

    /**
     * @class Global.util.RequestAnimationFramae
     * @extends Global.core.BaseClass
     * @singletone
     */
    Global.define('Global.util.RequestAnimationFrame', {

        singleton: true,

        init: function(config){
            this.polyfill();
            this._super(config);
        },

        start: function(callback){
            return this.raf.apply(window, [callback]);
        },
        cancel: function(id){
            return this.caf(id);
        },

        polyfill: function(){
            var win = window,
                raf = win.requestAnimationFrame ||
                      win.webkitRequestAnimationFrame ||
                      win.mozRequestAnimationFrame ||
                      win.msRequestAnimationFrame ||
                      win.oRequestAnimationFrame ||
                      function(func) { setTimeout(func, 1000 / 60); },
                caf = win.cancelAnimationFrame ||
                      win.cancelRequestAnimationFrame ||
                      win.webkitCancelAnimationFrame ||
                      win.webkitCancelRequestAnimationFrame ||
                      win.mozCancelAnimationFrame ||
                      win.mozCancelRequestAnimationFrame ||
                      win.msCancelAnimationFrame ||
                      win.msCancelRequestAnimationFrame ||
                      win.oCancelAnimationFrame ||
                      win.oCancelRequestAnimationFrame ||
                      function(id) { clearTimeout(id); };
            this.raf = raf;
            this.caf = caf;
        }
    });
})();

(function(){
    'use strict';

    /**
     * @class Global.app.Controller
     * This is base controller.
     */
    Global.define('Global.app.Controller',{

        /**
        * @cfg {Object} refs name and selector
        *
        *     refs: {
        *         main: '.main-panel'
        *     }
        *
        */
        refs: {},

        /**
        * @cfg {Object} event dispatch settings
        *
        * You can set refs names or selectors into each events key.
        *
        *     events: {
        *         main: {
        *             click: '_onClickMain'
        *         },
        *         '.sub': {
        *             click: '_onClickSub'
        *         }
        *     },
        *
        * You can also set more options into event settings.
        *
        *     events: {
        *         sub: {
        *             click: {
        *                 delegate: '.delegate-selector',
        *                 handler : '_onClickSub'
        *             }
        *         }
        *     }
        */
        events: {},

        init: function(config){
            this.elmCaches = {};
            this._super(config);

            if(config && config.events){
                this._applyEvents(config.events);
            }
        },

        getCacheRef: function(key, selector){
            var cached = this.elmCaches[key],
                $elm = !cached && selector ? $(selector): undefined ;
            if(!cached && $elm){
                this.elmCaches[key] = $elm;
            }
            return !$elm || $elm.length === 0 ? undefined : $elm;
        },

        _applyEvents: function(events){
            var me = this,
                $ref,
                eName,
                param;

            $.each(events, function(refsKey, val){
                $ref = me.getCacheRef(refsKey);
                if(!$ref){
                    return false;
                }
                eName = _.keys(val)[0];
                param = val[eName];

                if(_.isObject(param) && param.delegate){
                    $ref.on(eName, param.delegate, $.proxy(me[param.handler], me));
                }else if(_.isString(param)){
                    $ref.on(eName, $.proxy(me[param], me));
                }

            });
        }
    });
})();
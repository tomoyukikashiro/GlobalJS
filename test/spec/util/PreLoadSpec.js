
'use strict';

describe('Test for util/PreLoad.js', function () {

    var PreLoad = Global.util.PreLoad,
        instance = new PreLoad();

    it('class has those public method', function () {
        expect(PreLoad.prototype.load).to.be.a('function');
    });


    describe('#_getEventData', function () {
        it('return event data object', function () {
            var data = instance._getEventData('test', 50);
            expect(data).to.eql({current: 'test', percentage: 50});
        });
    });

    describe('#_getPercentage', function () {
        it('return percentage', function () {
            var res = instance._getPercentage(100, 50);
            expect(res).to.eql(50);
        });
    });

    describe('#_doDispatchEvent', function () {
        it('call only load event if percentage is no 100', function () {
            var data = {
                    current: 'test',
                    percentage: 10
                },
                spy = sinon.spy(instance, 'dispatchEvent');

            instance._doDispatchEvent(data);
            expect(spy.calledWith('load', data)).to.be.ok();
            expect(spy.neverCalledWith('loadend'), data).to.be.ok();

            spy.restore();
        });
        it('call load and loadend event if percentage is 100', function () {
            var data = {
                    current: 'test',
                    percentage: 100
                },
                spy = sinon.spy(instance, 'dispatchEvent');

            instance._doDispatchEvent(data);
            expect(spy.calledWith('load', data)).to.be.ok();
            expect(spy.calledWith('loadend', data)).to.be.ok();

            spy.restore();
        });
    });

    describe('#_onLoad', function () {
        var srcs = ['test', 'hoge'],
            imgs = [],
            srcsStub = sinon.stub(instance, 'getSrcs').returns(srcs),
            imgsStub = sinon.stub(instance, 'getImgs').returns(imgs),
            eData = {currentTarget: 'bbb'},
            expectEdata = {current: eData.currentTarget, percentage: 50},
            spy = sinon.spy(instance, '_doDispatchEvent');

        instance._onLoad(eData);
        expect(spy.calledWith(expectEdata)).to.be.ok();

        srcsStub.restore();
        imgsStub.restore();
        spy.restore();
    });

    describe('#_prepareImages', function () {
        it('call #_onLoad method if img has complete prop which is true', function () {
            // img.complete is readonly property.
            // so can not test
        });
        it('img has src and onload properties', function () {
            var img1 = document.createElement('img'),
                img2 = document.createElement('img'),
                obj1 = {
                    img: img1,
                    src: 'test1.png'
                },
                obj2 = {
                    img: img2,
                    src: 'test2.png'
                },
                protocol = location.protocol,
                host = location.host;

            instance._prepareImages([obj1, obj2]);
            expect(img1.onload).to.be.a('function');
            expect(img2.onload).to.be.a('function');
            expect(img1.src).to.eql(protocol + '//' + host + '/' + obj1.src);
            expect(img2.src).to.eql(protocol + '//' + host + '/' + obj2.src);
        });
    });

    describe('#load', function () {
        it('make image list and call #_prepareImages', function () {
            var list = [
                    'test1.png',
                    'test2.png',
                    'test3.png'
                ],
                instance = new PreLoad({srcs: list}),
                spy = sinon.spy(instance, '_prepareImages'),
                res;

            instance.load();
            res = spy.args[0][0];

            expect(res[0].img instanceof HTMLImageElement).to.be.ok();
            expect(res[0].src).equal(list[0]);
            expect(res[1].img instanceof HTMLImageElement).to.be.ok();
            expect(res[1].src).equal(list[1]);
            expect(res[2].img instanceof HTMLImageElement).to.be.ok();
            expect(res[2].src).equal(list[2]);
            spy.restore();
        });

    });

});
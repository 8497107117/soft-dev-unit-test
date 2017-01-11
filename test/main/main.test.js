QUnit.module("function render", () => {
    QUnit.module("base 10", () => {
        let testCalc = new Calc();
        QUnit.test("initial", (assert) => {
            testCalc.reset(10);
            render({calc: testCalc});
            assert.equal($('.calc').hasClass('dec'), true, "calc class correct");
            assert.equal($('.hex.button').hasClass('disabled'), true, "disabled button correct");
            assert.deepEqual($('.display .value').html(), '0', "display correct");
            assert.deepEqual($('.base.hex').html(), '0', "display base 16 correctly");
            assert.deepEqual($('.base.dec').html(), '0', "display base 10 correctly");
            assert.deepEqual($('.base.oct').html(), '0', "display base 8 correctly");
            assert.deepEqual($('.base.bin').html(), '0', "display base 2 correctly");
        });
        QUnit.test("during input", (assert) => {
            testCalc.reset(10);
            testCalc.value = 17;
            testCalc.buffer = [['val', 9], ['oper', 'add'], ['val', 17]];
            render({calc: testCalc});
            assert.equal($('.calc').hasClass('dec'), true, "calc class correct");
            assert.equal($('.hex.button').hasClass('disabled'), true, "disabled button correct");
            assert.deepEqual($('.display .value').html(), '17', "display correct");
            assert.deepEqual($('.base.hex').html(), '11', "display base 16 correctly");
            assert.deepEqual($('.base.dec').html(), '17', "display base 10 correctly");
            assert.deepEqual($('.base.oct').html(), '21', "display base 8 correctly");
            assert.deepEqual($('.base.bin').html(), '10001', "display base 2 correctly");
        });
        QUnit.test("calculated", (assert) => {
            testCalc.reset(10);
            testCalc.value = 26;
            testCalc.buffer = [['val', 26]];
            render({calc: testCalc});
            assert.equal($('.calc').hasClass('dec'), true, "calc class correct");
            assert.equal($('.hex.button').hasClass('disabled'), true, "disabled button correct");
            assert.deepEqual($('.display .value').html(), '26', "display correct");
            assert.deepEqual($('.base.hex').html(), '1a', "display base 16 correctly");
            assert.deepEqual($('.base.dec').html(), '26', "display base 10 correctly");
            assert.deepEqual($('.base.oct').html(), '32', "display base 8 correctly");
            assert.deepEqual($('.base.bin').html(), '11010', "display base 2 correctly");
        });
    });
    QUnit.module("base 2", () => {
        let testCalc = new Calc();
        QUnit.test("initial", (assert) => {
            testCalc.reset(2);
            render({calc: testCalc});
            assert.equal($('.calc').hasClass('bin'), true, "calc class correct");
            assert.equal($('.oct.button').hasClass('disabled'), true, "disabled button correct");
            assert.deepEqual($('.display .value').html(), '0', "display correct");
            assert.deepEqual($('.base.hex').html(), '0', "display base 16 correctly");
            assert.deepEqual($('.base.dec').html(), '0', "display base 10 correctly");
            assert.deepEqual($('.base.oct').html(), '0', "display base 8 correctly");
            assert.deepEqual($('.base.bin').html(), '0', "display base 2 correctly");
        });
        QUnit.test("during input", (assert) => {
            testCalc.reset(2);
            testCalc.value = 17;
            testCalc.buffer = [['val', 9], ['oper', 'add'], ['val', 17]];
            render({calc: testCalc});
            assert.equal($('.calc').hasClass('bin'), true, "calc class correct");
            assert.equal($('.oct.button').hasClass('disabled'), true, "disabled button correct");
            assert.deepEqual($('.display .value').html(), '10001', "display correct");
            assert.deepEqual($('.base.hex').html(), '11', "display base 16 correctly");
            assert.deepEqual($('.base.dec').html(), '17', "display base 10 correctly");
            assert.deepEqual($('.base.oct').html(), '21', "display base 8 correctly");
            assert.deepEqual($('.base.bin').html(), '10001', "display base 2 correctly");
        });
        QUnit.test("calculated", (assert) => {
            testCalc.reset(2);
            testCalc.value = 26;
            testCalc.buffer = [['val', 26]];
            render({calc: testCalc});
            assert.equal($('.calc').hasClass('bin'), true, "calc class correct");
            assert.equal($('.oct.button').hasClass('disabled'), true, "disabled button correct");
            assert.deepEqual($('.display .value').html(), '11010', "display correct");
            assert.deepEqual($('.base.hex').html(), '1a', "display base 16 correctly");
            assert.deepEqual($('.base.dec').html(), '26', "display base 10 correctly");
            assert.deepEqual($('.base.oct').html(), '32', "display base 8 correctly");
            assert.deepEqual($('.base.bin').html(), '11010', "display base 2 correctly");
        });
    });
    QUnit.module("base 8", () => {
        let testCalc = new Calc();
        QUnit.test("initial", (assert) => {
            testCalc.reset(8);
            render({calc: testCalc});
            assert.equal($('.calc').hasClass('oct'), true, "calc class correct");
            assert.equal($('.dec.button').hasClass('disabled'), true, "disabled button correct");
            assert.deepEqual($('.display .value').html(), '0', "display correct");
            assert.deepEqual($('.base.hex').html(), '0', "display base 16 correctly");
            assert.deepEqual($('.base.dec').html(), '0', "display base 10 correctly");
            assert.deepEqual($('.base.oct').html(), '0', "display base 8 correctly");
            assert.deepEqual($('.base.bin').html(), '0', "display base 2 correctly");
        });
        QUnit.test("during input", (assert) => {
            testCalc.reset(8);
            testCalc.value = 17;
            testCalc.buffer = [['val', 9], ['oper', 'add'], ['val', 17]];
            render({calc: testCalc});
            assert.equal($('.calc').hasClass('oct'), true, "calc class correct");
            assert.equal($('.dec.button').hasClass('disabled'), true, "disabled button correct");
            assert.deepEqual($('.display .value').html(), '21', "display correct");
            assert.deepEqual($('.base.hex').html(), '11', "display base 16 correctly");
            assert.deepEqual($('.base.dec').html(), '17', "display base 10 correctly");
            assert.deepEqual($('.base.oct').html(), '21', "display base 8 correctly");
            assert.deepEqual($('.base.bin').html(), '10001', "display base 2 correctly");
        });
        QUnit.test("calculated", (assert) => {
            testCalc.reset(8);
            testCalc.value = 26;
            testCalc.buffer = [['val', 26]];
            render({calc: testCalc});
            assert.equal($('.calc').hasClass('oct'), true, "calc class correct");
            assert.equal($('.dec.button').hasClass('disabled'), true, "disabled button correct");
            assert.deepEqual($('.display .value').html(), '32', "display correct");
            assert.deepEqual($('.base.hex').html(), '1a', "display base 16 correctly");
            assert.deepEqual($('.base.dec').html(), '26', "display base 10 correctly");
            assert.deepEqual($('.base.oct').html(), '32', "display base 8 correctly");
            assert.deepEqual($('.base.bin').html(), '11010', "display base 2 correctly");
        });
    });
    QUnit.module("base 16", () => {
        let testCalc = new Calc();
        QUnit.test("initial", (assert) => {
            testCalc.reset(16);
            render({calc: testCalc});
            assert.equal($('.calc').hasClass('hex'), true, "calc class correct");
            assert.equal($('.button').hasClass('disabled'), false, "disabled button correct");
            assert.deepEqual($('.display .value').html(), '0', "display correct");
            assert.deepEqual($('.base.hex').html(), '0', "display base 16 correctly");
            assert.deepEqual($('.base.dec').html(), '0', "display base 10 correctly");
            assert.deepEqual($('.base.oct').html(), '0', "display base 8 correctly");
            assert.deepEqual($('.base.bin').html(), '0', "display base 2 correctly");
        });
        QUnit.test("during input", (assert) => {
            testCalc.reset(16);
            testCalc.value = 17;
            testCalc.buffer = [['val', 9], ['oper', 'add'], ['val', 17]];
            render({calc: testCalc});
            assert.equal($('.calc').hasClass('hex'), true, "calc class correct");
            assert.equal($('.button').hasClass('disabled'), false, "disabled button correct");
            assert.deepEqual($('.display .value').html(), '11', "display correct");
            assert.deepEqual($('.base.hex').html(), '11', "display base 16 correctly");
            assert.deepEqual($('.base.dec').html(), '17', "display base 10 correctly");
            assert.deepEqual($('.base.oct').html(), '21', "display base 8 correctly");
            assert.deepEqual($('.base.bin').html(), '10001', "display base 2 correctly");
        });
        QUnit.test("calculated", (assert) => {
            testCalc.reset(16);
            testCalc.value = 26;
            testCalc.buffer = [['val', 26]];
            render({calc: testCalc});
            assert.equal($('.calc').hasClass('hex'), true, "calc class correct");
            assert.equal($('.button').hasClass('disabled'), false, "disabled button correct");
            assert.deepEqual($('.display .value').html(), '1a', "display correct");
            assert.deepEqual($('.base.hex').html(), '1a', "display base 16 correctly");
            assert.deepEqual($('.base.dec').html(), '26', "display base 10 correctly");
            assert.deepEqual($('.base.oct').html(), '32', "display base 8 correctly");
            assert.deepEqual($('.base.bin').html(), '11010', "display base 2 correctly");
        });
    });
});

QUnit.module("DOM", () => {
    QUnit.module("help", () => {
        QUnit.test("opend by help button, closed by help button", (assert) => {
            let done = assert.async();
            $('.help-btn').trigger('click');
            setTimeout(() => {
                assert.ok($('.help-wrapper').css('display').indexOf('none') <= -1, "open correctly");
                $('.help-btn').trigger('click');
                setTimeout(() => {
                    assert.ok($('.help-wrapper').css('display').indexOf('none') > -1, "close correctly");
                    done();
                }, 500);
            }, 500);
        });
        QUnit.test("opend by help button, closed by help wrapper", (assert) => {
            let done = assert.async();
            $('.help-btn').trigger('click');
            setTimeout(() => {
                assert.ok($('.help-wrapper').css('display').indexOf('none') <= -1, "open correctly");
                $('.help-wrapper').trigger('click');
                setTimeout(() => {
                    assert.ok($('.help-wrapper').css('display').indexOf('none') > -1, "close correctly");
                    done();
                }, 500);
            }, 500);
        });
    });
});
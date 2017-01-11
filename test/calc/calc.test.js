QUnit.module("Array.prototype.back", () => {
    const ordinaryArray = [0, 1, 2, 3];
    const holesArray = [0, undefined, 2, undefined];
    const nullArray = [];
    const numberArray = ordinaryArray;
    const stringArray = ['test'];
    const objectArray = [{ test: 'test', test2: 'test2' }];

    QUnit.test("basic", (assert) => {
        assert.deepEqual(ordinaryArray.back(), 3, "ordinary array");
        assert.deepEqual(holesArray.back(), undefined, "holes array");
        assert.deepEqual(nullArray.back(), undefined, "null array");
    });
    QUnit.test("type", (assert) => {
        assert.deepEqual(numberArray.back(), 3, "ordinary array");
        assert.deepEqual(stringArray.back(), 'test', "holes array");
        assert.deepEqual(objectArray.back(), { test: 'test', test2: 'test2' }, "null array");
    });
});

QUnit.module("function evaluate", () => {
    const basicPlusTest = { actualParameter: [['val', 2], ['oper', 'add'], ['val', 3]], expect: 5 };
    const basicSubTest = { actualParameter: [['val', 8], ['oper', 'sub'], ['val', 3]], expect: 5 };
    const basicMulTest = { actualParameter: [['val', 2], ['oper', 'mul'], ['val', 3]], expect: 6 };
    const basicDivTest = { actualParameter: [['val', 15], ['oper', 'div'], ['val', 3]], expect: 5 };
    const basicModTest = { actualParameter: [['val', 8], ['oper', 'mod'], ['val', 3]], expect: 2 };

    const advancedTest1 = { actualParameter: [['val', 8], ['oper', 'add'], ['val', 3], ['oper', 'sub'], ['val', 6]], expect: 5 };
    const advancedTest2 = { actualParameter: [['val', 8], ['oper', 'mul'], ['val', 3], ['oper', 'add'], ['val', 4]], expect: 28 };
    const advancedTest3 = { actualParameter: [['val', 6], ['oper', 'sub'], ['val', 8], ['oper', 'div'], ['val', 4]], expect: 4 };
    const advancedTest4 = { actualParameter: [['val', 15], ['oper', 'mod'], ['val', 4], ['oper', 'mul'], ['val', 3]], expect: 9 };
    const advancedTest5 = { actualParameter: [['val', 2], ['oper', 'add'], ['val', 3], ['oper', 'mul'], ['val', 4], ['oper', 'sub'], ['val', 8], ['oper', 'div'], ['val', 2], ['oper', 'add'], ['val', 7], ['oper', 'mod'], ['val', 2]], expect: 11 };

    const basicPlusTestNeg = { actualParameter: [['val', 2], ['oper', 'add'], ['val', -3]], expect: -1 };
    const basicSubTestNeg = { actualParameter: [['val', 8], ['oper', 'sub'], ['val', -3]], expect: 11 };
    const basicMulTestNeg = { actualParameter: [['val', 2], ['oper', 'mul'], ['val', -3]], expect: -6 };
    const basicDivTestNeg = { actualParameter: [['val', 15], ['oper', 'div'], ['val', -3]], expect: -5 };
    const basicModTestNeg = { actualParameter: [['val', 8], ['oper', 'mod'], ['val', -3]], expect: 2 };

    const advancedTest1Neg = { actualParameter: [['val', 8], ['oper', 'add'], ['val', -3], ['oper', 'sub'], ['val', -6]], expect: 11 };
    const advancedTest2Neg = { actualParameter: [['val', -8], ['oper', 'mul'], ['val', -3], ['oper', 'add'], ['val', -4]], expect: 20 };
    const advancedTest3Neg = { actualParameter: [['val', 6], ['oper', 'sub'], ['val', -8], ['oper', 'div'], ['val', 4]], expect: 8 };
    const advancedTest4Neg = { actualParameter: [['val', 15], ['oper', 'mod'], ['val', -4], ['oper', 'mul'], ['val', -3]], expect: -9 };
    const advancedTest5Neg = { actualParameter: [['val', 2], ['oper', 'add'], ['val', 3], ['oper', 'mul'], ['val', -4], ['oper', 'sub'], ['val', -8], ['oper', 'div'], ['val', 2], ['oper', 'add'], ['val', -7], ['oper', 'mod'], ['val', -2]], expect: -7 };

    QUnit.module("without negative", () => {
        QUnit.test("basic evaluate without negative", (assert) => {
            assert.strictEqual(evaluate(basicPlusTest.actualParameter), basicPlusTest.expect, "basic plus correct");
            assert.strictEqual(evaluate(basicSubTest.actualParameter), basicSubTest.expect, "basic sub correct");
            assert.strictEqual(evaluate(basicMulTest.actualParameter), basicMulTest.expect, "basic mul correct");
            assert.strictEqual(evaluate(basicDivTest.actualParameter), basicDivTest.expect, "basic div correct");
            assert.strictEqual(evaluate(basicModTest.actualParameter), basicModTest.expect, "basic mod correct");
        });

        QUnit.test("advanced evaluate without negative", (assert) => {
            assert.strictEqual(evaluate(advancedTest1.actualParameter), advancedTest1.expect, "advanced test 1 correct");
            assert.strictEqual(evaluate(advancedTest2.actualParameter), advancedTest2.expect, "advanced test 2 correct");
            assert.strictEqual(evaluate(advancedTest3.actualParameter), advancedTest3.expect, "advanced test 3 correct");
            assert.strictEqual(evaluate(advancedTest4.actualParameter), advancedTest4.expect, "advanced test 4 correct");
            assert.strictEqual(evaluate(advancedTest5.actualParameter), advancedTest5.expect, "advanced test 5 correct");
        });
    });
    QUnit.module("with negative", () => {
        QUnit.test("basic evaluate with negative", (assert) => {
            assert.strictEqual(evaluate(basicPlusTestNeg.actualParameter), basicPlusTestNeg.expect, "basic plus correct with negative");
            assert.strictEqual(evaluate(basicSubTestNeg.actualParameter), basicSubTestNeg.expect, "basic sub correct with negative");
            assert.strictEqual(evaluate(basicMulTestNeg.actualParameter), basicMulTestNeg.expect, "basic mul correct with negative");
            assert.strictEqual(evaluate(basicDivTestNeg.actualParameter), basicDivTestNeg.expect, "basic div correct with negative");
            assert.strictEqual(evaluate(basicModTestNeg.actualParameter), basicModTestNeg.expect, "basic mod correct with negative");
        });

        QUnit.test("advanced evaluate with negative", (assert) => {
            assert.strictEqual(evaluate(advancedTest1Neg.actualParameter), advancedTest1Neg.expect, "advanced test 1 correct with negative");
            assert.strictEqual(evaluate(advancedTest2Neg.actualParameter), advancedTest2Neg.expect, "advanced test 2 correct with negative");
            assert.strictEqual(evaluate(advancedTest3Neg.actualParameter), advancedTest3Neg.expect, "advanced test 3 correct with negative");
            assert.strictEqual(evaluate(advancedTest4Neg.actualParameter), advancedTest4Neg.expect, "advanced test 4 correct with negative");
            assert.strictEqual(evaluate(advancedTest5Neg.actualParameter), advancedTest5Neg.expect, "advanced test 5 correct with negative");
        });
    });
});

QUnit.module("checkType", () => {
    const valTest = ['val', 1];
    const operTest = ['oper', 'add'];

    QUnit.test("isVal", (assert) => {
        assert.strictEqual(isVal(valTest), true, "cmd[0] is val");
        assert.strictEqual(isVal(operTest), false, "cmd[0] is oper");
    });
    QUnit.test("isOper", (assert) => {
        assert.strictEqual(isOper(valTest), false, "cmd[0] is val");
        assert.strictEqual(isOper(operTest), true, "cmd[0] is oper");
    });
});

QUnit.module("Class Calc", () => {
    let testClass = new Calc();
    QUnit.module("member: reset", () => {
      QUnit.test("base 10", (assert) => {
          testClass.reset(10);
          assert.strictEqual(testClass.base, 10, "this.base correct");
          assert.strictEqual(testClass.value, 0, "this.value correct");
          assert.deepEqual(testClass.buffer, [['val', 0]], "this.buffer correct");
          assert.strictEqual(testClass.calc, false, "this.calc correct");
          testClass.reset();
          assert.strictEqual(testClass.base, 10, "this.base correct without parameter");
          assert.strictEqual(testClass.value, 0, "this.value correct without parameter");
          assert.deepEqual(testClass.buffer, [['val', 0]], "this.buffer correct without parameter");
          assert.strictEqual(testClass.calc, false, "this.calc correct without parameter");
      });         
      QUnit.test("base 2", (assert) => {
          testClass.reset(2);
          assert.strictEqual(testClass.base, 2, "this.base correct");
          assert.strictEqual(testClass.value, 0, "this.value correct");
          assert.deepEqual(testClass.buffer, [['val', 0]], "this.buffer correct");
          assert.strictEqual(testClass.calc, false, "this.calc correct");
          testClass.reset();
          assert.strictEqual(testClass.base, 2, "this.base correct without parameter");
          assert.strictEqual(testClass.value, 0, "this.value correct without parameter");
          assert.deepEqual(testClass.buffer, [['val', 0]], "this.buffer correct without parameter");
          assert.strictEqual(testClass.calc, false, "this.calc correct without parameter");
      });         
      QUnit.test("base 8", (assert) => {
          testClass.reset(8);
          assert.strictEqual(testClass.base, 8, "this.base correct");
          assert.strictEqual(testClass.value, 0, "this.value correct");
          assert.deepEqual(testClass.buffer, [['val', 0]], "this.buffer correct");
          assert.strictEqual(testClass.calc, false, "this.calc correct");
          testClass.reset();
          assert.strictEqual(testClass.base, 8, "this.base correct without parameter");
          assert.strictEqual(testClass.value, 0, "this.value correct without parameter");
          assert.deepEqual(testClass.buffer, [['val', 0]], "this.buffer correct without parameter");
          assert.strictEqual(testClass.calc, false, "this.calc correct without parameter");
      });         
      QUnit.test("base 16", (assert) => {
          testClass.reset(16);
          assert.strictEqual(testClass.base, 16, "this.base correct");
          assert.strictEqual(testClass.value, 0, "this.value correct");
          assert.deepEqual(testClass.buffer, [['val', 0]], "this.buffer correct");
          assert.strictEqual(testClass.calc, false, "this.calc correct");
          testClass.reset();
          assert.strictEqual(testClass.base, 16, "this.base correct without parameter");
          assert.strictEqual(testClass.value, 0, "this.value correct without parameter");
          assert.deepEqual(testClass.buffer, [['val', 0]], "this.buffer correct without parameter");
          assert.strictEqual(testClass.calc, false, "this.calc correct without parameter");
      });         
    });
    QUnit.module("member: toString", () => {
        QUnit.test("value is base 10", (assert) => {
            testClass.value = 17;
            assert.deepEqual(testClass.toString(10), '17', "change to base 10");
            assert.deepEqual(testClass.toString(2), '10001', "change to base 2");
            assert.deepEqual(testClass.toString(8), '21', "change to base 8");
            assert.deepEqual(testClass.toString(16), '11', "change to base 16");
            testClass.value = -17;
            assert.deepEqual(testClass.toString(10), '-17', "change to base 10 with negative");
            assert.deepEqual(testClass.toString(2), '1111111111101111', "change to base 2 with negative");
            assert.deepEqual(testClass.toString(8), '177757', "change to base 8 with negative");
            assert.deepEqual(testClass.toString(16), 'ffef', "change to base 16 with negative");
        });
    });
    QUnit.module("member: exec", () => {
        QUnit.module("cmd", () => {
            QUnit.module("", () => {
                QUnit.test("cmd: c", (assert) => {
                    testClass.buffer = [['val', 17]];
                    testClass.base = 10;
                    testClass.value = 17;
                    testClass.calc = true;
                    testClass.exec('c');
                    assert.strictEqual(testClass.value, 0, "value correct");
                    assert.deepEqual(testClass.buffer, [['val', 0]], "buffer correct");
                    assert.strictEqual(testClass.calc, false, "calc correct");
                });
            });
            QUnit.module("cmd: ce", () => {
                QUnit.test("val", (assert) => {
                    testClass.buffer = [['val', 17], ['oper', 'add'], ['val', 18]];
                    testClass.base = 10;
                    testClass.value = 18;
                    testClass.exec('ce');
                    assert.strictEqual(testClass.value, 0, "value correct");
                    assert.deepEqual(testClass.buffer, [['val', 17], ['oper', 'add'], ['val', 0]], "buffer correct");
                });
                QUnit.test("oper", (assert) => {
                    testClass.buffer = [['val', 17], ['oper', 'add']];
                    testClass.base = 10;
                    testClass.value = 17;
                    testClass.exec('ce');
                    assert.strictEqual(testClass.value, 0, "value correct");
                    assert.deepEqual(testClass.buffer, [['val', 0]], "buffer correct");
                });
            });
            QUnit.module("cmd: bs", (assert) => {
                QUnit.test("val", (assert) => {
                    testClass.buffer = [['val', 17]];
                    testClass.base = 10;
                    testClass.value = 17;
                    testClass.exec('bs');
                    assert.strictEqual(testClass.value, 1, "value correct");
                    assert.deepEqual(testClass.buffer, [['val', 1]], "buffer correct");
                });
                QUnit.test("oper", (assert) => {
                    testClass.buffer = [['val', 17], ['oper', 'add']];
                    testClass.base = 10;
                    testClass.value = 17;
                    testClass.exec('bs');
                    assert.strictEqual(testClass.value, 1, "value correct");
                    assert.deepEqual(testClass.buffer, [['val', 17], ['oper', 'add'], ['val', 1]], "buffer correct");
                });
            });
            QUnit.module("cmd: neg", () => {
                QUnit.test("val", (assert) => {
                    testClass.buffer = [['val', 17]];
                    testClass.base = 10;
                    testClass.value = 17;
                    testClass.exec('neg');
                    assert.strictEqual(testClass.value, -17, "value correct");
                    assert.deepEqual(testClass.buffer, [['val', -17]], "buffer correct");
                });
                QUnit.test("oper", (assert) => {
                    testClass.buffer = [['val', 17], ['oper', 'add']];
                    testClass.base = 10;
                    testClass.value = 17;
                    testClass.exec('neg');
                    assert.strictEqual(testClass.value, -17, "value correct");
                    assert.deepEqual(testClass.buffer, [['val', 17], ['oper', 'add'], ['val', -17]], "buffer correct");
                });
            });
            QUnit.module("cmd: calc", () => {
                QUnit.test("val", (assert) => {
                    testClass.buffer = [['val', 17], ['oper', 'add'], ['val', 18]];
                    testClass.base = 10;
                    testClass.value = 18;
                    testClass.calc = false;
                    testClass.exec('calc');
                    assert.strictEqual(testClass.value, 35, "value correct");
                    assert.deepEqual(testClass.buffer, [['val', 35]], "buffer correct");
                    assert.strictEqual(testClass.calc, true, "calc correct");
                });
                QUnit.test("oper", (assert) => {
                    testClass.buffer = [['val', 17], ['oper', 'add']];
                    testClass.base = 10;
                    testClass.value = 17;
                    testClass.calc = false;
                    testClass.exec('calc');
                    assert.strictEqual(testClass.value, 34, "value correct");
                    assert.deepEqual(testClass.buffer, [['val', 34]], "buffer correct");
                    assert.strictEqual(testClass.calc, true, "calc correct");
                });
            });
        });
        QUnit.module("val", () => {
            QUnit.test("val", (assert) => {
                testClass.reset(10);
                testClass.exec('val-1');
                testClass.exec('val-7');
                assert.strictEqual(testClass.value, 17, "value correct");
                assert.deepEqual(testClass.buffer, [['val', 17]], "buffer correct");
            });
            QUnit.test("oper", (assert) => {
                testClass.reset(10);
                testClass.exec('val-1');
                testClass.exec('val-7');
                testClass.exec('oper-add');
                testClass.exec('val-1');
                assert.strictEqual(testClass.value, 1, "value correct");
                assert.deepEqual(testClass.buffer, [['val', 17], ['oper', 'add'], ['val', 1]], "buffer correct");
            });
        });
        QUnit.module("oper", () => {
            QUnit.test("val", (assert) => {
                testClass.reset(10);
                testClass.exec('val-1');
                testClass.exec('val-7');
                testClass.exec('oper-add');
                assert.strictEqual(testClass.value, 17, "value correct");
                assert.deepEqual(testClass.buffer, [['val', 17], ['oper', 'add']], "buffer correct");
            });
            QUnit.test("oper", (assert) => {
                testClass.reset(10);
                testClass.exec('val-1');
                testClass.exec('val-7');
                testClass.exec('oper-add');
                testClass.exec('oper-sub');
                assert.strictEqual(testClass.value, 17, "value correct");
                assert.deepEqual(testClass.buffer, [['val', 17], ['oper', 'sub']], "buffer correct");
            });
        });
    });
});
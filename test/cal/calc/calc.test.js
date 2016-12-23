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

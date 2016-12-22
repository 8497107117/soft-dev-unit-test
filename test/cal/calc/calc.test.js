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
});

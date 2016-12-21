QUnit.module("Array.prototype.back", () => {
    QUnit.test("operation correct", (assert) => {
        assert.deepEqual(ordinaryArray.back(), 3, "ordinary array");
        assert.deepEqual(holesArray.back(), undefined, "holes array");
        assert.deepEqual(nullArray.back(), undefined, "null array");
    });
});

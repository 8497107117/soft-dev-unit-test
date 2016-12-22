QUnit.module("checkType function", () => {
    QUnit.test("isVal", (assert) => {
        assert.strictEqual(isVal(valTest), true, "cmd[0] is val");
        assert.strictEqual(isVal(operTest), false, "cmd[0] is oper");
    });
    QUnit.test("isOper", (assert) => {
        assert.strictEqual(isOper(valTest), false, "cmd[0] is val");
        assert.strictEqual(isOper(operTest), true, "cmd[0] is oper");
    });
});

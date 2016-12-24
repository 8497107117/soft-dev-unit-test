let checkType = require('./checkType.js');

QUnit.module("checkType function", () => {
    QUnit.test("isVal", (assert) => {
        assert.strictEqual(checkType.isVal(valTest), true, "cmd[0] is val");
        assert.strictEqual(checkType.isVal(operTest), false, "cmd[0] is oper");
    });
    QUnit.test("isOper", (assert) => {
        assert.strictEqual(checkType.isOper(valTest), false, "cmd[0] is val");
        assert.strictEqual(checkType.isOper(operTest), true, "cmd[0] is oper");
    });
});

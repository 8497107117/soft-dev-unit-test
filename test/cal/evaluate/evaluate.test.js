QUnit.module("function evaluate", () => {
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

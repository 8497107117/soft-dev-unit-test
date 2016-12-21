QUnit.module("function evaluate", function () {
    QUnit.module("without negative", function () {
        QUnit.test("basic evaluate without negative", function (assert) {
            let basicPlusTest = {actualParameter: [['val', 2], ['oper', 'add'], ['val', 3]], expect: 5}; 
            let basicSubTest = {actualParameter: [['val', 8], ['oper', 'sub'], ['val', 3]], expect: 5}; 
            let basicMulTest = {actualParameter: [['val', 2], ['oper', 'mul'], ['val', 3]], expect: 6}; 
            let basicDivTest = {actualParameter: [['val', 15], ['oper', 'div'], ['val', 3]], expect: 5}; 
            let basicModTest = {actualParameter: [['val', 8], ['oper', 'mod'], ['val', 3]], expect: 2}; 
            assert.strictEqual(evaluate(basicPlusTest.actualParameter), basicPlusTest.expect, "basic plus correct");  
            assert.strictEqual(evaluate(basicSubTest.actualParameter), basicSubTest.expect, "basic sub correct");  
            assert.strictEqual(evaluate(basicMulTest.actualParameter), basicMulTest.expect, "basic mul correct");  
            assert.strictEqual(evaluate(basicDivTest.actualParameter), basicDivTest.expect, "basic div correct");  
            assert.strictEqual(evaluate(basicModTest.actualParameter), basicModTest.expect, "basic mod correct");  
        });

        QUnit.test("advanced evaluate without negative", function (assert) {
            let advancedTest1 = {actualParameter: [['val', 8], ['oper', 'add'], ['val', 3], ['oper', 'sub'], ['val', 6]], expect: 5}; 
            let advancedTest2 = {actualParameter: [['val', 8], ['oper', 'mul'], ['val', 3], ['oper', 'add'], ['val', 4]], expect: 28}; 
            let advancedTest3 = {actualParameter: [['val', 6], ['oper', 'sub'], ['val', 8], ['oper', 'div'], ['val', 4]], expect: 4}; 
            let advancedTest4 = {actualParameter: [['val', 15], ['oper', 'mod'], ['val', 4], ['oper', 'mul'], ['val', 3]], expect: 9}; 
            let advancedTest5 = {actualParameter: [['val', 2], ['oper', 'add'], ['val', 3], ['oper', 'mul'], ['val', 4], ['oper', 'sub'], ['val', 8], ['oper', 'div'], ['val', 2], ['oper', 'add'], ['val', 7], ['oper', 'mod'], ['val', 2]], expect: 11}; 
            assert.strictEqual(evaluate(advancedTest1.actualParameter), advancedTest1.expect, "advanced test 1 correct");  
            assert.strictEqual(evaluate(advancedTest2.actualParameter), advancedTest2.expect, "advanced test 2 correct");  
            assert.strictEqual(evaluate(advancedTest3.actualParameter), advancedTest3.expect, "advanced test 3 correct");  
            assert.strictEqual(evaluate(advancedTest4.actualParameter), advancedTest4.expect, "advanced test 4 correct");  
            assert.strictEqual(evaluate(advancedTest5.actualParameter), advancedTest5.expect, "advanced test 5 correct");  
        });
    });
    QUnit.module("with negative", function () {
        QUnit.test("basic evaluate with negative", function (assert) {
            let basicPlusTest = {actualParameter: [['val', 2], ['oper', 'add'], ['val', 3]], expect: 5}; 
            let basicSubTest = {actualParameter: [['val', 8], ['oper', 'sub'], ['val', 3]], expect: 5}; 
            let basicMulTest = {actualParameter: [['val', 2], ['oper', 'mul'], ['val', 3]], expect: 6}; 
            let basicDivTest = {actualParameter: [['val', 15], ['oper', 'div'], ['val', 3]], expect: 5}; 
            let basicModTest = {actualParameter: [['val', 8], ['oper', 'mod'], ['val', 3]], expect: 2}; 
            assert.strictEqual(evaluate(basicPlusTest.actualParameter), basicPlusTest.expect, "basic plus correct");  
            assert.strictEqual(evaluate(basicSubTest.actualParameter), basicSubTest.expect, "basic sub correct");  
            assert.strictEqual(evaluate(basicMulTest.actualParameter), basicMulTest.expect, "basic mul correct");  
            assert.strictEqual(evaluate(basicDivTest.actualParameter), basicDivTest.expect, "basic div correct");  
            assert.strictEqual(evaluate(basicModTest.actualParameter), basicModTest.expect, "basic mod correct");  
        });

        QUnit.test("advanced evaluate with negative", function (assert) {
            let advancedTest1 = {actualParameter: [['val', 8], ['oper', 'add'], ['val', 3], ['oper', 'sub'], ['val', 6]], expect: 5}; 
            let advancedTest2 = {actualParameter: [['val', 8], ['oper', 'mul'], ['val', 3], ['oper', 'add'], ['val', 4]], expect: 28}; 
            let advancedTest3 = {actualParameter: [['val', 6], ['oper', 'sub'], ['val', 8], ['oper', 'div'], ['val', 4]], expect: 4}; 
            let advancedTest4 = {actualParameter: [['val', 15], ['oper', 'mod'], ['val', 4], ['oper', 'mul'], ['val', 3]], expect: 9}; 
            let advancedTest5 = {actualParameter: [['val', 2], ['oper', 'add'], ['val', 3], ['oper', 'mul'], ['val', 4], ['oper', 'sub'], ['val', 8], ['oper', 'div'], ['val', 2], ['oper', 'add'], ['val', 7], ['oper', 'mod'], ['val', 2]], expect: 11}; 
            assert.strictEqual(evaluate(advancedTest1.actualParameter), advancedTest1.expect, "advanced test 1 correct");  
            assert.strictEqual(evaluate(advancedTest2.actualParameter), advancedTest2.expect, "advanced test 2 correct");  
            assert.strictEqual(evaluate(advancedTest3.actualParameter), advancedTest3.expect, "advanced test 3 correct");  
            assert.strictEqual(evaluate(advancedTest4.actualParameter), advancedTest4.expect, "advanced test 4 correct");  
            assert.strictEqual(evaluate(advancedTest5.actualParameter), advancedTest5.expect, "advanced test 5 correct");  
        });
    });
});

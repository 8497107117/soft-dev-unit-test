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

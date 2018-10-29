QUnit.test('Testing the new show function with three sets of inputs', function (assert) {
    assert.equal(show(1, 2, 3), 0, "cannot form a triangle");
    assert.equal(show(2.3, 2.3, 2.3), 2.29063719300984, "works with three positive real numbers");
    
});

QUnit.test('Testing the new show function with four sets of inputs', function (assert) {
    assert.equal(show(3, 3, 2), 2.8284271247461903, "works with three negative integers");
    assert.equal(show(2.3, 2.3, 2.3), 0, "works with three positive real numbers");
   // assert.throws(function () { show(-1); }, /the given value is less than zero/, 'Passing other than number');
});
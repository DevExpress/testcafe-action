fixture `workflow`
    .page `./test.html`;

test('test', async t => {
   await t.click('button');
});

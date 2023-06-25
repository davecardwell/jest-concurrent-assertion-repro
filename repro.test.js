const { setTimeout } = require('node:timers/promises');

test('not-concurrent', async () => {
    expect.assertions(1);

    await expect(await setTimeout(1_000, 'foo')).toBe('foo');
});

test.concurrent('concurrent', async () => {
    expect.assertions(1);

    await expect(await setTimeout(1_000, 'foo')).toBe('foo');
});

# jest-concurrent-assertion-repro

Jest’s `expect.assertions` fails when `test.concurrent` is involved.

Adding `.skip` to either of [the tests](./repro.test.js) and the suite will succeed, but when both are run together:

```
$ npm test

> test
> jest

 FAIL  ./repro.test.js
  ✕ not-concurrent (1002 ms)
  ✓ concurrent

  ● not-concurrent

    expect.assertions(1)

    Expected one assertion to be called but received two assertion calls.

      2 |
      3 | test('not-concurrent', async () => {
    > 4 |     expect.assertions(1);
        |            ^
      5 |
      6 |     await expect(await setTimeout(1_000, 'foo')).toBe('foo');
      7 | });

      at Object.assertions (repro.test.js:4:12)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 passed, 2 total
Snapshots:   0 total
Time:        1.335 s, estimated 2 s
Ran all test suites.
```

type AssertionArguments = number | string;

export const notEqual = (
  actual: AssertionArguments,
  expected: AssertionArguments
) => {
  expect(actual).not.equal(expected);
};

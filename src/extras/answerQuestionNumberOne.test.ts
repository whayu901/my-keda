import {
  sortArrayManually,
  maksimumSubarraySum,
  jumlahBilanganGenapDalamObjek,
} from "./answerQuestionNumberOne";

// Test for sortArrayManually function
test("sortArrayManually sorts array from largest to smallest", () => {
  expect(sortArrayManually([1, 2, 4, 3, 5, 3, 2, 1])).toEqual([
    5, 4, 3, 3, 2, 2, 1, 1,
  ]);
});

// Test for maksimumSubarraySum function
test("maksimumSubarraySum finds maximum subarray sum", () => {
  expect(maksimumSubarraySum([100, 200, 300, 400], 2)).toBe(700);
  expect(maksimumSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
  expect(maksimumSubarraySum([-3, 4, 0, -2, 6, -1], 2)).toBe(5);
  expect(maksimumSubarraySum([1, 2, 3], 4)).toBeNull();
});

// Test for jumlahBilanganGenapDalamObjek function
test("jumlahBilanganGenapDalamObjek sums all even numbers in a nested object", () => {
  const input = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup",
      },
    },
  };

  expect(jumlahBilanganGenapDalamObjek(input)).toBe(6);
});

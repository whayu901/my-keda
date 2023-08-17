// 1. Buatlah fungsi dengan input array of number untuk mengurutkan angka dari terbesar ke terkecil dengan manual tanpa fungsi bawaan javascript
// Input : [1, 2, 4, 3, 5, 3, 2, 1]			Expected Output : [5, 4, 3, 3, 2, 2, 1, 1]

// Answer:
export const sortArrayManually = (value: number[]) => {
  let valueLength = value.length;

  for (let i = 0; i < valueLength; i++) {
    for (let j = 0; j < valueLength - i - 1; j++) {
      if (value[j] < value[j + 1]) {
        let temp = value[j];
        value[j] = value[j + 1];
        value[j + 1] = temp;
      }
    }
  }

  return value;
};
// console.log(sortArrayManually([5, 4, 3, 3, 2, 2, 1, 1]))

// 2. Buatlah fungsi dengan input array of number dan number untuk menemukan jumlah maksimum subarray dengan panjang angka yang dimasukan ke fungsi
// Input : ([100, 200, 300, 400], 2)				Expected Output : 700 		// didapatkan dari 300 + 400
// Input : ([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)		Expected Output : 39 		// didapatkan dari 4 + 2 + 10 + 23
// Input : ([-3, 4, 0, -2, 6, -1], 2)				Expected Output : 5 		// didapatkan dari 6 + -1

// Answer:
export const maksimumSubarraySum = (arr: number[], num: number) => {
  if (arr.length < num) {
    return null;
  }

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
};

// Contoh penggunaan fungsi
// console.log(maksimumSubarraySum([100, 200, 300, 400], 2)); // Expected Output : 700
// console.log(maksimumSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // Expected Output : 39
// console.log(maksimumSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // Expected Output: 5

// 3. Buatlah fungsi untuk mendapatkan jumlah semua bilangan genap dalam nested objek
// Input :
// {
//   outer: 2,
//   obj: {
//     inner: 2,
//     otherObj: {
//       superInner: 2,
//       notANumber: true,
//       alsoNotANumber: "yup"
//     }
//   }
// }
// Output: 6

// Answer:
export const jumlahBilanganGenapDalamObjek = (obj: any) => {
  let sum = 0;

  for (let key in obj) {
    if (typeof obj[key] === "object") {
      sum += jumlahBilanganGenapDalamObjek(obj[key]);
    } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }

  return sum;
};

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

const output = jumlahBilanganGenapDalamObjek(input);
console.log(output); // Output: 6

const mispelledWord = document.getElementById("mispelledWord");
const btn = document.getElementById("btn");
const result = document.getElementById("result");
const numberInWords = [
  "Zero",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Eleven",
  "Twelve",
  "Thirteen",
  "Fourteen",
  "Fifteen",
  "Sixteen",
  "Seventeen",
  "Eighteen",
  "Nineteen",
  "TWENTY",
  "Twenty-one",
  "Twenty-two",
  "Twenty-three",
  "Twenty-four",
  "Twenty-five",
  "Twenty-six",
  "Twenty-seven",
  "Twenty-eight",
  "Twenty-nine",
  "Thirty",
  "Thirty-one",
  "Thirty-two",
  "Thirty-three",
  "Thirty-four",
  "Thirty-five",
  "Thirty-six",
  "Thirty-seven",
  "Thirty-eight",
  "Thirty-nine",
  "Forty",
];
const numbers = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
];

btn.addEventListener("click", function (e) {
mispelledWord.value=mispelledWord.value.replace(" ","-")
 
  let flag = false;
  if (mispelledWord.value.length == 0) {
    result.innerHTML = "";
    mispelledWord.setCustomValidity("Type something....");
    mispelledWord.reportValidity();
    return false;
  }

  let count = 0;
  numberInWords.map((data, i) => {
    if (data.length == mispelledWord.value.length) {
      count = 0;
      let dataSplit = data.toLowerCase().split("");
      let mispelledWordSplit = mispelledWord.value.toLowerCase().split("");
      dataSplit.map((item, j) => {
        if (item == mispelledWordSplit[j]) {
          count++;
          if (mispelledWord.value.length - 1 == count) {
            result.innerHTML =
              `Let me guess : ` + data.toLowerCase() + ` ( ${numbers[i]})`;
            flag = true;
          }
        }
      });
    }
    if (flag == false) {
      result.innerHTML = "No matched found";
    }
  });
});

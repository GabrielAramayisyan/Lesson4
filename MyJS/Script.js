let text_for_revert = prompt("Enter a text");
let empty_text = "";

for (let my_text = text_for_revert.length - 1; my_text >= 0; my_text--) {
    empty_text += text_for_revert[my_text];
}
alert(empty_text);


// Task 2

let range_number_1 = parseInt(prompt("Enter your first number"))
let range_number_2 = parseInt(prompt("Enter your second number"))

let max = range_number_1 > range_number_2 ? range_number_1 : range_number_2;
let min = range_number_1 > range_number_2 ? range_number_2 : range_number_1;

let prime_arr = new Array;


for (let num1 = 2; num1 <= max; num1++) {
    let flag = true;
    for (let test_num = 2; test_num < num1; test_num++) {
        if (num1 % test_num == 0) {
            flag = false;
            break;
        }
    }

    if (flag) {
        prime_arr.push(num1);
    }
    if (min == 0 && max == 0) {
        alert("There is no prime number");
        break;
    }

}
alert("Your smallest prime number is  " + prime_arr[0] + "  your biggest is  " + prime_arr[(prime_arr.length) - 1]);
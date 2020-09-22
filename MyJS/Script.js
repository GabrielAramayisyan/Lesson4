let text_for_revert = prompt("Enter a text");
let empty_text = "";

for (let my_text = text_for_revert.length - 1; my_text >= 0; my_text--) {
    empty_text += text_for_revert[my_text];
}
alert(empty_text);
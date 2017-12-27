console.log("connected");

const pressed = [];
secretCode = "montylily";

window.addEventListener('keyup', (e) => {
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  console.log(pressed);
  if(pressed.join('').includes(secretCode)) {
    console.log("you have found the secret code");
    cornify_add();
  }

});

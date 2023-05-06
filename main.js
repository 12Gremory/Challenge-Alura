  function codedMessage(message) {
    let new_text = "";
    let code = {
      a :   "ai",
      e : "enter",
      i : "imes",
      o : "ober",
      u : "ufat"
    };
    
    
    for (let i=0; i < message.length; i++) {
      if (message[i] in code) {
        new_text += code[message[i]];
      } else {
        new_text += message[i];
      }
    }
    return new_text;
  }
  
  function decodedMessage(message_coded) {
    const regex_arr = [
        /ai/gi,
        /enter/gi,
        /imes/gi,
        /ober/gi,
        /ufat/gi
      ];
      
    const arr = ["a", "e", "i", "o", "u"];

    new_message = message_coded;

    for (let i = 0; i < regex_arr.length; i++) {
      new_message = new_message.replace(regex_arr[i], arr[i]);   
  }
    return new_message;
  }


  function criptografar() {

    let text = document.getElementById('texto').value;

    if (document.getElementById('texto').value == '') {
      document.getElementById('output_img').style.display = 'flex';
      document.getElementById('copiar').style.display = 'none';
    } else {
      document.getElementById('output').value = codedMessage(text);
      document.getElementById('output_img').style.display = 'none';
      document.getElementById('copiar').style.display = 'inline-block';
      document.getElementById('one').style.display = 'none';
      document.getElementById('two').style.display = 'none';
    }
    
    return;
  }

  function descriptografar() {

    let text = document.getElementById('texto').value;

    if (document.getElementById('texto').value == '') {
      document.getElementById('output_img').style.display = 'flex';
      document.getElementById('copiar').style.display = 'none';
    } else {
      document.getElementById('output').value = decodedMessage(text);
      document.getElementById('output_img').style.display = 'none';
      document.getElementById('copiar').style.display = 'flex';
      document.getElementById('one').style.display = 'none';
      document.getElementById('two').style.display = 'none';
    }
    return;
  }

  function copiar(){

    let copytext = document.getElementById('output');

    copytext.select();
    navigator.clipboard.writeText(copytext.value);
    return 
  }


const utterances = [
    ["hi!","hey","Heya","Hey","hello","Hello","HELLO","hi bot","hi"],
    ["how are you","what's up"],
    ["bye"],
    ["who are you","what is your role","what do you work","what can you do"],
    ["what is your name"],
    ["I want to start recycling how shoud i begin?."],
    ["I have a lot of waste products."],
    ["No, I don't."],
    ["can I know more about this"],
    ["what knowledge do you have"],
    ["who developed you","who made you","who created you"],
    ["what are you doing","what are you upto"],
    ["Thanks","THANKS","thank you","Ok thanks"],
    ["yes","yeah","happy","good","well"],
    ["Are you human","Are you a robot?"],
    ["which languages can you speak?"],
    ["where do you live?"],
    ["are you expensive?"],
    ["I have some old gadgets that I need to dispose of.What should i do?"],
    ["bio degradable waste management","recommend ways for biodegradable waste management"],
    ["non bio degradable waste","recommend ways for non-biodegradable waste management"],
    ["why is disaster management important","importance of disaster management"]
    ];
    
   const answers = [
      ["hi! How can I help you","Hey, How can I help you","Heya, How can I help you","Hey,How can I help you","Hello, How can I help you"],
      ["I'm good.How are you? Hope you are safe"],
      ["Bye,stay safe"],
      ["We are EcoBin- a waste control management service.We train and guide people about disaster management and provide them necessary help and information in case any disaster takes place at any location."],
      ["I'm a robot.You may call me Aapka Sahayak"],
      ["Great! Recycling is an important way to reduce waste and protect the environment. What type of materials do you want to recycle?"],
      ["That's a good start! Do you know the waste you have is Biodegradable or Non-Biodegradable ?"],
      ["No Problem!You can Scan the image and I will tell you whether its Biodegradable or Non-Biodegradable."],
      ["Yeah sure, You may visit our website for more details"],
      ["Well, I can guide you on disaster management on disasters such as floods, earthquake, landslide, fire destruction, animal attacks, you may also contact Helpline for any emergency."],
      ["I was developed by EcoBin."],
      ["I am here to help you.Give you recommendations on how to decompose waste."],
      ["Your most welcome"],
      ["Good to hear that"],
      ["I am a robot!"],
      ["I speak English."],
      ["I live right here on web"],
      ["No, I am not..chill"],
      ["Of course! Many communities have designated drop-off locations for electronic waste.You can decompose there."],
      ["Here are some ways for managing bio-degradable waste: 1.Composting biodegradable waste.If your business produces biodegradable waste such as food, garden waste, paper and cardboard, you can send these for recycling into compost. 2.Anaerobic digestion of waste.Anaerobic digestion can be used to treat food and similar wet organic wastes. It takes place in a closed container, excluding oxygen. It is clean and relatively odour-free. 3. Spreading waste on land. You may also be able to reuse your waste, such as paper or sewage sludge, by spreading it on land."],
      ["Since non-biodegradable wastes cannot be decomposed, the disposal poses a big problem and a threat to the environment. The non-biodegradable wastes can be managed by following 3 R's - Reduce, Reuse, and Recycle."],
      ["okay"]
    ];
  const alternatives = [
    "I am unable to process. PLEASE contact helpline in case of emergency. Helpline: 3056978241",
    "Sorry, I cannot understand. Please contact our professional for any emergency. Contact no: 9875632141 ; Helpline: 2220136974"
  ];
  const messagerForm = get(".messager-inbox");
  const messagerInput = get(".messager-input");
  const messagerChat = get(".messager-forchat");
  const logo_img = "logo1.jfif";
  const logo_name = "Bot";
  const me_img = "person.jpg";
  const me_name = "Me";
  const robot = ["How do you do, fellow human", "I am not a bot"];
  
  function compare(utterancesArray, answersArray, string) {
    let item;
    for (let x = 0; x < utterancesArray.length; x++) {
      for (let y = 0; y < utterancesArray[x].length; y++) {
        if (utterancesArray[x][y] === string) {
          let answers = answersArray[x];
          item = answers[Math.floor(Math.random() * answers.length)];
        }
      }
    }
    return item;
  }
  messagerForm.addEventListener("submit", event => 
  {
    event.preventDefault();
    const msgText = messagerInput.value;
    if (!msgText) return;
    messagerInput.value = "";
    addChat(me_name, me_img, "right", msgText);
    output(msgText);
  });
  function get(selector, root = document) {
    return root.querySelector(selector);
  }
  function formatDate(date) {
    const h = "0" + date.getHours();
    const m = "0" + date.getMinutes();
    return `${h.slice(-2)}:${m.slice(-2)}`;
  }
  function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  function output(input) {
    let product;
    let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
    text = text
      .replace(/ a /g, " ")  
      .replace(/i feel /g, "")
      .replace(/whats/g, "what is")
      .replace(/please /g, "")
      .replace(/there/g, "there is")
      .replace(/r u/g, "are you");
    if (compare(utterances, answers, text)) {
      product = compare(utterances, answers, text);
    }
     else 
     {
      product = alternatives[Math.floor(Math.random() * alternatives.length)];
    }
    const delay = input.split(" ").length * 100;
    setTimeout(() => {
      addChat(logo_name, logo_img, "left", product);
    }, delay);
  }
  function addChat(name, img, side, text) {
    const msgHTML = `
      <div class="msg ${side}-msg">
      <div class="msg-pic" style="background-image: url(${img})"></div>
      <div class="msg-box">
      <div class="msg-maintitle">
      <div class="msg-maintitle-name">${name}</div>
      <div class="msg-info-time">${formatDate(new Date())}</div></div>
      <div class="msg-pop">${text}</div>
      </div>
      </div>
    `;
    messagerChat.insertAdjacentHTML("beforeend", msgHTML);
    messagerChat.scrollTop += 500;
  }
var Name = document.getElementById("name");
var Phone = document.getElementById("phone");
var mail = document.getElementById("email");
var Message = document.getElementById("message");

function sendMail() {
  var Body =
    "name:" +
    Name.value +
    "<br/> phone:" +
    Phone.value +
    " <br/> email:" +
    mail.value +
    " <br/> message:" +
    Message.value;

  // mail.send({
  //   Host: "smtp.elasticemail.com",
  //   Username: "pavansapkale99@gmail.com",
  //   Password: "46399836A7846837843A8B2E271C68BE81D4",
  //   To: "pavansapkale66@gmail.com",
  //   From: "pavansapkale99@gmail.com",
  //   Subject: "New contact form enquiry",
  //   Body: Body,
  // }).then((message) => alert(message));

  mail.send({
    SecureToken: "1c5b74d9-72f1-42f4-a03e-c8d18c0a9a6c",
    To: "pavansapkale99@gmail.com",
    From: "pavansapkale66@gmail.com",
    Subject: "New contact form enquiry",
    Body: Body,
  }).then((message) => alert(message));
}

function validateForm() {
  var Name = nameInput.value.trim();
  var Phone = phoneInput.value.trim();
  var mail = emailInput.value.trim();
  var Message = messageInput.value.trim();

  // Validate name
  if (Name === "") {
    alert("Please enter your name.");
    return false;
  }

  // Validate phone number
  if (Phone === "" || !/^\d{10}$/.test(Phone)) {
    alert("Please enter a valid phone number (10 digits).");
    return false;
  }

  // Validate email
  if (mail === "" || !/\S+@\S+\.\S+/.test(mail)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Validate message
  if (Message === "") {
    alert("Please enter your message.");
    return false;
  }

  // If all validations pass, send mail
  sendMail();
  return false; // Prevent form submission since we're handling it via JS
}


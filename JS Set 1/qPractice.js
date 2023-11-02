const user = {
  email: "abc@domain.com",
  updateEmail: email=> {
    this.email = email;
  },
};

user.updateEmail("laest@mail.com"); //udating email but values is added in windows


console.log(user.email);
// console.log(window.email);  //to see updated value
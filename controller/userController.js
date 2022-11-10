// ! Show Profile Page

export const profilepage = (req, res) => {
  res.render("profile");
};

// ! Show Login Page

export const loginpage = (req, res) => {
  res.render("login");
};

// ! Show Register Page

export const registerpage = (req, res) => {
  res.render("register");
};
// ! Show Forget Password Page

export const forgetpasspage = (req, res) => {
  res.render("forgetpass");
};

// ! Show Register user Page

export const registeruser = (req, res) => {
  
  const { name, username, email, password } = req.body;

  if (!name || !username || !email || !password) {

    res.session.message = ` All Fields Are Require`;

    res.redirect("/register");

  }
};

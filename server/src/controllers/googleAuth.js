import GoogleUser from "../models/googleUser.js";

export const googleCallback = (accessToken, refreshToken, profile, done) => {
  GoogleUser.findOne({ googleID: profile.id })
    .then((user) => {
      if (!user) {
        user = new GoogleUser({
          googleID: profile.id,
          displayName: profile.displayName,
          email: profile.emails[0].value,
          image: profile.photos[0].value,
        });
        return user.save();
      }
      return user;
    })
    .then((user) => done(null, user))
    .catch((error) => done(error, null));
};

export const loginSuccess = (req, res) => {
  if (req.user) {
    res.status(200).json({ message: "User Login", user: req.user });
  } else {
    res.status(400).json({ message: "Not Authorized" });
  }
};

export const logout = (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    return res.redirect("http://localhost:5173/");
  });
};

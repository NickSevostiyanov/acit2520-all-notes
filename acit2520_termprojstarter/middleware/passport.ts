import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import {
  getUserByEmailIdAndPassword,
  getUserById,
} from "../controller/userController";

// ⭐ TODO for Students: Fix Passport Types so they don't say any
const localLogin = new LocalStrategy(
  {
    usernameField: "uname",
    passwordField: "password",
  },
  async (uname: any, password: any, done: any) => {
    // ⭐ TODO for Students: Show the login error message on the login page
    const user = await getUserByEmailIdAndPassword(uname, password);
    return user
      ? done(null, user)
      : done(null, false, {
          message: "Your login details are not valid. Please try again.",
        });
  }
);

// ⭐ TODO for Students: Fix Passport Types so they don't say any
passport.serializeUser(function (user: any, done: any) {
  done(null, user.id);
});

// ⭐ TODO for Students: Fix Passport Types so they don't say any
passport.deserializeUser(function (id: any, done: any) {
  const user = getUserById(id);
  if (user) {
    done(null, user);
  } else {
    done({ message: "User not found" }, null);
  }
});

export default passport.use(localLogin);

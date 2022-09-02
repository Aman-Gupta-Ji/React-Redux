import classes from "./UserProfile.module.css";

import Counter from "./Counter";

const UserProfile = () => {
  return (
    <>
      <main className={classes.profile}>
        <h2>User Counter</h2>
      </main>
      <Counter />
    </>
  );
};

export default UserProfile;

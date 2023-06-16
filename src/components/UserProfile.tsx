const UserProfile = ({ session, userName }) => {

  return (
    <div>
      {session ? (
        <p className="font-lufgaMedium text-xl text-black"> Welcome, {userName} </p>
      ) : (
        <p> Bruh </p>
      )}
    </div>
  );
}

export default UserProfile;

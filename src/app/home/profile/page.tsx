import UserProfile from "@/components/UserProfile/UserProfile";

const Profile = () => {
  return (
    <UserProfile
      url={
        "https://t3.ftcdn.net/jpg/05/57/20/16/360_F_557201692_P86sh0v8g00VseZacjBOOKJmGLSvEpQb.jpg"
      }
      name={"Savita"}
      postNumber={200}
      followersNumber={200}
      followingNumber={200}
    />
  );
};
export default Profile;

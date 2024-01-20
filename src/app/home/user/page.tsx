import UserRow from "@/components/UserRow/UserRow";
import j from "../../../../public/Log in.png";

const User = () => {
  return (
    <>
      <UserRow
        url="https://t3.ftcdn.net/jpg/05/57/20/16/360_F_557201692_P86sh0v8g00VseZacjBOOKJmGLSvEpQb.jpg"
        isFollowing={"Follow"}
        name={"Savita"}
        followingNumber={200}
      />

      <UserRow
        url="https://t3.ftcdn.net/jpg/05/57/20/16/360_F_557201692_P86sh0v8g00VseZacjBOOKJmGLSvEpQb.jpg"
        isFollowing={"Follow"}
        name={"Keshav"}
        followingNumber={200}
      />
    </>
  );
};
export default User;

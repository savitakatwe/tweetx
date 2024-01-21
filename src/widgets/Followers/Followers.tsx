"use client";
import UserRow from "@/components/UserRow/UserRow";
import userService from "@/services/userService";
import { useEffect, useState } from "react";
import { IUser } from "@/types/IUser";
import followService from "@/services/followService";
import { it } from "node:test";

const User = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const fetchUsers = async () => {
    const res = await userService.getUsers();
    setUsers(res);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  const followUser = async (id: string) => {
    const res = await followService.followUser({ followUserId: id });
    fetchUsers();
  };
  return (
    <>
      {users.map((item) => (
        <UserRow
          key={item.id}
          url="https://t3.ftcdn.net/jpg/05/57/20/16/360_F_557201692_P86sh0v8g00VseZacjBOOKJmGLSvEpQb.jpg"
          isFollowing={item.isFollowing}
          name={item.name}
          followingNumber={200}
          onClick={() => followUser(item.id)}
        />
      ))}
    </>
  );
};
export default User;

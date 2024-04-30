"use client";
import { getUser } from "@/app/action";
import React, { useEffect, useState } from "react";

type Props = {};

const User = (props: Props) => {
  const [userList, setUserList] = useState<any>([]);
  const getUserList = async () => {
    const res = await getUser();
    setUserList(res);
  };
  useEffect(() => {
    getUserList();
  }, []);
  return (
    <div>
      User
      {userList?.map((item: any, index: any) => (
        <p key={index}>{item.name}</p>
      ))}
    </div>
  );
};

export default User;

import { getCurrentUser } from "@/actions/auth";
import React from "react";

const ProfilePage = async () => {
  const {email, username, course, semester} = await getCurrentUser();

  return <div>
        <p>username: {username}</p>
        <p>email: {email}</p>
        <p>course: {course}</p>
        <p>semester:{semester} </p>
      </div>;
};

export default ProfilePage;

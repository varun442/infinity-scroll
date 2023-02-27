import React, { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import UserCard from "../UserCard/UserCard";

const UserList = () => {
  const [user, setUser] = useState([]);
  const [limit, setLimit] = useState(12);
  const [loading, setLoading] = useState(false);
  const url = `https://dummyjson.com/users?limit=${limit}&skip=0`;
  const fetchUsers = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log("data:", data);
    if (Array.isArray(data.users)) {
      setUser(data.users);
      setLoading(false);
      console.log("user:", user);
    } else {
      console.log("Invalid data:", data);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [limit]);

  const handleScroll = () => {
    // console.log("Height" + document.documentElement.scrollHeight);
    // console.log("Top" + document.documentElement.scrollTop);
    // console.log("innerHeight" + window.innerHeight);

    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      setLimit((prev) => prev + 10);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="user-list grid-container">
      {user.length > 0 ? (
        user.map((card) => {
          return <UserCard key={card.id} {...card} />;
        })
      ) : (
        <Loader />
      )}
      {loading && <Loader />}
    </div>
  );
};

export default UserList;

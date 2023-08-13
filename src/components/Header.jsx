import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { BASE_URL } from "../utils/baseUrl";
import { useUserContext } from '../contexts/UserContext/UserContext'; 

const Header = () => {
  const { userInfo, setUserInfo } = useUserContext();

  useEffect(() => {
    fetch(`${BASE_URL}/profile`, { credentials: "include" }).then(
      (response) => {
        response.json().then((userInfo) => {
          setUserInfo(userInfo)
        });
      }
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logout = () => {
    fetch(`${BASE_URL}/logout`, {
      credentials: "include",
      method: "POST",
    }).then(() => {
      alert("Logout OK!!!");
    });

    setUserInfo(null);
  };

  const username = userInfo?.username;

  return (
    <header>
      <Link to="/" className="logo">
        CodingBlog
      </Link>
      <nav>
        {username ? (
          <>
            <Link to="/create">Create post</Link>
            <p className="user-info">
              {username} <span onClick={logout}>(Logout)</span>
            </p>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;

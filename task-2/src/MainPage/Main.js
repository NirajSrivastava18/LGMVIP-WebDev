import React, { useState } from "react";
import { MainSection, MainContent } from "./MainStyled";
import NavBar from "../components/NavBar/NavBar";
import UserCard from "../components/UserCard/UserCard";
import Loading from "../components/Loader/Loader";

const Main = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getdata = () => {
    setLoading(true);
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((resdata) => {
        setUserData(resdata.data);
      });
  };
  setTimeout(() => {
    setLoading(false);
  }, 4000);

  return (
    <>
      <NavBar onClick={getdata} />
      {loading || !userData ? (
        <Loading />
      ) : (
        <MainSection>
          <MainContent>
            {userData.map((user) => {
              return (
                <UserCard
                  key={user.id}
                  email={user.email}
                  FirstName={user.first_name}
                  LastName={user.last_name}
                  avatar={user.avatar}
                />
              );
            })}
          </MainContent>
        </MainSection>
      )}
    </>
  );
};

export default Main;

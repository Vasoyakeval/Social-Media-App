import React from "react";
import { useSelector } from "react-redux";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";
import { Link } from "react-router-dom";
import "./ProfileCard.css";

const ProfileCard = ({location}) => {
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useSelector((state) => state.authReducer.authData);
  const posts = useSelector((state) => state.postReducer.posts);
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img
          src={
            user.coverPicture
              ? serverPublic + user.coverPicture
              : serverPublic + "defaultCover.jpg"
          }
          alt=""
        />
        <img
          src={
            user.coverPicture
              ? serverPublic + user.profilePicture
              : serverPublic + "defaultProfile.jpeg"
          }
          alt=""
        />
      </div>

      <div className="ProfileName">
        <span>
          {user.firstname} {user.lastname}
        </span>
        <span>{user.worksAt ? user.WorksAt : "Write about yourself"}</span>
      </div>

      <div className="followstatus">
        <hr />
        <div>
          <div className="follow">
            <span>{user.followings.length}</span>
            <span>Following</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>{user.followers.length}</span>
            <span>Followers</span>
          </div>

          {location === "profilePage" && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>{posts.filter((post)=> post.userId === user._id).length}</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {location === "profilePage" ? (
        ""
      ) : (
        <span>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={`/profile/${user._id}`}
          >
            My Profile
          </Link>
        </span>
      )}
    </div>
  );
};

export default ProfileCard;

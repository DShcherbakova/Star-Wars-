import React from "react";
import Friend from "./Friend";
import { friends } from "../../utils/constants";

const DreamTeam: React.FC = () => (
  <section className="right">
    <h2>Dream Team</h2>
    {friends.map((friend, index) => (
      <Friend
        key={index}
        src={friend.src}
        alt={friend.alt}
        className={friend.className || ""}
      />
    ))}
  </section>
);

export default DreamTeam;

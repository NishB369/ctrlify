import React from "react";
import { Link } from "react-router";
import NotificationsMainCard from "../../Components/NotificationsMainCard/NotificationsMainCard";
import Notification from "../../Components/Notification/Notification";

const Notifications = () => {
  return (
    <div className="py-4 flex flex-col gap-4">
      <div className="flex items-center justify-between sticky top-0 bg-white z-10 py-4 w-full px-4 opacity-90">
        <Link to="/">
          <div className="w-8 h-8 border rounded-full flex items-center justify-center">
            <span className="bi bi-arrow-left mt-1"></span>
          </div>
        </Link>
        <div className="font-semibold text-xl">Notifications</div>
      </div>
      <NotificationsMainCard />
      <div className="flex flex-col gap-4 px-4">
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
      </div>
    </div>
  );
};

export default Notifications;

import { useContext, useEffect, useState } from "react";
import { Context } from "../../context";
import UserRoute from "../../components/routes/UserRoute";
import axios from "axios";
import { Avatar } from "antd";
import Link from "next/link";
import { SyncOutlined, PlayCircleOutlined } from "@ant-design/icons";
import course from "../../../server/models/course";

const Chapters = () => {

  const chapters = [{"title" : "Moi et les moches"}, {"title" : "Moi et les moches"}];
  

  return (
      <>
        <div className="column">
            {chapters.map((chapter) => (
              <div className="col-md-4 pb-3" key={chapter}>
               {chapter.title}
              </div>
            ))}
          </div>
      
      </>
     
  );
};

export default Chapters;

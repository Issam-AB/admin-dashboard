import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import "./new.scss";
import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db, auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const New = ({ inputs, title }) => {
  const [file, setFile] = React.useState("");
  const [data, setData] = React.useState({});

  const handlAdded = async (e) => {
    e.preventDefault();
    try {
      const res = createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      // using the id when want to delete user will be gonna deleted in the same time in authenticated db 
      await setDoc(doc(db, "users", (await res).user.uid), {
        ...data,
        timeStamp: serverTimestamp(),
      });
    } catch (error) {
      console.log(error);
    }
  };

  // slect all from objet formSource
  const handlInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={handlAdded}>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.text}
                    placeholder={input.placeholder}
                    onChange={handlInput}
                  />
                </div>
              ))}

              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;

import PropTypes from "prop-types";

import confetti from "../image/Login/confetti.png";

//import { handleGetUserData } from "../components/SignIn";
//import { fetchUserData } from "../services/api";
//import { useEffect, useState } from "react";

const Dialog = ({ isOpen, onClose, email }) => {
  //const [user, setUser] = useState(null);
  //const [token, setToken] = useState(sessionStorage.getItem("token"));

  // useEffect(() => {
  //   const storedToken = sessionStorage.getItem("token");
  //   if (storedToken) {
  //     setToken(storedToken);
  //   }
  // }, []);

  // useEffect(() => {
  //   const getUser = async () => {
  //     if (!token) return;

  //     const userData = await handleGetUserData(); // ✅ Gọi từ SignIn
  //     if (userData) {
  //       setUser(userData);
  //     }
  //     console.log("Login Success:", userData);
  //   };
  //   getUser();
  // }, [token]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="h-[347px] w-[425px] rounded-lg bg-white text-center shadow-lg">
        <div className="ml-[167.5px] h-[90px] w-[90px] smm:mt-6 mdd:mt-11 lgg:mt-11">
          <img className="" src={confetti} alt="confetti" />
        </div>
        <div className="mt-6">
          <strong className="font-lato text-[20px] font-bold">
            Check Your Email
          </strong>

          <div className="font-lato text-[20px]">
            We have just sent you your new confirmation email to complete your
            registration to
            <div>
              {email ? <strong>{email}</strong> : "Đang tải dữ liệu..."}
            </div>
          </div>
        </div>
        <button
          onClick={onClose}
          className="bottom-0 rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-green-600"
        >
          OK
        </button>
      </div>
    </div>
  );
};
Dialog.propTypes = {
  isOpen: PropTypes.func.isRequired, // Xác định toggoSignUp phải là function và bắt buộc
};
Dialog.propTypes = {
  onClose: PropTypes.func.isRequired, // Xác định toggoSignUp phải là function và bắt buộc
};
Dialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  email: PropTypes.string,
};
export default Dialog;

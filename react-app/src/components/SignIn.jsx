import dausao from "../image/Login/dausao.png";
import tron from "../image/Login/tron.png";
import iconshow from "../image/Login/iconshow.png";
import Horizontal from "../image/frm/frm2/Horizontal.png";
import logoGG from "../image/Login/logoGG.png";
import chamthang from "../image/Login/chamthang.png";

import PropTypes from "prop-types";
import { useState } from "react";
import { fetchLogin, fetchUserData } from "../services/api";
//import { useEffect } from "react";
//import {  fetchGetUser } from "../services/api";
import { GoogleLogin } from "@react-oauth/google";
//import { useGoogleLogin } from "@react-oauth/google";
//import axios from "axios";
//import { use } from "react";
import Dialog from "./Dialog";


const SignIn = ({ toggoSignUp }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_GOOGLE_CLIENT_SECRET;

  const handleGetUserData = async () => {
    const token = sessionStorage.getItem("token"); // Lấy token trước khi kiểm tra

    if (token) {
      const userId = 1; // FakeStore API không trả ID khi login, nên bạn cần lưu ID thủ công
      sessionStorage.setItem("userId", userId);

      const userData = await fetchUserData(); // Không cần truyền userId

      if (userData && userData.email) {
        setEmail(userData.email);
      }

      console.log("Thông tin user:", userData);
      console.log("Thông tin email:", userData.email);
    } else {
      console.error("Không có token, vui lòng đăng nhập lại.");
    }
    return;
  };

  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // Lay danh sach nguoi dung
  // useEffect(() => {
  //   const getUsers = async () => {
  //     try {
  //       const data = await fetchGetUser();
  //       console.log("getUsers thanh cong ");
  //       setUsers(data);
  //     } catch (error) {
  //       console.error("Loi: ", error);
  //       setError("Không thể lấy danh sách người dùng");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   getUsers();
  // }, []);

  // if (loading) return <p>Đang tải...</p>;
  // if (error) return <p>{error}</p>;

  const handleLogin = async () => {
    try {
      const data = await fetchLogin(username, password);
      console.log("Login Success:", { data }); // In token ra console
      // alert("Đăng nhập thành công!");
      setIsDialogOpen(true);
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  const handleLoginAndFetchUser = async () => {
    await handleLogin(); // Đợi đăng nhập xong
    await handleGetUserData(); // Sau đó lấy thông tin user
  };

  const login = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      console.log("Google Auth Code:", codeResponse);

      // Gửi mã `code` đến Google để đổi lấy Access Token
      try {
        const { data } = await axios.post(
          "https://oauth2.googleapis.com/token",
          new URLSearchParams({
            code: codeResponse.code, // Lấy mã code từ phản hồi Google
            CLIENT_ID,
            CLIENT_SECRET,
            redirect_uri: "http://localhost:5173/", //"YOUR_REDIRECT_URI",
            grant_type: "authorization_code",
          }),
          {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
          },
        );

        console.log("Access Token:", data.access_token);
        console.log("ID Token:", data.id_token);

        if (window.opener) {
          window.close();
        } else {
          console.log("Không thể đóng cửa sổ do chính sách bảo mật.");
        }
      } catch (error) {
        console.error("Error exchanging auth code:", error.response.data);
      }
    },
    flow: "auth-code",
  });

  return (
    <div>
      <div className="signin w-[478px] mdd:w-[398px] lgg:h-fit lgg:w-[606px]">
        <div className="font-lato text-[20px] font-semibold">Sign in</div>
        <div className="mt-9 flex">
          <div>Email</div>
          <div>
            <img src={dausao} alt={dausao} />
          </div>
        </div>
        <div className="mr-5 flex items-center justify-between rounded-md border-2 mdd:mr-0 lgg:mr-0">
          <div className="m-[10px] w-3/4">
            <input
              className="w-full"
              type="text"
              placeholder="Email address"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <img className="pr-[10px]" src={tron} alt={tron} />
          </div>
        </div>
        <div className="mt-7 flex">
          <div>Password</div>
          <div>
            <img src={dausao} alt={dausao} />
          </div>
        </div>
        <div className="mr-5 flex items-center justify-between rounded-md border-2 mdd:mr-0 lgg:mr-0">
          <div className="m-[10px] w-3/4">
            <input
              className="w-full"
              type="text"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <img className="pr-[10px]" src={iconshow} alt={iconshow} />
          </div>
        </div>
        <div className="mr-5 mt-7 flex items-center justify-between mdd:mr-0 lgg:mr-0">
          <div className="flex items-center gap-1">
            <input type="checkbox" className="h-5 w-5" />

            <div className="font-lato text-[12px] text-[#262626]">
              Remember for 30 days
            </div>
          </div>
          <div className="font-lato text-[12px] text-[#4172DC]">
            Forgot password
          </div>
        </div>
        <button
          onClick={handleLoginAndFetchUser}
          className="mt-7 flex rounded-md bg-[#C4C4C4] px-[194px] py-[18px] font-lato text-[14px] uppercase text-white mdd:px-[173px] lgg:px-[277px]"
        >
          sign in
        </button>
        <div className="mt-3 flex h-5 items-center justify-between">
          <img
            className="w-[191.5px] mdd:w-[171.5px] lgg:w-[275.5px]"
            src={Horizontal}
            alt={Horizontal}
          />
          <div className="font-lato text-[14px] font-medium uppercase text-[#9D9D9D]">
            or
          </div>
          <img
            className="w-[191.5px] mdd:w-[171.5px] lgg:w-[275.5px]"
            src={Horizontal}
            alt={Horizontal}
          />
        </div>
        <GoogleLogin
          className="ml-16"
          onSuccess={(credentialResponse) => {
            const jwt = credentialResponse.credential; // Lấy JWT Token từ Google
            const payload = JSON.parse(atob(jwt.split(".")[1])); // Giải mã token
            console.log(
              "Tên người dùng nha:",
              decodeURIComponent(escape(payload.name)),
            );
            // Lấy tên người dùng
            setTimeout(() => {
              window.close(); // Đóng cửa sổ đăng nhập
            }, 2000);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />

        {/* <>
          <div>
            <h2>Danh sách người dùng</h2>
            <ul>
              {users.map((user) => (
                <li key={user.id}>
                  <strong>
                    {user.name.firstname} {user.name.lastname} {user.username}
                  </strong>
                  - {user.password}
                </li>
              ))}
            </ul>
          </div>
        </> */}
        <Dialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          email={email}
        ></Dialog>

        <button
          // onClick={() => login()}
          onClick={handleLogin}
          className="flex rounded-md bg-[#434343] px-[154px] py-[18px] font-lato text-[14px] text-white mdd:px-[133px] lgg:px-[235px]"
        >
          <img className="mr-1" src={logoGG} alt="Google Logo" />
          Sign in by Google
        </button>
        <div className="mt-4 hidden items-center mdd:flex lgg:flex">
          <img src={chamthang} alt={chamthang} />
          <div className="ml-1 font-lato text-[14px] font-bold text-[#FF2E00]">
            Sign up to save $9 for free shipping with Ausff company through
            australlian territory
          </div>
        </div>
        <div className="mt-4 flex items-center justify-center px-[106.5px] py-2 mdd:hidden lgg:hidden">
          <div className="font-lato text-[14px]">Don’t have an account? </div>
          <div
            onClick={toggoSignUp}
            className="ml-1 font-lato text-[16px] font-bold text-[#FF7A00]"
          >
            Sign Up
          </div>
        </div>
      </div>
    </div>
  );
};
SignIn.propTypes = {
  toggoSignUp: PropTypes.func.isRequired, // Xác định toggoSignUp phải là function và bắt buộc
};
export default SignIn;

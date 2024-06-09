"use client";
import { useSelector } from "react-redux";
import { writeUserData } from "../../../firebase.config";

export default function Login() {
  const store = useSelector((state) => state);
  console.log(store);

  return <div>LOGIN PAGE</div>;
}

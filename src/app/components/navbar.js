"use client";
import { useEffect, useState } from "react";
import "../components/styles/navbar.css";
import Image from "next/image";
import { IoLogoGameControllerB } from "react-icons/io";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import logo from "../images/logo.png";
import "aos/dist/aos.css";
import dynamic from "next/dynamic";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import swal from "sweetalert";
import { useAuth } from "../auth/login";
import axios from "axios";

const MyNavbar = () => {
  const [show, setShow] = useState(false);
  const [domain, setDomain] = useState("");
  const [tokenId, setTokenId] = useState("");
  const [inputError, setInputError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginBtnVisible, setLoginBtnVisible] = useState(true);
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const AOS = require("aos");
    AOS.init();
  }, []);

  const AOS = dynamic(() => import("aos"), {
    ssr: false,
  });


  const auth = useAuth();

  const signIn = async (username, tokenid) => {
    const regex = /\.mmit$/;
    if (!regex.test(domain) || !domain || !tokenId) {
      setInputError("Please fill all the fields");

      return;
    }
    setLoading(true);
    let response;
    try {
      response = await axios.get(`/api/sdk`, {
        params: {
          username: username,
          id: tokenid
        }
      });
    } catch (error) {
      console.error(error);
    }
    const uservalidator = response?.data?.data
    if (uservalidator.success == true) {
      setLoginBtnVisible(false);
      const user = domain.slice(0, -5);
      setUserName("welcome " + user)
      handleClose()
      setLoading(false);
    }
    else {
      swal("Error", `${uservalidator.message}`, "error");
      setInputError(uservalidator.message);
      setLoading(false);
    }
  };

  const onSubmit = async () => {
    auth.login({ domain, tokenId });
    signIn(domain, tokenId)
  };

  const handleClose = () => {
    setShow(false);
    setLoading(false);
    setDomain("");
    setTokenId("");
  };
  const logOutUser = () => {
    setUserName("")
    setLoginBtnVisible(true);
  };

  const handleShow = () => setShow(true);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div
          className="navbar-brand"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <Image src={logo} alt="logo" style={{ width: "200px", height: '40px' }} />
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="myList">

            <li className="nav-item">
              <IoLogoGameControllerB className="navIcons" />
            </li>

            <li className="nav-item">
              <BsTwitter className="navIcons" />
            </li>

            <li className="nav-item">
              <AiFillInstagram className="navIcons" />
            </li>
            <h2 className="text-white mt-2" style={{ fontSize: '18px' }}>{userName}</h2>

            <li className="nav-item">
              {loginBtnVisible ? (
                <Button className="btn btn-dark" onClick={handleShow}>
                  Login With MMIT Domain
                </Button>
              ) : (
                <>
                  <Button className="login-btn" onClick={logOutUser}>
                    Logout
                  </Button>
                </>
              )}
            </li>

            {loading ? (
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title className="text-light">
                    Insert Your MMIT Domain
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        type="text"
                        placeholder="Domain"
                        onChange={(e) => {
                          setDomain(e.target.value);
                          setInputError("");
                        }}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control
                        type="number"
                        placeholder="Token Id"
                        onChange={(e) => {
                          setTokenId(e.target.value);
                        }}
                      />
                    </Form.Group>

                    <p className="text-danger my-2">{inputError}</p>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="dark" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="dark" onClick={onSubmit}>
                    Login
                  </Button>
                </Modal.Footer>
              </Modal>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;

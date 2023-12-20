/* eslint-disable react/prop-types */
import { Button, Tooltip } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import theme from "../../../theme";
import { useGetUser } from "../../../hooks/getUserHook";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { logOutHandler } from "../../../redux/store.hook";

const NavBar = ({ type }) => {
  const [openNavBar, setOpenNavBar] = useState(false);
  const { isLoggedIn, user } = useGetUser();
  const isAdmin = user?.accountType?.toLowerCase() === "admin";

  return (
    <main className="">
      <nav className="hidden min-[980px]:flex  justify-between items-cnter w-full max-w-[1170p] mx-auto py-6">
        <div className="flex gap-5 itemscenter">
          <Link to={"/"} className="flex gap-5">
            <img src="/logo_v2.png" alt="logo" className="mainLogo" />
            <p className="font-bold self-end text-white font-Inter text-4xl">
              Bles Client Platform
            </p>
          </Link>
        </div>

        <div className="flex gap-4 self-end items-center">
          {isAdmin ? null : (
            <>
              {/* <Button
                variant="outlined"
                href="https://calendly.com/stas-sorokin"
                target="_blank"
                color="primaryInverse"
                style={{ borderimagesource: theme.palette.primary.mainGradient }}
              >
                BOOK APPOINTMENT
              </Button> */}
              <Button
                variant="outlined"
                href={"/user/services"}
                color="primaryInverse"
              >
                SHOW SERVICES
              </Button>

              {/* <Button
                variant="outlined"
                href={"/user/investments"}
                color="primaryInverse"
              >
                SHOW INVESTMENTS
              </Button> */}
              <Button
                variant="outlined"
                href={"/user/login?redirectTo=/user/dashboard"}
                color="primaryInverse"
              >
                LOGIN
              </Button>
            </>
          )}
          {isLoggedIn && (
            <Tooltip title="GO TO DASHBOARD" arrow>
              <Button
                variant="outlined"
                href="/user/dashboard"
                color="primaryInverse"
                style={{
                  borderimagesource: theme.palette.primary.mainGradient,
                }}
              >
                <AccountCircleIcon />
              </Button>
            </Tooltip>
          )}
          {isLoggedIn && (
            <Tooltip
              sx={{ textTransform: "capitalize !important" }}
              title={`log out ${type}`}
              arrow
            >
              <Button
                variant="outlined"
                color="primaryInverse"
                onClick={() => logOutHandler({ type })}
                style={{
                  borderimagesource: theme.palette.primary.mainGradient,
                }}
              >
                <LogoutIcon />
              </Button>
            </Tooltip>
          )}
        </div>
      </nav>

      <nav className="flex justify-between items-center py-4 min-[980px]:hidden">
        <Link to={"/"} className="w-14 z-[1000]">
          <img src="/logo_v2.png" alt="logo" className="mainLogo" />
        </Link>
        <button
          type="button"
          onClick={() => setOpenNavBar(!openNavBar)}
          aria-label="toggle mobile navigation menu"
          className="z-[1000] wfit flex1 flex flex-col items-end transition-all duration-700 ease-in-out"
        >
          <span
            className={`my-1 h-px bg-[#fff] transition-all duration-300 ease-linear ${
              openNavBar ? "w-8 rotate-45" : "w-9"
            }`}
          ></span>
          <span
            className={`my-1 h-px bg-[#fff] transition-all duration-300 ease-linear ${
              openNavBar ? "relative -top-2 w-8 -rotate-45" : "w-6"
            }`}
          ></span>
        </button>
      </nav>

      <aside
        className={` overflow-y-auto noScrollBar lg:hidden px-[5%] transition-all duration-500 flex-col itemscenter h-screen  gap-10 z-[99] fixed top0 left-0 w-full  bg-main-bg ${
          openNavBar
            ? "right0 w[70%] flex maxw-[400px] w-full top-0"
            : "-right[100vw] hidden -top-[100vh]"
        } `}
      >
        <div className="mt8 py-24">
          <div className="flex flex-col mb-6 gap4 itemscenter  text-white font-[500]">
            <div className="flex w-full flex-col self-center gap-9 mt-14 self-nd items-center">
              {isLoggedIn && (
                <Button
                  fullWidth
                  variant="outlined"
                  href="/user/dashboard"
                  color="primaryInverse"
                  style={{
                    borderimagesource: theme.palette.primary.mainGradient,
                  }}
                >
                  DASHBOARD
                </Button>
              )}
              {isAdmin ? null : (
                <>
                  {/* <Button fullWidth variant="outlined" color="primaryInverse">
                    BOOK APPOINTMENT
                  </Button> */}
                  <div className="flex flex-col gap-5">
                    <Button
                      fullWidth
                      variant="outlined"
                      href={"/user/services"}
                      color="primaryInverse"
                    >
                      SHOW SERVICES
                    </Button>
                    <Button
                      variant="outlined"
                      href={"/user/investments"}
                      color="primaryInverse"
                    >
                      SHOW INVESTMENTS
                    </Button>
                    <Button
                      variant="outlined"
                      href={"/user/login?redirectTo=/user/dashboard"}
                      color="primaryInverse"
                    >
                      LOGIN
                    </Button>
                  </div>
                </>
              )}
              {isLoggedIn && (
                <Button
                  onClick={() => logOutHandler({ type })}
                  fullWidth
                  variant="outlined"
                  color="primaryInverse"
                >
                  LOGOUT
                </Button>
              )}
            </div>
          </div>
        </div>
      </aside>
    </main>
  );
};

export default NavBar;

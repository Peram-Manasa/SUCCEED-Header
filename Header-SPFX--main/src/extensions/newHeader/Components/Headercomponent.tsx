import * as React from "react";
import "./Headercomponent.scss";
import Marquee from "react-fast-marquee";
import { AiOutlineSearch } from "react-icons/ai";


const Headercomponent = (props: any) => {
  console.log(props.siteabsUrl);


  const navItems: any[] = [
    { title: "Home", site: "/", realsitename: "Zelardemo" },
    {
      title: "Projects & clients",
      site: "projectsandclients",
      realsitename: "Projects & Clients",
    },
    { title: "Human Resources", site: "hr", realsitename: "HR" },
    {
      title: "Administration",
      site: "administration",
      realsitename: "Administration",
    },
    {
      title: "Sales and Marketing",
      site: "salesandmarketing",
      realsitename: "Sales & Marketing",
    },
    { title: "Finanace", site: "finance", realsitename: "Finanace" },
    {
      title: "Learning Management",
      site: "learningmanagement",
      realsitename: "Learning Management",
    },
    { title: "ZEA", site: "zea", realsitename: "zea" },
  ];

  const renderSwitch = (param: any) => {
    console.log(param);

    switch (props.sitename) {
      case param.realsitename:
        return param.realsitename === "Dev" ? (
          <div
            className="navItemActive"
            onClick={() =>
              window.open(
                `${props.siteabsUrl}${param.site}`,
                "_self"
              )
            }
          >
            {param.title}
          </div>
        ) : (
          <div
            className="navItemActive"
            onClick={() =>
              window.open(`${props.siteabsUrl}${param.site}`, "_self")
            }
          >
            {param.title}
          </div>
        );

      default:
        return param.realsitename === "Dev" ? (
          <div
            className="navItem"
            onClick={() =>
              window.open(
                `${props.siteabsUrl}/${param.site}`,
                "_self"
              )
            }
          >
            {param.title}
          </div>
        ) : (
          <div
            className="navItem"
            onClick={() =>
              window.open(`${props.siteabsUrl}/${param.site}`, "_self")
            }
          >
            {" "}
            {param.title}
          </div>
        );
    }
  };

  
  const [sbState, setSbState] = React.useState<any>(false);

  let wrapperRef = React.useRef(null);

  

  
  React.useEffect(() => {
    const checkifclickedoutside = (event: MouseEvent) => {
      if (
        sbState &&
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target)
      ) {
        setSbState(false);
      }
    };
    document.addEventListener("mousedown", checkifclickedoutside);
    return () => {
      document.removeEventListener("mousedown", checkifclickedoutside);
    };
  }, [sbState]);

  React.useEffect(() => {
    console.log(props.sitename);
  }, []);
  return (
    <>
      <div className={sbState ? "menubar" : "menubarclose"} ref={wrapperRef}>
        {props.items &&
          props.items?.map((x: any) => {
            return (
              <a href={x.url}>
                <div className="menuitem">
                  <a href={x.url}>{x.title}</a>
                </div>
              </a>
            );
          })}
        
      </div>

      <div
        className="Navbars"
        style={{
          backgroundImage: `url(${props.siteabsUrl}/SiteAssets/New%20Project.png)`,
        }}
      >
        <div className="profile">
          <img src={props.url} alt="Profilepic" />
          <div className="profiledetails">
            <p>{props.greet},</p>
            <p>{props.user}...</p>
          </div>
        </div>
        <div className="imgscroll">
          <Marquee>
            <div className="container">
              <div className="img2">
                <img
                  src={`${props.siteabsUrl}/SiteAssets/image1-removebg-preview.png`}
                />
              </div>
              <div className="img2">
                <img
                  src={`${props.siteabsUrl}/SiteAssets/Devops-removebg-preview.png`}
                />
              </div>
              <div className="img2">
                <img
                  src={`${props.siteabsUrl}/SiteAssets/image3-removebg-preview.png`}
                />
              </div>
              <div className="img2">
                <img
                  src={`${props.siteabsUrl}/SiteAssets/image4-removebg-preview.png`}
                />
              </div>
              <div className="img2">
                <img
                  src={`${props.siteabsUrl}/SiteAssets/Data_Integration-removebg-preview.png`}
                />
              </div>
              <div className="img2">
                <img
                  src={`${props.siteabsUrl}/SiteAssets/projectengineering-removebg-preview-removebg-preview.png`}
                />
              </div>
              <div className="img2">
                <img
                  src={`${props.siteabsUrl}/SiteAssets/open_policy_agent-removebg-preview.png`}
                />
              </div>
            </div>
          </Marquee>
        </div>
        <img
          className="img1"
          src="https://24cl8t.sharepoint.com/sites/Dev/SiteAssets/Zelarlogo.png"
          alt="Logo"
        ></img>
      </div>
      <div className="topnav">
        <ul>
          <li>
            <div className="navList">
              
              {navItems.map((x: any) => {
                return renderSwitch(x);
              })}
            </div>
          </li>
        </ul>
        <div className="searchBardiv">
          <form action="/_layouts/15/search.aspx/All" method="get">
            <input type="text" placeholder="Search.." name="q" />
          </form>
          <button className="submitbtn" type="submit">
            <a target="_blank">
              <AiOutlineSearch size={15} />
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Headercomponent;

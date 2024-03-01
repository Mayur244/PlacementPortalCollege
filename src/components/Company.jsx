import React, { useEffect, useState } from "react";
import "../Styles/Common.css";
import Sidebar from "../components/Sidebar";
import user from "../Assets/user_profile.png";
import search from "../Assets/search.png";
import "../Styles/Company.css";
// import dummy from "../Assets/dummy.png";
import company_logo from '../Assets/company_logo.png';
import {useNavigate} from 'react-router-dom';

const Company = () => {

  const companiesList = [
    {
      "icon":'https://api-ninjas-data.s3.us-west-2.amazonaws.com/logos/l21001dd759eb5d7858b23ee949eb5025f16f6fa1.png',
      "name":"PTC"
    },
    {
      "icon":"https://api-ninjas-data.s3.us-west-2.amazonaws.com/logos/l1076fa6e58cb921b147ffa24f087314a07213cb8.png",
      "name":"WorldLine",
    },
    {
      "icon":"https://api-ninjas-data.s3.us-west-2.amazonaws.com/logos/lefdcf6b7527c4c70f2d6e76adb9ce6efab9dbe8c.png",
      "name":"Persistent Systems",
    },
    {
      "icon":"https://api-ninjas-data.s3.us-west-2.amazonaws.com/logos/l4cd51f4447b27c293e273d6bb112bcd252268711.png",
      "name":"Dassault Systems",
    },
    {
      "icon":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Sify.png/330px-Sify.png",
      "name":"SIFY Technologies",
    },
    {
      "icon":"https://api-ninjas-data.s3.us-west-2.amazonaws.com/logos/l198bdb4a2a090923662d32b6c6152cfee12df3c3.png",
      "name":"Cognizant",
    },
    {
      "icon":"https://api-ninjas-data.s3.us-west-2.amazonaws.com/logos/lc0156f6bd3d26d5bb3b974372d2e2da4d5351034.png",
      "name":"Cimpress",
    },
    {
      "icon":"https://upload.wikimedia.org/wikipedia/commons/c/c1/Rockwell_Automation_Logo.png",
      "name":"Rockwell Automation",
    },
    {
      "icon":"https://download.logo.wine/logo/Xperi/Xperi-Logo.wine.png",
      "name":"XPERI",
    },
    {
      "icon":"https://seeklogo.com/images/T/tata-communications-logo-3EBEF394B3-seeklogo.com.png",
      "name":"TATA Communications",
    },
    {
      "icon":"https://imgee.s3.amazonaws.com/imgee/a0baca393d534736b152750c7bde97f1.png",
      "name":"Juspay",
    },
    {
      "icon":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW9PzqQVHGTTUYINRfySFqN4Ceshmw3LvJF9RcSCoq5YI4RTvRyO2AccHS5Cl3mRk-0Kc&usqp=CAU",
      "name":"Zensoft Services",
    },
    {
      "icon":"https://1000logos.net/wp-content/uploads/2022/06/Johnson-Controls-logo.png",
      "name":"Johnson Controls",
    },
    {
      "icon":"https://1000logos.net/wp-content/uploads/2023/04/Bank-of-New-York-Mellon-Logo.jpg",
      "name":"BNY Mellon",
    },
    {
      "icon":"https://1000logos.net/wp-content/uploads/2021/04/Accenture-logo.png",
      "name":"Accenture",
    },
    {
      "icon":"https://www.csodbrand.com/wp-content/uploads/2021/10/Cornerstone-Logo-Horizontal.png",
      "name":"Cornerstone",
    },
    {
      "icon":"https://jobs.vibhaga.com/wp-content/uploads/2018/08/Virtusa-Logo-2.jpg",
      "name":"Virtusa",
    },
    {
      "icon":"https://mma.prnewswire.com/media/1228338/Accolite_Logo_Grey.jpg?p=twitter",
      "name":"Accolite Digital",
    },
    {
      "icon":"https://1000logos.net/wp-content/uploads/2021/07/Jio-Logo.png",
      "name":"JIO",
    },
    {
      "icon":"https://seekvectorlogo.net/wp-content/uploads/2018/11/springer-nature-vector-logo.png",
      "name":"Springer Nature",
    },
    {
      "icon":"https://api-ninjas-data.s3.us-west-2.amazonaws.com/logos/l319f2de047c5d0998fcfcb29dfe08ee0e17fb90c.png",
      "name":"TCS",
    },
  ]
  const [q, setQ] = useState("");
  const [searchParam] = useState(["name"]);

  function searchItem(items) {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem]
            .toString()
            .toLowerCase()
            .indexOf(q.toLowerCase()) > -1
        );
      });
    });
  }

  const navigate = useNavigate();

  const handleClick = (data)=>{
    navigate("/students",{
      state:{
        company_selected:{data},
      }
    })
  }
  return (
    <div className="student_div">
      <Sidebar param={"companies"} />
      <div className="student_div_center">
        <div className="dashboard_top">
          <div className="search_bar_div">
            <input
              className="search_bar"
              type="text"
              placeholder="Seach Companies, Internships, Hackathons, or Students..."
              onChange={(e) => setQ(e.target.value)} value={q}
            />
            <div className="search_icon_div">
              <img src={search} alt="pic" className="search_icon" />
            </div>
          </div>
        </div>
        <div className="dashboard_bottom">
          <div className="card-container1">
          <h1 className="companies_title">List of companies that visit our campus</h1>
            <div className="cards1">
              {searchItem(companiesList).map((item, index) => {
                return (
                  <div key={index} className="card1" onClick={(e)=>{handleClick(item.name)}}>
                    <div className="company_logo_div">
                      <img src={item.icon} alt="pic" className="company_logo" />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;

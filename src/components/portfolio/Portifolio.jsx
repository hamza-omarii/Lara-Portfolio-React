import React, { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import { featuredPortfolio, webPortfolio, mobilePortfolio } from "../../data";
import "./portfolio.scss";

const Portifolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState(featuredPortfolio);

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;

      case "web":
        setData(webPortfolio);
        break;

      case "mobile":
        setData(mobilePortfolio);
        break;

      default:
        break;
    }
  }, [selected]);

  return (
    <div className="portifolio" id="portfolio">
      <h1>Portifolio</h1>
      <ul>
        {list.map((item) => {
          const { id, title } = item;
          return (
            <PortfolioList
              key={id}
              id={id}
              title={title}
              active={selected === item.id}
              setSelected={setSelected}
            />
          );
        })}
      </ul>

      <div className="container">
        {data.map((d) => {
          return (
            <div className="item" key={d.id}>
              <img src={d.img} alt="img" />
              <h3>{d.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portifolio;

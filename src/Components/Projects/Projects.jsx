import React from "react";
import "./Projects.css";
import { FaReact, FaNodeJs, Facss } from "react-icons/fa";
import task from "./task.png"
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  Sicss,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiNextdotjs
 
} from "react-icons/si";
import { DiCss3, DiMongodb, } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://user-images.githubusercontent.com/87424668/159942849-989cedb6-e9bd-4fb9-a767-dd973862d0c1.png"
                  alt="Pulseplus"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>FashionNova Clone</h2>
              <p>
                FashionNova is an E-Commerce website where you can buy any attire for both males and females.
              
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <SiJavascript />
              </div>
              <div>
                <a
                  href="https://fashion-nova-clone-seven.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Ritika11294/FashionNova-Clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://i.pinimg.com/564x/14/3b/88/143b880ed2a91278935ab02b0a1f2d5b.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>HomeToGo Clone</h2>
              <p>
                A Clone of web application for HomeToGo which is a vacation rental search website based out of USA.
              </p>
              <div>
                <SiExpress />
                <DiCss3 />
                <SiHtml5 />
                <SiJavascript />
                <FaNodeJs />
                <DiMongodb />
              </div>
              <div>
                <a
                  href="https://home2go-frontend-api.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Ritika11294/HomeToGo-Clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://user-images.githubusercontent.com/87424668/169654156-ab53c7bc-2534-4c52-8a88-0ba4370b3c48.png"
                  alt=""
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Clothing Website</h2>
              <p>
              It's an e-commerce web application that allows you to buy clothes online. It has a variety of categories, just visit the product listing page and you will see all the products, apply filters as per your need and in just a few clicks you can buy any products from the website.
              </p>
              <div>
                <FaReact />
                <DiCss3 />
                <SiHtml5 />
                <SiJavascript />
                <FaNodeJs />
                <DiMongodb />
                <SiExpress />
              </div>
              <div>
                <a
                  href="https://e-commerce-lime-theta.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Ritika11294/E-commerce"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://i.pinimg.com/originals/98/22/aa/9822aa6884cf5fdbc6f80a32adb34e48.png"
                  alt=""
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Weather App</h2>
              <p>
              It's an online web application where users can enter a location to see the weather forecast, icons that represent different weather conditions (such as a sun for a clear day or a cloud for a cloudy day), and temperature and humidity readings.
              </p>
              <div>
                <FaReact />
                <DiCss3 />
                <SiHtml5 />
                <SiJavascript />
              </div>
              <div>
                <a
                  href="https://weather-ritika.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Ritika11294/Weather-App"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

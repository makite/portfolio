import React, { useEffect, useState } from "react";
import TagCloud from "TagCloud";

const WordCloud = () => {
  const [isLoading, setLoad] = useState(true);

  const container = ".content";
  const texts = [
    "C++",
    "C#",
    "DevExpress",
    ".NET",
    "Blazor",
    "MSSQL",
    "IIS",
    "PHP",
    "MySQl",

    "React",
    "mongoDB",
    "Express",
    "NodeJS",
    "Redux",
    "HTML5",
    "CSS3",
    "JS",
    "Flutter",
    "Dart",
    "FireBase",
    "Git",
    "Linux",
    "Docker",
  ];
  const options = {
    radius: 300,
    // animation speed
    // slow, normal, fast
    maxSpeed: "fast",
    initSpeed: "fast",
    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,
    // interact with cursor move on mouse out
    keep: true,
  };
  //   to render wordcloud each time the page is reloaded
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const uniqueTexts = [...new Set(texts)];
  useEffect(() => {
    if (isLoading) {
      TagCloud(container, uniqueTexts, options);
      console.log("I fire once");
      setLoad(false);
    }
  }, [isLoading, uniqueTexts, options]); // Empty dependency array

  return (
    <div className="main">
      <span className="content"></span>
    </div>
  );
};

export default WordCloud;

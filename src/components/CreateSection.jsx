import React, { useEffect, useState } from "react";
const objectToQueryParam = (obj) => {
  const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
  return "?" + params.join("&");
};
function CreateSection(props) {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [memeData, setMeme] = useState(props.img);

  useEffect(() => {
    const createMeme = async () => {
      const params = {
        template_id: props.id,
        text0: topText,
        text1: bottomText,
        username: "hellozz",
        password: "hello@123",
      };
      const response = await fetch(
        `https://api.imgflip.com/caption_image${objectToQueryParam(params)}`
      );
      const json = await response.json();
      const dataUrl=json?.data?.url || false
      {dataUrl && setMeme(dataUrl);}
      // console.log(memeData);
    };
    createMeme();
  }, [topText, bottomText]);
  function downloadMeme() {
    const a = document.createElement("a");
    a.href = memeData;
    a.target='_blank'
    a.download = "meme.jpg";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  return (
    <div className="w-[90vw] m-10 rounded-lg flex h-[30rem] border-gray-900 border-solid border-2">
      {/* memeSection */}
      <div className="w-[50%] border-r-2 border-gray-800 border-solid flex items-center justify-center ">
        <img className="w-80  h-[22rem] " src={memeData} alt="" />
      </div>
      {/* Input Section */}
      <div className="flex align-center justify-center w-[50%] items-center">
        <div className="flex flex-col items-center">
          <input
            onChange={(e) => {
              setTopText(e.target.value);
            }}
            className=" py-3 pl-3 pr-10 border-2 border-gray-300 border-solid m-3 rounded-xl"
            type="text"
            placeholder="text-1"
          />
          <input
            onChange={(e) => {
              setBottomText(e.target.value);
            }}
            className=" py-3 pl-3 pr-10 border-2 border-gray-300 border-solid m-3 rounded-xl"
            type="text"
            placeholder="text-2"
          />
          <button
            onClick={downloadMeme}
            className="bg-cyan-400 rounded-lg py-3 w-fit px-5 "
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateSection;

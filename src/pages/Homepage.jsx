import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { fetchMemes } from "../api/memes";
import CreateSection from "../components/CreateSection";

function Homepage() {
  const [memeData, setMeme] = useState([]);
  const [selectedMeme, setSelectedMeme] = useState(null);
  useEffect(() => {
    fetchMemes().then((meme) => setMeme(meme.data.memes));
  });
  return (
    <div className=" flex-col w-[100vw] flex items-center">
      <h1 className="m-10 text-3xl font-semibold">MemeGenie</h1>
      <div>
        {!selectedMeme && (<CreateSection />)}
        {selectedMeme && (<CreateSection img={selectedMeme.url}  id={selectedMeme.id} />)}
      </div>
      <div className="ml-2 mr-4 flex flex-wrap">
        {memeData.map((e) => (
          <Card
            button={() => {
              setSelectedMeme(e);
            }}
            img={e.url}
          />
        ))}
      </div>
    </div>
  );
}

export default Homepage;

import React from "react";
import { CardFilledWithImage as Card } from "../../../components/Cards/Cards";
import { useRouter } from "next/router";

// const Card = ({ clickHandler }) => (
//   <CardFilledWithImage
//     clickHandler={clickHandler}
//     title="Yoga"
//     subTitle="234 learners"
//     src="yoga.jpg"
//   />
// );

const Index = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/search");
  };

  return (
    <div className="w-full">
      <h3 className="text-2xl text-primary p-2 font-semibold">Categories</h3>
      <div className="w-full grid grid-flow-row grid-cols-2 gap-6">
        <Card
          title="Yoga"
          subTitle="234 learners"
          src="yoga.jpg"
          clickHandler={handleRedirect}
        />
        <Card
          title="Music"
          subTitle="5673 learners"
          src="stock/music.jpg"
          clickHandler={handleRedirect}
        />
        <Card
          title="Dance"
          subTitle="1687 learners"
          src="stock/dance.jpg"
          clickHandler={handleRedirect}
        />
        <Card
          title="Stock Market"
          subTitle="13463 learners"
          src="stock/market.jpg"
          clickHandler={handleRedirect}
        />
        <Card
          title="Guitar"
          subTitle="1657 learners"
          src="stock/guitar.jpg"
          clickHandler={handleRedirect}
        />
        <Card
          title="Photography"
          subTitle="1355 learners"
          src="stock/photography.jpg"
          clickHandler={handleRedirect}
        />
      </div>
    </div>
  );
};

export default Index;

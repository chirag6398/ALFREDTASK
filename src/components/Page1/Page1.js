import React from "react";
import Nav from "./Nav";
import Banner from "./Banner";
import Filter from "./Filter";
import Slider from "./Slider";
import Footer from "./Footer";
export default function Page1() {
  let sliderData1 = [
    {
      title: "Tamil",
      subtitle: "for english speakers",
      contributors: "0",
      phase: "1",
    },
    { title: "French", subtitle: "for punjabi", contributors: "9", phase: "1" },
    {
      title: "Spanish",
      subtitle: "for english speakers",
      contributors: "4",
      phase: "1",
    },
    {
      title: "French",
      subtitle: "for Russians",
      contributors: "4",
      phase: "1",
    },
    {
      title: "Chinese",
      subtitle: "for Russians",
      contributors: "7",
      phase: "1",
    },
    {
      title: "English",
      subtitle: "for english speakers",
      contributors: "3",
      phase: "1",
    },
    { title: "French", subtitle: "for punjabi", contributors: "3", phase: "1" },
    {
      title: "English",
      subtitle: "for Russians",
      contributors: "8",
      phase: "1",
    },
    {
      title: "Chinese",
      subtitle: "for Russians",
      contributors: "2",
      phase: "1",
    },
    {
      title: "English",
      subtitle: "for english speakers",
      contributors: "7",
      phase: "1",
    },
    {
      title: "Spanish",
      subtitle: "for Russians",
      contributors: "1",
      phase: "1",
    },
    {
      title: "Chinese",
      subtitle: "for Russians",
      contributors: "2",
      phase: "1",
    },
    {
      title: "Spanish",
      subtitle: "for english speakers",
      contributors: "9",
      phase: "1",
    },
    {
      title: "Chinese",
      subtitle: "for Russians",
      contributors: "1",
      phase: "1",
    },
    {
      title: "English",
      subtitle: "for punjabi",
      contributors: "2",
      phase: "1",
    },
    {
      title: "Spanish",
      subtitle: "for Russians",
      contributors: "1",
      phase: "1",
    },
    {
      title: "English",
      subtitle: "for english speakers",
      contributors: "7",
      phase: "1",
    },
    { title: "French", subtitle: "for punjabi", contributors: "5", phase: "1" },
    {
      title: "Spanish",
      subtitle: "for Russians",
      contributors: "2",
      phase: "1",
    },
    {
      title: "English",
      subtitle: "for punjabi",
      contributors: "0",
      phase: "1",
    },
  ];
  return (
    <div>
      <Nav />
      <Banner />
      <Filter />
      <Slider
        cardData={sliderData1}
        title="Incubation Phase 1"
        subTitle="Courses not yet released"
      />
      <Slider
        cardData={sliderData1}
        title="Incubation Phase 2"
        subTitle="Courses released in Beta"
      />
      <Slider
        cardData={sliderData1}
        title="Incubation Phase 3"
        subTitle="Courses graduated from Beta"
      />
      <Footer />
    </div>
  );
}

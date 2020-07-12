import React from "react";
import { create } from "react-test-renderer";
import TitleCard from "../../components/title-card";

describe("<TitleCard />", () => {
  const propsTitleCard = {
    text: "",
    setVisible: () => console.log("setVisible")
  };
  const { text, setVisible } = propsTitleCard;
  const renderTitleCard = create(
    <TitleCard text={text} setVisible={setVisible} />
  );
  test("testing props of a component", () => {
    const { props } = renderTitleCard.root;
    expect(propsTitleCard).toEqual(props);
  });
});

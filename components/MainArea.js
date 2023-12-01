import React, { useState } from "react";
import InnerNavMenu from "../components/InnerNavMenu";
import DailyCheckIn from "./DailyCheckIn";
import ExampleComponent from "./ExampleComponent";
import ReturnButton from "./ReturnButton";
import NeedingHelp from "./NeedingHelp";

const MainArea = ({ currentLink, links }) => {
  const [selectedLink, setSelectedLink] = useState(null);

  const handlePressLink = (link) => {
    // Handle link press (you can navigate or perform other actions)
    console.log(`Pressed: ${link}`);
    setSelectedLink(link);
  };

  const handleReturn = () => {
    // Return to the previous state (null) when the button is clicked
    setSelectedLink(null);
  };

  if (selectedLink) {
    // If a link is selected, render the corresponding component
    switch (selectedLink) {
      case "Daily Check-In":
        return (
          <React.Fragment>
            <DailyCheckIn />
            <ReturnButton onPress={handleReturn} />
          </React.Fragment>
        );
      case "Needing Help":
        return (
          <React.Fragment>
            <NeedingHelp />
            <ReturnButton onPress={handleReturn} />
          </React.Fragment>
        );
      case "Example":
        return (
          <React.Fragment>
            <ExampleComponent />
            <ReturnButton onPress={handleReturn} />
          </React.Fragment>
        );
      // If a link is selected for a component that does not exist, it will simply show the return button
      default:
        return (
          <React.Fragment>
            <ReturnButton onPress={handleReturn} />
          </React.Fragment>
        );
    }
  } else {
    // If no link is selected, render InnerNavMenu
    return (
      <React.Fragment>
        <InnerNavMenu links={links} onPressLink={handlePressLink} />
        {/* Additional content for the default state can be added here */}
      </React.Fragment>
    );
  }
};

export default MainArea;

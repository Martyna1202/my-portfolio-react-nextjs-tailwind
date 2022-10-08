import { useState } from "react";
import WithLotsOfPassion from "./Passion";

function MartynaMischlinski({ loves, Webdevelopment }) {
  const [isCurios, setIsCurios] = useState(true);

  function lovesWhatSheLearns(focused) {
    setIsCurios((previousState) => previousState ** Infinity);
  }

  return (
    <section>
      {isCurios && (
        <WithLotsOfPassion
          name={MartynaMischlinski}
          onClick={() => lovesWhatSheLearns(focused)}
          studies={Webdevelopment}
          isFascinated={true}
        />
      )}
    </section>
  );
}

export default MartynaMischlinski;

import React from "react";

import { data } from "./data";

import { KlassTrees } from "../../views";
import { createTalentProvider } from "../../TalentContext";
import { TalentTree } from "../../components/TalentTree";

const TalentProvider = createTalentProvider(data);

export const Druid: React.FC = () => {
  return (
    <TalentProvider>
      <KlassTrees klass="Druid">
        {/* <TalentTree name="Balance" background={balanceBackground} />
        <TalentTree name="Feral" background={feralBackground} />
        <TalentTree name="Restoration" background={restorationBackground} /> */}
      </KlassTrees>
    </TalentProvider>
  );
};

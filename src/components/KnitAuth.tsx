import KnitAuth from "https://af1.getknit.dev/knit-ui-comp.js";
//import KnitAuth from "../assets/knit-web";

import type { EventName } from "@lit-labs/react";
import * as React from "react";
import { createComponent } from "@lit-labs/react";

const KnitWeb = createComponent({
  tagName: "knit-auth",
  elementClass: KnitAuth,
  react: React,
  events: {
    onNewSession: "onNewSession" as EventName<CustomEvent>,
    onSuccess: "onSuccess" as EventName<CustomEvent>,
  },
});

export { KnitWeb };

"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

type Props = {
  calLink: string;
  namespace?: string;
};

export function CalendarEmbed({ calLink, namespace = "strategimote" }: Props) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace });
      // Theme + brand styling so Cal.com matches our editorial palette.
      // Both light & dark themes share our editorial palette — we force
      // light mode via `theme: "light"` below, but Cal.com's types require
      // both entries to be present.
      const calVars = {
        "cal-brand": "#0F1B2E",
        "cal-text": "#0F1B2E",
        "cal-bg": "#F1EAD7",
        "cal-bg-emphasis": "#FAF6EC",
        "cal-border": "rgba(15,27,46,0.15)",
        "cal-border-emphasis": "rgba(15,27,46,0.3)",
      };
      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
        cssVarsPerTheme: {
          light: calVars,
          dark: calVars,
        },
      });
    })();
  }, [namespace]);

  return (
    <Cal
      namespace={namespace}
      calLink={calLink}
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{
        layout: "month_view",
        theme: "light",
      }}
    />
  );
}

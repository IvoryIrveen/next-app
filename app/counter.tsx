"use client";

import {useState} from "react";

export function Counter() {
  const [visits, setVisits] = useState(0);
  return <button type="button" onClick={() => setVisits(visits + 1)}>Logged {visits} visits</button>;
}

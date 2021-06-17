import React, { useEffect, useState } from "react"
//without dynamic import
const RemoteButton = React.lazy(() => import("joker/Button"))
//with dynamic import
/*
import { dynamicImport } from "./dynamicImport"
const RemoteButton = React.lazy(() => dynamicImport("joker/Button"))
*/
/* import ExternalTest from "./Test" */
const Test = () => {
  const [text, setText] = React.useState("")
  useEffect(() => {
    console.log(text)
  }, [text])
  return (
    <input value={text} onChange={({ target: { value } }) => setText(value)} />
  )
}

export default function Home() {
  const [isCsr, setCsr] = useState(false)
  useEffect(() => {
    setCsr(true)
  }, [])
  console.log("isCsr: ", isCsr)
  return (
    <>
      <div>
        Enter input here <Test />
      </div>
      {isCsr && (
        <React.Suspense fallback="Loading Button">
          <RemoteButton />
        </React.Suspense>
      )}
    </>
  )
}

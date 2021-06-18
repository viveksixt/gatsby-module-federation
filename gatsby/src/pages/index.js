import React, { useEffect, useState } from "react"
//without dynamic import
const RemoteButton = React.lazy(() => import("joker/Button"))
//import { InputServerSide } from "@gatsby-trials/joker"

//with dynamic import
//import { dynamicImport } from "./dynamicImport"
//const RemoteButton = React.lazy(() => dynamicImport("joker/Button"))

//load remoteEntry dynamically -- required for versioning
/* function loadComponent(scope, module) {
  return async () => {
    // Initializes the share scope. This fills it with known provided modules from this build and all remotes
    await __webpack_init_sharing__("default")
    const container = window[scope] // or get the container somewhere else
    // Initialize the container, it may provide shared modules
    await container.init(__webpack_share_scopes__.default)
    const factory = await window[scope].get(module)
    const Module = factory()
    return Module
  }
} */
/* import ExternalTest from "./Test" */
const Input = () => {
  const [text, setText] = React.useState("")
  useEffect(() => {
    console.log(text)
  }, [text])
  return (
    <input value={text} onChange={({ target: { value } }) => setText(value)} />
  )
}
export default function Home() {
  const [Csr, setCsr] = useState(false)
  useEffect(() => {
    setCsr(true)
  }, [])
  console.log("isCsr: ", Csr)
  return (
    <>
      <div>
        Enter Text here
        <Input />
      </div>
      {Csr && (
        <>
          <span>Client side only:</span>
          <React.Suspense fallback="Loading Button">
            <RemoteButton />
          </React.Suspense>
        </>
      )}
    </>
  )
}

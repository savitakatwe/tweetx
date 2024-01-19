import {PropsWithChildren} from "react";

function AuthTemplate({children}:PropsWithChildren) {
    return <>
        <h1>Keshav</h1>
        <div>{children}</div>
    </>
}

export default AuthTemplate

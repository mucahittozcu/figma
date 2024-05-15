"use client"
import { useState } from "react"

const App = () => {
const [userName,setUserName] = useState("")
const [password,setPassword] = useState("")

    return (
      <div style={{marginTop:"50px",display:"flex",justifyContent:"center" ,alignContent:"center"}}>
         <div className="w-[1440px] h-[873px] relative overflow-hidden bg-white">
      <div className="w-[649.33px] h-[1143.68px] rotate-12 absolute inset-y-0 -right-64 bg-[#cc221c]" />
      <div className="w-[883px] h-[1383px] absolute left-[541px] top-[-285px]" />
      <div className="w-[708px] h-[594px] absolute left-0 top-[246px] bg-white/90">
        <button className="w-[241.54px] h-[27.97px] absolute left-[57.88px] top-[407px] text-xl font-semibold text-left text-black/70">
          Forgot password
        </button>
        <button className="w-[130.35px] h-[27.97px] absolute left-[522.25px] top-[407px] text-xl font-semibold text-left text-black/70">
          Register
        </button>
        <div className="w-[313.99px] h-[60.74px]">
          <button className="w-[313.99px] h-[60.74px] absolute left-[57.51px] top-[324.4px] bg-[#da211c] border-0 border-black/70" />
          <button className="w-[118.81px] h-[28.47px] absolute left-[152.27px] top-[340.53px] text-[25px] font-bold text-left text-white/90">
            LOGIN
          </button>
        </div>
        <div className="w-[595.54px] h-[59.18px]">
          <input type="text" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} className="w-[595.54px] h-[59.18px] absolute left-[57.01px] top-[229.65px] bg-white/90 border border-black/[0.31] text-xl text-left" />
        </div>
        <div className="w-[595.3px] h-[58.85px]">
          <input type="text" placeholder="Username" value={userName} onChange={(event) => setUserName(event.target.value)} className="w-[595.3px] h-[58.85px] absolute left-[57.01px] top-[148.51px] text-left text-xl bg-white/90 border border-black/[0.31]" />
          
        </div>
        <p className="w-[468.41px] h-[94px] absolute left-[53.84px] top-[33px] text-[80px] font-bold text-left text-red-600">
          LOGIN
        </p>
      </div>
      <img
        src="image-20.png"
        className="w-[612px] h-[612px] absolute left-[719px] top-[130px] object-cover"
        style={{ boxShadow: "0px 0px 0px 0 rgba(0,0,0,0.25)" }}
      />
    </div>
      </div>
  )
}
export default App
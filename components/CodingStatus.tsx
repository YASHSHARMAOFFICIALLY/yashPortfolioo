"use client"
import { Code2 } from "lucide-react";
import { useEffect, useState } from "react";

type Status = "loading"| "active"|"idle"
interface StatusData {
    status:Status,
    todayTime: string;
    editor: string;
}

export default function CodingStatusDot(){
    const[data,setdata]=useState<StatusData>({
          status: "loading",
        todayTime: "",
        editor: "Vs-code ",
    })
    const [showTooltip, setShowTooltip] = useState(false);
    useEffect(()=>{
        const checkstatus = async() =>{
            try {
                const response = await fetch ("/api/coding-status");
                if(!response.ok){
                    setdata({status:"idle",todayTime:"",editor:"Vs-code"})
                    return
                }
                const result = await response.json()
                const editor = result.data?.editors?.[0]?.name || "Vs-code";
                const todayTime = result.data?.grand_total?.text || result.data?.categories?.[0]?.text || "";
                 if (result.is_currently_coding) {
                     setdata({ status: "active", todayTime, editor });
                         } else {
                    setdata({ status: "idle", todayTime, editor });
                    }
                    }catch {
                         setdata({ status: "idle", todayTime: "", editor: "Cursor" });
                            }
            };
            checkstatus()
            const interval = setInterval(checkstatus,30*1000)
            return () => clearInterval(interval);
        },[])
        const statusColors = {
            loading: "bg-yellow-500",
            active: "bg-green-500",
            idle: "bg-neutral-600",
            };

        const statusText = {
            loading: "Checking...",
            active: "Online",
            idle: "Offline",
            };

        const statusDotColors = {
            loading: "bg-yellow-500",
            active: "bg-green-500",
             idle: "bg-neutral-500",
            };
            return (
                 <div 
      className="absolute -bottom-0.5 -right-0.5 lg:bottom-0 lg:right-0 z-10"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-2 w-48 pointer-events-none">
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-3 shadow-xl">
            {/* Status Row */}
            <div className="flex items-center gap-2 text-sm">
              <span className={`w-2 h-2 rounded-full ${statusDotColors[data.status]}`}></span>
              <span className={data.status === "active" ? "text-green-400" : "text-neutral-400"}>
                {statusText[data.status]}
              </span>
              <span className="text-neutral-500">in</span>
              <Code2 className="w-3.5 h-3.5 text-neutral-400" />
              <span className="text-white font-medium">{data.editor}</span>
            </div>
            
            {/* Today's Time */}
            {data.todayTime && (
              <div className="mt-2 text-xs text-neutral-500">
                Today worked <span className="text-neutral-300 font-medium">{data.todayTime}</span>
              </div>
            )}
            
            {/* Arrow */}
            <div className="absolute -bottom-1 right-2 w-2 h-2 bg-neutral-900 border-r border-b border-neutral-800 transform rotate-45"></div>
          </div>
        </div>
      )}

      {/* Ping animation for active status */}
      {data.status === "active" && (
        <span className="absolute inline-flex h-4 w-4 lg:h-5 lg:w-5 rounded-full bg-green-400 opacity-75 animate-ping"></span>
      )}
      {/* Status dot */}
      <span
        className={`relative inline-flex h-4 w-4 lg:h-5 lg:w-5 rounded-full border-[3px] border-[#0a0a0a] cursor-pointer ${statusColors[data.status]}`}
      ></span>
    </div>
  );
}
            

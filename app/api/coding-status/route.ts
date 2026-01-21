import { NextResponse } from "next/server";


export async function GET() {
  const apiKey = process.env.WAKATIME_API_KEY;
  const username = process.env.WAKATIME_USERNAME || "yashsharma";

  if (!apiKey) {
    // Return mock data if no API key is configured
    return NextResponse.json({
      is_currently_coding: false,
      data: {
        categories: [],
        editors: [{ name: "Cursor", text: "" }],
        grand_total: { text: "" },
      },
    });
  }

  try {
    const authHeader = `Basic ${Buffer.from(apiKey).toString("base64")}`;

    // Fetch both: heartbeats (real-time) and today's summary
    const [heartbeatRes, summaryRes] = await Promise.all([
      // Get last heartbeat to check if currently coding
      fetch(
        `https://wakatime.com/api/v1/users/${username}/heartbeats?date=${new Date().toISOString().split('T')[0]}`,
        {
          headers: { Authorization: authHeader },
          next: { revalidate: 30 }, // Cache for 30 seconds
        }
      ),
      // Get today's summary for total time
      fetch(
        `https://wakatime.com/api/v1/users/${username}/status_bar/today`,
        {
          headers: { Authorization: authHeader },
          next: { revalidate: 60 }, // Cache for 60 seconds
        }
      ),
    ]);

    if (!summaryRes.ok) {
      throw new Error("WakaTime API error");
    }

    const summaryData = await summaryRes.json();
    
    // Check if currently coding based on last heartbeat
    let isCurrentlyCoding = false;
    
    if (heartbeatRes.ok) {
      const heartbeatData = await heartbeatRes.json();
      const heartbeats = heartbeatData.data || [];
      
      if (heartbeats.length > 0) {
        // Get the most recent heartbeat
        const lastHeartbeat = heartbeats[heartbeats.length - 1];
        const lastHeartbeatTime = new Date(lastHeartbeat.time * 1000);
        const now = new Date();
        const diffMinutes = (now.getTime() - lastHeartbeatTime.getTime()) / (1000 * 60);
        
        // If last heartbeat was within 5 minutes, user is actively coding
        isCurrentlyCoding = diffMinutes <= 5;
      }
    }

    return NextResponse.json({
      is_currently_coding: isCurrentlyCoding,
      data: summaryData.data,
    });
  } catch (error) {
    console.error("WakaTime API error:", error);
    return NextResponse.json(
      {
        is_currently_coding: false,
        data: {
          categories: [],
          editors: [{ name: "Cursor", text: "" }],
          grand_total: { text: "" },
        },
      },
      { status: 500 }
    );
  }
}
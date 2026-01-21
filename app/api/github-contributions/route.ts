import { NextResponse } from "next/server";

export async function GET() {
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  const GITHUB_USERNAME = process.env.GITHUB_USERNAME || "your-username";

  if (!GITHUB_TOKEN) {
    return NextResponse.json(
      { error: "GitHub token not configured" },
      { status: 500 }
    );
  }

  const query = `
    query($userName:String!) {
      user(login: $userName) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: { userName: GITHUB_USERNAME },
      }),
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    const data = await response.json();

    if (data.errors) {
      console.error("GitHub API errors:", data.errors);
      return NextResponse.json(
        { error: "Failed to fetch GitHub data" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      data.data.user.contributionsCollection.contributionCalendar
    );
  } catch (error) {
    console.error("Error fetching GitHub contributions:", error);
    return NextResponse.json(
      { error: "Failed to fetch contributions" },
      { status: 500 }
    );
  }
}
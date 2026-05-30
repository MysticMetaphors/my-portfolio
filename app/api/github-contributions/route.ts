import { NextResponse } from "next/server";

const GITHUB_API = "https://api.github.com/graphql";

const QUERY = `
  query($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            firstDay
            contributionDays {
              date
              contributionCount
              weekday
            }
          }
        }
      }
    }
  }
`;

export async function GET() {
  const token = process.env.GITHUB_PROFILE_TOKEN;
  const username = process.env.GITHUB_USERNAME ?? "MysticMetaphors";

  if (!token) {
    return NextResponse.json(
      { error: "GITHUB_PROFILE_TOKEN is not set" },
      { status: 500 }
    );
  }

  const res = await fetch(GITHUB_API, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: QUERY, variables: { username } }),
    next: { revalidate: 3600 }, // cache for 1 hour
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: "GitHub API request failed", status: res.status },
      { status: 500 }
    );
  }

  const json = await res.json();

  if (json.errors) {
    return NextResponse.json(
      { error: json.errors[0]?.message ?? "GraphQL error" },
      { status: 500 }
    );
  }

  const calendar =
    json.data?.user?.contributionsCollection?.contributionCalendar;

  if (!calendar) {
    return NextResponse.json(
      { error: "Could not read contribution calendar" },
      { status: 404 }
    );
  }

  return NextResponse.json({
    totalContributions: calendar.totalContributions,
    weeks: calendar.weeks,
  });
}
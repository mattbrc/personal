const clientId = process.env.STRAVA_CLIENT_ID;
const clientSecret = process.env.STRAVA_CLIENT_SECRET;
const refreshToken = process.env.STRAVA_REFRESH_TOKEN;
const athleteId = 7445195;

const TOKEN_ENDPOINT = "https://www.strava.com/oauth/token";
const ATHLETE_ENDPOINT = `https://www.strava.com/api/v3/athletes/${athleteId}`;

export const getAccessToken = async () => {
  const body = JSON.stringify({
    client_id: clientId,
    client_secret: clientSecret,
    refresh_token: refreshToken,
    grant_type: "refresh_token",
  });

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body,
  });

  return response.json();
};

export const getActivities = async () => {
  const { access_token: accessToken } = await getAccessToken();

  const response = await fetch(`${ATHLETE_ENDPOINT}/activities/access_token=${accessToken}`);
  const json = await response.json();

  //const publicActivities = json.filter((activity: ActivityType) => activity.visibility === "everyone");

  return json;
}
const {
  SHEET_KEY,
  JIRA_URL,
  QUERY,
  JIRA_USER,
  JIRA_PASSWORD,
  TEAM_LABELS,
  PROJECTS,
  JIRA_BOARD_ID,
  SPRINT_BLACKLIST
} = process.env;

module.exports = {
  SHEET_KEY: SHEET_KEY,
  JIRA_URL: JIRA_URL,
  QUERY: QUERY,
  JIRA_USER: JIRA_USER,
  JIRA_PASSWORD: JIRA_PASSWORD,
  JIRA_BOARD_ID: JIRA_BOARD_ID,
  TEAM_LABELS: TEAM_LABELS ? TEAM_LABELS.split(',') : undefined,
  PROJECTS: PROJECTS ? PROJECTS.split(',') : undefined,
  maxCol: 9,
  credentials: require('../credentials.json'),
  SPRINT_BLACKLIST: SPRINT_BLACKLIST ? SPRINT_BLACKLIST.split(',') : undefined,
};

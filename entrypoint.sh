#!/bin/sh

JSON_STRING='window.configs = { \
  "REACT_APP_TITLE":"'"${REACT_APP_TITLE}"'", \
  "REACT_APP_BOT_SLUG":"'"${REACT_APP_BOT_SLUG}"'", \
  "REACT_APP_BOT_BASE_URL":"'"${REACT_APP_BOT_BASE_URL}"'", \
  "REACT_APP_BOT_NAME":"'"${REACT_APP_BOT_NAME}"'", \
  "REACT_APP_BOT_DESCRIPTION":"'"${REACT_APP_BOT_DESCRIPTION}"'", \
  "REACT_APP_BOT_IMAGE_URL":"'"${REACT_APP_BOT_IMAGE_URL}"'", \
  "REACT_APP_BOT_WELCOME_MESSAGE":"'"${REACT_APP_BOT_WELCOME_MESSAGE}"'", \
  "REACT_APP_BOT_THEME_COLOR":"'"${REACT_APP_BOT_THEME_COLOR}"'", \
}'

if [[ "$OSTYPE" == "darwin"* ]]; then
  sed -i "" "s@// CONFIGURATIONS_PLACEHOLDER@${JSON_STRING}@" /usr/share/nginx/html/index.html
else
  sed -i "s@// CONFIGURATIONS_PLACEHOLDER@${JSON_STRING}@" /usr/share/nginx/html/index.html
fi

echo "############# Done"

/usr/sbin/nginx -g "daemon off;"

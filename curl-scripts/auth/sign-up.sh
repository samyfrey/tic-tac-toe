# EMAIL=sam1@ex.com PWD=sam1 sh curl-scripts/auth/sign-up.sh

curl "https://tic-tac-toe-api-production.herokuapp.com/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
      "credentials":{
        "email": "'"${EMAIL}"'",
        "password": "'"${PWD}"'",
        "password_confirmation": "'"${PWD}"'"

      }
    }'

echo


# # $ EMAIL=sam1@ex.com PWD=sam1 sh curl-scripts/auth/sign-up.sh
# HTTP/1.1 201 Created
# Server: Cowboy
# Connection: keep-alive
# X-Powered-By: Express
# Access-Control-Allow-Origin: *
# Content-Type: application/json; charset=utf-8
# Content-Length: 151
# Etag: W/"97-MAn7Ozk8vbkBY/+PXHn/FbC9TeQ"
# Date: Sat, 09 Oct 2021 20:19:01 GMT
# Via: 1.1 vegur

# {"user":{"_id":"6161f935dd33460017174d93","email":"sam1@ex.com","createdAt":"2021-10-09T20:19:01.714Z","updatedAt":"2021-10-09T20:19:01.714Z","__v":0}}

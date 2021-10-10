# TOKEN=30f03acd5a81d09ca9c3d9b47310d344 sh curl-scripts/auth/sign-out.sh

curl "https://tic-tac-toe-api-production.herokuapp.com/sign-out" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \


echo


# # $ EMAIL=sam1@gmail.com PWD=sam1 sh curl-scripts/auth/sign-up.sh
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

# {"user":{"_id":"6162338dacd86c0017f7bd86","email":"sam1@gmail.com","createdAt":"2021-10-10T00:27:57.314Z","updatedAt":"2021-10-10T00:27:57.314Z","__v":0}}

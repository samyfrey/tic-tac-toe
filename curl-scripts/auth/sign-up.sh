# EMAIL=sam3@gmail.com PWD=sam3 sh curl-scripts/auth/sign-up.sh

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


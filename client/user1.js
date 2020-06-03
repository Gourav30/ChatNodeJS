// connecting with sockets.
const socket = io('http://localhost:3000');

const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6InIxSGtjWEs5TSIsImlhdCI6MTUyMjI0ODE1Njc4MywiZXhwIjoxNTIyMzM0NTU2LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7Im1vYmlsZU51bWJlciI6OTg3NDU4OTk2NiwiZW1haWwiOiJ4eXpAZ21haWwuY29tIiwibGFzdE5hbWUiOiJYeXoiLCJmaXJzdE5hbWUiOiJNciIsInVzZXJJZCI6IkgxcE9RR1k5TSJ9fQ.GJPmnMkOam1MHak9UA1iXF88VoIYjuKFhHud4qJdZDQeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IldJUlBZWU0yUCIsImlhdCI6MTU5MTEyNDA4OTk4MSwiZXhwIjoxOTg5NzY5MTEsInN1YiI6ImF1dGhUb2tlbiIsImlzcyI6ImVkQ2hhdCIsImRhdGEiOnsidXNlcklkIjoidTdibFBoM2FQIiwiZmlyc3ROYW1lIjoiR291cmF2IiwibGFzdE5hbWUiOiJLdW1hciIsImVtYWlsIjoiZ291cmF2QGdvdXJhdi5jb20iLCJtb2JpbGVOdW1iZXIiOjk4MTA3OTIzODN9fQ.kEGQl8O2eS5L7QHe4CepGxOhamrCPOMlnQWthsERoWc"
const userId = "u7blPh3aP"

let chatSocket = () => {

    socket.on('verifyUser', (data) => {

        console.log("Socket trying to verify the user")
        socket.emit("set-user", authToken)
    })

    socket.on(userId, (data) => {
        console.log("You have received a message")
        console.log(data)
    })
}

chatSocket();
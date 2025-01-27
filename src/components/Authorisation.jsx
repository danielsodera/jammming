import React from "react";

export default function Authorization(){

    let client_id = 'ed6e5dfe76ec4ea3ad04fa5722bffdd7';
    let redirect_uri = 'http://localhost:5173';
    let app = express();


    app.get('/login', function(req, res) {

        let state = generateRandomString(16);
        let scope = 'user-read-private user-read-email';

        res.redirect('https://accounts.spotify.com/authorise?' + queryString.stringify({
            response_type: 'code',
            client_id: client_id,
            scope: scope,
            redirect_uri: redirect_uri,
            state: state
        }));
    });


    return (
        <>
        </>
    )
}
const BASE_URL = "http://localhost:3000/"
var ACCESS_TOKEN = window.localStorage.getItem("ACCESS_TOKEN");


async function apiCall(url, method = 'GET', body, history) {
    let completeUrl = BASE_URL + url
    if (ACCESS_TOKEN && !url.includes("oauth"))
        completeUrl = completeUrl + "?access_token=" + ACCESS_TOKEN

    let headers = {
        "content-type": "application/json",
        "Authorization": 'Basic ' + ACCESS_TOKEN
    }
    let response = '';
    try {
        if (method === 'GET' || method === 'HEAD') {
            response = await fetch(completeUrl, { method, headers })
        } else {
            response = await fetch(completeUrl, { method, body: JSON.stringify(body), headers })
        }
        if (response.status === 401) {
            clearAccessToken()
            if (history !== undefined) {
                history.replace("/login")
            }
        }
    } catch (e) {
        console.log("hahahha ", e)
    }
    // try {
    //     if (CHANGE_PASSWORD_REDIRECT != undefined || CHANGE_PASSWORD_REDIRECT != null) {
    //         history.push("/resetpassword");
    //     }
    // } catch (e) {
    //     console.log("hahahha " + e)
    // }
    return response
}

function clearAccessToken(token) {
    ACCESS_TOKEN = null
    window.localStorage.removeItem("ACCESS_TOKEN");
}

function isLoggedIn() {
    if (ACCESS_TOKEN) {
        return true;
    }
    return false
}

export {
    apiCall, isLoggedIn, clearAccessToken
}
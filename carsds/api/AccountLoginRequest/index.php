<?php
// This API requires Guzzle.
// You can install Guzzle using Composer.
require '../vendor/autoload.php';

if (!isset($_GET['username']) || !isset($_GET['password'])) {
    $message = 'Invalid parameters.';
    $response = array('success' => False, 'detail' => $message);
    echo json_encode($response);
    exit();
}

$username = $_GET['username'];
$password = $_GET['password'];

// Test the credentials against Sunrise database.
function sendRequest($username, $password) {
    $client = new GuzzleHttp\Client(['base_uri' => 'https://toontastic.sunrise.games']);

    $request = $client->request('POST', '/api/AccountLoginRequest.php', [
        'form_params' => [
            'username' => $username,
            'password' => $password
        ],

        // TODO: FIXME
        'verify' => False
    ]);

    $response = $request->getBody()->getContents();
    return $response;
}

// Return our result from the login request.
$resultData = sendRequest($username, $password);

// TODO: Sunrise's login response does not match the one for World of Cars.
echo '<AccountLoginResponse><success>true</success></AccountLoginResponse>';
?>
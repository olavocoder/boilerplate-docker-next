<?php

function register_routes()
{
    register_rest_route('wp/v2', '/get-common-components/', array(
        'methods' => 'GET',
        'callback' => 'get_common_components'
    ));
}

function get_common_components()
{

    $common_components =  array(
        'header' => get_field('header-configs', 'options'),
        'footer' => get_field('footer-configs', 'options'),
    );

    wp_send_json($common_components);
}

add_action('rest_api_init', 'register_routes');

<?php
if (function_exists('acf_add_options_page')) {
    acf_add_options_page(array(
        'page_title'     => 'Avançado',
        'menu_title'    => 'Avançado',
        'menu_slug'     => 'advanced',
        'capability'    => 'edit_posts',
        'redirect'        => false,
        'icon_url'        => 'dashicons-admin-generic',
        'menu_position'    => 16,
        'show_in_rest'    => true,
    ));
}



// Rotas para obter informações de acfs de configuração
function get_acf_group_by_id($data)
{
    $acf_data = get_field($data['id'], 'option');
    return $acf_data;
}


add_filter('http_request_host_is_external', 'allow_my_custom_host', 10, 3);
function allow_my_custom_host($allow, $host, $url)
{
    if ($host == 'my-update-server')
        $allow = true;
    return $allow;
}


function register_config_routes()
{
    register_rest_route('groups', '/configs/(?P<id>[a-zA-Z0-9-]+)', array(
        'methods'    => WP_REST_Server::READABLE,
        'callback'    => 'get_acf_group_by_id'
    ));
}

add_action('rest_api_init', 'register_config_routes');

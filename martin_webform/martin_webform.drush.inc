<?php

function martin_webform_drush_command(){
    $items['test-webform'] = array(
        'description' => "Test webform function",
        'aliases' => array('mwe'),
    );
    return $items;
}

function drush_martin_webform_test_webform(){
    martin_webform_cron();
}

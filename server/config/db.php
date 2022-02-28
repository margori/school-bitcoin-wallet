<?php

var_dump("dddsd");

$host = getenv('MYSQL_HOST');
$db = getenv('MYSQL_DATABASE');
$user = getenv('MYSQL_USER');
$pass = getenv('MYSQL_PASSWORD');

return [
    'class' => 'yii\db\Connection',
    'dsn' => "mysql:host=$host;dbname=$db",
    'username' => $user,
    'password' => $pass,
    'charset' => 'utf8',

    // Schema cache options (for production environment)
    //'enableSchemaCache' => true,
    //'schemaCacheDuration' => 60,
    //'schemaCache' => 'cache',
];

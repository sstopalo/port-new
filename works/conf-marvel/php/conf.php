<?php
header('Content-Type: text/html; charset=utf-8');

require_once 'Medoo.php';
use Medoo\Medoo;



$db_user='newfs';
$db_name='specproj';
$db_pass='CxVtd5RIyvryz1tK1rL5';
$db_host='mysql-forbes.as.local';




$db = new Medoo([
	// required
	'database_type' => 'mysql',
	'database_name' => $db_name,
	'server' => $db_host,
	'username' => $db_user,
	'password' => $db_pass,

	// [optional]
	'charset' => 'utf8',
	'port' => 3306,

	// [optional] Table prefix
	//'prefix' => 'PREFIX_',

	// [optional] Enable logging (Logging is disabled by default for better performance)
	//'logging' => true,

	// [optional] MySQL socket (shouldn't be used with server and port)
	//'socket' => '/tmp/mysql.sock',

	// [optional] driver_option for connection, read more from http://www.php.net/manual/en/pdo.setattribute.php
//	'option' => [
//		PDO::ATTR_CASE => PDO::CASE_NATURAL
//	],

	// [optional] Medoo will execute those commands after connected to the database for initialization
//	'command' => [
//		'SET SQL_MODE=ANSI_QUOTES'
//	]
]);





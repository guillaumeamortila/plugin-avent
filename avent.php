<?php
/**
 * @package Calendrier Avent
 * @version 1.0
 */
/*
Plugin Name: Calendrier de l'Avent
Plugin URI: http://wordpress.org/plugins/pop-up/
Description: Affichage d'une surprise chaque jour de l'avent à l'arrivée sur le site.
Author: Guillaume Amortila
Version: 1.0
Author URI: http://guillaume-amortila/
Text Domain: wp_text
*/

function my_func_enqueue_scripts()
{
	wp_enqueue_style( 'style', plugins_url('avent/inc/style.css'));
	wp_enqueue_script( 'script', plugins_url('avent/inc/script.js'), ['jquery'], true);
}

add_action( 'wp_enqueue_scripts', 'my_func_enqueue_scripts');


?>

<div id='popup-avent'>
	<div id='popup-avent-block'>
		<img class='pictkdo' id='kdoopen' src='http://p8.storage.canalblog.com/83/24/1271466/100419009_o.png' alt='<?php _e("Christmas Gift","wp_text") ?>'>
		<img class='pictkdo' id='kdoclose' src='http://www.coodyssee.fr/wp-content/blogs.dir/1/files/2014/12/Cadeau.png' alt='<?php _e("Christmas Gift","wp_text") ?>'>
		<img id='fond' src='http://chouky39.c.h.pic.centerblog.net/eb4ed31a.gif' alt='<?php _e("Christmas Gift","wp_text") ?>'>
		<div id="txtavt">
			<br>
			<h3><?php _e("Advent is now","wp_text") ?></h3>
			<p><?php _e("Be patient, Christmas is coming !","wp_text") ?></p>
			<p id="phrase"><?php _e("There are only","wp_text") ?><span id="days2go"></span><?php _e("days before Jesus born","wp_text") ?></p>
		</div>
		<div id='popup-close'>x</div>
	</div>
</div>

<?php

function wp_trad_init() {
	load_plugin_textdomain(
		'wp_text',
		false,
		dirname( plugin_basename( __FILE__ ) ) . '/languages'
	);
}
add_action( 'plugins_loaded', 'wp_trad_init' );







<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'kantl833');

/** MySQL database username */
define('DB_USER', 'kantl833');

/** MySQL database password */
define('DB_PASSWORD', 'FRhb9rnG');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'CWD7v.exsC>|i~yG6/v`%E^+.3?D(:&:;bi$xSVl|kc+RtU|^(:F{[Hc))|c0~Uu');
define('SECURE_AUTH_KEY',  'd,+aUzH@|z/|1SpP3d%1Z?@odc]V&v6`Aay+@b4IJX-!-+V8bAN(lJG4F^=5-NqY');
define('LOGGED_IN_KEY',    'j.u&crGOuhD/K7!|kn9;!:=-lC=8kl7yikE4n#[EJX|A`T6|`f:PreE;~(^}::{v');
define('NONCE_KEY',        '8k9NvCkw?W/T.aKIcuZDp;bwvlLY~Vg!]yBsdGZY/|IC$<RoH5S#-R#&JFj)p4Bs');
define('AUTH_SALT',        'h-+BhC ||E_4R#XNeaTTR<ttZb1yJ[+Euw_ #:r2 MoRe2NxfM0ITQ/1,*Zi8T<e');
define('SECURE_AUTH_SALT', 'FE- /X[lV{OV#(c0<BpfH98pVPVba-(vf5_OD&&:wc^-R++de#~x=>kluwIfp$ck');
define('LOGGED_IN_SALT',   '+-R}p-5gXkq}N*)g4TJ%x-D7qVR6*#01D-&8<XBI+xDWm^hcXubO-yj2!H=<$ ue');
define('NONCE_SALT',       'wh+z|2!nCj.aCDBY=b[KA$yYt/7I+q^rcF^w]OK|}0Z~|Ftog*]}c`4-Lwl{FDg?');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_interlab';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

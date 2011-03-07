<?

$assets = array();

if($phonegap_settings['debug'])
{
  $assets[] = array('src'=>PHONEGAP_VPATH."/devkit/support.js");
}
if(!browser_is('phonegap') || browser_is('iphone_simulator'))
{
  $assets[] = array('src'=>PHONEGAP_VPATH."/simulator/simulator.js");
}

if(browser_is('safari'))
{
  $assets[] = array('src'=>PHONEGAP_VPATH."/simulator/console.js");
}

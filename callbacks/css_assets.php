<?


$assets = array();
if(!browser_is('phonegap'))
{
  $assets[] = array('src'=>PHONEGAP_VPATH."/simulator/simulator.css");
}

const { sh, isCasual, hasErr } = require('../../helpers')

const PATH_TO_CONFIG = '$HOME/.config/redshift.conf'
exports.setUpRedshift = async function installYayPrograms () {
  if (isCasual || await hasErr('redshift -V')) {
    return
  }

  await sh(`
rm -rf ${PATH_TO_CONFIG}
touch ${PATH_TO_CONFIG}
tee -a ${PATH_TO_CONFIG} << EOF
[redshift]
temp-day=5500
temp-night=5500
fade=1
gamma=1
location-provider=manual
adjustment-method=randr

[manual]
lat=55.75
lon=37.61

[randr]
screen=0
EOF
`)
}


exports.REDSHIFT_GTK = 'redshift-gtk-git'
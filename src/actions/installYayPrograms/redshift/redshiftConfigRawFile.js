exports.path = '$HOME/.config/redshift.conf'
exports.body = `
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
screen=0`
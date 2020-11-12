const { sh } = require('../../helpers')
const fixGrubForRu = require('./fixGrubForRu')

module.exports = async function addingLocalization () {
// @TODO here something break down the system!
//   await fixGrubForRu()
//   await sh(`
// sudo sed -i "/ru_RU.UTF-8 UTF-8/"'s/^#//' /etc/locale.gen  # uncomment ru locale
// sudo sed -i "/en_US.UTF-8 UTF-8/"'s/^#//' /etc/locale.gen  # uncomment en locale
// sudo /usr/sbin/locale-gen
// `)
}
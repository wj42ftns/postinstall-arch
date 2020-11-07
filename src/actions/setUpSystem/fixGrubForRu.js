const { sh, hasNotErr } = require('../../helpers')

module.exports = async function fixGrubForRu () {
  if (await hasNotErr('sudo stat /boot/grub/locale/ru.gmo')) {
    return
  }
  // from YouTube found this for fixing something in grub: " Ещё добавьте по исправлению загрузчика Grub -https://archlinux.org.ru/forum/topic/19444/?page=2 "
  await sh(`
mkdir -p /boot/grub/locale
sudo cp /usr/share/locale/ru/LC_MESSAGES/grub.mo /boot/grub/locale/ru.gmo
`)
}

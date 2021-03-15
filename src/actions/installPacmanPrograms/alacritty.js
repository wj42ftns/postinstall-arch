const { sh, hasErr } = require('../../helpers')

exports.setUpAlacritty = async function setUpAlacritty () {
  if (await hasErr('alacritty --version')) {
    return
  }

  await sh(`
mkdir -p $HOME/.config/alacritty/
wget -P $HOME/.config/alacritty/ https://raw.githubusercontent.com/exah-io/minimal-arch-linux/master/dotfiles/alacritty/alacritty.yml

rm -rf $HOME/.config/alacritty/alacritty.yml
touch $HOME/.config/alacritty/alacritty.yml
tee -a $HOME/.config/alacritty/alacritty.yml << EOF
# Configuration for Alacritty, the GPU enhanced terminal emulator.

# Any items in the \`env\` entry below will be added as
# environment variables. Some entries may override variables
# set by alacritty itself.
env:
  # TERM variable
  #
  # This value is used to set the \`$TERM\` environment variable for
  # each instance of Alacritty. If it is not present, alacritty will
  # check the local terminfo database and use \`alacritty\` if it is
  # available, otherwise \`xterm-256color\` is used.
  TERM: alacritty
  LANG: "en_US.UTF-8"
  LC_CTYPE: en_US.UTF-8
window:
  # Window dimensions (changes require restart)
  #
  # Specified in number of columns/lines, not pixels.
  # If both are \`0\`, this setting is ignored.
  dimensions:
    columns: 113
    lines: 31
      # If the position is not set, the window manager will handle the placement.
  position:
    x: 0
    y: 0
  # Window padding (changes require restart)
  #
  # Blank space added around the window in pixels. This padding is scaled
  # by DPI and the specified value is always added at both opposing sides.
  #padding:
  #  x: 0
  #  y: 0
  # Spread additional padding evenly around the terminal content.
  #dynamic_padding: false
  # Window decorations
  #
  # Values for \`decorations\`:
  #     - full: Borders and title bar
  #     - none: Neither borders nor title bar
  #
  # Values for \`decorations\` (macOS only):
  #     - transparent: Title bar, transparent background and title bar buttons
  #     - buttonless: Title bar, transparent background, but no title bar buttons
  #decorations: full
  # Startup Mode (changes require restart)
  #
  # Values for \`startup_mode\`:
  #   - Windowed
  #   - Maximized
  #   - Fullscreen
  #
  # Values for \`startup_mode\` (macOS only):
  #   - SimpleFullscreen
  #startup_mode: Windowed
  # Window title
  #title: Alacritty
  # Window class (Linux/BSD only):
  #class:
  # Application instance name
  #instance: Alacritty
  # General application class
  #general: Alacritty
  # GTK theme variant (Linux/BSD only)
  #
  # Override the variant of the GTK theme. Commonly supported values are \`dark\` and \`light\`.
  # Set this to \`None\` to use the default theme variant.
  #gtk_theme_variant: None
  #scrolling:
  # Maximum number of lines in the scrollback buffer.
  # Specifying '0' will disable scrolling.
  #history: 10000
  # Number of lines the viewport will move for every line scrolled when
  # scrollback is enabled (history > 0).
  #multiplier: 3

# Font configuration
font:
  # Normal (roman) font face
  normal:
    # Font family
    #
    # Default:
    #   - (macOS) Menlo
    #   - (Linux/BSD) monospace
    #   - (Windows) Consolas
    # family: "Terminess Powerline"
    # The \`style\` can be specified to pick a specific face.
    style: Regular
    # Bold font face
    #bold:
    # Font family
    #
    # If the bold family is not specified, it will fall back to the
    # value specified for the normal font.
    #family: monospace
    # The \`style\` can be specified to pick a specific face.
    #style: Bold
    # Italic font face
    #italic:
    # Font family
    #
    # If the italic family is not specified, it will fall back to the
    # value specified for the normal font.
    #family: monospace
    # The \`style\` can be specified to pick a specific face.
    #style: Italic
    # Bold italic font face
    #bold_italic:
    # Font family
    #
    # If the bold italic family is not specified, it will fall back to the
    # value specified for the normal font.
    #family: monospace
    # The \`style\` can be specified to pick a specific face.
    #style: Bold Italic

  # Point size
  size: 14.0

  # Offset is the extra space around each character. \`offset.y\` can be thought of
  # as modifying the line spacing, and \`offset.x\` as modifying the letter spacing.
  #offset:
  #  x: 0
  #  y: 0
  # Glyph offset determines the locations of the glyphs within their cells with
  # the default being at the bottom. Increasing \`x\` moves the glyph to the right,
  # increasing \`y\` moves the glyph upwards.
  #glyph_offset:
  #  x: 0
  #  y: 0
  # Thin stroke font rendering (macOS only)
  #
  # Thin strokes are suitable for retina displays, but for non-retina screens
  # it is recommended to set \`use_thin_strokes\` to \`false\`
  #
  # macOS >= 10.14.x:
  #
  # If the font quality on non-retina display looks bad then set
  # \`use_thin_strokes\` to \`true\` and enable font smoothing by running the
  # following command:
  #   \`defaults write -g CGFontRenderingFontSmoothingDisabled -bool NO\`
  #
  # This is a global setting and will require a log out or restart to take
  # effect.
  use_thin_strokes: true

# If \`true\`, bold text is drawn using the bright color variants.
#draw_bold_text_with_bright_colors: false
# Colors (Tomorrow Night Bright)
colors:
  name: Paraiso (light)
  author: Chris Kempson
  primary:
    background: "#e7e9db"
    foreground: "#4f424c"
  cursor:
    text: "#e7e9db"
    cursor: "#4f424c"
  normal:
    black: "#2f1e2e"
    red: "#ef6155"
    green: "#48b685"
    yellow: "#fec418"
    blue: "#06b6ef"
    magenta: "#815ba4"
    cyan: "#5bc4bf"
    white: "#a39e9b"
  bright:
    black: "#776e71"
    red: "#ef6155"
    green: "#48b685"
    yellow: "#fec418"
    blue: "#06b6ef"
    magenta: "#815ba4"
    cyan: "#5bc4bf"
    white: "#e7e9db"

EOF
`)
}

exports.ALACRITY = 'alacritty'

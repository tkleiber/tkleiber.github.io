git config --system diff.tool git-difftool-wrapper
git config --system --replace-all difftool.prompt false
git config --system --replace-all difftool.git-difftool-wrapper.cmd ^
  "\"C://Program Files//Git//cmd//git-difftool-wrapper.cmd\" \"$LOCAL\" \"$REMOTE\"
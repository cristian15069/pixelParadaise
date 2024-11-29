{ pkgs }: {
  deps = [
    pkgs.sqlite.bin
    pkgs.run
    pkgs.php82
  ];
  buildInputs = [
    pkgs.sqlite
  ];
}

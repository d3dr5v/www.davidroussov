{
  description = "personal website";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs?ref=nixos-unstable";
  };

  outputs = { self, nixpkgs }:
    let
      system = "aarch64-darwin";
      pkgs = import nixpkgs { inherit system; };
    in {
      packages.${system}.default = pkgs.stdenv.mkDerivation {
        pname = "davidroussov";
        version = "1.0.0";

        src = ./.;

        buildInputs = [
          pkgs.nodejs_22
        ];

        installPhase = ''
          mkdir -p $out
          cp -r * $out
        '';

        meta = with pkgs.lib; {
          description = "Personal website";
          homepage = "https://davidroussov.com";
        };
      };

      devShell.${system} = pkgs.mkShell {
        buildInputs = [
          pkgs.nodejs_22
        ];
      };
    };
}


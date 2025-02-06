#!/bin/bash
set -e

nix build

AWS_PROFILE=davidroussov aws s3 sync ./result s3://davidroussov --acl public-read

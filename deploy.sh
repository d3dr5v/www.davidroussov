#!/bin/bash
set -e

npm run build

AWS_PROFILE=davidroussov aws s3 sync ./out s3://www.davidroussov.com --acl public-read

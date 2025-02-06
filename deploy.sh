#!/bin/bash
set -e

zip -r ./aws/redirect.zip index.js

npm run build

AWS_PROFILE=davidroussov aws s3 sync ./out s3://davidroussov.com --acl public-read

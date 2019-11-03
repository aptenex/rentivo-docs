#!/bin/bash

echo "Deploying to open source bucket"
AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY aws s3 sync --acl public-read --sse --delete public s3://public-rentivo-docs

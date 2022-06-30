npm run build

aws s3 cp build s3://$BUCKET_NAME --recursive
aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*"
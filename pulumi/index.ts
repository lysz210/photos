import { BucketV2 } from "@pulumi/aws/s3";

// Create an AWS resource (S3 Bucket)
const bucket = new BucketV2("my-bucket");

// Export the name of the bucket
export const bucketName = bucket.id;

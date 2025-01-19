import { BucketV2 } from "@pulumi/aws/s3";

// create photo repositories
// flickr
const flickrRepo = new BucketV2("my-flickr-repo");

// Export the name of the bucket
export const flickrRepoId = flickrRepo.id;

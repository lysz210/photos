import { BucketV2 } from "@pulumi/aws/s3";
import {getZone, Record, RecordType} from "@pulumi/aws/route53";
import { Config } from "@pulumi/pulumi";
const config = new Config('photos')
// create photo repositories
// flickr
const flickrRepo = new BucketV2("my-flickr-repo");

const lysz210Zone = getZone({
    name: "lysz210.name"
})

const ghPagesVerificationRecord = new Record("ghPagesVerificationRecord", {
    zoneId: lysz210Zone.then(zone => zone.zoneId),
    type: RecordType.TXT,
    name: config.requireSecret<string>("ghVerificationHostname"),
    records: [config.requireSecret<string>("ghVerificationValue")],
    ttl: 300
});

const ghPagesPointerRecord = new Record("ghPagesPointerRecord", {
    zoneId: lysz210Zone.then(zone => zone.zoneId),
    type: RecordType.A,
    name: 'photos.gh.lysz210.name',
    records: [
        '185.199.108.153',
        '185.199.109.153',
        '185.199.110.153',
        '185.199.111.153',
    ],
    ttl: 300
})

const ghPagesCnameRecord = new Record("ghPagesCnameRecord", {
    zoneId: lysz210Zone.then(zone => zone.zoneId),
    type: RecordType.CNAME,
    name: 'photos.gh.lysz210.name',
    records: [
        'lysz210.github.io',
    ],
    ttl: 300
})

// Export the name of the bucket
export const flickrRepoId = flickrRepo.id;
export const ghPagesVerification = ghPagesVerificationRecord.name
export const ghPagesPointer = ghPagesPointerRecord.name
export const ghPagesCname = ghPagesCnameRecord.name